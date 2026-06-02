export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="aurora-blob"
        style={{ width: 520, height: 520, top: -160, left: "8%", background: "#6d4bff" }}
      />
      <div
        className="aurora-blob"
        style={{ width: 460, height: 460, top: -120, right: "6%", background: "#0ea5e9", animationDelay: "-6s" }}
      />
      <div
        className="aurora-blob"
        style={{ width: 420, height: 420, top: 120, left: "38%", background: "#14b8a6", animationDelay: "-11s", opacity: 0.4 }}
      />
      <div className="absolute inset-0 grid-bg" />
    </div>
  );
}
