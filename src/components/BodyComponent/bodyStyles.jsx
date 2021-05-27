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
    margin: theme.spacing(4, 0, 3, 0),
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
}));
