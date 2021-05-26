import { Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./headerStyles";
import Navbar from "./navbar";
import Typed from "react-typed";
import { DecoratorLabel } from "../aCommon/commonComponent";

export default function HeaderComponent() {
  const classes = useStyles();
  return (
    <div className={classes.header}>
      <div className={classes.headerWrapper}>
        <Navbar />
        <Container className={classes.displayContainer}>
          <h1 className={classes.displayTextTitle}>
            I'm a <span style={{ paddingRight: "5px" }}></span>
            <Typed
              strings={[
                " Webdeveloper,",
                " UI/UX Designer,",
                " Graphic Designer,",
              ]}
              typeSpeed={40}
              backSpeed={50}
              loop
            />
          </h1>
          <h3 className={classes.displayTextDescription}>
            I Create website and application,
            <br /> Based on your needs...
          </h3>

          {DecoratorLabel({ label: "About Me", withIcon: true })}
        </Container>
      </div>
    </div>
  );
}
