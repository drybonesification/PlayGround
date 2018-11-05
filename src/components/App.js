import React, { Component } from "react";
import Avatar from "@material-ui/core/Avatar";
import Paper from "@material-ui/core/Paper";
import { withStyles, CssBaseline } from "@material-ui/core";

/*
const mapStateToProps = state => ({
  AppName: state.common.AppName
});*/

const styles = theme => ({
  layout: {
    width: "auto",
    display: "block",
    marginLeft: theme.spacing.unit * 3,
    marginRight: theme.spacing.unit * 3,
    [theme.breakpoints.up(400 + theme.spacing.unit * 3 * 2)]: {
      width: 400,
      marginLeft: "auto",
      marginRight: "auto"
    }
  },
  paper: {
    marginTop: theme.spacing.unit * 8,
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    padding: `${theme.spacing.unit * 2}px ${theme.spacing.unit * 3}px ${theme
      .spacing.unit * 3}px`
  },
  avatar: {
    margin: theme.spacing.unit,
    backgroundColor: theme.palette.secondary.main
  }
});

function PaperBoi(props) {
  const { classes } = props;

  return (
    <React.Fragment>
      <CssBaseline />
      <main className={classes.layout}>
        <Paper classname={classes.paper}>
          <Avatar
            src="https://media.licdn.com/dms/image/C5603AQGEIbJNMBwV_g/profile-displayphoto-shrink_200_200/0?e=1547078400&v=beta&t=bghzlEysj2U61SDknTQt3yBAMhtX3Wwp7eg9cX_ijXY"
            className={classes.Avatar}
          />
        </Paper>
      </main>
      >
    </React.Fragment>
  );
}

export default withStyles(styles)(PaperBoi);
/*
App.contextTypes = {
  router: React.PropTypes.object.isRequired
};
export default Connect(mapStateToProps)(App)*/
