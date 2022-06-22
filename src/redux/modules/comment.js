import axios from "axios";

const initialState = {
  list: [],
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

// export const addComment = (comment) => {
//   console.log(comment);
//   return { type: ADD, comment };
// };

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
  return async function (dispatch) {
    await axios
      .get(`${SERVER_URL}/${postId}/comments`)
      .then((response) => {
        console.log(response);
        dispatch(loadComment(response.data));
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
      .then((response) => {
        // console.log(response);
        dispatch(loadCommentDB(postId));
      });
  };
};

export const updateCommentDB = (postId, commentId) => {
  let New_comment = prompt("댓글을 수정해주세요");
  if (New_comment === null) {
    return alert("수정이 취소되었습니다.");
  }
  let put_comment = { comment: New_comment };

  return function (dispatch) {
    axios
      .put(`${SERVER_URL}/${postId}/comments/${commentId}`, put_comment, {
        headers: { Authorization: `Bearer ${token}` },
      })
      .then((response) => {
        alert(response.data.message);

        dispatch(loadCommentDB(postId));
      });
  };
};

export const deleteCommentDB = (postId, commentId) => {
  const deleteConfirm = window.confirm("정말 삭제하시겠습니까?");
  if (deleteConfirm === true) {
    return function (dispatch) {
      axios
        .delete(`${SERVER_URL}/${postId}/comments/${commentId}`, {
          headers: { Authorization: `Bearer ${token}` },
        })
        .then((response) => {
          alert(response.data.message);
          dispatch(loadCommentDB(postId));
        });
    };
  } else {
    return;
  }
};

//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      console.log(action.comment_list);
      return { list: action.comment_list };
    }
    case ADD: {
      break;
    }
    case UPDATE: {
      break;
    }

    case DELETE: {
      break;
    }

    default:
      return state;
  }
}
