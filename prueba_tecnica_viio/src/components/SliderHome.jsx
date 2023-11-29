/**
 * Componente SliderHome.
 *
 * Este componente muestra un slider de imágenes con la funcionalidad de navegación y paginación.
 * Utiliza la librería Swiper para implementar el slider.
 *
 * @component
 * @example
 * return (
 *   <SliderHome />
 * )
 */
"use client";
import useStore from "@/store/auth";
import { useEffect } from "react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import { Autoplay, Navigation, Pagination, Scrollbar } from "swiper/modules";
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

export default function SliderHome() {
  let autoplay = {
    delay: 3500,
    disableOnInteraction: false,
  };

  useEffect(() => {
    useStore.persist.rehydrate();
  }, []);

  return (
    <div className=" w-full ">
      <Swiper
        modules={[Navigation, Pagination, Scrollbar, Autoplay]}
        spaceBetween={0}
        slidesPerView={1}
        pagination={{
          dynamicBullets: true,
          clickable: true,
        }}
        autoplay={autoplay}
        navigation={true}
        className="h-[300px] lg:h-[500px] w-full  rounded-xl"
      >
        {data.map((item, index) => (
          <SwiperSlide
            key={index}
            style={{
              backgroundImage: `url(${item.image})`,
            }}
            className="flex justify-center items-center bg-no-repeat bg-center bg-cover 
            
            lg:aspect-w-16 lg:aspect-h-9 "
          >
            <div
              className="w-full"
              onClick={() => console.log("clicked")}
            ></div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}
