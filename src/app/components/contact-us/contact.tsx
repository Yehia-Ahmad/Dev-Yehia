import * as React from 'react';
import Lottie, { LottieRefCurrentProps } from "lottie-react";
import contactAnimation from "../../../animation/contact.json";
import { useRef } from "react";

const ContactAnimationComponent = () => {

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
      animationData={contactAnimation}
    />
  );
};

export default ContactAnimationComponent;
