import React, { useEffect, useState } from "react";
import { Modal, Button } from "antd";
import { SwapWidget, darkTheme, lightTheme, Theme } from "@uniswap/widgets";
import "@uniswap/widgets/fonts.css";
import styles from "./Swap.module.scss";

let darkMode = true;
const Swap: React.FC = () => {
  return (
    <>
      <div className={styles.tradeBox}>
        <div className={styles.swapWidgetContainer}>
          <SwapWidget
            // @ts-ignore

            tokenList={"https://ipfs.io/ipns/tokens.uniswap.org"}
            theme={darkMode ? darkTheme : lightTheme}
          />
        </div>
      </div>
    </>
  );
};

export default Swap;
