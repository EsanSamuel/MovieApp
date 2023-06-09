import React, { useEffect, useState } from 'react'
import { Favorites, MovieCard, Navbar, Sidebar } from '../components'
import Details from './Details'
import { ClipLoader } from 'react-spinners'
import { getFavorites } from '../context/FavoritesContexts'

const API_URL = 'https://api.themoviedb.org/3/movie/popular?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'
const Home = () => {
    const [data, setData] = useState([])

    const datas = () => {
        fetch(API_URL)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setData(data.results)
            })
    }

    useEffect(() => {
        datas()
    }, [])

    return (
        <div className='w-full bg-black'>

            <Navbar />
            <h1 className='text-white px-10 py-4 text-[25px]'>Top Movies</h1>
            {data.length > 0 ? (
                <div className='grid grid-cols-2 '>
                    {data.map((datax) => (
                        <MovieCard key={datax.id} {...datax} />
                    ))}
                </div>
            ) : (
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