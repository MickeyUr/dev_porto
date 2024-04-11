import React from "react";
import { Link } from "react-router-dom";
import reactImge from "../../../Assets/icons/languages/react.png";
import { useGetSingelProjectQuery } from "../../../redux/features/api/createAPI";
import { useDispatch } from "react-redux";
import {
  setOpenProject,
  setDetailsProject,
} from "../../../redux/features/project/projectSlice";
import {motion} from "framer-motion"
import { Tilt } from 'react-tilt'
const ProjectsCard = ({ data, projectId }) => {
  const { _id, gellaryImages, projectTitle, projectKeyWord } = data;

  // const { data: detailsData, isLoading } = useGetSingelProjectQuery(_id);
  const  detailsData = data;

  // const detailsData = data;
  const dispatch = useDispatch();

  const handelDetailsData = () => {
    if (detailsData) {
      dispatch(setDetailsProject(detailsData));
    }
  };

  return (
    <motion.div 
    initial={{ opacity: 0, y: -100 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.3 * projectId }}
    className="w-[291px] md:w-[370px] my-4 mx-auto ">
      <Tilt
          options={{
            max: 45,
            scale: 1,
            speed: 450,
          }}
          className='bg-tertiary p-5 rounded-2xl sm:w-[360px] w-full'
      >
      <h2 className="text-text text-left">
        <span className="text-text-blue font-bold">
          Project_{projectId}
        </span>{" "}
        <span>{projectKeyWord}</span>
      </h2>
      <div className="bg-cardBG overflow-hidden my-4 text-left rounded-lg">
        <div className="relative">
          <img className="w-full md:h-[145px] object-contain" src={gellaryImages[0]} alt="" />
          <img
            src={reactImge}
            className="absolute top-4 right-4 bg-white rounded-lg p-px"
            alt=""
          />
        </div>
        <div className="px-4 py-4">
          <p className="text-text">{projectTitle}</p>
          <div className="my-4 md:my-6">
            <button
              className="bg-button px-3.5 py-2.5 rounded-lg text-sm"
              onClick={handelDetailsData}
            >
              View Project
            </button>
          </div>
        </div>
      </div>
      </Tilt>
    </motion.div>
  );
};

export default ProjectsCard;
