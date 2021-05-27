import { makeStyles } from "@material-ui/core";
import image from "../../images/brandBanner.jpg";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  header: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    background: `linear-gradient(to bottom right, #04303140, #00606473),url(${image})`,
    backgroundSize: "cover",
    backgroundRepeat: "no-repeat",
  },
  headerWrapper: {
    width: "100%",
    minHeight: "90vh",
    height: "auto",
    display: "flex",
    flexFlow: "row wrap",
    justifyContent: "center",
    alignItems: "center",
  },
  navbar: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
  },
  displayContainer: {
    paddingTop: "20px",
    color: Theme.colors.base2,
  },
  displayTextTitle: {
    fontSize: "3rem",
    fontWeight: "bolder",
    color: " white",
    margin: "16px 0px",
    fontFamily: "roboto",
    [theme.breakpoints.down("sm")]: {
      fontSize: "2.3rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.8rem",
      margin: "8px 0px",
    },
  },
  displayTextDescription: {
    fontSize: "2rem",
    fontWeight: "bold",
    color: " white",
    margin: "16px 0px",
    fontFamily: "roboto",
    textTransform: "capitalize",
    [theme.breakpoints.down("sm")]: {
      fontSize: "1.8rem",
    },
    [theme.breakpoints.down("xs")]: {
      fontSize: "1.3rem",
      margin: "8px 0px",
    },
  },

  TitleWithDecorator: {
    position: "relative",
    marginTop: "50px",
    display: "flex",
    "&:before": {
      top: 0,
      left: 0,
      width: "36px",
      height: "36px",
      content: '""',
      position: "absolute",
      borderRadius: "50%",
      background: Theme.colors.primary,
    },
  },
  decoratorText: {
    position: "relative",
    fontSize: "16px",
    fontWeight: 700,
    padding: "8px 0 8px 16px",
  },
  arrow: {
    paddingTop: "8px",
    animationName: "enter",
    animationDuration: "0.7s",
    animationIterationCount: "infinite",
  },
  "@global": {
    "@keyframes enter": {
      "0%": {
        transform: "scale(0)",
        paddingTop: "0px",
      },
      "100%": {
        transform: "scale(1)",
        paddingTop: "10px",
      },
    },
  },

  spanDivider: {
    width: "63px",
    height: "4px",
    backgroundColor: Theme.colors.primary,
    margin: theme.spacing(2, 0),
  },

  drawer: {
    width: "250px",
    height: "100vh",
    background: Theme.colors.primary1,
    color: Theme.colors.base2,
  },
}));
