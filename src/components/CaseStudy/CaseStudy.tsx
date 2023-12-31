import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import Lottie from "lottie-react";
import animationData from "../../assets/images/casestudy2.json";
import { useQuery } from "@tanstack/react-query";
import { fetchContent } from "../../api";
import Title from "../Title/Title";
import { BsWindow } from "react-icons/bs";

import mainImg from "../../assets/images/projects/feature/blackbox_dashboard.jpg";
import mainMobileImg from "../../assets/images/projects/feature/mobile_blackbox_dashboard.jpg";
import sectionOneImg from "../../assets/images/projects/feature/blackbox_dashboard_a.jpg";
import sectionTwoImg from "../../assets/images/projects/feature/blackbox_dashboard_b.jpg";
import sectionThreeImg from "../../assets/images/projects/feature/blackbox_dashboard_c.jpg";
import { caseStudyData } from "../../assets/mock/data";
import { CaseStudyItem } from "../../types";

interface Feature {
  name: string;
  info: string;
}

const CaseStudy = () => {
  const { data, error, isError } = useQuery({
    queryFn: () => fetchContent("Case Study"),
    queryKey: ["case"],
    // staleTime: Infinity,
  });

  const [content, setContent] = useState<CaseStudyItem | null>(null);
  useEffect(() => {
    const content = data ? data : caseStudyData;
    setContent(content);
  }, [data]);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return "An error has occurred: " + error.message;
  if (isError) {
    console.log("An error has occurred: ", error.message);
  }

  return (
    <section id="work">
      <Lottie animationData={animationData} className="work-bg" />
      <div className="w-full md:max-w-[1120px] md:m-auto">
        <motion.div
          initial={{ opacity: 0, x: 160 }}
          whileInView={{ opacity: 1, x: 0 }}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <Title title="Feature Project" />
        </motion.div>
        <div className="project-wrapper">
          <motion.div
            initial={{ opacity: 0, x: 80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="project-wrapper__image"
          >
            <Tilt
              options={{
                reverse: false,
                max: 8,
                perspective: 1000,
                scale: 1,
                speed: 300,
                transition: true,
                axis: null,
                reset: true,
                easing: "cubic-bezier(.03,.98,.52,.99)",
              }}
            >
              <div data-tilt className="thumbnail rounded">
                <img
                  className="desktop"
                  alt={content?.meta?.name}
                  src={mainImg}
                />
                <img
                  className="phone"
                  alt={content?.meta?.name}
                  src={mainMobileImg}
                />
              </div>
            </Tilt>
          </motion.div>
          <motion.div
            initial={{ opacity: 0, x: -80 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="project-wrapper__text"
          >
            <header>
              <a
                target="_blank"
                rel="noopener noreferrer"
                href={content?.meta.url || "#!"}
              >
                <h3 className="project-wrapper__text-title">
                  {content?.meta?.name}
                </h3>
              </a>
              <span className="project-wrapper__text-nav">
                <a
                  target="_blank"
                  rel="noopener noreferrer"
                  href={content?.meta.url || "#!"}
                >
                  <BsWindow />
                </a>
                {content?.meta?.repo && (
                  <a
                    target="_blank"
                    rel="noopener noreferrer"
                    className="cta-btn text-color-main"
                    href={content?.meta?.repo}
                  >
                    Source Code
                  </a>
                )}
              </span>
            </header>
            <main>
              <div className="project-wrapper__text-main">
                <p>{content?.meta?.info}</p>
              </div>
              <p className="project-wrapper__text-tech">
                {content?.meta?.tech &&
                  content?.meta?.tech.map((item: string) => (
                    <span key={item}>{item}</span>
                  ))}
              </p>
            </main>
          </motion.div>
        </div>
        <div className="work-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="work-wrapper__image"
          >
            <img alt="case study" src={sectionOneImg} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="work-wrapper__info"
          >
            <p>{content?.contents.sectionOne.intro}</p>
            <ul>
              {content?.contents.sectionOne.features.map((feature: Feature) => {
                return (
                  <li key={feature.name}>
                    <strong>{feature.name}</strong>: {feature.info}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
        <div className="work-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="work-wrapper__image"
          >
            <img alt="case study" src={sectionTwoImg} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="work-wrapper__info"
          >
            <ul>
              {content?.contents.sectionTwo.features.map((feature: Feature) => {
                return (
                  <li key={feature.name}>
                    <strong>{feature.name}</strong>: {feature.info}
                  </li>
                );
              })}
            </ul>
          </motion.div>
        </div>
        <div className="work-wrapper">
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="work-wrapper__image"
          >
            <img alt="case study" src={sectionThreeImg} />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 80 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="work-wrapper__info"
          >
            <ul>
              {content?.contents.sectionThree.features.map(
                (feature: Feature) => {
                  return (
                    <li key={feature.name}>
                      <strong>{feature.name}</strong>: {feature.info}
                    </li>
                  );
                }
              )}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default CaseStudy;
