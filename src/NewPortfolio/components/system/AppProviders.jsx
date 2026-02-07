import ErrorBoundary from "./ErrorBoundary";
import { ThemeProvider } from "../../context/ThemeContext";
import ScrollToTop from "./ScrollToTop";

const AppProviders = ({ children }) => {
  return (
    <ErrorBoundary>
      <ThemeProvider>
        <ScrollToTop />
        {children}
      </ThemeProvider>
    </ErrorBoundary>
  );
};

export default AppProviders;
