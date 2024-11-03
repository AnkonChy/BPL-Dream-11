import sletterBg from "../assets/bg-shadow.png";
const Newsletter = () => {
  return (
    <div
      className="w-10/12 mx-auto py-10 absolute
    bottom-[650px] md:bottom-[445px] lg:bottom-[420px] left-9 md:left-[64px] lg:left-[127px]"
    >
      <div className="border border-white rounded-2xl p-4">
        <div
          className="bg-cover bg-no-repeat rounded-xl flex flex-col justify-center items-center text-center space-y-8"
          style={{
            backgroundColor: "white",
            backgroundImage: `url(${sletterBg})`,
            height: "300px",
          }}
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl font-bold">
            Subscribe to our Newsletter
          </h1>
          <p className="text-gray-500 font-medium">
            Get the latest updates and news right in your inbox!
          </p>
          <div className="md:flex gap-3 items-center">
            <div>
              <input
                type="text"
                placeholder="Enter Your Email"
                className="border px-8 md:px-16 py-2 md:py-3 rounded-xl"
              />
            </div>
            <div>
              <button className="my-2 md:my-0 px-2 md:px-4 py-2 md:py-3 rounded-xl bg-gradient-to-r from-pink-300 to-yellow-200 font-bold">
                Subscribe
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Newsletter;
