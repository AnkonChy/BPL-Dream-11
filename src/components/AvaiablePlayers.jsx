const AvaiablePlayers = ({ choosePlayers, handleIsActiveState, isActive }) => {
  return (
    <div className="flex justify-between items-center py-10">
      <div>
        <h1 className="text-3xl font-bold">
          {isActive.avaiable ? (
            "Available Players"
          ) : (
            <h1 className="text-3xl font-bold">
              Selected Player ({choosePlayers.length}/6)
            </h1>
          )}
        </h1>
      </div>
      <div>
        <button
          onClick={() => handleIsActiveState("avaiable")}
          className={`${
            isActive.avaiable
              ? "bg-btnPrimary font-bold rounded-2xl px-7 py-4 md:text-lg"
              : "btn"
          }`}
        >
          Available
        </button>
        <button
          onClick={() => handleIsActiveState("selected")}
          className={`${
            isActive.avaiable
              ? "btn"
              : "bg-btnPrimary font-bold rounded-2xl px-7 py-4 md:text-lg"
          }`}
        >
          Selected ({choosePlayers.length})
        </button>
      </div>
    </div>
  );
};

export default AvaiablePlayers;
