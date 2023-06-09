import React, { useEffect, useState } from 'react'
import { TvCard, Navbar } from '../components'
import { ClipLoader } from 'react-spinners'

const API_TV = 'https://api.themoviedb.org/3/tv/popular?api_key=8321b45654d7b14a8459f4fbeb8d9bb9'
const TvShow = () => {
    const [data, setData] = useState([])
    useEffect(() => {
        fetch(API_TV)
            .then((res) => res.json())
            .then(data => {
                console.log(data)
                setData(data.results)

            })
    }, [])

    return (
        <div className='w-full bg-black'>
            <Navbar />
            <h1 className='text-white px-10 py-4 text-[25px]'>Top Tv Shows</h1>
            {data.length > 0 ? (
                <div className='grid grid-cols-2 '>
                    {data.map((datax) => (
                        <TvCard key={datax.id} {...datax} />
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

export default TvShow