const Selected = ({ choosePlayers, handleDeletePlayer, isActive,handleIsActiveState }) => {
  return (
    <div className=" w-10/12 mx-auto py-16 mb-20">
      <div className="hover">
        {choosePlayers.map((player, index) => (
          <div
            key={index}
            className="flex justify-between items-center bg-gray-100 py-4 px-8 mb-3 rounded-xl"
          >
            <div>
              <div className="flex items-center gap-3">
                <div>
                  <img
                    className="w-20 h-20 object-cover rounded-full object-top"
                    src={player.image}
                    alt=""
                  />
                </div>
                <div>
                  <h1 className="font-bold text-2xl">{player.name}</h1>
                  <p className="text-gray-500">{player.role}</p>
                  <p className="text-sm">Price: {player.biddingPrice}</p>
                </div>
              </div>
            </div>
            <div>
              <button onClick={() => handleDeletePlayer(player.playerId)}>
                <i className="fa-solid fa-trash"></i>
              </button>
            </div>
          </div>
        ))}
      </div>
      <button onClick={() => handleIsActiveState("avaiable")}
          className={`${
            isActive.avaiable
              ? "bg-btnPrimary font-bold rounded-2xl px-7 py-4 md:text-lg"
              : "btn bg-btnPrimary"
          }`}>
        Add More Player
      </button>
    </div>
  );
};

export default Selected;
