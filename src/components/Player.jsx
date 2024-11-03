/* eslint-disable react/prop-types */

const Player = ({ player, handleChoosePlayer }) => {
  const {
    playerId,
    image,
    name,
    role,
    country,
    battingType,
    bowlingType,
    biddingPrice,
  } = player;

  return (
    <div className="p-4 border rounded-3xl">
      <div className="bg-base-100">
        <figure className="mb-4">
          <img
            className="w-full h-[250px] object-cover object-top rounded-2xl"
            src={image}
          />
        </figure>
        <div className="space-y-8">
          <div className="flex gap-3 items-center">
            <div>
              <i className="fa-solid fa-user"></i>
            </div>
            <div>
              <h3 className="text-xl font-bold">{name}</h3>
            </div>
          </div>
          <div className="border-b space-y-2">
            <div className="flex justify-between items-center">
              <div className="flex items-center gap-3">
                <i className="fa-solid fa-flag"></i>
                <p className="text-gray-500">{country}</p>
              </div>
              <div className="px-3 py-2 rounded bg-gray-200">
                <h3 className="text-gray-600 font-bold">{role}</h3>
              </div>
            </div>
            <div></div>
          </div>
          <div className="space-y-3">
            <h2 className="text-lg font-bold">Rating</h2>
            <div className="flex justify-between items-center">
              <div>
                <h3>{battingType}</h3>
              </div>
              <div>
                <h3>{bowlingType}</h3>
              </div>
            </div>
            <div className="flex justify-between items-center">
              <div>
                <h3>Price: $ {biddingPrice}</h3>
              </div>
              <div>
                <button
                  onClick={() => handleChoosePlayer(player)}
                  className="btn hover:bg-btnPrimary font-bold"
                >
                  Choose Player
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Player;
