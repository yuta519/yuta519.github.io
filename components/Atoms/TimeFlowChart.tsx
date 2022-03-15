import React from "react";
import { useState } from "react";

import Modal from "@/components/Atoms/Modal";

interface elements {
  name: string;
  isActive: boolean;
  title: string;
  startDate: string;
}

// interface Props {
//   readonly visibility: boolean;
//   readonly title: string;
//   readonly lines: Line[];
// }

const Chart = ({ name, isActive, title, startDate }: elements) => {
  if (isActive) {
    return (
      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
            <i className="fas fa-check-circle text-white"></i>
          </div>
        </div>
        <div className="bg-green-500 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-bold md:text-xl sm:text-base mb-1 text-black">
            {name}
          </h3>
          <ul className="text-sm mb-1 text-gray-800">
            <li className="md:text-base sm:text-xs">{title}</li>
          </ul>
          <p className="leading-tight font-semibold text-justify w-full text-gray-600">
            {startDate}
          </p>
        </div>
      </div>
    );
  } else {
    return (
      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
            <i className="fas fa-exclamation-circle text-gray-400"></i>
          </div>
        </div>
        <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">
            {name}
          </h3>
          <ul className="text-sm mb-1 text-gray-400">
            <li className="md:text-base sm:text-xs">{title}</li>
          </ul>
          <p className="leading-tight text-justify">{startDate}</p>
        </div>
      </div>
    );
  }
};

const TimeFlowChart: React.FC = () => {
  return (
    <div className="flex flex-col md:grid grid-cols-12 text-gray-50 mt-3">
      {/* <Chart name="name" isActive={true} title="title" startDate="startDate" />
      <Chart name="name" isActive={false} title="title" startDate="startDate" /> */}

      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
            <i className="fas fa-check-circle text-white"></i>
          </div>
        </div>
        <div className="bg-green-500 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-bold md:text-xl sm:text-base mb-1 text-black">
            Innoscouter, Inc. (SideWork)
          </h3>
          <ul className="text-sm mb-1 text-gray-800">
            <li className="md:text-base sm:text-xs">
              Worked on web service as Frontend and Backend Engineer
            </li>
            <li className="md:text-base sm:text-xs">
              Using frontend skills like Typescript / React
            </li>
            <li className="md:text-base sm:text-xs">
              Using server side skills like Ruby / Hanami / MySQL
            </li>
          </ul>
          <p className="leading-tight font-semibold text-justify w-full text-gray-600">
            Nov 2021 ~
          </p>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-green-500 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-green-500 shadow text-center">
            <i className="fas fa-check-circle text-white"></i>
          </div>
        </div>
        <div className="bg-green-500 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-bold md:text-xl sm:text-base mb-1 text-black">
            SoftBank Corp (MainWork)
          </h3>
          <ul className="text-sm mb-1 text-gray-800">
            <li className="md:text-base sm:text-xs">
              Worked on MSS (Managed Security Service) as service development
              engineer
            </li>
            <li className="md:text-base sm:text-xs">
              Using server side skills like Python / PostgreSQL / Linux
            </li>
            <li className="md:text-base sm:text-xs">
              Also experienced some security devices like Zscaler / PaloAlto /
              Rapid7 / Proofpoint ITM / Fortinet
            </li>
          </ul>
          <p className="leading-tight text-justify font-semibold text-gray-600">
            January 2021 ~
          </p>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
            <i className="fas fa-exclamation-circle text-gray-400"></i>
          </div>
        </div>
        <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">
            QuickWork, Inc. (SideWork)
          </h3>
          <ul className="text-sm mb-1 text-gray-400">
            <li className="md:text-base sm:text-xs">
              Worked on web service as Backend Engineer
            </li>
            <li className="md:text-base sm:text-xs">
              Using server side skills like Python / FastAPI / Pytest /
              SqlAlchemy / PostgreSQL
            </li>
          </ul>
          <p className="leading-tight text-justify">
            July 2021 ~ November 2021
          </p>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
            <i className="fas fa-exclamation-circle text-gray-400"></i>
          </div>
        </div>
        <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">
            ITOCHU Techno-Solutions Corporation
          </h3>
          <ul className="text-sm mb-1 text-gray-400">
            <li className="md:text-base sm:text-xs">
              as Infra Engineer - VMware / AWS / Trend Micro / Zscaler / Splunk
            </li>
            <li className="md:text-base sm:text-xs">
              as Sales Engineer - Trend Micro / Zscaler
            </li>
          </ul>
          <p className="leading-tight text-justify">
            April 2017 ~ December 2020
          </p>
        </div>
      </div>

      <div className="flex md:contents">
        <div className="col-start-1 col-end-3 mr-10 md:mx-auto relative">
          <div className="h-full w-6 flex items-center justify-center">
            <div className="h-full w-1 bg-gray-300 pointer-events-none"></div>
          </div>
          <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-gray-300 shadow text-center">
            <i className="fas fa-exclamation-circle text-gray-400"></i>
          </div>
        </div>
        <div className="bg-gray-300 col-start-3 col-end-12 p-4 rounded-xl my-4 mr-auto shadow-md w-full">
          <h3 className="font-semibold md:text-lg sm:text-base mb-1 text-gray-400">
            Interspace Co.,Ltd (Internship)
          </h3>
          <ul className="text-sm mb-1 text-gray-400">
            <li className="md:text-base sm:text-xs">
              as Backend Engineer - PHP / Laravel / CodeIgniter / Vagrant
            </li>
          </ul>
          <p className="leading-tight text-justify">July 2015 ~ June 2016</p>
        </div>
      </div>
    </div>
  );
};

export default TimeFlowChart;