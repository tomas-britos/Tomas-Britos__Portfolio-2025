import React from "react";
import { ExternalLink, Briefcase } from "lucide-react";

const ProjectLabel = ({ name, role, link, onClick, style }) => {
  const commonClasses =
    "block bg-white/5 border border-white/10 rounded-lg p-4 hover:bg-gradient-to-r hover:from-primary/10 hover:to-secondary/10 transition-all duration-300 shadow-md";

  if (onClick) {
    return (
      <button
        type="button"
        onClick={onClick}
        style={style}
        className={commonClasses + " w-full text-left focus:outline-none"}
      >
        <div className="flex justify-between items-center">
          <div>
            <div className="font-semibold text-gradient-primary text-md">
              {name}
            </div>
          </div>
        </div>
      </button>
    );
  }

  return (
    <a
      href={link}
      target="_blank"
      rel="noopener noreferrer"
      className={commonClasses}
      style={style}
    >
      <div className="flex justify-between items-center">
        <div>
          <div className="font-semibold text-gradient-primary text-md">
            {name}
          </div>
        </div>
      </div>
    </a>
  );
};

export default ProjectLabel;
