import { useEffect } from "react";
import logo from "../../assets/images/logo.gif";

const Preloader = () => {
  const hideLoader = () => {
    const preload = document.querySelector(".preloader")!;
    const logoImg = document.querySelector(".preloader img")!;
    setTimeout(() => {
      logoImg.classList.add("loader-animation");
    }, 2000);
    setTimeout(() => {
      preload.classList.add("hide-loader");
    }, 3000);
  };

  useEffect(() => {
    hideLoader();
  }, []);
  return (
    <div className="preloader">
      <img src={logo} alt="logo" />
    </div>
  );
};

export default Preloader;
