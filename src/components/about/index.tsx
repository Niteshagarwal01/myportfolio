/* eslint-disable @next/next/no-img-element */
import React from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full font-bold mb-4">
            B.Tech CSE &apos;28 | Graphics Head @ The Campus Chronicles | Graphic Designer @ Echelon Mediaa | 1st Place @ IIT Delhi Tryst&apos;25 | 12+ Hackathons | 6+ Finals | Published Author
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base mt-2">
            I am a highly driven B.Tech CSE student (&apos;28) with a versatile skill set across Full Stack Development, AI/ML, UI/UX, and Graphic Design. My passion lies at the intersection of creative thinking and technical problem-solving—where I strive to build impactful, user-centric products.
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            I currently serve as the Graphics Head at The Campus Chronicles (Full-time), leading creative direction and design strategy, and work as a Graphic Designer at Echelon Mediaa (Hybrid), contributing to brand visuals and digital campaigns.
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            With expertise in Python, JavaScript, React.js, and Next.js, I&apos;ve built AI assistants like &quot;Jarvis&quot; and &quot;Friday,&quot; developed an Emotion Detection model using YOLO v4, and created full-stack platforms like Mirai (digital marketing automation), PsycheCare (mental health platform), and ipu_guru (smart study platform currently in development).
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            My design portfolio includes projects for Delta Front, Hurricane Store, and various brand-focused initiatives emphasizing clean, responsive, and engaging interfaces. I&apos;m also a published author with my book &quot;Finding Myself in the Lies&quot; exploring themes of self-awareness and emotional journeys.
          </p>
          <p className="font-medium text-sm sm:text-md md:text-base mt-4">
            I am deeply passionate about blending technology and creativity to build solutions that truly make a difference. I constantly seek opportunities to innovate, explore, and contribute to meaningful, impactful projects. Let&apos;s connect and collaborate!
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <div className="flex flex-col justify-center h-full space-y-2">
            <p className="font-bold w-full text-left text-3xl sm:text-4xl lg:text-5xl leading-tight">
              Full Stack & AI/ML Developer
            </p>
            <p className="font-semibold text-sm sm:text-base lg:text-lg">Graphics Head | UI/UX Designer</p>
            <p className="font-light text-xs sm:text-sm lg:text-base">Published Author | Creative Technologist</p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <div className="flex flex-col justify-center h-full space-y-2">
            <p className="font-bold w-full text-left text-2xl sm:text-3xl lg:text-4xl leading-tight">
              12+ Hackathons Participated
            </p>
            <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-yellow-400">6 Finalist Positions</p>
            <p className="font-bold text-xl sm:text-2xl lg:text-3xl text-green-400">2 Competition Wins</p>
            <p className="font-semibold text-sm sm:text-base mt-1">Including 1st @ IIT Delhi Tryst&apos;25</p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://finding-myself-in-the-lies.netlify.app/"
            target="_blank"
            className="block h-full"
          >
            <div className="font-semibold w-full text-left h-full flex flex-col">
              <p className="font-bold text-xl sm:text-2xl mb-3">Published Author</p>
              <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow">
                <li>
                  Published book &quot;Finding My Self in the Lies&quot; exploring self-awareness and emotional journeys
                </li>
                <li>
                  Combines creative writing with psychological insights to deliver a compelling narrative
                </li>
                <li>
                  Explores themes of personal growth, authenticity, identity, and inner conflict
                </li>
                <li>
                  Created accompanying website to showcase the book and its themes
                </li>
              </ul>
              <p className="font-semibold text-xs mt-3 text-right">
                Released March 2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent"
          }
        >
          <div className="font-semibold w-full text-left h-full flex flex-col">
            <p className="font-bold text-xl sm:text-2xl mb-3">
              Achievements & Leadership
            </p>
            <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow">
              <li>
                <b className="font-bold">Graphics Head</b> - The Campus Chronicles (Full-time)
              </li>
              <li>
                <b className="font-bold">Graphic Designer</b> - Echelon Mediaa (Hybrid)
              </li>
              <li>
                <b className="font-bold">12+ Hackathons</b> - National and international level
              </li>
              <li>
                <b className="font-bold">6+ Finalist Positions</b> - Paranox 2.0, CipherHunt (Top 10), Vihaan
              </li>
              <li>
                <b className="font-bold">1st Place @ IIT Delhi Tryst&apos;25</b> - Technowar Competition
              </li>
              <li>
                <b className="font-bold">Published Author</b> - &quot;Finding My Self in the Lies&quot;
              </li>
            </ul>
            <p className="font-semibold text-xs mt-3 text-right">
              2024 - 2025
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent"
          }
        >
          <div className="font-semibold w-full text-left h-full flex flex-col">
            <p className="font-bold text-xl sm:text-2xl mb-3">
              Technical Expertise
            </p>
            <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow">
              <li>
                <b className="font-bold">Programming & Frameworks</b> - Python, JavaScript, React.js, Next.js
              </li>
              <li>
                <b className="font-bold">AI/ML Tools</b> - TensorFlow, Keras, NumPy, Pandas, YOLO v4
              </li>
              <li>
                <b className="font-bold">Payments & Auth</b> - Razorpay, Clerk Authentication
              </li>
              <li>
                <b className="font-bold">Databases</b> - Pinecone, Weaviate (Vector DBs)
              </li>
              <li>
                <b className="font-bold">Design Tools</b> - Figma, Canva, UI/UX Design
              </li>
            </ul>
            <p className="font-semibold text-xs mt-3 text-right">
              B.Tech CSE &apos;28
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full text-accent"}
        >
          <div className="w-full text-center mb-6">
            <h2 className="font-bold text-2xl md:text-3xl">Featured Projects</h2>
            <p className="font-light text-sm md:text-base mt-2">Top 3 projects showcasing my technical expertise</p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://github.com/Niteshagarwal01/Tastify-Spotify-for-Recipes"
            target="_blank"
            className="block h-full"
          >
            <div className="font-semibold w-full text-left h-full flex flex-col">
              <p className="font-bold text-xl sm:text-2xl mb-3">
                Tastify - Spotify of Recipes
              </p>
              <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow">
                <li>
                  Modern recipe discovery app with <b className="font-bold">Spotify-like interface</b>
                </li>
                <li>
                  Features 8 beautiful themes, YouTube tutorials, and smart search
                </li>
                <li>
                  Built with <b className="font-bold">React Native</b>, <b className="font-bold">Expo</b>, <b className="font-bold">Node.js</b>, and <b className="font-bold">PostgreSQL</b>
                </li>
                <li>
                  Cross-platform app with Clerk auth and TheMealDB API
                </li>
              </ul>
              <p className="font-semibold text-xs mt-3 text-right">
                2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent"
          }
        >
          <div className="font-semibold w-full text-left h-full flex flex-col">
            <p className="font-bold text-xl sm:text-2xl mb-3">
              Mirai - Marketing Automation
            </p>
            <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow">
              <li>
                Digital marketing automation with <b className="font-bold">12+ API integrations</b>
              </li>
              <li>
                Automates social media, photoshoots, and video campaigns
              </li>
              <li>
                Built with <b className="font-bold">Next.js</b>, <b className="font-bold">Python</b>, <b className="font-bold">LangChain</b>, and <b className="font-bold">Google Cloud</b>
              </li>
              <li>
                Razorpay payment integration and smart chatbot agents
              </li>
            </ul>
            <p className="font-semibold text-xs mt-3 text-right">
              2025
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://github.com/Niteshagarwal01/jarvis"
            target="_blank"
            className="block h-full"
          >
            <div className="font-semibold w-full text-left h-full flex flex-col">
              <p className="font-bold text-xl sm:text-2xl mb-3">
                Jarvis & Friday AI Assistants
              </p>
              <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow">
                <li>
                  Voice-controlled AI assistants inspired by Iron Man&apos;s JARVIS and FRIDAY
                </li>
                <li>
                  Perform tasks like opening apps, web searching, and managing schedules
                </li>
                <li>
                  Built with <b className="font-bold">Python</b>, <b className="font-bold">Speech Recognition</b>, and <b className="font-bold">NLP</b>
                </li>
                <li>
                  Advanced automation and conversational AI capabilities
                </li>
              </ul>
              <p className="font-semibold text-xs mt-3 text-right">
                2024-2025
              </p>
            </div>
          </Link>
        </ItemLayout>
        
        <ItemLayout className={"col-span-full text-accent mt-6"}>
          <div className="text-center">
            <p className="font-medium text-sm md:text-base">
              <Link href="/projects" className="text-blue-400 hover:underline">View all projects</Link> to explore the complete portfolio of my work
            </p>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Niteshagarwal01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&layout=compact&langs_count=8&hide=html,css"
            alt="NiteshAgarwal"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Niteshagarwal01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true&include_all_commits=true"
            alt="NiteshAgarwal"
            loading="lazy"
          />
        </ItemLayout>
        

       
        

        <ItemLayout className={"col-span-full lg:col-span-6 !p-0"}>
          <div className="grid grid-cols-3 gap-4">
            <div className="col-span-1 flex flex-col justify-center items-center text-center">
              <p className="text-4xl font-bold">58</p>
              <p className="text-sm">Total Contributions</p>
              <p className="text-xs mt-1">Aug 27, 2024 - Present</p>
            </div>
            
            <div className="col-span-1 flex flex-col justify-center items-center text-center">
              <div className="relative">
                <div className="rounded-full h-24 w-24 border-4 border-[#FEFE5B] flex items-center justify-center">
                  <span className="text-4xl font-bold">1</span>
                </div>
                <div className="absolute top-0 right-0 h-6 w-6 bg-orange-500 rounded-full"></div>
              </div>
              <p className="text-sm mt-2">Current Streak</p>
              <p className="text-xs mt-1">Apr 27</p>
            </div>
            
            <div className="col-span-1 flex flex-col justify-center items-center text-center">
              <p className="text-4xl font-bold">2</p>
              <p className="text-sm">Longest Streak</p>
              <p className="text-xs mt-1">Mar 6 - Mar 7</p>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full lg:col-span-6 !p-0"}>
          <div className="p-6 h-full flex flex-col">
            <div className="flex items-center mb-4">
              <span className="text-lg md:text-2xl font-bold flex items-center">
                <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-2" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 10V3L4 14h7v7l9-11h-7z" />
                </svg>
                MIRAI
              </span>
            </div>
            <p className="text-sm mb-4">Mirai - A cutting-edge digital marketing automation platform integrating 12+ APIs to streamline marketing operations. Automates social media posts, photoshoots, and video campaigns with smart chatbot agents for intelligent customer engagement. Built with Next.js, Python, LangChain, Google Cloud, and Razorpay payment integration.</p>
            <div className="mt-auto flex items-center flex-wrap gap-2">
              <span className="flex items-center">
                <span className="h-3 w-3 bg-blue-500 rounded-full mr-1"></span>
                Next.js
              </span>
              <span className="flex items-center">
                <span className="h-3 w-3 bg-yellow-500 rounded-full mr-1"></span>
                Python
              </span>
              <span className="flex items-center">
                <span className="h-3 w-3 bg-green-500 rounded-full mr-1"></span>
                AI/ML
              </span>
            </div>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full"}>
          <div className="text-center">
            <p className="font-light text-sm md:text-base">
              Looking for collaboration opportunities in UI/UX design, Python development, or creative projects.
            </p>
            <p className="font-medium text-sm md:text-base mt-2">
              Feel free to reach out through the <Link href="/contact" className="text-blue-400 hover:underline">contact page</Link> or connect with me on social media.
            </p>
          </div>
        </ItemLayout>
      </div>
    </section>
  );
};

export default AboutDetails;
