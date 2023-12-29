import { Link } from "react-router-dom";
import Lottie from "lottie-react";
import animationData from "./../assets/images/404.json";

// import { Container } from 'react-bootstrap';
// import Fade from 'react-reveal/Fade';
// import 'bootstrap/dist/css/bootstrap.min.css';

import "../style/main.scss";

const NotFound = () => {
  return (
    <section id="hero" className="jumbotron">
      <div className="flex flex-col justify-center w-full text-center md:text-left md:max-w-5xl md:m-auto">
        <Lottie
          animationData={animationData}
          className="w-[400px] m-auto my-[-24px]"
        />
        <span className="hero-title-main text-center leading-10 pb-4">
          Page Not Found
        </span>
        <span className="text-center text-5xl">
          Sorry, this path does not exist
        </span>
        <p className="hero-cta justify-content-center text-center">
          <Link className="cta-btn cta-btn--hero" to="/">
            Go back
          </Link>
        </p>
      </div>
    </section>
  );
};
export default NotFound;
