import { useState } from "react";
import AvaiablePlayers from "./components/AvaiablePlayers";
import Banner from "./components/Banner";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import Newsletter from "./components/Newsletter";
import Players from "./components/Players";
import Selected from "./components/Selected";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const App = () => {
  const [credit, setCredit] = useState(0);

  const [choosePlayers, setChoosePlayers] = useState([]);

  const [isActive, setIsActive] = useState({
    avaiable: true,
    status: "available",
  });

  const handleIsActiveState = (status) => {
    if (status === "avaiable") {
      setIsActive({
        avaiable: true,
        status: "available",
      });
    } else {
      setIsActive({
        avaiable: false,
        status: "selected",
      });
    }
  };

  console.log(isActive);

  const handleCredit = () => {
    setCredit(credit + 2000000);
  };

  const handleDecreaseCoin = (coin) => {
    setCredit(credit - coin);
  };
  const handleDeletePlayer = (id) => {
    const remainingPlayers = choosePlayers.filter(
      (player) => player.playerId != id
    );
    setChoosePlayers(remainingPlayers);
  };

  const handleChoosePlayer = (player) => {
    const isExist = choosePlayers.find(
      (previousPlayer) => previousPlayer.playerId === player.playerId
    );

    if (choosePlayers.length < 6) {
      if (player.biddingPrice < credit) {
        if (!isExist) {
          handleDecreaseCoin(player.biddingPrice);
          setChoosePlayers([...choosePlayers, player]);
          toast.success("Added");
        } else {
          toast.warn("Already Chosen");
        }
      } else {
        toast.error("Insufficient Balance");
      }
    } else {
      toast.warn("You Team is Full");
    }
  };

  return (
    <div className="font-Sara relative">
      <Navbar credit={credit}></Navbar>
      <Banner handleCredit={handleCredit}></Banner>
      <AvaiablePlayers
        choosePlayers={choosePlayers}
        handleIsActiveState={handleIsActiveState}
        isActive={isActive}
      ></AvaiablePlayers>
      {isActive.avaiable ? (
        <Players handleChoosePlayer={handleChoosePlayer}></Players>
      ) : (
        <Selected
          choosePlayers={choosePlayers}
          handleDeletePlayer={handleDeletePlayer}
          isActive={isActive}
          handleIsActiveState={handleIsActiveState}
        ></Selected>
      )}

      <Newsletter></Newsletter>
      <Footer></Footer>
      <ToastContainer />
    </div>
  );
};

export default App;
