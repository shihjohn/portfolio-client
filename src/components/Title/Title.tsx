import { TitleItem } from "../../types";

const Title = (props: TitleItem) => (
  <h2 className="section-title">{props.title}</h2>
  // <Fade bottom duration={1000} delay={300} distance="0px">
  //   <h2 className="section-title">{title}</h2>
  // </Fade>
);

export default Title;
