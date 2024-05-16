import { FunctionComponent } from "react";
import Home1 from "../components/Home1";
import FrameComponent5 from "../components/FrameComponent5";
import FrameComponent4 from "../components/FrameComponent4";
import FrameComponent2 from "../components/FrameComponent2";
import Footer from "../components/Footer";
import styles from "./LandingPageDark.module.css";

const LandingPageDark: FunctionComponent = () => {
  return (
    <div className={styles.landingPageDark}>
      <Home1 />
      <FrameComponent5 />
      <FrameComponent4 />
      <FrameComponent2 />
      <Footer />
      <section className={styles.copyright}>
        <div className={styles.copyrightChild} />
        <div className={styles.ramishaAllRightsContainer}>
          <span>{`© 2023 `}</span>
          <b className={styles.ramisha}>
            <span>Ramisha</span>
            <span className={styles.span}>{` `}</span>
          </b>
          <span>All Rights Reserved , Inc.</span>
        </div>
      </section>
    </div>
  );
};

export default LandingPageDark;
