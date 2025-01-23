import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import WhyChooseUs from "./components/WhyChooseUs/WhyChooseUs";
import Blogs from "./components/Blogs/Blogs";
import Footer from "./components/Footer/Footer";

import Fab from "@mui/material/Fab";
import KeyboardArrowUpIcon from "@mui/icons-material/KeyboardArrowUp";
import WhatsAppIcon from "@mui/icons-material/WhatsApp";

import "./App.css";

function App() {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const openWhatsApp = () => {
    const phone = "+919988776655";
    const message = "Hi, I need assistance!";
    window.open(
      `https://wa.me/${phone}?text=${encodeURIComponent(message)}`,
      "_blank"
    );
  };

  return (
    <>
      <Header />
      <Home />
      <WhyChooseUs />
      <Blogs />
      <Footer />

      <div
        style={{
          position: "fixed",
          bottom: 16,
          right: 16,
          display: "flex",
          flexDirection: "column",
          gap: "12px",
          zIndex: 1000,
        }}
      >
        <Fab color="primary" aria-label="scroll-to-top" onClick={scrollToTop}>
          <KeyboardArrowUpIcon />
        </Fab>

        <Fab color="success" aria-label="whatsapp" onClick={openWhatsApp}>
          <WhatsAppIcon />
        </Fab>
      </div>
    </>
  );
}

export default App;
