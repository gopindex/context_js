import {
  GET_ALL_REPOS,
  GET_USER,
  GET_USERS,
  USERS_LOADED,
  SET_LOADING,
} from "./constants";
const intitialState = {
  users: null,
  repos: [],
  user: {},
  loading: true,
};

function GithubReducer(state, action) {
  switch (action.type) {
    case GET_USERS:
    case USERS_LOADED:
      return { ...state, users: action.payload };
    case GET_ALL_REPOS:
      return { ...state, repos: action.payload };
    case GET_USER:
      return { ...state, user: action.payload };
    case SET_LOADING:
      return { ...state, loading: action.payload };
    default:
      return state;
  }
}

export { GithubReducer, intitialState };
