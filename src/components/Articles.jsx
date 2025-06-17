import { Swiper, SwiperSlide } from "swiper/react";
import { testimonials } from "../data";
import { Autoplay, EffectCoverflow, Pagination } from "swiper/modules";
import "../styles/articles.css";
import "swiper/css";

const Testimonials = () => {
  return (
    <section id="articles">
      <div className="section__wrapper">
        <div className="section__header">
          <h2 className="shine">Articles</h2>
        </div>
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
            slideShadows: true,
          }}
          pagination={true}
          autoplay={true}
          speed={3000}
          loop={true}
          modules={[EffectCoverflow, Pagination, Autoplay]}
          breakpoints={
            { 700: { slidesPerView: 2 } ,  950: { slidesPerView: 3 } }
          }
          className="mySwiper"
        >
          {testimonials.map(({ avatar, name, review }, index) => (
            <SwiperSlide className="card testimonial" key={index}>
              <div className="avatar">
                <img src={avatar} alt={name} />
              </div>
              <h3 className="name">{name}</h3>
              <p className="text__muted review">{review}</p>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
};

export default Testimonials;
