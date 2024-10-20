import React from 'react'
import Link from 'next/link';

interface CardProps {
    name: string;
    description: string;
  }

  const Card: React.FC<CardProps> =  ({name,description}) =>{
  return (
   <div className='h-full w-full  md:px-20 font-sans md:flex md:grid-cols-2 pb-10  ' >
    <div className='text-black' >
        <div className='h-1/2 w-full md:w-full pt-10 px-5  ' > 
                <div className='' >
                    <img  className='rounded-3xl' src="yourname.jpg" alt="Project ImG" />
                </div>
                <div className='text-start h-1/2 pt-10  ' >
                        <p className='text-2xl' >{name}</p>
                        <p className='text-xl  '>{description}</p>
                </div>
                <div className='text-xl pt-16 underliz text-black   ' >
                    <Link className='underline'  href={''} >View Project</Link>
                </div>
        </div>
    </div>
   </div>
  )
}

export default Card