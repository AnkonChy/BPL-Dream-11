import img from "../assets/bg-shadow.png";
import bannerImg from "../assets/banner-main.png";
const Banner = ({ handleCredit }) => {
  return (
    <div>
      <div
        className="flex flex-col justify-center items-center text-center space-y-6 bg-cover bg-no-repeat"
        style={{
          backgroundColor: "black",
          backgroundImage: `url(${img})`,
          height: "500px",
        }}
      >
        <img className="w-40 md:w-60 h-32 md:h-48" src={bannerImg} alt="" />
        <h1 className="text-2xl md:text-4xl font-bold text-white">
          Assemble Your Ultimate Dream 11 Cricket Team
        </h1>
        <p className="md:text-lg text-gray-400">
          Beyond Boundaries Beyond Limits
        </p>
        <div className="bg-black rounded-3xl px-2 py-2 border-2 border-btnPrimary">
          <button
            onClick={handleCredit}
            className="bg-btnPrimary font-bold rounded-2xl px-7 py-4 md:text-lg"
          >
            Claim Free Credit
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
