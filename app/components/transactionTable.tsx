"use client";
import React, { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableContainer,
  TableHead,
  TableRow,
} from "@mui/material";

import { Tranaction } from "../interfaces/tranaction";
import { ArrowUpward, ArrowDownward } from "@mui/icons-material";

interface TransactionTableProps {
  transactions: Array<Tranaction>;
}
const TransactionTable: React.FC<TransactionTableProps> = ({
  transactions,
}) => {
  const [transactioRows, setTransactionRows] =
    useState<Tranaction[]>(transactions);

  useEffect(() => {
    setTransactionRows(transactions);
  }, [transactions]);

  return (
    <TableContainer className="mt-4">
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Transaction Id</TableCell>
            <TableCell>From</TableCell>
            <TableCell>To</TableCell>
            <TableCell>Amount</TableCell>
            <TableCell>Type</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {transactioRows.map((row) => (
            <TableRow
              key={row.id}
              sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.id}
              </TableCell>
              <TableCell>{row.to}</TableCell>
              <TableCell>{row.from}</TableCell>
              <TableCell>{row.amount}</TableCell>
              <TableCell>
                {row.type === "sent" ? (
                  <ArrowUpward color="error" />
                ) : (
                  <ArrowDownward color="success" />
                )}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};
export default TransactionTable;
