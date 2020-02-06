import { takeLatest, put, call, all, select } from 'redux-saga/effects';
import { toast } from 'react-toastify';
import api from '~/services/api';
import history from '~/services/history';

import {
  storeRecipesSuccess,
  storeRecipesFailure,
  createRecipeSuccess,
  createRecipeFailure,
  deleteRecipesSuccess,
  deleteRecipesFailure,
  updateRecipeSuccess,
  updateRecipeFailure
} from './actions';

export function* storeRecipes({ payload }) {
  try {
    payload.recipes.length === 0
      ? toast.warning('Não há receitas a serem carregadas')
      : toast.success('Receitas carregadas com sucesso');

    yield put(storeRecipesSuccess(payload.recipes));
  } catch (err) {
    toast.error(
      'Erro ao carregar receitas, confira seu acesso ou notifique o cabelo fodão'
    );
    yield put(storeRecipesFailure());
  }
}

export function* createRecipe({ payload }) {
  try {
    const { data } = payload;
    const response = yield call(api.post, '/recipes', data);
    if (response.status === 200) {
      toast.success('Receita criada com sucesso');
    }
    yield put(createRecipeSuccess());
    history.push('/recipes');
  } catch (err) {
    toast.error(
      'Erro ao criar receita, confira as informações ou notifique o cabelo fodão'
    );
    yield put(createRecipeFailure());
  }
}

export function* updateRecipe({ payload }) {
  try {
    const { id, data } = payload;
    const response = yield call(api.put, `/recipes/${id}`, data);
    if (response.status === 200) {
      toast.success('Receita atualizada com sucesso');
    }
    yield put(updateRecipeSuccess());
    history.push('/recipes');
  } catch (err) {
    toast.error(
      'Erro ao atualizar a receita, confira as informações ou notifique o cabelo fodão'
    );
    yield put(updateRecipeFailure());
  }
}

export function* deleteRecipe({ payload }) {
  try {
    const id = payload.id;
    const recipes = yield select(state => state.recipe.data);
    const response = yield call(api.delete, `recipes/${id}`);
    if (response.status === 200) {
      toast.success('Receita deletada com sucesso');
    }
    yield put(deleteRecipesSuccess(recipes.filter(recipe => recipe.id !== id)));
  } catch (err) {
    toast.error(
      'Erro ao deletar receita, atualize a página ou notifique o cabelo fodão'
    );
    yield put(deleteRecipesFailure());
  }
}

export default all([
  takeLatest('@recipe/STORE_RECIPES_REQUEST', storeRecipes),
  takeLatest('@recipe/CREATE_RECIPES_REQUEST', createRecipe),
  takeLatest('@recipe/UPDATE_RECIPES_REQUEST', updateRecipe),
  takeLatest('@recipe/DELETE_RECIPES_REQUEST', deleteRecipe)
]);
