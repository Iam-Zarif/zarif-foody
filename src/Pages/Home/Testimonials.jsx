
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/navigation';



// import required modules
import { Parallax, Pagination, Navigation } from 'swiper/modules';
import HomeContainer from '../../Container/HomeContainer';
const Testimonials = () => {
    return (
      <div className='mt-20'>
        <div>
            <p className='text-3xl font-bold  text-center'>What Our Customers Say</p>
        </div>
         <div className='parallax-bg py-20  bg-fixed mt-10'>
       
       <HomeContainer>
        <div className=" mt-24 ">
      <Swiper
       style={{
         '--swiper-navigation-color': '#fff',
         '--swiper-pagination-color': '#fff',
       }}
       speed={600}
       parallax={true}
       pagination={{
         clickable: true,
       }}
       navigation={true}
       modules={[Parallax, Pagination, Navigation]}
       className="mySwiper"
     >
       <div
         slot="container-start bg-img"
         className=""
         
         data-swiper-parallax="-23%"
       ></div>
       <SwiperSlide className='px-20'>
       <div className='grid grid-cols-2 mx-auto'>
       <div className='mx-auto'>
        <div className="title" data-swiper-parallax="-300">
           <img src={"https://i.ibb.co/qjb7pCC/photo-1625689871790-1c6e2161a0e3.jpg"} className='rounded-full h-40 w-40 border-4 border-orange-500 shadow-xl shadow-black' alt="" />
         </div>
         <div className="subtitle" data-swiper-parallax="-200">
           <p className='text-4xl font-bold text-orange-500'>Jane Frost</p>
         </div>
        </div>
         <div className='mx-auto'><div className=" text-lg font-bold text-white" data-swiper-parallax="-100">
           <p className=''>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
             dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
             laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
             Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
             Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
             ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
             tincidunt ut libero. Aenean feugiat non eros quis feugiat.
           </p>
         </div></div>
       </div>
       </SwiperSlide>
       <SwiperSlide className='px-20'>
       <div className='grid grid-cols-2 mx-auto'>
       <div className='mx-auto'>
        <div className="title" data-swiper-parallax="-300">
           <img src={"https://i.ibb.co/qjb7pCC/photo-1625689871790-1c6e2161a0e3.jpg"} className='rounded-full h-40 w-40 border-4 border-orange-500 shadow-xl shadow-black' alt="" />
         </div>
         <div className="subtitle" data-swiper-parallax="-200">
           <p className='text-4xl font-bold text-orange-500'>Jane Frost</p>
         </div>
        </div>
         <div className='mx-auto'><div className=" text-lg font-bold text-white" data-swiper-parallax="-100">
           <p className=''>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
             dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
             laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
             Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
             Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
             ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
             tincidunt ut libero. Aenean feugiat non eros quis feugiat.
           </p>
         </div></div>
       </div>
       </SwiperSlide>
       <SwiperSlide className='px-20'>
       <div className='grid grid-cols-2 mx-auto'>
       <div className='mx-auto'>
        <div className="title" data-swiper-parallax="-300">
           <img src={"https://i.ibb.co/qjb7pCC/photo-1625689871790-1c6e2161a0e3.jpg"} className='rounded-full h-40 w-40 border-4 border-orange-500 shadow-xl shadow-black' alt="" />
         </div>
         <div className="subtitle" data-swiper-parallax="-200">
           <p className='text-4xl font-bold text-orange-500'>Jane Frost</p>
         </div>
        </div>
         <div className='mx-auto'><div className=" text-lg font-bold text-white" data-swiper-parallax="-100">
           <p className=''>
             Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aliquam
             dictum mattis velit, sit amet faucibus felis iaculis nec. Nulla
             laoreet justo vitae porttitor porttitor. Suspendisse in sem justo.
             Integer laoreet magna nec elit suscipit, ac laoreet nibh euismod.
             Aliquam hendrerit lorem at elit facilisis rutrum. Ut at
             ullamcorper velit. Nulla ligula nisi, imperdiet ut lacinia nec,
             tincidunt ut libero. Aenean feugiat non eros quis feugiat.
           </p>
         </div></div>
       </div>
       </SwiperSlide>
      
       
     </Swiper>
     </div>
      </HomeContainer>
      </div>
      </div>
    );
};

export default Testimonials;