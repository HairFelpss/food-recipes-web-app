import React, { useEffect } from 'react';
import { makeStyles } from '@material-ui/core/styles';
import Grid from '@material-ui/core/Grid';
import { Input } from '@rocketseat/unform';
import WrapperComponent from '~/Components';
import Recipes from '~/Components/Recipes';
import Fab from '~/Components/Fab';
import { connect, useDispatch } from 'react-redux';
import api from '~/services/api';
import { storeRecipesRequest } from '~/store/modules/recipe/actions';

const useStyles = makeStyles(theme => ({
  root: {
    flexGrow: 1
  },
  title: {
    paddingBottom: '3vh'
  },
  input: {
    width: '50vw',
    height: 56,
    fontSize: '2vh',
    fontWeight: 500,
    border: 'none',
    outline: 'none',
    textAlign: 'center',
    color: theme.palette.text.primary,
    backgroundColor: 'transparent'
  }
}));

const ListRecipes = ({ recipes }) => {
  const classes = useStyles();
  const dispatch = useDispatch();
  //const loading = useSelector(state => state.auth.loading)

  const loadRecipes = async () => {
    const response = await api.get('/recipes');
    dispatch(storeRecipesRequest(response.data));
  };
  useEffect(() => {
    loadRecipes();
    // eslint-disable-next-line
  }, []);

  return (
    <WrapperComponent>
      <Grid container className={classes.root} spacing={2}>
        <Grid item xs={12}>
          <Grid
            container
            direction="column"
            justify="center"
            alignItems="center"
            spacing={4}
            className={classes.title}
          >
            <h1>Veja todas as receitas disponíveis para os apps</h1>
            <Input
              className={classes.input}
              name="name"
              placeholder="Digite o nome da receita desejada..."
              color="primary"
              autoComplete="off"
            />
          </Grid>
          <Grid container justify="center" spacing={3}>
            {recipes &&
              recipes.length &&
              recipes.map(recipe => (
                <Grid key={recipe.id} item>
                  <Recipes recipe={recipe} dispatch={dispatch} />
                </Grid>
              ))}
          </Grid>
        </Grid>
      </Grid>
      <Fab />
    </WrapperComponent>
  );
};
const mapStateToProps = state => ({
  recipes: state.recipe.data
});

export default connect(mapStateToProps)(ListRecipes);
