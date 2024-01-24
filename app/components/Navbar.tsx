"use client";
import React, { useState } from "react";
import Link from "next/link";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Drawer,
  useMediaQuery,
  Typography,
  AppBar,
  Box,
  Toolbar,
  IconButton,
} from "@mui/material";

const list = [
  { path: "/", name: "Wallet" },
  { path: "/transactions", name: "Transactions" },
  { path: "/send", name: "Send" },
];

export default function ButtonAppBar() {
  const [open, setOpen] = useState<boolean>(false);
  const isMobile = useMediaQuery("(max-width:899px)");
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static">
        <Toolbar>
          {isMobile && (
            <IconButton
              size="large"
              edge="start"
              color="inherit"
              aria-label="menu"
              sx={{ mr: 2 }}
              onClick={() => {
                debugger;
                console.log("open: ", open);
                setOpen(!open);
              }}
            >
              <MenuIcon />
            </IconButton>
          )}
          {isMobile && (
            <Drawer
              className="p-3"
              anchor="left"
              open={open}
              onClose={() => {
                setOpen(!open);
              }}
            >
              <Link
                onClick={() => {
                  setOpen(!open);
                }}
                className="me-3"
                href={"/"}
              >
                <Typography className="light" variant="h4">
                  Stables
                </Typography>
              </Link>
              {list.map((item, index) => (
                <Link
                  onClick={() => {
                    setOpen(!open);
                  }}
                  key={index}
                  href={item.path}
                  className="me-3"
                  passHref
                >
                  {item.name}
                </Link>
              ))}
            </Drawer>
          )}
          {!isMobile && (
            <Link className="me-3" href={"/"}>
              <Typography className="light" variant="h4">
                Stables
              </Typography>
            </Link>
          )}
          <Box sx={{ flexGrow: 1 }} />
          <Box sx={{ display: { xs: "none", md: "flex" } }}>
            {list.map((item, index) => (
              <Link key={index} href={item.path} className="me-3" passHref>
                {item.name}
              </Link>
            ))}
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
