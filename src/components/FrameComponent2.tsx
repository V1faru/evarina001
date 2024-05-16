import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import FrameComponent3 from "./FrameComponent3";
import styles from "./FrameComponent2.module.css";

const FrameComponent2: FunctionComponent = () => {
  return (
    <section className={styles.frameParent}>
      <div className={styles.testimonialsWrapper}>
        <div
          className={styles.testimonials}
          data-scroll-to="testimonialsContainer"
        >
          <div className={styles.testimonialsChild} />
          <div className={styles.testimonialsInner}>
            <div className={styles.frameGroup}>
              <div className={styles.testimonialsContainer}>
                <h1 className={styles.testimonials1}>Testimonials</h1>
              </div>
              <div
                className={styles.loremIpsumDolor}
              >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. `}</div>
            </div>
          </div>
          <div className={styles.frameContainer}>
            <div className={styles.frameWrapper}>
              <div className={styles.ellipseParent}>
                <div className={styles.frameChild} />
                <img
                  className={styles.frameItem}
                  loading="lazy"
                  alt=""
                  src="/polygon-1.svg"
                />
              </div>
            </div>
            <FrameComponent3
              group35="/group-35.svg"
              maskGroup="/mask-group@2x.png"
            />
            <div className={styles.frameDiv}>
              <FrameComponent3
                group35="/group-35-1.svg"
                maskGroup="/mask-group-1@2x.png"
                propFlex="unset"
                propMinWidth="unset"
                propAlignSelf="stretch"
                propPadding="var(--padding-89xl) var(--padding-sm) var(--padding-2xl) var(--padding-5xl-7)"
              />
            </div>
            <FrameComponent3
              group35="/group-35-2.svg"
              maskGroup="/mask-group-2@2x.png"
              propFlex="1"
              propMinWidth="188px"
              propAlignSelf="unset"
              propPadding="var(--padding-89xl) var(--padding-sm) var(--padding-2xl) var(--padding-5xl-3)"
            />
            <FrameComponent3
              group35="/group-35-3.svg"
              maskGroup="/mask-group-3@2x.png"
              propFlex="1"
              propMinWidth="188px"
              propAlignSelf="unset"
              propPadding="var(--padding-89xl) var(--padding-sm) var(--padding-2xl) var(--padding-5xl-3)"
            />
            <div className={styles.frameWrapper1}>
              <div className={styles.ellipseGroup}>
                <div className={styles.frameInner} />
                <img
                  className={styles.polygonIcon}
                  loading="lazy"
                  alt=""
                  src="/polygon-2.svg"
                />
              </div>
            </div>
          </div>
          <div className={styles.testimonialsInner1}>
            <div className={styles.rectangleParent}>
              <div className={styles.rectangleDiv} />
              <div className={styles.frameChild1} />
              <div className={styles.frameChild2} />
            </div>
          </div>
        </div>
      </div>
      <div className={styles.contactMe} data-scroll-to="contactMeContainer">
        <div className={styles.contact}>
          <h1 className={styles.contactMe1}>Contact me</h1>
          <div className={styles.loremIpsumDolorContainer}>
            <p className={styles.loremIpsumDolor1}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
              turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
              nec fringilla accumsan.
            </p>
          </div>
        </div>
        <div className={styles.input}>
          <div className={styles.emailInput}>
            <div className={styles.backgroundParent}>
              <div className={styles.background} data-scroll-to="background" />
              <div className={styles.enterYourEmail}>Enter Your Email</div>
            </div>
            <Button
              className={styles.emailInputChild}
              disableElevation={true}
              variant="contained"
              sx={{
                textTransform: "none",
                color: "#fff",
                fontSize: "24",
                background: "#dc3635",
                borderRadius: "10px",
                "&:hover": { background: "#dc3635" },
                width: 274,
                height: 75,
              }}
            >
              Contact Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent2;
