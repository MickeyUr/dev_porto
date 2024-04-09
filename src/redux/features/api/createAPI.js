import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const api = createApi({
  reducerPath: "api",
  baseQuery: fetchBaseQuery({
    baseUrl:
      "https://portfolio-backend-mickey.ur-gmailcom.vercel.app/api/v1/p",
  }),
  endpoints: (builder) => ({
    getUser: builder.query({
      query: (email) => `/user/user/${email}`,
    }),
    getprojects: builder.query({
      query: (email) => `/project/all-project/${email}`,
    }),
    getSingelProject: builder.query({
      query: (id) => `/project/project/${id}`,
    }),
    submitMessage: builder.mutation({
      query: (messageData) => ({
        url: "/message/create-message",
        method: "POST",
        body: messageData,
      }),
    }),
  }),
});

 let data = {
   "_id": "64f02db7afb16ffb95954daa",
   "userLogo": "https://i.ibb.co/bQvHQRK/6575219-removebg-preview.png",
   "userLogoName": "MK",
   "userName": "Mickhail Uryvalkin ",
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
     "As a MERN stack developer, I am a seasoned professional with over 3years of experience in the industry. My passion for coding and problem-solving has driven me to excel in my field, and I pride myself on my ability to create elegant, efficient, and user-friendly web applications.",
     "I have a strong background in both front-end and back-end development, and my expertise in MERN stack technologies allows me to create complex, dynamic web applications that meet the needs of even the most demanding clients.",
     "But what really sets me apart is my ability to communicate effectively with clients and colleagues alike. I believe that great software is the result of collaboration and teamwork, and I am committed to working closely with my clients to ensure that their needs are met and their expectations exceeded.",
     "In my free time, I enjoy staying up-to-date with the latest trends and technologies in the world of web development, as well as spending time with my family and exploring the great outdoors. If you're looking for a MERN stack developer who is passionate about his work, dedicated to his clients, and always striving to be the best, look no further than me."
   ],
   "email": "mickey.ur@gmail.com",
   "phoneNumber": "+14238940",
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
 };
export const {
  useGetUserQuery,
  useGetprojectsQuery,
  useGetSingelProjectQuery,
  useSubmitMessageMutation,
} = api;
