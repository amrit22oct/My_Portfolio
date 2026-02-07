import { BrowserRouter } from "react-router-dom";
import AppNavigator from "./NewPortfolio/config/AppNavigator";
import AppProviders from "./NewPortfolio/components/system/AppProviders";


function App() {
  return (
    <BrowserRouter>
      <AppProviders>
        <AppNavigator />
      </AppProviders>
    </BrowserRouter>
  );
}

export default App;
