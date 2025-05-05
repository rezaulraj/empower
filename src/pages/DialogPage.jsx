import React, { useEffect } from "react";
import dialogImg from "../assets/empowerment.jpg";
import { BiWorld } from "react-icons/bi";
import { RiVideoFill } from "react-icons/ri";
import { FaSquarePhone } from "react-icons/fa6";
import logo from "../assets/logo.png";
import candil from "../assets/candil.png";
const DialogPage = () => {
  return (
    <div className="max-w-screen-lg mx-auto">
      <div className="m-2 md:m-4 border border-gray-300">
        <img src={dialogImg} alt="" className="w-full" />
        <div className="p-4 md:p-8 space-y-4">
          <h2 className="text-xl font-bold font-poppins text-red-500 ">
            Brand : Empowerment Group
          </h2>
          <p className="font-poppins text-lg font-semibold text-zinc-800">
            Subject: Exciting Opportunity: Administrative Sales Assistant Role
          </p>
          <h2 className="text-lg font-semibold font-poppins text-zinc-800">
            Dear [Candidate’s Name],
          </h2>
          <p className="text-sm font-poppins text-zinc-900">
            I hope this message finds you well.
          </p>
          <p className="text-sm font-poppins text-zinc-900">
            I'm Afroja, part of the HR team here at Empowerment Group. You
            previously expressed interest in joining our Business Development
            Team as an Administrative Assistant in Sales, and I wanted to
            personally reconnect with you.
          </p>
          <p className="text-sm font-poppins text-zinc-900">
            We reviewed your CV submitted between 2020 and 2025 through various
            local job platforms and are pleased to let you know that a similar
            position has become available once again!
          </p>
          <h2 className="text-md font-semibold font-poppins text-zinc-800">
            Position Overview
          </h2>
          <ul
            style={{ listStyleType: "disc" }}
            className="text-sm font-poppins space-y-3 px-4 text-zinc-900"
          >
            <li>
              <span className="font-semibold text-zinc-800">Role: </span>
              Administrative Sales Assistant
            </li>
            <li>
              <span className="font-semibold text-zinc-800">Type: </span>
              Full-time / Part-time
            </li>
            <li>
              <span className="font-semibold text-zinc-800">Salary: </span>
              €1,450 net
            </li>
            <li>
              <span className="font-semibold text-zinc-800">Bonuses: </span>
              Monthly performance-based bonuses starting from €1,000
            </li>
          </ul>
          <p className="text-sm font-poppins text-zinc-900">
            We pride ourselves on recognizing and rewarding dedication. Our
            compensation package is designed to motivate and appreciate
            consistent performers who contribute meaningfully to our growth.
          </p>
          <p className="text-sm font-poppins text-zinc-900">
            At Empowerment Group, we are proud to be an equal opportunity
            employer, committed to building an inclusive and supportive
            workplace. We offer one of the best working environments in the
            industry, along with health insurance coverage, an indefinite job
            contract, and competitive pay that exceeds market averages. We also
            prioritize your long-term development through training, career
            advancement, and work-life balance initiatives—because your success
            is our success.
          </p>
          <h2 className="text-md font-poppins font-semibold text-zinc-800">
            Why Reconnect Now?
          </h2>
          <h3 className="text-sm font-poppins font-medium text-zinc-900">
            Empowerment Group is one of the leading employment agencies across
            Europe and beyond. We believe your profile aligns strongly with this
            opportunity, and we’d love to explore how this role could support
            your long-term career ambitions.
          </h3>
          <p className="text-sm font-poppins text-zinc-900">
            If this opportunity interests you, we’d be glad to arrange a short
            online meeting to discuss the position in more detail and get to
            know your current goals.
          </p>
          <p className="text-sm font-poppins font-medium text-zinc-800">
            In the meantime, feel free to learn more about us:
          </p>
          <div className="flex items-center gap-2">
            <span>
              <BiWorld className="text-red-700 w-5 h-5" />
            </span>
            <span className="text-sm font-bold font-poppins text-zinc-800">
              Visit :
            </span>
            <a
              className="text-blue-600 underline text-sm font-poppins hover:scale-105 transition-transform duration-300"
              href="https://empowerment.group/"
              target="_blank"
            >
              www.empowerment.group
            </a>
          </div>
          <div className="flex items-center gap-2">
            <span>
              <RiVideoFill className="text-red-700 w-5 h-5" />
            </span>
            <span className="text-sm font-bold font-poppins text-zinc-800">
              Watch :
            </span>
            <a
              className="text-blue-600 underline text-sm font-poppins hover:scale-105 transition-transform duration-300"
              href="https://www.youtube.com/@EmpowermentGroupLimited"
              target="_self"
            >
              Our YouTube Channel
            </a>
          </div>
          <div className="space-y-4">
            <p className="text-sm font-poppins text-zinc-900">
              Looking forward to hearing from you soon.
            </p>
            <p className="text-md font-semibold font-poppins text-zinc-900 pt-2">
              Warm regards,
            </p>
          </div>
          <div className="space-y-2">
            <p className="text-sm font-poppins text-zinc-900">
              [HR Colleague Name]
            </p>
            <p className="text-sm font-poppins text-zinc-900">
              Human Resource Assistant
            </p>
            <p className="flex flex-wrap items-center gap-2 font-poppins">
              <span>
                <FaSquarePhone className="text-red-700 w-5 h-5" />
              </span>
              Mobile & WhatsApp:
              <span className="text-red-700 font-medium font-poppins">
                +385 95 588 0747
              </span>
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 items-center justify-center p-4 md:p-8 space-y-4 border border-gray-200">
          <div className="space-y-8">
            <div className="flex items-center justify-center md:justify-start">
              <img src={logo} alt="logo" className="w-40" />
            </div>

            <a
              href="https://calendly.com/empowerment-group"
              target="_blank"
              className="underline text-red-600 font-semibold font-poppins"
            >
              Reserve 45–60 Minute Meeting Slot
            </a>
            <p className="text-sm font-poppins text-center sm:text-left text-zinc-900 pt-4">
              Hi, I'm Sandhiya—your HR Assistant. Welcome! Just follow the steps
              to book time on my calendar
            </p>
          </div>
          <div>
            <img src={candil} alt="" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DialogPage;
