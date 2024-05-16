import { FunctionComponent, useMemo, type CSSProperties } from "react";
import styles from "./TestimonialRows.module.css";

export type TestimonialRowsType = {
  maskGroup?: string;
  group35?: string;

  /** Style props */
  propPadding?: CSSProperties["padding"];
  propFlex?: CSSProperties["flex"];
  propWidth?: CSSProperties["width"];
  propPadding1?: CSSProperties["padding"];
};

const TestimonialRows: FunctionComponent<TestimonialRowsType> = ({
  maskGroup,
  group35,
  propPadding,
  propFlex,
  propWidth,
  propPadding1,
}) => {
  const frameDiv3Style: CSSProperties = useMemo(() => {
    return {
      padding: propPadding,
    };
  }, [propPadding]);

  const frameDiv4Style: CSSProperties = useMemo(() => {
    return {
      flex: propFlex,
      width: propWidth,
    };
  }, [propFlex, propWidth]);

  const cardDescriptionStyle: CSSProperties = useMemo(() => {
    return {
      padding: propPadding1,
    };
  }, [propPadding1]);

  return (
    <div className={styles.testimonialRows}>
      <div className={styles.testimonialRowsInner} style={frameDiv3Style}>
        <div className={styles.maskGroupParent} style={frameDiv4Style}>
          <img
            className={styles.maskGroupIcon}
            loading="lazy"
            alt=""
            src={maskGroup}
          />
          <div className={styles.frameChild} />
        </div>
      </div>
      <div className={styles.cardDescription} style={cardDescriptionStyle}>
        <div
          className={styles.loremIpsumDolor}
        >{`Lorem ipsum dolor sit amet, consectetur adipiscing elit. Etiam eu turpis molestie, dictum est a, mattis tellus. `}</div>
        <img
          className={styles.cardDescriptionChild}
          loading="lazy"
          alt=""
          src={group35}
        />
        <div className={styles.cardDescriptionItem} />
      </div>
    </div>
  );
};

export default TestimonialRows;
