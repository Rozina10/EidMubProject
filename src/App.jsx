import { useState } from "react";
import "./App.css";
import bgImage from "./assets/eidi-bg.jpg.avif";
import bear from "./assets/bear.png.png";
import bakra from "./assets/bakrafp.jpeg";
import eidmub from "./assets/eidmub.jpeg";
import { motion } from "framer-motion";

function App() {
  const [page, setPage] = useState(1);
  const [showBakra, setShowBakra] = useState(false);

  const handleNext = () => setPage((prev) => prev + 1);

  return (
    <div
      style={{
        backgroundImage: `url(${bgImage})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        minHeight: "100vh",
        width: "100%",
        color: "#fff",
        textAlign: "center",
        paddingTop: "50px",
        position: "relative",
        overflowX: "hidden",
      }}
    >
      {page === 1 && (
        <>
          <motion.img
            src={bear}
            alt="Cute Bear"
            initial={{ y: -150, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ type: "spring", stiffness: 70 }}
            style={{ width: "150px", margin: "auto", display: "block" }}
          />
          <h1 className="main-heading">🎉 Advance Eid Mubarak! 🎉</h1>
          <button onClick={handleNext} className="custom-button pink pulse">
            🎁 click here
          </button>
        </>
      )}

      {page === 2 && (
        <div className="page-two-container">
          <motion.div
            className="left-content"
            initial={{ x: -200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          >
            <h2>Here’s a small advance Eid wish for you!</h2>
            <p>
              May your Eid be filled with joy, love, and lots of yummy food 🍗🍬. Enjoy every
              moment and don’t forget to smile!
            </p>
            <button onClick={handleNext} className="custom-button blue pulse">
              Go Next →
            </button>
          </motion.div>
          <motion.img
            src={eidmub}
            alt="Eid Celebration"
            className="eid-image-large"
            initial={{ x: 200, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 1 }}
          />
        </div>
      )}

      {page === 3 && (
        <>
          <h1 className="main-heading">🌙 Eid Mubarak!</h1>
          <p className="poetry">
            Eidi in hand and joy in the air  
            <br /> Eid is a time for love and care 🐐
          </p>
          <button onClick={() => setShowBakra(true)} className="custom-button green pulse">
            🐐 Show Bakra Magic
          </button>

          {showBakra && (
            <>
              <motion.img
                src={bakra}
                alt="Bakra"
                animate={{ scale: [1, 1.1, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
                style={{
                  width: "350px",
                  margin: "50px auto 0",
                  display: "block",
                  borderRadius: "15px",
                }}
              />

              {[...Array(30)].map((_, i) => (
                <img
                  key={i}
                  src="https://cdn-icons-png.flaticon.com/512/742/742751.png"
                  className="flower"
                  style={{
                    left: `${Math.random() * 100}%`,
                    animationDuration: `${Math.random() * 3 + 3}s`,
                  }}
                  alt="Phool"
                />
              ))}

              <div className="lights">
                {[...Array(20)].map((_, i) => (
                  <div key={i} className="light" style={{ "--i": i }} />
                ))}
              </div>
            </>
          )}
        </>
      )}
    </div>
  );
}

export default App;
