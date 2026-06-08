import { DollarSign, Award, Building2, Clock } from "lucide-react";

const stats = [
  { icon: DollarSign, value: "$175K+", label: "Given back to the community in technology upgrades" },
  { icon: Award,      value: "10+",    label: "Industry certifications" },
  { icon: Building2,  value: "100K",   label: "Sq ft — largest single campus secured" },
  { icon: Clock,      value: "24/7",   label: "Monitoring and incident response" },
];

export default function StatIcons() {
  return (
    <div className="sc-grid">
      {stats.map(({ icon: Icon, value, label }) => (
        <div key={value} className="sc-item fade-up">
          <div className="sc-icon">
            <Icon size={22} strokeWidth={1.6} />
          </div>
          <p className="sc-value">{value}</p>
          <p className="sc-label">{label}</p>
        </div>
      ))}

      <style>{`
        .sc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 0;
          border: 1px solid var(--color-hairline);
          border-radius: 16px;
          overflow: hidden;
        }
        .sc-item {
          display: flex; flex-direction: column; align-items: center;
          text-align: center; padding: 40px 24px;
          border-right: 1px solid var(--color-hairline);
        }
        .sc-item:last-child { border-right: none; }
        .sc-icon {
          width: 44px; height: 44px; border-radius: 10px;
          background: var(--color-surface-1);
          box-shadow: inset 0 0 0 1px var(--color-hairline);
          display: flex; align-items: center; justify-content: center;
          color: var(--color-blue-400);
          margin-bottom: 20px;
        }
        .sc-value {
          font-family: var(--font-display); font-weight: 600;
          font-size: clamp(28px, 3vw, 40px); letter-spacing: -1px;
          color: var(--color-blue-400); line-height: 1;
          margin-bottom: 10px;
        }
        .sc-label {
          font-family: var(--font-body); font-size: 13px;
          color: var(--color-ink-muted); line-height: 1.55;
          max-width: 150px;
        }
        @media (max-width: 768px) {
          .sc-grid { grid-template-columns: repeat(2, 1fr); }
          .sc-item:nth-child(2) { border-right: none; }
          .sc-item:nth-child(1),
          .sc-item:nth-child(2) { border-bottom: 1px solid var(--color-hairline); }
        }
        @media (max-width: 420px) {
          .sc-grid { grid-template-columns: 1fr; }
          .sc-item { border-right: none; border-bottom: 1px solid var(--color-hairline); }
          .sc-item:last-child { border-bottom: none; }
        }
      `}</style>
    </div>
  );
}
