import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Search from "./pages/Search";
import TotalMovies from "./pages/TotalMovies";
import Movie from "./pages/Movie";
import PageNotFound from "./pages/PageNotFound";
import Favorites from "./pages/favorites";
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