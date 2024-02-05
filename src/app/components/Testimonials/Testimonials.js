"use client";
import React from "react";
import "./Testimonials.css";
import { Avatar } from "@nextui-org/avatar";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const Testimonials = () => {
  const settings = {
    dots: true,
    customPaging: (i) => <div className="custom-dot"></div>,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    arrows: false,
  };
  const testimonials = [
    {
      avatar: "/assests/hero-addon/Ellipse 1.png",
      title: "Ahmed Bakr",
      position: "CFO at SMSA",
      content:
        "Divic stepped in after Oracle failed to implement a billing system in Egypt. Their customized ERPNext solution perfectly matched our needs, saving the day.",
    },
    {
      avatar: "/assests/hero-addon/Ellipse 1.png",
      title: "Mohammed Abdelaziz",
      position: "Director of xGo",
      content:
        '"Digital Vision Company “Divic” mobile app development team delivered a groundbreaking app for our company. Their professionalism and innovative approach far exceeded our expectations.',
    },
    {
      avatar: "/assests/hero-addon/Ellipse 1.png",
      title: "Hisham Ahmed",
      position: "Finance Manager",
      content:
        "Divic LLC's web app development team crafted an intuitive platform for our clients. Their unwavering dedication and top-tier coding skills made a significant impact.",
    },
    {
      avatar: "/assests/hero-addon/Ellipse 1.png",
      title: "Moaz El-Masry",
      position: "Founder of Infinity",
      content:
        "Divic has been pivotal in revolutionizing our business processes. Their ERPNext solution streamlined our operations, showcasing unmatched expertise.",
    },
  ];
  return (
    <div
      id="Testimonials"
      className="md:container md:mx-auto px-4 lg:px-24 items-center	my-10  md:my-24 "
    >
      <div className="main-title mx-auto">Testimonials</div>
      <div className="mt-3 mb-8 hidden md:block mx-auto items-center ">
        <div className="hero-last text-base	 lg:text-2xl">
          Powering the world’s best product teams
        </div>
        <div className="hero-last light text-base	 lg:text-2xl">
          From next-gen startups to established enterprises.
        </div>
      </div>
      <div className="hero-last  mt-3 mb-8 mx-auto block md:hidden">
        Streamline your software development process with Divic
      </div>
      {/* test-section */}
      <div className=" gap-10  grid-cols-2 hidden md:grid">
        {testimonials.map((item, index) => (
          <div key={index} className="testimonial-card p-6 flex gap-5">
            <div>
              <Avatar src={`${item.avatar}`} size="lg" />
            </div>
            <div>
              <h2
                className="md:text-2xl  text-lg font-semibold"
                style={{ color: "rgba(175, 186, 202, 1)" }}
              >
                {item.title}
              </h2>
              <h3
                className="md:text-base text-xs		mb-3"
                style={{ color: "rgba(94, 113, 141, 1)" }}
              >
                {item.position}
              </h3>
              <p
                className="md:text-base text-xs"
                style={{ color: "rgba(136, 151, 174, 1)" }}
              >
                {item.content}
              </p>
            </div>
          </div>
        ))}
      </div>
      {/* mobile-testimonial */}
      <div className="block md:hidden">
        <Slider {...settings}>
          {testimonials.map((item, index) => (
            <div
              key={index}
              className="testimonial-card-mobile p-6 flex justify-center gap-5"
            >
              <div>
                <Avatar src={`${item.avatar}`} size="lg" />
              </div>
              <div>
                <h2
                  className="md:text-2xl  text-lg font-semibold"
                  style={{ color: "rgba(175, 186, 202, 1)" }}
                >
                  {item.title}
                </h2>
                <h3
                  className="md:text-base text-xs		mb-3"
                  style={{ color: "rgba(94, 113, 141, 1)" }}
                >
                  {item.position}
                </h3>
                <p
                  className="md:text-base text-xs"
                  style={{ color: "rgba(136, 151, 174, 1)" }}
                >
                  {item.content}
                </p>
              </div>
            </div>
          ))}
        </Slider>
      </div>

      {/* mobile-testimonial */}
      {/* test-section */}
    </div>
  );
};

export default Testimonials;
