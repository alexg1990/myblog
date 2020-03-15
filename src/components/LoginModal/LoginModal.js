import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Modal from "@material-ui/core/Modal";
import Backdrop from "@material-ui/core/Backdrop";
import Fade from "@material-ui/core/Fade";
import Button from "@material-ui/core/Button";
import TextField from "@material-ui/core/TextField";

import PasswordInput from "../Inputs/Password/Password.js";

import "./LoginModal.css";

const useStyles = makeStyles(theme => ({
  modal: {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    borderRadius: "3px"
  },
  paper: {
    backgroundColor: theme.palette.background.paper,
    border: "2px solid #000",
    boxShadow: theme.shadows[5],
    padding: theme.spacing(0, 0, 0)
  }
}));

export default function TransitionsModal() {
  const classes = useStyles();
  const [open, setOpen] = React.useState(true);

  const handleOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <div>
      <Button variant="contained" id="login" onClick={handleOpen}>
        LOGIN
      </Button>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        disableScrollLock={true}
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500
        }}
      >
        <Fade in={open} style={{ borderRadius: "4px", border: "none" }}>
          <div className={classes.paper}>
            <h2 style={{ textAlign: "center" }}>Login</h2>
            <p>Verify your credentials to start managing the articles.</p>
            <TextField
              id="outlined-helperText"
              label="Email"
              helperText="Please enter your email"
              variant="outlined"
              style={{ width: "100%", marginTop: "20px" }}
            />
            <PasswordInput />
            <Button>LOGIN</Button>
          </div>
        </Fade>
      </Modal>
    </div>
  );
}
