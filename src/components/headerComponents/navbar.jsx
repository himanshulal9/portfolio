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
import { Link } from "react-scroll";
import MenuOpenRoundedIcon from "@material-ui/icons/MenuOpenRounded";
import { Theme } from "../Theme";

export default function Navbar({ navLinks, handleDrawerOpen }) {
  const classes = useStyles();

  return (
    <AppBar
      className={classes.navbar}
      position='fixed'
      style={{ backgroundColor: Theme.colors.base1 }}>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='h5' component='h6'>
          {"<GreatCoders />"}
        </Typography>
        <Box component={Hidden} only={["xs"]}>
          <Box>
            {navLinks.map((item, i) => (
              <Button
                key={i}
                activeClass='active'
                to={`${item.id}`}
                spy={true}
                smooth={true}
                offset={-70}
                duration={500}
                color='inherit'
                component={Link}>
                {item.label}
              </Button>
            ))}
          </Box>
        </Box>
        <Box component={Hidden} smUp>
          <IconButton
            color='inherit'
            onClick={() => {
              handleDrawerOpen();
              console.log("handledrawer run ");
            }}>
            <MenuOpenRoundedIcon fontSize={"large"} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
