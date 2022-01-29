import { Routes, Route } from "react-router-dom";
import { useSelector } from "react-redux";
import Header from "./components/base/Header";
import Footer from "./components/base/Footer";
import routes from "./routes";

function App() {
  const theme = useSelector((state) => state.theme);

  document.getElementById("root").style.backgroundColor = theme
    ? "#BBBBBB"
    : "#2C394B";
  document.getElementById("root").style.color = theme ? "black" : "white";

  return (
    <>
      <div className="app">
        <Header />
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
