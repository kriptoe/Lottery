import { fetchTokenURI } from "./utils"; // Adjust the path as needed
import React, {  useState, useEffect } from "react";
import { ConnectButton } from '@rainbow-me/rainbowkit';
import { useContractRead } from "wagmi";
import { ethers } from "ethers";
//import lotteryContract from "../contracts/Lottery.json"; // Raw ABI import (pulled from etherscan)
import Navbar from "./Navbar"; // Import the Navbar component
import styles from "../styles/index.module.css";
import CountdownTimer2 from "./timer";
import Image from 'next/image';


export default function NumberSelection() {

  const FLOOR101_ADDRESS = "0x3A34a686148dAAb2A473D63b077c5AaF44cb8C2D";   // sep polygon  
  const Lotto_ADDRESS = "0xd58b6c882D163b4D9D63FC4F3f86Be8dad7DF36a";  // polygon

  //const {address, isConnected} = useAccount();
  const [ethSale, setEthSale] = useState(0);  // cost of NFTs being purchased
  const [endDate, setEndDate] = useState(0);  // the time/date the lottery ends 
  const [txHash, setTxHash] = useState(0);
   // State to store selected numbers for each game
  const [selectedNumbers, setSelectedNumbers] = useState([]);
  const [saleSucceeded, setSaleSucceeded] = useState(false);
  const [submitButtonText, setSubmitButtonText] = useState('Submit');
  const [nftImageUrl, setNftImageUrl] = useState(''); // State to store the NFT image URL
  const [isPulsing, setIsPulsing] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [numGames, setNumGames] = useState(1); // State to store the number of games selected
  const [nftPurchased, setNftPurchased] = useState(false); // New state for tracking NFT purchase

  const endDate2 = BigInt(endDate); // Replace this with the number of seconds you want to add
  const currentDate = new Date();
  const targetDate = new Date(currentDate.getTime() + Number(endDate2) * 1000);
  const [contractBalance, setContractBalance] = useState(ethers.BigNumber.from(0));
  const entryFee = 0.1;  // entryFee

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

 







  return (
    
<div className="second-background-container">
  {/* Add a vertical gap of 20px */}
  <div style={{ height: '10px' }} />
  <div style={{ display: 'flex', justifyContent: 'center' }}>
    <div className={styles.backgroundContainer}>
      <div className={styles.contentContainer}>
        <div className={styles.navbarContainer}>
          <Navbar isMenuOpen={isMenuOpen} toggleMenu={toggleMenu} />
        </div>
        <ConnectButton />
      </div>
    </div>
  </div>

  {/* Add a vertical gap of 20px */}
  <div style={{ height: '20px' }} />
  <div className="container" style={{ backgroundColor: '#fff', padding: '10px', margin: '0 auto', borderRadius: '20px', maxWidth: '600px' }}>
    <h1 className="second-h1" style={{ textAlign: 'center' }}>We have moved to dgenlotto.com</h1>
    <h1 className="second-h1" style={{ textAlign: 'center' }}>Current Prizepool  MATIC</h1>
    <div style={{ textAlign: 'center'}}>Select 3 Numbers: 0.1 matic per game</div>


  </div>


  {/* CSS Styles */}
  <style>
    {`
      @keyframes pulse {
        0% {
          transform: scale(1);
        }
        50% {
          transform: scale(1.1);
        }
        100% {
          transform: scale(1);
        }
      }
      .pulsing {
        animation: pulse 1s infinite;
      }
      .horizontalGap {
        width: 20px; /* Set the width of the horizontal gap */
      }
      .numberButton {
        margin: 5px;
        padding: 10px 15px;
        font-size: 16px;
        border-radius: 5px;
        border: 1px solid #ccc;
        background-color: #fff;
        cursor: pointer;
        flex: 1;
        text-align: center;
        max-width: 70px; /* Adjust the max-width as needed */
      }
      .numberButton.selected {
        background-color: #0d6efd;
        color: #fff;
      }
      .numberRow {
        display: flex;
        justify-content: center;
      }

      /* Media Query for Mobile Phones */
      @media (max-width: 600px) {
        .container {
          width: 90%; /* Reduce width to 90% for better fit on smaller screens */
        }
      }
    `}
  </style>

</div>


  );
  
  ;
}