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

export default function Navbar() {
  const classes = useStyles();
  const navLinks = [
    { id: "About", label: "About" },
    { id: "Portfolio", label: "Portfolio" },
    { id: "Contact", label: "Contact" },
  ];
  return (
    <AppBar className={classes.navbar} position='fixed'>
      <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
        <Typography variant='h5' component='h6'>
          `{"<GreatCoders />"}`
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
        <Box component={Hidden} xsUp>
          <IconButton color='inherit'>
            <MenuOpenRoundedIcon fontSize={"large"} />
          </IconButton>
        </Box>
      </Toolbar>
    </AppBar>
  );
}
