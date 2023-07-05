import React, { useState } from 'react'
import { shortenTitle } from '../Utils/ShortenTitle'
import { Link } from 'react-router-dom'
import { AiOutlineClose } from 'react-icons/ai'

const API_IMG = 'https://image.tmdb.org/t/p/w500/'

const MovieCard = ({ id, poster_path, title, overview, release_date, vote_average, original_language}) => {
    const [showDetails, setShowDetails] = useState(false)
    return (
        <div className=''>
            <div className='sm:p-10 p-5 rounded  p h-[60%]'>
                <img src={API_IMG + poster_path} className='rounded-[10px] w-full sm:h-[400px]' onClick={() => setShowDetails(true)} />
                <div className=' sm:mt-[-15%] mt-[-45%] text-center text-white glass py-5 px-5'>
                    <h1 className='sm:hidden'>{shortenTitle(title)}</h1>
                    <h1 className='sm:flex hidden'>{title}</h1>
                </div>
            </div>


            {showDetails && (
                <div className=' z-10  bg-[#1b1c1e]  w-full fixed h-full sm:p-10 top-[0] left-[0] overflow-auto'>
                    <AiOutlineClose className='text-white float-right absolute sm:hidden text-[30px] mt-5 ml-5' onClick={() => setShowDetails(false)} />
                    <AiOutlineClose className='text-white float-right sm:flex hidden text-[30px] mt-5 ml-5' onClick={() => setShowDetails(false)} />
                    <div className='flex justify-between'>
                        <img src={API_IMG + poster_path} className='sm:w-[30%] top-0 w-full h-[300px] sm:rounded' /><br />
                        <div className='mt-20'>
                            <h1 className='text-white sm:flex hidden '>Release Date: <span className='text-[#5f5f5f] ml-2'>{release_date}</span></h1>
                            <h1 className='text-white sm:flex hidden '>Rating: <span className='text-[#5f5f5f] ml-2'>{vote_average
                            }</span></h1>
                            <h1 className='text-white sm:flex hidden '>Language: <span className='text-[#5f5f5f] ml-2'>{original_language
                            }</span></h1>
                        </div>
                    </div>
                    <div className='z-10 p-5'>
                        <h1 className='text-white text-[25px] pb-5 text-center'>{title}</h1>
                        <h1 className='text-[#5f5f5f]'>{overview}</h1>
                        <div className='mt-20'>
                            <h1 className='text-white sm:hidden '>Release Date: <span className='text-[#5f5f5f] ml-2'>{release_date}</span></h1>
                            <h1 className='text-white sm:hidden '>Rating: <span className='text-[#5f5f5f] ml-2'>{vote_average
                            }</span></h1>
                            <h1 className='text-white sm:hidden '>Language: <span className='text-[#5f5f5f] ml-2'>{original_language
                            }</span></h1>
                        </div>
                    </div>
                </div>
            )}
        </div>




    )
}

export default MovieCard
