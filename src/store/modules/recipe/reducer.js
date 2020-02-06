import produce from 'immer';

const INITIAL_STATE = {
  data: [],
  loading: false
};
export default function recipe(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      case '@recipe/STORE_RECIPES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipe/STORE_RECIPES_SUCCESS': {
        draft.data = action.payload.recipes;
        draft.loading = false;
        break;
      }
      case '@recipe/STORE_RECIPES_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@recipe/UPDATE_RECIPES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipe/UPDATE_RECIPES_SUCCESS': {
        draft.loading = false;
        break;
      }
      case '@recipe/UPDATE_RECIPES_FAILURE': {
        draft.loading = false;
        break;
      }
      case '@recipe/DELETE_RECIPES_REQUEST': {
        draft.loading = true;
        break;
      }
      case '@recipe/DELETE_RECIPES_SUCCESS': {
        draft.data = action.payload.recipes;
        draft.loading = false;
        break;
      }
      case '@recipe/DELETE_RECIPES_FAILURE': {
        draft.loading = false;
        break;
      }
      default:
        return state;
    }
  });
}
