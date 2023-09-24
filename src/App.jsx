import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";
import Sidebar from "../Components/Sidebar";
import Searchbar from "../Components/Searchbar";
import { Route, Routes } from "react-router-dom";
import Discover from "../Pages/Discover";
import TopArtists from "../Pages/TopArtists";
import TopCharts from "../Pages/TopCharts";
import AroundYou from "../Pages/AroundYou";
import SongDetails from "../Pages/SongDetails";
import Search from "../Pages/Search";
import TopPlay from "../Components/TopPlay";

function App() {
  return (
    <>
      <div>
        <Sidebar />
        <div>
          <Searchbar />
          <div>
            <div>
              <Routes>
                <Route path="/" element={<Discover />} />
                <Route path="/top-artists" element={<TopArtists />} />
                <Route path="/top-charts" element={<TopCharts />} />
                <Route path="/around-you" element={<AroundYou />} />
                <Route path="/artists/:id" element={<SongDetails />} />
                <Route path="/search/:searchTerm" element={<Search />} />
              </Routes>
            </div>
            <div>
              <TopPlay />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
