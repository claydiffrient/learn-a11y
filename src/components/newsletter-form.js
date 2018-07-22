import React, { Component } from "react";
import Button from "@instructure/ui-buttons/lib/components/Button";

import Snackbar from "@material-ui/core/Snackbar";
import SnackbarContent from "@material-ui/core/SnackbarContent";
import CheckCircleIcon from "@material-ui/icons/CheckCircle";
import CloseIcon from "@material-ui/icons/Close";
import ErrorIcon from "@material-ui/icons/Error";
import IconButton from "@material-ui/core/IconButton";
import { withStyles } from "@material-ui/core/styles";
import green from "@material-ui/core/colors/green";
import amber from "@material-ui/core/colors/amber";
import classNames from "classnames";

import addToMailchimp from "gatsby-plugin-mailchimp";

const snackStyles = theme => ({
  snackbar: {
    margin: theme.spacing.unit
  },
  success: {
    backgroundColor: green[600]
  },
  error: {
    backgroundColor: theme.palette.error.dark
  },
  warning: {
    backgroundColor: amber[700]
  },
  icon: {
    fontSize: 20
  },
  iconVariant: {
    opacity: 0.9,
    marginRight: theme.spacing.unit
  },
  message: {
    display: "flex",
    alignItems: "center"
  }
});

const SBContent = ({
  classes,
  className,
  message,
  onClose,
  variant,
  ...rest
}) => {
  const Icon = variant === "error" ? ErrorIcon : CheckCircleIcon;
  return (
    <SnackbarContent
      className={classNames(classes[variant], className, classes.snackbar)}
      aria-describedby="client-snackbar"
      message={
        <span id="client-snackbar" className={classes.message}>
          <Icon className={classNames(classes.icon, classes.iconVariant)} />
          {message}
        </span>
      }
      action={[
        <IconButton
          key="close"
          aria-label="Close"
          color="inherit"
          className={classes.close}
          onClick={onClose}
        >
          <CloseIcon className={classes.icon} />
        </IconButton>
      ]}
      {...rest}
    />
  );
};

const SBWrapper = withStyles(snackStyles)(SBContent);

const urlRegex = /href=(http|https|ftp|ftps)\:\/\/[a-zA-Z0-9\-\.]+\.[a-zA-Z]{2,3}(\/\S*)?/;

export default class NewsletterForm extends Component {
  state = {
    email: "",
    message: "",
    alertOpen: false,
    error: false,
    actionLink: null
  };

  handleSubmit = e => {
    if (e) e.preventDefault();
    try {
      addToMailchimp(this.state.email).then(data => {
        this.setState({
          error: data.result === "error",
          message: data.msg,
          alertOpen: true,
          email: data.result !== "error" ? "" : this.state.email
        });
      });
    } catch (e) {
      this.setState({
        alertOpen: true,
        error: true,
        message: "An error occurred!  Is this a valid email?"
      });
    }
  };

  handleCloseSB = () => {
    this.setState({ alertOpen: false });
  };

  handleExitedSB = () => {
    this.setState({ error: false, message: "" });
  };

  render() {
    return (
      <div
        css={{
          display: "grid",
          gridGap: "10px",
          gridTemplateAreas: `
              'text text'
              'form form'
            `
        }}
      >
        <div css={{ gridArea: "text" }}>
          Add your email address to our mailing list if you'd like to stay up to
          date on new content and features!
        </div>
        <form
          onSubmit={this.handleSubmit}
          css={{
            gridArea: "form",
            display: "grid",
            gridGap: "10px",
            gridTemplateColumns: "minmax(20rem, 1fr) 10rem"
          }}
        >
          <input
            type="email"
            label="Email"
            placeholder="somebody@example.com"
            value={this.state.email}
            onChange={e => this.setState({ email: e.target.value })}
          />
          <Button type="submit">Subscribe</Button>
        </form>
        <Snackbar
          open={this.state.alertOpen}
          autoHideDuration={5000}
          onClose={this.handleCloseSB}
          onExited={this.handleExitedSB}
          anchorOrigin={{
            vertical: "bottom",
            horizontal: "right"
          }}
        >
          <SBWrapper
            onClose={this.handleCloseSB}
            variant={this.state.error ? "error" : "success"}
            message={this.state.message}
          />
        </Snackbar>
      </div>
    );
  }
}
