import { Container, Grid, Typography, Link, IconButton } from "@mui/material";
import { Facebook, Twitter, Instagram, LinkedIn } from "@mui/icons-material";

export default function Footer() {
  return (
    <div style={{ backgroundColor: "#333", color: "#fff", padding: "20px 0" }}>
      <Container maxWidth="lg">
        <Grid container spacing={4}>
          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Contact Us
            </Typography>
            <Typography variant="body2">
              Email:{" "}
              <Link href="mailto:support@example.com" color="inherit">
                support@example.com
              </Link>
            </Typography>
            <Typography variant="body2">
              Phone:{" "}
              <Link href="tel:+123456789" color="inherit">
                +1 (234) 567-89
              </Link>
            </Typography>
            <Typography variant="body2" sx={{ marginTop: 2 }}>
              Address: 123 Main Street, City, Country
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Quick Links
            </Typography>
            <Typography variant="body2">
              <Link href="/services" color="inherit" underline="hover">
                Services
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/contact" color="inherit" underline="hover">
                Contact
              </Link>
            </Typography>
            <Typography variant="body2">
              <Link href="/privacy-policy" color="inherit" underline="hover">
                Privacy Policy
              </Link>
            </Typography>
          </Grid>

          <Grid item xs={12} sm={4}>
            <Typography variant="h6" gutterBottom>
              Follow Us
            </Typography>
            <div>
              <IconButton
                color="inherit"
                href="https://facebook.com"
                target="_blank"
                sx={{ marginRight: 1 }}
              >
                <Facebook />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://twitter.com"
                target="_blank"
                sx={{ marginRight: 1 }}
              >
                <Twitter />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://instagram.com"
                target="_blank"
                sx={{ marginRight: 1 }}
              >
                <Instagram />
              </IconButton>
              <IconButton
                color="inherit"
                href="https://linkedin.com"
                target="_blank"
              >
                <LinkedIn />
              </IconButton>
            </div>
          </Grid>
        </Grid>

        {/* Bottom Section - Copyright */}
        <Grid container justifyContent="center" sx={{ marginTop: 4 }}>
          <Typography variant="body2" align="center">
            © 2025 Care4Android. All rights reserved.
          </Typography>
        </Grid>
      </Container>
    </div>
  );
}
