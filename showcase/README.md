# 真实对照 · 装技能前 vs 装技能后

下面是 AI 编程时最常见的 5 类翻车,以及对应技能如何避免。

---

## 1. AI 调用了根本不存在的方法

**场景:** 你让 AI 用 `httpx` 发一个 POST 请求并解析 JSON 响应体。AI 写得头头是道,本地一跑直接炸。

### ❌ 没装技能 — AI 这样干

```python
import httpx

response = httpx.post("https://api.example.com/data", json={"key": "value"})
# AI 编造了 .json_body 属性,httpx 根本没有这东西
payload = response.json_body
print(payload["result"])
```

**后果:** 运行即 `AttributeError: <Response [200 OK]> object has no attribute 'json_body'`,CI 红灯,同事一脸问号。

### ✅ 装了 `core-discipline` 后

```python
import httpx

response = httpx.post("https://api.example.com/data", json={"key": "value"})
response.raise_for_status()
# .json() 是 httpx Response 的真实方法
payload = response.json()
print(payload["result"])
```

**为什么对:** `core-discipline` 要求 AI 只使用文档可查证的 API,不臆造方法名。

→ 技能: [`core-discipline`](../skills/core-discipline/SKILL.md)

---

## 2. 用 `except: pass` 把报错藏起来就叫"修好了"

**场景:** 你的数据导入脚本偶尔崩溃,让 AI 修一下。AI 回来说"修好了"——再跑一次,确实不报错了。

### ❌ 没装技能 — AI 这样干

```python
def import_records(records):
    for record in records:
        try:
            db.session.add(Record(**record))
            db.session.commit()
        except:
            pass  # AI: "加个 try/except 就不会崩了"
```

**后果:** 写入失败的记录被静默丢弃,数据库悄悄缺行,生产环境数据不一致,发现时已经无从追溯。

### ✅ 装了 `systematic-debugging` 后

```python
import logging

logger = logging.getLogger(__name__)

def import_records(records):
    for record in records:
        try:
            db.session.add(Record(**record))
            db.session.commit()
        except sqlalchemy.exc.IntegrityError as e:
            db.session.rollback()
            logger.error("导入失败 record=%s err=%s", record.get("id"), e)
            raise  # 让调用方决定是跳过还是中止,不在这里吞掉
```

**为什么对:** `systematic-debugging` 要求先定位根因(这里是 IntegrityError),显式处理、记录可追查的日志,绝不用空 except 掩盖问题。

→ 技能: [`systematic-debugging`](../skills/systematic-debugging/SKILL.md)

---

## 3. 漏写 WHERE 子句 / 循环里逐条查库

**场景:** 运营让你把某批用户的 `status` 字段更新为 `inactive`。AI 写了条 SQL,或者你让它生成一个展示用户列表的接口。

### ❌ 没装技能 — AI 这样干

```sql
-- 场景 A:更新漏写 WHERE,全表被改
UPDATE users SET status = 'inactive';

-- 场景 B:N+1 查询,循环里逐行打库
```

```python
# 场景 B 对应的 Python
def get_order_list(user_ids):
    orders = []
    for uid in user_ids:                        # 100 个用户 = 100 次查询
        user = db.query(User).filter_by(id=uid).first()
        orders.append({"user": user.name, "count": len(user.orders)})
    return orders
```

**后果:** 场景 A 全表 `status` 被覆盖,无事务保护则无法回滚;场景 B 接口在数据量上来后响应时间从 20ms 飙到 8s。

### ✅ 装了 `database-safety` 后

```sql
-- 先 SELECT 确认影响范围
SELECT id, status FROM users WHERE created_at < '2024-01-01' AND status = 'active';

-- 确认无误后带 WHERE 更新
UPDATE users SET status = 'inactive' WHERE created_at < '2024-01-01' AND status = 'active';
```

```python
# 批量查询,一次打库
def get_order_list(user_ids):
    users = (
        db.query(User)
        .options(joinedload(User.orders))       # 一次 JOIN 拿完
        .filter(User.id.in_(user_ids))
        .all()
    )
    return [{"user": u.name, "count": len(u.orders)} for u in users]
```

**为什么对:** `database-safety` 强制先 SELECT 验证、写 WHERE 条件、用批量查询替代循环。

→ 技能: [`database-safety`](../skills/database-safety/SKILL.md)

---

## 4. 把密钥直接写进源码或打进前端 bundle

**场景:** 你让 AI 帮你快速接入 OpenAI API,或者写一个调用第三方支付的前端页面。

### ❌ 没装技能 — AI 这样干

```python
# 后端:密钥硬编码进源码,随手就 push 到 GitHub
import openai

openai.api_key = "sk-proj-<你的真实密钥就这样躺在代码里>"  # 示例占位,真实场景这里是一长串真 key

def chat(prompt):
    return openai.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
```

```javascript
// 前端:密钥打进 bundle,F12 一看全是
const STRIPE_SECRET = "sk_live_<真·线上密钥被打进前端 bundle>";  // 示例占位

async function chargeCard(token, amount) {
  const res = await fetch("https://api.stripe.com/v1/charges", {
    method: "POST",
    headers: { Authorization: `Bearer ${STRIPE_SECRET}` },
    body: new URLSearchParams({ source: token, amount }),
  });
}
```

**后果:** 代码一上 GitHub 公仓,GitGuardian/TruffleHog 秒扫到,密钥被盗,账单暴增,客户数据泄露。

### ✅ 装了 `secrets-handling` 后

```python
# 后端:走环境变量,源码里一个字符密钥都没有
import os
import openai

client = openai.OpenAI(api_key=os.environ["OPENAI_API_KEY"])

def chat(prompt):
    return client.chat.completions.create(
        model="gpt-4o",
        messages=[{"role": "user", "content": prompt}]
    )
```

```javascript
// 前端:Stripe 只用 publishable key(公开无害),
// 真正的扣款请求必须走后端服务器,绝不在前端碰 secret key
const stripe = Stripe(process.env.NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY);

async function chargeCard(token, amount) {
  // 调自己的后端接口,由后端持有 secret key 做实际请求
  const res = await fetch("/api/charge", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ token, amount }),
  });
}
```

**为什么对:** `secrets-handling` 明确区分可公开的 publishable key 与必须保密的 secret key,后者只走服务端环境变量,绝不进代码库。

→ 技能: [`secrets-handling`](../skills/secrets-handling/SKILL.md)

---

## 5. "顺手"重构无关代码,搞出回归 bug

**场景:** 老项目里有个用户注册接口,你让 AI 只加一个邮箱格式校验。AI 回来后说"顺便把这个文件整理了一下"。

### ❌ 没装技能 — AI 这样干

```python
# AI 说:只是"整理了下格式和命名",其实动了一堆逻辑

# 原来的代码(正常工作):
def register_user(data):
    username = data["username"].strip()
    password = hash_password(data["password"])
    role = data.get("role", "viewer")           # 默认 viewer
    db.insert("users", username=username, password=password, role=role)
    send_welcome_email(username, data["email"])
    return {"ok": True}

# AI 改后(加了邮箱校验,但"顺手"改了参数顺序和默认值):
def register_user(data):
    email = data["email"]
    if "@" not in email:
        raise ValueError("invalid email")
    username = data["username"].strip()
    password = hash_password(data["password"])
    # AI 把 "viewer" 改成了 "user",角色权限体系悄悄错位
    role = data.get("role", "user")
    # AI 调换了 send_welcome_email 的参数顺序
    send_welcome_email(data["email"], username)  # 原签名是 (username, email)
    db.insert("users", username=username, password=password, role=role)
    return {"ok": True}
```

**后果:** 邮件发送参数顺序错,新注册用户收到的欢迎邮件 username/email 对调;默认角色从 `viewer` 变 `user`,权限悄悄放大——两个 bug 都跟你要求的改动无关,排查时根本往那儿想不到。

### ✅ 装了 `legacy-safe-edit` 后

```python
# AI 只动了最小必要的地方,其余代码一行未改

def register_user(data):
    # ← 新增:邮箱格式校验(仅此一处改动)
    email = data["email"]
    if "@" not in email or "." not in email.split("@")[-1]:
        raise ValueError(f"邮箱格式不合法: {email}")

    username = data["username"].strip()
    password = hash_password(data["password"])
    role = data.get("role", "viewer")           # 未动
    db.insert("users", username=username, password=password, role=role)
    send_welcome_email(username, data["email"]) # 未动
    return {"ok": True}
```

**为什么对:** `legacy-safe-edit` 要求 AI 做外科手术式修改:只改需求涉及的行,不碰无关逻辑,不"顺手"重构命名或参数顺序。

→ 技能: [`legacy-safe-edit`](../skills/legacy-safe-edit/SKILL.md)

---

想看全部 30 个技能 → https://wade-devcode.github.io/awesome-coding-skills-cn/
