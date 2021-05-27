import { Container } from "@material-ui/core";
import React from "react";
import { useStyles } from "./headerStyles";
import Navbar from "./navbar";
import Typed from "react-typed";
import { DecoratorLabel } from "../aCommon/commonComponent";
import ScrollAnimation from "react-animate-on-scroll";

export default function HeaderComponent() {
  const classes = useStyles();
  return (
    <div className={classes.header} id='header'>
      <div className={classes.headerWrapper}>
        <Navbar />
        <Container className={classes.displayContainer}>
          <h1 className={classes.displayTextTitle}>
            I'm a <span style={{ paddingRight: "5px" }}></span>
            <Typed
              strings={[
                " Webdeveloper,",
                " UI/UX Designer,",
                " Digital Expert,",
              ]}
              typeSpeed={30}
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
