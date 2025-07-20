import { ReactLenis } from "lenis/react";
import { useTransform, motion, useScroll } from "framer-motion";
import { useRef, useEffect } from "react";
import PropTypes from "prop-types";

const projects = [
  {
    title: "IntervueAI",
    description:
      "IntervueAI is a mock interview platform where AI assistants talk with you in real-time no forms, no clicks, just natural conversations tailored to your role, resume, and experience. 💻✨",
    src: "rock.jpg",
    link: "https://private-user-images.githubusercontent.com/183839768/435371696-d26c8001-18ba-4777-bcd9-f80c479f3557.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMwMjY2ODcsIm5iZiI6MTc1MzAyNjM4NywicGF0aCI6Ii8xODM4Mzk3NjgvNDM1MzcxNjk2LWQyNmM4MDAxLTE4YmEtNDc3Ny1iY2Q5LWY4MGM0NzlmMzU1Ny5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMFQxNTQ2MjdaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1hOGEwMTllNjI5OTE1YjVkZDViNGY3ZTQzNmYzOTM5ZWMzMGRmODM4OWYzOTMyYmZlNjA3ODk1OGE1YjVhM2EzJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.Z7Nh4pcTHSvzIbN8bybC4YPb6cOJW7wU4Tv4Bs1c0Es",
    color: "#5196fd",
    githubLink: "https://github.com/MeAkash77/IntervueAI",
    liveLink: "https://intervue-ai-two.vercel.app/",
  },
  {
    title: "🚀 Sign-Language-Recognition",
    description:
      "🚀 A Sign Language Learning Platform where who know sign language can come and practice Sign Language and also people who don't know can learn through this. 💻✨",
    src: "tree.jpg",
    link: "https://github.com/MeAkash77/Sign-Language-Recognition/raw/main/public/banner.png",
    color: "#8f89ff",
    githubLink: "https://github.com/MeAkash77/Sign-Language-Recognition",
    liveLink: "https://sign-language-recognition-dusky.vercel.app/",
  },
  {
    title: "🚀 CodeSync",
    description:
      "🚀 CodeSync is a real-time collaborative coding environment powered by AI that allows developers to write, share, and edit code together. It features a shared file system, a collaborative code editor, a whiteboard for brainstorming, and a chat for communication.! 💻✨",
    src: "water.jpg",
    link: "https://private-user-images.githubusercontent.com/158308964/464636951-3ce76d6b-77c2-4636-aecc-e3c8a2460616.png?jwt=eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJnaXRodWIuY29tIiwiYXVkIjoicmF3LmdpdGh1YnVzZXJjb250ZW50LmNvbSIsImtleSI6ImtleTUiLCJleHAiOjE3NTMwMjkwOTQsIm5iZiI6MTc1MzAyODc5NCwicGF0aCI6Ii8xNTgzMDg5NjQvNDY0NjM2OTUxLTNjZTc2ZDZiLTc3YzItNDYzNi1hZWNjLWUzYzhhMjQ2MDYxNi5wbmc_WC1BbXotQWxnb3JpdGhtPUFXUzQtSE1BQy1TSEEyNTYmWC1BbXotQ3JlZGVudGlhbD1BS0lBVkNPRFlMU0E1M1BRSzRaQSUyRjIwMjUwNzIwJTJGdXMtZWFzdC0xJTJGczMlMkZhd3M0X3JlcXVlc3QmWC1BbXotRGF0ZT0yMDI1MDcyMFQxNjI2MzRaJlgtQW16LUV4cGlyZXM9MzAwJlgtQW16LVNpZ25hdHVyZT1iZjQ1ZTRhMGQzMGYxYzQ0N2QwYzQ5NmViZGQ5MGIyNTcxNjU3ZWMzZjdiY2ZkNDY2M2QxMzg3ZmVkYmE5NTIxJlgtQW16LVNpZ25lZEhlYWRlcnM9aG9zdCJ9.3jWupx_gApe_pUcjd_xuiBJTqFja2ifysxw8ekVwmw4",
    color: "#fff",
    githubLink: "https://github.com/MeAkash77/CodeSync",
    liveLink: "https://code-sync-akash77.vercel.app/",
  },
  {
    title: "Full stack StudySync Buddy App website 🔥",
    description:
      "🎓 StudySync is a productivity app with tools like AI-powered study tips, music recommendations, a Pomodoro timer, and more to help enhance your study routine and stay organized. Welcome to a suite of tools designed to boost your study & productivity.! 💻✨",
    src: "house.jpg",
    link: "https://github.com/MeAkash77/Study-Sync-Study-Buddy-App/raw/main/img/tools_ui.png",
    color: "#ed649e",
    githubLink: "https://github.com/MeAkash77/Study-Sync-Study-Buddy-App",
    liveLink: "https://akash77-study-sync-study-buddy-app.vercel.app/landing",
  },
  {
    title: "Bussiness-Management-System 🔥",
    description:
      "🎓 A comprehensive and fully responsive Business Management System built with Next.js 13 (App Router) and TypeScript, designed to help businesses efficiently manage their operations. This full-stack web application allows users to create, update, and delete records for creditors, debtors, products.! 💻✨",
    src: "house.jpg",
    link: "https://github.com/MeAkash77/Bussiness-Management-System/raw/main/demo.png",
    color: "#ed649e",
    githubLink: "https://github.com/MeAkash77/Bussiness-Management-System",
    liveLink: "https://bussiness-management-system-seven.vercel.app/",
  },
];

export default function Projects() {
  const container = useRef(null);
  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  useEffect(() => {
    // Add specific styles for 1366x768 resolution
    const style = document.createElement("style");
    style.textContent = `
      @media screen and (width: 1366px) and (height: 768px),
             screen and (width: 1367px) and (height: 768px),
             screen and (width: 1368px) and (height: 769px) {
        .project-card {
          scale: 0.85;
          margin-top: -5vh;
        }
        .project-container {
          height: 90vh;
        }
      }
    `;
    document.head.appendChild(style);

    // Resolution check function
    const checkResolution = () => {
      const isTargetResolution =
        window.innerWidth >= 1360 &&
        window.innerWidth <= 1370 &&
        window.innerHeight >= 760 &&
        window.innerHeight <= 775;

      if (isTargetResolution) {
        document.documentElement.style.setProperty("--project-scale", "0.85");
        document.documentElement.style.setProperty("--project-margin", "-5vh");
      } else {
        document.documentElement.style.setProperty("--project-scale", "1");
        document.documentElement.style.setProperty("--project-margin", "0");
      }
    };

    checkResolution();
    window.addEventListener("resize", checkResolution);

    return () => {
      document.head.removeChild(style);
      window.removeEventListener("resize", checkResolution);
    };
  }, []);

  return (
    <ReactLenis root>
      <main className="bg-black" ref={container}>
        <section className="text-white w-full bg-slate-950">
          {projects.map((project, i) => {
            const targetScale = 1 - (projects.length - i) * 0.05;
            return (
              <Card
                key={`p_${i}`}
                i={i}
                url={project.link}
                title={project.title}
                color={project.color}
                description={project.description}
                progress={scrollYProgress}
                range={[i * 0.25, 1]}
                targetScale={targetScale}
                githubLink={project.githubLink}
                liveLink={project.liveLink}
              />
            );
          })}
        </section>
      </main>
    </ReactLenis>
  );
}

function Card({
  i,
  title,
  description,
  url,
  color,
  progress,
  range,
  targetScale,
  githubLink,
  liveLink,
}) {
  const container = useRef(null);
  const scale = useTransform(progress, range, [1, targetScale]);

  return (
    <div
      ref={container}
      className="h-screen flex items-center justify-center sticky top-0 project-container"
    >
      <motion.div
        style={{
          scale,
          top: `calc(-5vh + ${i * 25}px)`,
          transform: `scale(var(--project-scale, 1))`,
          marginTop: "var(--project-margin, 0)",
        }}
        className="relative -top-[25%] h-auto w-[90%] md:w-[85%] lg:w-[75%] xl:w-[65%] origin-top project-card"
        whileHover={{
          y: -8,
          transition: { duration: 0.3 },
        }}
      >
        {/* Modern split card design */}
        <div className="w-full flex flex-col md:flex-row bg-zinc-900 rounded-2xl overflow-hidden shadow-xl">
          {/* Image section - full width on mobile, 55% on desktop */}
          <div className="w-full md:w-[55%] h-[250px] md:h-[400px] lg:h-[450px] relative overflow-hidden">
            <motion.img
              src={url}
              alt={title}
              className="w-full h-full object-cover"
              initial={{ scale: 1 }}
              whileHover={{ scale: 1.05 }}
              transition={{ duration: 0.4 }}
            />

            {/* Colored overlay on hover */}
            <motion.div
              className="absolute inset-0"
              style={{ backgroundColor: color, mixBlendMode: "overlay" }}
              initial={{ opacity: 0 }}
              whileHover={{ opacity: 0.3 }}
              transition={{ duration: 0.3 }}
            />

            {/* Project number */}
            <div className="absolute top-4 left-4 md:top-6 md:left-6 bg-black/50 backdrop-blur-md text-white px-3 py-1 md:px-4 md:py-2 rounded-full text-xs md:text-sm font-medium">
              Project {i + 1}
            </div>
          </div>

          {/* Content section - full width on mobile, 45% on desktop */}
          <div className="w-full md:w-[45%] p-6 md:p-8 lg:p-10 flex flex-col justify-between">
            <div>
              <div className="flex items-center gap-3 mb-4 md:mb-6">
                <div
                  className="w-2 h-2 md:w-3 md:h-3 rounded-full"
                  style={{ backgroundColor: color }}
                />
                <div className="h-[1px] w-12 md:w-20 bg-gray-600" />
              </div>

              <h2 className="text-xl md:text-2xl lg:text-3xl font-bold text-white mb-2 md:mb-4">
                {title}
              </h2>
              <p className="text-sm md:text-base text-gray-400 leading-relaxed line-clamp-3 md:line-clamp-none max-w-md">
                {description}
              </p>
            </div>

            <div className="mt-4 md:mt-auto pt-4">
              <div className="w-full h-[1px] bg-gray-800 mb-4 md:mb-6" />

              <div className="flex items-center gap-4">
                {/* GitHub Link */}
                <motion.a
                  href={githubLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <path d="M9 19c-5 1.5-5-2.5-7-3m14 6v-3.87a3.37 3.37 0 0 0-.94-2.61c3.14-.35 6.44-1.54 6.44-7A5.44 5.44 0 0 0 20 4.77 5.07 5.07 0 0 0 19.91 1S18.73.65 16 2.48a13.38 13.38 0 0 0-7 0C6.27.65 5.09 1 5.09 1A5.07 5.07 0 0 0 5 4.77a5.44 5.44 0 0 0-1.5 3.78c0 5.42 3.3 6.61 6.44 7A3.37 3.37 0 0 0 9 18.13V22"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Code
                  </span>
                </motion.a>

                {/* Live Link */}
                <motion.a
                  href={liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group flex items-center gap-2"
                  whileHover={{ y: -3 }}
                  transition={{ type: "spring", stiffness: 400 }}
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke={color}
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  >
                    <circle cx="12" cy="12" r="10"></circle>
                    <line x1="2" y1="12" x2="22" y2="12"></line>
                    <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                  </svg>
                  <span
                    className="text-xs md:text-sm font-medium"
                    style={{ color }}
                  >
                    Live
                  </span>
                </motion.a>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </div>
  );
}

// Add PropTypes validation
Card.propTypes = {
  i: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  color: PropTypes.string.isRequired,
  progress: PropTypes.object.isRequired,
  range: PropTypes.array.isRequired,
  targetScale: PropTypes.number.isRequired,
  githubLink: PropTypes.string.isRequired,
  liveLink: PropTypes.string.isRequired,
};
