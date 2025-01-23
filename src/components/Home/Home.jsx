import * as React from "react";
import ToggleButton from "@mui/material/ToggleButton";
import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import { Box, Paper } from "@mui/material";
import image from "../../assets/home/home1.png";
import android from "../../assets/home/android.png";
import ios from "../../assets/home/ios.jpg";
import web from "../../assets/home/web.png";

export default function Home() {
  const [alignment, setAlignment] = React.useState("web");

  const handleChange = (event, newAlignment) => {
    if (newAlignment !== null) {
      setAlignment(newAlignment);
    }
  };

  const getDynamicContent = () => {
    switch (alignment) {
      case "web":
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                sx={{ flex: 1 }}
                className="flex justify-center items-center text-center md:text-left"
              >
                <div>
                  <p className="text-[22px] text-gray-600 leading-relaxed mt-4">
                    The <strong>Care4Android Web</strong> platform allows you to
                    access support services anytime, anywhere. Manage your
                    account, explore troubleshooting guides, and access tips to
                    enhance your Android experience.
                  </p>
                </div>
              </Box>

              <Box
                sx={{ flex: 1 }}
                className="flex justify-center items-center"
              >
                <img
                  src={web}
                  alt="Home"
                  className="max-w-full h-auto object-contain"
                />
              </Box>
            </Box>
          </>
        );
      case "android":
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                sx={{ flex: 1 }}
                className="flex justify-center items-center text-center md:text-left"
              >
                <div>
                  <p className="text-[22px] text-gray-600 leading-relaxed mt-4">
                    The <strong>Care4Android Android App</strong> provides
                    real-time assistance, exclusive features, and optimized
                    performance tailored for your Android devices.
                  </p>
                </div>
              </Box>

              <Box
                sx={{ flex: 1 }}
                className="flex justify-center items-center"
              >
                <img
                  src={android}
                  alt="Home"
                  className="max-w-full h-auto object-contain"
                />
              </Box>
            </Box>
          </>
        );
      case "ios":
        return (
          <>
            <Box
              sx={{
                display: "flex",
                flexDirection: { xs: "column", md: "row" },
                justifyContent: "space-between",
                alignItems: "center",
                padding: 2,
              }}
            >
              <Box
                sx={{ flex: 1 }}
                className="flex justify-center items-center text-center md:text-left"
              >
                <div>
                  <p className="text-[22px] text-gray-600 leading-relaxed mt-4">
                    Access the <strong>Care4Android iOS</strong> application for
                    seamless cross-platform support. Manage your Android devices
                    and troubleshoot issues conveniently from your iOS device.
                  </p>
                </div>
              </Box>

              <Box
                sx={{ flex: 1 }}
                className="flex justify-center items-center"
              >
                <img
                  src={ios}
                  alt="Home"
                  className="max-w-full h-auto object-contain"
                />
              </Box>
            </Box>
          </>
        );
      default:
        return null;
    }
  };

  return (
    <>
      <Box
        sx={{
          display: "flex",
          flexDirection: { xs: "column", md: "row" },
          justifyContent: "space-between",
          alignItems: "center",
          height: "100vh",
          padding: 2,
          background: `linear-gradient(135deg, 
        color-mix(in srgb, #0d83fd, transparent 95%) 50%, 
        color-mix(in srgb, #0d83fd, transparent 98%) 25%, 
        transparent 50%)`,
        }}
      >
        <Box
          sx={{ flex: 1 }}
          className="flex justify-center items-center text-center md:text-left"
        >
          <div>
            <h2 className="text-5xl font-bold text-gray-800 mb-4">
              Welcome to <span className="text-[#0d83fd]">Care4Android</span>
            </h2>
            <p className="text-[22px] text-gray-600 leading-relaxed mt-4">
              With our comprehensive support services, you can get the most out
              of your Android experience.
            </p>
          </div>
        </Box>

        <Box sx={{ flex: 1 }} className="flex justify-center items-center">
          <img
            src={image}
            alt="Home"
            className="max-w-full h-auto object-contain"
          />
        </Box>
      </Box>

      <ToggleButtonGroup
        color="primary"
        value={alignment}
        exclusive
        onChange={handleChange}
        aria-label="Platform"
        sx={{ marginTop: 2, display: "flex", justifyContent: "center" }}
      >
        <ToggleButton value="web">Web</ToggleButton>
        <ToggleButton value="android">Android</ToggleButton>
        <ToggleButton value="ios">iOS</ToggleButton>
      </ToggleButtonGroup>

      <Box
        sx={{
          mt: 3,
          mx: "auto",
          maxWidth: "80%",
          padding: 3,
          borderRadius: 2,
        }}
        component={Paper}
      >
        {getDynamicContent()}
      </Box>
    </>
  );
}
