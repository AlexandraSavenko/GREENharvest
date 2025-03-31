import { Swiper, SwiperSlide } from 'swiper/react';
import { Keyboard, Pagination, Scrollbar, A11y } from 'swiper/modules';

// import 'swiper/css/bundle';
import 'swiper/scss';
import 'swiper/scss/pagination';
import '../scss/Reviews.scss'
import Ihor_min from "../images/Ihor_min.jpg"
import Victoria_min from "../images/Victoria_min.jpg"
import John_min from "../images/John_min.jpg"


export default function Reviews () {
    return <section className="reviews-section">
    <div className='container reviews'>
        <h2>REVIEWS FROM OUR <span>CUSTOMERS</span></h2>
        <p>Words of our customers: impressions and opinions about the
             quality of our services and the freshness of our products.</p>
             <Swiper 
                   modules={[Keyboard, Pagination, Scrollbar, A11y]}
      spaceBetween={50}
      slidesPerView={1}
      keyboard
      pagination={{ clickable: true }}
      scrollbar={{ draggable: true }}
      breakpoints={{
        768: {
            slidesPerView: 2,
        },
        1200: {
            slidesPerView: 3,
        }
      }
      }
      // onSlideChange={() => console.log('slide change')}
      // onSwiper={(swiper) => console.log(swiper)}
    >
      <SwiperSlide className='slide'>
        <img className='reviewImg' src={John_min} alt="John Wax shares his oppinion" />
        <h3>John Wax</h3>
            <p>These vegetables are my secret to delicious and healthy meals. 
                The quality is always the highest level, the aroma and taste are enehanting. 
                I advise every fan of real products!</p>
                </SwiperSlide>
      
      <SwiperSlide className='slide'>
        <img className='reviewImg' src={Victoria_min} alt="Victoria Romashenko shares his oppinion" />
        <h3>Victoria Romashenko</h3>
            <p>I love how fast and fresh the vegetables are delivered. 
                Salads always turn out so appetizing and aoups are real masterpieces. 
                The quality is impeccable!</p>
                </SwiperSlide>
      <SwiperSlide className='slide'>
        <img className='reviewImg' src={Ihor_min} alt="Ihor Trachuk shares his oppinion" />
        <h3>Ihor Trachuk</h3>
            <p>Recently tried my fresh tomatoes and peppers amazing! 
                The authenticity of the taste, as if from the garden 
                directly to my table. It is now my main vegetable supplier.</p>
                </SwiperSlide>
    </Swiper>
    </div>
    </section>
}