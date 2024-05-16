import { FunctionComponent, useCallback } from "react";
import styles from "./FrameComponent.module.css";

const FrameComponent: FunctionComponent = () => {
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
    <footer className={styles.footerContainer}>
      <div className={styles.footerContent}>
        <div className={styles.footerContentChild} />
        <div className={styles.footerTop}>
          <h2 className={styles.ramisha}>
            <span className={styles.r}>R</span>
            <span className={styles.amisha}>amisha</span>
          </h2>
        </div>
        <div className={styles.footerLinks}>
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
        <div className={styles.socialMediaContainer}>
          <div className={styles.socialMediaIcons}>
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
      <div className={styles.copyrightContainer}>
        <div className={styles.ramishaAllRightsContainer}>
          <span>{`© 2023 `}</span>
          <b className={styles.ramisha1}>{`Ramisha `}</b>
          <span>All Rights Reserved , Inc.</span>
        </div>
      </div>
    </footer>
  );
};

export default FrameComponent;
