import React from 'react'

function Projects() {
  return (
    <>
    <div className='flex justify-center items-center py-10 my-10'>
    <div className='w-4/5 flex flex-wrap items-center justify-around'>
        <div className="projects flex border rounded my-5">
            <div className="box w-30 h-16 text-center p-2 border-r">React</div>
            <div className="texts w-100 h-16 text-center p-2"><a href="#">React Js</a></div>
        </div>
        <div className="projects flex border rounded my-5">
            <div className="box w-30 h-16 text-center p-2 border-r">Front-End</div>
            <div className="texts w-100 h-16 text-center p-2 "><a href="#">Front-End Developer</a></div>
        </div>
        <div className="projects flex border rounded my-5">
            <div className="box w-30 h-16 text-center p-2 border-r">Mern</div>
            <div className="texts w-100 h-16 text-center p-2 "><a href="#">Mern-Stack Developer</a></div>
        </div>
        <div className="projects flex border rounded my-5">
            <div className="box w-30 h-16 text-center p-2 border-r">MongoDB</div>
            <div className="texts w-100 h-16 text-center p-2 "><a href="#">MongoDB</a></div>
        </div>
        <div className="projects flex border rounded my-5">
            <div className="box w-30 h-16 text-center p-2 border-r">Backend</div>
            <div className="texts w-100 h-16 text-center p-2 "><a href="#">BackEnd Developer</a></div>
        </div>
        <div className="projects flex border rounded my-5">
            <div className="box w-30 h-16 text-center p-2 border-r">Software</div>
            <div className="texts w-100 h-16 text-center p-2 "><a href="#">Software Engineer</a></div>
        </div>
    </div>
    </div>
    </>
  )
}

export default Projects
