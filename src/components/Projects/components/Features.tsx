import { useEffect, useState } from "react";
import { Tilt } from "react-tilt";
import { motion } from "framer-motion";
import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "../../../api";
import { featureProjectData } from "../../../assets/mock/data";
import { ProjectItem } from "../../../types";
import { BsWindow } from "react-icons/bs";

import mainImg1 from "../../../assets/images/projects/feature/blackbox.jpg";
import mainMobileImg1 from "../../../assets/images/projects/feature/mobile_blackbox.jpg";
import mainImg2 from "../../../assets/images/projects/feature/nx-witness.jpg";
import mainMobileImg2 from "../../../assets/images/projects/feature/mobile_nx-witness.jpg";
import mainImg3 from "../../../assets/images/projects/feature/blackbox_tv.gif";
// import mainMobileImg3 from "../../../assets/images/projects/feature/mobile_portfolio.jpg";
import mainImg4 from "../../../assets/images/projects/feature/saas-ai.jpg";
import mainMobileImg4 from "../../../assets/images/projects/feature/mobile_saas-ai.jpg";

interface ProjectImage {
  mainImg1: string;
  mainMobileImg1: string;
  mainImg2: string;
  mainMobileImg2: string;
  mainImg3: string;
  // mainMobileImg3: string;
  mainImg4: string;
  mainMobileImg4: string;
}
const img: ProjectImage = {
  mainImg1,
  mainMobileImg1,
  mainImg2,
  mainMobileImg2,
  mainImg3,
  // mainMobileImg3,
  mainImg4,
  mainMobileImg4,
};

const Features = () => {
  const { data, error, isError } = useQuery({
    queryFn: () => fetchProject("feature"),
    queryKey: ["feature"],
    // staleTime: Infinity,
  });

  const [content, setContent] = useState<ProjectItem[] | null>(null);
  useEffect(() => {
    const content = data ? data : featureProjectData;
    setContent(content);
  }, [data]);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return "An error has occurred: " + error.message;
  if (isError) {
    console.log("An error has occurred: ", error.message);
  }
  return (
    <>
      {content &&
        content.map((feature: ProjectItem, i: number) => {
          return (
            <div className="project-wrapper" key={feature?._id}>
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
                      alt={feature?.name}
                      src={img[("mainImg" + (i + 1)) as keyof ProjectImage]}
                    />
                    {img[("mainMobileImg" + (i + 1)) as keyof ProjectImage] && (
                      <img
                        className="phone"
                        alt={feature?.name}
                        src={
                          img[("mainMobileImg" + (i + 1)) as keyof ProjectImage]
                        }
                      />
                    )}
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
                    href={feature.url || "#!"}
                  >
                    <h3 className="project-wrapper__text-title">
                      {feature?.name}
                    </h3>
                  </a>
                  <span className="project-wrapper__text-nav">
                    <a
                      target="_blank"
                      rel="noopener noreferrer"
                      href={feature.url || "#!"}
                    >
                      <BsWindow />
                    </a>
                    {feature?.repo && (
                      <a
                        target="_blank"
                        rel="noopener noreferrer"
                        className="cta-btn text-color-main"
                        href={feature?.repo}
                      >
                        Source Code
                      </a>
                    )}
                  </span>
                </header>
                <main>
                  <div className="project-wrapper__text-main">
                    <p>{feature?.info}</p>
                  </div>
                  <p className="project-wrapper__text-tech">
                    {feature?.tech &&
                      feature.tech.map((item: string) => (
                        <span key={item}>{item}</span>
                      ))}
                  </p>
                </main>
              </motion.div>
            </div>
          );
        })}
    </>
  );
};

export default Features;
