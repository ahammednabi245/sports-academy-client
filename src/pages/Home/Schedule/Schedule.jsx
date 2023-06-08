import moment from 'moment/moment';
import React, { useEffect, useState } from 'react';
import { Bounce, JackInTheBox } from 'react-awesome-reveal';
import Marquee from "react-fast-marquee";

const Schedule = () => {

    const [currentTime, setCurrentTime] = useState(moment().format("h:mm:ss A"));

    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentTime(moment().format("h:mm:ss A"));
        }, 1000);

        return () => {
            clearInterval(interval);
        };
    }, []);

    return (
        <div>
            <div>
                <div className='flex justify-center'>
                    <div className='mt-12 border-double border-4 hover:border-dotted hover:border-2 w-60 rounded-tl-[100px] rounded-br-[100px] border-[#0b1b3c] p-7'>
                        <Bounce className='text-center font-semibold text-5xl'>Weekly</Bounce>
                        <JackInTheBox className='text-center font-medium text-xl my-4'>Schedule</JackInTheBox>
                    </div>
                </div>

                <div className='flex justify-center items-center mt-8'>
                    <div className=' bg-[#0f2248] text-white p-2 rounded'><h1>NEWS</h1></div>
                    <div>
                        <Marquee className='text-[#0f2248] text-lg font-medium' speed={100}>
                            New year registrations open, contact us and renew your card !
                        </Marquee>
                    </div>
                </div>

                <div className='my-10'>
                    <div className="overflow-x-auto shadow-2xl">
                        <table className="table table-xs">
                            <thead className='bg-[#0f2248] text-white h-[50px] text-center'>
                                <tr>
                                    <th className='w-[16.67%]'><p className='pt-2'>{moment().format("dddd, D MMMM,  YYYY")}</p> <br /> <p className='pb-2 -mt-2'>{currentTime}</p> </th>
                                    <th className='w-[16.67%]'>MONDAY</th>
                                    <th className='w-[16.67%]'>TUESDAY</th>
                                    <th className='w-[16.67%]'>WEDNESDAY</th>
                                    <th className='w-[16.67%]'>THURSDAY</th>
                                    <th className='w-[16.67%]'>FRIDAY</th>

                                </tr>
                            </thead>
                            <tbody className='text-center'>
                                <tr className='h-[80px]'>
                                    <th className='border text-lg'>09.00 am</th>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Junior Practice <br /> <span className='text-base font-normal'>Alexis Chalais</span></td>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Youth Practice <br /> <span className='text-base font-normal'>Mr. Alex</span></td>
                                    <td className='border'></td>
                                    <td className='border'></td>

                                </tr>
                                <tr className='h-[80px]'>
                                    <th className='border text-lg'>10.00 am</th>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Youth Practice <br /> <span className='text-base font-normal'>Celeste du Toit</span></td>
                                    <td className='border'></td>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Junior Practice <br /> <span className='text-base font-normal'>Rhod Gilbert</span></td>

                                </tr>
                                <tr className='h-[80px]'>
                                    <th className='border text-lg'>11.00 am</th>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Junior Practice <br /> <span className='text-base font-normal'>Fred Manyawu</span></td>
                                    <td className='border'></td>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Youth Practice <br />
                                        <span className='text-base font-normal'>Mulyo Handoyo</span></td>
                                    <td className='border'></td>

                                </tr>
                                <tr className='h-[80px]'>
                                    <th className='border text-lg'>12.00 pm</th>
                                    <td className='border'></td>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Junior Practice <br /> <span className='text-base font-normal'>Alexis Chalais</span></td>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Youth Practice <br /> <span className='text-base font-normal'>Celeste du Toit</span></td>

                                </tr>
                                <tr className='h-[80px]'>
                                    <th className='border text-lg'>13.00 pm</th>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Youth Practice <br /> <span className='text-base font-normal'>Mr. Alex</span></td>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Junior Practice <br /> <span className='text-base font-normal'>Rhod Gilbert</span></td>
                                    <td className='border'></td>

                                </tr>
                                <tr className='h-[80px]'>
                                    <th className='border text-lg'>14.00 pm</th>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>Youth Practice <br />
                                        <span className='text-base font-normal'>Mulyo Handoyo</span></td>
                                    <td className='border'></td>
                                    <td className='border'></td>
                                    <td className='border'></td>
                                    <td className='border text-lg font-semibold hover:bg-[#0f2248] hover:bg-opacity-20'>junior Practice <br /> <span className='text-base font-normal'>Fred Manyawu</span></td>

                                </tr>

                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Schedule;