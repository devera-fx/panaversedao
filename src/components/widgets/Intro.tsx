"use client";
import { Box, Link } from "@chakra-ui/layout";
import NextLink from "next/link";
import { Text } from "@chakra-ui/react";
import Image from "next/image";
import React from "react";
import png from "../../assets/President.png";
// components
import Wrapper from "../shared/Wrapper";
import Button from "../shared/Button";

function Intro() {
  return (
    <section>
      <Wrapper>
        <div className="flex flex-col-reverse md:flex-row px-[60px] w-full mt-0 items-center bg-[url('https://images.pond5.com/abstract-beautiful-geometric-background-moving-footage-076296656_prevstill.jpeg')] bg-cover bg-fixed">
          <div className="flex-1 mt-[80px]">
            <h3 className="text-base sm:text-2xl font-bold text-orange-400">
              Presidential Initiative for Artificial Intelligence & Computing
              (PIAIC)
            </h3>
            <h1 className="text-3xl md:text-5xl py-4 font-extrabold text-zinc-50 md:text-blue-200">
              Certified Web 3.0 & <br />
              Metaverse Developer
            </h1>
            <p className="text-sm sm:text-lg pb-2 pr-3 text-slate-50">
              The mission of PIAIC is to reshape Pakistan by revolutionizing
              education, research, and business by adopting latest, cutting-edge
              technologies. Experts are calling this the 4th industrial
              revolution.
            </p>
            <p className="text-sm sm:text-lg pb-4 pr-3 text-slate-50">
            We want Pakistan to become a global hub for AI, Data
              Science, Nloud Native Computing, Edge Computing, Blockchain,
              Augmented Reality, and Internet of Things.
            </p>
            <div className="mt-4">
            <Link as={NextLink} href="https://www.piaic.org/" isExternal>
              <Button text={'Learn More'} />
            </Link>
            </div>
          </div>
          <div className="self-center mt-[100px]">
            <Image
              src={png}
              alt="Profile Picture of President Arif Alvi"
              className="px-2 pb-0 mt-6"
              width={300}
              height={300}
            />
          </div>
        </div>
      </Wrapper>
    </section>
  );
}

export default Intro;
