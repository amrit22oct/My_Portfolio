import { BrowserRouter } from "react-router-dom";
import AppNavigator from "./NewPortfolio/config/AppNavigator";

function App() {
  return (
    <BrowserRouter>
      <AppNavigator />
    </BrowserRouter>
  );
}

export default App;
