import { Routes, Route } from "react-router-dom";
import { useState } from "react";
import { useSelector } from "react-redux";
import Navbar from "./components/base/Navbar";
import Footer from "./components/base/Footer";
import OpeningPage from "./pages/OpeningPage";
import routes from "./routes";

function App() {
  
  const state = useSelector((state) => state);
  
  const [isLoading, setLoading] = useState(true);


  setTimeout(() => {
    setLoading(false);
  }, 4000);

  document.getElementById("root").style.backgroundColor = state.theme
    ? "#BBBBBB"
    : "#2C394B";
  document.getElementById("root").style.color = state.theme ? "black" : "white";

 
  return (
      
    <> 
    {isLoading && <OpeningPage></OpeningPage>}
       {!isLoading && (
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
        <Footer />
      </div>    
      )}
    </>
  );
}

export default App;
