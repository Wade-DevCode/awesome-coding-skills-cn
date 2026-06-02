export default function Aurora() {
  return (
    <div className="pointer-events-none absolute inset-0 overflow-hidden">
      <div
        className="aurora-blob"
        style={{ width: 540, height: 540, top: -180, left: "6%", background: "#ff7849" }}
      />
      <div
        className="aurora-blob"
        style={{ width: 460, height: 460, top: -120, right: "8%", background: "#e8b04b", animationDelay: "-7s" }}
      />
      <div
        className="aurora-blob"
        style={{ width: 420, height: 420, top: 140, left: "40%", background: "#d2603f", animationDelay: "-13s", opacity: 0.32 }}
      />
      <div className="absolute inset-0 grain" />
    </div>
  );
}
