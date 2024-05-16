import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./FrameComponent3.module.css";

export type FrameComponent3Type = {
  group35?: string;
  maskGroup?: string;

  /** Style props */
  propFlex?: CSSProperties["flex"];
  propMinWidth?: CSSProperties["minWidth"];
  propAlignSelf?: CSSProperties["alignSelf"];
  propPadding?: CSSProperties["padding"];
};

const FrameComponent3: FunctionComponent<FrameComponent3Type> = ({
  group35,
  maskGroup,
  propFlex,
  propMinWidth,
  propAlignSelf,
  propPadding,
}) => {
  const frameDivStyle: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      minWidth: propMinWidth,
      alignSelf: propAlignSelf,
    };
  }, [propFlex, propMinWidth, propAlignSelf]);

  const frameDiv1Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  return (
    <div className={styles.frameParent} style={frameDivStyle}>
      <div
        className={styles.loremIpsumDolorSitAmetCoParent}
        style={frameDiv1Style}
      >
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. `}</div>
        <img
          className={styles.frameChild}
          loading="lazy"
          alt=""
          src={group35}
        />
        <div className={styles.frameItem} />
      </div>
      <div className={styles.maskGroupParent}>
        <img
          className={styles.maskGroupIcon}
          loading="lazy"
          alt=""
          src={maskGroup}
        />
        <div className={styles.frameInner} />
      </div>
    </div>
  );
};

export default FrameComponent3;
