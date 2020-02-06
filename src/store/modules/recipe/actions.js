export function storeRecipesRequest(recipes) {
  return {
    type: '@recipe/STORE_RECIPES_REQUEST',
    payload: { recipes }
  };
}
export function storeRecipesSuccess(recipes) {
  return {
    type: '@recipe/STORE_RECIPES_SUCCESS',
    payload: { recipes }
  };
}
export function storeRecipesFailure() {
  return {
    type: '@recipe/STORE_RECIPES_FAILURE'
  };
}
export function createRecipeRequest(data) {
  return {
    type: '@recipe/CREATE_RECIPES_REQUEST',
    payload: { data }
  };
}

export function createRecipeSuccess() {
  return {
    type: '@recipe/CREATE_RECIPES_SUCCESS'
  };
}
export function createRecipeFailure() {
  return {
    type: '@recipe/CREATE_RECIPES_FAILURE'
  };
}

export function updateRecipeRequest(data, id) {
  return {
    type: '@recipe/UPDATE_RECIPES_REQUEST',
    payload: { data, id }
  };
}

export function updateRecipeSuccess() {
  return {
    type: '@recipe/UPDATE_RECIPES_SUCCESS'
  };
}
export function updateRecipeFailure() {
  return {
    type: '@recipe/UPDATE_RECIPES_FAILURE'
  };
}

export function deleteRecipesRequest(id) {
  return {
    type: '@recipe/DELETE_RECIPES_REQUEST',
    payload: { id }
  };
}

export function deleteRecipesSuccess(recipes) {
  return {
    type: '@recipe/DELETE_RECIPES_SUCCESS',
    payload: { recipes }
  };
}
export function deleteRecipesFailure() {
  return {
    type: '@recipe/DELETE_RECIPES_FAILURE'
  };
}
