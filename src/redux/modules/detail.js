import axios from "axios";

const initialState = {
  detail_list: [],
};

const SERVER_URL = "http://3.39.223.175/api/posts";

const LOAD = "detail/LOAD";

//action 생성자 함수
export const loadDetail = (detail_list) => {
  // console.log(detail_list);
  return { type: LOAD, detail_list };
};

//midlewares
export const loadDetailDB = (postId) => {
  return function (dispatch) {
    axios.get(`${SERVER_URL}/${postId}`).then((response) => {
      console.log(response);
      dispatch(loadDetail(response.data.posts))
    }).catch((response) => console.log(response));
  };
};

//reducer
export default function reducer(state = initialState, action = {}) {
  switch (action.type) {
    case LOAD: {
      console.log(action.detail_list);
      return { list: action.detail_list };
    }

    default:
      return state;
  }
}
