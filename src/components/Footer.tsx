function Footer() {
  return (
    <div
      id="footer"
      className="px-sm flex flex-row m-auto items-center bg-blue bg-opacity-30 text-white border-opacity-40 "
    >
          <div className="pr-sm">Icon</div>
              <h2 className="font-bold pr-xs">Did you miss early access?</h2>
                <h2 className="pr-xs"> Join the waitlist and you could still be one of the first to use Titan. </h2>
        <button className=" ml-auto transition duration-500 ease-in-out bg-blue bg-opacity-30 px-sm py-xs inline-block text-md leading-none rounded focus:shadow-outline hover:bg-opacity-25 text-white mt-4 lg:mt-0">Sign up today</button>
          </div>
  );
}

export default Footer;
