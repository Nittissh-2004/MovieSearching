import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./Components/Navbar";
import Footer from "./Components/Footer";
import Search from "./Pages/Search";
import TotalMovies from "./Pages/TotalMovies";
import Movie from "./pages/Movie";
import PageNotFound from "./Pages/PageNotFound";
import Favorites from "./Pages/Favorites";
const App = () => {
  return (
    <div>
      <BrowserRouter>
      <div>
          <Navbar />
        </div>
        <Routes>
          <Route path="/" element={<Search />} />
          <Route path="/movies" element={<TotalMovies />} />
          <Route path="/movies/:id" element={<Movie />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<PageNotFound />} />
        </Routes>
        <div>
          <Footer />
        </div>
      </BrowserRouter>
    </div>
  );
};
export default App;