import React, { useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import { Form, Input } from "@rocketseat/unform";
import api from '../../services/api';

const useStyles = makeStyles(theme => ({
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
  card: {
    flex: 1,
    maxWidth: 330,
  },
  btn: {
    justifyContent: 'space-between',
  },
  title: {
    color: theme.palette.quinary,
  },
  danger: {
    color: '#E1315B'
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
}))

export default function TagCard({ props }) {
  const classes = useStyles();
  const [open, setOpen] = useState(false);
  const [deleteAction, setDeleteAction] = useState(false);
  //const loading = useSelector(state => state.auth.loading)

  const handleOpen = (actions) => {
    setOpen(true);
    if (actions === 'delete') {
      return setDeleteAction(true)
    }
    return setDeleteAction(false)
  };

  const handleSubmit = async ({ name }) => {
    if (deleteAction) {
      await api.delete(`/types/${props.id}`)
      return setOpen(false);
    }
    await api.put(`/types/${props.id}`, { name })
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardActionArea>
          <CardMedia
            component="img"
            alt={props.name}
            height="200"
            image={props.pictures.url}
            title={props.name}
          />
        </CardActionArea>
        <CardActions className={classes.btn}>
          <Button size="small" color="primary" onClick={() => handleOpen('edit')}>
            Edit
            </Button>
          <Typography variant="button" display="block" gutterBottom className={classes.title}>
            {props.name}
          </Typography>
          <Button size="small" className={classes.danger} onClick={() => handleOpen('delete')}>
            DELETE
        </Button>
        </CardActions>
      </Card>
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
            {deleteAction ? (
              <>
                <h2 className={classes.danger} id="transition-modal-title">Atenção, você está deletando uma tag!</h2>
                <Button
                  type="submit"
                  fullWidth
                  variant="contained"
                  color="primary"
                  className={classes.submit}
                  onClick={handleSubmit}
                >
                  Excluir
              </Button>
              </>
            ) : (
                <Form onSubmit={handleSubmit}>
                  <Input
                    className={classes.input}
                    name="name"
                    placeholder="Digite o novo nome"
                  />
                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    color="primary"
                    className={classes.submit}
                  >
                    Editar
                  </Button>
                </Form>
              )}
          </div>
        </Fade>
      </Modal>
    </>
  );
}