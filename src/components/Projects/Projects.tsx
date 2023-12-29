import { motion } from "framer-motion";
import Features from "./components/Features";
import Others from "./components/Others";
// import Videos from "./components/Videos";
import Title from "../Title/Title";

const Projects = () => {
  return (
    <section id="projects">
      <div className="w-full md:max-w-[1120px] md:m-auto">
        <motion.div
          initial={{ opacity: 0, x: 160 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Title title="Projects" />
        </motion.div>
        <Features />
        <Others />
        {/* <Videos videos={videos} /> */}
      </div>
    </section>
  );
};

export default Projects;
