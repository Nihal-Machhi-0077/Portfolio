import React from "react";
import Link from "next/link";

function page() {
  return (
    <div>
      <div className="h-auto w-full bg-slate-100 px-20 text-black font-sans  ">
        <div className="flex gap-10 ">
          <div>
            <div className="text-7xl  pt-32">
              <p>It's so nice to</p>
              <p>meet you, I'm</p>
              <p>Nihal Machhi :)</p>
            </div>
            <div>
              <div className="pt-10 flex gap-5  ">
                <button className="text-white bg-gray-800 h-16 w-40 px-3 py-2 rounded-3xl hover:shadow-xl ">
                  <Link href={""}>Resume</Link>
                </button>
                <button className="text-black bg-white border border-spacing-2 border-black  h-16 w-40 px-3 py-2 rounded-3xl hover:shadow-xl  ">
                  <Link href={""}>Linkedin</Link>
                </button>
              </div>
            </div>
          </div>
          <div>
            <div className="text-center pt-24 pl-28  ">
              <img className="rounded-2xl" src="./NihalMachhi.jpg" alt="" />
            </div>
          </div>
        </div>

        <div>
          <div className="h-dvh w-full px-40 pt-20   ">
            <div className="text-lg text-pretty " >
              <p className="text-xl  text-gray-500 pb-3 ">Who am I?</p>
              <div>
                <p>
                  Growing up in India, my fascination with technology and its
                  ability to transform lives has been a lifelong passion. I
                  started coding at the age of eight, which ignited my interest
                  in web development. This love for creating digital experiences
                  led me to connect with friends who shared a similar enthusiasm
                  for technology. Through these friendships, I was introduced to
                  the world of web design and development, and from that moment
                  on, I was hooked. This newfound passion inspired me to pursue
                  a formal education in Information technology
                </p>
              </div>
              <br />
              <div>
                Throughout my journey as a developer, I’ve had the chance to
                work on a variety of full-stack projects, collaborating with
                diverse teams and gaining valuable experience. I’ve built
                engaging web applications for local businesses, created
                interactive platforms for online learning, and contributed to
                open-source projects that showcase my skills. I’ve also worked
                on personal projects that challenge me to push my limits and
                explore new technologies. Each experience has strengthened my
                understanding of both front-end and back-end development, as
                well as the importance of user-centered design.
              </div>
              <br />
              <div>
                With a strong focus on user experience and business strategy,
                I've developed essential skills in front-end and back-end
                development, as well as design research, prototyping, and user
                testing. My goal has always been to unite the team with a shared
                vision and ensure that the product is crafted with a clear
                purpose, precisely addressing the needs of the target audience.
              </div>
            </div>
          </div>
          <div>
            <div className="h-dvh w-full px-40 pt-20  " >
                  <div className="text-lg" >
                    <p className="text-xl  text-gray-500 pb-3 " > My Development Process</p>
                    <div>
                        <p>My approach to web development is flexible and evolves as I gain new experiences. I believe that creating a great website involves much more than just writing code. One of my biggest strengths is collaborating with my team to build every aspect of the website together, ensuring it meets the needs of users and functions smoothly.</p>
                    </div>
                  <div>
                    <div>
                      
                    </div>
                  </div>
                  </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default page;
