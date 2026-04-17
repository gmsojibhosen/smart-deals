import React from "react";
import Banner from "../Banner/Banner";
import LatesProducts from "../LatestProducts/LatesProducts";
import { useLoaderData } from "react-router";
import Footer from "../Footer/Footer";

const Home = () => {
  const latestProducts = useLoaderData();
  return (
    <div>
      <main>
        <Banner></Banner>
        <LatesProducts latestProducts={latestProducts}></LatesProducts>
        <div className=" my-8 flex items-center justify-center w-full mx-auto">
          <button className="px-8 btn btn-primary">Show Al</button>
        </div>
      </main>

      <footer>
        <Footer/>
      </footer>
    </div>
  );
};

export default Home;
