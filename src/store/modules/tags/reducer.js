import produce from 'immer';

const INITIAL_STATE = {
  tags: []
};

export default function tag(state = INITIAL_STATE, action) {
  return produce(state, draft => {
    switch (action.type) {
      default:
        return state;
    }
  });
}
