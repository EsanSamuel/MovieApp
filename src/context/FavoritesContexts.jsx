import React, { useState, createContext, useEffect } from 'react'
import { datas } from '../Utils/constants'
import { auth, provider } from '../components/firebase'
import { useNavigate } from 'react-router-dom'
import { signInWithPopup, GoogleAuthProvider } from 'firebase/auth'

export const FavoritesContext = createContext()

export const getFavorites = () => {
    let likes = {}
    for (let i = 1; i < datas.length + 1; i++) {
        likes[i] = 0
    }
    return likes
}

export const FavoritesProvider = ({ children }) => {
    const [likeItems, setLikeItems] = useState(getFavorites())
    const [loading, setLoading] = useState(false)
    const [user, setUser] = useState({})
    const navigate = useNavigate()


    const addToFavorites = (item) => {
        setLikeItems((prev) => ({ ...prev, [item]: prev[item] + 1 }))
    }

    const removeFavorites = (item) => {
        setLikeItems((prev) => ({ ...prev, [item]: prev[item] - 1 }))
    }

    const signIn = () => {
        provider.setCustomParameters({ prompt: "select_account" })
        signInWithPopup(auth, provider)
            .then((result) => {
                const credentials = GoogleAuthProvider.credentialFromResult(result)
                const token = credentials.accessToken
                const user = result.user
            })
            .catch((error) => {
                console.log(error)
            })
    }

    const signOut = async () => {
        await auth.signOut()
    }

    useEffect(() => {
        auth.onAuthStateChanged((user) => {
            setUser(user)
            setLoading(false) 
        })
    }, [user])

    return (
        <FavoritesContext.Provider value={{ addToFavorites, removeFavorites, likeItems, user, signIn, signOut }}>
            {!loading && children}
        </FavoritesContext.Provider>
    )
}

