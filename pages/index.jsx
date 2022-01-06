import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import styles from "../assets/styles/index.module.less";
import Nav from "../components/nav";
import Projects from "../components/Projects";
import Contact from "../components/contact";
import Skills from "../components/skills";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Projects />
      <Skills />
      <Contact />
    </>
  );
}
