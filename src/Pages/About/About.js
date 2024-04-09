import React, { useState } from "react";
import "./About.css";
import headerDrop from "../../Assets/icons/headerDrop.png";
import folderGreen from "../../Assets/icons/folders/green.png";
import folderOrange from "../../Assets/icons/folders/orange.png";
import folderBlue from "../../Assets/icons/folders/blue.png";
import PersonalInfo from "./PersonalInfoFolder/PersonalInfo";
import email from "../../Assets/icons/mail-icon.png";
import phone from "../../Assets/icons/phone-icon.png";
import cross from "../../Assets/icons/close-icon.png";
import comment from "../../Assets/icons/comments-icon.png";
import starts from "../../Assets/icons/Star.png";
import { useGetUserQuery } from "../../redux/features/api/createAPI";
import { motion } from "framer-motion";
import { Helmet } from "react-helmet";

const About = () => {
  // Show File
  const [showedFile, setShowdFile] = useState("Profile");
  // sidebar states
  const [isOpenPersonalInfo, setisOpenPersonalInfo] = useState(true);
  const [isOpencontact, setisOpencontact] = useState(true);

  const isLoading = false;
  const data = {data: {
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
      "userImage": "https://images.vexels.com/media/users/3/137049/isolated/preview/55645fc5ccb4dbf9e2fb656ddecba730-icone-laranja-de-pessoa-do-usuario.png",
      "aboutMe": [
        "Experienced lead developer who have worked on several complex projects for companies from different countries. Working in Web Development Industry since 2013.",
        "I have a strong background in both front-end and back-end development, and my expertise in WEB stack technologies allows me to create complex, dynamic web applications that meet the needs of even the most demanding clients.",
        "Worked both at office and remotely, at several companies. Sometimes was the only developer on a project, but often worked in a team. Also, I was act as a team lead on some projects.",
        "Having reasonable English skill, I also have rich experience of working in maintenance of existing products, bug fixing, testing and eliminating compatibility issues and all that sort of things.",
        "Create and implement web-services such as: inventory system, access control systems, customer relationship management (CRM), enterprise resource planning (ERP), online shops, ticketing system, booking and order management systems, ecommerce applications, REST APIs, etc."
      ],
      "email": "mickey.ur@gmail.com",
      // "phoneNumber": "+14238940",
      "experience": [
        {
          "title": "Full-stack engineer",
          "company": "Viaduct",
          "duration": "Jan 2019 - Now",
          "about": "Developing online shops, ticketing system, customer relationship management (CRM) system, enterprise resource planning (ERP) systems. Responsible for implementation of business logic, backend development, supporting sites, fix bugs, working with old code and develop new sites from scratch."
        },
        {
          "title": "Head PHP-developer",
          "company": "FreshView",
          "duration": "Aug 2015 - Oct 2018",
          "about": "Developing CRM for ordering sport-places in time for Germany. Responsible for Pay-Pal API, and CronJob for generating seances."
        },
        {
          "title": "Middle PHP developer",
          "company": "FreshView",
          "duration": "Feb 2014 - Aug 2015",
          "about": "Developing CRM for payment orders, sending & tracking monitor system for Europe(Germany) company. Developing backend architecture & optimization of BIGDATA perfomance."
        },
        {
          "title": "Junior PHP developer",
          "company": "BrainStorm WebStudio",
          "duration": "Jan 2013 - Dec 2014",
          "about": "Developing and fixing issues of PHP, Yii 1.16, Yii2 based on MVC-pattern projects. Developing front-end & back-end functionality. Working with API GoogleMaps, YandexMaps, YandexMetrika and so on. Using AJAX, JSON communications technology. Developing the elements of JQuery, FancyBox and other JS-libraries."
        },



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
    }};

  return (
    <div className="md:flex h-full ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mickey Uryvalkin - About</title>
      </Helmet>
      <div className="md:w-2/12 border-r border-border-bg md:flex pl-4">
        <div className="md:w-10/12 w-full">
          <div>
            <div className="text-left flex items-center p-2 w-full border-b border-border-bg">
              {isOpenPersonalInfo ? (
                <img src={headerDrop} className="pr-4 " alt="" />
              ) : (
                <img src={headerDrop} className="pr-4 -rotate-90 " alt="" />
              )}
              <h2
                className="text-lg font-normal cursor-pointer"
                onClick={() => {
                  setisOpenPersonalInfo(!isOpenPersonalInfo);
                }}
              >
                personal-info
              </h2>
            </div>
            {isOpenPersonalInfo && (
              <motion.ul
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2"
              >
                <PersonalInfo
                  folder={folderOrange}
                  content="bio"
                  OpenStatus={true}
                  file={{ fileName: "Profile", setShowdFile }}
                ></PersonalInfo>
                <PersonalInfo
                  folder={folderGreen}
                  content="Experience"
                  file={{ fileName: "Experience", setShowdFile }}
                ></PersonalInfo>
                <PersonalInfo
                  folder={folderBlue}
                  content="educations"
                  file={{ fileName: "Education", setShowdFile }}
                ></PersonalInfo>
              </motion.ul>
            )}
          </div>
          <div className="my-4">
            <div className="text-left flex items-center p-2 w-full border-b border-t border-border-bg">
              {isOpencontact ? (
                <img src={headerDrop} className="pr-4 " alt="" />
              ) : (
                <img src={headerDrop} className="pr-4 -rotate-90 " alt="" />
              )}
              <h2
                className="text-lg font-normal cursor-pointer"
                onClick={() => {
                  setisOpencontact(!isOpencontact);
                }}
              >
                Contacts
              </h2>
            </div>
            {isOpencontact && (
              <motion.ul
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.3 }}
                className="p-2"
              >
                <li className="my-2 flex items-center  text-text text-sm">
                  <img src={email} className="pr-2" alt="" />
                  <a href={`mailto:${data?.data?.email}`}>
                    {data?.data?.email}
                  </a>
                </li>
                {/*<li className="my-2 flex items-center  text-text ">*/}
                {/*  <img src={phone} className="pr-2" alt="" />*/}
                {/*  <span>{data?.data?.phoneNumber}</span>*/}
                {/*</li>*/}
              </motion.ul>
            )}
          </div>
        </div>
      </div>
      <div className="md:w-10/12 h-full overflow-hidden">
        <div className="p-2 text-left border-b border-border-bg">
          <h2 className="text-base text-text flex ">
            <span>
              {showedFile === "Profile" && "Profile"}{" "}
              {showedFile === "Education" && "Education"}{" "}
              {showedFile === "Experience" && "Experience"}
            </span>{" "}
            <img
              onClick={() => {
                setShowdFile("Profile");
              }}
              className="px-10"
              src={cross}
              alt=""
            />
          </h2>
        </div>
        <div className="md:flex md:h-full">
          <div className="md:w-auto border-r border-border-bg relative">
            {showedFile === "Profile" && (
              <ul className="text-text text-left py-4 px-6 overflow-scroll h-[80vh] about-profile">
                <li className="text-center text-lg font-bold py-2 ">
                  <span>/** About Me ** /</span>
                </li>
                {data?.data?.aboutMe &&
                  data?.data?.aboutMe.map((singelLine, index) => (
                    <motion.li
                      key={index}
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 * index }}
                      className="flex py-4"
                    >
                      <span>{singelLine}</span>
                    </motion.li>
                  ))}
              </ul>
            )}
            {showedFile === "Education" && (
              <ul className="text-text text-left py-4 px-6">
                <li className="text-center text-lg font-bold py-2 ">
                  <span>/** Education ** /</span>
                </li>

                {data?.data?.education &&
                  data?.data?.education.map((edu, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 * index }}
                      className="px-4 py-6 "
                    >
                      <ul className="flex ">
                        <li className="font-bold">{edu.degreeTitle},</li>
                        <li className="pl-2">{edu.university}</li>
                      </ul>
                      <p className="py-2">{edu.about}</p>
                      <h3 className="font-semibold">{edu.duration}</h3>
                    </motion.li>
                  ))}
              </ul>
            )}
            {showedFile === "Experience" && (
              <ul className="text-text text-left py-4 px-6">
                <li className="text-center text-lg font-bold py-2 ">
                  <span>/** Experience ** /</span>
                </li>

                {data?.data?.experience &&
                  data?.data?.experience.map((exp, index) => (
                    <motion.li
                      initial={{ opacity: 0, y: 100 }}
                      animate={{ opacity: 1, y: 0 }}
                      transition={{ duration: 0.3 * index }}
                      className="px-4 py-6 "
                    >
                      <ul className="flex justify-between">
                        <li className="font-bold">{exp.title}</li>
                        <li>{exp.company}</li>
                      </ul>
                      <p className="py-2">{exp.about}</p>
                      <h3 className="font-semibold">{exp.duration}</h3>
                    </motion.li>
                  ))}
              </ul>
            )}

            <div className="absolute h-full w-5 border-l border-border-bg  top-0 right-0">
              <div className=" bg-border-bg h-3 w-full"></div>
            </div>
          </div>

          {/*<div className="md:w-1/2 relative">*/}
          {/*  <div className="text-text text-left py-4 px-6">*/}
          {/*    <h2 className="text-text">// Code snippet showcase:</h2>*/}
          {/*    <motion.div*/}
          {/*      initial={{ opacity: 0, scale: 0.5 }}*/}
          {/*      animate={{ opacity: 1, scale: 1 }}*/}
          {/*      transition={{ duration: 0.5 }}*/}
          {/*      className="my-4"*/}
          {/*    >*/}
          {/*      <div className="flex justify-between items-center mr-6 my-10">*/}
          {/*        <div className="flex items-center">*/}
          {/*          <img*/}
          {/*            src={data?.data?.userImage}*/}
          {/*            className="h-12 w-12 rounded-full mx-4"*/}
          {/*            alt=""*/}
          {/*          />*/}
          {/*          <div>*/}
          {/*            <p>{data?.data?.githubUserName}</p>*/}
          {/*            <p>created 5 months ago</p>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="flex space-x-4">*/}
          {/*          <h1 className="flex space-x-2">*/}
          {/*            <img src={comment} alt="" /> <span>Details</span>*/}
          {/*          </h1>*/}
          {/*          <h1 className="flex space-x-2">*/}
          {/*            <img src={starts} alt="" /> <span>3</span>{" "}*/}
          {/*            <span>starts</span>*/}
          {/*          </h1>*/}
          {/*        </div>*/}
          {/*      </div>*/}

          {/*      <div className="bg-[#011221] rounded-2xl px-8 py-6 text-sm">*/}
          {/*        <p>*/}
          {/*          <span className="text-text-orange">function</span>{" "}*/}
          {/*          initializeModelChunk{" "}*/}
          {/*          <span className="text-text-blue">&lt;</span>*/}
          {/*          <span className="text-text-green">T</span>*/}
          {/*          <span className="text-text-blue">&gt;</span> (chunk:*/}
          {/*          ResolvedModelChunk): T{" {"}*/}
          {/*        </p>*/}
          {/*        <div className="pl-4">*/}
          {/*          <p>*/}
          {/*            const value: <span className="text-text-yellow">T</span> ={" "}*/}
          {/*            <span className="text-purple">parseModel</span>( chunk.*/}
          {/*            <span className="text-text-blue">_response</span>, chunk.*/}
          {/*            <span className="text-text-blue">_value</span>);*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            <span className="text-text-orange">const</span>{" "}*/}
          {/*            initializedChunk:{" "}*/}
          {/*            <span className="text-text-yellow">InitializedChunk</span>*/}
          {/*            <span className="text-text-blue">&lt;</span>*/}
          {/*            <span className="text-text-yellow">T</span>*/}
          {/*            <span className="text-text-blue">&gt;</span> = {"{"}{" "}*/}
          {/*            ...chunk, _status: INITIALIZED, _value: value*/}
          {/*            {"}"};*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            initializedChunk.*/}
          {/*            <span className="text-text-blue">_status</span> =*/}
          {/*            INITIALIZED;*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            initializedChunk.*/}
          {/*            <span className="text-text-blue">_value</span> = value;*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            <span className="text-text-orange">return</span> value;*/}
          {/*          </p>*/}
          {/*        </div>*/}
          {/*        <p>{"}"}</p>*/}
          {/*      </div>*/}
          {/*    </motion.div>*/}
          {/*    <motion.div*/}
          {/*      initial={{ opacity: 0, scale: 0.5 }}*/}
          {/*      animate={{ opacity: 1, scale: 1 }}*/}
          {/*      transition={{ duration: 0.7 }}*/}
          {/*      className="my-4"*/}
          {/*    >*/}
          {/*      <div className="flex justify-between items-center mr-6 my-10">*/}
          {/*        <div className="flex items-center">*/}
          {/*          <img*/}
          {/*            src={data?.data?.userImage}*/}
          {/*            className="h-12 w-12 rounded-full mx-4"*/}
          {/*            alt=""*/}
          {/*          />*/}
          {/*          <div>*/}
          {/*            <p>{data?.data?.githubUserName}</p>*/}
          {/*            <p>created 5 months ago</p>*/}
          {/*          </div>*/}
          {/*        </div>*/}
          {/*        <div className="flex space-x-4">*/}
          {/*          <h1 className="flex space-x-2">*/}
          {/*            <img src={comment} alt="" /> <span>Details</span>*/}
          {/*          </h1>*/}
          {/*          <h1 className="flex space-x-2">*/}
          {/*            <img src={starts} alt="" /> <span>3</span>{" "}*/}
          {/*            <span>starts</span>*/}
          {/*          </h1>*/}
          {/*        </div>*/}
          {/*      </div>*/}
          {/*      <div className="bg-[#011221] rounded-2xl px-8 py-6 text-sm">*/}
          {/*        <p>*/}
          {/*          <span className="text-text-orange">function</span>{" "}*/}
          {/*          initializeModelChunk{" "}*/}
          {/*          <span className="text-text-blue">&lt;</span>*/}
          {/*          <span className="text-text-green">T</span>*/}
          {/*          <span className="text-text-blue">&gt;</span> (chunk:*/}
          {/*          ResolvedModelChunk): T{" {"}*/}
          {/*        </p>*/}
          {/*        <div className="pl-4">*/}
          {/*          <p>*/}
          {/*            const value: <span className="text-text-yellow">T</span> ={" "}*/}
          {/*            <span className="text-purple">parseModel</span>( chunk.*/}
          {/*            <span className="text-text-blue">_response</span>, chunk.*/}
          {/*            <span className="text-text-blue">_value</span>);*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            <span className="text-text-orange">const</span>{" "}*/}
          {/*            initializedChunk:{" "}*/}
          {/*            <span className="text-text-yellow">InitializedChunk</span>*/}
          {/*            <span className="text-text-blue">&lt;</span>*/}
          {/*            <span className="text-text-yellow">T</span>*/}
          {/*            <span className="text-text-blue">&gt;</span> = {"{"}{" "}*/}
          {/*            ...chunk, _status: INITIALIZED, _value: value*/}
          {/*            {"}"};*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            initializedChunk.*/}
          {/*            <span className="text-text-blue">_status</span> =*/}
          {/*            INITIALIZED;*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            initializedChunk.*/}
          {/*            <span className="text-text-blue">_value</span> = value;*/}
          {/*          </p>*/}
          {/*          <p>*/}
          {/*            <span className="text-text-orange">return</span> value;*/}
          {/*          </p>*/}
          {/*        </div>*/}
          {/*        <p>{"}"}</p>*/}
          {/*      </div>*/}
          {/*    </motion.div>*/}
          {/*  </div>*/}
          {/*  <div className="absolute h-full w-5 border-l border-border-bg  top-0 right-0">*/}
          {/*    <div className=" bg-border-bg h-3 w-full"></div>*/}
          {/*  </div>*/}
          {/*</div>*/}
        </div>
      </div>
    </div>
  );
};

export default About;
