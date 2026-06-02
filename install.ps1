$ErrorActionPreference = "Stop"
$dest = Join-Path $HOME ".claude\skills"
$src  = Join-Path $PSScriptRoot "skills"
New-Item -ItemType Directory -Force -Path $dest | Out-Null
$count = 0
Get-ChildItem -Path $src -Directory | ForEach-Object {
    if (Test-Path (Join-Path $_.FullName "SKILL.md")) {
        Copy-Item -Recurse -Force $_.FullName $dest
        Write-Host "  ✓ $($_.Name)"
        $count++
    }
}
Write-Host "已安装 $count 个技能到 $dest"
