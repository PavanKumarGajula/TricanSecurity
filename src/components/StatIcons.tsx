'use client';

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

    </div>
  );
}
