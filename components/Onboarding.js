import React, { Fragment } from "react";
import Image from "next/image";
import lookscout from "../Assets/Lookscout.png";
import ProgressBar from "./ProgressBar";
import Form from "./Form";

const Onboarding = () => {
  return (
    <Fragment>
      <div className="mx-3">
        <Image
          src={lookscout}
          alt="Comapny logo"
          className="mx-auto mt-[48px] mb-[30px]"
        />
      </div>
      <div className="mx-3 border-2 border-[#DAE0E6] rounded-md">
        <ProgressBar />
        <Form />
      </div>
    </Fragment>
  );
};

export default Onboarding;
