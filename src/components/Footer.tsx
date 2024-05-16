import { FunctionComponent, useCallback } from "react";
import styles from "./Footer.module.css";

const Footer: FunctionComponent = () => {
  const onHomeText1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='home']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutMeContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsText2Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTestimonialsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='testimonialsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactMeContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.footer}>
      <div className={styles.container}>
        <div className={styles.content}>
          <h2 className={styles.ramisha}>
            <span className={styles.r}>R</span>
            <span className={styles.amisha}>amisha</span>
          </h2>
        </div>
        <div className={styles.navigation}>
          <div className={styles.home} onClick={onHomeText1Click}>
            Home
          </div>
          <div className={styles.aboutUs} onClick={onAboutUsText1Click}>
            About us
          </div>
          <div className={styles.services} onClick={onServicesText1Click}>
            Services
          </div>
          <div className={styles.projects} onClick={onProjectsText2Click}>
            Projects
          </div>
          <div
            className={styles.testimonials}
            onClick={onTestimonialsText1Click}
          >
            Testimonials
          </div>
          <div className={styles.contact} onClick={onContactText1Click}>
            Contact
          </div>
        </div>
        <div className={styles.social}>
          <div className={styles.icons}>
            <img
              className={styles.facebookNegative}
              loading="lazy"
              alt=""
              src="/facebook--negative.svg"
            />
            <img
              className={styles.twitterNegative}
              loading="lazy"
              alt=""
              src="/twitter--negative.svg"
            />
            <img
              className={styles.instagramNegative}
              loading="lazy"
              alt=""
              src="/instagram--negative.svg"
            />
            <img
              className={styles.linkedinNegative}
              loading="lazy"
              alt=""
              src="/linkedin--negative.svg"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Footer;
