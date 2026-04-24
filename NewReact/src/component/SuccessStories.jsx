import React, { useState, useRef, useEffect } from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'
import { IoClose } from "react-icons/io5"
import Hls from "hls.js"

const SuccessStories = () => {

    const [activeVideo, setActiveVideo] = useState(null)
    const videoRef = useRef(null)

    useEffect(() => {
    if (!activeVideo || !videoRef.current) return

    const video = videoRef.current
    const src = `https://vz-52fa69c4-957.b-cdn.net/${activeVideo}/playlist.m3u8`

    let hls

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        // Safari
        video.src = src
        video.addEventListener('loadedmetadata', () => {
            video.play().catch(() => {})
        })
    } else if (Hls.isSupported()) {
        hls = new Hls()
        hls.loadSource(src)
        hls.attachMedia(video)

        hls.on(Hls.Events.MANIFEST_PARSED, () => {
            video.play().catch(() => {})
        })
    }

    return () => {
        if (hls) hls.destroy()
    }
}, [activeVideo])

    const data = [
        {
            name: "Ravi Kumar",
            desc: "Ye course complete kiye 12 din huye aur mujhe 2 local clients mil gaye. Sach me worth it hai, thank you Shahid sir."
        },
        {
            name: "Arjun Verma",
            desc: "Sach me practical course hai, faltu theory nahi hai. totally worth it course hai."
        },
        {
            name: "Pooja Sharma",
            desc: "Mai sochti thi mere pass leptop rhta ho mai online kuchh karyi ess course ke baad mai phone se start kar payi thankyu bhaiya"
        },
        {
            name: "Neha Gupta",
            desc: "Ye course ke baad mujhe confidence aa gaya, ab main family ke saath rehkar income kar rahi hoon."
        },
        {
            name: "Arpit Jain",
            
            desc: "What I liked most is that sir clearly said kaam karoge tab result aayega. No fake promises and I followed daily action tasks and within 25 days I earned 21k."
        },
        {
            name: "Faisal Qureshi",
            desc: "Simple, practical and result-oriented course. "
        }
    ]

    const videoIds = [
        "a7fd0364-eda0-474d-8910-6ab9548fb497",
        "b289bdaa-429e-47ad-89af-ce2fc60bfc5a",
        "6978bdfe-c353-4130-ad6c-cf8c5865e693",
        "77fb434b-4ddb-4752-8db9-dc1d60ff799a",
        "cc41bcb3-20db-4530-9a3d-ea085263dd5f",
        "8bd45f89-e4b8-4f54-ba8c-ec7619f190c0",
    ]

    const handleOpen = (index) => {
        setActiveVideo(videoIds[index])
    }

    const handleClose = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
        setActiveVideo(null)
    }

    // ✅ HLS VIDEO LOAD (single click play fix)
    useEffect(() => {
        if (!activeVideo || !videoRef.current) return

        const video = videoRef.current
        const src = `https://vz-52fa69c4-957.b-cdn.net/${activeVideo}/playlist.m3u8`

        if (video.canPlayType('application/vnd.apple.mpegurl')) {
            video.src = src
        } else if (Hls.isSupported()) {
            const hls = new Hls()
            hls.loadSource(src)
            hls.attachMedia(video)

            return () => hls.destroy()
        }
    }, [activeVideo])

    return (
        <section className="px-6 md:px-16 py-6 md:py-20 bg-gray-100">

            {/* Heading */}
            <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    Student's Success Stories
                </h2>
                <p className="mt-2 text-gray-500">
                    Real Results from Real Students
                </p>
            </div>

            {/* Cards */}
            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {data.map((item, i) => (
                    <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">

                        {/* Thumbnail */}
                        <div
                            onClick={() => handleOpen(i)}
                            className="relative h-44 bg-black cursor-pointer"
                        >
                            <img
                                src={`https://vz-52fa69c4-957.b-cdn.net/${videoIds[i]}/thumbnail.jpg`}
                                className="w-full h-full object-cover"
                            />

                            <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 text-lg hover:scale-110 transition">
                                    <FaPlay />
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="p-5">
                            <h3 className="font-semibold text-gray-900">
                                {item.name}
                            </h3>

                            <div className="flex gap-1 mt-2 text-yellow-400 text-sm">
                                {[...Array(5)].map((_, idx) => (
                                    <FaStar key={idx} />
                                ))}
                            </div>

                            <p className="mt-2 text-blue-600 font-medium text-sm">
                                {item.title}
                            </p>

                            <p className="text-gray-500 text-sm mt-1">
                                {item.desc}
                            </p>
                        </div>

                    </div>
                ))}

            </div>

            {/* ✅ MODAL */}
            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center md:p-6">

                    {/* Overlay */}
                    <div
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/70"
                    />

                    {/* Modal Box */}
                    <div className="relative z-10 w-[92%] md:w-[90%] md:max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl">

                        {/* Close */}
                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 z-20 bg-black/20 hover:bg-black/30 text-white p-2 rounded-full"
                        >
                            <IoClose size={20} />
                        </button>

                        {/* 🎬 VIDEO */}
                        <video
                            ref={videoRef}
                            controls
                            autoPlay
                            playsInline
                            preload="auto"
                            className="w-full h-auto md:max-h-[70vh] object-cover"
                        />

                    </div>
                </div>
            )}

        </section>
    )
}

export default SuccessStories