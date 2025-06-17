"use client"

import { useState, useEffect } from "react"
import { motion } from "framer-motion"
import { PhoneCall, SatelliteDish, Zap, Award } from "lucide-react"
import { Button } from "@/components/ui/button"

const HeroSection = () => {
  const [typingComplete, setTypingComplete] = useState(false)

  // Trigger the typing completion after component mount - reduced from 2500ms to 1500ms
  useEffect(() => {
    const timer = setTimeout(() => setTypingComplete(true), 1500)
    return () => clearTimeout(timer)
  }, [])

  const handleCallNow = () => {
    window.location.href = "tel:+18889701698"
  }

  // Title text for character animation
  const titleText = "Find Your Perfect Satellite Internet Connection"

  // Animation variants
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.08, // Faster staggering (was 0.12)
        delayChildren: 0.1, // Reduced delay (was 0.2)
      },
    },
  }

  const letterVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        type: "spring",
        stiffness: 120, // Increased stiffness for faster animation (was 100)
        damping: 10, // Added damping for smoother but still quick animation
      },
    },
  }

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: {
      y: 0,
      opacity: 1,
      transition: {
        type: "spring",
        stiffness: 120, // Increased for faster animation (was 100)
        duration: 0.4, // Reduced from 0.6
      },
    },
  }

  // Updated Feature cards data with new content and icons
  const features = [
    {
      icon: <SatelliteDish className="h-6 w-6" />,
      title: "Seamless Connectivity",
      description: "Reliable satellite coverage",
    },
    {
      icon: <Award className="h-6 w-6" />,
      title: "Claim Your Free $100 Card",
      description: "Limited time offer",
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Fast, Reliable Internet",
      description: "High-speed connections",
    },
  ]

  // Real satellite internet providers
  const providers = ["Starlink", "AT&T", "OneWeb", "Nelco", "EchoStar"]

  return (
    <div className="relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-navy via-teal/80 to-purple-800/90 overflow-hidden">
        {/* Animated background shapes */}
        <div className="absolute top-0 left-0 w-full h-full overflow-hidden">
          {/* Dynamic Shapes */}
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              rotate: [0, 10, 0],
              opacity: [0.1, 0.2, 0.1],
            }}
            transition={{ duration: 15, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut" }}
            className="absolute -top-[10%] -left-[10%] w-[60%] h-[60%] rounded-full bg-gradient-to-r from-pink-300/20 to-teal-300/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.3, 1],
              rotate: [0, -15, 0],
              opacity: [0.1, 0.25, 0.1],
            }}
            transition={{ duration: 20, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 1 }}
            className="absolute top-[40%] -right-[10%] w-[70%] h-[70%] rounded-full bg-gradient-to-l from-purple-400/20 to-blue-300/20 blur-3xl"
          />
          <motion.div
            animate={{
              scale: [1, 1.2, 1],
              opacity: [0.05, 0.15, 0.05],
            }}
            transition={{ duration: 25, repeat: Number.POSITIVE_INFINITY, ease: "easeInOut", delay: 2 }}
            className="absolute -bottom-[20%] left-[30%] w-[50%] h-[50%] rounded-full bg-gradient-to-tr from-orange-400/20 to-yellow-200/20 blur-3xl"
          />
        </div>

        {/* Floating elements for dynamic feel */}
        <div className="absolute inset-0">
          {[...Array(10)].map((_, i) => (
            <motion.div
              key={i}
              initial={{
                x: Math.random() * window.innerWidth,
                y: Math.random() * window.innerHeight,
                opacity: 0.2 + Math.random() * 0.3,
                scale: 0.4 + Math.random() * 0.6,
              }}
              animate={{
                y: [null, `-${10 + Math.random() * 30}px`, null],
                x: [null, `${-10 + Math.random() * 20}px`, null],
                opacity: [null, 0.2 + Math.random() * 0.3, null],
              }}
              transition={{
                duration: 5 + Math.random() * 10,
                ease: "easeInOut",
                repeat: Number.POSITIVE_INFINITY,
                repeatType: "reverse",
              }}
              className={`absolute w-${2 + Math.floor(Math.random() * 4)} h-${2 + Math.floor(Math.random() * 4)} rounded-full bg-white/30`}
            />
          ))}
        </div>

        {/* Grid pattern */}
        <div className="absolute inset-0 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj48ZyBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiPjxnIGZpbGw9IiNmZmZmZmYiIGZpbGwtb3BhY2l0eT0iMC4wNSI+PHBhdGggZD0iTTM2IDM0aDR2MWgtNHYtMXptLTJ6TTAgMGg0djFIMFYwem0wIDRoNHYxSDB2LTF6bTQ0LTR2MWg0VjBoLTR6TTIwIDEyaDRWOGgtNHY0em0xNiAwaDR2LTRoLTR2NHptMTYgMGg0di00aC00djR6bS04IDRoNHYtNGgtNHY0em04LThoNFY0aC00djR6Ii8+PC9nPjwvZz48L3N2Zz4=')] opacity-30" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10 py-20 lg:py-32">
        <motion.div variants={containerVariants} initial="hidden" animate="visible" className="max-w-5xl mx-auto">
          {/* Main Heading with character-by-character animation */}
          <div className="text-center mb-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 tracking-tight leading-tight">
              <span className="inline-flex flex-wrap justify-center">
                {titleText.split(" ").map((word, wordIndex) => (
                  <span key={`word-${wordIndex}`} className="inline-block mx-1 whitespace-nowrap">
                    {word.split("").map((char, charIndex) => (
                      <motion.span
                        key={`char-${wordIndex}-${charIndex}`}
                        variants={letterVariants}
                        custom={wordIndex * 10 + charIndex}
                        transition={{ delay: (wordIndex * 10 + charIndex) * 0.02 }} // Faster delay (was 0.04)
                        className="inline-block"
                      >
                        {char}
                      </motion.span>
                    ))}
                  </span>
                ))}
              </span>
            </h1>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{
                opacity: typingComplete ? 1 : 0,
                y: typingComplete ? 0 : 20,
              }}
              transition={{ delay: 0.1, duration: 0.6 }} // Reduced delay (was 0.2)
            >
              <motion.p variants={itemVariants} className="text-lg md:text-xl text-white/90 max-w-3xl mx-auto">
                Compare top providers in your area and discover the best deals on high-speed satellite internet and
                bundled services.
              </motion.p>
            </motion.div>
          </div>

          {/* Call Now Button with enhanced animation */}
          <motion.div
            variants={itemVariants}
            initial={{ opacity: 0, y: 30 }}
            animate={{
              opacity: typingComplete ? 1 : 0,
              y: typingComplete ? 0 : 30,
            }}
            transition={{ delay: 0.6, duration: 0.6 }} // Reduced delay (was 1)
            className="mb-16"
          >
            <div className="relative max-w-md mx-auto">
              <motion.div
                className="flex flex-col items-center"
                initial={{ scale: 0.95 }}
                animate={{ scale: 1 }}
                transition={{ type: "spring", stiffness: 200, delay: 1.2 }}
              >
                <motion.div
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.95 }}
  className="relative inline-flex"
>
  <button
    onClick={handleCallNow}
    className="relative z-10 inline-flex items-center justify-center gap-2 px-6 py-4 sm:px-8 sm:py-5 text-lg font-semibold rounded-full text-white bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 shadow-lg hover:shadow-2xl transition-all duration-300"
  >
    <PhoneCall className="h-5 w-5" />
    Call Now: +1 (888) 970-1698
  </button>

  {/* Glowing animated background */}
  <motion.div
    initial={{ opacity: 0.6, scale: 1 }}
    animate={{ opacity: [0.6, 0.2, 0.6], scale: [1, 1.1, 1] }}
    transition={{
      duration: 2.5,
      repeat: Infinity,
      ease: "easeInOut",
    }}
    className="absolute inset-0 z-0 rounded-full bg-gradient-to-r from-orange-500 via-pink-500 to-red-500 blur-xl"
  />
</motion.div>

                <motion.div
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 1.8, duration: 0.5 }}
                  className="mt-4 text-center text-white/80"
                >
                  <span className="inline-flex items-center">
                    <motion.span
                      animate={{ scale: [1, 1.5, 1] }}
                      transition={{ duration: 2, repeat: Number.POSITIVE_INFINITY }}
                      className="w-2 h-2 bg-green-400 rounded-full mr-2"
                    />
                    Direct line:{" "}
                    <a href="tel:+18889701698" className="font-bold underline ml-1 hover:text-white transition-colors">
                      +1 (888) 970-1698
                    </a>
                  </span>
                </motion.div>
              </motion.div>
            </div>
          </motion.div>

          {/* Feature cards with enhanced animations */}
          <motion.div
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto"
          >
            {features.map((feature, index) => (
              <motion.div
                key={index}
                variants={itemVariants}
                custom={index}
                whileHover={{ scale: 1.05, y: -5 }}
                className="bg-white/15 backdrop-blur-md rounded-xl p-6 border border-white/20 shadow-lg transform transition-all"
              >
                <motion.div
                  initial={{ rotate: 0 }}
                  animate={{ rotate: [0, 10, -10, 0] }}
                  transition={{
                    delay: 2 + index * 0.2,
                    duration: 0.8,
                    repeat: Number.POSITIVE_INFINITY,
                    repeatDelay: 5,
                  }}
                  className="bg-gradient-to-br from-white/30 to-white/10 rounded-full p-3 w-14 h-14 flex items-center justify-center mb-4"
                >
                  {feature.icon}
                </motion.div>
                <h3 className="font-bold text-xl text-white mb-1">{feature.title}</h3>
                <p className="text-white/80">{feature.description}</p>
              </motion.div>
            ))}
          </motion.div>

          {/* Trust indicators with updated provider names */}
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 1.5, duration: 0.8 }}
            className="mt-12 text-center"
          >
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 2.7, duration: 0.5 }}
              className="text-white/80 font-medium"
            >
              Trusted by over 2 million households across America
            </motion.p>
            <div className="flex flex-wrap justify-center gap-4 md:gap-6 mt-4">
              {providers.map((provider, i) => (
                <motion.div
                  key={i}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  whileHover={{ y: -5, opacity: 0.9 }}
                  transition={{ delay: 2.9 + i * 0.1, duration: 0.5 }}
                  className="h-8 md:h-10 w-auto px-4 bg-white/30 rounded-md flex items-center justify-center backdrop-blur-sm"
                >
                  <span className="text-white/90 text-xs font-bold">{provider}</span>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </motion.div>
      </div>
    </div>
  )
}

export default HeroSection
