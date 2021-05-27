import React from "react";
import { Box, Button, Container, Grid, Typography } from "@material-ui/core";
import { useStyles } from "./bodyStyles";
import { RenderSectionHeading } from "../aCommon/commonComponent";
import ScrollAnimation from "react-animate-on-scroll";

//import in ht eimages
import Image1 from "../../images/5-2.jpg";
import Image2 from "../../images/5-3.jpg";
import Image3 from "../../images/5-4.jpg";
import Image4 from "../../images/5-6.jpg";
import Image5 from "../../images/5-8.jpg";
import Image6 from "../../images/5-9.jpg";

export default function Portfolio() {
  const classes = useStyles();

  const portfolio = [
    { url: Image1, icon: "", name: "# PortFolio 1" },
    { url: Image2, icon: "", name: " # PortFolio 2" },
    { url: Image3, icon: "", name: " # PortFolio 3" },
    { url: Image4, icon: "", name: " # PortFolio 4" },
    { url: Image5, icon: "", name: " # PortFolio 5" },
    { url: Image6, icon: "", name: " # PortFolio 6" },
  ];

  return (
    <Box className={classes.sectionDark} id='Portfolio'>
      <ScrollAnimation animateIn='fadeIn'>
        <Container maxWidth='xl'>
          <Grid container direction='row' justify='center' alignItems='center'>
            <Grid item sm={12} md={5}>
              {RenderSectionHeading({
                SmallText: "PortFolio",
                Title: "Let's See My Work",
                AllCenter: true,
                Dec_Styles: { margin: "0px auto", width: "100px" },
              })}
            </Grid>
          </Grid>
          {/* now image section  */}
          <Grid container className={classes.imageContaienr} spacing={2}>
            {portfolio.map((item, i) => (
              <Grid
                key={i}
                item
                xs={6}
                sm={6}
                md={4}
                className={classes.portFolioImageWrap}>
                <img
                  src={item.url}
                  alt={"grooming"}
                  className={classes.image}
                />
                <Box className={classes.imgOverlay}>
                  <Typography variant='h5' component='h5' align='center'>
                    {item.name}
                  </Typography>
                  <Button variant='contained' style={{ margin: "10px 0px" }}>
                    Visit
                  </Button>
                </Box>
              </Grid>
            ))}
          </Grid>
        </Container>
      </ScrollAnimation>
    </Box>
  );
}
