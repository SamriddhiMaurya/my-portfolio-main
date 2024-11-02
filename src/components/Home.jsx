import React, { useEffect } from 'react'
import Dp from "../assets/samriddhi.jpg"
import { MdOutlineArrowRightAlt } from 'react-icons/md'
import AOS from 'aos'
import 'aos/dist/aos.css'
import { Link } from 'react-scroll'
import '../App.css'
import { HiOutlineMail } from 'react-icons/hi'
import { BsGithub, BsLinkedin } from 'react-icons/bs'

const Home = () => {
    useEffect(()=> {
        AOS.init({duration: 1000})
    })
    return (
      <div
        name="home"
        className="h-auto w-full bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div
          className="max-w-screen-lg mx-auto flex flex-col items-center
                            justify-center  px-4 md:flex-row text-white"
        >
          <div className="flex flex-col justify-center items-center w-full ">
            <img
              src={Dp}
              alt="my profile"
              data-aos="fade-in"
              data-aos-duration="500"
              className="mt-20 rounded-full cursor-pointer shadow-[2px_2px_10px_1px_rgba(109,40,217)] w-1/3 md:w-1/3 lg:w-1/5 my-5 hover:scale-105 duration-300 sm:ease-in"
            />

            <h2
              data-aos="fade-in"
              data-aos-duration="1000"
              className="text-4xl sm:text-6xl mb-4 font-bold text-white"
            >
              Samriddhi Maurya
            </h2>
            <h3
              data-aos="fade-up"
              data-aos-easing="ease-in-sine"
              data-aos-duration="1000"
              className="animate-text bg-gradient-to-r from-teal-500 via-purple-500 to-orange-500 bg-clip-text text-transparent text-2xl font-black"
            >
              MCA'24 | Full-Stack Developer
            </h3>
          

            <div className="flex flex-row justify-center items-center gap-2 w-full">
              <Link
                to="projects"
                smooth
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group rounded bg-gradient-to-r from-blue-600 to-cyan-600 w-1/3 h-8 flex items-center justify-center cursor-pointer mt-5 mb-28"
              >
                Projects
                <span className="px-2 group-hover:rotate-90 duration-300">
                  <MdOutlineArrowRightAlt size={25} />
                </span>
              </Link>
              <a
                target="_blank"
                rel="noreferrer"
                href="mailto:samriddhimaurya9005@gmail.com"
                smooth
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group hover:scale-105 rounded w-auto h-8 p-3 flex items-center bg-gradient-to-r from-indigo-600 via-purple-600 to-orange-600 justify-center cursor-pointer mt-5 mb-28"
              >
                <span className="pr-2">
                  <HiOutlineMail size={25} />
                </span>
                Hire Me
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.linkedin.com/in/samriddhi-maurya-15945b190"
                smooth
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28"
              >
                <span>
                  <BsLinkedin size={25}></BsLinkedin>
                </span>
              </a>
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.github.com/SamriddhiMaurya"
                smooth
                duration={500}
                data-aos="fade-up"
                data-aos-delay="1000"
                data-aos-duration="2000"
                className="group hover:scale-105 rounded w-auto h-8 px-1 flex items-center bg-none justify-center cursor-pointer mt-5 mb-28"
              >
                <span>
                  <BsGithub size={25}></BsGithub>
                </span>
              </a>
            </div>
          </div>
        </div>
      </div>
    );
}

export default Home