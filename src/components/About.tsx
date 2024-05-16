import { FunctionComponent } from "react";
import FrameComponent1 from "./FrameComponent1";
import UiuxDesign from "./UiuxDesign";
import TestimonialRows from "./TestimonialRows";
import styles from "./About.module.css";

const About: FunctionComponent = () => {
  return (
    <section className={styles.about}>
      <div className={styles.aboutContent}>
        <div className={styles.aboutDetails}>
          <div className={styles.aboutMe} data-scroll-to="aboutMeContainer">
            <img
              className={styles.aboutMeChild}
              loading="lazy"
              alt=""
              src="/group-331@2x.png"
            />
            <div className={styles.aboutBottom}>
              <div className={styles.skillSets}>
                <div className={styles.aboutDescription}>
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
                    <div className={styles.shapePair}>
                      <div className={styles.shapePairChild} />
                      <div className={styles.shapePairItem} />
                    </div>
                  </div>
                </div>
                <FrameComponent1 appDesign="App Design" />
                <FrameComponent1
                  appDesign="Graphic Design"
                  propPadding="0px 0px var(--padding-base)"
                  propWidth="657px"
                  propRight="27px"
                />
                <FrameComponent1
                  appDesign="Web Design"
                  propPadding="unset"
                  propWidth="643px"
                  propRight="41px"
                />
              </div>
            </div>
          </div>
        </div>
        <div className={styles.servicesContentParent}>
          <div className={styles.servicesContent}>
            <div className={styles.services} data-scroll-to="servicesContainer">
              <div className={styles.servicesIntro}>
                <div className={styles.servicesTop}>
                  <div className={styles.servicesWrapper}>
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
              <div className={styles.serviceCards}>
                <UiuxDesign
                  a589UserWebDesignSecurity="/a589-user-web-design-security.svg"
                  uIUXDesign="UI/UX Design"
                />
                <UiuxDesign
                  a589UserWebDesignSecurity="/a579-mobile-coding-development-web.svg"
                  uIUXDesign="App Design"
                  propPadding="var(--padding-34xl) var(--padding-mid) var(--padding-16xl)"
                  propGap="29.4px"
                  propHeight="95.6px"
                  propWidth="96.3px"
                />
                <UiuxDesign
                  a589UserWebDesignSecurity="/a593-artwork-designing-illustration-pen-tool.svg"
                  uIUXDesign="Graphic Design"
                  propPadding="var(--padding-35xl) var(--padding-mid) var(--padding-16xl)"
                  propGap="32px"
                  propHeight="92px"
                  propWidth="98.1px"
                />
                <UiuxDesign
                  a589UserWebDesignSecurity="/a583-advert-billboard-board-web-advert.svg"
                  uIUXDesign="Web Design"
                  propPadding="var(--padding-37xl) var(--padding-mid) var(--padding-16xl)"
                  propGap="34.2px"
                  propHeight="87.8px"
                  propWidth="91.3px"
                />
              </div>
            </div>
          </div>
          <div className={styles.projectsWrapper}>
            <div className={styles.projects} data-scroll-to="projectsContainer">
              <div className={styles.projectsChild} />
              <div className={styles.projectsContent}>
                <div className={styles.projectsIntro}>
                  <div className={styles.projectsContainer}>
                    <h1 className={styles.projects1}>Projects</h1>
                  </div>
                  <div
                    className={styles.loremIpsumDolor2}
                  >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. `}</div>
                </div>
                <div className={styles.projectShowcase}>
                  <div className={styles.projectCategories}>
                    <button className={styles.projectCategoriesInner}>
                      <div className={styles.allWrapper}>
                        <div className={styles.all}>All</div>
                      </div>
                    </button>
                    <button className={styles.projectCategoriesChild}>
                      <div className={styles.uiuxDesignWrapper}>
                        <div className={styles.uiuxDesign}>UI/UX Design</div>
                      </div>
                    </button>
                    <button className={styles.frameButton}>
                      <div className={styles.appDesignWrapper}>
                        <div className={styles.appDesign}>App Design</div>
                      </div>
                    </button>
                    <button className={styles.projectCategoriesInner1}>
                      <div className={styles.graphicDesignWrapper}>
                        <div className={styles.graphicDesign}>
                          Graphic Design
                        </div>
                      </div>
                    </button>
                    <button className={styles.projectCategoriesInner2}>
                      <div className={styles.webDesignWrapper}>
                        <div className={styles.webDesign}>Web Design</div>
                      </div>
                    </button>
                  </div>
                </div>
              </div>
              <img
                className={styles.image4Icon}
                loading="lazy"
                alt=""
                src="/image-4@2x.png"
              />
              <div className={styles.imageGallery}>
                <div className={styles.imageRows}>
                  <div className={styles.imageRowsChild} />
                  <div className={styles.imagePair}>
                    <img
                      className={styles.image9Icon}
                      alt=""
                      src="/image-9@2x.png"
                    />
                    <img
                      className={styles.image10Icon}
                      loading="lazy"
                      alt=""
                      src="/image-10@2x.png"
                    />
                  </div>
                </div>
                <div className={styles.imageRowTwo}>
                  <img
                    className={styles.image11Icon}
                    alt=""
                    src="/image-11@2x.png"
                  />
                  <img
                    className={styles.image3Icon}
                    loading="lazy"
                    alt=""
                    src="/image-3@2x.png"
                  />
                </div>
                <div className={styles.imageRows1}>
                  <div className={styles.imageRowsItem} />
                  <img
                    className={styles.image4Icon1}
                    alt=""
                    src="/image-4-1@2x.png"
                  />
                </div>
              </div>
            </div>
          </div>
          <div
            className={styles.testimonials}
            data-scroll-to="testimonialsContainer"
          >
            <div className={styles.testimonialsChild} />
            <div className={styles.testimonialsContent}>
              <div className={styles.testimonialsIntro}>
                <div className={styles.testimonialsWrapper}>
                  <h1 className={styles.testimonials1}>Testimonials</h1>
                </div>
                <div
                  className={styles.loremIpsumDolor3}
                >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. `}</div>
              </div>
            </div>
            <div className={styles.testimonialCards}>
              <div className={styles.testimonialRows}>
                <div className={styles.cardRows}>
                  <div className={styles.cardElements} />
                  <img
                    className={styles.reviewShapesIcon}
                    loading="lazy"
                    alt=""
                    src="/polygon-11.svg"
                  />
                </div>
              </div>
              <TestimonialRows
                maskGroup="/mask-group@2x.png"
                group35="/group-35.svg"
              />
              <div className={styles.testimonialRows1}>
                <div className={styles.frameParent}>
                  <div className={styles.frameWrapper}>
                    <div className={styles.maskGroupParent}>
                      <img
                        className={styles.maskGroupIcon}
                        loading="lazy"
                        alt=""
                        src="/mask-group-1@2x.png"
                      />
                      <div className={styles.frameItem} />
                    </div>
                  </div>
                  <div className={styles.loremIpsumDolorSitAmetCoParent}>
                    <div
                      className={styles.loremIpsumDolor4}
                    >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. `}</div>
                    <img
                      className={styles.frameInner}
                      loading="lazy"
                      alt=""
                      src="/group-35-1.svg"
                    />
                    <div className={styles.rectangleDiv} />
                  </div>
                </div>
              </div>
              <TestimonialRows
                maskGroup="/mask-group-2@2x.png"
                group35="/group-35-2.svg"
                propPadding="0px var(--padding-41xl-8) 0px var(--padding-42xl)"
                propFlex="unset"
                propWidth="160px"
                propPadding1="var(--padding-89xl) var(--padding-sm) var(--padding-2xl) var(--padding-5xl-3)"
              />
              <TestimonialRows
                maskGroup="/mask-group-3@2x.png"
                group35="/group-35-3.svg"
                propPadding="0px var(--padding-41xl-1) 0px var(--padding-41xl)"
                propFlex="unset"
                propWidth="160px"
                propPadding1="var(--padding-89xl) var(--padding-sm) var(--padding-2xl) var(--padding-5xl-3)"
              />
              <div className={styles.testimonialRows2}>
                <div className={styles.ellipseParent}>
                  <div className={styles.ellipseDiv} />
                  <img
                    className={styles.polygonIcon}
                    loading="lazy"
                    alt=""
                    src="/polygon-21.svg"
                  />
                </div>
              </div>
            </div>
            <div className={styles.dotsIndicatorContainer}>
              <div className={styles.dotsIndicator}>
                <div className={styles.dot} />
                <div className={styles.dot1} />
                <div className={styles.dot2} />
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
