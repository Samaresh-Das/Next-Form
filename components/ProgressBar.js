import React from "react";
import { FiLock } from "react-icons/fi";
import { RxPerson } from "react-icons/rx";
import { BsCurrencyDollar } from "react-icons/bs";
import { AiOutlineLike } from "react-icons/ai";

const ProgressBar = () => {
  return (
    // <div className="max-w-xl mx-auto my-4 pb-4 bg-[#FAFBFC]">
    <div className="w-[92%] mx-auto my-4 pb-4 bg-[#FAFBFC]">
      <div className="flex py-[12px]">
        <div className="flex-1"></div>

        <div className="flex-1">
          <div className="w-10 h-10  mx-auto border-2 border-[#437EF7] rounded-full text-lg flex items-center">
            <span className="text-center w-[99%]">
              <FiLock className="mx-auto text-[#437EF7]" />
            </span>
          </div>
          <div className="w-1/4 text-[#437EF7] font-semibold text-[15px]">
            Account
          </div>
        </div>

        <div className="w-1/6 align-center items-center align-top content-center flex">
          <div className="w-[99%] bg-gray-200 rounded items-center align-middle align-center flex-1  ">
            <hr className="dots text-gray-300" />
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10  mx-auto border-2 border-gray-300 rounded-full text-lg flex items-center">
            <span className="text-center w-full">
              <RxPerson className="mx-auto" />
            </span>
          </div>
          <div className="w-1/4  font-semibold text-[15px]">Personal</div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-[99%] bg-gray-200 rounded items-center align-middle align-center flex-1">
            <hr className="dots text-gray-300" />
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10  mx-auto border-2 border-gray-300 rounded-full text-lg flex items-center">
            <span className="text-center w-full">
              <BsCurrencyDollar className="mx-auto" />
            </span>
          </div>
          <div className="w-1/4  font-semibold text-[15px]">Billing</div>
        </div>

        <div className="w-1/6 align-center items-center align-middle content-center flex">
          <div className="w-[99%] bg-gray-200 rounded items-center align-middle align-center flex-1">
            <hr className="dots text-gray-300" />
          </div>
        </div>

        <div className="flex-1">
          <div className="w-10 h-10  mx-auto border-2 border-gray-300 rounded-full text-lg flex items-center">
            <span className="text-center w-full">
              <AiOutlineLike className="mx-auto" />
            </span>
          </div>
          <div className="w-1/4  font-semibold text-[15px]">Done</div>
        </div>
      </div>
    </div>
  );
};

export default ProgressBar;
