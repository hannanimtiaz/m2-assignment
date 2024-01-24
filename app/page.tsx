import React from "react";
import Wallet from "./components/wallet";
import { Box, Container, Typography } from "@mui/material";

export default function Home() {
  const user = {
    name: "Hannan Imtiaz",
    coins: 20000,
    avatar: "/avatar.png",
    walletAddress: "cas09082812h3j1b2",
  };

  return (
    <Box>
      <Container maxWidth="xl">
        <Typography className="light" variant="h3">
          Wallet
        </Typography>
        <Wallet user={user} />
      </Container>
    </Box>
  );
}
