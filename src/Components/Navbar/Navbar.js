import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import "./Navbar.css";
import { useGetUserQuery } from "../../redux/features/api/createAPI";
import nav from "../../Assets/icons/nav.png";
import cross from "../../Assets/icons/nav-cross.png";
import { motion } from "framer-motion";
const Navbar = () => {
  const { data } = useGetUserQuery("mickey.ur@gmail.com");
    // const data = {data: {
    //         "_id": "64f02db7afb16ffb95954daa",
    //         "userLogo": "https://i.ibb.co/bQvHQRK/6575219-removebg-preview.png",
    //         "userLogoName": "Mikhail | Backend Mastery",
    //         "userName": "Mikhail",
    //         "userTitles": [
    //             "Full Stack Developer",
    //             "Front-end Developer",
    //             "Backend Developer"
    //         ],
    //         "shortTechnologies": [
    //             {
    //                 "img": "https://static-00.iconduck.com/assets.00/react-icon-1822x2048-yiodjgoi.png",
    //                 "name": "React.JS"
    //             },
    //             {
    //                 "img": "https://static-00.iconduck.com/assets.00/next-js-icon-512x512-zuauazrk.png",
    //                 "name": "Next.JS"
    //             },
    //             {
    //                 "img": "https://www.svgrepo.com/show/303557/redux-logo.svg",
    //                 "name": "Redux"
    //             },
    //             {
    //                 "img": "https://cdn.icon-icons.com/icons2/2699/PNG/512/expressjs_logo_icon_169185.png",
    //                 "name": "Express"
    //             },
    //             {
    //                 "img": "https://static-00.iconduck.com/assets.00/laravel-icon-497x512-uwybstke.png",
    //                 "name": "Laravel"
    //             }
    //         ],
    //         "sideSkills": [
    //             {
    //                 "skillsTitle": "Front-end:",
    //                 "details": "I have various experience on Front-end development like React, Redux, React Native, Node, etc."
    //             },
    //             {
    //                 "skillsTitle": "Back-end:",
    //                 "details": "I have various experience on Front-end development like React, Redux, React Native, Node, etc."
    //             },
    //             {
    //                 "skillsTitle": "Technologies:",
    //                 "details": "I have various experience on Front-end development like React, Redux, React Native, Node, etc."
    //             }
    //         ],
    //         "githubLink": "https://github.com/MickeyUr",
    //         "linkedinLink": "https://www.linkedin.com/in/MickeyUr",
    //         "githubUserName": "MickeyUr",
    //         "userImage": "https://images.vexels.com/media/users/3/137049/isolated/preview/55645fc5ccb4dbf9e2fb656ddecba730-icone-laranja-de-pessoa-do-usuario.png",
    //         "aboutMe": [
    //             "I position myself as a developer of server-part (PHP / MySQL / PostgreSQL; frameworks) of web applications. My profile is working with data. Receive, search, process, save and output. I also have skills in UI/UX design and front-end development. They are enough for self-implementation of various admin panels and back-offices.",
    //             // "I have a strong background in both front-end and back-end development, and my expertise in MERN stack technologies allows me to create complex, dynamic web applications that meet the needs of even the most demanding clients.",
    //             "But what really sets me apart is my ability to communicate effectively with clients and colleagues alike. I believe that great software is the result of collaboration and teamwork, and I am committed to working closely with my clients to ensure that their needs are met and their expectations exceeded.",
    //             "In my free time, I enjoy staying up-to-date with the latest trends and technologies in the world of web development, as well as spending time with my family and exploring the great outdoors. If you're looking for a MERN stack developer who is passionate about his work, dedicated to his clients, and always striving to be the best, look no further than me."
    //         ],
    //         "email": "mickey.ur@gmail.com",
    //         // "phoneNumber": "+14238940",
    //         "experience": [
    //             {
    //                 "title": "Junior PHP developer",
    //                 "company": "BrainStorm WebStudio",
    //                 "duration": "Jan 2013 - Dec 2014",
    //                 "about": "Developing and fixing issues of PHP, Yii 1.16, Yii2 based on MVC-pattern projects. Developing front-end & back-end functionality. Working with API GoogleMaps, YandexMaps, YandexMetrika and so on. Using AJAX, JSON communications technology. Developing the elements of JQuery, FancyBox and other JS-libraries."
    //             },
    //             {
    //                 "title": "Middle PHP developer",
    //                 "company": "FreshView",
    //                 "duration": "Feb 2014 - Aug 2015",
    //                 "about": "Developing CRM for payment orders, sending & tracking monitor system for Europe(Germany) company. Developing backend architecture & optimization of BIGDATA perfomance."
    //             },
    //             {
    //                 "title": "Head PHP-developer",
    //                 "company": "FreshView",
    //                 "duration": "Aug 2015 - Nov 2016",
    //                 "about": "Developing CRM for ordering sport-places in time for Germany. Responsible for Pay-Pal API, and CronJob for generating seances."
    //             },
    //             {
    //                 "title": "Head PHP-developer",
    //                 "company": "Viaduct",
    //                 "duration": "Jan 2019 - 2018",
    //                 "about": "Developing CRM for ordering sport-places in time for Germany. Responsible for Pay-Pal API, and CronJob for generating seances."
    //             }
    //         ],
    //         "education": [
    //             {
    //                 "degreeTitle": "MS in computer science",
    //                 "university": "Information and Computer Systems Department.",
    //                 "duration": "2009 - 2015",
    //                 "about": "Chernihiv Polytechnic National University"
    //             }
    //         ],
    //         "skills": [
    //             {
    //                 "techName": "Javascript",
    //                 "techImage": "https://cdn-icons-png.flaticon.com/512/5968/5968292.png"
    //             },
    //             {
    //                 "techName": "Python",
    //                 "techImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c3/Python-logo-notext.svg/1869px-Python-logo-notext.svg.png"
    //             },
    //             {
    //                 "techName": "Node.Js",
    //                 "techImage": "https://cdn-icons-png.flaticon.com/512/919/919825.png"
    //             },
    //             {
    //                 "techName": "Django",
    //                 "techImage": "https://static-00.iconduck.com/assets.00/django-icon-1606x2048-lwmw1z73.png"
    //             },
    //             {
    //                 "techName": "React.JS",
    //                 "techImage": "https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png"
    //             },
    //             {
    //                 "techName": "Next.JS",
    //                 "techImage": "https://w7.pngwing.com/pngs/87/586/png-transparent-next-js-hd-logo.png"
    //             },
    //             {
    //                 "techName": "GO Lang",
    //                 "techImage": "https://static-00.iconduck.com/assets.00/golang-icon-398x512-eygvdisi.png"
    //             },
    //             {
    //                 "techName": "Ruby",
    //                 "techImage": "https://cdn-icons-png.flaticon.com/512/919/919842.png"
    //             },
    //             {
    //                 "techName": "Express.Js",
    //                 "techImage": "https://w7.pngwing.com/pngs/925/447/png-transparent-express-js-node-js-javascript-mongodb-node-js-text-trademark-logo.png"
    //             },
    //             {
    //                 "techName": "ROR",
    //                 "techImage": "https://adware-technologies.s3.amazonaws.com/uploads/technology/thumbnail/16/ror-icon.png"
    //             }
    //         ],
    //         "resume": "https://drive.google.com/file/d/1J4u1vDtFfPZ4xg15ipsAswFioyiodQkg/view",
    //         "location": "Grand Rapids, MI",
    //         "title": "Senior Software Engineer",
    //         "__v": 0
    //     }};


    const [mobileMenus, setMobileMenus] = useState(false);
  const location = useLocation();
  const isActive = (path) => location.pathname === path;

  const toggleMobileMenus = () => {
    setMobileMenus(!mobileMenus);
  };

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 },
  };

  return (
    <div className="md:flex">
      {/* Logo and hambargar */}
      <div className="flex justify-between items-center p-[18px] border-b border-border-bg md:w-2/12">
        {data?.data && (
          <motion.h2
          initial={{ opacity: 0, x:-100 }}
          animate={{ opacity: 1 , x:0}}
          transition={{ duration: 0.3 }}
          className="text-text font-[450] flex items-center">
            <img src={data?.data?.userLogo} className="h-6 w-6 mx-2" alt="" />{" "}
            {data?.data?.userLogoName}
          </motion.h2>
        )}
        <div className="md:hidden" onClick={toggleMobileMenus}>
          <img src={mobileMenus ? cross : nav} alt="" />
        </div>
      </div>

      {/* Mobile Menus */}
      <motion.div
        initial={{ opacity: 0.6 }}
        whileHover={{
          scale: 1.2,
          transition: { duration: 1 },
          
        }}
        whileTap={{ scale: 0.9 }}
        whileInView={{ opacity: 1 }}

        className={`${
          mobileMenus ? "block" : "hidden"
        } fixed w-full bg-[#011627eb] top-0 h-screen flex flex-col justify-center items-center transition z-30`}
      >
        <button
          className="absolute top-0 left-1/2 transform -translate-x-1/2 mt-10 transition duration-300 ease-in-out hover:text-red-500"
          onClick={toggleMobileMenus}
        >
          <img src={mobileMenus ? cross : nav} alt="" />
        </button>
        <ul className="w-full flex flex-col justify-center items-center p-0">
          {["/", "/about", "/projects", "/skills", "/contact"].map((path) => (
            <li
              key={path}
              className={`nav-links w-full text-center py-4 ${
                isActive(path) ? "navActive" : ""
              } `}
              onClick={toggleMobileMenus}
            >
              <Link to={path}>
                {path === "/" ? "_Home" : `_${path.substring(1)}`}
              </Link>
            </li>
          ))}
        </ul>
      </motion.div>
      {/* Desktop Menus */}
      <ul className="flex md:w-10/12 hidden md:flex">
        {["/", "/about", "/projects", "/skills", "/contact"].map((path) => (
          <li
            key={path}
            className={`nav-links rounded-Border ${
              isActive(path) ? "navActive" : ""
            }`}
          >
            <Link to={path}>
              {path === "/" ? "_Home" : `_${path.substring(1)}`}
            </Link>
          </li>
        ))}
        {data?.data?.resume && (
          <li className="nav-links rounded-Border flex-grow text-right">
            <a
              href={data?.data?.resume}
              target="_blank"
              rel="noopener noreferrer"
            >
              _Resume
            </a>
          </li>
        )}
      </ul>
    </div>
  );
};

export default Navbar;
