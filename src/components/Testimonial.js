import React from "react";
import styled from "styled-components";
import { Pagination } from "swiper";
import { Swiper, SwiperSlide } from "swiper/react/swiper-react";

import img1 from "../assets/course-1.jpg";
import img2 from "../assets/course-2.jpg";
import img3 from "../assets/course-3.jpg";
const Testimonial = () => {
  return (
    <Wrapper>
      <div className="container test__container">
        <h2 className="title">student testimonial</h2>
        <div className="testimonials">
          <Swiper
            slidesPerView={1}
            spaceBetween={30}
            pagination={{
              clickable: true,
            }}
            modules={[Pagination]}
            className="mySwiper"
            breakpoints={{
              // when window width is >= 600px
              600: {
                width: 600,
                slidesPerView: 1,
              },
            }}
          >
            <SwiperSlide>
              {" "}
              <aside className="testimonial">
                <div className="avatar">
                  <img src={img1} alt="img" className="img" />
                </div>
                <div className="info">
                  <h5>reynal</h5>
                  <small>Student</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old
                  </p>
                </div>
              </aside>
            </SwiperSlide>

            <SwiperSlide>
              {" "}
              <aside className="testimonial">
                <div className="avatar">
                  <img src={img2} alt="img" className="img" />
                </div>
                <div className="info">
                  <h5>kevin</h5>
                  <small>Student</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old
                  </p>
                </div>
              </aside>
            </SwiperSlide>
            <SwiperSlide>
              {" "}
              <aside className="testimonial">
                <div className="avatar">
                  <img src={img3} alt="img" className="img" />
                </div>
                <div className="info">
                  <h5>ifeanyi</h5>
                  <small>Student</small>
                </div>
                <div className="testimonial__body">
                  <p>
                    Contrary to popular belief, Lorem Ipsum is not simply random
                    text. It has roots in a piece of classical Latin literature
                    from 45 BC, making it over 2000 years old It has roots in a
                    piece of classical Latin literature from 45 BC, making it
                    over 2000 years old
                  </p>
                </div>
              </aside>
            </SwiperSlide>
          </Swiper>
        </div>
      </div>
    </Wrapper>
  );
};

const Wrapper = styled.section`
  /* background: var(--color-primary); */
  .test__container {
    position: relative;
    overflow-x: hidden;
    margin-bottom: 5rem;
  }

  .testimonial {
    padding-top: 2rem;
  }
  .avatar img {
    width: 6rem;
    height: 6rem;
    border-radius: 50%;
    margin: 0 auto 1rem;
    border: 0.5rem solid var(--bg-color-2);
  }

  .info {
    text-align: center;
  }

  .testimonial__body {
    margin: 2rem 0;
    background: var(--color-primary);
    padding: 2rem 2rem;
    position: relative;
    &:before {
      content: "";
      display: block;
      width: 3rem;
      height: 3rem;
      background: var(--color-primary);
      position: absolute;
      left: 49%;
      top: -1.5rem;
      transform: rotate(45deg);
    }
    p {
      max-width: 100%;
    }
  }
`;
export default Testimonial;
