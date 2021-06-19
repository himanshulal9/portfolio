import React from "react";
import {
  Drawer,
  Button,
  Paper,
  List,
  ListItem,
  ListItemText,
} from "@material-ui/core";
import { Link } from "react-scroll";
import { useStyles } from "./headerStyles";

export default function DrawerComponent({
  navLinks,
  initialState,
  handleDrawerOpen,
}) {
  const classes = useStyles();
  return (
    <Drawer
      anchor='left'
      variant='temporary'
      classes={{ paper: classes.drawer }}
      open={initialState}
      onClose={handleDrawerOpen}
      ModalProps={{
        keepMounted: true, // Better open performance on mobile.
      }}>
      <Paper className={classes.drawer}>
        <List style={{ paddingTop: "100px" }}>
          {navLinks.map((item, i) => (
            <ListItem key={i} component={Button} onClick={handleDrawerOpen}>
              <Link to={`${item.id}`}>
                <ListItemText style={{ textAlign: "center", color: "white" }}>
                  {item.label}
                </ListItemText>
              </Link>
            </ListItem>
          ))}
        </List>
      </Paper>
    </Drawer>
  );
}
