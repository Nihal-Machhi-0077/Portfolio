import Card from '@/components/card'
import { ArrowDown, BadgeCheck } from 'lucide-react'


export default function Home() {
  return (
    <div>
    <main className=" bg-slate-100 flex flex-col items-center justify-center min-h-screen px-4 text-center">
      <div className='pb-5'   >
        <img  className='h-40 w-40  rounded-full  ' src="./NihalMachhi.jpg" alt="" />
      </div>
      <div className="max-w-4xl text-black   ">
        <div className='flex text-center justify-center content-center ' >
        <h1 className="text-3xl md:text-4xl font-normal mb-2">Nihal Machhi </h1> 
        <BadgeCheck className='h-7 w-7 text-blue-700' />  
        </div>
        <p className="text-lg md:text-xl text-black mb-12 font-light">Web Developer • Software Developer</p>
        <h2 className="text-3xl md:text-5xl font-normal leading-tight mb-16">
        Full stack software developer with expertise in{' '}
          <span className="bg-yellow-200 px-2">Front-End</span> and{' '}
          <span className="bg-yellow-200 px-2">Back-End </span> development{' '}
        </h2>
        <ArrowDown className="w-8 h-8 mx-auto text-gray-400 animate-bounce" />
      </div>
      
    </main>
    <div>
      <div className='h-auto w-full px-5  md:px-20 bg-slate-100' >
                <div className='text-center text-2xl text-black font-sans '  >
                  <p>Selected Projects</p>
                  <p>2024-2025</p>
                </div>
                <div>
                  <div className='md:flex' >
                     <Card name='nihal Machh' description='hello ther ' /> 
                     <Card name='nihal Machh' description='hello ther ' /> 
               
                  </div>
                  <div className='md:flex' >
                     <Card name='nihal Machh' description='hello ther ' /> 
                     <Card name='nihal Machh' description='hello ther ' /> 
               
                  </div>
                  <div className='md:flex' >
                     <Card name='nihal Machh' description='hello ther ' /> 
                     <Card name='nihal Machh' description='hello ther ' /> 
               
                  </div>
                </div>

                
      </div>
    </div>
    </div>
  )
}
