import React, { useState } from 'react';
import { Link } from "react-router-dom";
import clsx from 'clsx';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardHeader from '@material-ui/core/CardHeader';
import CardMedia from '@material-ui/core/CardMedia';
import CardContent from '@material-ui/core/CardContent';
import CardActions from '@material-ui/core/CardActions';
import Collapse from '@material-ui/core/Collapse';
import IconButton from '@material-ui/core/IconButton';
import Typography from '@material-ui/core/Typography';
import { red } from '@material-ui/core/colors';
import EditIcon from '@material-ui/icons/Edit';
import DeleteIcon from '@material-ui/icons/Delete';
import ExpandMoreIcon from '@material-ui/icons/ExpandMore';
import MoreVertIcon from '@material-ui/icons/MoreVert';
import Modal from '@material-ui/core/Modal';
import Backdrop from '@material-ui/core/Backdrop';
import Fade from '@material-ui/core/Fade';
import Button from '@material-ui/core/Button';
import api from '../../services/api'

const useStyles = makeStyles(theme => ({
  card: {
    width: '25vh',
    maxWidth: 345,
  },
  media: {
    padding: '40%', // 16:9
  },
  expand: {
    transform: 'rotate(0deg)',
    marginLeft: 'auto',
    transition: theme.transitions.create('transform', {
      duration: theme.transitions.duration.shortest,
    }),
  },
  expandOpen: {
    transform: 'rotate(180deg)',
  },
  avatar: {
    backgroundColor: red[500],
  },
  expandColor: {
    color: theme.palette.tertiary,
  },
  editIconStyle: {
    color: theme.palette.edit,
  },
  deleteIconStyle: {
    color: theme.palette.danger,
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
  danger: {
    color: '#E1315B'
  },
}));

export default function RecipeReviewCard({ props }) {
  const classes = useStyles();
  const [expanded, setExpanded] = React.useState(false);
  const [open, setOpen] = useState(false);

  const handleExpandClick = () => {
    setExpanded(!expanded);
  };

  const handleOpen = (actions) => {
    setOpen(true);
  };

  const handleSubmit = async (id) => {
    await api.delete(`/recipes/${id}`)
    setOpen(false);
  }

  const handleClose = () => {
    setOpen(false);
  };

  return (
    <>
      <Card className={classes.card}>
        <CardHeader
          className={classes.header}
          action={
            <IconButton aria-label="settings">
              <MoreVertIcon />
            </IconButton>
          }
          title={
            <Typography gutterBottom variant="h5" component="h2" color="secondary">
              {props.name}
            </Typography>
          } />
        />
      <CardMedia
          className={classes.media}
          image={props.pictures.url}
          title={props.pictures.name}
        />
        <CardContent>
          <Typography variant="body2" color="textSecondary" component="p">
            {props.introduction}
          </Typography>
        </CardContent>
        <CardActions disableSpacing>
          <Link to={{ pathname: "edit-recipe", state: { id: props.id } }}>
            <IconButton aria-label="add to favorites">
              <EditIcon className={classes.editIconStyle} />
            </IconButton>
          </Link>
          <IconButton onClick={handleOpen} aria-label="share">
            <DeleteIcon className={classes.deleteIconStyle} />
          </IconButton>
          <IconButton
            className={clsx(classes.expand, {
              [classes.expandOpen]: expanded,
            })}
            onClick={handleExpandClick}
            aria-expanded={expanded}
            aria-label="show more"
          >
            <ExpandMoreIcon className={classes.expandColor} />
          </IconButton>
        </CardActions>
        <Collapse in={expanded} timeout="auto" unmountOnExit>
          <CardContent>
            <Typography paragraph color="textSecondary">Como fazer:</Typography>
            <Typography paragraph color="textSecondary">
              {props.ingredients}
            </Typography>
            <Typography paragraph color="textSecondary">
              {props.steps}
            </Typography>
            <Typography paragraph color="textSecondary">
              {props.preparation_time}
            </Typography>
            <Typography color="textSecondary">
              {props.qt_yield}
            </Typography>
            <Typography color="textSecondary">
              {props.difficulty}
            </Typography>
          </CardContent>
        </Collapse>
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
            <h2 className={classes.danger} id="transition-modal-title">Atenção, você está deletando uma Receita!</h2>
            <Button
              fullWidth
              variant="contained"
              color="primary"
              className={classes.submit}
              onClick={() => handleSubmit(props.id)}
            >
              Excluir
            </Button>
          </div>
        </Fade>
      </Modal>
    </>
  );
}