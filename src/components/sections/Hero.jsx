import { useNavigate } from "react-router-dom";
import { motion } from "framer-motion";
import { ArrowRight, Download, ArrowUpRight } from "lucide-react";
import {
  personalInfo,
  socialLinks,
  featuredProject,
} from "../../data/portfolio";
import Button from "../ui/Button";
import SocialIcons from "../ui/SocialIcons";
import GlassCard from "../ui/GlassCard";

const stagger = {
  animate: { transition: { staggerChildren: 0.1 } },
};

const fadeUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero() {
  const navigate = useNavigate();

  return (
    <div className="relative min-h-[calc(100vh-80px)] overflow-hidden">
      <div className="mx-auto w-full max-w-7xl px-3 py-6 sm:px-6 sm:py-8 lg:px-10 lg:py-12">
        <div className="flex flex-col items-center justify-between gap-8 sm:gap-10 lg:flex-row lg:items-center">
          <motion.div
            variants={stagger}
            initial="initial"
            animate="animate"
            className="w-full max-w-2xl text-center lg:w-1/2 lg:max-w-none lg:text-left"
          >
            <motion.p
              variants={fadeUp}
              className="mb-3 text-lg font-medium text-muted"
            >
              Hi, I&apos;m
            </motion.p>

            <motion.h1
              variants={fadeUp}
              className="font-poppins text-3xl font-bold leading-tight sm:text-4xl md:text-5xl lg:text-[3.5rem] xl:text-6xl"
            >
              {personalInfo.firstName}{" "}
              <span className="text-gradient">{personalInfo.lastName}</span>
            </motion.h1>

            <motion.p
              variants={fadeUp}
              className="mt-3 text-xl font-semibold sm:text-2xl"
            >
              <span className="text-gradient-cyan">{personalInfo.title}</span>
            </motion.p>

            <motion.p
              variants={fadeUp}
              className="mx-auto mt-5 max-w-xl text-sm leading-relaxed text-muted sm:text-base lg:mx-0"
            >
              {personalInfo.tagline}
            </motion.p>

            <motion.div
              variants={fadeUp}
              className="mt-7 flex flex-wrap items-center justify-center gap-3 sm:gap-4 lg:justify-start"
            >
              <Button
                iconRight={ArrowRight}
                onClick={() => navigate("/projects")}
              >
                View My Work
              </Button>
              <Button
                variant="outline"
                icon={Download}
                href={personalInfo.cvUrl}
              >
                Download CV
              </Button>
            </motion.div>

            <motion.div
              variants={fadeUp}
              className="mt-8 flex justify-center lg:justify-start"
            >
              <SocialIcons links={socialLinks} />
            </motion.div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 60 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            className="w-full max-w-2xl flex-1 lg:max-w-xl"
          >
            <div className="w-full overflow-hidden rounded-3xl border border-cyan-500/20 bg-slate-900/70 shadow-2xl backdrop-blur-xl">
              {/* Window Header */}
              <div className="flex items-center gap-2 border-b border-white/10 px-3 py-3 sm:px-5 sm:py-4">
                <span className="h-3 w-3 rounded-full bg-red-500"></span>
                <span className="h-3 w-3 rounded-full bg-yellow-500"></span>
                <span className="h-3 w-3 rounded-full bg-green-500"></span>

                <span className="ml-4 text-xs text-gray-400">portfolio.js</span>
              </div>

              {/* Code */}
              <pre className="overflow-x-auto whitespace-pre-wrap break-words p-3 text-[10px] leading-6 font-mono text-[#D4D4D4] sm:p-4 sm:text-[12px] sm:leading-7 md:text-[13px] lg:p-6 lg:text-[15px] lg:leading-8">
                {" "}
                <code>
                  <code>
                    <span className="text-[#C586C0]">const</span>{" "}
                    <span className="text-[#9CDCFE]">developer</span>{" "}
                    <span className="text-white">=</span>{" "}
                    <span className="text-white">{"{"}</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#9CDCFE]">name</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#CE9178]">"Samir Machrekar"</span>
                    <span className="text-white">,</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#9CDCFE]">role</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#CE9178]">"Frontend Developer"</span>
                    <span className="text-white">,</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#9CDCFE]">location</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#CE9178]">"Sangamner"</span>
                    <span className="text-white">,</span>
                    <br />
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#9CDCFE]">skills</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-white">[</span>
                    <br />
                    &nbsp;&nbsp;&nbsp;&nbsp;
                    <span className="text-[#CE9178]">"React"</span>
                    <span className="text-white">, </span>
                    <span className="text-[#CE9178]">"JavaScript"</span>
                    <span className="text-white">, </span>
                    <span className="text-[#CE9178]">"Tailwind CSS"</span>
                    <span className="text-white">, </span>
                    <span className="text-[#CE9178]">"Node.js"</span>
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-white">],</span>
                    <br />
                    <br />
                    &nbsp;&nbsp;
                    <span className="text-[#9CDCFE]">available</span>
                    <span className="text-white">:</span>{" "}
                    <span className="text-[#569CD6]">true</span>
                    <br />
                    <span className="text-white">{"}"}</span>
                  </code>
                </code>
              </pre>
            </div>
          </motion.div>
        </div>
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6, duration: 0.7 }}
          className="mt-8 pb-8 sm:mt-10 lg:mt-14"
        >
          <GlassCard className="overflow-hidden rounded-[1.5rem] p-0" hover={false}>
            <div className="flex flex-col md:flex-row">
              <div className="flex flex-1 flex-col justify-center p-5 text-center sm:p-6 md:p-8 md:text-left">
                <span className="mb-2 text-xs font-medium tracking-widest text-primary uppercase">
                  Featured Project
                </span>
                <h3 className="font-poppins mb-2 text-2xl font-bold text-white">
                  {featuredProject.title}
                </h3>
                <p className="mb-4 text-sm leading-relaxed text-muted">
                  {featuredProject.description}
                </p>
                <div className="mb-4 flex flex-wrap gap-2">
                  {featuredProject.tags.map((tag) => (
                    <span
                      key={tag}
                      className="rounded-full border border-primary/20 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {tag}
                    </span>
                  ))}
                </div>
                <a
                  href={featuredProject.url}
                  className="inline-flex items-center gap-1.5 text-sm font-medium text-primary hover:text-secondary transition-colors"
                >
                  View Project
                  <ArrowUpRight size={16} />
                </a>
              </div>
              <div className="relative h-48 overflow-hidden sm:h-56 md:h-auto md:w-[42%]">
                <img
                  src={featuredProject.image}
                  alt={featuredProject.title}
                  className="h-full w-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-r from-bg-card/80 via-transparent to-transparent md:bg-gradient-to-l" />
              </div>
            </div>
          </GlassCard>
        </motion.div>
      </div>
    </div>
  );
}
