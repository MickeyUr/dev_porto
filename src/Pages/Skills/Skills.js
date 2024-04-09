import React, {useState} from "react";
import headerDrop from "../../Assets/icons/headerDrop.png";
import SwiperCore, {
    Navigation,
    Pagination,
    Autoplay,
    EffectFade,
} from "swiper";
import {Swiper, SwiperSlide} from "swiper/react";
import "swiper/css";
import "swiper/swiper-bundle.min.css";

import "./Skills.css";
import {useGetUserQuery} from "../../redux/features/api/createAPI";

import {motion} from "framer-motion";
import {Helmet} from "react-helmet";

import DynamicIconCloud from "./DynamicIconCloud";
import comment from "../../Assets/icons/comments-icon.png";
import starts from "../../Assets/icons/Star.png";
import cross from "../../Assets/icons/close-icon.png";

const Skills = () => {
    const isLoading = false;
    const data = {
        data: {
            "_id": "64f02db7afb16ffb95954daa",
            "userLogo": "https://i.ibb.co/bQvHQRK/6575219-removebg-preview.png",
            "userLogoName": "MK",
            "userName": "Mikhail",
            "userTitles": [
                "Full Stack Developer",
                "Front-end Developer",
                "Backend Developer"
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
                    "skillsTitle": "Back-end:",
                    "details": "Full circle of backend development from Planning, Database design, Business logic, API development and Testing to Deployed it to production server."
                },
                {
                    "skillsTitle": "Front-end:",
                    "details": "I have skills in UI/UX design and front-end development. They are enough for self-implementation of various admin panels and back-offices."
                },
                // {
                //     "skillsTitle": "Technologies:",
                //     "details": "I have various experience on Front-end development like React, Redux, React Native, Node, etc.",
                // }
            ],
            "githubLink": "https://github.com/MickeyUr",
            "linkedinLink": "https://www.linkedin.com/in/MickeyUr",
            "githubUserName": "MickeyUr",
            "userImage": "https://images.vexels.com/media/users/3/137049/isolated/preview/55645fc5ccb4dbf9e2fb656ddecba730-icone-laranja-de-pessoa-do-usuario.png",
            "aboutMe": [
                "I position myself as a developer of server-part (PHP / MySQL / PostgreSQL; frameworks) of web applications. My profile is working with data. Receive, search, process, save and output. I also have skills in UI/UX design and front-end development. They are enough for self-implementation of various admin panels and back-offices.",
                // "I have a strong background in both front-end and back-end development, and my expertise in MERN stack technologies allows me to create complex, dynamic web applications that meet the needs of even the most demanding clients.",
                "But what really sets me apart is my ability to communicate effectively with clients and colleagues alike. I believe that great software is the result of collaboration and teamwork, and I am committed to working closely with my clients to ensure that their needs are met and their expectations exceeded.",
                "In my free time, I enjoy staying up-to-date with the latest trends and technologies in the world of web development, as well as spending time with my family and exploring the great outdoors. If you're looking for a MERN stack developer who is passionate about his work, dedicated to his clients, and always striving to be the best, look no further than me."
            ],
            "email": "mickey.ur@gmail.com",
            // "phoneNumber": "+14238940",
            "experience": [
                {
                    "title": "Junior PHP developer",
                    "company": "BrainStorm WebStudio",
                    "duration": "Jan 2013 - Dec 2014",
                    "about": "Developing and fixing issues of PHP, Yii 1.16, Yii2 based on MVC-pattern projects. Developing front-end & back-end functionality. Working with API GoogleMaps, YandexMaps, YandexMetrika and so on. Using AJAX, JSON communications technology. Developing the elements of JQuery, FancyBox and other JS-libraries."
                },
                {
                    "title": "Middle PHP developer",
                    "company": "FreshView",
                    "duration": "Feb 2014 - Aug 2015",
                    "about": "Developing CRM for payment orders, sending & tracking monitor system for Europe(Germany) company. Developing backend architecture & optimization of BIGDATA perfomance."
                },
                {
                    "title": "Head PHP-developer",
                    "company": "FreshView",
                    "duration": "Aug 2015 - Nov 2016",
                    "about": "Developing CRM for ordering sport-places in time for Germany. Responsible for Pay-Pal API, and CronJob for generating seances."
                },
                {
                    "title": "Head PHP-developer",
                    "company": "Viaduct",
                    "duration": "Jan 2019 - 2018",
                    "about": "Developing CRM for ordering sport-places in time for Germany. Responsible for Pay-Pal API, and CronJob for generating seances."
                }
            ],
            "education": [
                {
                    "degreeTitle": "MS in computer science",
                    "university": "Information and Computer Systems Department.",
                    "duration": "2009 - 2015",
                    "about": "Chernihiv Polytechnic National University"
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
        }
    };

    SwiperCore.use([Navigation, Pagination, Autoplay]);
    const [isOpenSkills, setisOpenSkills] = useState(true);
    const images = [
        "image1.jpg",
        "image2.jpg",
        "image3.jpg",
        // Add more image URLs here
    ];

    return (
        <div className="md:flex h-full skills overflow-scroll hidenScroll">
            <Helmet>
                <meta charSet="utf-8"/>
                <title>Mickey Uryvalkin - Skills</title>
            </Helmet>
            <div className="md:w-2/12 border-r border-border-bg pl-4 md:flex ">
                <div className="md:w-10/12 w-full">
                    <div>
                        <div
                            className="text-left flex items-center p-2 w-full border-b border-border-bg cursor-pointer"
                            onClick={() => {
                                setisOpenSkills(!isOpenSkills);
                            }}
                        >
                            {isOpenSkills ? (
                                <img src={headerDrop} className="pr-4 " alt=""/>
                            ) : (
                                <img src={headerDrop} className="pr-4 -rotate-90 " alt=""/>
                            )}
                            <h2 className="text-lg font-normal">Skills</h2>
                        </div>
                    </div>
                </div>
            </div>


            <div className="md:w-10/12 h-full overflow-hidden">
                <div className="p-2 text-left border-b border-border-bg">
                    <h2 className="text-base text-text flex ">
            <span>
              Skills
            </span>
                        <img
                            className="px-10"
                            src={cross}
                            alt=""
                        />
                    </h2>
                </div>
                <div className="md:flex md:h-full">
                    <div className="md:w-auto border-r border-border-bg relative">

                        <div
                            className="  h-full overflow-scroll hidenScroll text-left text-text text-left py-4 px-6">
                            {/*{isOpenSkills && (*/}
                            <div>
                                {data?.data?.sideSkills &&
                                    data?.data?.sideSkills.map((side, index) => (
                                        <motion.div
                                            key={index}
                                            initial={{x: -100}}
                                            animate={{x: 0}}
                                            transition={{type: "spring", mass: 0.3 * (index + 1)}}
                                            className="text-left text-text my-6"
                                        >
                                            <h2 className="text-bold  text-xl  ">
                                                {side.skillsTitle}
                                            </h2>
                                            <p>{side.details}</p>
                                        </motion.div>
                                    ))}
                            </div>
                            {/*)}*/}
                            {/*<DynamicIconCloud/>*/}
                            {/*<motion.div*/}
                            {/*  initial={{ scale: 0 }}*/}
                            {/*  animate={{ scale: 1 }}*/}
                            {/*  transition={{ type: "spring", mass: 0.5 }}*/}
                            {/*  className="circle relative w-[300px] h-[300px] md:w-[600px] md:h-[600px] border border-border-bg  rounded-full"*/}
                            {/*>*/}
                            {/*  <div className="relative h-full w-full -left-[50%] flex justify-center items-center">*/}
                            {/*    {data?.data?.skills &&*/}
                            {/*      data?.data?.skills.map((skill, index) => (*/}
                            {/*        <div*/}
                            {/*          key={index}*/}
                            {/*          style={{ "--i": index + 1 }}*/}
                            {/*          className="w-[40px] h-[40px] md:w-[100px] md:h-[100px] rounded-full  skillBox bg-blue-500 absolute"*/}
                            {/*        >*/}
                            {/*          <motion.img*/}
                            {/*            className="insideImg h-8 w-8 md:h-20 md:w-20 mx-auto block 	"*/}
                            {/*            src={skill.techImage}*/}
                            {/*            alt=""*/}
                            {/*          />*/}
                            {/*        </div>*/}
                            {/*      ))}*/}
                            {/*  </div>*/}
                            {/*  <motion.div*/}
                            {/*    initial={{ scale: 0 }}*/}
                            {/*    animate={{ scale: 1 }}*/}
                            {/*    transition={{ type: "spring", mass: 0.9 }}*/}
                            {/*    className="content"*/}
                            {/*  >*/}
                            {/*    <div className="carosul_content"></div>*/}
                            {/*    <Swiper*/}
                            {/*      spaceBetween={10}*/}
                            {/*      slidesPerView={1}*/}
                            {/*      autoplay={{ delay: 500 }}*/}
                            {/*      loop={true}*/}
                            {/*      effect="fade"*/}
                            {/*      style={{ width: "40%", textAlign: "center" }}*/}
                            {/*      fadeEffect={{*/}
                            {/*        crossFade: true, // Enable cross fade animation*/}
                            {/*        duration: 800, // Set the duration in milliseconds*/}
                            {/*      }}*/}
                            {/*    >*/}
                            {/*      {data?.data?.skills &&*/}
                            {/*        data?.data?.skills.map((skill, index) => (*/}
                            {/*          <SwiperSlide key={index}>*/}
                            {/*            <img*/}
                            {/*              src={skill.techImage}*/}
                            {/*              alt={skill.techImage}*/}
                            {/*              className="rounded-full"*/}
                            {/*            />*/}
                            {/*          </SwiperSlide>*/}
                            {/*        ))}*/}
                            {/*    </Swiper>*/}
                            {/*  </motion.div>*/}
                            {/*</motion.div>*/}
                        </div>


                        <div className="absolute h-full w-5 border-l border-border-bg  top-0 right-0">
                            <div className=" bg-border-bg h-3 w-full"></div>
                        </div>


                    </div>
                    <div className="md:w-10/12 relative justify-center items-center">
                        <motion.div
                            initial={{x: 100}}
                            animate={{x: 0}}
                            transition={{type: "spring", mass: 0.3 * (1 + 1)}}
                            className="text-left text-text my-6"
                        >
                            <DynamicIconCloud/>
                        </motion.div>

                    </div>
                </div>
            </div>


        </div>
    );
};

export default Skills;
