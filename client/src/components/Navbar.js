import React from "react";
import {
  Box,
  Container,
  AppBar,
  Toolbar,
  Typography,
  Button,
  Link,
} from "@material-ui/core";
import { makeStyles } from "@material-ui/core/styles";
import logo from "../staticImages/ic-logo.png";

import { Link as RouterLink } from "react-router-dom";

const LinkTo = React.forwardRef((props, ref) => <RouterLink {...props} />);

const useStyles = makeStyles((theme) => ({
  appBar: {
    background: "white",
    color: "black",
    elevation: 0,
  },
  logo: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    marginRight: theme.spacing(1),
  },
  title: {
    flexGrow: 1,
  },
  titleLink: {
    "&:hover": {
      textDecoration: "None",
    },
  },
}));

function NavBar(props) {
  const classes = useStyles();
  return (
    <Box mb={8}>
      <Container>
        <AppBar variant="outlined" className={classes.appBar} position="fixed">
          <Toolbar>
            <Link component={LinkTo} to="/profile">
              <img
                className={classes.logo}
                src={logo}
                alt="Product Launch Logo"
              ></img>
            </Link>
            <Typography variant="h6" className={classes.title} component="h1">
              <Link
                component={LinkTo}
                to="/profile"
                className={classes.titleLink}
                color="inherit"
              >
                Product Launch
              </Link>
            </Typography>

            <Button color="inherit" component={LinkTo} to="/project">
              Explore
            </Button>
            <Button color="inherit">Launch</Button>
            <Button color="inherit" component={LinkTo} to="/signup">
              Signup
            </Button>
          </Toolbar>
        </AppBar>
      </Container>
    </Box>
  );
}

export default NavBar;
