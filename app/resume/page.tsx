"use client";

import Link from "next/link";
import { FaLocationArrow } from "react-icons/fa6";

import { navItems, projects, socialMedia, workExperience } from "@/data";
import { FloatingNav } from "@/components/ui/FloatingNavbar";
import MagicButton from "@/components/MagicButton";

const ResumePage = () => {
  return (
    <main className="relative bg-black-100 min-h-screen flex justify-center mx-auto sm:px-10 px-5 print:bg-white print:text-black">
      <div className="max-w-3xl w-full pb-20">
        <div className="print:hidden">
          <FloatingNav navItems={navItems} />
        </div>
        <section className="pt-40 print:pt-8">
          <p className="uppercase tracking-widest text-xs text-purple print:text-black">
            Resume
          </p>
          <h1 className="text-4xl md:text-5xl font-bold mt-3">Clinton Otieno</h1>
          <p className="text-white-200 mt-4 print:text-neutral-700">
            Full-stack engineer. I turn complex ideas into reliable, elegant
            digital products — with a focus on product UI, web apps, and
            practical AI features.
          </p>
          <div className="flex flex-wrap gap-4 mt-6 text-sm text-purple print:text-black">
            <a href="mailto:kayseeclintone@gmail.com">
              kayseeclintone@gmail.com
            </a>
            {socialMedia.map((item) => (
              <a
                key={item.id}
                href={item.link}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline"
              >
                {item.link.replace(/^https?:\/\//, "")}
              </a>
            ))}
          </div>

          <div className="print:hidden mt-2">
            <MagicButton
              title="Print / save as PDF"
              icon={<FaLocationArrow />}
              position="right"
              handleClick={() => window.print()}
            />
          </div>

          <h2 className="text-2xl font-bold mt-16 text-purple print:text-black">
            Experience
          </h2>
          <div className="mt-6 space-y-6">
            {workExperience.map((job) => (
              <div key={job.id}>
                <h3 className="font-semibold text-lg">{job.title}</h3>
                <p className="text-white-200 mt-1 print:text-neutral-700">
                  {job.desc}
                </p>
              </div>
            ))}
          </div>

          <h2 className="text-2xl font-bold mt-16 text-purple print:text-black">
            Selected work
          </h2>
          <div className="mt-6 space-y-6">
            {projects.map((project) => (
              <div key={project.id}>
                <h3 className="font-semibold text-lg">{project.title}</h3>
                <p className="text-white-200 mt-1 print:text-neutral-700">
                  {project.des}
                </p>
                <div className="flex gap-4 mt-2 text-sm text-purple print:text-black">
                  {project.live ? (
                    <a href={project.live} target="_blank" rel="noreferrer">
                      Live
                    </a>
                  ) : null}
                  <a href={project.github} target="_blank" rel="noreferrer">
                    GitHub
                  </a>
                </div>
              </div>
            ))}
          </div>

          <p className="text-white-200 text-sm mt-16 print:hidden">
            Use Print / save as PDF for a downloadable copy. If you add{" "}
            <code className="text-purple">public/resume.pdf</code>, that file
            can be linked here instead.
          </p>
          <Link
            href="/"
            className="inline-block mt-6 text-purple hover:underline print:hidden"
          >
            ← Back home
          </Link>
        </section>
      </div>
    </main>
  );
};

export default ResumePage;
