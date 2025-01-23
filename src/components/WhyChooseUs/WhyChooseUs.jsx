import {
  Box,
  Typography,
  Grid,
  Card,
  CardActionArea,
  CardContent,
  CardMedia,
  Accordion,
  AccordionSummary,
  AccordionDetails,
} from "@mui/material";

import realtime from "../../assets/services/realtime.png";
import device from "../../assets/services/device.png";
import crossplatform from "../../assets/services/crossplatform.png";
import securebackup from "../../assets/services/secure.png";
import comprehensive from "../../assets/services/tutorial.png";
import custom from "../../assets/services/custom.png";

import { useState } from "react";

export default function WhyChooseUs() {
  const [expanded, setExpanded] = useState("panel1");

  const handleChange = (panel) => (event, newExpanded) => {
    setExpanded(newExpanded ? panel : false);
  };

  const services = [
    {
      title: "Real-Time Assistance",
      description:
        "Get instant help with your Android devices for troubleshooting and support.",
      image: realtime,
    },
    {
      title: "Device Optimization",
      description:
        "Optimize your device's performance with our tailored suggestions and tools.",
      image: device,
    },
    {
      title: "Cross-Platform Support",
      description:
        "Access services across web, Android, and iOS platforms seamlessly.",
      image: crossplatform,
    },
    {
      title: "Secure Backup",
      description: "Keep your data safe with our secure backup solutions.",
      image: securebackup,
    },
    {
      title: "Comprehensive Tutorials",
      description:
        "Learn how to get the best out of your Android device with step-by-step guides.",
      image: comprehensive,
    },
    {
      title: "Custom Notifications",
      description:
        "Receive personalized updates and reminders to stay on track.",
      image: custom,
    },
  ];

  const faqs = [
    {
      question: "What is Care4Android?",
      answer:
        "Care4Android is an app designed to optimize, secure, and enhance your Android device with real-time support, device optimization tools, backup solutions, and more.",
    },
    {
      question: "How can I optimize my Android device?",
      answer:
        "Use our device optimization tools that help boost performance, improve battery life, and free up storage space. The app provides tailored suggestions to keep your device running smoothly.",
    },
    {
      question: "Is my data safe with Care4Android?",
      answer:
        "Yes, Care4Android uses secure backup solutions to ensure that your data is safely stored and easily recoverable when needed. We prioritize your privacy and security.",
    },
    {
      question: "Can I use Care4Android on multiple devices?",
      answer:
        "Care4Android supports cross-platform services, so you can manage and access your device information not just on Android, but also on the web and iOS.",
    },
    {
      question: "How do I get real-time support?",
      answer:
        "You can contact our support team directly through the app to receive immediate assistance. Our team is available to help troubleshoot issues and provide solutions in real-time.",
    },
    {
      question: "What type of notifications will I receive?",
      answer:
        "Care4Android provides personalized notifications for maintenance reminders, updates, and security alerts, ensuring you are always on top of important actions for your device.",
    },
  ];

  return (
    <Box
      sx={{
        padding: 4,
        width: "100%", // Ensures the background color stretches across the full width
        background: "#f3f9ff", // Background color applied to the full width
      }}
    >
      <Box
        sx={{
          maxWidth: "83.33%", // Contents limited to 83.33% width
          mx: "auto", // Centering the content
        }}
      >
        <Typography variant="h4" component="h2" textAlign="center" gutterBottom>
          Services
        </Typography>
        <Typography variant="h6" component="h6" textAlign="center" gutterBottom>
          Empowering your Android experience with seamless solutions tailored to
          your needs.
        </Typography>

        <Grid container spacing={3} sx={{ mt: 2 }}>
          {services.map((service, index) => (
            <Grid item xs={12} sm={6} md={4} key={index}>
              <Card sx={{ height: "100%" }}>
                <CardActionArea>
                  <CardMedia
                    component="img"
                    sx={{
                      height: 200,
                      width: 250,
                      objectFit: "cover",
                      margin: "0 auto",
                    }}
                    image={service.image}
                    alt={service.title}
                  />
                  <CardContent>
                    <Typography gutterBottom variant="h5" component="div">
                      {service.title}
                    </Typography>
                    <Typography
                      variant="body2"
                      sx={{ color: "text.secondary" }}
                    >
                      {service.description}
                    </Typography>
                  </CardContent>
                </CardActionArea>
              </Card>
            </Grid>
          ))}
        </Grid>

        <Box
          sx={{
            height: "100vh",
            alignItems: "center",
            justifyContent: "center",
            display: "flex",
            width: "100%",
            flexDirection: "column",
          }}
        >
          <Typography
            variant="h4"
            component="h2"
            textAlign="center"
            gutterBottom
          >
            FAQ
          </Typography>
          <Typography
            variant="h6"
            component="h6"
            textAlign="center"
            gutterBottom
          >
            Empowering your Android experience with seamless solutions tailored
            to your needs.
          </Typography>

          {faqs.map((faq, index) => (
            <Accordion
              expanded={expanded === `panel${index + 1}`}
              onChange={handleChange(`panel${index + 1}`)}
              key={index}
              sx={{ width: "100%" }}
            >
              <AccordionSummary
                aria-controls={`panel${index + 1}d-content`}
                id={`panel${index + 1}d-header`}
              >
                <Typography component="span" sx={{ fontWeight: "bold" }}>
                  {faq.question}
                </Typography>
              </AccordionSummary>
              <AccordionDetails>
                <Typography>{faq.answer}</Typography>
              </AccordionDetails>
            </Accordion>
          ))}
        </Box>
      </Box>
    </Box>
  );
}
