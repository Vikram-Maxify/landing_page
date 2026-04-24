import React, { useRef, useState, useEffect } from 'react'
import { IoMdPlay } from "react-icons/io";
import { FiClock } from "react-icons/fi";
import { FiShield } from "react-icons/fi";
import { TrendingUp } from "lucide-react";

const Hero = ({ onPlay = () => { } }) => {
    const videoRef = useRef(null)
    const [isPlaying, setIsPlaying] = useState(false)

    // 🎯 HANDLE PLAY (button + center play)
    const handlePlayClick = () => {
        if (videoRef.current) {
            videoRef.current.muted = false
            videoRef.current.play()
            setIsPlaying(true)
            onPlay()

            // optional smooth scroll
            videoRef.current.scrollIntoView({ behavior: "smooth", block: "center" })
        }
    }

    const handleRedirect = () => {
        window.location.href = "https://maxifyacademy.com/payment/complete-social-media-income-system"
    }


    return (
        <section className="px-6 md:px-16 py-5 md:py-5 grid md:grid-cols-2 gap-10 items-center">

            {/* LEFT CONTENT */}
            <div>
                <h1 className="text-3xl md:text-5xl font-bold leading-tight text-gray-900">
                    Social Media se{' '}
                    <span className="text-blue-600">₹30K–₹90K/Month</span>{' '}
                    Earn karo
                    <br />
                    (Even If You’re Starting from Zero)
                </h1>

                <p className="mt-6 text-gray-600 text-base md:text-lg max-w-xl">
                    Learn Agency + Affiliate + AI Tools + Secret Platforms — Complete Step-by-Step System
                </p>

                <p className="mt-4 text-gray-500 text-sm">
                    🎖️ 1500+ Student | 94% success rate | Proven System
                </p>

                {/* CTA */}
                <div className="mt-8 flex flex-col sm:flex-row gap-4">
                    <button
                        onClick={handleRedirect}
                        className="bg-blue-600 text-white px-16 py-3 rounded-full font-semibold shadow-md hover:bg-blue-700 transition"
                    >
                        Enroll Now at ₹799
                    </button>

                    <button
                        onClick={handlePlayClick}
                        className="flex items-center justify-center gap-2 border border-blue-600 text-blue-600 px-16 py-3 rounded-full font-semibold hover:bg-blue-50 transition"
                    >
                        ▶ Watch Free Demo
                    </button>
                </div>
            </div>

            {/* RIGHT VIDEO */}
            <div className="w-full">
                <div className="bg-blue-100 p-4 md:p-6 rounded-3xl">

                    <div className="relative rounded-xl shadow-2xl overflow-hidden">
                        <video
                            ref={videoRef}
                            src="https://vz-52fa69c4-957.b-cdn.net/64941448-16af-411e-9c9f-a972f8a6f55b/playlist.m3u8"
                            poster="https://vz-52fa69c4-957.b-cdn.net/742abb8e-cfed-4562-8897-462aca306b02/thumbnail_5877ee08.jpg"
                            className="w-full aspect-video object-cover rounded-xl"
                            loop
                            muted
                            playsInline
                            controls={isPlaying}
                            onPlay={() => {
                                setIsPlaying(true)
                                onPlay()
                            }}
                            onPause={() => setIsPlaying(false)}
                        />

                        {!isPlaying && (
                            <button
                                onClick={handlePlayClick}
                                className="absolute inset-0 flex items-center justify-center"
                            >
                                <div className="w-16 h-16 bg-white rounded-full flex items-center justify-center hover:scale-110 transition text-xl shadow-md">
                                    <IoMdPlay />
                                </div>
                            </button>
                        )}
                    </div>

                </div>
                <h1 className="mt-5 text-xl md:text-2xl font-bold text-center text-gray-900 tracking-tight relative">
  <span className="relative z-10">
    Complete Social Media Income System
  </span>
  <span className="absolute inset-0 blur-xl opacity-30 bg-gradient-to-r from-blue-400 to-indigo-500"></span>
</h1>
                <div className="mt-3 px-1">
  <div className="bg-indigo-50 text-indigo-700 text-sm md:text-base py-2 rounded-lg border border-indigo-100 flex items-center justify-center gap-2">
    <TrendingUp className="w-4 h-4" />
    <span>Start Earning in 1-Day</span>
  </div>
</div>
            </div>


        </section>
    )
}

export default Hero