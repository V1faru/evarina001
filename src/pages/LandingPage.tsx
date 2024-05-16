import { FunctionComponent } from "react";
import Home from "../components/Home";
import About from "../components/About";
import ContactMe from "../components/ContactMe";
import FrameComponent from "../components/FrameComponent";
import styles from "./LandingPage.module.css";

const LandingPage: FunctionComponent = () => {
  return (
    <div className={styles.landingPage}>
      <main className={styles.main}>
        <Home />
        <About />
      </main>
      <ContactMe />
      <FrameComponent />
    </div>
  );
};

export default LandingPage;
