import { useEffect, useState } from "react";

export default function Popup() {
  const [show, setShow] = useState(false);

  useEffect(() => {
    const isMobile =
      /Android|iPhone|iPad|iPod|Mobile/i.test(navigator.userAgent) ||
      window.innerWidth < 768;
    if (isMobile) setShow(true);
  }, []);

  if (!show) return null;

  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        background: "rgba(26,26,26,0.45)",
        backdropFilter: "blur(4px)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        zIndex: 9999,
        padding: "1.25rem",
      }}
    >
      <div
        className="glass grain"
        style={{
          position: "relative",
          maxWidth: "340px",
          width: "100%",
          borderRadius: "1rem",
          padding: "1.75rem 1.5rem",
          textAlign: "center",
        }}
      >
        <span className="chip" style={{ marginBottom: "1rem" }}>
          <span className="dot pink" />
          Viewport Notice
        </span>

        <p
          className="font-display"
          style={{
            fontSize: "1.4rem",
            fontWeight: 500,
            color: "var(--ink)",
            margin: "0.5rem 0 0.75rem",
          }}
        >
          Best viewed on desktop
        </p>

        <p
          style={{
            fontSize: "0.85rem",
            color: "var(--ink-2)",
            lineHeight: 1.55,
            margin: "0 0 1.5rem",
          }}
        >
          This site's graph interactions are designed for larger screens.
          Some layouts may look different on mobile.
        </p>

        <button
          onClick={() => setShow(false)}
          className="font-mono hairline"
          style={{
            background: "var(--bg-card)",
            color: "var(--ink)",
            border: "1px solid var(--hair)",
            borderRadius: "9999px",
            padding: "0.5rem 1.25rem",
            fontSize: "0.7rem",
            letterSpacing: "0.04em",
            textTransform: "uppercase",
            cursor: "pointer",
          }}
        >
          Continue Anyway
        </button>
      </div>
    </div>
  );
}
