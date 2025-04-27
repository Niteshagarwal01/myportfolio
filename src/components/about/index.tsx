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
            B.Tech CSE &apos;28 | 1st Place @ IIT Delhi Tryst&apos;25 (Techno War) | Vihaan8.0 Finals Attendee | SDI&apos;25 & SIH Attendee | UI/UX & Graphic Designer | Python & Software Developer | Writer | INMO
          </h2>
          <p className="font-light text-sm sm:text-md md:text-base mt-2">
            As a first-year Computer Science Engineering student, I specialize in UI/UX and graphic design while exploring storytelling through writing. My passion lies at the intersection of technology and creative expression, enabling me to develop solutions that are both functional and aesthetically pleasing.
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            On the tech front, I have expertise in Python development and have worked on AI models inspired by JARVIS and FRIDAY. I&apos;ve built a fully functional smart assistant that can perform tasks like opening applications, web browsing, answering questions, setting reminders, and more through voice commands. This project demonstrates my ability to work with speech recognition, NLP, and automation APIs.
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            I have designed and developed websites like FRIDAY, <i>Finding Myself in the Lies</i> (My own book), and Delta_Front, combining intuitive design with seamless functionality. My web projects showcase clean UI/UX principles, animations, and responsive layouts with minimalistic design inspired by sci-fi aesthetics.
          </p>
          <p className="font-light text-sm sm:text-md md:text-base mt-4">
            Beyond coding, I&apos;m also a published author with my book &quot;Finding Myself in the Lies&quot; exploring themes of self-awareness, emotional journeys, and inner conflict through compelling storytelling.
          </p>
          <p className="font-medium text-sm sm:text-md md:text-base mt-4">
            Passionate about innovation, I thrive on crafting engaging digital experiences, developing intelligent solutions, and telling impactful stories. Let&apos;s connect and collaborate to bring ideas to life!
          </p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-4xl">
            UI/UX & Python Developer
          </p>
          <p className="font-light text-sm mt-2">Creative Technologist & Author</p>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full xs:col-span-6 lg:col-span-4 text-accent"}
        >
          <p className="font-semibold w-full text-left text-2xl sm:text-5xl">
            1st
            <sub className="font-semibold text-base">Place @ IIT Delhi Tryst&apos;25</sub>
          </p>
          <p className="font-light text-sm mt-2">Winner of Techno War Competition</p>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://finding-myself-in-the-lies.netlify.app/"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">Published Author</p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Published book &quot;Finding Myself in the Lies&quot; exploring self-awareness and emotional journeys
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
              <p className="float-end font-semibold text-xs">
                Released March 2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <div className="font-semibold w-full text-left text-3xl space-y-4">
            <p className="font-semibold">
              Academic Achievements
            </p>
            <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
              <li>
                <b className="font-extrabold">1st Place @ IIT Delhi Tryst&apos;25</b> - Winner of the prestigious Techno War competition showcasing technical expertise and problem-solving skills
              </li>
              <li>
                <b className="font-extrabold">Vihaan 8.0 Finals</b> - Reached the finals of VIT&apos;s flagship hackathon among thousands of participants
              </li>
              <li>
                <b className="font-extrabold">SDI&apos;25 & SIH Attendee</b> - Participated in national-level hackathons, contributing innovative solutions to real-world problems
              </li>
              <li>
                <b className="font-extrabold">INMO</b> - Recognized for excellence in the Indian National Mathematical Olympiad
              </li>
            </ul>
            <p className="float-end font-semibold text-xs">
              2024 - 2025
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <div className="font-semibold w-full text-left text-3xl space-y-4">
            <p className="font-semibold">
              Technical Skills
            </p>
            <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
              <li>
                <b className="font-extrabold">UI/UX & Graphic Design</b> - Creating intuitive, engaging interfaces with strong visual identity and user-centered approach
              </li>
              <li>
                <b className="font-extrabold">Python Development</b> - Building AI models, automation tools, computer vision applications (AirPiano), and intelligent systems
              </li>
              <li>
                <b className="font-extrabold">Web Development</b> - Crafting responsive, modern websites with HTML, CSS, JavaScript, React and Next.js
              </li>
              <li>
                <b className="font-extrabold">Problem Solving</b> - Algorithmic thinking, creative solutions, and analytical approach to technical challenges
              </li>
            </ul>
            <p className="float-end font-semibold text-xs">
              B.Tech CSE &apos;28
            </p>
          </div>
        </ItemLayout>

        <ItemLayout
          className={"col-span-full text-accent"}
        >
          <div className="w-full text-center mb-6">
            <h2 className="font-bold text-2xl md:text-3xl">Featured Projects</h2>
            <p className="font-light text-sm md:text-base mt-2">A selection of my notable works that showcase my technical and creative abilities</p>
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
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                Jarvis Assistant
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Voice-controlled AI assistant inspired by Iron Man&apos;s JARVIS
                </li>
                <li>
                  Performs tasks like opening applications, web searching, answering questions, and setting reminders
                </li>
                <li>
                  Built with <b className="font-extrabold">Python</b>, <b className="font-extrabold">Speech Recognition</b>, and <b className="font-extrabold">NLP</b>
                </li>
                <li>
                  Implements automation APIs for system control and task management
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                 2024
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://finding-myself-in-the-lies.netlify.app/"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                Finding Myself in the Lies
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Published book with accompanying interactive website
                </li>
                <li>
                  Explores themes of self-awareness, emotional journeys, and personal growth
                </li>
                <li>
                  Website built with <b className="font-extrabold">HTML</b>, <b className="font-extrabold">CSS</b>, and <b className="font-extrabold">JavaScript</b>
                </li>
                <li>
                  Showcases responsive design and engaging user experience
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                March 2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://github.com/Niteshagarwal01/AIRPIANO"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                AirPiano
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Virtual musical instrument controlled by hand gestures
                </li>
                <li>
                  Utilizes <b className="font-extrabold">OpenCV</b> and <b className="font-extrabold">MediaPipe</b> for real-time hand tracking
                </li>
                <li>
                  Maps finger positions to musical notes for intuitive playing
                </li>
                <li>
                  Demonstrates expertise in computer vision and interactive design
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://delta-front-clothing-store.netlify.app/"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                Delta_Front
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Futuristic web interface with sci-fi-inspired aesthetics
                </li>
                <li>
                  Features clean UI/UX principles, animations, and responsive layouts
                </li>
                <li>
                  Built with <b className="font-extrabold">HTML</b>, <b className="font-extrabold">CSS</b>, and <b className="font-extrabold">JavaScript</b>
                </li>
                <li>
                  Demonstrates frontend design skills and attention to visual detail
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://pyschecare.netlify.app/"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                PsycheCare
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  AI-powered mental health platform with comprehensive features
                </li>
                <li>
                  Includes emotional support chatbot, treatment plans, and wellness tracking
                </li>
                <li>
                  Developed with <b className="font-extrabold">AI</b>, <b className="font-extrabold">HTML/CSS/JS</b>, and <b className="font-extrabold">Python</b>
                </li>
                <li>
                  Focused on accessible, stigma-free mental healthcare
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                2025
              </p>
            </div>
          </Link>
        </ItemLayout>

        <ItemLayout
          className={
            "col-span-full xs:col-span-6 lg:col-span-4 text-accent cursor-pointer"
          }
        >
          <Link
            href="https://constitution-made-easy.netlify.app/"
            target="_blank"
          >
            <div className="font-semibold w-full text-left text-3xl space-y-4">
              <p className="font-semibold">
                Constitution Made Easy
              </p>
              <ul className="font-light text-sm sm:text-md md:text-base list-disc list-inside text-white">
                <li>
                  Educational platform simplifying the Indian Constitution
                </li>
                <li>
                  Features AI-driven summaries, interactive infographics, and quizzes
                </li>
                <li>
                  Built with <b className="font-extrabold">React</b>, <b className="font-extrabold">Next.js</b>, and <b className="font-extrabold">Tailwind CSS</b>
                </li>
                <li>
                  Makes complex legal concepts accessible for students and learners
                </li>
              </ul>
              <p className="float-end font-semibold text-xs">
                2024
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

        <ItemLayout
          className={"col-span-full sm:col-span-6 md:col-span-4 !p-0"}
        >
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api/top-langs?username=Niteshagarwal01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="NiteshAgarwal"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-8 !p-0"}>
          <img
            className="w-full h-auto"
            src="https://github-readme-stats.vercel.app/api?username=Niteshagarwal01&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false"
            alt="NiteshAgarwal"
            loading="lazy"
          />
        </ItemLayout>

        <ItemLayout className={"col-span-full md:col-span-6 !p-0"}>
          <Link
            href="https://pyschecare.netlify.app/"
            target="_blank"
            className="w-full"
          >
            <img
              className="w-full h-auto"
              src="https://github-readme-stats.vercel.app/api/pin/?username=Niteshagarwal01&repo=PsycheCare&theme=transparent&hide_border=true&title_color=FEFE5B&text_color=FFFFFF&icon_color=FEFE5B&text_bold=false&description_lines_count=2"
              alt="PsycheCare Project"
              loading="lazy"
            />
          </Link>
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
