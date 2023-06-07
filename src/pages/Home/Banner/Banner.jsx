import React, { useRef } from 'react';
import {  Fade, Flip, JackInTheBox,  Rotate, Slide, Zoom } from "react-awesome-reveal";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/scrollbar";
import "./Banner.css"
import { Scrollbar } from "swiper";
import cricket from "../../../assets/Cricket Banner.jpg"
import football from "../../../assets/Football Banner.jpg"
import badminton from "../../../assets/Badminton Banner.jpg"
import rugby from "../../../assets/Rugby Banner.jpeg"
import swimming from "../../../assets/Swimming Banner.jpg"
import 'swiper/css/pagination';
import 'swiper/css/navigation';
import { Autoplay, Pagination, Navigation } from 'swiper';


const Banner = () => {

    const progressCircle = useRef(null);
    const progressContent = useRef(null);
    const onAutoplayTimeLeft = (s, time, progress) => {
        progressCircle.current.style.setProperty('--progress', 1 - progress);
        progressContent.current.textContent = `${Math.ceil(time / 1000)}s`;
    };

    return (
        <div>
            <div>


            </div>
            <div >
                <Swiper
                    spaceBetween={30}
                    centeredSlides={true}
                    autoplay={{
                        delay: 4000,
                        disableOnInteraction: false,
                    }}

                    navigation={true}
                    modules={[Autoplay, Pagination, Navigation, Scrollbar]}
                    onAutoplayTimeLeft={onAutoplayTimeLeft}
                    className="mySwiper"
                >
                    <SwiperSlide>
                        <div className="slide-container w-[100%] h-[550px]">
                            <img src={football} alt="" />
                            <div className="slide-text">
                                <Slide className='ml-[40px]'>
                                    <div className='w-[400] h-[400] p-10 bg-slate-900 opacity-75  rounded-tr-[50px] rounded-bl-[50px]'>
                                        <Rotate className='text-[40px]'>Football</Rotate>
                                        <Fade delay={1e3} cascade damping={1e-1} className='text-[16px]'>
                                            Sports Academy
                                        </Fade>
                                        <Flip>100% Qualified</Flip>

                                    </div>
                                </Slide>


                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container w-[100%] h-[550px]">
                            <img src={cricket} alt="" />
                            <div className="slide-text">
                                <Zoom className='ml-[200px]'>
                                    <div className='w-[400] h-[400] p-10  bg-slate-900 opacity-75 rounded-tl-[50px] rounded-br-[50px]'>
                                        <Rotate  className='text-[40px]'>Cricket</Rotate>

                                        <Fade delay={1e3} cascade damping={1e-1} className='text-[16px]'>
                                            Sports Academy
                                        </Fade>
                                        <Flip>100% Qualified</Flip>

                                    </div>
                                </Zoom>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container  w-[100%] h-[550px]">
                            <img src={badminton} alt="" />
                            <div className="slide-text">
                                <JackInTheBox className='mr-[220px] -mt-10'>
                                    <div className='w-[400] h-[400] p-10 bg-slate-900 opacity-75 rounded-tr-[50px] rounded-bl-[50px]'>
                                        <Rotate  className='text-[40px]'>Badminton</Rotate>

                                        <Fade delay={1e3} cascade damping={1e-1} className='text-[16px]'>
                                            Sports Academy
                                        </Fade>
                                        <Flip>100% Qualified</Flip>

                                    </div>
                                </JackInTheBox>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container w-[100%] h-[550px]">
                            <img src={rugby} alt="" />
                            <div className="slide-text">
                                <Slide>
                                    <div className='w-[400] h-[400] p-10 bg-slate-900 opacity-75 rounded-tl-[50px] rounded-br-[50px]'>
                                        <Rotate  className='text-[40px]'>Rugby</Rotate>

                                        <Fade delay={1e3} cascade damping={1e-1} className='text-[16px]'>
                                            Sports Academy
                                        </Fade>
                                        <Flip>100% Qualified</Flip>

                                    </div>
                                </Slide>

                            </div>
                        </div>
                    </SwiperSlide>
                    <SwiperSlide>
                        <div className="slide-container w-[100%] h-[550px]">
                            <img src={swimming} alt="" />
                            <div className="slide-text ">
                                <Zoom>
                                    <div className='w-[400] h-[400] p-10 bg-slate-900 opacity-75 rounded-tr-[50px] rounded-bl-[50px]'>
                                        <Rotate  className='text-[40px]'>Swimming</Rotate>

                                        <Fade delay={1e3} cascade damping={1e-1} className='text-[16px]'>
                                            Sports Academy
                                        </Fade>
                                        <Flip>100% Qualified</Flip>

                                    </div>
                                </Zoom>

                            </div>
                        </div>
                    </SwiperSlide>
                    <div className="autoplay-progress" slot="container-end">
                        <svg viewBox="0 0 48 48" ref={progressCircle}>
                            <circle cx="24" cy="24" r="20"></circle>
                        </svg>
                        <span ref={progressContent}></span>
                    </div>
                </Swiper>
            </div>
        </div>
    );
};

export default Banner;