import React from "react";
import { useNavigate } from "react-router-dom";

//component
import ProfileModal from "./ProfileModal";

//style, icons
import "../styles/components/Header.css";
import { MdAccountCircle } from "react-icons/md";
import { BsList } from "react-icons/bs";

const Header = () => {
  const navigate = useNavigate();
  const [profileModalOpen, setModalOpen] = React.useState(false);

  const openProfileModal = () => {
    setModalOpen(true);
  };
  const closeProfileModal = () => {
    setModalOpen(false);
  };

  return (
    <header className="header">
      <div
        onClick={() => {
          navigate("/");
        }}
        className="header_title"
      >
        airbnb
      </div>
      <div className="header_profile" onClick={openProfileModal}>
        <BsList style={{ fontSize: "23px" }} />
        <MdAccountCircle style={{ fontSize: "35px", color: "gray" }} />
      </div>

      {profileModalOpen && (
        <ProfileModal open={openProfileModal} close={closeProfileModal} />
      )}
    </header>
  );
};

export default Header;
