import { skillsByCategory } from "../../data/portfolio";
import { VscVscode } from "react-icons/vsc";

import {
  FaReact,
  FaHtml5,
  FaCss3Alt,
  FaJsSquare,
  FaNodeJs,
  FaGitAlt,
  FaFigma,
  
} from "react-icons/fa";

import {
  SiTailwindcss,
  SiExpress,
  SiMongodb,
  SiFramer,
  SiMysql,
  SiSqlite,
  SiSupabase,
  SiC,
  SiCplusplus,
  SiPhp,
} from "react-icons/si";

const skillIcons = {
  react: <FaReact className="text-cyan-400 text-3xl" />,
  js: <FaJsSquare className="text-yellow-400 text-3xl" />,
  html: <FaHtml5 className="text-orange-500 text-3xl" />,
  css: <FaCss3Alt className="text-blue-500 text-3xl" />,
  tailwind: <SiTailwindcss className="text-cyan-400 text-3xl" />,
  node: <FaNodeJs className="text-green-500 text-3xl" />,
  express: <SiExpress className="text-gray-200 text-3xl" />,
  mongo: <SiMongodb className="text-green-500 text-3xl" />,
  git: <FaGitAlt className="text-orange-500 text-3xl" />,
  figma: <FaFigma className="text-pink-500 text-3xl" />,
  vscode: <VscVscode className="text-blue-500 text-3xl" />,
  motion: <SiFramer className="text-purple-500 text-3xl" />,
  mysql: <SiMysql className="text-orange-400 text-3xl" />,
  sqlite: <SiSqlite className="text-blue-400 text-3xl" />,
  supabase: <SiSupabase className="text-green-400 text-3xl" />,
  c: <SiC className="text-blue-500 text-3xl" />,
  cpp: <SiCplusplus className="text-blue-500 text-3xl" />,
  php: <SiPhp className="text-indigo-400 text-3xl" />,
 
};

export default function SkillOrbit({ category = "Frontend" }) {
  const skills = skillsByCategory[category] || [];

  const size = 320;
  const cx = size / 2;
  const cy = size / 2;
  const radius = 108;

  const getPoint = (angle) => {
    const rad = (angle * Math.PI) / 180;
    return {
      x: cx + Math.cos(rad) * radius,
      y: cy + Math.sin(rad) * radius,
    };
  };

  const getPositionStyle = (angle) => {
    const { x, y } = getPoint(angle);
    return {
      left: `${(x / size) * 100}%`,
      top: `${(y / size) * 100}%`,
    };
  };

  return (
    <div className="relative mx-auto w-full max-w-[320px] aspect-square">
      <div className="absolute inset-0 rounded-full border border-primary/10 bg-primary/5 animate-pulse-glow" />
      <div className="absolute inset-[2rem] rounded-full border border-dashed border-secondary/25" />
      <div className="absolute inset-[3.5rem] rounded-full border border-violet/15" />

      <div className="absolute left-1/2 top-1/2 h-12 w-12 -translate-x-1/2 -translate-y-1/2 rounded-full bg-gradient-to-br from-primary to-secondary shadow-[0_0_40px_rgba(45,212,191,0.5)] sm:h-14 sm:w-14" />

      <svg className="absolute inset-0 h-full w-full pointer-events-none" viewBox={`0 0 ${size} ${size}`}>
        <defs>
          <linearGradient id="orbitGrad" x1="0%" y1="0%" x2="100%" y2="100%">
            <stop offset="0%" stopColor="#2dd4bf" />
            <stop offset="100%" stopColor="#6366f1" />
          </linearGradient>
        </defs>

        {skills.map((_, i) => {
          const angle = (i / skills.length) * 360 - 90;
          const { x, y } = getPoint(angle);
          return (
            <line
              key={i}
              x1={cx}
              y1={cy}
              x2={x}
              y2={y}
              stroke="url(#orbitGrad)"
              strokeWidth="1"
              opacity="0.35"
            />
          );
        })}
      </svg>

      {skills.map((skill, i) => {
        const angle = (i / skills.length) * 360 - 90;
        const position = getPositionStyle(angle);
        return (
          <div
            key={skill.name}
            title={skill.name}
            className="absolute flex h-14 w-14 items-center justify-center rounded-2xl border border-white/10 bg-bg-card/80 backdrop-blur-sm shadow-[0_0_20px_rgba(45,212,191,0.15)] hover:scale-110 transition-all duration-300"
            style={{
              left: position.left,
              top: position.top,
              transform: "translate(-50%, -50%)",
            }}
          >
            {skillIcons[skill.icon]}
          </div>
        );
      })}
    </div>
  );
}
