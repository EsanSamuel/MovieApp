import React, { useState, useContext } from 'react'
import { AiOutlineClose } from 'react-icons/ai'
import { CiMenuFries } from 'react-icons/ci'
import { BiHomeAlt, BiCameraMovie } from 'react-icons/bi'
import { RiCompassDiscoverLine } from 'react-icons/ri'
import { SiSteelseries } from 'react-icons/si'
import { Link } from 'react-router-dom'
import { FavoritesContext } from '../context/FavoritesContexts'
import { MdOutlineMovieCreation, MdOutlineFavorite, MdRecentActors} from 'react-icons/md'
import { AiFillSetting } from 'react-icons/ai'
import { HiOutlineLogout, HiOutlineLogin } from 'react-icons/hi'

const Navbar = () => {
    const [nav, setNav] = useState(false)

    const { signIn, signOut } = useContext(FavoritesContext)


    return (
        <div className='w-full p-5 text-white flex gap-2'>
            <div className='w-full flex gap-2'>
                <input className='w-full bg-[#1b1c1e] h-[40px] rounded text-white px-5 overview-[blue]' placeholder='Search any movie, tv show etc' />
                {!nav && (<CiMenuFries className='text-[30px] mt-2 sm:hidden ' onClick={() => setNav(true)} />)}
                {nav && (<AiOutlineClose className='text-[30px]  mt-2 sm:hidden' onClick={() => setNav(false)} />)}
            </div>

            <div className='fixed bg-[#1b1c1e] z-10 left-0 top-0 h-[100vh] sm:hidden '>
                {nav && (
                    <div className='text-white p-10 h-full top-0 nav'>

                        <div className=''>
                            <h1 className='text-[20px] flex gap-1 '><BiCameraMovie className='text-[25px]' />Movie<span className="text-[#f8242e]">Time</span></h1>



                            <div>
                                <ul className='gap-10 mt-20 text[-#eaeaea] cursor-pointer'>
                                    <h1 className='text-white font-bold '>Menu</h1>
                                    <Link to='/'> <li className='mt-10 flex gap-1'><BiHomeAlt className='text-[20px]' />Home</li></Link>
                                    <Link to='/tv'><li className='mt-5 flex gap-1'><RiCompassDiscoverLine className='text-[20px]' />Tv Show</li></Link>
                                    <Link to='/topMovie'><li className='mt-5 flex gap-1'><MdOutlineMovieCreation className='text-[20px]' />Top Movies</li></Link>
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

                            <div className='mt-10 fixed bottom-0 mb-8 cursor-pointer'>
                                <ul>
                                    <li className='flex gap-1'><AiFillSetting className='text-[20px]' />Settings</li>
                                    <li onClick={signOut} className='mt-5 flex gap-1'><HiOutlineLogout className='text-[20px]' />Logout</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                )}
            </div>
        </div>
    )
}

export default Navbar
