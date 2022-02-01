import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import routes from "./routes";

function App() {
  const state = useSelector((state) => state);
  

  document.getElementById("root").style.backgroundColor = state.theme
    ? "#BBBBBB"
    : "#2C394B";
  document.getElementById("root").style.color = state.theme ? "black" : "white";

  return (
    <>
      <div className="app">
        <Navbar />
        <br />
        <br />
        <br />
        <Routes>
          {routes.map((item, index) => (
            <Route key={index} path={item.path} element={<item.element />} />
          ))}
        </Routes>
      </div>
      <Footer />
    </>
  );
}

export default App;
