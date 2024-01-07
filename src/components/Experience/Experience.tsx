import { useEffect, useState } from "react";
import { motion } from "framer-motion";
import Title from "../Title/Title";
import Company from "./components/Company";
import { useQuery } from "@tanstack/react-query";
import { fetchExperience } from "../../api";
import { experienceData } from "../../assets/mock/data";
import { ExperienceItem } from "../../types";

const Experience = () => {
  const { data, error, isError } = useQuery({
    queryFn: () => fetchExperience(),
    queryKey: ["experiences"],
    // staleTime: Infinity,
  });

  const [content, setContent] = useState<ExperienceItem[] | null>(null);
  useEffect(() => {
    const content = data ? data : experienceData;
    setContent(content);
  }, [data]);

  // const [collapse, setCollapse] = useState(null);
  // const toggle = (id) => {
  //   setCollapse(collapse === id ? null : id);
  // };

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return "An error has occurred: " + error.message;
  if (isError) {
    console.log("An error has occurred: ", error.message);
  }

  return (
    <section id="experience" className="w-full md:max-w-[1120px] md:m-auto">
      <motion.div
        initial={{ opacity: 0, x: 160 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 1, delay: 0.4 }}
      >
        <Title title="Experience" />
      </motion.div>
      {content &&
        content.map((experience: ExperienceItem, i: number) => {
          return <Company key={experience._id} data={experience} index={i} />;
        })}
    </section>
  );
};

export default Experience;
