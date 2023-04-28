import React from "react";
import Input from "./shared/Input";
import { FaGreaterThan } from "react-icons/fa";
import { useSelector } from "react-redux";

const Form = () => {
  const themeMode = useSelector((state) => state.theme.theme);
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      className={`w-full  mx-auto md:px-[48px] md:pb-10 ${
        themeMode === "light" ? "bg-white" : "bg-[#1C2534]"
      } p-4 md:relative`}
      onSubmit={formSubmitHandler}
    >
      <div className="mb-4">
        <Input
          htmlfor="name"
          type="text"
          id="name"
          placeholder="Name"
          label="Name"
        />
      </div>
      <div className="mb-4">
        <Input
          label="Email*"
          htmlfor="email"
          type="email"
          id="email"
          placeholder="Email"
        />
        <p
          className={`${
            themeMode === "light" ? "text-[#5F6D7E]" : "text-[#A5ACBA]"
          } font-normal text-[14px]`}
        >
          Please input a real Email Address
        </p>
      </div>
      <div className="md:flex md:flex-row justify-around">
        <div className="mb-4 md:w-full">
          <Input
            label="Password"
            htmlfor="password"
            type="password"
            id="password"
            placeholder="********"
          />
        </div>
        <div className="mb-4 md:w-full">
          <Input
            label="Confirm-password"
            htmlfor="confirm-password"
            type="password"
            id="confirm-password"
            placeholder="********"
          />
          <p
            className={`${
              themeMode === "light" ? "text-[#5F6D7E]" : "text-[#A5ACBA]"
            } font-normal text-[14px]`}
          >
            Passwords need to match
          </p>
        </div>
      </div>
      <div className="flex items-start mb-6">
        <div className="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            className="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label
          htmlFor="remember"
          className={`ml-2 text-[15px] font-medium ${
            themeMode === "light" ? "" : "text-[#A5ACBA]"
          } font-normal text-[14px]`}
        >
          I accept the Terms and Privacy Policy
        </label>
      </div>
      <div className="md:inline-block">
        <button
          className="w-full bg-[#437EF7] text-white text-[15px] font-medium py-2 px-4 rounded-md transition duration-300 h-[46px] md:absolute md:bottom-4 md:right-10 md:w-[100px]"
          type="submit"
        >
          Next
          <span className="inline-flex align-items-center">
            <FaGreaterThan className="ml-3" />
          </span>
        </button>
      </div>
    </form>
  );
};

export default Form;
