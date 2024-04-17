import React from "react";
import { Link } from "react-router-dom";
import reactImge from "../../../Assets/icons/languages/react.png";
import { useGetSingelProjectQuery } from "../../../redux/features/api/createAPI";
import { useDispatch } from "react-redux";
import {
  setOpenProject,
  setDetailsProject,
} from "../../../redux/features/project/projectSlice";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../../../utils/motion.js";

const SideProjectCard = ({ data }) => {
  const { _id, gellaryImages, projectTitle, projectKeyWord } = data;

  // const { data: detailsData, isLoading } = useGetSingelProjectQuery(_id);

  const  detailsData = data;

  const dispatch = useDispatch();

  const handelDetailsData = () => {
    if (detailsData) {
      dispatch(setDetailsProject(detailsData));
    }
  };

  const index = 1 ; //need index to count delay

  return (
    <motion.div 
    
    initial={{ x: "100%" }}
    animate={{ x: "0%" }}
    transition={{ type: "spring", mass: 0.3 }}
    variants={fadeIn("up", "spring", index * 0.5, 0.75)}
    className=" my-4 mx-auto ">
      <h2 className="text-text text-left">
        <span className="text-text-blue font-bold"></span>{" "}
        <span>{projectKeyWord}</span>
      </h2>
      <div className="bg-cardBG overflow-hidden my-4 text-left rounded-lg">
        <div className="relative">
          <img className="w-full md:h-[100px] object-contain" src={gellaryImages[0]} alt="" />
          <img
            src={reactImge}
            className="absolute top-4 right-4 bg-white rounded-lg p-px"
            alt=""
          />
        </div>
        <div className="px-4 ">
            
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
    </motion.div>
  );
};

export default SideProjectCard;
