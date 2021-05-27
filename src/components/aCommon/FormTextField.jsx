import React from "react";
import { makeStyles } from "@material-ui/core";
import { TextField } from "@material-ui/core";
import { Theme } from "../Theme";

export const useStyles = makeStyles((theme) => ({
  cssLabel: {
    color: "#d3d3d3",
    "&.Mui-focused": {
      color: Theme.colors.primary,
    },
  },
  //input props root
  cssOutlinedInput: {
    "&:not(hover):not($disabled):not($cssFocused):not($error) $notchedOutline":
      {
        borderColor: Theme.colors.base2, //default
        opacity: 0.5,
      },
    "&:hover:not($disabled):not($cssFocused):not($error) $notchedOutline": {
      opacity: 1,
      borderColor: Theme.colors.base2, //hovered #DCDCDC
    },
    "&$cssFocused $notchedOutline": {
      borderColor: Theme.colors.primary, //focused
      color: Theme.colors.primary,
    },
  },
  notchedOutline: {},
  cssFocused: {},
  error: {},
  disabled: {},
}));

export default function CustomizedInputs({
  label,
  name,
  state,
  onChange,
  ...rest
}) {
  const classes = useStyles();
  const { data, errors } = state;
  return (
    <TextField
      InputLabelProps={{
        classes: {
          root: classes.cssLabel,
          focused: classes.cssFocused,
        },
      }}
      InputProps={{
        classes: {
          root: classes.cssOutlinedInput,
          focused: classes.cssFocused,
          notchedOutline: classes.notchedOutline,
        },
      }}
      type='text'
      variant='outlined'
      fullWidth={true}
      label={label}
      name={name}
      value={data[name]}
      error={errors[name] ? true : false}
      helperText={errors[name] ? errors[name] : ""}
      onChange={onChange}
      {...rest}
    />
  );
}
