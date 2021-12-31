import Head from "next/head";
import Link from "next/link";
import Header from "../components/header";
import styles from "../assets/styles/index.module.less";
import Nav from "../components/nav";
import Features from "../components/features";
import Contact from "../components/contact";

export default function Home() {
  return (
    <>
      <Nav />
      <Header />
      <Features />
      <Contact />
    </>
  );
}
