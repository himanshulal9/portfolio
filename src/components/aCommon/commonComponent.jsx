import React from "react";
import { Avatar, Box, Grid, Typography } from "@material-ui/core";
import ArrowDownwardIcon from "@material-ui/icons/ArrowDownward";
import { useStyles } from "../headerComponents/headerStyles";
import { useStyles as bodyStyles } from "../BodyComponent/bodyStyles";

export const DecoratorLabel = ({ label, withIcon, styles }) => {
  const classes = useStyles();
  return (
    <Box className={classes.TitleWithDecorator} style={styles}>
      <Typography className={classes.decoratorText}> {label}</Typography>
      {withIcon ? <ArrowDownwardIcon className={classes.arrow} /> : null}
    </Box>
  );
};

export const RenderSectionHeading = ({
  SmallText,
  Title,
  Description,
  AllCenter,
  Dec_Styles,
}) => {
  const classes = useStyles();
  return (
    <Box className={classes.secHeadingBox}>
      {DecoratorLabel({ label: SmallText, styles: Dec_Styles })}
      <Typography
        variant='h4'
        className={classes.secHeadingTitle}
        align={AllCenter ? "center" : "left"}>
        {Title}
      </Typography>
      {RenderDivider({ styles: AllCenter ? { margin: "16px auto" } : null })}
      <Typography
        component='p'
        className={classes.secHeadingDesc}
        align={AllCenter ? "center" : "left"}>
        {Description}
      </Typography>
    </Box>
  );
};

export const RenderDivider = ({ styles }) => {
  const classes = useStyles();
  return <div variant='span' className={classes.spanDivider} style={styles} />;
};

export const CardMedia = ({ Icon, Title, Desc }) => {
  const classes = bodyStyles();
  return (
    <Grid container>
      <Grid
        item
        xs={3}
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}>
        <Avatar className={classes.avatar}>{Icon}</Avatar>
      </Grid>
      <Grid item xs={9}>
        <Typography
          color='inherit'
          variant='body1'
          component='h6'
          guttenbottom='true'>
          {Title}
        </Typography>
        <Typography
          color='inherit'
          component='caption-text'
          guttenbottom='true'>
          {Desc}
        </Typography>
      </Grid>
    </Grid>
  );
};
