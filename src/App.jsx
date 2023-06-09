import React from 'react'
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import { Details, Home, SearchPage, SignUp, TopRatedMovie, TopRatedSeries, TvShow } from './Pages'
import { Sidebar } from './components'
import { FavoritesProvider } from './context/FavoritesContexts'

const App = () => {
  return (
    <div className='bg-[#1b1c1e] w-[100%] flex h-[100%] flex-row'>
    
      <div className='relative mr-10 sm:flex hidden w-[18%]' >
      <Sidebar />
      </div>

        <Routes className='bg-[#1b1c1e]'>
          <Route path='/' element={<Home/>} />
          <Route path='/signup' element={<SignUp />} />
          <Route path='/tv' element={<TvShow/>} />
          <Route path='/topMovie' element={<TopRatedMovie/>} />
          <Route path='/topSeries' element={<TopRatedSeries/>} />
          <Route path='/details/:id/:overview/:title/:image' element={<Details/>} />
          <Route path='/search' element={<SearchPage/>} />
          <Route path='/favorite' element={<FavoritesProvider/>} />
        </Routes>
     
    </div>
  )
}

export default App