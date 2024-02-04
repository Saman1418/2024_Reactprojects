import React, { useEffect, useState } from "react";
import axios from "axios";

const Api = (url) => {
    const [video, setVideo] = useState()
    useEffect(() => {
        const showVideo = async () => {
            const response = await axios.get(url, {
                params: {
                    part: 'snippet',
                    type: 'video',
                    maxResults: 2,
                    key: "AIzaSyAVqhLo3BxIWGfbgUN_BqOhyOagGlIzNSE",

                }
            })
            setVideo(response.data.items)
        }
        showVideo()
        console.log(video)
    }, [])
    return video;
}

export default Api;

