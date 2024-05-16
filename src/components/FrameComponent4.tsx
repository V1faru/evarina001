import { FunctionComponent } from "react";
import styles from "./FrameComponent4.module.css";

const FrameComponent4: FunctionComponent = () => {
  return (
    <section className={styles.projectsWrapper}>
      <div className={styles.projects} data-scroll-to="projectsContainer">
        <div className={styles.projectsChild} />
        <div className={styles.frameParent}>
          <div className={styles.frameGroup}>
            <div className={styles.projectsContainer}>
              <h1 className={styles.projects1}>Projects</h1>
            </div>
            <div
              className={styles.loremIpsumDolor}
            >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. `}</div>
          </div>
          <div className={styles.frameWrapper}>
            <div className={styles.frameContainer}>
              <button className={styles.frameButton}>
                <div className={styles.allWrapper}>
                  <div className={styles.all}>All</div>
                </div>
              </button>
              <button className={styles.frameWrapper1}>
                <div className={styles.uiuxDesignWrapper}>
                  <div className={styles.uiuxDesign}>UI/UX Design</div>
                </div>
              </button>
              <button className={styles.frameWrapper2}>
                <div className={styles.appDesignWrapper}>
                  <div className={styles.appDesign}>App Design</div>
                </div>
              </button>
              <button className={styles.frameWrapper3}>
                <div className={styles.graphicDesignWrapper}>
                  <div className={styles.graphicDesign}>Graphic Design</div>
                </div>
              </button>
              <div className={styles.frameDiv}>
                <div className={styles.webDesignWrapper}>
                  <div className={styles.webDesign}>Web Design</div>
                </div>
              </div>
            </div>
          </div>
        </div>
        <img
          className={styles.image4Icon}
          loading="lazy"
          alt=""
          src="/image-4@2x.png"
        />
        <div className={styles.frameParent1}>
          <div className={styles.rectangleParent}>
            <div className={styles.frameChild} />
            <div className={styles.image9Parent}>
              <img className={styles.image9Icon} alt="" src="/image-9@2x.png" />
              <img
                className={styles.image10Icon}
                loading="lazy"
                alt=""
                src="/image-10@2x.png"
              />
            </div>
          </div>
          <div className={styles.image11Parent}>
            <img className={styles.image11Icon} alt="" src="/image-11@2x.png" />
            <img
              className={styles.image3Icon}
              loading="lazy"
              alt=""
              src="/image-3@2x.png"
            />
          </div>
          <div className={styles.rectangleGroup}>
            <div className={styles.frameItem} />
            <img
              className={styles.image4Icon1}
              alt=""
              src="/image-4-1@2x.png"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent4;
