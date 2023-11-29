/**
 * Componente Slider.
 *
 * @component
 * @param {string} type - El tipo de slider ("roomIdeas" o "shopByRoom").
 * @param {string} title - El título del slider.
 * @returns {JSX.Element} El componente Slider.
 */
"use client";
import Image from "next/image";
import { Suspense } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Navigation, Pagination, Scrollbar } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
const data = [
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/0/0c/GoldenGateBridge-001.jpg/1200px-GoldenGateBridge-001.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://cdn.britannica.com/s:800x450,c:crop/35/204435-138-2F2B745A/Time-lapse-hyper-lapse-Isle-Skye-Scotland.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://static2.tripoto.com/media/filter/tst/img/735873/TripDocument/1537686560_1537686557954.jpg",
    caption: "Darjeeling",
  },
  {
    image:
      "https://upload.wikimedia.org/wikipedia/commons/thumb/1/16/Palace_of_Fine_Arts_%2816794p%29.jpg/1200px-Palace_of_Fine_Arts_%2816794p%29.jpg",
    caption: "San Francisco",
  },
  {
    image:
      "https://i.natgeofe.com/n/f7732389-a045-402c-bf39-cb4eda39e786/scotland_travel_4x3.jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.tusktravel.com/blog/wp-content/uploads/2020/07/Best-Time-to-Visit-Darjeeling-for-Honeymoon.jpg",
    caption: "Darjeeling",
  },

  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    caption: "Scotland",
  },
  {
    image:
      "https://www.oyorooms.com/travel-guide/wp-content/uploads/2019/02/summer-7.jpg",
    caption: "Darjeeling",
  },

  {
    image:
      "https://images.ctfassets.net/bth3mlrehms2/6Ypj2Qd3m3jQk6ygmpsNAM/61d2f8cb9f939beed918971b9bc59bcd/Scotland.jpg?w=750&h=422&fl=progressive&q=50&fm=jpg",
    caption: "Scotland",
  },
];

export default function Slider({ type, title }) {
  let optionsSlider = {
    slidesPerView: 0,
    spaceBetween: 0,
    widthImage: 0,
    navigation: false,
    autoplay: false,
    heightSlider: "",
    heightImage: 0,
    styleSwiper: "",
  };

  if (type === "roomIdeas") {
    optionsSlider = {
      slidesPerView: 2.5,
      spaceBetween: 30,
      widthImage: 600,
      heightImage: 200,
      heightSlider: "200",
      styleSwiper: "h-[200px]  w-full  rounded-xl",
    };
  }
  if (type === "shopByRoom") {
    optionsSlider = {
      slidesPerView: 2.2,
      spaceBetween: 30,
      widthImage: 600,
      heightImage: 200,
      heightSlider: "300",
    };
  }

  return (
    <div className=" w-full">
      <h1 className="text-3xl font-semibold my-5 lg:text-4xl">{title}</h1>
      <Suspense fallback={<div>Loading...</div>}>
        <Swiper
          modules={[Navigation, Pagination, Scrollbar]}
          slidesPerView={optionsSlider.slidesPerView}
          spaceBetween={optionsSlider.spaceBetween}
          pagination={{
            dynamicBullets: true,
            clickable: true,
          }}
          navigation={optionsSlider.navigation}
          className={optionsSlider.styleSwiper}
        >
          {data.map((item, index) => (
            <SwiperSlide key={index}>
              <div className={`h-[${optionsSlider.heightSlider}px]  flex`}>
                <Image
                  src={item.image}
                  alt={item.caption}
                  style={{
                    borderRadius: "10px",
                    objectFit: "fill",
                    width: `${optionsSlider.widthImage}`,
                  }}
                  width={optionsSlider.widthImage}
                  height={200}
                />
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </Suspense>
    </div>
  );
}
