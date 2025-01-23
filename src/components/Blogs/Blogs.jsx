import { useState } from "react";
import { styled } from "@mui/material/styles";
import Card from "@mui/material/Card";
import CardHeader from "@mui/material/CardHeader";
import CardMedia from "@mui/material/CardMedia";
import CardContent from "@mui/material/CardContent";
import CardActions from "@mui/material/CardActions";
import Collapse from "@mui/material/Collapse";
import Avatar from "@mui/material/Avatar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import { red } from "@mui/material/colors";
import FavoriteIcon from "@mui/icons-material/Favorite";
import ShareIcon from "@mui/icons-material/Share";
import ExpandMoreIcon from "@mui/icons-material/ExpandMore";
import MoreVertIcon from "@mui/icons-material/MoreVert";
import Grid from "@mui/material/Grid";
import TextField from "@mui/material/TextField";
import Button from "@mui/material/Button";

const ExpandMore = styled((props) => {
  const { expand, ...other } = props;
  return <IconButton {...other} />;
})(({ theme }) => ({
  marginLeft: "auto",
  transition: theme.transitions.create("transform", {
    duration: theme.transitions.duration.shortest,
  }),
  ...(props) => ({
    style: {
      transform: props.expand ? "rotate(180deg)" : "rotate(0deg)",
    },
  }),
}));

export default function Blogs() {
  const [expanded, setExpanded] = useState([false, false, false]);

  const handleExpandClick = (index) => {
    const newExpanded = [...expanded];
    newExpanded[index] = !newExpanded[index];
    setExpanded(newExpanded);
  };

  return (
    <>
      <Grid
        container
        spacing={3}
        justifyContent="center"
        sx={{ maxWidth: "83.3%", margin: "0 auto", marginBottom: 5 }}
      >
        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Android App Development for Beginners"
              subheader="January 15, 2025"
            />
            <CardMedia
              component="img"
              height="194"
              image="https://example.com/your-image.jpg"
              alt="Android App Development"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Learn the basics of Android development with our
                beginner-friendly tutorials. Start building apps today with
                step-by-step guidance.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded[0]}
                onClick={() => handleExpandClick(0)}
                aria-expanded={expanded[0]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[0]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>
                  Tutorial Overview:
                </Typography>
                <Typography>
                  This tutorial will cover Android Studio setup, Java basics,
                  and how to create your first app. By the end, you'll have a
                  fully functional app to showcase.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Firebase Authentication in Android"
              subheader="January 18, 2025"
            />
            <CardMedia
              component="img"
              height="194"
              image="https://example.com/your-image.jpg"
              alt="Firebase Authentication"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Master Firebase authentication for secure login in Android apps.
                Learn how to integrate Firebase with your Android project.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded[1]}
                onClick={() => handleExpandClick(1)}
                aria-expanded={expanded[1]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[1]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>
                  Step-by-Step Guide:
                </Typography>
                <Typography>
                  Follow this detailed guide to integrate Firebase Auth into
                  your app. We cover email/password login, Google Sign-In, and
                  more.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>

        <Grid item xs={12} sm={4}>
          <Card>
            <CardHeader
              avatar={
                <Avatar sx={{ bgcolor: red[500] }} aria-label="recipe">
                  C
                </Avatar>
              }
              action={
                <IconButton aria-label="settings">
                  <MoreVertIcon />
                </IconButton>
              }
              title="Best Practices for Android UI"
              subheader="January 20, 2025"
            />
            <CardMedia
              component="img"
              height="194"
              image="https://example.com/your-image.jpg"
              alt="Android UI"
            />
            <CardContent>
              <Typography variant="body2" sx={{ color: "text.secondary" }}>
                Explore best practices for creating intuitive and user-friendly
                UIs in Android apps. Design beautiful and functional layouts.
              </Typography>
            </CardContent>
            <CardActions disableSpacing>
              <IconButton aria-label="add to favorites">
                <FavoriteIcon />
              </IconButton>
              <IconButton aria-label="share">
                <ShareIcon />
              </IconButton>
              <ExpandMore
                expand={expanded[2]}
                onClick={() => handleExpandClick(2)}
                aria-expanded={expanded[2]}
                aria-label="show more"
              >
                <ExpandMoreIcon />
              </ExpandMore>
            </CardActions>
            <Collapse in={expanded[2]} timeout="auto" unmountOnExit>
              <CardContent>
                <Typography sx={{ marginBottom: 2 }}>Design Tips:</Typography>
                <Typography>
                  Learn how to create seamless user interfaces with optimal
                  layout designs. We'll focus on Material Design and
                  accessibility.
                </Typography>
              </CardContent>
            </Collapse>
          </Card>
        </Grid>
      </Grid>

      <Grid container spacing={3} sx={{ maxWidth: "83.3%", margin: "50px auto" }}>
        <Grid item xs={12} md={6}>
          <Card sx={{ padding: 3 }}>
            <Typography variant="h5" sx={{ marginBottom: 2 }}>
              Contact Us
            </Typography>
            <TextField
              fullWidth
              label="Name"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Email"
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <TextField
              fullWidth
              label="Message"
              multiline
              rows={4}
              variant="outlined"
              sx={{ marginBottom: 2 }}
            />
            <Button variant="contained" color="primary">
              Submit
            </Button>
          </Card>
        </Grid>

        <Grid item xs={12} md={6}>
          <Card sx={{ height: "100%" }}>
            <iframe
              title="Map Placeholder"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4385.601715998718!2d78.1367360755458!3d11.669060288539281!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3babf046b1106e9f%3A0x7915b2bdfb242492!2sSalem%20New%20Bus%20Stand!5e1!3m2!1sen!2sin!4v1737474178564!5m2!1sen!2sin"
              style={{
                width: "100%",
                height: "400px",
                border: "none",
              }}
            ></iframe>
          </Card>
        </Grid>
      </Grid>
    </>
  );
}
