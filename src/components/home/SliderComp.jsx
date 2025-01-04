import React from 'react'
import Slider from "react-slick";

const SliderComp = () => {
    const settings = {
        // dots: true,
        infinite: true,
        speed: 500,
        autoplay: true,
        slidesToShow: 1,
        slidesToScroll: 1
    };
    return (
        <div className="slider-container">
            <Slider {...settings}>
                <div className='!flex items-center bg-custom-gray px-6'>
                    <div>
                        <div className='text-4xl font-bold'>En kaliteli ürünlerimizle..</div>
                        <div className='text-l my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi optio incidunt sapiente fuga, vel accusamus quas eius excepturi quam laborum laboriosam quod voluptate minima non? Expedita rem recusandae ex!</div>
                        <div className='border rounded-full cursor-poiner font-bold w-[150px] h-14 bg-gray-200 flex items-center justify-center'>İncele</div>
                    </div>
                    <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/e048d3f6-7ae5-4d12-a1ab-d4b136302253/NIKE+AIR+FORCE+1+%2707.png'></img>
                </div>

                <div className='!flex items-center bg-custom-gray px-6'>
                    <div>
                        <div className='text-4xl font-bold'>En kaliteli ürünlerimizle..</div>
                        <div className='text-l my-1'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde modi optio incidunt sapiente fuga, vel accusamus quas eius excepturi quam laborum laboriosam quod voluptate minima non? Expedita rem recusandae ex!</div>
                        <div className='border rounded-full cursor-poiner font-bold w-[150px] h-14 bg-gray-200 flex items-center justify-center'>İncele</div>
                    </div>
                    <img src='https://static.nike.com/a/images/c_limit,w_592,f_auto/t_product_v1/95f54b8d-a75b-4708-a911-a6e5ce729f32/AIR+FORCE+1+LV8+3+%28GS%29.png'></img>
                </div>
            </Slider >
        </div>
    )
}

export default SliderComp
