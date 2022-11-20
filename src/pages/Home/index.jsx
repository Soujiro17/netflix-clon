import React from "react";
import DownloadSeries from "../../components/DownloadSeries";
import Enjoy from "../../components/Enjoy";
import KidsProfile from "../../components/KidsProfiles";
import Landing from "../../components/Landing";

const Home = () => {
  return (
    <>
      <Landing />
      <Enjoy />
      <DownloadSeries />
      <KidsProfile />
    </>
  );
};

export default Home;
