import React from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Card from '@material-ui/core/Card';
import drawerBgImage from '~/Assets/bg.jpg';

const useStyles = makeStyles({
  card: {
    backgroundImage: `url(${drawerBgImage})`,
    maxWidth: 345,
    minWidth: 200,
    height: '28vh',
    minHeight: '25vh',
    maxHeight: 300
  }
});

const ChartCard = ({ children }) => {
  const classes = useStyles();

  return (
    <Card className={classes.card} variant="outlined">
      {children}
    </Card>
  );
};

export default ChartCard;
