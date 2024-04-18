import React from "react";
import "./Home.css";
// import TextAnimation from "react-text-animations";
import { useGetUserQuery } from "../../redux/features/api/createAPI";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";

const Home = () => {
  const { data, isLoading } = useGetUserQuery("mickey.ur@gmail.com");
  console.log(data?.data)
  console.log(data, isLoading)
  const [playGame, setPlayGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [eatenApples, setEatenApples] = useState(10);
  const [wellDone, setWellDone] = useState(false);

  const subheading = data?.data?.userTitles;

  return (
    <div className="h-full hero-background bg-cover bg-no-repeat bg-center">
      {isLoading && (
        <div className="flex items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
          <div className="w-80 h-80 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
        </div>
      )}
      <Helmet>
        <meta charSet="utf-8" />
        <title>
          Mikhail - Developer
        </title>
      </Helmet>

      {data?.data && (
        <div className="h-full overflow-hidden md:flex justify-evenly items-center">
          <div className="text-left  flex flex-col justify-around h-full items-center md:justify-evenly md:items-baseline p-[27px] ">
            <div className="">
              <motion.h2
                initial={{ opacity: 0, y: -100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.3 }}
                className="text-lg font-medium"
              >
                Hi everybody. I am
              </motion.h2>
              <motion.h1
                initial={{ opacity: 0, x: -100 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="text-[62px]  leading-[62px]"
              >
                {data?.data?.userName}
              </motion.h1>
              <div className="text-text-blue font-semibold text-xl flex">
                {" "}
                {/* Change <p> to <div> */}
                {"> "}
                <span className="mx-2">{` `} </span>
                <Typewriter
                  options={{
                    strings: subheading,
                    autoStart: true,
                    loop: true,
                  }}
                />
              </div>
            </div>
            <div className="text-sm my-10">
              <div>
                <p className="text-text ">// find my profile on Github:</p>

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  href={data?.data?.githubLink}
                  target="_blank"
                >
                  <span className="text-text-blue">const</span>{" "}
                  <span className="text-text-green">githubLink</span> ={" "}
                  <span className="text-text-orange">
                    “{data?.data?.githubLink}"
                  </span>
                </motion.a>
              </div>
              <div className="my-4">
                <p className="text-text ">// Download my resume:</p>

                <motion.a
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  transition={{ duration: 0.3 }}
                  href={data?.data?.resume}
                  target="_blank"
                >
                  <span className="text-text-blue">const</span>{" "}
                  <span className="text-text-green">resume</span> ={" "}
                  <span className="text-text-orange">“resume.pdf"</span>
                </motion.a>
              </div>
            </div>
          </div>


          <motion.div
              initial={{opacity: 0, x: 10}}
              animate={{opacity: 1, x: 0}}
              transition={{duration: 0.3}}
              // className="z-50 relative  h-full lg:flex hidden justify-start items-center"
          >
            <img
                src={data?.data?.userImage}
                className="h-[300px] w-[300px] block mx-auto my-10 md:h-[500px] md:w-[500px] rounded-full border-b-4 image-shadow border-text-orange"
                alt=""
            />
          </motion.div>
        </div>
      )}
    </div>
  );
};

export default Home;
