import Modal from "../components/Modal";
import React from "react";

function Footer() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
      <div
        id="footer"
        className="px-sm flex flex-row m-auto items-center bg-blue bg-opacity-30 text-white border-opacity-40 "
      >
        <div className="pr-xs">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-6 w-6"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            width="24px"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth={2}
              d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.001 4.001 0 017 6h1.832c4.1 0 7.625-1.234 9.168-3v14c-1.543-1.766-5.067-3-9.168-3H7a3.988 3.988 0 01-1.564-.317z"
            />
          </svg>
        </div>
        <h2 className="font-bold pr-xs">Did you miss early access?</h2>
        <h2 className="pr-xs">
          {" "}
          Join the waitlist and you could still be one of the first to use
          Titan.{" "}
        </h2>
        <button className="ml-auto transition duration-500 ease-in-out bg-blue bg-opacity-30 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:bg-opacity-70 text-white mt-4 lg:mt-0">
          Sign up today
        </button>
      </div>
    </>
  );
}

export default Footer;
