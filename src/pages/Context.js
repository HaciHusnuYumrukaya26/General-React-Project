
import React from "react";

import Container from "../componentContext/Container";
import {ThemeProvider} from "../context/ThemeContext";
import { UserProvider } from "../context/UserContext";

const Context = () => {
  return (
    <ThemeProvider>
      		<UserProvider>
				<Container />
			</UserProvider>
    </ThemeProvider>);
};

export default Context;
