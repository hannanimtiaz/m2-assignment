"use client";
import Swal from "sweetalert2";
import React, { useState } from "react";
import {
  Box,
  Card,
  CardContent,
  Button,
  FormControl,
  TextField,
  Unstable_Grid2 as Grid,
  CardActions,
} from "@mui/material";

const initialData = { receiver: "", amount: "", edited: false };

const SendForm: React.FC = () => {
  const [data, setData] = useState(initialData);
  const [errors, setErrors] = useState<{
    receiver: boolean;
    amount: boolean;
  }>({
    receiver: false,
    amount: false,
  });

  const checkValidity = ({ name, value }: { name: string; value: string }) => {
    // This can be handled using a config for fields
    if (name == "receiver" && value.length <= 0) {
      return true;
    } else if (name == "amount" && value.length <= 0) {
      return true;
    } else {
      return false;
    }
  };

  const handleChange = ({ name, value }: { name: string; value: string }) => {
    let error = checkValidity({ name, value });
    setErrors({ ...errors, [name]: error });
    setData({ ...data, [name]: value, edited: true });
  };

  const submit = (e: any) => {
    e.preventDefault();
    if (data.edited) {
      var check = Object.values(errors).every(function (value) {
        return value == false;
      });
      if (check) {
        Swal.fire({
          title: `Are you sure? you want to send ${data.amount} coins`,
          text: "You won't be able to revert this!",
          icon: "warning",
          showCancelButton: true,
          confirmButtonColor: "#3085d6",
          cancelButtonColor: "#d33",
          confirmButtonText: "Yup, send em!",
        }).then((result) => {
          if (result.isConfirmed) {
            Swal.fire({
              icon: "success",
              title: "Transaction Successfull",
            });
          }
        });
      } else {
        Swal.fire({
          icon: "error",
          title: "Oops! check your fields",
        });
      }
    } else {
      Swal.fire({
        icon: "warning",
        title: "Woah There! You need to write something first.",
      });
    }
  };

  return (
    <Grid className={"mt-5 text-center"} container spacing={2}>
      <Card
        sx={{ minWidth: 275, maxWidth: 1000, width: "100%" }}
        className={"mx-auto text-centre"}
      >
        <Box
          component="form"
          onSubmit={(e) => {
            e.preventDefault();
            submit(e);
          }}
        >
          <CardContent>
            <FormControl fullWidth>
              <TextField
                margin="normal"
                aria-label="Receiver Address"
                label="Receiver Address"
                name="receiver"
                error={errors["receiver"]}
                value={data["receiver"]}
                placeholder="Enter Receiver Address"
                onChange={(e) => {
                  handleChange({
                    name: e.target.name,
                    value: e.target.value.trim(),
                  });
                }}
              />
              <TextField
                margin="normal"
                aria-label="Amount"
                label="Amount"
                error={errors["amount"]}
                name="amount"
                value={data["amount"]}
                type="number"
                placeholder="Enter Receiver Address"
                onChange={(e) =>
                  handleChange({
                    name: e.target.name,
                    value: e.target.value.trim(),
                  })
                }
              />
            </FormControl>
            <CardActions>
              <Button type="submit" variant="contained">
                Update
              </Button>
            </CardActions>
          </CardContent>
        </Box>
      </Card>
    </Grid>
  );
};

export default SendForm;
