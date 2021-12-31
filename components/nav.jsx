import Link from "next/link";
import styles from "../assets/styles/nav.module.less";
import { useEffect, useRef } from "react";

export default function Header() {
  const menu = useRef(null);

  useEffect(() => {
    // First we get the viewport height and we multiple it by 1% to get a value for a vh unit
    let vh = window.innerHeight * 0.01;
    // Then we set the value in the --vh custom property to the root of the document
    document.documentElement.style.setProperty("--vh", `${vh}px`);

    window.addEventListener("resize", () => {
      // We execute the same script as before
      let vh = window.innerHeight * 0.01;
      document.documentElement.style.setProperty("--vh", `${vh}px`);
    });
  }, []);

  return (
    <nav className={styles.nav}>
      <ul ref={menu}>
        <li class={styles.home}>
          <div className={styles.logo}></div>
          <Link href="/">Home</Link>
        </li>
        <div className={styles.mainlist}>
          <li>
            <Link href="/features">Features</Link>
          </li>
          <li className={styles.usecases}>
            <Link href="#" className={styles.usecases__trigger}>
              Use cases ↓
            </Link>
            <div className={styles.usecases__content}>
              <Link href="/usecases/sales">Sales</Link>
              <Link href="/usecases/marketing">Marketing</Link>
              <Link href="/usecases/finance">Finance</Link>
              <Link href="/usecases/hr">HR</Link>
            </div>
          </li>
          <li>
            <Link href="/pricing">Pricing</Link>
          </li>
        </div>
        <li className={styles.cta}>
          <Link href="/contact">Get started 🚀</Link>
        </li>
      </ul>
      <div
        className={styles.hamburger}
        onClick={() => {
          menu.current.style.display =
            menu.current.style.display === "flex" ? "none" : "flex";
          document.body.style.overflow =
            menu.current.style.display === "flex" ? "hidden" : "visible";
        }}
      >
        -
      </div>
    </nav>
  );
}
