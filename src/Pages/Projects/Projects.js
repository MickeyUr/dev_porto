import React, { useEffect, useRef, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import headerDrop from "../../Assets/icons/headerDrop.png";
import cross from "../../Assets/icons/close.png";
import LanguageCard from "./LanguageCard/LanguageCard";
import reactImage from "../../Assets/icons/languages/react.png";
import htmlImage from "../../Assets/icons/languages/html.png";
import cssImage from "../../Assets/icons/languages/css.png";
import gatsImage from "../../Assets/icons/languages/gatsby.png";
import ProjectsCard from "./ProjectsCard/ProjectsCard";
import TagButton from "../../Components/Button/TagButton";
import SecondButton from "../../Components/Button/SecondButton";
import starfill from "../../Assets/icons/starfill.png";
import staroutline from "../../Assets/icons/staroutline.png";
import sideArrow from "../../Assets/icons/sideArrow.png";
import { motion, layout } from "framer-motion";
// Import Swiper styles
import "swiper/css";
import "./Projects.css";

import { Autoplay, Pagination, Navigation } from "swiper";
import { useDispatch, useSelector } from "react-redux";
import { setOpenProject } from "../../redux/features/project/projectSlice";
import {
  useGetUserQuery,
  useGetprojectsQuery,
} from "../../redux/features/api/createAPI";
import SideProjectCard from "./ProjectsCard/SideProjectCard";
import { Helmet } from "react-helmet";

const Projects = () => {
  const myProjects = useSelector((state) => state.myProjects);
  const sortProject = useSelector((state) => state.myProjects.sortProject);

  const {
    projectTitle,
    projectKeyWord,
    gellaryImages,
    overview,
    developersRole,
    Duration,
    challenges,
    features,
    Technologies,
    Result,
  } = myProjects?.detailsProject;

  const dispatch = useDispatch();
  // const { data } = useGetprojectsQuery("mickey.ur@gmail.com");
  const data = {data:[
      {
        "_id": "64eb0ee4cb0a7e5d718fe164",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Online store targeted at pet products, including pet medicine.",
        "projectKeyWord": "Online shopping",
        "gellaryImages": [
          "https://i.ibb.co/VNK9dg6/1.png",
          "https://i.ibb.co/Srd0VTz/2.png",
          "https://i.ibb.co/VJLbv6z/3.png",
          "https://i.ibb.co/kcz6S3f/4.png",
          "https://i.ibb.co/5Mf5mTv/5.png",
          "https://i.ibb.co/GJkWdFQ/6.png",
          "https://i.ibb.co/8j9F1SS/7.png",
          "https://i.ibb.co/MZ7MqJ6/8.png",
          "https://i.ibb.co/Nmk7D25/9.png",
          "https://i.ibb.co/3mdyywR/22.png"
        ],
        "projectCategory": [
          "React.js"
        ],
        "overview": [
          "As pet owners, the founders of Wagmo understood that basic procedures such as vaccinations, grooming, and bloodwork could quickly accumulate four-digit bills, and they saw an opportunity to create a unique platform that would make everyday pet care more affordable.",
          "While most pet insurance providers only focus on medical emergencies, Wagmo's platform covers both urgent care and essential services. Following several successful seed rounds, the company engaged with me to enhance the platform's functionality. To improve customer service and keep pace with the ongoing digital transformation, Wagmo needed to move beyond Excel spreadsheets. ",
          "Therefore, we migrated all client data to a dedicated app, enabling streamlined insurance plan management and more efficient client onboarding."
        ],
        "Technologies": [
          "React",
          "Redux",
          "Firebase",
          "Material UI",
          "Jest",
          "Python",
          "Django",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "Docker",
          "PostgreSQL",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Implementing marketing tools like Klaviyo to collect usage stats and trends effectively and increase web traffic.",
          "Designing a user-friendly check-out flow that allows users to add new packages easily.",
          "Providing comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "User-friendly check-out flow for adding new packages.",
          "Usage statistics and trend collection through marketing tools like Klaviyo.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main developer and 4 developers works on this project",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers. Jeffery's attention to detail, clear communication, and problem-solving skills ensured a successful outcome. Thank you for your exceptional work, Jeffery!",
        "__v": 0
      },
      {
        "_id": "64eb098a34e07be6794efaa1",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Letmesport",
        "projectKeyWord": "Booking system",
        "gellaryImages": [
          "https://static.vecteezy.com/system/resources/previews/005/048/106/original/black-and-yellow-grunge-modern-thumbnail-background-free-vector.jpg",
          "https://i.ibb.co/Srd0VTz/2.png",
          "https://i.ibb.co/VJLbv6z/3.png",
          "https://i.ibb.co/kcz6S3f/4.png",
          "https://i.ibb.co/5Mf5mTv/5.png",
          "https://i.ibb.co/GJkWdFQ/6.png",
          "https://i.ibb.co/8j9F1SS/7.png",
          "https://i.ibb.co/MZ7MqJ6/8.png",
          "https://i.ibb.co/Nmk7D25/9.png",
          "https://i.ibb.co/3mdyywR/22.png"
        ],
        "projectCategory": [
          "Laravel",
          "SASS",
          "Fin-tech"
        ],
        "overview": [
          "As pet owners, the founders of Wagmo understood that basic procedures such as vaccinations, grooming, and bloodwork could quickly accumulate four-digit bills, and they saw an opportunity to create a unique platform that would make everyday pet care more affordable.",
          "While most pet insurance providers only focus on medical emergencies, Wagmo's platform covers both urgent care and essential services. Following several successful seed rounds, the company engaged with me to enhance the platform's functionality. To improve customer service and keep pace with the ongoing digital transformation, Wagmo needed to move beyond Excel spreadsheets. ",
          "Therefore, we migrated all client data to a dedicated app, enabling streamlined insurance plan management and more efficient client onboarding."
        ],
        "Technologies": [
          "React",
          "Redux",
          "Firebase",
          "Material UI",
          "Jest",
          "Python",
          "Django",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "Docker",
          "PostgreSQL",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Implementing marketing tools like Klaviyo to collect usage stats and trends effectively and increase web traffic.",
          "Designing a user-friendly check-out flow that allows users to add new packages easily.",
          "Providing comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "User-friendly check-out flow for adding new packages.",
          "Usage statistics and trend collection through marketing tools like Klaviyo.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main developer and 4 developers works on this project",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers. Jeffery's attention to detail, clear communication, and problem-solving skills ensured a successful outcome. Thank you for your exceptional work, Jeffery!",
        "__v": 0
      },
      {
        "_id": "64eb098a34e07be6794efaa4",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Versand-office",
        "projectKeyWord": "B2B",
        "gellaryImages": [
          "https://static.vecteezy.com/system/resources/previews/005/048/106/original/black-and-yellow-grunge-modern-thumbnail-background-free-vector.jpg",
          "https://i.ibb.co/Srd0VTz/2.png",
          "https://i.ibb.co/VJLbv6z/3.png",
          "https://i.ibb.co/kcz6S3f/4.png",
          "https://i.ibb.co/5Mf5mTv/5.png",
          "https://i.ibb.co/GJkWdFQ/6.png",
          "https://i.ibb.co/8j9F1SS/7.png",
          "https://i.ibb.co/MZ7MqJ6/8.png",
          "https://i.ibb.co/Nmk7D25/9.png",
          "https://i.ibb.co/3mdyywR/22.png"
        ],
        "projectCategory": [
          "Laravel",
          "SASS",
          "Fin-tech"
        ],
        "overview": [
          "As pet owners, the founders of Wagmo understood that basic procedures such as vaccinations, grooming, and bloodwork could quickly accumulate four-digit bills, and they saw an opportunity to create a unique platform that would make everyday pet care more affordable.",
          "While most pet insurance providers only focus on medical emergencies, Wagmo's platform covers both urgent care and essential services. Following several successful seed rounds, the company engaged with me to enhance the platform's functionality. To improve customer service and keep pace with the ongoing digital transformation, Wagmo needed to move beyond Excel spreadsheets. ",
          "Therefore, we migrated all client data to a dedicated app, enabling streamlined insurance plan management and more efficient client onboarding."
        ],
        "Technologies": [
          "React",
          "Redux",
          "Firebase",
          "Material UI",
          "Jest",
          "Python",
          "Django",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "Docker",
          "PostgreSQL",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Implementing marketing tools like Klaviyo to collect usage stats and trends effectively and increase web traffic.",
          "Designing a user-friendly check-out flow that allows users to add new packages easily.",
          "Providing comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "User-friendly check-out flow for adding new packages.",
          "Usage statistics and trend collection through marketing tools like Klaviyo.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main developer and 4 developers works on this project",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers. Jeffery's attention to detail, clear communication, and problem-solving skills ensured a successful outcome. Thank you for your exceptional work, Jeffery!",
        "__v": 0
      },

      {
        "_id": "64eb098a34e07be6794efaae",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Social networking service targeted at event streams.",
        "projectKeyWord": "Event Social network",
        "gellaryImages": [
          "https://viaduct.pro/wp-content/uploads/2022/03/giffycanvas-2.gif",
          "https://viaduct.pro/wp-content/uploads/2022/03/Storyline.png",
          "https://viaduct.pro/wp-content/uploads/2022/03/Onboarding-31.png",
          "https://viaduct.pro/wp-content/uploads/2022/03/Onboarding-11.png",
          "https://viaduct.pro/wp-content/uploads/2022/03/Onboarding-21.png",
        ],
        "projectCategory": [
          "Laravel",
          "SASS",
          "Fin-tech"
        ],
        "overview": [
          "What is an event? Let’s say you had a birthday - this is an event, and you invited friends to it, and after a fun event, there are a lot of memories in a photo and video format. " ,
          "Storyline helps users share media memories in events by posting photos and videos of each other, as well as commenting them."
        ],
        "Technologies": [
          "React",
          "Redux",
          "Firebase",
          "Material UI",
          "Jest",
          "Python",
          "Django",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "Docker",
          "PostgreSQL",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Implementing marketing tools like Klaviyo to collect usage stats and trends effectively and increase web traffic.",
          "Designing a user-friendly check-out flow that allows users to add new packages easily.",
          "Providing comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "User-friendly check-out flow for adding new packages.",
          "Usage statistics and trend collection through marketing tools like Klaviyo.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main developer and 4 developers works on this project",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers. Jeffery's attention to detail, clear communication, and problem-solving skills ensured a successful outcome. Thank you for your exceptional work, Jeffery!",
        "__v": 0
      },



      {
        "_id": "64eb0ee4cb0a7e5d718fe162",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Dating app for grown-ups. ",
        "projectKeyWord": "Mobile dating",
        "gellaryImages": [
          "https://viaduct.pro/wp-content/uploads/2021/08/0-Wellcome-1.png",
          "https://viaduct.pro/wp-content/uploads/2021/08/ezgif.com-crop.gif",
          "https://viaduct.pro/wp-content/uploads/2021/08/4.png",
          "https://viaduct.pro/wp-content/uploads/2021/08/7.png",
          "https://viaduct.pro/wp-content/uploads/2021/08/8.png",
        ],
        "projectCategory": [
          "React.js"
        ],
        "overview": [
          // "Dating apps are all the rage right now, allowing anyone to find a partner for any kind of relationship they are searching for. One of the biggest selling points is the variety, regardless of what exact requirements you have, it’s more than likely that there’s an app that will fit that niche. And one of those niches will be filled by Update."
          "Matching app for people who wish to settle down and have a more serious relationship. It allows chat, picture-sharing, and provides matches based on the user’s preferences and previous matches, an anti-ghosting mechanism to prevent users to leave conversations without reasoning, push-notification system."
        ],
        "Technologies": [
          "API",

          "AWS EC2",
          "Git",
          "GitHub",

          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Implementing marketing tools like Klaviyo to collect usage stats and trends effectively and increase web traffic.",
          "Designing a user-friendly check-out flow that allows users to add new packages easily.",
          "Providing comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "User-friendly check-out flow for adding new packages.",
          "Usage statistics and trend collection through marketing tools like Klaviyo.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main developer and 4 developers works on this project",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers. Jeffery's attention to detail, clear communication, and problem-solving skills ensured a successful outcome. Thank you for your exceptional work, Jeffery!",
        "__v": 0
      },
      {
        "_id": "64ecaea0de1b6fbce1360a88",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Online education platform",
        "projectKeyWord": "Educational service website",
        "gellaryImages": [
          "https://viaduct.pro/wp-content/uploads/2021/08/%D0%A1%D0%BD%D0%B8%D0%BC%D0%BE%D0%BA-%D1%8D%D0%BA%D1%80%D0%B0%D0%BD%D0%B0-2022-01-11-%D0%B2-16.19-1.png",
          "https://viaduct.pro/wp-content/uploads/2021/08/Screen-Shot-2021-08-02-at-18.09.38.png",
        ],
        "projectCategory": [
          "Next.JS",
          "E-commerce"
        ],
        "overview": [
          "The online teacher academy"
        ],
        "Technologies": [
          "React",
          "Redux",
          "Firebase",
          "Material UI",
          "Jest",
          "Python",
          "Django",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "Docker",
          "PostgreSQL",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Implementing marketing tools like Klaviyo to collect usage stats and trends effectively and increase web traffic.",
          "Designing a user-friendly check-out flow that allows users to add new packages easily.",
          "Providing comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Comprehensive admin training to drive solution adoption and achieve higher ROI.",
          "User-friendly check-out flow for adding new packages.",
          "Usage statistics and trend collection through marketing tools like Klaviyo.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main developer and 4 developers works on this project",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers. Jeffery's attention to detail, clear communication, and problem-solving skills ensured a successful outcome. Thank you for your exceptional work, Jeffery!",
        "__v": 0
      },
      {
        "_id": "64ecaefade1b6fbce1360a8f",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Web app looks like an electronic journal with beautiful design to fill in medical data for a child.",
        "projectKeyWord": "Healthcare development",
        "gellaryImages": [
          "https://cdn.pixabay.com/photo/2022/09/08/04/04/thumbnail-7439988_1280.png",
          "https://i.ibb.co/Srd0VTz/2.png",
          "https://i.ibb.co/VJLbv6z/3.png",
          "https://i.ibb.co/kcz6S3f/4.png",
          "https://i.ibb.co/5Mf5mTv/5.png"
        ],
        "projectCategory": [
          "Web Development",
          "E-commerce"
        ],
        "overview": [
          "Therefore, we migrated all client data to a dedicated app, enabling streamlined insurance plan management and more efficient client onboarding."
        ],
        "Technologies": [
          "React",
          "Redux",
          "Firebase",
          "Material UI",
          "Jest",
          "Python",
          "Django",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "Docker",
          "PostgreSQL",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main developer and 4 developers works on this project",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers.",
        "__v": 0
      },
      {
        "_id": "64ecaf4fde1b6fbce1360a91",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "Healthcare web application which connects healthcare workers with home health agencies.",
        "projectKeyWord": "Healthcare development",
        "gellaryImages": [
          "https://viaduct.pro/wp-content/uploads/2022/03/giffycanvas-3-1.gif",
          "https://viaduct.pro/wp-content/uploads/2022/03/Sign-Up-Step1-1.png",
          "https://viaduct.pro/wp-content/uploads/2022/03/Search-by-caregiver-1.png",
          "https://viaduct.pro/wp-content/uploads/2022/03/Messages-Caregiver-1.png",
        ],
        "projectCategory": [
          "Web Development",
          "E-commerce"
        ],
        "overview": [
          "Digital technologies have played a large role in the advancement of medicine. Today, there are hundreds of medical mobile applications out there that are useful for both doctors and patients. From monitoring your health, to purchasing medicine, making appointments with doctors, and keeping track of medical records, these apps have made healthcare more available and convenient."
        ],
        "Technologies": [
          "React Native",
          "Redux",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "MySQL",
          "PHP",
          "Laravel",
          "Echo-server",
          "Web-sockets",
          "Cron",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways",
          "Client / Caregiver search function",
          "Built in chat / messaging system",
          "Appointment management",
          "Scheduling",
          "Care requirements",
          "Consolidation of medical records",
          "Rate and Review system",
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main backend developer and 1 developer works on mobile app",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers.",
        "__v": 0
      },
      {
        "_id": "64ecafa1de1b6fbce1360a93",
        "projectFor": "mickey.ur@gmail.com",
        "projectTitle": "App that will allow the user to input all their stats, activities, and achievements in order to present themselves and compare their data with other athletes",
        "projectKeyWord": "Healthcare development",
        "gellaryImages": [
          "https://viaduct.pro/wp-content/uploads/2021/06/Simulator-Screen-Shot-iPhone-11-2020-09-02-at-14.31-1.png",
          "https://viaduct.pro/wp-content/uploads/2021/06/ROOKIEAMAKER-2.png",
          "https://viaduct.pro/wp-content/uploads/2021/06/0-Wellcome-4.png"
        ],
        "projectCategory": [
          "Web Development",
          "E-commerce"
        ],
        "overview": [
          "The American sports industry is massive, bringing in billions of revenue every year. But one of the disadvantages of such an industry is that it is hard to make a name for yourself. It always comes down to relentlessness, connections, and luck. Rookiemaker wants to improve the chances for an athlete to get noticed and succeed in this race."
        ],
        "Technologies": [
          "React",
          "Redux",
          "Firebase",
          "Material UI",
          "Jest",
          "Python",
          "Django",
          "AWS EC2",
          "ELB",
          "Git",
          "GitHub",
          "Docker",
          "PostgreSQL",
          "S3"
        ],
        "solutions": [
          "Implemented user authentication",
          "Integrated payment gateways",
          "Stats input (sport type, height, weight)",
          "Analytics"
        ],
        "challenges": [
          "Developing a platform that covers both urgent care and essential services while keeping the costs affordable.",
          "Ensuring seamless integration with different payment systems, including PayPal and Venmo, to facilitate quick reimbursement.",
          "Developing a dedicated app that can handle client data effectively and enable streamlined insurance plan management and client onboarding.",
          "Ensuring that the platform complies with relevant regulations and standards in the insurance industry."
        ],
        "features": [
          "Online access to policy details, claims, and coverage information.",
          "Easy access to customer support for any questions or concerns.",
          "Compliance with relevant regulations and standards in the insurance industry.",
          "Affordable pricing for everyday pet care.",
          "SPA (Single page application)"
        ],
        "liveSite": "https://wagmo.io/",
        "Duration": "(2 years, 6 month's)",
        "developersRole": "I was Main backend developer and 1 developer works on mobile app",
        "Result": "I am extremely satisfied with the outcome of this project. Jeffery delivered beyond my expectations, and his dedication and expertise made the entire process smooth and efficient. The platform he developed covers all the essential features and functions seamlessly, making pet care more accessible and affordable for our customers.",
        "__v": 0
      }
    ]};
  // const { data: userData } = useGetUserQuery(
  //   "mickey.ur@gmail.com"
  // );
  const userData = {data: {
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
    }};

  const isLoading = false;

  const [sideProject, setSideProject] = useState(true);

  const detailsProjectRef = useRef(null); // Create a ref for the details-project section

  useEffect(() => {
    // Scroll the details-project section into view when details change
    if (
      detailsProjectRef.current &&
      myProjects.detailsProject &&
      myProjects.openProject
    ) {
      detailsProjectRef.current.scrollIntoView({ behavior: "smooth" });
    }
  }, [myProjects.detailsProject, myProjects.openProject]);

  const filteredAndSortedData = data?.data
    ? data.data.filter((project) =>
        project.projectCategory.some((category) =>
          sortProject.some((input) =>
            category.toLowerCase().includes(input.toLowerCase())
          )
        )
      )
    : [];

  return (
    <div className="md:flex h-full bg-sec-bg   md:overflow-hidden ">
      <Helmet>
        <meta charSet="utf-8" />
        <title>Mickey Uryvalkin - Projects</title>
      </Helmet>
      <div className="sticky top-0 z-20 bg-cardBG about-profile  overflow-scroll md:static md:w-2/12 border-r border-border-bg md:flex pl-4">
        <motion.div
          layout
          animate={{ opacity: 0.9 }}
          transition={{
            opacity: { ease: "linear" },
            layout: { duration: 0.3 },
          }}
          className="w-full overflow-scroll about-profile"
        >
          <div
            onClick={() => {
              setSideProject(!sideProject);
            }}
            className="cursor-pointer text-left flex items-center   p-2 w-full bg-cardBG   sticky top-0 z-10   border-b border-border-bg"
          >
            <h2 className="text-lg font-normal ">Projects</h2>
            {sideProject ? (
              <img
                src={sideArrow}
                className=" h-8  bloxk mx-auto rotate-90"
                alt=""
              />
            ) : (
              <img src={sideArrow} className=" h-8  bloxk mx-auto" alt="" />
            )}
          </div>

          {!myProjects.openProject && sideProject && (
            <motion.ul
              initial={{ x: "-20%" }}
              animate={{ x: "0%" }}
              transition={{ type: "spring", mass: 0.3 }}
              className="p-2"
            >
              {userData?.data?.shortTechnologies &&
                userData?.data?.shortTechnologies.map(
                  (shortTechnologie, index) => (
                    <LanguageCard
                      key={index}
                      language={shortTechnologie.img}
                      languageContent={shortTechnologie.name}
                      index={index}
                    ></LanguageCard>
                  )
                )}
            </motion.ul>
          )}

          {data?.data &&
            myProjects.openProject &&
            sideProject &&
            data?.data.map((project) => (
              <SideProjectCard data={project} key={project._id}>
                {" "}
              </SideProjectCard>
            ))}
        </motion.div>
      </div>

      <div className="md:w-10/12  overflow-scroll projects-board text-text relative">
        <div className="p-2 text-left border-b border-border-bg  sticky top-0 z-10 bg-cardBG w-full header">
          <h2 className="text-lg text-text flex justify-between">
            <span>
              {" "}
              {myProjects.detailsProject && myProjects.openProject
                ? `#_${projectKeyWord}`
                : "Projects"}{" "}
            </span>{" "}
            {myProjects.detailsProject && myProjects.openProject ? (
              <motion.img
                initial={{ x: "100%" }}
                animate={{ x: "0%" }}
                transition={{ type: "spring", mass: 0.6 }}
                className="mr-4 p-2 h-8 w-8 bg-text-yellow rounded-full"
                onClick={() => {
                  dispatch(setOpenProject());
                }}
                src={cross}
                alt=""
              />
            ) : (
              ""
            )}
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3  ">
          {isLoading && (
            <div className="absolute left-1/2 top-1/2 transform -translate-x-1/2 -translate-y-1/2">
              <div className="flex items-center justify-center absolute top-[50%] left-[50%] transform -translate-x-1/2 -translate-y-1/2 ">
                <div className="w-80 h-80 border-t-4 border-b-4 border-green-900 rounded-full animate-spin"></div>
              </div>
            </div>
          )}
          {filteredAndSortedData.length
            ? filteredAndSortedData.map((project, index) => (
                <ProjectsCard
                  data={project}
                  projectId={index + 1}
                  key={project._id}
                >
                  {" "}
                </ProjectsCard>
              ))
            : data?.data &&
              !myProjects.openProject &&
              data?.data.map((project, index) => (
                <ProjectsCard
                  data={project}
                  projectId={index + 1}
                  key={project._id}
                >
                  {" "}
                </ProjectsCard>
              ))}
        </div>

        {/* Details Project */}
        <div className="details-project" ref={detailsProjectRef}>
          {myProjects.detailsProject && myProjects.openProject && (
            <motion.div
              initial={{ y: "100%" }}
              animate={{ y: "0%" }}
              transition={{ type: "spring", mass: 0.3 }}
              className="overflow-hidden "
            >
              <div className="mx-4 my-2 text-left">
                <div className="">
                  <Swiper
                    spaceBetween={50}
                    slidesPerView={1}
                    autoplay={{
                      delay: 2000,
                      disableOnInteraction: false,
                    }}
                    modules={[Autoplay, Pagination, Navigation]}
                  >
                    {gellaryImages.map((img, index) => (
                      <SwiperSlide key={index}>
                        {" "}
                        <img
                          src={img}
                          alt=""
                          className="my-2 md:h-[700px] mx-auto  w-full md:w-[1200px] rounded-lg object-contain"
                        />
                      </SwiperSlide>
                    ))}
                  </Swiper>
                </div>
                <h2 className="text-white text-[24px] md:text-[30px] py-2 font-semibold text-left ">
                  {projectTitle}
                </h2>
                <div className="md:flex my-10">
                  <h2 className="text-xl">Overview:</h2>
                  <div>
                    {overview.map((i, index) => (
                      <p key={index} className="p-2">
                        {i}
                      </p>
                    ))}
                  </div>
                </div>
                <div className="md:flex items-center my-10">
                  <h2 className="text-xl">Timeline:</h2>
                  <p className="px-2">{Duration}</p>
                </div>
                <div className="md:flex items-center my-10">
                  <h2 className="text-xl">Team:</h2>
                  <p className="px-2">{developersRole}</p>
                </div>
                <div className=" my-10">
                  <h2 className="text-xl">Challenges:</h2>
                  <ul className="px-2">
                    {challenges.map((challange, index) => (
                      <li
                        key={index}
                        className="flex items-start md:pl-10 my-4"
                      >
                        <img src={staroutline} alt="" />{" "}
                        <span className="px-2 text-lg">{challange} </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className=" my-10">
                  <h2 className="text-xl">Features:</h2>
                  <ul className="px-2">
                    {features.map((feature, index) => (
                      <li
                        key={index}
                        className="flex items-start md:pl-10 my-4"
                      >
                        <img src={starfill} alt="" />{" "}
                        <span className="px-2 text-lg">{feature} </span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="md:flex my-10">
                  <h2 className="text-xl">Technologies:</h2>
                  <div className="px-2">
                    {Technologies.map((i, index) => (
                      <TagButton text={i} key={index}></TagButton>
                    ))}
                  </div>
                </div>
                <div className="md:flex  my-10">
                  <h2 className="text-xl">Result:</h2>
                  <p className="px-2">{Result}</p>
                </div>
              </div>
            </motion.div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Projects;
