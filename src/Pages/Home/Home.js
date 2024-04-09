import React from "react";
import "./Home.css";
import TextAnimation from "react-text-animations";
import { useGetUserQuery } from "../../redux/features/api/createAPI";
import SnackGame from "./SnakeGame/SnakeGame";
import { GiSnake } from "react-icons/gi";
import { RiCloseCircleFill, RiGamepadFill } from "react-icons/ri";
import { SiAmazongames } from "react-icons/si";
import weldoneAudio from "../../Assets/audio/weldone.wav";
import ArrowKeyButtons from "../../Components/Button/ArrowButtons";
import { useState } from "react";
import { useEffect } from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";
import { Helmet } from "react-helmet";

const Home = () => {
  // const { data, isLoading } = useGetUserQuery("mickey.ur@gmail.com");
  const isLoading = false;
  const data = {data: {
      "_id": "64f02db7afb16ffb95954daa",
      "userLogo": "https://i.ibb.co/bQvHQRK/6575219-removebg-preview.png",
      "userLogoName": "MK",
      "userName": "Mikhail Uryvalkin",
      "userTitles": [
        "Back-end Developer",
        "Software Architect",
        "Engineer",
      ],
      "shortTechnologies": [
        {
          "img": "https://static-00.iconduck.com/assets.00/react-icon-1822x2048-yiodjgoi.png",
          "name": "React.JS"
        },
        {
          "img": "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
          "name": "Next.JS"
        },
        {
          "img": "https://www.svgrepo.com/show/303557/redux-logo.svg",
          "name": "Redux"
        },
        {
          "img": "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
          "name": "Express"
        },
        {
          "img": "https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png",
          "name": "Laravel"
        }
      ],
      "sideSkills": [
        {
          "skillsTitle": "Front-end:",
          "details": "I have various experience on Front-end development like React, Redux, React Native, Node, etc."
        },
        {
          "skillsTitle": "Back-end:",
          "details": "I have various experience on Front-end development like React, Redux, React Native, Node, etc."
        },
        {
          "skillsTitle": "Technologies:",
          "details": "I have various experience on Front-end development like React, Redux, React Native, Node, etc."
        }
      ],
      "githubLink": "https://github.com/MickeyUr",
      "linkedinLink": "https://www.linkedin.com/in/MickeyUr",
      "githubUserName": "MickeyUr",
      // "userImage": "https://images.vexels.com/media/users/3/137049/isolated/preview/55645fc5ccb4dbf9e2fb656ddecba730-icone-laranja-de-pessoa-do-usuario.png",
      "userImage": "../photo.png",
      "aboutMe": [
        "As a MERN stack developer, I am a seasoned professional with over 3years of experience in the industry. My passion for coding and problem-solving has driven me to excel in my field, and I pride myself on my ability to create elegant, efficient, and user-friendly web applications.",
        "I have a strong background in both front-end and back-end development, and my expertise in MERN stack technologies allows me to create complex, dynamic web applications that meet the needs of even the most demanding clients.",
        "But what really sets me apart is my ability to communicate effectively with clients and colleagues alike. I believe that great software is the result of collaboration and teamwork, and I am committed to working closely with my clients to ensure that their needs are met and their expectations exceeded.",
        "In my free time, I enjoy staying up-to-date with the latest trends and technologies in the world of web development, as well as spending time with my family and exploring the great outdoors. If you're looking for a MERN stack developer who is passionate about his work, dedicated to his clients, and always striving to be the best, look no further than me."
      ],
      "email": "mickey.ur@gmail.com",
      // "phoneNumber": "+14238940",
      "experience": [
        {
          "title": "Senior Software Engineer",
          "company": "ISenven",
          "duration": "May 5, 2023 - June 5, 2023",
          "about": "I worked as a full stack developer"
        },
        {
          "title": "Senior Software Engineer",
          "company": "ISenven",
          "duration": "May 5, 2023 - June 5, 2023",
          "about": "description"
        }
      ],
      "education": [
        {
          "degreeTitle": "Bs in computer science",
          "university": "New York",
          "duration": "May 5, 2023 - June 5, 2023",
          "about": "My mejor is computer science"
        }
      ],
      "skills": [
        {
          "techName": "Javascript",
          "techImage": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
        },
        {
          "techName": "Python",
          "techImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
        },
        {
          "techName": "Node.Js",
          "techImage": "https://cdn-icons-png.flaticon.com/512/919/919825.png"
        },
        {
          "techName": "Django",
          "techImage": "https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png"
        },
        {
          "techName": "React.JS",
          "techImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
        },
        {
          "techName": "Next.JS",
          "techImage": "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
        },
        {
          "techName": "GO Lang",
          "techImage": "https://static-00.iconduck.com/assets.00/golang-icon-398x512-eygvdisi.png"
        },
        {
          "techName": "Ruby",
          "techImage": "https://cdn-icons-png.flaticon.com/512/919/919842.png"
        },
        {
          "techName": "Express.Js",
          "techImage": "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
        },
        {
          "techName": "ROR",
          "techImage": "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/16/ror-icon.png"
        }
      ],
      "resume": "https://drive.google.com/file/d/1J4u1vDtFfPZ4xg15ipsAswFioyiodQkg/view",
      "location": "Grand Rapids, MI",
      "title": "Senior Software Engineer",
      "__v": 0
    }};
  const [playGame, setPlayGame] = useState(false);
  const [isGameOver, setIsGameOver] = useState(false);
  const [eatenApples, setEatenApples] = useState(10);
  const [wellDone, setWellDone] = useState(false);

  const playAudio = () => {
    const audio = new Audio(weldoneAudio);
    audio.play();
  };
  useEffect(() => {
    if (eatenApples === 0) {
      playAudio();
      setPlayGame(!playGame);
      setWellDone(true);
    }
  }, [eatenApples]);
  const snakeFood = (
    <>
      <span className=" relative flex h-3 w-3">
        <span className="animate-ping absolute inline-flex  h-full w-full rounded-full bg-[#43D9AD] opacity-75"></span>
        <span className="relative inline-flex rounded-full h-3 w-3 bg-[#43D9AD]"></span>
      </span>
    </>
  );
  const repeatedSnakeFood = Array(eatenApples).fill(snakeFood);

  const subheading = data?.data?.userTitles;
  return (
    <div className="h-full">
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
              {/*<div>*/}
              {/*  <p className="text-text ">// find my profile on Github:</p>*/}

              {/*  <motion.a*/}
              {/*    initial={{ opacity: 0 }}*/}
              {/*    animate={{ opacity: 1 }}*/}
              {/*    transition={{ duration: 0.3 }}*/}
              {/*    href={data?.data?.githubLink}*/}
              {/*    target="_blank"*/}
              {/*  >*/}
              {/*    <span className="text-text-blue">const</span>{" "}*/}
              {/*    <span className="text-text-green">githubLink</span> ={" "}*/}
              {/*    <span className="text-text-orange">*/}
              {/*      “{data?.data?.githubLink}"*/}
              {/*    </span>*/}
              {/*  </motion.a>*/}
              {/*</div>*/}
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
