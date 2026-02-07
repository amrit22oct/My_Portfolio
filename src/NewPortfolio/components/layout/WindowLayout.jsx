import Navbar from "./Navbar";
import Footer from "./Footer";
import Background from "./Background";
import CursorTrail from "./CursorTrail";

const WindowLayout = ({ children }) => {
  return (
    <div
      className="
        min-h-screen
        bg-[#f5f7fb] dark:bg-[#0f1220]
        text-black dark:text-white
        transition-colors duration-500
        relative overflow-x-hidden
      "
    >
      {/* Visual layers */}
      <Background />
      <CursorTrail />

      {/* Main Content Layer */}
      <div className="relative z-10 flex flex-col min-h-screen">
        <Navbar />

        {/* Page Content */}
        <main className="flex-1 pt-[120px]">{children}</main>

        <Footer />
      </div>
    </div>
  );
};

export default WindowLayout;
