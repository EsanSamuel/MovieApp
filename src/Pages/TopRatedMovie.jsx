import React, { useEffect, useState } from 'react'
import { MovieCard, Navbar } from '../components'
import { ClipLoader } from 'react-spinners'

const API_TOP_RATED_MOVIE = 'https://api.themoviedb.org/3/movie/top_rated?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'
const Home = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(API_TOP_RATED_MOVIE)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setData(data.results)

            })
    }, [])

    return (
        <div className='w-full bg-black'>
            <Navbar />
            <h1 className='text-white px-10 py-4 text-[25px]'>Top Rated Movies</h1>
            {data.length > 0 ? (
                <div className='grid grid-cols-2 '>
                {data.map((datax) => (
                    <MovieCard key={datax.id} {...datax} />
                ))}
            </div>
            ):(
                <div className='h-[100vh] text-center mt-10'>
                <ClipLoader
                        color='#f8242e'
                        loading:true
                        size={100}
                        aria-label="Loading Spinner"
                        data-testid="loader"
                    />
                </div>
            )}
           
        </div>
    )
}

export default Home