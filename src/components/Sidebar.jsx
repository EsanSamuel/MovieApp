import React, { useState, useContext } from 'react'
import { BiCameraMovie, BiHomeAlt } from 'react-icons/bi'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContexts'
import { SiSteelseries } from 'react-icons/si'
import { MdOutlineMovieCreation, MdOutlineFavorite, MdRecentActors } from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineLogout, HiOutlineLogin } from 'react-icons/hi'

const Sidebar = () => {
    const [changeText, setChangeText] = useState(false)

    const { signIn, signOut } = useContext(FavoritesContext)

    const handleChange = () => {
        setChangeText(!changeText)
    }
    return (
        <div className='text-white p-10 overflow-auto '>
            <div className='fixed'>
                <h1 className='text-[20px] flex gap-1 '><BiCameraMovie className='text-[25px]' />Movie<span className="text-[#f8242e]">Time</span></h1>

                <div>
                    <ul className='gap-10 mt-20 text[-#eaeaea] cursor-pointer'>
                        <h1 className='text-white font-bold '>Menu</h1>
                        <Link to='/'><li className={`mt-10 flex gap-1 ${(changeText === true) ? 'text-[#f8242e]' : 'text[-#eaeaea]'}`}><BiHomeAlt className='text-[20px]' />Movies</li></Link>
                        <Link to='/tv'><li className={`mt-5 flex gap-1 ${(changeText === true) ? 'text-[#f8242e]' : 'text[-#eaeaea]'}`}><RiCompassDiscoverLine className='text-[20px]' />Tv Show</li></Link>
                        <Link to='/topMovie'><li className='mt-5 flex gap-1'><MdOutlineMovieCreation className='text-[20px]' />Top Movie</li></Link>
                        <Link to='/topSeries'><li className='mt-5 flex gap-1'><SiSteelseries className='text-[20px]' />Top Series</li></Link>

                    </ul>
                </div>


                <div>
                    <ul className='gap-10 mt-10 text[-#eaeaea] cursor-pointer'>
                        <h1 className='text-white font-bold '>Library</h1>
                        <li className='mt-10 flex gap-1'><MdRecentActors className='text-[20px]' />Recents</li>
                        <li className='mt-5 flex gap-1'><MdOutlineFavorite className='text-[20px]' />Favorites</li>
                        <li onClick={signIn} className='mt-5 flex gap-1'><HiOutlineLogin className='text-[20px]' />Sign Up</li>


                    </ul>
                </div>

                <div className='mt-10 cursor-pointer'>
                    <ul>
                        <li className='flex gap-1'><AiFillSetting className='text-[20px]' />Settings</li>
                        <li onClick={signOut} className='mt-5 flex gap-1'><HiOutlineLogout className='text-[20px]' />Logout</li>
                    </ul>
                </div>
            </div>

        </div>
    )
}

export default Sidebar
