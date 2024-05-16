import { FunctionComponent } from "react";
import styles from "./FrameComponent5.module.css";

const FrameComponent5: FunctionComponent = () => {
  return (
    <section className={styles.landingPageDarkInner}>
      <div className={styles.aboutMeParent}>
        <div className={styles.aboutMe} data-scroll-to="aboutMeContainer">
          <img
            className={styles.aboutMeChild}
            loading="lazy"
            alt=""
            src="/group-33@2x.png"
          />
          <div className={styles.aboutMeInner}>
            <div className={styles.frameParent}>
              <div className={styles.aboutMeGroup}>
                <h1 className={styles.aboutMe1}>About me</h1>
                <div className={styles.loremIpsumDolorContainer}>
                  <p className={styles.loremIpsumDolor}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </p>
                </div>
              </div>
              <div className={styles.uxDesignParent}>
                <div className={styles.uxDesign}>UX Design</div>
                <div className={styles.rectangleParent}>
                  <div className={styles.frameChild} />
                  <div className={styles.rectangleGroup}>
                    <div className={styles.frameItem} />
                    <div className={styles.frameInner} />
                  </div>
                </div>
              </div>
              <div className={styles.appDesignParent}>
                <div className={styles.appDesign}>App Design</div>
                <div className={styles.rectangleContainer}>
                  <div className={styles.rectangleDiv} />
                  <div className={styles.cardRow} />
                  <div className={styles.card} />
                </div>
              </div>
              <div className={styles.graphicDesignParent}>
                <div className={styles.graphicDesign}>Graphic Design</div>
                <div className={styles.frameDiv}>
                  <div className={styles.frameChild1} />
                  <div className={styles.frameChild2} />
                  <div className={styles.ellipseDiv} />
                </div>
              </div>
              <div className={styles.webDesignParent}>
                <div className={styles.webDesign}>Web Design</div>
                <div className={styles.rectangleParent1}>
                  <div className={styles.frameChild3} />
                  <div className={styles.card1} />
                  <div className={styles.icon} />
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesWrapper}>
          <div className={styles.services} data-scroll-to="servicesContainer">
            <div className={styles.servicesInner}>
              <div className={styles.frameGroup}>
                <div className={styles.servicesContainer}>
                  <h1 className={styles.services1}>Services</h1>
                </div>
                <div className={styles.loremIpsumDolorContainer1}>
                  <p className={styles.loremIpsumDolor1}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Etiam eu turpis molestie, dictum est a, mattis tellus.
                  </p>
                </div>
              </div>
            </div>
            <div className={styles.uiuxDesignParent}>
              <div className={styles.uiuxDesign}>
                <div className={styles.uiuxDesignChild} />
                <img
                  className={styles.a589UserWebDesignSecur}
                  loading="lazy"
                  alt=""
                  src="/a589-user-web-design-security.svg"
                />
                <div className={styles.uiuxDesignGroup}>
                  <div className={styles.uiuxDesign1}>UI/UX Design</div>
                  <div className={styles.loremIpsumDolor2}>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
              <div className={styles.appDesign1}>
                <div className={styles.appDesignChild} />
                <img
                  className={styles.a579MobileCodingDevelopm}
                  loading="lazy"
                  alt=""
                  src="/a579-mobile-coding-development-web.svg"
                />
                <div className={styles.appDesignGroup}>
                  <div className={styles.appDesign2}>App Design</div>
                  <div className={styles.loremIpsumDolor3}>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
              <div className={styles.graphicDesign1}>
                <div className={styles.graphicDesignChild} />
                <img
                  className={styles.a593ArtworkDesigningIllu}
                  loading="lazy"
                  alt=""
                  src="/a593-artwork-designing-illustration-pen-tool.svg"
                />
                <div className={styles.graphicDesignGroup}>
                  <div className={styles.graphicDesign2}>Graphic Design</div>
                  <div className={styles.loremIpsumDolor4}>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
              <div className={styles.webDesign1}>
                <div className={styles.webDesignChild} />
                <img
                  className={styles.a583AdvertBillboardBoard}
                  loading="lazy"
                  alt=""
                  src="/a583-advert-billboard-board-web-advert.svg"
                />
                <div className={styles.webDesignGroup}>
                  <div className={styles.webDesign2}>Web Design</div>
                  <div className={styles.loremIpsumDolor5}>
                    Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam
                    diam interdum
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FrameComponent5;
