import Link from "next/link";
import Image from "next/image";
import styles from "../assets/styles/header.module.less";
import play from "../assets/icons/play.svg";
import Code from "../components/json-preview";
import Typing from "react-typing-animation";
import { useEffect, useRef } from "react";

export default function Header() {
  const jsonp = useRef(null);
  const uip = useRef(null);

  useEffect(() => {
    if (jsonp.current) {
      jsonp.current.addEventListener("scroll", (evt) => {
        let originalHeight = evt.target.offsetHeight;
        let currentHeight = evt.target.querySelector("pre").offsetHeight;

        let currentTop = evt.target.scrollTop;
        if (originalHeight !== currentHeight) {
          uip.current.scroll(0, currentTop);
        }
      });
    }
    if (uip.current) {
      uip.current.addEventListener("scroll", (evt) => {
        let originalHeight = evt.target.offsetHeight;
        let currentHeight = evt.target.querySelector("div").offsetHeight;

        let currentTop = evt.target.scrollTop;
        if (originalHeight !== currentHeight) {
          jsonp.current.scroll(0, currentTop);
        }
      });
    }
  }, []);

  return (
    <div className={styles.header}>
      <main className={styles.text}>
        <div>
          <Typing speed={25}>
            <h1 className={styles.main}>Jack Crane</h1>
          </Typing>
          <p className={styles.sub}>
            Student, athlete, programmer, and proud robot nerd!
          </p>
          <div className={styles.cta}>
            <div className={styles.start}>
              <Link href="/">About me</Link>
            </div>
            <div className={styles.pitch}>
              <Link href="/">Skillset</Link>
            </div>
          </div>
        </div>
      </main>
      <main className={styles.preview}>
        <div className={styles.previewinside}>
          <div className={styles.previewcode}>
            <div className={styles.inside}>
              <div className={styles.in} ref={jsonp}>
                <pre>
                  <Code />
                </pre>
              </div>
            </div>
          </div>
          <div className={styles.previewui}>
            <div className={styles.previewuiinner} ref={uip}>
              <div className={styles.input}>
                <Typing startDelay={500}>Jack Crane</Typing>‎
              </div>
              <Typing startDelay={1200} speed={10}>
                <div className={styles.row}>
                  <td className={styles.label}>Name</td>
                  <td>Jack Crane</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Home</td>
                  <td>Cincinnati, Ohio, United States</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Age</td>
                  <td>18</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Education</td>
                  <td>
                    High School at Summit Country Day School
                    <br />
                    Flight Training at First Flight Aviation & Lunken Flight
                    Training Center
                    <br />
                  </td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Dreams</td>
                  <td>
                    Fly F-16s in the air force
                    <br />
                    Become an engineer at a cutting-edge company
                    <br />
                    Start a business
                  </td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Passions</td>
                  <td>
                    Programming
                    <br />
                    Robotics
                    <br />
                    Aviation
                    <br />
                    Building
                    <br />
                    Learning
                  </td>
                </div>
              </Typing>
              <br />
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
