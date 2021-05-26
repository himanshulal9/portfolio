import { createMuiTheme, ThemeProvider } from "@material-ui/core";
import HeaderComponent from "./components/headerComponents/headerComponent";
import "./App.css";

const theme = createMuiTheme({
  breakpoints: {
    values: {
      xs: 0,
      sm: 600,
      md: 768,
      lg: 992,
      xl: 1280,
      xxl: 1920,
    },
  },
});

function App() {
  return (
    <ThemeProvider theme={theme}>
      <HeaderComponent />;
    </ThemeProvider>
  );
  // return "hello worlds";
}

export default App;
