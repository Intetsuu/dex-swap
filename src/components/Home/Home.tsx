import React from "react";

import styles from "./Home.module.scss";

import Swap from "../Swap/Swap";
import Trending from "../Trending/Trending";

const Home = () => {
  return (
    <div className={styles.container}>
      <Swap />
    </div>
  );
};

export default Home;
