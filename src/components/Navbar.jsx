import logo from "../assets/logo.png";
const Navbar = ({ credit }) => {
  return (
    <div className="sticky top-0 backdrop-blur-md">
      <div className="w-11/12 md:w-10/12 mx-auto flex justify-between items-center py-8">
        <div>
          <img src={logo} alt="" />
        </div>
        <i className="text-2xl inline-block lg:hidden fa-solid fa-bars"></i>
        <div className="hidden lg:flex lg:justify-between lg:items-center lg:gap-8">
          <ul className="flex justify-between items-center gap-8 text-gray-500 font-medium text-xl">
            <li>Home</li>
            <li>Fixture</li>
            <li>Teams</li>
            <li>Schedules</li>
          </ul>

          <button className="border flex justify-between items-center gap-4 px-4 py-3 rounded-xl">
            <span className="font-bold text-xl">{credit} Coin</span>
            <img
              className="w-7"
              src="https://img.icons8.com/?size=48&id=81068&format=png"
              alt=""
            />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
