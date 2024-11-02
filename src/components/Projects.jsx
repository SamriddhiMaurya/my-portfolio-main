import React, { useEffect } from "react";
import TodoList from "../assets/projects/TodoList.png";
import CareerBoost from "../assets/projects/CareerBoost.png";
import Keeper from "../assets/projects/Keeper.png";
import TaskManager from "../assets/projects/TaskManager.jpg";
import Weather from "../assets/projects/WEATHERapp.png";
import BlazeTracks from "../assets/projects/BlazeTracks.png";
import AOS from "aos";
import "aos/dist/aos.css";

const Projects = () => {
  useEffect(() => {
    AOS.init({ duration: 1000 });
  });

  const Projects = () => [
    {
      id: 1,

      src: BlazeTracks,
      desc: " BlazeTracks web-based music player website using HTML, CSS and JavaScript...",
      demo: "https://blazetracks.netlify.app/",
      code: "https://github.com/SamriddhiMaurya/BlazeTracks",
    },

    {
      id: 2,
      src: Weather,
      desc: "Responsive weather application with real-time updates and intuitive user interface, developed using React JS and OpenWeatherMap API.",
      demo: "https://weather-dashboard-using-react-and-api.netlify.app/",
      code: "https://github.com/SamriddhiMaurya/weather-dashboard",
    },
    {
      id: 3,
      src: TodoList,
      desc: "A TODO  List Application using React-Redux . ",
      demo: "https://reduxx-react-todo-app.netlify.app/",
      code: "https://github.com/SamriddhiMaurya/redux_todolist",
    },
    {
      id: 4,
      src: TaskManager,
      desc: "Task Manager designed using HTML, SCSS, Next JS and Typescript. ",
      // demo: "",
      code: "https://github.com/SamriddhiMaurya/Task-Manager",
    },
    {
      id: 5,
      src: CareerBoost,
      desc: "CareerBoost is a comprehensive job search platform tailored for job seekers using React JS, Node JS, JSON and APIs. ",
      // demo: "",
      code: "https://github.com/SamriddhiMaurya/CareerBoost--Placement-Insights",
    },
    {
      id: 6,

      src: Keeper,
      desc: "Keeper is a simple note taking application made using React JS...",
      demo: "https://my-keeper-application.netlify.app/",
      code: "https://github.com/SamriddhiMaurya/my-keeper-app",
    },
  ];

  return (
    <div
      name="projects"
      className="h-auto max-h-screen-lg  bg-gradient-to-b from-black to-gray-800 w-full text-white
     md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div className="pb-8 mt-16 w-full flex flex-col justify-center items-center mx-auto">
          <h3 className="text-4xl pb-2 font-bold inline border-b-4 border-gray-400">
            Personal Projects
          </h3>
        </div>
        <div className="grid sm:grid-cols-2 md:grid-cols-3 mb-20 gap-8 px-12 sm:px-0">
          {Projects().map(({ id, src, desc, demo, code }) => (
            <div
              data-aos="fade-in"
              data-aos-duration="500"
              key={id}
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt="Ai"
                className="rounded-md duration-200 hover:scale-105"
              />
              <p className="p-2 text-justify font-extralight">{desc}</p>
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-gray-700 to-blue-900 rounded-md">
                  <a href={demo}>Demo</a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105 bg-gradient-to-l from-purple-900 to-gray-700 rounded-md">
                  <a href={code}>Code</a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Projects;
