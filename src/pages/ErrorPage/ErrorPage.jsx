import React from 'react'
import { Link, useRouteError } from 'react-router-dom'
import errorGif from '../../assets/7iJI.gif'

const ErrorPage = () => {

    const { error } = useRouteError()

    return (
        <div >

            <div className='flex items-center  ' style={{
                backgroundImage: `url(${errorGif})`,
                backgroundSize: "100% 100%",
                height: "100vh"
            }}>

                <div className='mx-auto '>

                    <div className=' text-center mt-[500px] '>

                        <p className='text-2xl font-semibold md:text-3xl 
                            text-white '>{error?.message}
                        </p>
                        <Link to='/' className='btn  my-2 bg-[#0f2248] border-none  text-white hover:bg-[#0b1b3c]'>BACK To HOME
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default ErrorPage