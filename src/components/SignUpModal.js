import React from "react";
import axios from "axios";

//styles
import "../styles/components/AuthModal.css";

const SignUpModal = (props) => {
  // Ref로 요소 잡아준 것들
  const useremail_ref = React.useRef(null);
  const password_ref = React.useRef(null);
  const checkpassword_ref = React.useRef(null);
  const nickname_ref = React.useRef(null);

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { openSignUpModal, closeSignUpModal } = props;

  // 회원가입 Axios  데이터 POST
  const SignUpSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://3.39.223.175/api/register", {
        useremail: useremail_ref.current.value,
        nickname: nickname_ref.current.value,
        password: password_ref.current.value,
        checkpassword: checkpassword_ref.current.value,
      })
      .then((response) => {
        console.log(response);
        alert(response.data.message); // 회원가입 완료
      })
      .catch((response) => {
        alert(response.response.data.message); // 해당 오류 메세지 생성
        useremail_ref.current.value = "";
        nickname_ref.current.value = "";
        password_ref.current.value = "";
        checkpassword_ref.current.value = "";
      });
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={openSignUpModal ? "openModal modal" : "modal"}>
      {openSignUpModal ? (
        <section>
          <header>
            <button className="close" onClick={closeSignUpModal}>
              &times;
            </button>
            회원 가입
          </header>
          <main>
            <form onSubmit={SignUpSubmitHandler}>
              Email
              <input type="email" ref={useremail_ref} required />
              Nicname
              <input type="text" ref={nickname_ref} required />
              Password
              <input type="password" ref={password_ref} required />
              Check Password
              <input type="password" ref={checkpassword_ref} required />
              <button className="close">Sign Up</button>
            </form>
          </main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default SignUpModal;
