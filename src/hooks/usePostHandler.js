import axios from "axios"
import { useState } from "react"

export function usePostHandler() {
    const url = 'https://epicjourney.onrender.com/post/'

    const getPosts = async () => {
        const { data } = await axios(`${url}/all`)
        // console.log(data);
        return data.posts
    }
    const getPostbYiD = async (id) => {
        const { data } = await axios(`${url}/${id}`)
        // console.log(data);
        return data.post
    }

    return { getPosts, getPostbYiD }
}