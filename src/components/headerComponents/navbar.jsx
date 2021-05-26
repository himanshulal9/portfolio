import React from "react";
import {
  AppBar,
  Box,
  Button,
  Hidden,
  IconButton,
  Toolbar,
  Typography,
} from "@material-ui/core";
import { useStyles } from "./headerStyles";
import Scrollspy from "react-scrollspy";
import { NavLink } from "react-router-dom";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";

export default function Navbar() {
  const classes = useStyles();
  const navLinks = [
    { id: "About", label: "About" },
    { id: "Portfolio", label: "Portfolio" },
    { id: "Contact", label: "Contact" },
  ];
  return (
    <AppBar className={classes.navbar}>
      <Toolbar component={Box} display='flex' justifyContent='space-between'>
        <Typography variant='h5' component='h6'>
          GreatCoders{" "}
        </Typography>
        <Box component={Hidden} only={["xs"]}>
          <Scrollspy
            items={["About", "portfolio", "contact"]}
            currentClassName='is-current'>
            {navLinks.map((item, i) => (
              <Button
                color='inherit'
                key={i}
                component={NavLink}
                to={`#${item.label}`}>
                {item.label}
              </Button>
            ))}
          </Scrollspy>
        </Box>
        <Box component={Hidden} xsUp>
          <IconButton color='inherit'>
            <MenuOpenRoundedIcon fontSize={"large"} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
