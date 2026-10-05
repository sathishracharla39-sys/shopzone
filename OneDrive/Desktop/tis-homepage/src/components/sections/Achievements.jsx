import { Award, Globe, Trophy } from "lucide-react";
import Reveal from "../animation/Reveal";
import "./Achievements.css";

const achievements = [
  {
    icon: Award,
    title: "Excellence",
    description: "Recognized for educational excellence",
  },
  {
    icon: Trophy,
    title: "Top School",
    description: "Recognized among leading schools",
  },
  {
    icon: Globe,
    title: "Global Exposure",
    description: "Preparing students for a global future",
  },
];

const Achievements = () => {
  return (
    <section className="achievements-section">

      <div className="achievements-container">

        <div className="achievements-heading">
          <p>OUR ACHIEVEMENTS</p>

          <h2>
            A Culture of
            <span> Excellence</span>
          </h2>
        </div>

        <div className="achievement-list">

          {achievements.map((achievement, index) => {
  const Icon = achievement.icon;

  return (
    <Reveal
      key={achievement.title}
      delay={index * 0.12}
    >
      <div className="achievement-item">

        <div className="achievement-icon">
          <Icon size={25} />
        </div>

        <div>
          <h3>{achievement.title}</h3>
          <p>{achievement.description}</p>
        </div>

      </div>
    </Reveal>
  );
})}

        </div>

      </div>

    </section>
  );
};

export default Achievements;