import { FunctionComponent } from "react";
import { Button } from "@mui/material";
import styles from "./ContactMe.module.css";

const ContactMe: FunctionComponent = () => {
  return (
    <div className={styles.contactMe} data-scroll-to="contactMeContainer">
      <div className={styles.contactContainer}>
        <div className={styles.contactContainerChild} />
        <div className={styles.contactContent}>
          <div className={styles.contactDots}>
            <div className={styles.dot} />
            <div className={styles.dot1} />
            <div className={styles.dot2} />
          </div>
        </div>
        <div className={styles.contactFormContainer}>
          <div className={styles.contactForm}>
            <h1 className={styles.contactMe1}>Contact me</h1>
            <div className={styles.loremIpsumDolorContainer}>
              <p className={styles.loremIpsumDolor}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam
                eu turpis molestie, dictum est a, mattis tellus. Sed dignissim,
                metus nec fringilla accumsan.
              </p>
            </div>
          </div>
          <div className={styles.emailInputContainer}>
            <div className={styles.emailInput}>
              <div className={styles.rectangleParent}>
                <div className={styles.frameChild} />
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
                  background: "#493b3b",
                  borderRadius: "10px",
                  "&:hover": { background: "#493b3b" },
                  width: 274,
                  height: 75,
                }}
              >
                Contact Me
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
