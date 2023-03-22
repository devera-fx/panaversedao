"use client";

import { Box } from "@chakra-ui/layout";
import Image from "next/image";
import Wrapper from "../shared/Wrapper";
import logo from '../../../public/earnwhilelearn.png';

function Nutshell() {
  return (
    <section>
      <Wrapper>
        <div className="grid justify-items-center py-10 px-[60px] w-full shadow-3xl m-auto text-white
        bg-[url('https://world.fantasticimago.com/wp-content/uploads/2014/10/geometric-bg-blue.jpg')] text-center  bg-cover bg-fixed">
          <h1 className="text-4xl pb-5 font-extrabold">
            The Program in a Nutshell
          </h1>
          <p className="text-lg sm:text-xl font-sm pb-2">
            In this brand-new type of curriculum, students will learn{" "}
            <a className="underline decoration-pink-600">How to Make Money</a>{" "}
            and boost exports in the classroom and will begin doing so within
            six months of the program’s beginning. It resembles a cross between
            a corporate venture and an educational project.
          </p>
        </div>
      </Wrapper>
    </section>
  );
}

export default Nutshell;
