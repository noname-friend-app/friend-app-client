import React from "react";
import ReactDOM from "react-dom/client";
import App from "./pages/App";
import reportWebVitals from "./reportWebVitals";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { ChakraProvider, ColorModeScript } from "@chakra-ui/react";
import { QueryClientProvider } from "react-query";
import { queryClient } from "./api";
import theme from "./utils/theme";
import { UserProvider } from "./utils/UserContext";
import Login from "./pages/Auth/Login";

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(
  <React.StrictMode>
    <QueryClientProvider client={queryClient}>
      <UserProvider>
        <ChakraProvider theme={theme}>
          <ColorModeScript initialColorMode={theme.config.initalColorMode} />
          <Router>
            <Routes>
              <Route path="/" element={<App />}></Route>
              <Route exact path="/login" element={<Login />} />
            </Routes>
          </Router>
        </ChakraProvider>
      </UserProvider>
    </QueryClientProvider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
