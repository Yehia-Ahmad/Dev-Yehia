import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import badRequestAnimation from "../../../animation/bad-request.json";
import { useRef } from "react";

const badRequestAnimationComponent = () => {

  const lottieRef = useRef<LottieRefCurrentProps | null>(null);

  return (
    // <Lottie
    //   loop={false}
    //   style={{ height: 37 }}
    //   animationData={badRequestAnimation}
    // />
    <Lottie
      lottieRef={lottieRef}
      className=""
      onLoadedImages={() => {
        // @ts-ignore
        // https://lottiereact.com/
        lottieRef.current?.setSpeed(0.5);
      }}
      animationData={badRequestAnimation}
    />
  );
};

export default badRequestAnimationComponent;
