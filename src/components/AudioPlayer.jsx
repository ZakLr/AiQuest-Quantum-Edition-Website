import { useState, useEffect, useRef } from "react";
import { motion } from "framer-motion";
import { Howl } from "howler";
import { FaPlay, FaPause, FaVolumeUp, FaVolumeMute } from "react-icons/fa";

const AudioPlayer = ({ autoPlay = false, onAudioLoaded }) => {
  const [isPlaying, setIsPlaying] = useState(false); // Changed initial state to false
  const [volume, setVolume] = useState(0.5);
  const [isMuted, setIsMuted] = useState(false);
  const [isLoaded, setIsLoaded] = useState(false);
  const soundRef = useRef(null);
  const autoPlayTimeoutRef = useRef(null);

  useEffect(() => {
    const sound = new Howl({
      src: ["/sounds/oppenheimer.mp3"],
      html5: true,
      loop: true,
      volume: isMuted ? 0 : volume,
      onload: () => {
        setIsLoaded(true);
        onAudioLoaded?.();

        // Set timeout to auto-play after 4 seconds when loaded
        autoPlayTimeoutRef.current = setTimeout(() => {
          if (autoPlay) {
            setIsPlaying(true);
          }
        }, 4000);
      },
      onplay: () => setIsPlaying(true),
      onpause: () => setIsPlaying(false),
      onend: () => setIsPlaying(false),
      onloaderror: (id, error) => {
        console.error("Audio load error:", error);
        onAudioLoaded?.();
      },
      onplayerror: (id, error) => {
        console.error("Audio play error:", error);
        sound.once("unlock", () => {
          sound.play();
        });
      },
    });

    soundRef.current = sound;
    sound.load();

    // Fallback check in case onload never fires
    const loadCheckInterval = setInterval(() => {
      if (sound.state() === "loaded") {
        setIsLoaded(true);
        onAudioLoaded?.();
        clearInterval(loadCheckInterval);

        // Set timeout to auto-play after 4 seconds when loaded (fallback)
        autoPlayTimeoutRef.current = setTimeout(() => {
          if (autoPlay) {
            setIsPlaying(true);
          }
        }, 4000);
      }
    }, 500);

    const unlockAudio = () => {
      if (sound.state() === "loaded") {
        sound.play();
        sound.pause();
        sound.seek(0);
        document.removeEventListener("click", unlockAudio);
      }
    };

    document.addEventListener("click", unlockAudio);

    return () => {
      clearInterval(loadCheckInterval);
      if (autoPlayTimeoutRef.current) {
        clearTimeout(autoPlayTimeoutRef.current);
      }
      sound.unload();
      document.removeEventListener("click", unlockAudio);
    };
  }, [onAudioLoaded, autoPlay]);

  useEffect(() => {
    if (soundRef.current) {
      soundRef.current.volume(isMuted ? 0 : volume);
    }
  }, [volume, isMuted]);

  useEffect(() => {
    if (!isLoaded || !soundRef.current) return;

    if (isPlaying && !soundRef.current.playing()) {
      soundRef.current.play();
    } else if (!isPlaying && soundRef.current.playing()) {
      soundRef.current.pause();
    }
  }, [isPlaying, isLoaded]);

  const togglePlay = () => {
    setIsPlaying(!isPlaying);
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
