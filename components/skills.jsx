import styles from "../assets/styles/skills.module.less";
import { useState } from "react";

export default function Skills() {
  const [skills, setSkills] = useState([
    {
      name: "Javascript",
      slug: "javascript",
    },
    {
      name: "React",
      slug: "react",
    },
    {
      name: "React Native (using Expo)",
      slug: "expo",
    },
    {
      name: "Next.js",
      slug: "nextdotjs",
    },
    {
      name: "Deno",
      slug: "deno",
    },
    {
      name: "Node.js",
      slug: "nodedotjs",
    },
    {
      name: "Express",
      slug: "express",
    },
    {
      name: "MongoDB",
      slug: "mongodb",
    },
    {
      name: "MySQL",
      slug: "mysql",
    },
    {
      name: "Twilio",
      slug: "twilio",
    },
    {
      name: "Stripe",
      slug: "stripe",
    },
    {
      name: "DigitalOcean",
      slug: "digitalocean",
    },
    {
      name: "Docker",
      slug: "docker",
    },
    {
      name: "Kubernetes",
      slug: "kubernetes",
    },
    {
      name: "PHP",
      slug: "php",
    },
    {
      name: "HTML",
      slug: "html5",
    },
    {
      name: "CSS",
      slug: "css3",
    },
    {
      name: "LESS",
      slug: "less",
    },
  ]);

  return (
    <div className={styles.skills} id="skills">
      <div className={styles.feature}>
        <h1>Skills</h1>
        <br />
        <div className={styles.skillsList}>
          {skills.map((skill, i) => (
            <div className={styles.skill} key={i}>
              <div>
                <img
                  height="24"
                  width="24"
                  key={i}
                  src={`https://unpkg.com/simple-icons@v6/icons/${skill.slug}.svg`}
                />
                <p>{skill.name}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
