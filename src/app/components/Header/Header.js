"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@nextui-org/button";
import "./Header.css";
import {
  Navbar,
  NavbarBrand,
  NavbarContent,
  NavbarItem,
} from "@nextui-org/navbar";
const Header = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const links = [
    "Home",
    "Customers",
    "Services",
    "Why US",
    "Testimonials",
    "Contact Us",
  ];

  const logo = (
    <div className="logo mr-4">
      <Image
        width={73}
        height={20}
        alt="DIVIC"
        src="/assests/logo/Vector.png"
      />
    </div>
  );
  return (
    <>
      <div
        className={`${
          openMenu ? "active" : ""
        } mobile-links p-4 flex flex-col items-start justify-evenly`}
      >
        {links.map((link, i) => (
          <a key={i} href={`#${link}`} onClick={() => setOpenMenu(!openMenu)}>
            {link}
          </a>
        ))}
      </div>
      <div className="md:container desktop-nav md:mx-auto px-24 py-6 flex justify-center">
        <div className="nav-parent px-4 mx-auto flex items-center justify-between">
          <div>{logo}</div>

          <div className="hidden nav-links sm:flex gap-4 items-center" >
            <li className="nav-link">
              <a href="#Home">Home</a>
            </li>
            <li className="nav-link">
              <a href="#Customers">Customers</a>
            </li>
            <li className="nav-link">
              <a href="#Services">Services</a>
            </li>
            <li className="nav-link">
              <a href="#Why US">Why Us</a>
            </li>
            <li className="nav-link">
              <a href="#Testimonials">Testimonials</a>
            </li>
            <li className="nav-link">
              <Link href="#Products">Products</Link>
            </li>
          </div>
          <div >
            <Button className="con-sub-btn py-1.5 px-3.5">
              <a className="" href="#Contact Us">
                Contact Us
              </a>
            </Button>
          </div>
        </div>
      </div>
      <div className="md:container mobile-nav md:mx-auto px-4 py-6 flex justify-center">
        <Navbar className="nav-parent-mobile mx-auto">
          <NavbarBrand>{logo}</NavbarBrand>
          <div onClick={() => setOpenMenu(!openMenu)}>
            <svg
              className="burger"
              width="44"
              height="42"
              viewBox="0 0 44 42"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g filter="url(#filter0_d_29_3454)">
                <path
                  d="M27.3331 29V31.6667H12.6664V29H27.3331ZM33.9998 19.6667V22.3334H9.99976V19.6667H33.9998ZM31.3331 10.3334V13H16.6664V10.3334H31.3331Z"
                  fill="white"
                />
              </g>
              <defs>
                <filter
                  className="filter"
                  id="filter0_d_29_3454"
                  x="-0.000244141"
                  y="0.333374"
                  width="44"
                  height="41.3333"
                  filterUnits="userSpaceOnUse"
                  colorInterpolationFilters="sRGB"
                >
                  <feFlood floodOpacity="0" result="BackgroundImageFix" />
                  <feColorMatrix
                    in="SourceAlpha"
                    type="matrix"
                    values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                    result="hardAlpha"
                  />
                  <feOffset />
                  <feGaussianBlur stdDeviation="5" />
                  <feComposite in2="hardAlpha" operator="out" />
                  <feColorMatrix
                    type="matrix"
                    values="0 0 0 0 1 0 0 0 0 1 0 0 0 0 1 0 0 0 0.5 0"
                  />
                  <feBlend
                    mode="normal"
                    in2="BackgroundImageFix"
                    result="effect1_dropShadow_29_3454"
                  />
                  <feBlend
                    mode="normal"
                    in="SourceGraphic"
                    in2="effect1_dropShadow_29_3454"
                    result="shape"
                  />
                </filter>
              </defs>
            </svg>
          </div>
        </Navbar>
      </div>
    </>
  );
};

export default Header;
