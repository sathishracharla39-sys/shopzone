import { HeartPulse, Users, Trophy, Trees } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Stats.css";

const stats = [
  {
    icon: Trees,
    number: "22",
    label: "Acres",
    description: "Lush Green Campus",
  },
  {
    icon: Trophy,
    number: "16+",
    label: "Sports",
    description: "For Holistic Development",
  },
  {
    icon: HeartPulse,
    number: "24×7",
    label: "Medical Assistance",
    description: "For Student Wellbeing",
  },
  {
    icon: Users,
    number: "1:8",
    label: "Student-Teacher Ratio",
    description: "Personalized Attention",
  },
];

const Stats = () => {
  return (
    <section className="stats-section">
      <div className="stats-container">

  {stats.map((stat, index) => {
    const Icon = stat.icon;

    return (
      <Reveal
        key={stat.label}
        delay={index * 0.08}
      >
        <div className="stat-card">

          <div className="stat-icon">
            <Icon size={26} />
          </div>

          <div className="stat-number">
            {stat.number}
          </div>

          <h3>{stat.label}</h3>

          <p>{stat.description}</p>

        </div>
      </Reveal>
    );
  })}

</div>
    </section>
  );
};

export default Stats;