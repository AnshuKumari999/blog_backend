import { BrowserRouter, Route, Routes, useParams } from "react-router-dom";
import Header from "./component/Header";
import Nav from "./component/Navbar";
import Home from "./pages/Home";
import Hollywood from "./pages/Hollywood";
import Bollywood from "./pages/Bollywood";
import Technology from "./pages/Technology";
import Fitness from "./pages/Fitness";
import Food from "./pages/Food";
import SingleBlogPage from "./pages/SingleBlogPage";
import "./styles.css";
import Details from "./pages/Details";

function App() {
  return (
    <div className="App">
      {/*<Details>*/}
      <Header />
      <BrowserRouter>
        <Nav />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/bollywood" element={<Bollywood />} />
          <Route path="/hollywood" element={<Hollywood />} />
          <Route path="/technology" element={<Technology />} />
          <Route path="/fitness" element={<Fitness />} />
          <Route path="/food" element={<Food />} />
          <Route path=":category/:articleid" element={<SingleBlogPage />} />
        </Routes>
      </BrowserRouter>
      {/*</Details>*/}
    </div>
  );
}

export default App;
