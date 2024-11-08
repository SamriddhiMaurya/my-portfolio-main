import React, { useEffect } from "react";
// import NextJS from "../assets/experience/next.jpg";
import html from "../assets/experience/html.png";
import node from "../assets/experience/node.png";
import css from "../assets/experience/css.png";
import react from "../assets/experience/react.png";
import tailwind from "../assets/experience/tailwind.png";
import scss from "../assets/experience/scss.png";
import sql from "../assets/experience/sql.png";
import typescript from "../assets/experience/typescript.png";
import javascript from '../assets/experience/javascript.png'; 
import AOS from "aos";
import "aos/dist/aos.css";

const Experience = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const techs = () => [
    {
      id: 1,
      scr: html,
      title: "HTML",
      style: "shadow-gray-600",
    },
    {
      id: 2,
      scr: css,
      title: "CSS",
      style: "shadow-cyan-700",
    },
    {
      id: 3,

      scr: javascript,
      title: "Javascript",
      style: "shadow-blue-600",
    },
    {
      id: 4,
      scr: tailwind,
      title: "Tailwind CSS",
      style: "shadow-sky-500",
    },
    {
      id: 5,
      scr: node,
      title: "Node JS",
      style: "shadow-green-500",
    },

    {
      id: 6,
      scr: scss,
      title: "scss",
      style: "shadow-blue-400",
    },

    {
      id: 7,
      scr: react,
      title: "react",
      style: "shadow-green-400",
    },
    {
      id: 8,
      scr: typescript,
      title: "typescript",
      style: "shadow-gray-400",
    },
    {
      id: 9,
      scr: sql,
      title: "sql",
      style: "shadow-red-400",
    },
  ];

  return (
    <div
      name="skills"
      className="bg-gradient-to-b from-gray-800 to-black text-white
     w-full h-full"
    >
      <div className="max-w-screen-lg max-h-screen-lg p-4 mx-auto flex flex-col justify-center w-full ">
        <div className="pb-8 mt-16 w-full flex flex-col justify-center items-center mx-auto">
          <h3 className="text-4xl pb-2 font-bold inline border-b-4 border-gray-400">
            Technical Skills
          </h3>
        </div>

        <div className="w-full h-full grid grid-cols-2 text-center sm:grid-cols-3 gap-8 px-12 sm:px-0">
          {techs().map(({ id, scr, title, style }) => (
            <div
              data-aos="zoom-in"
              data-aos-duration="500"
              key={id}
              className={`flex flex-col justify-between items-center shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={scr} alt="" className="w-20 mx-auto pt-2" />
              <p className="my-3">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
