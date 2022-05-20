import React, { useEffect, useRef, Component } from "react";
import animationData from "../../lottie/connection.json";
import Lottie from "lottie-web";

class AnimationLottie extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }


  render() {

    const defaultOptions = {
      loop: true,
      autoplay: true,
      animationData,
    };

    return (
      <div>
        <Lottie options={defaultOptions}
          height={400}
          width={400} />
      </div>
    );

  }


}

export default AnimationLottie;

