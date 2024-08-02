// src/App.tsx
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { WagmiProvider } from "wagmi";

import Home from "./components/Home/Home";

import { QueryClient, QueryClientProvider } from "@tanstack/react-query";

import "./styles/index.scss";

import Trending from "./components/Trending/Trending";

import CustomHeader from "./components/Header/CustomHeader";

import { useConnect, useAccount } from "wagmi";

import { metaMask } from "wagmi/connectors";
import { config } from "./config";

const queryClient = new QueryClient();

function App() {
  return (
    <BrowserRouter basename="/dex-swap">
      <WagmiProvider config={config}>
        <QueryClientProvider client={queryClient}>
          <BrowserRouter>
            <CustomHeader />
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/trending" element={<Trending />} />
            </Routes>
          </BrowserRouter>
        </QueryClientProvider>
      </WagmiProvider>
    </BrowserRouter>
  );
}

export default App;
