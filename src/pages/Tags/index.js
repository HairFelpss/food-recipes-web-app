import React from 'react';
import { useDispatch, useSelector } from 'react-redux'
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import Button from '@material-ui/core/Button';
import { Input } from '@rocketseat/unform';
import WrapperComponent from '../../Components'
import TypeCard from '../../Components/TagCard'

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1,
  },
  title: {
    paddingBottom: '3vh',
  },
  input: {
    width: '50vw',
    height: 56,
    fontSize: '2vh',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    color: theme.palette.success.dark,
    backgroundColor: 'transparent',
  },
}));

const Tag = () => {
  const dispatch = useDispatch()
  const classes = useStyles();
  const loading = useSelector(state => state.auth.loading)

  const handleSubmit = (data) => {
    console.log(data)
  }

  return (
    <WrapperComponent>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={4}
            className={classes.title}
          >
            <h1>Filtre todas as tags disponíveis</h1>
            <Input
              className={classes.input}
              name='name'
              placeholder='Qual tag deseja?'
              color="primary"
              autoComplete='off'
            />
            <Button
              type='submit'
              variant='contained'
              color='primary'
              className={classes.submit}
            >Buscar
            </Button>
          </Grid>
          <Grid container justify="center" spacing={6}>
            {[0, 1, 2, 4, 5, 6, 7, 8, 9, 10, 11].map(value => (
              <Grid key={value} item>
                <TypeCard />
              </Grid>
            ))}
          </Grid>
        </Grid>
      </Grid>
    </WrapperComponent>
  )
};

export default Tag;
