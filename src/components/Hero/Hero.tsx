import { Navigate } from "react-router-dom";
import { Link } from "react-scroll";
import { useQuery } from "@tanstack/react-query";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationHero from "./../../assets/images/hero.json";
import animationLoading from "./../../assets/images/loading.json";
import { fetchContent } from "./../../api";

const Header = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryFn: () => fetchContent("Hero"),
    queryKey: ["hero"],
    // staleTime: Infinity, // Won't refetch data in the background.
    // cacheTime: 0, // Never cache data and will fetch new data every time.
  });

  if (isError) {
    return <Navigate to={`/error/${error.message}`} />;
  }

  return (
    <section
      id="hero"
      className="jumbotron flex-col-reverse justify-center md:flex-row"
    >
      {isLoading ? (
        <div className="flex-col">
          <Lottie
            animationData={animationLoading}
            className="max-w-xl md:max-w-full"
          />
          <h1 className="hero-title mt-[-80px]">Loading...</h1>
        </div>
      ) : (
        <>
          <div className="flex flex-col justify-center w-full text-center md:text-left md:max-w-3xl">
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3 }}
            >
              <h1 className="hero-title">
                Hi, my name is
                <span className="hero-title-main text-color-main">
                  {data.contents.name || "John Shih"}
                </span>
                <span className="hero-title-sub">
                  {data.contents.subtitle || "Web Developer."}
                </span>
              </h1>
              <p className="hero-wrapper__info-text w-full md:max-w-[500px]">
                {data.contents.info ||
                  "I'm a web developer in Brisbane QLD specializing in front-end development. I enjoy creating interactive interfaces and delivering user-friendly experiences using modern frontend technologies."}
              </p>
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: -30 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 1, delay: 3.2 }}
            >
              <p className="hero-cta">
                <Link to="about" offset={-40} duration={400}>
                  <span className="cta-btn cta-btn--hero">Know more</span>
                </Link>
              </p>
            </motion.div>
          </div>
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 3 }}
          >
            <Lottie
              animationData={animationHero}
              className="max-w-xl md:max-w-full"
            />
          </motion.div>
        </>
      )}
    </section>
  );
};

export default Header;
