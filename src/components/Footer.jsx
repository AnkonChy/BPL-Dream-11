import footerImg from "../assets/logo-footer.png";
const Footer = () => {
  return (
    <div className="pt-16">
      <footer className="bg-black text-white pt-40 md:pt-48 px-10 pb-14 flex flex-col items-center">
        <div className="mt-18">
          <img src={footerImg} alt="" />
        </div>
        <div className="text-center md:text-start md:flex  md:justify-between md:items-center space-y-5">
          <div className="md:w-1/4 space-y-2">
            <h1 className="text-xl font-bold text-gray-400">About Us</h1>
            <p className="text-sm md:text-base">
              We are a passionate team dedicated to providing the best services
              to our customers.
            </p>
          </div>
          <div>
            <h1 className="text-xl font-bold text-gray-400">Quick Links</h1>
            <ul className="md:list-disc ml-4">
              <li>
                <a href="">Home</a>
              </li>
              <li>
                <a href="">Services</a>
              </li>
              <li>
                <a href="">About</a>
              </li>
              <li>
                <a href="">Contact</a>
              </li>
            </ul>
          </div>
          <div className="space-y-3">
            <h1 className="text-xl font-bold text-gray-400">Subscribe</h1>
            <p>Subscribe to our newsletter for the latest updates.</p>
            <div className="flex items-center">
              <div>
                <input
                  type="text"
                  placeholder="Enter Your Email"
                  className="border px-8 md:px-16 py-2 md:py-3 rounded-l-xl"
                />
              </div>
              <div>
                <button className="my-2 md:my-0 px-2 md:px-4 py-2 md:py-3 rounded-r-xl bg-gradient-to-r from-pink-300 to-yellow-200 font-bold text-black">
                  Subscribe
                </button>
              </div>
            </div>
            <p></p>
          </div>
        </div>
        <p className="text-gray-500 mt-10 ">@2024 All Rights Reserved.</p>
      </footer>
    </div>
  );
};

export default Footer;
