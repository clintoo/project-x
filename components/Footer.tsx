import { FaLocationArrow } from "react-icons/fa6";
import Link from "next/link";

import { socialMedia } from "@/data";
import MagicButton from "./MagicButton";
import Image from "next/image";
import ContactForm from "./ContactForm";

const Footer = () => {
  return (
    <footer className="w-full pt-20 pb-10" id="contact">
      <div className="w-full absolute left-0 -bottom-72 min-h-96">
        <Image
          src="/footer-grid.svg"
          alt="grid"
          width={1920}
          height={1080}
          className="w-full h-full opacity-50 "
        />
      </div>

      <div className="flex flex-col items-center relative z-10">
        <h1 className="heading lg:max-w-[45vw]">
          Ready to take <span className="text-purple">your digital </span>
          game to the next level?
        </h1>
        <p className="text-white-200 md:mt-10 my-5 text-center">
          Tell me what you&apos;re building. I&apos;ll reply with whether I can
          help, and how we&apos;d start.
        </p>
        <ContactForm />
        <div className="flex flex-col sm:flex-row items-center gap-2 mt-4">
          <a href="mailto:kayseeclintone@gmail.com">
            <MagicButton
              title="Or email me"
              icon={<FaLocationArrow />}
              position="right"
            />
          </a>
          <Link href="/resume">
            <MagicButton
              title="View resume"
              icon={<FaLocationArrow />}
              position="right"
            />
          </Link>
        </div>
      </div>
      <div className="flex mt-16 md:flex-row flex-col justify-between items-center relative z-10">
        <p className="md:text-base text-sm md:font-normal font-light">
          Copyright © 2026 kc-clintone
        </p>

        <div className="flex items-center md:gap-3 gap-6">
          {socialMedia.map((info) => (
            <a
              key={info.id}
              href={info.link}
              target="_blank"
              rel="noopener noreferrer"
              className="w-10 h-10 cursor-pointer flex justify-center items-center backdrop-filter backdrop-blur-lg saturate-180 bg-opacity-75 bg-black-200 rounded-lg border border-black-300"
            >
              <Image src={info.img} alt="icons" width={20} height={20} />
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
