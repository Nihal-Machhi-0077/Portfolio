"use client";
import { Github, Linkedin, Twitter } from "lucide-react";
import Link from "next/link";
import React from "react";



function Footer() {
  return (
    <div>
      <div className="bg-slate-100 h-auto w-full px-20  ">
        <div className="border border-spacing-2 border-black shadow-xl shadow-black" ></div>
        <div className="flex  ">
          <div className="w-1/2 h-auto pt-10 pb-10 " >
            <div className=" text-lg  md:text-xl text-black font-sans ">
              <p>Nihal Machhi</p>
              <p className="text-sm" >Web Developer • Software Developer</p>
            </div>
            <div className="flex gap-5 pb-20 pt-20   ">
              <Link href={"https://x.com/NihalMachhi"}>
                {" "}
                <Twitter className="h-7 w-7 text-black     " />
              </Link>
              <Link href={"https://github.com/Nihal-Machhi-0077"}>
                {" "}
                <Github className="h-7 w-7 text-black" />
              </Link>
              <Link
                href={"https://www.linkedin.com/in/nihal-machhi-a7a434268/"}
              >
                {" "}
                <Linkedin className="h-7 w-7 text-black" />
              </Link>
            </div>
          </div>
          <div>
            <div className="text-black text-xl md:text-4xl font-sans pt-20  ">
              <p>If you like what you see, let's </p>
              <p>work together</p>
            </div>
                <div className="text-black text-4xl" >
                   
                   {/* TODO:find ways to send user to email adderess link     */}
               
                </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
