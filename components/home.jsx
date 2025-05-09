"use client";
import { useEffect, useState } from "react";
import Contactform from "@/components/ui/contactform";
import Link from "next/link";
import Image from "next/image";
import { motion } from "framer-motion";
import { Carousel, IconButton } from "@material-tailwind/react";
import { useRouter } from "next/navigation";

import dynamic from "next/dynamic";
const HeroVideo = dynamic(() => import("./videocontainer"), { ssr: false });

const Home = () => {
  const router = useRouter();

  return (
    <div className="flex flex-col items-center bg-white max-w-full">
      {/* Hero Section */}
      <div
        className="border-b-[1px] border-white relative w-full h-96 md:h-[75vh] max-h-96 md:max-h-[720px] overflow-hidden custom-cursor"
        onClick={() => {
          const targetSection = document.getElementById("target-section");
          if (targetSection) {
            targetSection.scrollIntoView({ behavior: "smooth" });
          }
        }}
      >
        <video
          className="absolute top-0 left-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src="/assets/vids/construction-hero.mp4" type="video/mp4" />
          Your browser does not support the video tag.
        </video>
        <div className=" md:px-14  ml-6 relative z-10 flex items-center justify-start h-full text-white">
          <h1 className="text-3xl md:text-7xl font-bold ">
            <div className="mb-6">
              Building <span className="text-[#FFA500]">Excellence</span>
            </div>
            <div>
              Across <span className="text-[#FFA500]">India</span>
            </div>
          </h1>
        </div>
        <div id="target-section"></div>
      </div>

      {/* Services Section */}
      <div className="h-full px-2 md:px-14">
        <div className="mt-4 w-full text-gray-900 font-medium text-3xl md:text-5xl p-5 text-center md:text-left">
          Our Services
        </div>

        {/* Services Cards */}
        <div className="p-2 md:p-5 grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-8">
          {/* Card 1: Civil Contract Services */}
          <div
            className=" border-[1px] border-orange-500 border-opacity-25 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/mould-trail")}
          >
            <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className="h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M360-80q-33 0-56.5-23.5T280-160v-160q0-33 23.5-56.5T360-400h240q33 0 56.5 23.5T680-320v160q0 33-23.5 56.5T600-80H360Zm0-60h240v-160H360v160Zm-240-340q-33 0-56.5-23.5T40-560v-160q0-33 23.5-56.5T120-800h240q33 0 56.5 23.5T440-720v160q0 33-23.5 56.5T360-480H120Zm0-60h240v-160H120v160Zm480-340q-33 0-56.5-23.5T520-880v-160q0-33 23.5-56.5T600-960h240q33 0 56.5 23.5T920-880v160q0 33-23.5 56.5T840-640H600Zm0-60h240v-160H600v160Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Plumbing Contract Services
            </h4>
            <p className="text-gray-900 text-sm md:text-base">
              Expert installation, repair, and maintenance for efficient
              plumbing systems.
            </p>
          </div>

          {/* Card 3: Residential Services */}
          <div
            className="border-[1px] border-orange-500 border-opacity-25 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/residential")}
          >
            <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className="h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M180-120v-360h-60v-360h360v360h-60v360H180Zm60-60h120v-360h120v-240H240v240h120v360Zm480 0v-480H540v-180h360v660H720Zm-60-60h120v-540H660v540Zm-420-300Zm420-120Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Residential Services
            </h4>
            <p className="text-gray-900 text-sm md:text-base">
              Building and renovating homes for comfort and functionality.
            </p>
          </div>

          {/* Card 4: Commercial & Office Services */}
          <div
            className=" border-[1px] border-orange-500 border-opacity-25 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/mass-production")}
          >
            <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className="h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm120-120h360v-60H300v60Zm0-120h360v-60H300v60Zm0-120h360v-60H300v60Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Commercial & Office
            </h4>
            <p className="text-gray-900 text-sm md:text-base">
              Tailored construction and plumbing for business spaces.
            </p>
          </div>

          {/* Card 5: Hotel & Restaurant Services */}
          <div
            className=" border-[1px] border-orange-500 border-opacity-25 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/custom-product-development")}
          >
            <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className="h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm240-120h120v-360H420v360Zm-240 0h120v-360H180v360Zm480 0h120v-360H660v360Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Hotel & Restaurant
            </h4>
            <p className="text-gray-900 text-sm md:text-base">
              High-quality solutions for hospitality spaces.
            </p>
          </div>

          {/* Card 6: Industrial Services */}
          <div
            className="border-[1px] border-orange-500 border-opacity-25 cursor-pointer p-5 md:px-7 xl:px-10 rounded-[20px] bg-white shadow-md hover:shadow-lg group relative shadow-xl hover:shadow-2xl transition-all duration-300 ease-in-out hover:-translate-y-2"
            onClick={() => router.push("/services/industrial")}
          >
            <div className="w-[40px] md:w-[70px] h-[40px] md:h-[70px] flex items-center justify-center bg-orange-400 rounded-xl md:rounded-2xl mb-8">
              <svg
                className="h-[35px] md:h-[48px] w-[35px] md:w-[48px]"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 -960 960 960"
                fill="#FFFFFF"
              >
                <path d="M120-120v-720h720v720H120Zm60-60h600v-600H180v600Zm120-120h360v-360H300v360Z" />
              </svg>
            </div>
            <h4 className="font-semibold text-base md:text-xl text-gray-900 mb-3">
              Industrial Services
            </h4>
            <p className="text-gray-900 text-sm md:text-base">
              Robust construction and plumbing for factories and warehouses.
            </p>
          </div>
        </div>
      </div>

      {/* Core Values Section */}
      <div className="w-full py-8 bg-gray-100">
        <div className="px-2 md:px-14">
          <h3 className="text-2xl md:text-4xl font-semibold text-center mb-6">
            Our Core Values
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {/* Core Value 1: On-Time Delivery */}
            <div className="p-6 bg-white rounded-[20px] shadow-md">
              <h4 className="font-semibold text-xl text-gray-900 mb-3">
                On-Time Delivery
              </h4>
              <p className="text-gray-900 text-base">
                We prioritize meeting deadlines without compromising quality,
                ensuring your project stays on track.
              </p>
            </div>

            {/* Core Value 2: Superior Finishing */}
            <div className="p-6 bg-white rounded-[20px] shadow-md">
              <h4 className="font-semibold text-xl text-gray-900 mb-3">
                Superior Finishing
              </h4>
              <p className="text-gray-900 text-base">
                Every detail is polished to perfection, delivering a
                professional and flawless outcome.
              </p>
            </div>

            {/* Core Value 3: Exceptional Quality */}
            <div className="p-6 bg-white rounded-[20px] shadow-md">
              <h4 className="font-semibold text-xl text-gray-900 mb-3">
                Exceptional Quality
              </h4>
              <p className="text-gray-900 text-base">
                We use top-tier materials and techniques for durable,
                high-performing results.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* About Us Section */}
      <div className="w-full py-8">
        <div className="px-2 md:px-14">
          <h3 className="text-2xl md:text-4xl font-semibold text-center mb-6">
            About Dezire Construction Co.
          </h3>
          <p className="text-gray-900 text-base md:text-lg text-center max-w-3xl mx-auto">
            Founded by Zulfikar Ali Abdi, Dezire Construction Co. brings over 15
            years of expertise in civil and plumbing services. We are committed
            to delivering exceptional craftsmanship across Mumbai and India,
            building trust through quality, transparency, and reliability.
            Whether residential, commercial, or industrial, we turn your vision
            into reality with precision and professionalism.
          </p>
          <div className="mt-6 grid grid-cols-1 md:grid-cols-3 gap-6 text-center">
            <div>
              <h4 className="font-semibold text-xl text-gray-900 mb-2">
                15 Years of Expertise
              </h4>
              <p className="text-gray-900">
                Extensive knowledge and skill in every project.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-gray-900 mb-2">
                Quality Assurance
              </h4>
              <p className="text-gray-900">
                Finest materials and methods for superior results.
              </p>
            </div>
            <div>
              <h4 className="font-semibold text-xl text-gray-900 mb-2">
                Customer-Centric
              </h4>
              <p className="text-gray-900">
                Your satisfaction is our priority, always.
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Carousel Section */}
      <div className="w-full h-500 md:h-[800px] mt-4">
        <Carousel
          autoplay="true"
          prevArrow={({ handlePrev }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handlePrev}
              className="invisible md:visible !absolute top-2/4 left-14 -translate-y-2/4 bg-[#FFA500] hover:bg-orange-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M10.5 19.5L3 12m0 0l7.5-7.5M3 12h18"
                />
              </svg>
            </IconButton>
          )}
          nextArrow={({ handleNext }) => (
            <IconButton
              variant="text"
              color="white"
              size="lg"
              onClick={handleNext}
              className="invisible md:visible !absolute top-2/4 !right-14 -translate-y-2/4 bg-[#FFA500] hover:bg-orange-700"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={2}
                stroke="currentColor"
                className="h-6 w-6"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3"
                />
              </svg>
            </IconButton>
          )}
          loop="true"
          className=""
          navigation={({ setActiveIndex, activeIndex, length }) => (
            <div className="absolute bottom-4 left-2/4 z-20 flex -translate-x-2/4 gap-2">
              {new Array(length).fill("").map((_, i) => (
                <span
                  key={i}
                  className={`block h-1 cursor-pointer rounded-2xl transition-all content-[''] ${
                    activeIndex === i ? "w-8 bg-orange-800" : "w-4 bg-white/50"
                  }`}
                  onClick={() => setActiveIndex(i)}
                />
              ))}
            </div>
          )}
        >
          <img
            src="/assets/images/construction-site.png"
            alt="construction site"
            className="h-full w-full object-cover"
          />
          <img
            src="/assets/images/plumbing-project.png"
            alt="plumbing project"
            className="h-full w-full object-cover"
          />
        </Carousel>
      </div>

      {/* Contact Form Section */}
      <div className="w-full">
        <Contactform />
      </div>
    </div>
  );
};

export default Home;
