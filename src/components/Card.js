import React from "react";
import { useNavigate } from "react-router-dom";

import SwiperCore, { EffectCoverflow, Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/swiper-bundle.min.css";
import "swiper/swiper.min.css";

//style
import "../styles/components/Card.css";
SwiperCore.use([EffectCoverflow, Pagination]);

const Card = (props) => {
  const slide_img = props.image;
  // const slide_img = [
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTNTHpu6rS_L4S1twfPvhMNI5Vap8cxvm3cNdL_Iy6oHKR_I_S1ATlpKZjdLILrAYa52vE&usqp=CAU",
  //   "http://itimg.chosun.com/sitedata/image/201607/15/2016071585002_2.jpg",
  //   "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQMmF9KupmJluNLyeOXE_6J0nMEU1JuP3OnSiNE2oGAKHIzssYyQq22R1h2w_iCua3fbGs&usqp=CAU",
  // ];
  // console.log(props.image);

  const navigate = useNavigate();

  const postId = props.postId;

  const moveToDetailPage = () => {
    navigate(`/detail/${postId}`);
  };
  return (
    <div onClick={moveToDetailPage} className="card_container">
      <div className="card">
        <Swiper
          effect={"coverflow"}
          grabCursor={true}
          centeredSlides={true}
          slidesPerView={"auto"}
          coverflowEffect={{
            rotate: 50,
            stretch: 0,
            depth: 100,
            modifier: 1,
            slideShadows: false,
          }}
          pagination={true}
          className="mySwiper"
        >
          {/* // Using array */}
          {slide_img.map((img, i) => {
            return (
              <SwiperSlide key={i}>
                <img className="card_image" src={img} alt="" />
              </SwiperSlide>
            );
          })}
        </Swiper>

        <div className="card_content">
          <div>
            <p>{props.location}</p>
            <span>{props.star === "NEW" ? "NEW!" : props.star + " ★"} </span>
          </div>
          <p>{props.length}</p>
          <p>{props.date}</p>
          <p>
            <span>{props.price.split("/")[0]} </span>
            /박
          </p>
        </div>
      </div>
    </div>
  );
};

export default Card;
