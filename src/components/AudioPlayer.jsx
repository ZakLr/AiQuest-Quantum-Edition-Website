import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const AudioPlayer = () => {
  const [isPlaying, setIsPlaying] = useState(true);
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const soundRef = useRef(null);

  useEffect(() => {
    soundRef.current = new Howl({
      src: ["/sounds/oppenheimer.mp3"],
      html5: true,
      loop: true,
      volume: isMuted ? 0 : volume,
      onload: () => setIsLoaded(true),
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
      onloaderror: (id, error) => {
        console.error("Audio load error:", error);
      },
      onplayerror: (id, error) => {
        console.error("Audio play error:", error);
        soundRef.current.once("unlock", () => {
          soundRef.current.play();
        });
      },
    });

    const unlockAudio = () => {
      if (soundRef.current && soundRef.current.state() === "loaded") {
        soundRef.current.play();
        soundRef.current.pause();
        soundRef.current.seek(0);
        document.removeEventListener("click", unlockAudio);
      }
    };

    document.addEventListener("click", unlockAudio);

    return () => {
      if (soundRef.current) {
        soundRef.current.unload();
      }
      document.removeEventListener("click", unlockAudio);
    };
  }, []);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted]);

  // Auto play if initial state is true
  useEffect(() => {
    if (
      isLoaded &&
      isPlaying &&
      soundRef.current &&
      !soundRef.current.playing()
    ) {
      soundRef.current.play();
    }
  }, [isLoaded]);

  const togglePlay = () => {
    if (!soundRef.current) return;

    if (soundRef.current.playing()) {
      // Save current position
      const currentTime = soundRef.current.seek();
      soundRef.current.pause();
      soundRef.current._lastSeek = currentTime; // custom ref for resume
    } else {
      // Resume from last seeked position
      if (soundRef.current._lastSeek !== undefined) {
        soundRef.current.seek(soundRef.current._lastSeek);
      }
      soundRef.current.play();
    }
  };

  const toggleMute = () => {
    setIsMuted((prev) => !prev);
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      className="fixed bottom-6 right-6 bg-quantum-gray/90 backdrop-blur-md rounded-full p-3 shadow-lg z-50 flex items-center space-x-3 border border-quantum-orange/30"
    >
      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={togglePlay}
        disabled={!isLoaded}
        className="text-quantum-orange hover:text-quantum-orange/80 transition-colors disabled:opacity-50"
        aria-label={isPlaying ? "Pause" : "Play"}
      >
        {isPlaying ? <FaPause size={20} /> : <FaPlay size={20} />}
      </motion.button>

      <motion.button
        whileTap={{ scale: 0.9 }}
        onClick={toggleMute}
        className="text-quantum-orange hover:text-quantum-orange/80 transition-colors"
        aria-label={isMuted ? "Unmute" : "Mute"}
      >
        {isMuted ? <FaVolumeMute size={20} /> : <FaVolumeUp size={20} />}
      </motion.button>

      <div className="flex items-center space-x-2 w-24">
        <input
          type="range"
          min="0"
          max="1"
          step="0.01"
          value={volume}
          onChange={(e) => setVolume(parseFloat(e.target.value))}
          className="w-full accent-quantum-orange cursor-pointer"
          disabled={isMuted}
        />
      </div>
    </motion.div>
  );
};

export default AudioPlayer;
