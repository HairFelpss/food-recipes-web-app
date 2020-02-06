import React, { useState } from 'react';
import { makeStyles, useTheme } from '@material-ui/core/styles';

import Drawer from './Drawer';
import TopBar from './TopBar';

const useStyles = makeStyles(theme => ({
  root: {
    display: 'flex'
  },
  toolbar: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'flex-end',
    padding: theme.spacing(0, 1),
    ...theme.mixins.toolbar
  },
  content: {
    flexGrow: 1,
    padding: theme.spacing(3)
  }
}));

export default function WrapperComponent({ children }) {
  const classes = useStyles();
  const theme = useTheme();
  const [open, setOpen] = useState(false);

  const toggleDrawer = state => setOpen(state || !open);

  return (
    <div className={classes.root} theme={theme}>
      <TopBar toggleDrawer={toggleDrawer} open={open} />
      <Drawer toggleDrawer={toggleDrawer} open={open} />

      <main className={classes.content}>
        <div className={classes.toolbar} />
        {children}
      </main>
    </div>
  );
}
