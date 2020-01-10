import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import CardActionArea from '@material-ui/core/CardActionArea';
import CardActions from '@material-ui/core/CardActions';
import CardMedia from '@material-ui/core/CardMedia';
import Button from '@material-ui/core/Button';
import Typography from '@material-ui/core/Typography';

const useStyles = makeStyles(theme => ({
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
}))

export default function ImgMediaCard() {
  const classes = useStyles();

  return (
    <Card className={classes.card}>
      <CardActionArea>
        <CardMedia
          component="img"
          alt="Contemplative Reptile"
          height="200"
          image={require('../../Images/bg.jpg')}
          title="Contemplative Reptile"
        />
      </CardActionArea>
      <CardActions className={classes.btn}>
        <Button size="small" color="primary">
          Edit
        </Button>
        <Typography variant="button" display="block" gutterBottom className={classes.title}>
          doces
      </Typography>
        <Button size="small" className={classes.danger}>
          DELETE
        </Button>
      </CardActions>
    </Card>
  );
}