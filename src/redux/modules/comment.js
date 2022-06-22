import axios from "axios";

const initialState = {
  comment_list: [],
};

const SERVER_URL = "http://3.39.223.175/api/posts";
const token = localStorage.getItem("user-token");

const LOAD = "comment/LOAD";
const ADD = "comment/ADD";
const UPDATE = "comment/UPDATE";
const DELETE = "comment/DELETE";

export const loadComment = (comment_list) => {
  return { type: LOAD, comment_list };
};

export const addComment = (comment) => {
  console.log(comment);
  return { type: ADD, comment };
};

export const updateComment = (comment_index, comment) => {
  console.log(comment_index, comment);
  return { type: UPDATE, comment_index, comment };
};

export const deleteComment = (comment_index) => {
  console.log(comment_index);
  return { type: DELETE, comment_index };
};

//midlewares
export const loadCommentDB = (postId) => {
  return function (dispatch) {
    axios
      .get(`${SERVER_URL}/${postId}/comments`)
      .then((response) => {
        console.log(response);
        dispatch(loadComment(response));
      })
      .catch((response) => console.log(response));
  };
};

export const addCommentDB = (postId, comment) => {
  return function (dispatch) {
    axios
      .post(`${SERVER_URL}/${postId}/comments`, comment, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => dispatch(addComment(comment)));
  };
};

//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      console.log(action.comment_list);
      return { list: action.comment_list };
    }
    case ADD: {
      const new_comment_list = [...state.list, action.comment];
      return { list: new_comment_list };
    }

    default:
      return state;
  }
}
