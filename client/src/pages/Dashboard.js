import React from "react";

import {
  Typography,
  Container,
  Box,
  Avatar,
  Button,
  Card,
  CardMedia,
  CardContent,
  Divider,
  AppBar,
  Toolbar,
} from "@material-ui/core";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

import projectpic1 from "../staticImages/projPicture1.png";
import projectpic2 from "../staticImages/projPicture2.png";
import projectpic3 from "../staticImages/projPicture3.png";
import profpic1 from "../staticImages/profpic1.png";
import logo from "../staticImages/ic-logo.png";

const useStyles = makeStyles((theme) => ({
  root: {
    color: "black",
  },
  appBar: {
    background: "white",
    color: "black",
    elevation: 0,
    "&MuiPaper": {
      elevation: 0,
    },
  },
  logo: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  userInfoShadow: {
    paddingTop: theme.spacing(3),
    boxShadow: "0px 0px 17px 6px rgba(200,200,200,.3)",
  },
  avatar: {
    width: theme.spacing(15),
    height: theme.spacing(15),
  },
  sendMessage: {
    padding: ".8rem 2rem",
  },
  roundButton: {
    borderRadius: "30px",
    padding: "0.2rem 1rem",
    fontSize: "0.7rem",
    marginRight: "0.5rem",
    fontWeight: "600",
  },
  highlightButton: {
    borderRadius: "30px",
    padding: "0.2rem 1rem",
    fontSize: "0.7rem",
    marginRight: "0.5rem",
    fontWeight: "600",
    backgroundColor: theme.primary,
    color: "white",
    border: "0px",
    "&:hover": {
      backgroundColor: "black",
    },
  },
  media: {
    height: theme.spacing(35),
  },
  ySpacing: {
    margin: "2rem 0",
  },
  projectContainer: {
    padding: "0 4rem",
  },
  cardTitle: {
    fontWeight: "500",
  },
  cardInvested: {
    fontWeight: "500",
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <Box mb={8}>
      <Container>
        <AppBar variant="outlined" className={classes.appBar} position="fixed">
          <Toolbar>
            <img
              className={classes.logo}
              src={logo}
              alt="Product Launch Logo"
            ></img>
            <Typography variant="h6" className={classes.title} component="h1">
              Product Launch
            </Typography>
            <Button color="inherit">Explore</Button>
            <Button color="inherit">Launch</Button>
            <Button color="inherit">Login</Button>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}

function UserInfo(props) {
  const classes = useStyles();
  return (
    <Box height="100%" className={classes.userInfoShadow}>
      <Container align="center">
        {/* Avatar */}
        <Avatar className={classes.avatar} src={profpic1}></Avatar>
        {/* User Info */}
        <Box>
          <Typography variant="h6" component="p">
            Alexander Faa
          </Typography>
          <Typography color="textSecondary">New York, NY</Typography>
        </Box>

        {/* Send a message */}
        <Box className={classes.ySpacing}>
          <Button
            className={classes.sendMessage}
            size="large"
            variant="outlined"
            disableElevation
          >
            Send a Message
          </Button>
        </Box>

        {/* Description */}
        <Box className={classes.ySpacing}>
          <Typography>
            I just have a great passion for all things coffee
          </Typography>
        </Box>

        {/* Expertise */}
        <Box marginTop={2}>
          <Typography fontWeight="fontWeightMedium">Expertise</Typography>
          <Button
            className={classes.roundButton}
            variant="outlined"
            size="small"
          >
            Marketing
          </Button>
          <Button
            className={classes.roundButton}
            variant="outlined"
            size="small"
          >
            Coffee
          </Button>
          <Button
            className={classes.roundButton}
            variant="outlined"
            size="small"
          >
            Technology
          </Button>
        </Box>
      </Container>

      <Divider className={classes.ySpacing} />

      {/* Looking to Invest in */}
      <Box>
        <Container align="center">
          <Typography fontWeight="fontWeightMedium">
            Looking to invest in
          </Typography>

          <Button
            className={classes.highlightButton}
            variant="outlined"
            size="small"
          >
            Coffee
          </Button>
        </Container>
      </Box>
    </Box>
  );
}

function ProjectCard(props) {
  const classes = useStyles();
  console.log(props.ver);
  const projectStatic = [
    {
      photo: projectpic1,
      name: "Urban Jungle: eco-friendly coffee shop",
      currentInvested: 23874,
      wantedInvestement: 40000,
      equity: 0.1,
      timeLeft: 44,
    },
    {
      photo: projectpic2,
      name: "Cafe Black: The Future of coffee",
      currentInvested: 2647,
      wantedInvestement: 60000,
      equity: 0.1,
      timeLeft: 60,
    },
    {
      photo: projectpic3,
      name: "Easy to use, Powerful AI Camera",
      currentInvested: 34912,
      wantedInvestement: 55000,
      equity: 0.18,
      timeLeft: 12,
    },
  ];
  const projectInfo = projectStatic[props.ver];

  return (
    <Grid item xs={6}>
      <Card elevation={8}>
        <CardMedia
          className={classes.media}
          component="img"
          src={projectInfo.photo}
        ></CardMedia>
        <CardContent>
          <Typography className={classes.cardTitle} variant="h5" component="h4">
            {projectInfo.name}
          </Typography>
          <Typography className={classes.cardInvested} display="inline">
            ${projectInfo.currentInvested}
          </Typography>
          <Typography color="textSecondary" display="inline">
            {" / " + projectInfo.wantedInvestement}
          </Typography>
          <Typography variant="body2" color="textSecondary">
            Equity exchange: {projectInfo.equity * 100}% |
            {" " + projectInfo.timeLeft} days to go
          </Typography>
        </CardContent>
      </Card>
    </Grid>
  );
}

function UserDashboard(props) {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* Top Navbar */}
      <NavBar />

      <Grid container>
        {/* User Information Sidebar */}
        <Grid item xs={3}>
          <UserInfo />
        </Grid>
        {/* Invested in and Personal Projects */}
        <Grid item xs={9}>
          <Container className={classes.projectContainer}>
            <Typography className={classes.ySpacing} variant="h2">
              <Box fontWeight="fontWeightMedium">Invested In: </Box>
            </Typography>
            <Grid container spacing={6}>
              <ProjectCard ver={0} />
              <ProjectCard ver={1} />
              <ProjectCard ver={2} />
            </Grid>
          </Container>
        </Grid>
      </Grid>
    </div>
  );
}

export default UserDashboard;
