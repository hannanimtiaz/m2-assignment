import React from "react";
import { Tranaction } from "../common/types";
import { Unstable_Grid2 as Grid } from "@mui/material";
import TransactionTable from "../components/transactionTable";
import { Box, Card, CardContent, Container, Typography } from "@mui/material";

export default function Transactions() {
  const transactions: Tranaction[] = [
    {
      id: 1,
      to: "cas09082812h3j1b2",
      from: "walletAdress",
      amount: 1000,
      type: "recieved",
    },
    {
      id: 2,
      to: "walletAddress",
      from: "cas09082812h3j1b2",
      amount: 1000,
      type: "sent",
    },
    {
      id: 3,
      to: "cas09082812h3j1b2",
      from: "walletAdress",
      amount: 10,
      type: "recieved",
    },
    {
      id: 4,
      to: "cas09082812h3j1b2",
      from: "walletAdress",
      amount: 60,
      type: "recieved",
    },
    {
      id: 5,
      to: "walletAdress",
      from: "cas09082812h3j1b2",
      amount: 2000,
      type: "sent",
    },
  ];

  return (
    <Box>
      <Container maxWidth="xl">
        <Typography className="light" variant="h3">
          Summary
        </Typography>
        <Grid container spacing={2}>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Total Transactions</Typography>
                <Typography variant="body1">{transactions.length} </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Total recived</Typography>
                <Typography variant="body1">3123123 </Typography>
              </CardContent>
            </Card>
          </Grid>
          <Grid xs={12} md={4}>
            <Card>
              <CardContent>
                <Typography variant="h5">Total sent</Typography>
                <Typography variant="body1">10000 </Typography>
              </CardContent>
            </Card>
          </Grid>
        </Grid>
        <TransactionTable transactions={transactions} />
      </Container>
    </Box>
  );
}
