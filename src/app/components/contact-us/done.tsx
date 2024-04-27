import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import doneAnimation from "../../../animation/done.json";
import { useRef } from "react";

const DoneAnimationComponent = () => {

  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <Lottie
      loop={false}
      style={{ height: 37 }}
      animationData={doneAnimation}
    />
    // <Lottie
    //   lottieRef={lottieRef}
    //   className=""
    //   onLoadedImages={() => {
    //     // @ts-ignore
    //     // https://lottiereact.com/
    //     lottieRef.current?.setSpeed(0.5);
    //   }}
    //   animationData={doneAnimation}
    // />
  );
};

export default DoneAnimationComponent;
