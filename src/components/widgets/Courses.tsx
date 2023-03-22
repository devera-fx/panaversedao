"use client";

import Button from "@/components/shared/Button";
import Wrapper from "@/components/shared/Wrapper";
import { Link } from "@chakra-ui/layout";
import NextLink from "next/link";

const coreCourseData = [
  {
    id: 1,
    header: "Quarter I (Core)",
    description: "CS-101: Object-Oriented Programming using JavaScript and TypeScript alongwith Web 3.0 and Metaverse concepts",
    link: "https://github.com/panaverse/panaverse.github.io#quarter-i-core"
  },
  {
    id: 2,
    header: "Quarter II (Core)",
    description: "W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
    link: "https://github.com/panaverse/panaverse.github.io#quarter-ii-core"
  }
]

const specializedTracksData = [
  {
    id: 1,
    specialization: "1. Web 3.0 (Blockchain) and Metaverse Specialization",
    description: 'This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.',
    header1: "Quarter III",
    text1: "W3-351: Developing Smart Contracts and Planet-Scale Web 3.0 Dapps",
    header2: "Quarter IV",
    text2: "MV-361: Developing Planet-Scale Open Virtual and Augmented Metaverse Experiences",
    link: "https://www.panaverse.co/"
  },
  {
    id: 2,
    specialization: "2. Artificial Intelligence (AI) and Deep Learning Specialization",
    description: 'The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.',
    header1: "Quarter III",
    text1: "AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
    header2: "Quarter IV",
    text2: "AI-361: Deep Learning and MLOps",
    link: "https://www.panaverse.co/"
  },
  {
    id: 3,
    specialization: "3. Cloud-Native Computing Specialization",
    description: 'The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.',
    header1: "Quarter III",
    text1: "CN-351: Certified Kubernetes Application Developer (CKAD)",
    header2: "Quarter IV",
    text2: "CN-361: Developing Multi-Cloud APIs using CDK for Terraform",
    link: "https://www.panaverse.co/"
  },
  {
    id: 4,
    specialization: "4. Ambient Computing and IoT Specialization",
    description: 'The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter and Embedded Devices.',
    header1: "Quarter III",
    text1: "AC-351: Ambient Computing with Voice Assistants and Matter Devices",
    header2: "Quarter IV",
    text2: "AC-361: Embedded Programming using C and Rust",
    link: "https://www.panaverse.co/"
  },
]

function Courses() {
  return (
    <section className="pt-0 w-full bg-[url('https://world.fantasticimago.com/wp-content/uploads/2014/10/geometric-bg-blue.jpg')] bg-cover bg-fixed">
      <Wrapper>
        <div className="grid px-[60px]  justify-items-center text-slate-50 py-4">
          <h4 className="text-2xl md:text-6xl font-bold pb-4">
            Program of Studies
          </h4>
          <p className="text-xl sm:text-2xl font-lg">
            This curriculum is intended for beginners who want to learn software
            development from the ground up. The first two quarters are shared by
            all specialities and are dedicated to studying Object-Oriented
            Programming and cutting-edge Full-Stack Web 2.0 development. It is
            going to be a year-long hybrid programme that includes both onsite
            and online classes and is divided into four quarters of 13 weeks
            each. The emphasis will be on hands-on learning by educating
            students to produce projects. To accommodate everyone, courses will
            be held primarily on weekends or after 6:00 p.m. (Pakistan Time) on
            weekdays. It employs a hybrid teaching format, with core onsite
            classes complemented by online Zoom laboratories and recorded
            videos.
          </p>
        </div>
        <div className="grid px-[60px]  justify-items-center text-white">
          <h2 className="text-2xl md:text-4xl py-4 font-extrabold">
            Courses Common in All Programs
          </h2>
          <p className="text-xl sm:text-2xl font-sm pb-4">
            Every participant of the program will start by completing the
            following two core courses
          </p>
        </div>
        <div className="flex flex-col md:flex-row my-4 px-[100px] gap-x-10 gap-y-10">
          {
            coreCourseData.map((item, i) => {
              return (
                <div className="border rounded-lg flex-1 bg-white hover:bg-blue-300 text-center px-4 pt-6 pb-4" key={item.id}>
                  <h4 className="font-bold text-3xl">{item.header}</h4>
                  <p className="mt-6 text-slate-800 z-0 text-xl font-semibold">{item.description}</p>
                  <div className="mt-4">
                    <Link as={NextLink} href={item.link} isExternal>
                      <Button text={'Explore'} />
                    </Link>
                  </div>
                </div>
              )
            })
          }
        </div>
        <div className="flex flex-col px-[60px]  items-center text-white">
          <h2 className="text-2xl md:text-4xl py-4 font-extrabold">
            Specialized Tracks
          </h2>
          <p className="text-xl sm:text-2xl font-sm pb-4">
            After completing the first two quarters the participants will select one or more specializations consisting of two courses each
          </p>
        </div>
        <div>
        {
          specializedTracksData.map((item, i) => {
            return (
              <div className="pb-4" key={item.id}>
                <div className="flex flex-col px-[60px]  text-center text-white">
                  <h2 className="text-xl md:text-2xl py-4 font-extrabold">
                    {item.specialization}
                  </h2>
                  <p className="text-lg sm:text-xl font-sm pb-4">
                    {item.description}
                  </p>
                </div>
                <div className="grid md:grid-cols-2 my-4 px-[100px] gap-x-10 gap-y-10">
                  <div className="border rounded-lg flex-1 bg-white hover:bg-blue-300 text-center px-4 pt-6 pb-4">
                    <h4 className="font-bold text-3xl">{item.header1}</h4>
                    <p className="mt-6 text-slate-800 z-0 text-xl font-semibold">{item.text1}</p>
                    <div className="mt-4">
                      <Link as={NextLink} href={item.link} isExternal>
                        <Button text={'Explore'} />
                      </Link>
                    </div>
                  </div>
                  <div className="border rounded-lg flex-1 bg-white hover:bg-blue-300 text-center px-4 pt-6 pb-4" key={item.id}>
                    <h4 className="font-bold text-3xl">{item.header2}</h4>
                    <p className="mt-6 text-slate-800 z-0 text-xl font-semibold">{item.text2}</p>
                    <div className="mt-4">
                      <Link as={NextLink} href={item.link} isExternal>
                        <Button text={'Explore'} />
                      </Link>
                    </div>
                  </div>
                </div>
              </div>
            )
          })
        }
        </div>
      </Wrapper>
    </section>
  );
}

export default Courses;

// bg-[url('https://img.freepik.com/free-vector/vivid-geometric-shapes-background_23-2148879762.jpg')] bg-cover bg-fixed