import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Title from "../../Title/Title";
import { useQuery } from "@tanstack/react-query";
import { fetchProject } from "../../../api";
import { otherProjectData } from "../../../assets/mock/data";
import { ProjectItem } from "../../../types";
import { BsWindow } from "react-icons/bs";

import otherImg1 from "../../../assets/images/projects/other/nx-witness.jpg";
import otherImg2 from "../../../assets/images/projects/other/rib-software.jpg";
import otherImg3 from "../../../assets/images/projects/other/itwocostx.jpg";
import otherImg4 from "../../../assets/images/projects/other/itwocx.jpg";
import otherImg5 from "../../../assets/images/projects/other/tmdb.jpg";
import otherImg6 from "../../../assets/images/projects/other/techweb.jpg";

interface ProjectImage {
  otherImg1: string;
  otherImg2: string;
  otherImg3: string;
  otherImg4: string;
  otherImg5: string;
  otherImg6: string;
}
const img: ProjectImage = {
  otherImg1,
  otherImg2,
  otherImg3,
  otherImg4,
  otherImg5,
  otherImg6,
};

const Others = () => {
  const { data, error, isError } = useQuery({
    queryFn: () => fetchProject("other"),
    queryKey: ["other"],
    // staleTime: Infinity,
  });

  const [content, setContent] = useState<ProjectItem[] | null>(null);
  useEffect(() => {
    const content = data ? data : otherProjectData;
    setContent(content);
  }, [data]);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return "An error has occurred: " + error.message;
  if (isError) {
    console.log("An error has occurred: ", error.message);
  }
  return (
    <>
      <motion.div
        initial={{ opacity: 0, x: 160 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Title title="Other Projects" />
      </motion.div>

      <div className="project-other-wrapper">
        {content &&
          content.map((other: ProjectItem, i: number) => {
            const { _id, name, info, tech, url } = other;
            return (
              <motion.div
                key={_id}
                initial={{ opacity: 0, y: 80 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1, delay: 0.1 * i }}
              >
                <a
                  href={url || "#!"}
                  target={url ? "_blank" : "_self"}
                  aria-label="Project Link"
                  rel="noopener noreferrer"
                  className="project-link"
                >
                  <div className="project-other-wrapper__card">
                    {url && (
                      <p className="project-other-wrapper__card-nav">
                        <BsWindow />
                      </p>
                    )}
                    <div className="project-other-wrapper__card-img">
                      <img
                        alt={name}
                        src={img[`otherImg${i + 1}` as keyof ProjectImage]}
                      />
                    </div>
                    <div className="project-other-wrapper__card-main">
                      <h3 className="project-other-wrapper__card-title">
                        {name}
                      </h3>
                      <p>{info}</p>
                    </div>
                  </div>
                  <p className="project-other-wrapper__card-tech">
                    {tech &&
                      tech.map(item => {
                        {
                          return <span key={item}>{item}</span>;
                        }
                      })}
                  </p>
                </a>
              </motion.div>
            );
          })}
      </div>
    </>
  );
};

export default Others;
