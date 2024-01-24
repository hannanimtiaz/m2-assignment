import React from "react";
import SendForm from "../components/sendForm";
import { Box, Typography, Container } from "@mui/material";

export default function Send() {
  return (
    <Box>
      <Container maxWidth="xl">
        <Typography className="light" variant="h3">
          Send
        </Typography>
        <SendForm />
      </Container>
    </Box>
  );
}
