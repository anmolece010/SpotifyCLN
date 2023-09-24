// const { useSelector } = require("react-redux");
// const { default: Sidebar } = require("../Components/Sidebar");
import { useSelector } from "react-redux";

import { Sidebar, Searchbar } from "../Components";

const App = () => {
  const { activeSong } = useSelector((state) => state.player);

  return (
    <div className="">
      <Sidebar />
      <div className="">
        <Searchbar />
      </div>
    </div>
  );
};
