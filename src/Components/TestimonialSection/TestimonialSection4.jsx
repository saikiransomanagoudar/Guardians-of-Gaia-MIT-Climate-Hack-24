import { useRef } from 'react';
import Slider from 'react-slick';
import SectionHeading from '../Heading';
import { FaRegStar, FaStar } from 'react-icons/fa';
import Spacing from '../Spacing';
import Review from '../Review';

const TestimonialSection4 = ({ data }) => {
  const sliderRef = useRef(null);
  const settings = {
    dots: false,
    infinite: true,
    speed: 1000,
    slidesToShow: 3,
    swipeToSlide: true,
    arrows: false,
    responsive: [
      {
        breakpoint: 1550,
        settings: {
          slidesToShow: 3,
        },
      },
      {
        breakpoint: 1200,
        settings: {
          slidesToShow: 2,
        },
      },
      {
        breakpoint: 700,
        settings: {
          slidesToShow: 1,
        },
      },
      {
        breakpoint: 0,
        settings: {
          slidesToShow: 1,
        },
      },
    ],
  };

  return (
    <>
      <div className="container">
        <SectionHeading
          subtitle={data.sectionSubtitle}
          title={data.sectionTitle}
          textCenter={'text-center'}
        />
        <Spacing lg={90} md={50} />
      </div>
      <div className="cs_slider cs_style_1 cs_slider_gap_24 cs_ptb_12">
        <div className="container">
          <Slider {...settings} ref={sliderRef}>
            {data.testimonials.map((testimonial, index) => (
              <div className="cs_slide" key={index}>
                <div className="cs_testimonial cs_style_1 cs_shadow_1 cs_white_bg">
                  <div className="cs_testimonial_avatar cs_mb_42">
                    <img src={testimonial.image} alt={testimonial.name} />
                    <div className="cs_testimonial_avatar_right">
                      <h3 className="cs_fs_21 cs_semibold cs_mb_2">
                        {testimonial.name}
                      </h3>
                      <p className="mb-0 cs_accent_color">{testimonial.role}</p>
                    </div>
                  </div>
                  <blockquote className="cs_fs_18 cs_mb_45">
                    {testimonial.feedback}
                  </blockquote>
                  <Review reviewNumber={testimonial.rating} />
                </div>
              </div>
            ))}
          </Slider>
        </div>
        <div className="cs_slider_arrows cs_style_1 cs_type_1">
          <div
            className="cs_arrow_wrap cs_arrow_wrap_left cs_center"
            onClick={() => sliderRef.current.slickPrev()}
            style={{ cursor: 'pointer' }}
          >
            <div className="cs_left_arrow rounded-circle cs_center">
              <svg
                width={31}
                height={16}
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M0.292892 7.29289C-0.0976315 7.68342 -0.0976315 8.31658 0.292892 8.70711L6.65685 15.0711C7.04738 15.4616 7.68054 15.4616 8.07107 15.0711C8.46159 14.6805 8.46159 14.0474 8.07107 13.6569L2.41421 8L8.07107 2.34315C8.46159 1.95262 8.46159 1.31946 8.07107 0.928932C7.68054 0.538408 7.04738 0.538408 6.65685 0.928932L0.292892 7.29289ZM31 7L1 7V9L31 9V7Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
          <div
            className="cs_arrow_wrap cs_arrow_wrap_right cs_center"
            onClick={() => sliderRef.current.slickNext()}
            style={{ cursor: 'pointer' }}
          >
            <div className="cs_right_arrow rounded-circle cs_center">
              <svg
                width={31}
                height={16}
                viewBox="0 0 31 16"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
                  fill="currentColor"
                />
              </svg>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default TestimonialSection4;