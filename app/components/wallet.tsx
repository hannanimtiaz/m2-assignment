"use client";
import Image from "next/image";
import { User } from "../common/types";
import { useRouter } from "next/navigation";
import { Upload, List } from "@mui/icons-material";
import React, { useEffect, useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Typography,
  Button,
  Unstable_Grid2 as Grid,
} from "@mui/material";

interface WalletProps {
  user: User;
}

const Wallet: React.FC<WalletProps> = ({ user }) => {
  const router = useRouter();

  const [userObj, setUserObj] = useState<User>(user);

  useEffect(() => {
    setUserObj(user);
  }, [user]);

  return (
    <Grid className={"mt-5 text-center"} container spacing={2}>
      <Grid xs={12}>
        <Card
          sx={{ minWidth: 275, maxWidth: 1000, width: "100%" }}
          className={"mx-auto text-centre"}
        >
          <CardContent className="text-center">
            <div className="d-flex">
              <div
                className="mx-auto"
                style={{
                  borderRadius: "60px",
                  overflow: "hidden",
                  position: "relative",
                  width: "100px",
                  height: "100px",
                }}
              >
                <Image src={userObj.avatar} alt="Profile picture" fill={true} />
              </div>
            </div>

            <Typography variant="h1" color="text.secondary" gutterBottom>
              {userObj.name}
            </Typography>
            <Typography variant="h4" component="div">
              {userObj.coins} Coins
            </Typography>
          </CardContent>
        </Card>
      </Grid>
      <Grid
        xs={12}
        sx={{ minWidth: 275, maxWidth: 1000, width: "100%" }}
        className={"mt-5 text-center mx-auto"}
        container
        spacing={2}
      >
        <Grid xs={6}>
          <Button
            className="purple"
            aria-label="Recieved History"
            variant="contained"
            endIcon={<Upload />}
            onClick={() => {
              router.push("/send");
            }}
          >
            <Typography variant="button">
              <Box sx={{ fontWeight: "bold" }}>Send Coins</Box>
            </Typography>
          </Button>
        </Grid>
        <Grid xs={6}>
          <Button
            className="purple"
            aria-label="Recieved History"
            variant="contained"
            endIcon={<List />}
            onClick={() => {
              router.push("/transactions");
            }}
          >
            <Typography variant="button">
              <Box sx={{ fontWeight: "bold" }}>Transactions</Box>
            </Typography>
          </Button>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default Wallet;
