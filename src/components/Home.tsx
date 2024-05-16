import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import GroupComponent from "./GroupComponent";
import styles from "./Home.module.css";

const Home: FunctionComponent = () => {
  const onHomeTextClick = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='home']");
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onAboutUsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='aboutMeContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onServicesTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='servicesContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onProjectsText1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='projectsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onTestimonialsTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='testimonialsContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  const onContactTextClick = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactMeContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <section className={styles.home} data-scroll-to="home">
      <img
        className={styles.youngContentCreatorSmilingIcon}
        alt=""
        src="/youngcontentcreatorsmilingblondegirlwithheadphonesworkingherlaptoptablewithcamera-1@2x.png"
      />
      <img
        className={styles.homeChild}
        loading="lazy"
        alt=""
        src="/rectangle-7.svg"
      />
      <header className={styles.homepageContent}>
        <div className={styles.navigationContent}>
          <div className={styles.topNavigation}>
            <h2 className={styles.ramisha}>
              <span className={styles.r}>R</span>
              <span className={styles.amisha}>amisha</span>
            </h2>
          </div>
          <div className={styles.navigationMenu}>
            <div className={styles.homeWrapper}>
              <div className={styles.home1} onClick={onHomeTextClick}>
                Home
              </div>
            </div>
            <div className={styles.aboutUsWrapper}>
              <div className={styles.aboutUs} onClick={onAboutUsTextClick}>
                About us
              </div>
            </div>
            <div className={styles.servicesWrapper}>
              <div className={styles.services} onClick={onServicesTextClick}>
                Services
              </div>
            </div>
            <div className={styles.projectsWrapper}>
              <div className={styles.projects} onClick={onProjectsText1Click}>
                Projects
              </div>
            </div>
            <div className={styles.testimonialsWrapper}>
              <div
                className={styles.testimonials}
                onClick={onTestimonialsTextClick}
              >
                Testimonials
              </div>
            </div>
            <div className={styles.contactWrapper}>
              <div className={styles.contact} onClick={onContactTextClick}>
                Contact
              </div>
            </div>
            <Button
              className={styles.navigationMenuChild}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "21",
                background: "#dc3635",
                borderRadius: "0px 0px 0px 0px",
                "&:hover": { background: "#dc3635" },
                height: 52,
              }}
            >
              Download CV
            </Button>
          </div>
        </div>
      </header>
      <GroupComponent />
    </section>
  );
};

export default Home;
