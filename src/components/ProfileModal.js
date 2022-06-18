import React from "react";

//styles
import "../styles/components/ProfileModal.css";
import SignInModal from "./SignInModal";
import SignUpModal from "./SignUpModal";

const ProfileModal = (props) => {
  // 열기, 닫기, 모달 헤더 텍스트를 부모로부터 받아옴
  const { open, close } = props;

  const [signInModalOpen, setSignInModalOpen] = React.useState(false);
  const [signUpModalOpen, setSignUpModalOpen] = React.useState(false);

  const localStoragetokenCheck = localStorage.getItem("user-token");

  //로그아웃
  const logOut = () => {
    localStorage.removeItem("user-token");
    alert("로그아웃 되었습니다.");
    window.location.reload();
  };

  //회원가입 모달
  const openSignUpModal = (e) => {
    setSignUpModalOpen(true);
  };
  const closeSignUpModal = (e) => {
    e.stopPropagation();
    setSignUpModalOpen(false);
  };

  //로그인 모달
  const openSignInModal = (e) => {
    setSignInModalOpen(true);
  };
  const closeSignInModal = (e) => {
    e.stopPropagation();
    setSignInModalOpen(false);
  };

  return (
    // 모달이 열릴때 openModal 클래스가 생성된다.
    <div className={open ? "openProfileModal profileModal" : "profileModal"}>
      {open && !localStoragetokenCheck ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>

          <main>
            <div onClick={openSignUpModal}>
              {signUpModalOpen && (
                <SignUpModal
                  openSignUpModal={openSignUpModal}
                  closeSignUpModal={closeSignUpModal}
                />
              )}
              <span>회원 가입</span>
            </div>
            <div onClick={openSignInModal}>
              {signInModalOpen && (
                <SignInModal
                  openSignInModal={openSignInModal}
                  closeSignInModal={closeSignInModal}
                />
              )}
              <span>로그인</span>
            </div>
          </main>
          <footer></footer>
        </section>
      ) : open && localStoragetokenCheck ? (
        <section>
          <header>
            <button className="close" onClick={close}>
              &times;
            </button>
          </header>
          <main>
            <div onClick={logOut}>
              <span>로그아웃</span>
            </div>
          </main>
          <footer></footer>
        </section>
      ) : null}
    </div>
  );
};

export default ProfileModal;
