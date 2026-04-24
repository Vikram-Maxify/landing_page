import React, { useState, useRef, useEffect } from 'react'
import { FaPlay, FaStar } from 'react-icons/fa'
import { IoClose } from "react-icons/io5"
import Hls from "hls.js"

const SuccessStories = () => {

    const [activeVideo, setActiveVideo] = useState(null)
    const videoRef = useRef(null)

    const data = [
        {
            name: "Ravi Kumar",
            desc: "Ye course complete kiye 12 din huye aur mujhe 2 local clients mil gaye. Sach me worth it hai."
        },
        {
            name: "Arjun Verma",
            desc: "Sach me practical course hai, totally worth it."
        },
        {
            name: "Pooja Sharma",
            desc: "Phone se earning start kar payi."
        },
        {
            name: "Neha Gupta",
            desc: "Ab main ghar se income kar rahi hoon."
        },
        {
            name: "Arpit Jain",
            desc: "25 din me 21k kama liya."
        },
        {
            name: "Faisal Qureshi",
            desc: "Simple & result-oriented course."
        },
        // 🔥 added
        {
            name: "Deepak Kumar",
            desc: "mere mind me pahle se ye idea tha par clarity nhi tha mai confuse tha ess course ke baad clear ho gaya ab mai start krunga kaam krna aaj se"
        },
        {
            name: "Simran Kaur",
            desc: "mai bas ek word bolna chahti hu than yu thaku thaku so much sir."
        },
        {
            name: "Ayesha Khan",
            desc: "Main apne ghar se kaam kar rahi hoon aur earning start ho gayi"
        }
    ]

    // ✅ NUMBERING + ORIGINAL ID
    const videoIds = [
        "|a7fd0364-eda0-474d-8910-6ab9548fb497",
        "|b289bdaa-429e-47ad-89af-ce2fc60bfc5a",
        "|6978bdfe-c353-4130-ad6c-cf8c5865e693",
        "|77fb434b-4ddb-4752-8db9-dc1d60ff799a",
        "|cc41bcb3-20db-4530-9a3d-ea085263dd5f",
        "|8bd45f89-e4b8-4f54-ba8c-ec7619f190c0",
        "|509bc0e7-2dd1-4779-8c4d-2833f4de06b3",
        "|880dc4ef-80db-4807-9326-d315628d64a3",
        "|ae43c68d-0a72-42df-87eb-f871eab51102",
    ]

    const handleOpen = (index) => {
    const realId = videoIds[index].split("|")[1]
    setActiveVideo(realId)

    // 🔥 wait for modal render then play
    setTimeout(() => {
        if (videoRef.current) {
            videoRef.current.muted = false
            videoRef.current.play().catch(() => {})
        }
    }, 100) // small delay important
}

    const handleClose = () => {
        if (videoRef.current) {
            videoRef.current.pause()
        }
        setActiveVideo(null)
    }

    useEffect(() => {
    if (!activeVideo || !videoRef.current) return

    const video = videoRef.current
    const src = `https://vz-52fa69c4-957.b-cdn.net/${activeVideo}/playlist.m3u8`

    let hls

    if (video.canPlayType('application/vnd.apple.mpegurl')) {
        video.src = src
    } else if (Hls.isSupported()) {
        hls = new Hls()
        hls.loadSource(src)
        hls.attachMedia(video)
    }

    return () => {
        if (hls) hls.destroy()
    }
}, [activeVideo])

    return (
        <section className="px-6 md:px-16 py-6 md:py-20 bg-gray-100">

            <div className="text-center">
                <h2 className="text-2xl md:text-4xl font-bold text-gray-900">
                    Student's Success Stories
                </h2>
                <p className="mt-2 text-gray-500">
                    Real Results from Real Students
                </p>
            </div>

            <div className="mt-10 grid sm:grid-cols-2 lg:grid-cols-3 gap-6">

                {data.map((item, i) => {
                    const realId = videoIds[i].split("|")[1]

                    return (
                        <div key={i} className="bg-white rounded-2xl shadow-md overflow-hidden">

                            <div
                                onClick={() => handleOpen(i)}
                                className="relative h-44 bg-black cursor-pointer"
                            >
                                <img
                                    src={`https://vz-52fa69c4-957.b-cdn.net/${realId}/thumbnail.jpg`}
                                    className="w-full h-full object-cover"
                                />

                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <div className="w-12 h-12 bg-white rounded-full flex items-center justify-center text-blue-600 text-lg hover:scale-110 transition">
                                        <FaPlay />
                                    </div>
                                </div>
                            </div>

                            <div className="p-5">
                                <h3 className="font-semibold text-gray-900">
                                    {i + 1}. {item.name}
                                </h3>

                                <div className="flex gap-1 mt-2 text-yellow-400 text-sm">
                                    {[...Array(5)].map((_, idx) => (
                                        <FaStar key={idx} />
                                    ))}
                                </div>

                                <p className="text-gray-500 text-sm mt-2">
                                    {item.desc}
                                </p>
                            </div>

                        </div>
                    )
                })}

            </div>

            {activeVideo && (
                <div className="fixed inset-0 z-50 flex items-center justify-center md:p-6">

                    <div
                        onClick={handleClose}
                        className="absolute inset-0 bg-black/70"
                    />

                    <div className="relative z-10 w-[92%] md:w-[90%] md:max-w-4xl rounded-2xl overflow-hidden bg-black shadow-2xl">

                        <button
                            onClick={handleClose}
                            className="absolute top-3 right-3 z-20 bg-black/20 text-white p-2 rounded-full"
                        >
                            <IoClose size={20} />
                        </button>

                        <video
                            ref={videoRef}
                            controls
                            autoPlay
                            playsInline
                            className="w-full h-auto md:max-h-[70vh]"
                        />

                    </div>
                </div>
            )}

        </section>
    )
}

export default SuccessStories