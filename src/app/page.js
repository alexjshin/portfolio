"use client";

import Head from "next/head";
import {BsFillMoonStarsFill} from 'react-icons/bs';
import {AiFillGithub,
        AiFillLinkedin, 
        AiFillYoutube,
        AiFillMail} from 'react-icons/ai';
import Image from "next/image";
import headshot from '/public/headshot-transparent.png';
import design from '/public/design.png';
import code from '/public/code.png';
import consulting from '/public/consulting.png';
import web1 from '/public/web1.png';
import web2 from '/public/web2.png';
import web3 from '/public/web3.png';
import web4 from '/public/web4.png';
import web5 from '/public/web5.png';
import web6 from '/public/web6.png';
import { useState } from "react";

export default function Home() {
  const [darkMode, setDarkMode] = useState(false);
  return (
    <div className={darkMode ? "dark" : ""}>
      <Head>
        <title>Alex Shin Portfolio</title>
        <meta name = "description" content = "generated by create next app"></meta>
        <link rel = "icon" href="/favicon.ico"/>
      </Head>

      <main className = "bg-white px-10 md:px-20 lg:px-40 dark:bg-gray-900">
        <section className="min-h-screen"> 
          <nav className = "py-10 mb-12 flex justify-between">
            <h1 className = "text-xl font-sans dark:text-slate-300">Alex Shin</h1>
            <ul className="flex items.center">
              <li className="dark:text-white"><BsFillMoonStarsFill onClick = {() => setDarkMode(!darkMode)}className = "cursor-pointer text-2xl"/></li>
              <li>
                <a href = "public/Alex Shin Resume 2023.pdf" target="_blank" className="bg-gradient-to-br from-blue-500 to-teal-500 text-white px-4 py-2 rounded-md ml-8">
                  Resume
                </a>
              </li>

            </ul>
          </nav>
          <div className = "text-center p-10">
            <h2 className="text-5xl py-2 text-teal-600 font-medium md:text-6xl">Alex Shin</h2>
            <h3 className="text-2xl py-2 md:text-3xl dark:text-white">Developer and Engineer</h3>
            <p className="text-md py-5 leading-8 text-gray-800 md:text-xl max-w-2xl mx-auto dark:text-slate-400">
              Currently a <span className="text-teal-500">third-year</span> undergraduate pursuing an Bachelor of Science at <span className="text-teal-500">Yale College</span> majoring in <span className="text-teal-500">Electrical Engineering</span> and <span className="text-teal-500">Computer Science</span>. 
              Join me down below and let's get started!
            </p>
          </div>
          <div className="text-5xl flex justify-center gap-16 py-3 text-gray-600">
            <AiFillLinkedin className="dark:text-white"/>
            <AiFillMail className="dark:text-white"/>
            <AiFillYoutube className="dark:text-white"/>
            <AiFillGithub className="dark:text-white" />
          </div>
          <div className="relative mx-auto bg-gradient-to-b from-teal-500 rounded-full w-80 h-80 m-10 overflow-hidden md:h-96 md:w-96">
            <Image src = {headshot} layout = "fill" objectFit="cover"/>
          </div>
        </section>
        
        <section>
          <div className="mx-auto">
            <h3 className="text-3xl py-1 mx-auto dark:text-white">Education/Experience</h3>
            <p className="text-md py-2 leading-8 text-gray-800 mx-auto dark:text-slate-400">
              My journey as a software engineer, developer, and student.
            </p>
          </div>
          <div className="lg:flex gap-10 max-w-4xl mx-auto">
            <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-auto dark:bg-gradient-to-b dark:from-blue-300 dark:to-teal-500">
              <Image src={design} width = {100} height = {100}/>
              <h3 className="text-lg font-medium py-8 pb-2">Beautiful Designs</h3>
              <p className = "py-2">yo</p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-auto dark:bg-gradient-to-b dark:from-blue-300 dark:to-teal-500">
              <Image src={code} width = {100} height = {100}/>
              <h3 className="text-lg font-medium py-8 pb-2">Beautiful Designs</h3>
              <p className = "py-2">yo</p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
            <div className="text-center shadow-lg p-10 rounded-xl my-10 mx-auto dark:bg-gradient-to-b dark:from-blue-300 dark:to-teal-500">
              <Image src={consulting} width = {100} height = {100}/>
              <h3 className="text-lg font-medium py-8 pb-2">Beautiful Designs</h3>
              <p className = "py-2">yo</p>
              <h4 className="py-4 text-teal-600">Design tools I used</h4>
              <p className="text-gray-800 py-1">Photoshop</p>
              <p className="text-gray-800 py-1">Illustrator</p>
              <p className="text-gray-800 py-1">Figma</p>
            </div>
          </div>
        </section>
        <section>
          <div>
            <h3 className="text-3xl py-1 dark:text-white">Portfolio</h3>
            <p className="text-md py-2 leading-8 text-gray-800 dark:text-slate-400">
              Since the beginning of m y journey as a feelance developer, 
              I've done remote work for
            </p>
          </div>
          <div className="flex flex-col gap-10 lg:flex-row lg:flex-wrap">
            <div className="basis-1/3 flex-1">
              <Image src={web1} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout = "responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web2} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout = "responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web3} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout = "responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web4} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout = "responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web5} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout = "responsive"/>
            </div>
            <div className="basis-1/3 flex-1">
              <Image src={web6} className="rounded-lg object-cover" width={'100%'} height={'100%'} layout = "responsive"/>
            </div>
          </div>
        </section>
      </main>
    </div>
  )
}

