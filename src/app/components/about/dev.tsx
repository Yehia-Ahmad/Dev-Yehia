import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import devAnimation from "../../../animation/dev.json";
import { useRef } from "react";

const DevAnimationComponent = () => {

  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    <Lottie
      lottieRef={lottieRef}
      className=""
      onLoadedImages={() => {
        // @ts-ignore
        // https://lottiereact.com/
        lottieRef.current?.setSpeed(0.5);
      }}
      animationData={devAnimation}
    />
  );
};

export default DevAnimationComponent;
