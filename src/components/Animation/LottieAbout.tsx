import { useLottie, useLottieInteractivity } from "lottie-react";
import animationData from "./../../assets/images/about.json";

const LittieAbout = () => {
  const lottieObj = useLottie({ animationData });
  const Animation = useLottieInteractivity({
    lottieObj,
    mode: "scroll",
    actions: [
      {
        visibility: [0, 1.0],
        type: "seek",
        frames: [0, 100],
      },
    ],
  });

  return Animation;
};

export default LittieAbout;
