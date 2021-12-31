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
            <h1 className={styles.main}>Spacey data for spacey companies</h1>
          </Typing>
          <p className={styles.sub}>
            Enrich your experiences with data from the the spaceflight
            community.
          </p>
          <div className={styles.cta}>
            <div className={styles.start}>
              <Link href="/">Get started</Link>
            </div>
            <div className={styles.pitch}>
              <Link href="/">Watch our pitch video</Link>
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
                <Typing startDelay={500}>Saturn V</Typing>‎
              </div>
              <Typing startDelay={1200} speed={10}>
                <div className={styles.row}>
                  <td className={styles.label}>Name</td>
                  <td>Saturn V</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Manufacturer</td>
                  <td>NASA</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Origin</td>
                  <td>🇺🇸 United States</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Mission</td>
                  <td>Moon Landing</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>First Launch</td>
                  <td>May 5, 1966</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Price</td>
                  <td>Development: $6.417b, Per launch: $185m</td>
                </div>
                <div className={styles.row}>
                  <td className={styles.label}>Missions</td>
                  <td>
                    Apollo 4<br />
                    Apollo 6<br />
                    Apollo 5<br />
                    Apollo 7<br />
                    Apollo 8<br />
                    Apollo 9<br />
                    Apollo 10
                    <br />
                    Apollo 11
                    <br />
                    Apollo 12
                    <br />
                    Apollo 13
                    <br />
                    Apollo 14
                    <br />
                    Apollo 15
                    <br />
                    Apollo 16
                    <br />
                    Apollo 17
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
