import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./UiuxDesign.module.css";

export type UiuxDesignType = {
  a589UserWebDesignSecurity?: string;
  uIUXDesign?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propGap?: CSSProperties["gap"];
  propHeight?: CSSProperties["height"];
  propWidth?: CSSProperties["width"];
};

const UiuxDesign: FunctionComponent<UiuxDesignType> = ({
  a589UserWebDesignSecurity,
  uIUXDesign,
  propPadding,
  propGap,
  propHeight,
  propWidth,
}) => {
  const uiuxDesignStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
      gap: propGap,
    };
  }, [propPadding, propGap]);

  const a589UserWebDesignSecurStyle: CSSProperties = useMemo(() => {
    return {
      height: propHeight,
      width: propWidth,
    };
  }, [propHeight, propWidth]);

  return (
    <div className={styles.uiuxDesign} style={uiuxDesignStyle}>
      <div className={styles.uiuxDesignChild} />
      <img
        className={styles.a589UserWebDesignSecur}
        loading="lazy"
        alt=""
        src={a589UserWebDesignSecurity}
        style={a589UserWebDesignSecurStyle}
      />
      <div className={styles.cardDetails}>
        <div className={styles.uiuxDesign1}>{uIUXDesign}</div>
        <div className={styles.loremIpsumDolor}>
          Lorem ipsum dolor sit amet consectetur. Morbi diam nisi nam diam
          interdum
        </div>
      </div>
    </div>
  );
};

export default UiuxDesign;
