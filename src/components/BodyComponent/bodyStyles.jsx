import { makeStyles } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  section: {
    backgroundColor: Theme.colors.primary2,
    padding: theme.spacing(10, 0, 7, 0),
    color: Theme.colors.base2,
  },
  sectionDark: {
    backgroundColor: Theme.colors.primary1,
    padding: theme.spacing(10, 0, 7, 0),
    color: Theme.colors.base2,
  },
  responsiveImg: {
    width: "100%",
    height: "auto",
  },
  cardLists: {
    margin: theme.spacing(3, 0, 2, 0),
  },
  avatar: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    width: "45px",
    height: "45px",
  },
  imageContaienr: {
    padding: theme.spacing(4, 0, 3, 0),
  },

  portFolioImageWrap: {
    position: "relative",
    "&:hover $imgOverlay": {
      opacity: 1,
    },
  },
  imgOverlay: {
    width: "96%",
    height: "95%",
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    opacity: 0,
    transition: "0.8s",
    position: "absolute",
    bottom: "10px",
    display: "flex",
    flexFlow: "column",
    justifyContent: "center",
    alignItems: "center",
    [theme.breakpoints.down("xs")]: {
      height: "85%",
    },
  },
  overlayText: {
    fontSize: "2em",
    textAlign: "center",
    [theme.breakpoints.down("xs")]: {
      fontSize: "1em",
    },
  },
  overlayBtn: {
    marginTop: theme.spacing(2),
    "&:hover": {
      marginTop: theme.spacing(2),
      backgroundColor: Theme.colors.primary1,
      color: Theme.colors.base2,
    },
  },
  image: {
    width: "100%",
    height: "auto",
  },

  gridItem: {
    marginBottom: "20px",
  },
  submitButton: {
    backgroundColor: Theme.colors.primary,
    color: Theme.colors.base2,
    "&:hover": {
      backgroundColor: Theme.colors.primary1,
    },
  },

  // footer styles
  footerContainer: {
    padding: theme.spacing(2),
    backgroundColor: Theme.colors.primary1,
    color: Theme.colors.base2,
    position: "relative",
  },
  arrowTop: {
    position: "absolute",
    top: "-25px",
    right: "5px",
    backgroundColor: "rgba(0,0,0,0.3)",
  },
}));
