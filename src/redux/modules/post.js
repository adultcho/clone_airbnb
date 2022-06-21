import axios from "axios";

const initialState = {
  post_list: [],
};

const SERVER_URL = "http://3.39.223.175/api/posts";

const LOAD = "detail/LOAD";

//action 생성자 함수
export const loadPost = (post_list) => {
//   console.log(post_list);
  return { type: LOAD, post_list };
};

//midlewares
export const loadPostDB = () => {
  return function (dispatch) {
    axios.get(`${SERVER_URL}`).then((response) => {
    //   console.log(response);
      dispatch(loadPost(response.data.posts))
    }).catch((response) => console.log(response));
  };
};

//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
    //   console.log(action.post_list);
      return { list: action.post_list };
    }

    default:
      return state;
  }
}
