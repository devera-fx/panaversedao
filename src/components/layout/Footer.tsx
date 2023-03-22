'use client'

import { Box, Container, Heading, SimpleGrid, Text } from "@chakra-ui/react"
import Image from "next/image"
import { Link } from "@chakra-ui/react";
import logo from "/public/logo.png";
import NextLink from "next/link";

function Footer() {
  return (
    <div className="grid md:grid-cols-4 px-[40px] w-full bg-slate-500 text-zinc-100">
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 border-l-4 border-l-red-700 pl-2">About Us</h1>
        <Image src={logo} alt="panaverse logo" width={120} height={120} />
        <p className="mt-4">
          The Future of the Web is Web 3.0, Metaverse, and Edge Computing. Panaverse DAO is a movement to spread these technolgies globally. It is community of Web 3 and Metaverse developers, designers, trainers, startup founders and service providers.
        </p>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 border-l-4 border-l-red-700 pl-2">
          Useful Links
        </h1>
        <ul className="text-zinc-100">
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={''}>Home</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={''}>About</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={''}>Cources</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={''}>More</Link></li>
        </ul>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 border-l-4 border-l-red-700 pl-2">
          Follow Us
        </h1>
        <ul className="text-zinc-100">
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={'https://twitter.com/Panaverse_edu'} isExternal>Twitter</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={'https://www.facebook.com/groups/panaverse'} isExternal>Facebook</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={'https://www.youtube.com/@panaverse/streams'} isExternal>YouTube</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={'https://www.linkedin.com/company/panaverse/'} isExternal>Linkedin</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={'https://github.com/panaverse'} isExternal>GitHub</Link></li>
        </ul>
      </div>
      <div className="p-4">
        <h1 className="text-xl font-bold mb-4 border-l-4 border-l-red-700 pl-2">
          Contact Us
        </h1>
        <ul className="text-zinc-100">
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={''}>+92-308-2220203</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={''}>aakifnajib@gmail.com</Link></li>
          <li className="mb-4 font-semibold hover:text-orange-500"><Link as={NextLink} href={''}>PIAIC Secretariat C7, Block 2 Gulshan-e-Iqbal, Karachi, Sindh, Pakistan</Link></li>
        </ul>
      </div>
    </div>
  )
}

export default Footer