import React from 'react';
import { FaPlay, FaPause, FaHeart } from "react-icons/fa";

const songs = [
  {
    id: 1,
    title: "Ritmo Nocturno",
    dj: "DJ Medellín",
    image: "https://via.placeholder.com/300x200?text=Ritmo",
    genre: "Reggaeton",
    audioUrl: "../../../src/Media/Music/vaca.mp3" // Ejemplo
  },
  {
    id: 2,
    title: "Beat Salvaje",
    dj: "DJ Electro",
    image: "https://via.placeholder.com/300x200?text=Beat",
    genre: "Electronic",
    audioUrl: "https://file-examples.com/storage/febdc55bb636a8be5e2f685/2017/11/file_example_MP3_700KB.mp3"
  },
  {
    id: 3,
    title: "Noche Latina",
    dj: "DJ Flow",
    image: "https://via.placeholder.com/300x200?text=Noche",
    genre: "Latin",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 4,
    title: "Bassline Callejero",
    dj: "DJ Bass",
    image: "https://via.placeholder.com/300x200?text=Bassline",
    genre: "Hip Hop",
    audioUrl: "https://file-examples.com/storage/febdc55bb636a8be5e2f685/2017/11/file_example_MP3_700KB.mp3"
  },
  {
    id: 5,
    title: "Salsa Digital",
    dj: "DJ Tropical",
    image: "https://via.placeholder.com/300x200?text=Salsa",
    genre: "Salsa",
    audioUrl: "https://www.soundjay.com/misc/sounds/bell-ringing-05.wav"
  },
  {
    id: 6,
    title: "Cumbia Tech",
    dj: "DJ Fusion",
    image: "https://via.placeholder.com/300x200?text=Cumbia",
    genre: "Cumbia",
    audioUrl: "https://file-examples.com/storage/febdc55bb636a8be5e2f685/2017/11/file_example_MP3_700KB.mp3"
  }
];

const Audio = () => {
  const [playingId, setPlayingId] = React.useState(null);
  const [likedSongs, setLikedSongs] = React.useState(new Set());
  const [currentAudio, setCurrentAudio] = React.useState(null);
  const [isLoading, setIsLoading] = React.useState(false);

  const handlePlay = async (song) => {
    setIsLoading(true);
    
    try {
      // Si hay audio reproduciéndose, lo pausamos
      if (currentAudio) {
        currentAudio.pause();
        currentAudio.currentTime = 0;
      }

      // Si es la misma canción, solo pausamos
      if (playingId === song.id) {
        setPlayingId(null);
        setCurrentAudio(null);
        setIsLoading(false);
        return;
      }

      // Creamos nuevo audio
      const audio = new window.Audio(song.audioUrl);
      
      audio.addEventListener('loadeddata', () => {
        setIsLoading(false);
        audio.play();
        setPlayingId(song.id);
        setCurrentAudio(audio);
      });

      audio.addEventListener('ended', () => {
        setPlayingId(null);
        setCurrentAudio(null);
      });

      audio.addEventListener('error', () => {
        setIsLoading(false);
        alert(`Error al cargar: ${song.title}`);
      });

    } catch (error) {
      setIsLoading(false);
      console.error('Error reproduciendo audio:', error);
    }
  };

  const handleLike = (songId) => {
    const newLiked = new Set(likedSongs);
    if (newLiked.has(songId)) {
      newLiked.delete(songId);
    } else {
      newLiked.add(songId);
    }
    setLikedSongs(newLiked);
  };

  // Duplicamos las canciones para crear el efecto infinito
  const duplicatedSongs = [...songs, ...songs, ...songs];

  return (
    <div className="bg-gradient-to-r from-gray-900 via-purple-900 to-gray-900 py-8 overflow-hidden">
      <div className="mb-6 text-center">
        <h2 className="text-3xl font-bold text-white mb-2">🎵 Música en Vivo</h2>
        <p className="text-gray-300">Los mejores beats de la ciudad</p>
      </div>
      
      <style jsx>{`
        @keyframes scrollInfinite {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-${(songs.length * 300)}px);
          }
        }
        
        .scroll-container {
          animation: scrollInfinite 30s linear infinite;
        }
        
        .scroll-container:hover {
          animation-play-state: paused;
        }
        
        @media (max-width: 640px) {
          @keyframes scrollInfinite {
            0% {
              transform: translateX(0);
            }
            100% {
              transform: translateX(-${(songs.length * 270)}px);
            }
          }
        }
      `}</style>
      
      <div className="flex scroll-container">
        {duplicatedSongs.map((song, index) => (
          <div
            key={`${song.id}-${index}`}
            className="min-w-[250px] sm:min-w-[280px] mx-3 bg-white rounded-xl shadow-xl overflow-hidden text-black transform hover:scale-105 transition-all duration-300 hover:shadow-2xl"
          >
            <div className="relative group">
              <img
                src={song.image}
                alt={song.title}
                className="w-full h-40 object-cover group-hover:brightness-75 transition-all duration-300"
              />
              <div className="absolute top-2 right-2">
                <button
                  onClick={() => handleLike(song.id)}
                  className={`p-2 rounded-full transition-all duration-300 ${
                    likedSongs.has(song.id)
                      ? 'bg-red-500 text-white'
                      : 'bg-white/80 text-gray-600 hover:bg-red-500 hover:text-white'
                  }`}
                >
                  <FaHeart className="w-3 h-3" />
                </button>
              </div>
              <div className="absolute top-2 left-2">
                <span className="bg-purple-600 text-white text-xs px-2 py-1 rounded-full font-medium">
                  {song.genre}
                </span>
              </div>
            </div>
            
            <div className="p-4 flex flex-col items-center">
              <h3 className="font-bold text-lg text-center mb-1 text-gray-800">
                {song.title}
              </h3>
              <p className="text-sm text-gray-500 text-center mb-3">
                by {song.dj}
              </p>
              
              <button
                onClick={() => handlePlay(song)}
                disabled={isLoading}
                className={`px-6 py-3 rounded-full font-medium flex items-center gap-2 transition-all duration-300 transform hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed ${
                  playingId === song.id
                    ? 'bg-green-600 text-white hover:bg-green-700'
                    : 'bg-gradient-to-r from-purple-600 to-pink-600 text-white hover:from-purple-700 hover:to-pink-700'
                }`}
              >
                {isLoading ? (
                  <>
                    <div className="animate-spin rounded-full h-4 w-4 border-2 border-white border-t-transparent"></div>
                    Cargando...
                  </>
                ) : (
                  <>
                    {playingId === song.id ? <FaPause /> : <FaPlay />}
                    {playingId === song.id ? 'Pausar' : 'Escuchar'}
                  </>
                )}
              </button>
            </div>
          </div>
        ))}
      </div>
      
      <div className="text-center mt-6">
        <p className="text-gray-400 text-sm">
          Pasa el cursor sobre las tarjetas para pausar el scroll
        </p>
      </div>
    </div>
  );
};

export default Audio;