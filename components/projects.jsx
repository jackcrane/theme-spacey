import styles from "../assets/styles/projects.module.less";
import { useState } from "react";
import Icon from "@icons-pack/react-simple-icons";
import Image from "next/image";

import jv from "../assets/images/jv.png";

export default function Projects() {
  const [projects, setProjects] = useState([
    {
      name: "Ski Perfect North Slopes",
      subtitle: "Active Project",
      image: "/images/pns.png",
      description:
        "A mobile app for a local Ski Area, giving guests access to snow information, live photos, location information, and safety resources right at their fingertips.",
      links: [
        {
          title: "Test Flight",
          url: "https://testflight.apple.com/join/xlYPub3C",
        },
      ],
      stack: [
        "react",
        "javascript",
        "expo",
        "puppeteer",
        "docker",
        "kubernetes",
        "mongodb",
        "deno",
        "apple",
        "android",
        "digitalocean",
      ],
    },
    {
      name: "JVerify",
      subtitle: "Active Project",
      image: "/images/jv.png",
      description:
        "JVerify is an effortless, secure, and reliable phone number verification service (VaaS) designed to make it easier to create a more reliable web.",
      links: [
        {
          title: "Live site",
          url: "https://jverify.us",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/08/18/jverify.html",
        },
      ],
      stack: [
        "npm",
        "nodedotjs",
        "javascript",
        "express",
        "html5",
        "less",
        "mysql",
        "twilio",
        "stripe",
        "digitalocean",
        "simpleanalytics",
      ],
    },
    {
      name: "OG Image Generator",
      subtitle: "Active Project",
      image: "/images/og.png",
      description:
        "OG Image Generator is an 'opengraph image generator as a service', providing an API endpoint to make custom site preview images without the need for design skills.",
      links: [
        {
          title: "Live site",
          url: "https://og-image.xyz",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/08/20/og-image.html",
        },
        {
          title: "Github Repo",
          url: "https://github.com/jackcrane/og-image",
        },
      ],
      stack: [
        "html5",
        "nodedotjs",
        "javascript",
        "express",
        "mysql",
        "react",
        "digitalocean",
        "kubernetes",
        "docker",
      ],
    },
    {
      name: "GitHub profile tik-tak-toe",
      subtitle: "Active Project",
      image: "/images/t.png",
      description:
        "A somewhat fun game for visitors to my GitHub profile and blog post to play",
      links: [
        {
          title: "Play Live",
          url: "https://github.com/jackcrane",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/10/19/gh-tik-tak-toe.html",
        },
        {
          title: "Github Repo",
          url: "https://github.com/jackcrane/gh-tik-tak-toe",
        },
      ],
      stack: ["markdown", "github", "javascript", "cloudflare"],
    },
    {
      name: "Scarecrow Row",
      subtitle: "Active Project",
      image: "/images/sr.png",
      description:
        "Scarecrow Row is a fun fall installation of unique and creative scarecrows set along the 2-mile bike and walking trail of Otto Armleder Park, located on Cincinnati’s eastside next to Lunken Airport and Playfield. Thanks to funds raised by this website, we were able to donate over 8000 dollars to a local nonprofit helping those battling addiction.",
      links: [
        {
          title: "Live site",
          url: "https://scarecrowrow.org",
        },
        {
          title: "Blog post",
          url: "https://blog.jackcrane.rocks/2021/08/14/scarecrow-row.html",
        },
      ],
      stack: [
        "html5",
        "css3",
        "javascript",
        "stripe",
        "github",
        "digitalocean",
      ],
    },
    {
      name: "MTS Express",
      subtitle: "Active Project",
      image: "/images/mts.png",
      description:
        "MTS Express is a mobile app for Myers Tire Supply that allows sales reps to quickly and easily order new products for their customers via a barcode scanner, cart management, and database integration.",
      links: [],
      stack: [
        "react",
        "javascript",
        "expo",
        "nodedotjs",
        "mysql",
        "docker",
        "kubernetes",
        "digitalocean",
      ],
    },
    {
      name: "FTC Explorer",
      subtitle: "Active Project",
      image: "/images/ftc.png",
      description:
        "FTC Explorer is a small app that allows users to search for FTC events and teams by name, location, or date.",
      links: [],
      stack: ["react", "javascript", "expo", "ios"],
    },
    {
      name: "FTCLayer Docs",
      subtitle: "Active Project",
      image: "/images/ftcl.png",
      description:
        "FTCLayer is a Java Library that simplifies development of FTC code. I created the documentation for the library with the help of Docusaurus.",
      links: [
        {
          title: "Live site",
          url: "https://ftclayer-docs.pages.dev/",
        },
      ],
      stack: ["react", "javascript", "github"],
    },
    {
      name: "Profile v5",
      subtitle: "This Project",
      image: "/images/v5.png",
      description:
        "My current personal website in hopes of sharing a little snippet into my life and passions!",
      links: [],
      stack: ["react", "javascript", "nextdotjs", "html5", "lessd"],
    },
  ]);

  return (
    <div className={styles.projects} id="projects">
      <div className={styles.feature}>
        <h1>Projects</h1>
        <br />
        <p style={{ display: "block" }}>
          Check out my huge range of projects, many personal projects, some for
          clients.
        </p>
      </div>
      {projects.map((project, i) => (
        <div className={styles.project} key={i}>
          <div className={styles.text}>
            <p className={styles.subtitle}>{project.subtitle}</p>
            <h2>{project.name}</h2>
            <br />
            <p>{project.description}</p>
            <div className={styles.stack}>
              {project.stack.map((tech, i) => (
                <img
                  height="24"
                  width="24"
                  key={i}
                  src={`https://unpkg.com/simple-icons@v6/icons/${tech}.svg`}
                />
              ))}
            </div>
            <div className={styles.links}>
              {project.links.map((link, i) => (
                <a
                  key={i}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  {link.title}
                </a>
              ))}
            </div>
          </div>
          <div className={styles.image}>
            <img
              src={project.image}
              alt={project.name}
              className={styles.screenshot}
            />
          </div>
        </div>
      ))}
    </div>
  );
}
