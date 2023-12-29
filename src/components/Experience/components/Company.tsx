import { useState } from "react";
import { ExperienceItem } from "../../../types";
import { motion } from "framer-motion";

type ExperienceProp = {
  index: number;
  data: ExperienceItem;
};

function Company(props: ExperienceProp) {
  const { title, company, date, info } = props.data;
  //const [open, setOpen] = useState(false);

  const [isOpen, setIsOpen] = useState<boolean>(false);
  const handleMouseLeave = () => {
    console.log("is-close");
    setIsOpen(false);
  };
  const handleMouseEnter = () => {
    console.log("is-open");
    setIsOpen(true);
  };

  return (
    // initial={{ opacity: 0, x: props.index % 2 ? 80 : -80 }}
    <motion.div
      initial={{ opacity: 0, y: 80 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.8, delay: 0.2 }}
      className="experience-wrapper"
      onMouseEnter={handleMouseEnter}
      onMouseLeave={handleMouseLeave}
      aria-controls="collapse-text"
    >
      <div className="experience-wrapper__info">
        <p className="experience-wrapper__info-date">{date}</p>
        <div className="experience-wrapper__info-company">
          <p className="experience-wrapper__info-company-name">{company}</p>
          <p className="experience-wrapper__info-company-title">{title}</p>
        </div>
      </div>
      <div
        onClick={handleMouseLeave}
        className={"collapse-text " + (isOpen ? "expended" : "")}
        aria-expanded={isOpen}
      >
        <p className="experience-wrapper__info-text">{info}</p>
      </div>
    </motion.div>
  );
}

export default Company;
