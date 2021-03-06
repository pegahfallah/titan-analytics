import React from "react";
import Modal from "../components/Modal";

function NavBar() {
  const [showModal, setShowModal] = React.useState(false);

  return (
    <>
      <nav className="flex items-center justify-between pt-xs">
        <div className="flex items-center flex-shrink-0 text-white mr-6">
          <svg
            width="26"
            height="31"
            viewBox="0 0 26 31"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M17.3502 11.0845L9.08106 7.90833C8.93573 7.85251 8.78394 7.97345 8.80587 8.12758L11.9163 29.9871C11.9306 30.0877 12.0167 30.1624 12.1183 30.1624H13.1922C13.2881 30.1624 13.3711 30.0956 13.3916 30.002L17.4764 11.3186C17.4979 11.2201 17.4443 11.1207 17.3502 11.0845Z"
              fill="#EE86D0"
            />
            <path
              d="M25.0015 0H0.296676C0.153591 0 0.0549359 0.14343 0.106114 0.27705L2.55846 6.6798C2.5887 6.75875 2.66448 6.81088 2.74902 6.81088H22.5634C22.648 6.81088 22.7239 6.75857 22.7541 6.67943L25.1922 0.27668C25.243 0.143119 25.1444 0 25.0015 0Z"
              fill="#EE86D0"
            />
          </svg>

          <span className="font-semibold text-xl tracking-tight ml-xs">
            TITAN
          </span>
        </div>
        <div className="transition duration-500 ease-in-out bg-blue bg-opacity-30 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:bg-opacity-50 text-white mt-4 lg:mt-0">
          <button onClick={() => setShowModal(true)}>Join the waitlist</button>
        </div>
      </nav>
      <Modal onClose={() => setShowModal(false)} show={showModal}></Modal>
    </>
  );
}

export default NavBar;
