import React from "react";
import { useAccount, useConnect } from "wagmi";
import { metaMask } from "wagmi/connectors";
import styles from "./CustomHeader.module.scss";
import logo from "./img/logo.svg";
import eth from "./img/eth.svg";
import { Link } from "react-router-dom";

const CustomHeader: React.FC = () => {
  const { address, isConnected } = useAccount();
  const { connect, connectors } = useConnect();

  const connectMetaMask = () => {
    const metaMaskConnector = connectors.find(
      (connector) => connector.name === "MetaMask"
    );
    if (metaMaskConnector) {
      //@ts-ignore
      connect(metaMaskConnector);
    }
  };

  return (
    <ul className={styles.header}>
      <div className={styles.wrapper}>
        <div className={styles.logo}>
          <Link to="/" state={{ fromLocation: true }}>
            <img src={logo} alt="Logo" />
          </Link>
          <Link to="/swap">
            <h1>Swap</h1>
          </Link>
          <Link to="/trending">
            <h1>Trending</h1>
          </Link>
        </div>
        <div className={styles.navbar}>
          <img src={eth} alt="eth" className={styles.eth} />
          <h1>Ethereum</h1>
          <div onClick={connectMetaMask} className={styles.connectButton}>
            {isConnected
              ? address
                ? `${address.slice(0, 4)}...${address.slice(-4)}`
                : "No Address"
              : "Connect"}
          </div>
        </div>
      </div>
    </ul>
  );
};

export default CustomHeader;
