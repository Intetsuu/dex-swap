const express = require("express");
const axios = require("axios");
const Moralis = require("moralis").default;
const cors = require("cors");
require("dotenv").config();

const app = express();
const port = 3001;

// Middleware
app.use(cors());
app.use(express.json());

// Moralis initialization
Moralis.start({ apiKey: process.env.MORALIS_KEY });

// Endpoint to fetch token prices
app.get("/tokenPrice", async (req, res) => {
  const { addressOne, addressTwo } = req.query;

  try {
    const responseOne = await Moralis.EvmApi.token.getTokenPrice({
      address: addressOne,
    });

    const responseTwo = await Moralis.EvmApi.token.getTokenPrice({
      address: addressTwo,
    });

    const usdPrices = {
      tokenOne: responseOne.raw.usdPrice,
      tokenTwo: responseTwo.raw.usdPrice,
      ratio: responseOne.raw.usdPrice / responseTwo.raw.usdPrice,
    };

    res.status(200).json(usdPrices);
  } catch (error) {
    console.error("Failed to fetch token prices", error);
    res.status(500).send("Failed to fetch token prices");
  }
});

// Endpoint to fetch Uniswap quote
app.get("/api/quote", async (req, res) => {
  const { inputToken, outputToken, amount } = req.query;
  const url = `https://api.uniswap.org/v2.0/quote?inputToken=${inputToken}&outputToken=${outputToken}&amount=${amount}`;

  try {
    const response = await axios.get(url);
    res.json(response.data);
  } catch (error) {
    console.error("Failed to fetch quote", error);
    res.status(500).send("Failed to fetch quote");
  }
});

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
