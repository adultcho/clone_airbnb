import React from "react";
import axios from "axios";

//styles
import "../styles/components/AuthModal.css";

const SignInModal = (props) => {
  // Ref로 요소 잡아준 것들
  const useremail_ref = React.useRef(null);
  const password_ref = React.useRef(null);

  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { openSignInModal, closeSignInModal } = props;

  const SignInSubmitHandler = (e) => {
    e.preventDefault();

    axios
      .post("http://3.39.223.175/api/auth", {
        useremail: useremail_ref.current.value,
        password: password_ref.current.value,
      })
      .then((response) => {
        console.log(response);
        localStorage.setItem("user-token", response.data.accessToken);
        localStorage.setItem("user-email", useremail_ref.current.value);
        alert(response.data.message);
        window.location.reload();
      })
      .catch((error) => {
        alert(error.response.data.errorMessage);
        useremail_ref.current.value = "";
        password_ref.current.value = "";
      });
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={openSignInModal ? "openModal modal" : "modal"}>
      {openSignInModal ? (
        <section>
          <header>
            <button className="close" onClick={closeSignInModal}>
              &times;
            </button>
            로그인
          </header>
          <main>
            <form onSubmit={SignInSubmitHandler}>
              Email
              <input type="email" ref={useremail_ref} required />
              Password
              <input type="password" ref={password_ref} required />
              <button className="close">log In</button>
            </form>
          </main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default SignInModal;
