import React, { useState } from 'react';
import { Link } from "react-router-dom";
import Fab from '@material-ui/core/Fab';
import AddIcon from '@material-ui/icons/Add';
import { makeStyles } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Form, Input } from "@rocketseat/unform";
import drawerBgImage from "../../Images/bg.jpg";


const useStyles = makeStyles(theme => ({
  fab: {
    position: 'absolute',
    bottom: theme.spacing(2),
    right: theme.spacing(2),
  },
  modal: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  paper: {
    backgroundColor: theme.palette.background.default,
    border: '2px solid #000',
    boxShadow: theme.shadows[5],
    padding: theme.spacing(2, 4, 3),
  },
  title: {
    textAlign: 'center',
  },
  input: {
    width: '100%',
    height: 56,
    fontSize: '2vh',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    color: theme.palette.success.dark,
    backgroundColor: 'transparent',
  },
  selectBtn: {
    backgroundImage: "url(" + drawerBgImage + ")",
    width: '100%',
    padding: '0.5vh',
    marginBottom: '0.5vh',
    opacity: 0.7,
  },
  fileBtn: {
    backgroundImage: "url(" + drawerBgImage + ")",
    color: theme.palette.text.secondary,
    fontWeight: 800,
    opacity: 0.7,
    cursor: 'pointer',
    minHeight: '4vh',
    border: `2px solid ${theme.palette.quinary}`,
    borderRadius: 10,
    fontSize: '1.5vh',
    marginBottom: '1vh',
    width: '100%',
  },
}));

const AddFab = ({ destiny, handleSubmit, handleChange }) => {
  const classes = useStyles()
  const [open, setOpen] = useState(false);

  const handleOpen = () => {

    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };

  if (!destiny) {
    return (
      <Link to="/add-recipe">
        <Fab
          color="primary"
          aria-label="add"
          className={classes.fab}
          onClick={handleOpen}
        >
          <AddIcon />
        </Fab>
      </Link>
    )
  }
  return (
    <>
      <Fab
        color="primary"
        aria-label="add"
        className={classes.fab}
        onClick={handleOpen}
      >
        <AddIcon />
      </Fab>
      <Modal
        aria-labelledby="transition-modal-title"
        aria-describedby="transition-modal-description"
        className={classes.modal}
        open={open}
        onClose={handleClose}
        closeAfterTransition
        BackdropComponent={Backdrop}
        BackdropProps={{
          timeout: 500,
        }}
      >
        <Fade in={open}>
          <div className={classes.paper}>
            <h4 className={classes.title}>{destiny}</h4>
            <Form onSubmit={handleSubmit}>
              <Input
                className={classes.input}
                name="name"
                placeholder="Digite o novo nome"
                autoComplete='off'
              />
              <input
                type='file'
                name='photo'
                className={classes.fileBtn}
                onChange={handleChange}
                accept='image/*'
              />
              <Button
                fullWidth
                variant="contained"
                color="primary"
                type="submit"
                onClick={handleClose}
              >
                Criar
            </Button>
            </Form>
          </div>
        </Fade>
      </Modal>
    </>
  );
}

export default AddFab;
