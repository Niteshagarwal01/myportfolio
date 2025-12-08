/* eslint-disable @next/next/no-img-element */
"use client";
import React, { useEffect, useState } from "react";
import Link from "next/link";
import ItemLayout from "./ItemLayout";

const AboutDetails = () => {
  const [githubStats, setGithubStats] = useState({
    topLangsLoaded: false,
    statsLoaded: false,
    streakLoaded: false,
  });

  return (
    <section className="sm:px-20 sm:pb-20 px-5 pb-5 w-full">
      <div className="grid grid-cols-12 gap-4 xs:gap-6 md:gap-8 w-full">
        <ItemLayout
          className={
            "col-span-full lg:col-span-8 row-span-2 flex-col items-start"
          }
        >
          <h2 className="text-xl md:text-2xl text-left w-full font-bold mb-4">
            Full Stack Dev | UI/UX & Graphic Designer | AI/ML Developer | Python | Writer | Music Producer | Winner @ IIT Delhi Tryst&apos;25 | 3× Hackathon Winner | Finalist in 5 Hackathons | 12+ Hackathons | 20+ Tech Events
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base mt-2">
            I am a multifaceted B.Tech CSE student (&apos;28) with expertise spanning Full Stack Development, AI/ML, UI/UX Design, Graphic Design, Music Production, and Creative Writing. I thrive at the intersection of technology and creativity, building innovative solutions that merge code, design, and artistic expression.
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            As Graphics Head at The Campus Chronicles and Graphic Designer at Echelon Mediaa, I lead creative strategy and design execution. My technical prowess shines through AI/ML projects, full-stack applications, and automation platforms, while my creative side flourishes through music production and published literary work.
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            With Python, JavaScript, React.js, and Next.js as my primary tools, I&apos;ve developed AI assistants (&quot;Jarvis&quot; & &quot;Friday&quot;), emotion detection models using YOLO v4, and comprehensive platforms like Mirai (marketing automation with 12+ API integrations), Tastify (recipe discovery app), PsycheCare (mental health platform), and ipu_guru (smart study companion).
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            Beyond code, I&apos;m a published author of &quot;Finding Myself in the Lies,&quot; a passionate music producer creating original compositions, and an active participant in 20+ tech events. My design portfolio spans brand identities, UI/UX systems, and digital campaigns for multiple clients, always emphasizing clean, responsive, and engaging user experiences.
          </p>
          <p className="font-medium text-sm sm:text-md md:text-base mt-4">
            I believe in the power of interdisciplinary creativity—where technology meets art, logic meets emotion, and innovation meets impact. Always eager to collaborate on projects that push boundaries and create meaningful change. Let&apos;s build something extraordinary together!
          </p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full lg:col-span-4 text-accent"
          }
        >
          <Link
            href="https://linktr.ee/TheWeeklyBuild"
            target="_blank"
            className="block h-full"
          >
            <div className="font-semibold w-full text-left h-full flex flex-col">
              <p className="font-bold text-xl sm:text-2xl mb-3">
                The Weekly Build
              </p>
              <p className="font-light text-sm md:text-base">
                A 2-week series focused on consistency, discipline, and real execution. No passive learning — just building in public.
              </p>
              <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow mt-4">
                <li>
                  <b className="font-bold">14 Small Builds</b> - Daily momentum and learning
                </li>
                <li>
                  <b className="font-bold">4 Feature Builds</b> - Mid-week project features
                </li>
                <li>
                  <b className="font-bold">1 Major Build</b> - Complete end-to-end delivery
                </li>
              </ul>
              <p className="font-semibold text-xs mt-3 text-right">
                Nov 21 - Dec 6, 2025
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
                <b className="font-bold">Winner @ IIT Delhi Tryst&apos;25</b> - 1st Place in Technowar Competition
              </li>
              <li>
                <b className="font-bold">3× Hackathon Winner</b> - Champion across multiple prestigious events
              </li>
              <li>
                <b className="font-bold">5× Finalist</b> - Paranox 2.0, CipherHunt (Top 10), Vihaan, and more
              </li>
              <li>
                <b className="font-bold">12+ Hackathons</b> - National and international level participation
              </li>
              <li>
                <b className="font-bold">20+ Tech Events</b> - Active contributor and participant
              </li>
              <li>
                <b className="font-bold">Graphics Head</b> - The Campus Chronicles
              </li>
              <li>
                <b className="font-bold">Graphic Designer</b> - Echelon Mediaa
              </li>
              <li>
                <b className="font-bold">Published Author</b> - &quot;Finding Myself in the Lies&quot;
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
              Technical & Creative Skills
            </p>
            <ul className="font-light text-xs sm:text-sm list-disc list-inside text-white space-y-1.5 flex-grow">
              <li>
                <b className="font-bold">Frontend</b> - React.js, Next.js, React Native, Framer Motion, WebGL
              </li>
              <li>
                <b className="font-bold">Backend</b> - Node.js, Python, Express.js, RESTful APIs
              </li>
              <li>
                <b className="font-bold">Databases</b> - MongoDB, NeonDB (PostgreSQL), SQL
              </li>
              <li>
                <b className="font-bold">AI/ML</b> - TensorFlow, Keras, NumPy, Pandas, YOLO v4, LangChain
              </li>
              <li>
                <b className="font-bold">Design & Creative</b> - Figma, Canva, UI/UX, Graphic Design, Branding
              </li>
              <li>
                <b className="font-bold">Music Production</b> - Audio Engineering, Composition, Sound Design
              </li>
              <li>
                <b className="font-bold">Tools & Services</b> - Google Cloud, Razorpay, Clerk Auth, Git, Vercel
              </li>
            </ul>
            <p className="font-semibold text-xs mt-3 text-right">
              B.Tech CSE &apos;28
            </p>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full text-accent"}>
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

        {/* GitHub Stats Section */}
        <ItemLayout className="col-span-full text-accent mt-8">
          <div className="w-full text-center mb-6">
            <h2 className="font-bold text-2xl md:text-3xl">GitHub Statistics</h2>
            <p className="font-light text-sm md:text-base mt-2">Contribution activity and coding streaks</p>
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full sm:col-span-6 md:col-span-4"}>
          {!githubStats.topLangsLoaded && (
            <div className="w-full h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse mb-2">
                  <svg className="w-8 h-8 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 20l4-16m4 4l4 4-4 4M6 16l-4-4 4-4" />
                  </svg>
                </div>
                <p className="text-sm text-accent">Top Languages</p>
                <p className="text-xs text-foreground/60 mt-1">Stats loading...</p>
              </div>
            </div>
          )}
          <div className={`w-full ${!githubStats.topLangsLoaded ? 'hidden' : ''}`}>
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api/top-langs?username=NiteshAgarwal01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&layout=compact&langs_count=8&hide=html,css`}
              alt="NiteshAgarwal Top Languages"
              loading="lazy"
              onLoad={() => setGithubStats(prev => ({ ...prev, topLangsLoaded: true }))}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8"}>
          {!githubStats.statsLoaded && (
            <div className="w-full h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse mb-2">
                  <svg className="w-8 h-8 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z" />
                  </svg>
                </div>
                <p className="text-sm text-accent">GitHub Stats</p>
                <p className="text-xs text-foreground/60 mt-1">Fetching statistics...</p>
              </div>
            </div>
          )}
          <div className={`w-full ${!githubStats.statsLoaded ? 'hidden' : ''}`}>
            <img
              className="w-full h-auto"
              src={`https://github-readme-stats-git-masterrstaa-rickstaa.vercel.app/api?username=NiteshAgarwal01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&show_icons=true&include_all_commits=true&count_private=false&rank_icon=github&hide=contribs`}
              alt="NiteshAgarwal GitHub Stats"
              loading="lazy"
              onLoad={() => setGithubStats(prev => ({ ...prev, statsLoaded: true }))}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </ItemLayout>

        {/* GitHub Streak Stats */}
        <ItemLayout className={"col-span-full lg:col-span-6"}>
          {!githubStats.streakLoaded && (
            <div className="w-full h-48 flex items-center justify-center">
              <div className="text-center">
                <div className="animate-pulse mb-2">
                  <svg className="w-8 h-8 mx-auto text-accent" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17.657 18.657A8 8 0 016.343 7.343S7 9 9 10c0-2 .5-5 2.986-7C14 5 16.09 5.777 17.656 7.343A7.975 7.975 0 0120 13a7.975 7.975 0 01-2.343 5.657z" />
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9.879 16.121A3 3 0 1012.015 11L11 14H9c0 .768.293 1.536.879 2.121z" />
                  </svg>
                </div>
                <p className="text-sm text-accent">Contribution Streak</p>
                <p className="text-xs text-foreground/60 mt-1">Loading streak data...</p>
              </div>
            </div>
          )}
          <div className={`w-full ${!githubStats.streakLoaded ? 'hidden' : ''}`}>
            <img
              className="w-full h-auto"
              src={`https://streak-stats.demolab.com?user=NiteshAgarwal01&theme=dark&hide_border=true&background=EB545400&ring=FEFE5B&fire=FEFE5B&currStreakLabel=FFFFFF&sideLabels=FFFFFF&currStreakNum=FFFFFF&dates=FFFFFF&sideNums=FEFE5B`}
              alt="NiteshAgarwal GitHub Streak"
              loading="lazy"
              onLoad={() => setGithubStats(prev => ({ ...prev, streakLoaded: true }))}
              onError={(e) => {
                const target = e.target as HTMLImageElement;
                target.style.display = 'none';
              }}
            />
          </div>
        </ItemLayout>

        {/* GitHub Contribution Graph */}
        <ItemLayout className={"col-span-full lg:col-span-6 !p-0"}>
          <img
            className="w-full h-auto"
            src={`https://github-readme-activity-graph.vercel.app/graph?username=NiteshAgarwal01&theme=github-dark&hide_border=true&bg_color=00000000&color=FFFFFF&line=FEFE5B&point=FEFE5B&area=true&area_color=FEFE5B`}
            alt="NiteshAgarwal Contribution Graph"
            loading="lazy"
            onError={(e) => {
              const target = e.target as HTMLImageElement;
              target.style.display = 'none';
            }}
          />
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