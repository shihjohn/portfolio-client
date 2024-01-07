import { useState, useEffect } from "react";
import { useQuery } from "@tanstack/react-query";
import { fetchNav } from "../../api";
import { Link } from "react-scroll";
import { AnimatePresence, motion } from "framer-motion";
import logo from "../../assets/images/logo.svg";
import resume from "../../assets/resume/resume-JohnShih.pdf";
import { RxHamburgerMenu, RxCross1 } from "react-icons/rx";
import { navData } from "../../assets/mock/data";

const Header = () => {
  const { data, error, isError } = useQuery({
    queryFn: () => fetchNav(),
    queryKey: ["nav"],
  });

  const [content, setContent] = useState([]);
  useEffect(() => {
    const content = data ? data : navData;
    setContent(content);
  }, [data]);

  const [toggle, setToggle] = useState(false);

  // if (isLoading) return <div>Loading...</div>;
  // if (isError) return "An error has occurred: " + error.message;
  if (isError) {
    console.log("An error has occurred: ", error.message);
  }

  return (
    <header id="header">
      <nav className="bg-[#f8f9fa] w-full flex py-6 justify-between items-center navbar backdrop-blur bg-opacity-90">
        <Link
          activeClass="active"
          className="hero cursor-pointer"
          to="hero"
          spy={true}
        >
          <img src={logo} alt="hoobank" className="w-[100px] h-[40px]" />
        </Link>
        <ul className="list-none sm:flex hidden justify-end items-center flex-1">
          {content.map((nav: any, index: number) => (
            <motion.div
              key={nav._id}
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: 3 + 0.1 * index }}
            >
              <li
                key={nav._id}
                className={`font-poppins font-normal cursor-pointer text-[16px] hover:text-primary transition-all
                ${index === content.length - 1 ? "mr-0" : "mr-8"}`}
              >
                <Link
                  activeClass="active"
                  className={nav.url}
                  to={nav.url}
                  spy={true}
                >
                  {nav.name}
                </Link>
              </li>
            </motion.div>
          ))}
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 3.5 }}
          >
            <li className="ml-4">
              <a
                target="_blank"
                rel="noreferrer"
                className="cta-btn cta-btn--resume"
                href={resume}
              >
                Resume
              </a>
            </li>
          </motion.div>
        </ul>

        <div className="sm:hidden flex flex-1 justify-end items-center">
          <AnimatePresence>
            <div
              className="w-[28px] h-[28px] object-contain text-[28px] z-10 cursor-pointer hover:text-primary transition-all"
              onClick={() => setToggle(!toggle)}
            >
              {!toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: 180 }}
                  exit={{ opacity: 0, scale: 0, rotate: -180 }}
                  //whileTap={{ rotate: 180 }}
                  transition={{ duration: 3, type: "spring", stiffness: 100 }}
                >
                  <RxHamburgerMenu />
                </motion.div>
              )}
              {toggle && (
                <motion.div
                  initial={{ opacity: 0, scale: 0 }}
                  animate={{ opacity: 1, scale: 1, rotate: 180 }}
                  //whileTap={{ rotate: 180 }}
                  transition={{ duration: 3, type: "spring", stiffness: 100 }}
                  exit={{ opacity: 0, scale: 0, rotate: -180 }}
                >
                  <RxCross1 />
                </motion.div>
              )}
            </div>
            {toggle && (
              <motion.div
                initial={{ opacity: 0, y: -160 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -160 }}
                className={`bg-[#f8f9fa] absolute top-0 right-0 w-full h-screen p-6 z-5 bg-opacity-95 flex justify-center items-center`}
              >
                <ul className="list-none flex flex-col">
                  {content.map((nav: any, index: number) => (
                    <li key={nav._id} className={`p-4`}>
                      <Link
                        activeClass="active"
                        className={`font-poppins font-medium cursor-pointer text-[24px] hover:text-primary 
                        ${nav.url} 
                        ${index === content.length - 1 ? "mb-0" : "mb-4"}`}
                        to={nav.url}
                        spy={true}
                        offset={-60}
                        duration={1000}
                        onClick={() => {
                          setToggle(!toggle);
                        }}
                      >
                        {nav.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </motion.div>
            )}
          </AnimatePresence>
        </div>
      </nav>
    </header>
  );
};

export default Header;
