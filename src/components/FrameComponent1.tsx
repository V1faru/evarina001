import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent1.module.css";

export type FrameComponent1Type = {
  appDesign?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propWidth?: CSSProperties["width"];
  propRight?: CSSProperties["right"];
};

const FrameComponent1: FunctionComponent<FrameComponent1Type> = ({
  appDesign,
  propPadding,
  propWidth,
  propRight,
}) => {
  const frameDiv2Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const rectangleDivStyle: CSSProperties = useMemo(() => {
    return {
      width: propWidth,
    };
  }, [propWidth]);

  const ellipseDivStyle: CSSProperties = useMemo(() => {
    return {
      right: propRight,
    };
  }, [propRight]);

  return (
    <div className={styles.appDesignParent} style={frameDiv2Style}>
      <div className={styles.appDesign}>{appDesign}</div>
      <div className={styles.rectangleParent}>
        <div className={styles.frameChild} />
        <div className={styles.frameItem} style={rectangleDivStyle} />
        <div className={styles.frameInner} style={ellipseDivStyle} />
      </div>
    </div>
  );
};

export default FrameComponent1;
