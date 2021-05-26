import React from "react";
import { Box, Container, Grid, Hidden } from "@material-ui/core";
import { useStyles } from "./bodyStyles";
import { CardMedia, RenderSectionHeading } from "../aCommon/commonComponent";
import aboutImage from "../../images/About.jpg";
import WebIcon from "@material-ui/icons/Web";
import BubbleChartIcon from "@material-ui/icons/BubbleChart";
import PhoneIphoneIcon from "@material-ui/icons/PhoneIphone";
import AcUnitIcon from "@material-ui/icons/AcUnit";

export default function AboutUs() {
  const classes = useStyles();

  const skills = [
    {
      icon: <WebIcon />,
      title: "Web Development",
      desc: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
    },
    {
      icon: <BubbleChartIcon />,
      title: "Graphic Design",
      desc: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
    },
    {
      icon: <PhoneIphoneIcon />,
      title: "Mobile Apps",
      desc: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
    },
    {
      icon: <AcUnitIcon />,
      title: "Marketing",
      desc: "Lorem ipsum dolor sit amet Consectetur adipisicing elit.",
    },
  ];

  return (
    <Box className={classes.section} id='About'>
      <Container maxWidth='xl'>
        <Grid container direction='row' spacing={2}>
          <Grid item sm={12} md={5}>
            <Box component={Hidden} smDown>
              <img
                src={aboutImage}
                alt={"about"}
                className={classes.responsiveImg}
              />
            </Box>
          </Grid>
          <Grid item sm={12} md={7}>
            {RenderSectionHeading({
              SmallText: "ABOUT US",
              Title: "Hello I'm Himanshu lal",
              Description:
                " A self taught developer who loves to codes something that wiil impact  majority of the people in good waay !",
            })}
            <br />
            <Box className={classes.cardLists}>
              <Grid container spacing={1}>
                {skills.map((item, i) => (
                  <Grid key={i} item xs={6} style={{ margin: "10px 0px" }}>
                    {CardMedia({
                      Icon: item.icon,
                      Title: item.title,
                      Desc: item.desc,
                    })}
                  </Grid>
                ))}
              </Grid>
            </Box>
          </Grid>
        </Grid>
      </Container>
    </Box>
  );
}
