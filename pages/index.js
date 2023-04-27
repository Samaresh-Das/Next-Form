import Head from "next/head";
import Image from "next/image";
import Onboarding from "../components/Onboarding";
import { Fragment } from "react";
import { MdDarkMode } from "react-icons/md";

export default function Home() {
  const []
  return (
    <Fragment>
      <button>
        <MdDarkMode className="absolute right-0 top-0 text-[40px]" />
      </button>
      <div>
        <Onboarding />
      </div>
    </Fragment>
  );
}
