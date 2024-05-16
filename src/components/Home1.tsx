import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./Home1.module.css";

const Home1: FunctionComponent = () => {
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

  const onGroupButton1Click = useCallback(() => {
    const anchor = document.querySelector("[data-scroll-to='background']");
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
      <header className={styles.homeInner}>
        <div className={styles.frameParent}>
          <div className={styles.ramishaWrapper}>
            <h2 className={styles.ramisha}>
              <span className={styles.r}>R</span>
              <span className={styles.amisha}>amisha</span>
            </h2>
          </div>
          <div className={styles.frameGroup}>
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
            <div className={styles.rectangleParent}>
              <div className={styles.frameChild} />
              <div className={styles.downloadCv}>Download CV</div>
            </div>
          </div>
        </div>
      </header>
      <div className={styles.frameContainer}>
        <div className={styles.freelaneUiuxDesignerParent}>
          <h1 className={styles.freelaneUiuxDesigner}>
            Freelane UI/UX Designer
          </h1>
          <h1 className={styles.hiIAm}>Hi, I am Ramisha</h1>
        </div>
        <div className={styles.frameWrapper}>
          <div className={styles.loremIpsumDolorSitAmetCoParent}>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan, risus sem sollicitudin lacus, ut
                interdum tellus elit sed risus.
              </p>
            </div>
            <div className={styles.frameDiv}>
              <Button
                className={styles.frameItem}
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
                Hire me
              </Button>
              <Button
                className={styles.frameInner}
                disableElevation={true}
                variant="contained"
                sx={{
                  textTransform: "none",
                  color: "#000",
                  fontSize: "21",
                  background: "#fef4e6",
                  borderRadius: "0px 0px 0px 0px",
                  "&:hover": { background: "#fef4e6" },
                  height: 52,
                }}
                onClick={onGroupButton1Click}
              >
                Contact me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Home1;
