import { motion } from "framer-motion";
import Title from "../Title/Title";
import { fetchContent } from "../../api";
import { useQuery } from "@tanstack/react-query";
import LittieAbout from "../Animation/LottieAbout";

// import image from "../../assets/images/profile.png";

const About = () => {
  const { data, error, isLoading, isError } = useQuery({
    queryFn: () => fetchContent("About"),
    queryKey: ["about"],
    staleTime: Infinity,
  });

  if (isLoading) return <div>Loading...</div>;
  if (isError) return "An error has occurred: " + error.message;

  return (
    <section id="about" className="w-full md:max-w-[1120px] md:m-auto">
      <motion.div
        initial={{ opacity: 0, x: 160 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Title title="About Me" />
      </motion.div>
      <div className="flex gap-16 lg:gap-32 flex-col md:flex-row justify-center text-center md:text-left">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.2 }}
          className="about-wrapper__image max-w-[400px] flex-1 m-auto"
        >
          {/* <img alt="profile picture" src={image} /> */}
          <LittieAbout />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: -30 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
          className="about-wrapper__info flex-1 max-w-[480px] md:max-w-full m-auto"
        >
          <p className="about-wrapper__info-text">
            {data.contents?.paragraphOne}
          </p>
          <p className="about-wrapper__info-text">
            {data.contents?.paragraphTwo}
          </p>
          <p className="about-wrapper__info-text">
            {data.contents?.paragraphThree}
          </p>
          <p className="about-wrapper__info-text">
            {data.contents?.paragraphFour}
          </p>
          <p className="about-wrapper__info-text">
            {data.contents?.paragraphFive}
          </p>
          <p className="about-wrapper__info-text">
            {data.contents?.paragraphSix}
          </p>
        </motion.div>
      </div>
    </section>
  );
};

export default About;
