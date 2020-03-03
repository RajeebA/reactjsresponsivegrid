import React from "react";
import CachedIcon from "@material-ui/icons/Cached";
import {
  AppBar,
  Toolbar,
  makeStyles,
  Badge,
  Button,
  Typography,
  Container,
  Paper,
  Grid
} from "@material-ui/core";
import IconButton from "@material-ui/core/IconButton";
import NotificationsIcon from "@material-ui/icons/Notifications";

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  menuButton: {
    marginRight: theme.spacing(2)
  },
  title: {
    flexGrow: 1
  }
}));
const BlogAnylyse = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <AppBar position="static">
        <Toolbar>
          <IconButton
            edge="start"
            className={classes.menuButton}
            color="inherit"
            aria-label="menu"
          >
            <CachedIcon />
          </IconButton>
          <Typography variant="h6" className={classes.title}></Typography>
          <IconButton
            aria-label="show 11 new notifications"
            color="inherit"
            style={{ paddingRight: "2rem" }}
          >
            <Badge badgeContent={11} color="secondary">
              <NotificationsIcon />
            </Badge>
          </IconButton>
          <Button variant="contained" color="inherit">
            Login
          </Button>
        </Toolbar>
      </AppBar>

      <Container maxWidth="xl" style={{ minHeight: "100vh" }}>
        <Paper elevation={3} style={{ minHeight: "20vh", marginTop: "1rem" }}>
          <Grid container className={classes.root} spacing={2}>
            <Grid item xs={12} style={{ display: "flex" }}>
              <Grid
                item
                xs={4}
                style={{ background: "red", minHeight: "20vh" }}
              >
                <Typography variant="h5">pie chart</Typography>
              </Grid>
              <Grid
                container
                justify="center"
                item
                xs={4}
                style={{ minHeight: "20vh" }}
              >
                <div style={{ display: "flex" }}>
                  <div style={{ paddingRight: "1rem", textAlign: "center" }}>
                    <Typography variant="h4">Monthly</Typography>
                    <Typography variant="h6">3</Typography>
                  </div>
                  <div style={{ textAlign: "center" }}>
                    <Typography variant="h4">Weekly</Typography>
                    <Typography variant="h6">4</Typography>
                  </div>
                </div>
              </Grid>
              <Grid
                item
                xs={4}
                style={{ background: "green", minHeight: "20vh" }}
              >
                <Typography variant="h3">pie chart</Typography>
              </Grid>
            </Grid>
          </Grid>
        </Paper>
      </Container>
    </div>
  );
};

export default BlogAnylyse;
