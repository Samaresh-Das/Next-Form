import React, { Fragment } from "react";
import Image from "next/image";
import lookscoutDark from "../Assets/Lookscout.png";
import lookscoutWhite from "../Assets/LookscoutWhite.png";
import ProgressBar from "./ProgressBar";
import Form from "./Form";
import { useSelector } from "react-redux";

const Onboarding = () => {
  const themeMode = useSelector((state) => state.theme.theme);
  return (
    <Fragment>
      <div className="mx-3">
        {themeMode === "light" ? (
          <Image
            src={lookscoutDark}
            alt="Comapny logo"
            className="mx-auto mt-[48px] mb-[30px]"
            height={50}
          />
        ) : (
          <Image
            src={lookscoutWhite}
            alt="Comapny logo"
            className="mx-auto mt-[48px] mb-[30px]"
            height={50}
          />
        )}
      </div>
      <div
        className={`mx-3 md:w-[92%] xl:w-[750px] md:mx-auto   ${
          themeMode === "light"
            ? "border-2 border-[#DAE0E6] rounded-lg"
            : "border-0 "
        } rounded-lg md:relative`}
      >
        <ProgressBar />
        <Form />
      </div>
    </Fragment>
  );
};

export default Onboarding;
