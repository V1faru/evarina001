import { FunctionComponent, useCallback } from "react";
import { Button } from "@mui/material";
import styles from "./GroupComponent.module.css";

const GroupComponent: FunctionComponent = () => {
  const onGroupButton1Click = useCallback(() => {
    const anchor = document.querySelector(
      "[data-scroll-to='contactMeContainer']"
    );
    if (anchor) {
      anchor.scrollIntoView({ block: "start", behavior: "smooth" });
    }
  }, []);

  return (
    <div className={styles.frameParent}>
      <div className={styles.freelaneUiuxDesignerParent}>
        <h1 className={styles.freelaneUiuxDesigner}>Freelane UI/UX Designer</h1>
        <h1 className={styles.hiIAm}>Hi, I am Ramisha</h1>
      </div>
      <div className={styles.description}>
        <div className={styles.loremIpsumDolorContainer}>
          <p className={styles.loremIpsumDolor}>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu
            turpis molestie, dictum est a, mattis tellus. Sed dignissim, metus
            nec fringilla accumsan, risus sem sollicitudin lacus, ut interdum
            tellus elit sed risus.
          </p>
        </div>
      </div>
      <div className={styles.actionButtons}>
        <div className={styles.frameGroup}>
          <Button
            className={styles.frameChild}
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
            className={styles.frameItem}
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
  );
};

export default GroupComponent;
