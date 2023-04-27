import React from "react";
import Input from "./shared/Input";
import { FaGreaterThan } from "react-icons/fa";

const Form = () => {
  const formSubmitHandler = (e) => {
    e.preventDefault();
  };

  return (
    <form
      class="w-[92%] max-w-sm mx-auto bg-white p-4"
      onSubmit={formSubmitHandler}
    >
      <div class="mb-4">
        <Input
          htmlfor="name"
          type="text"
          id="name"
          placeholder="Name"
          label="Name"
        />
      </div>
      <div class="mb-4">
        <Input
          label="Email*"
          htmlfor="email"
          type="email"
          id="email"
          placeholder="Email"
        />
        <p className="text-[#5F6D7E] font-normal text-[14px]">
          Please input a real Email Address
        </p>
      </div>
      <div class="mb-4">
        <Input
          label="Password"
          htmlfor="password"
          type="password"
          id="password"
          placeholder="********"
        />
      </div>
      <div class="mb-4">
        <Input
          label="Confirm-password"
          htmlfor="confirm-password"
          type="password"
          id="confirm-password"
          placeholder="********"
        />
        <p className="text-[#5F6D7E] font-normal text-[14px]">
          Passwords need to match
        </p>
      </div>
      <div class="flex items-start mb-6">
        <div class="flex items-center h-5">
          <input
            id="remember"
            type="checkbox"
            value=""
            class="w-4 h-4 border border-gray-300 rounded bg-gray-50 focus:ring-3 focus:ring-blue-300 dark:bg-gray-700 dark:border-gray-600 dark:focus:ring-blue-600 dark:ring-offset-gray-800 dark:focus:ring-offset-gray-800"
            required
          />
        </div>
        <label for="remember" class="ml-2 text-[15px] font-medium">
          I accept the Terms and Privacy Policy
        </label>
      </div>
      <button
        class="w-full bg-[#437EF7] text-white text-[15px] font-medium py-2 px-4 rounded-md transition duration-300 h-[46px] "
        type="submit"
      >
        Next
        <span className="inline-flex align-items-center">
          <FaGreaterThan className="ml-3" />
        </span>
      </button>
    </form>
  );
};

export default Form;
