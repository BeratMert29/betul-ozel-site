import { useState } from 'react'
import { motion } from 'framer-motion'
import { Heart, Lock, ArrowRight, Sparkles, Star } from 'lucide-react'
import './App.css'

// Fotoğrafları import et
import foto1 from './foto/1.jpg'
import foto3 from './foto/3.jpg'
import foto5 from './foto/5.jpg'
import foto6 from './foto/6.jpg'
import foto7 from './foto/7.png'
import kafa from './foto/kafa.png'
import as from './foto/as.jpg'
import unbekannt from './foto/Unbekannt_-_8_of_Hearts_from_a_deck_of_Goodall_Son_Ltd_playing_cards_c1940_-_(MeisterDrucke-774918).jpg'
import araba from './foto/araba.jpg'
import butterfliesMusic from './foto/Butterflies & Hurricanes.mp4'

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [name, setName] = useState('')
  const [error, setError] = useState('')
  const [showThankYou, setShowThankYou] = useState(false)
  const [showSadFace, setShowSadFace] = useState(false)
  const [isMusicPlaying, setIsMusicPlaying] = useState(false)

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()
    const inputName = name.trim().toLowerCase()

    // Farklı yazım şekillerini kabul et
    const acceptedNames = [
      'betül kurt',
      'betülkurt',
      'betul kurt',
      'betulkurt'
    ]

    if (acceptedNames.includes(inputName)) {
      setIsAuthenticated(true)
      setError('')
    } else {
      setError('Bu site sadece değerli biri için özel olarak hazırlanmıştır.')
      setName('')
    }
  }

  const handleYesClick = () => {
    setShowThankYou(true)
  }

  const handleNoClick = () => {
    setShowSadFace(true)
  }

  const toggleMusic = () => {
    setIsMusicPlaying(!isMusicPlaying)
  }

  if (!isAuthenticated) {
    return (
      <div className="login-container">
        {/* Floating Hearts */}
        <div className="floating-hearts">
          {[...Array(6)].map((_, i) => (
            <motion.div
              key={i}
              className="floating-heart"
              animate={{
                y: [0, -20, 0],
                x: [0, Math.random() * 10 - 5, 0],
                opacity: [0.3, 1, 0.3],
              }}
              transition={{
                duration: 3 + Math.random() * 2,
                repeat: Infinity,
                delay: Math.random() * 2,
              }}
            >
              <Heart size={20 + Math.random() * 20} color="#8A2BE2" fill="#8A2BE2" />
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="login-card"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.2 }}
            className="heart-icon"
          >
            <Heart size={60} color="#8A2BE2" fill="#8A2BE2" />
          </motion.div>

          <h1 className="login-title">
            <Sparkles size={24} className="sparkle-icon" />
            Özel Site
            <Sparkles size={24} className="sparkle-icon" />
          </h1>

          <p className="login-subtitle">
            Bu siteye Berat Mert dışında sadece değerli biri girebilir
          </p>

          <form onSubmit={handleSubmit} className="login-form">
            <div className="input-group">
              <Lock size={20} className="input-icon" />
              <input
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Adınız ve soyadınız nedir?"
                className="name-input"
                required
              />
            </div>

            <small className="input-hint">
              * Adınızı ve soyadınızı tam olarak yazınız
            </small>

            {error && (
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                className="error-message"
              >
                {error}
              </motion.p>
            )}

            <motion.button
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              type="submit"
              className="submit-btn"
            >
              <ArrowRight size={20} />
              Giriş Yap
            </motion.button>
          </form>
        </motion.div>
      </div>
    )
  }

  return (
    <div className="app">
      {/* Floating Elements */}
      <div className="floating-elements">
        {[...Array(8)].map((_, i) => (
          <motion.div
            key={i}
            className="floating-element"
            animate={{
              y: [0, -30, 0],
              x: [0, Math.random() * 20 - 10, 0],
              opacity: [0.4, 1, 0.4],
              rotate: [0, 360],
            }}
            transition={{
              duration: 4 + Math.random() * 3,
              repeat: Infinity,
              delay: Math.random() * 3,
            }}
          >
            {i % 2 === 0 ? (
              <Heart size={15 + Math.random() * 15} color="#FF69B4" fill="#FF69B4" />
            ) : (
              <Star size={15 + Math.random() * 15} color="#FFD700" fill="#FFD700" />
            )}
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        className="welcome-section"
      >
        <h1>Hoş Geldin Betül! 💕</h1>
        <h2>Bu siteyi sana niye attığımı merak ediyorsun eminim ki. Lütfen sabırlı bir şekilde önce resimlere bakıp sonra yazıları okur musun? Amacımı birazdan anlayacaksın. 💕</h2>
        <p>Birlikte geçirdiğimiz kısıtlı ama güzel zamanı hatırlayarak başlayalım...</p>

        {/* Müzik */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.5 }}
          className="music-control"
        >
          <audio
            src={butterfliesMusic}
            autoPlay
            className="audio-player"
            onPlay={() => setIsMusicPlaying(true)}
            onPause={() => setIsMusicPlaying(false)}
            onLoadedMetadata={(e) => {
              (e.target as HTMLAudioElement).currentTime = 40; // 1 dakika = 60 saniye
            }}
          >
            Tarayıcınız audio elementini desteklemiyor.
          </audio>
        </motion.div>
      </motion.div>

      {/* Üst Fotoğraflar */}
      <div className="top-photos">
        <motion.div
          initial={{ opacity: 0, x: -50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.3 }}
          className="top-photo"
        >
          <div className="photo-container">
            <img src={foto1} alt="Fotoğraf 1" className="photo-image" />
            <div className="photo-overlay">
              <Heart size={30} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ delay: 0.5 }}
          className="top-photo"
        >
          <div className="photo-container">
            <img src={foto3} alt="Fotoğraf 3" className="photo-image" />
            <div className="photo-overlay">
              <Heart size={30} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.7 }}
          className="top-photo"
        >
          <div className="photo-container">
            <img src={foto5} alt="Fotoğraf 5" className="photo-image" />
            <div className="photo-overlay">
              <Heart size={30} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Anılar Mesajı */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        className="memories-message"
      >
        <h2>Bu fotoğrafları çekinirken ne kadar mutluydum anlatamam. Sana alıştığım andan itibaren çok sosyal biri olmamama rağmen eve gitmemek ve bütün günümü seninle geçirmek istiyordum.</h2>
        <h2>Umarım sen de aynı şekilde istemişsindir... 💖</h2>
      </motion.div>

      {/* Fotoğraf Galerisi */}
      <div className="photo-gallery">
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.1, duration: 0.6 }}
          className="gallery-photo"
        >
          <div className="photo-container">
            <img src={unbekannt} alt="Unbekannt" className="photo-image" />
            <div className="photo-overlay">
              <Heart size={25} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.3, duration: 0.6 }}
          className="gallery-photo foto3-large"
        >
          <div className="photo-container">
            <img src={as} alt="As" className="photo-image" />
            <div className="photo-overlay">
              <Heart size={25} />
            </div>
          </div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 1.5, duration: 0.6 }}
          className="gallery-photo"
        >
          <div className="photo-container">
            <img src={kafa} alt="Kafa" className="photo-image" />
            <div className="photo-overlay">
              <Heart size={25} />
            </div>
          </div>
        </motion.div>
      </div>

      {/* Galeri Altı Mesaj */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.7 }}
        className="gallery-message"
      >
        <h2>Evet, bu fotoğraflara romantik bir şey yazmak pek mümkün değil benim adıma. Resimler kendilerini anlatıyor zaten.</h2>
      </motion.div>

      {/* Ama belki de en iyisi buydu */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 1.9 }}
        className="car-section"
      >
        <h2>Ama belki de en iyisi buydu</h2>
        <div className="car-photo-container">
          <img src={araba} alt="Ama belki de en iyisi buydu" className="car-photo" />
        </div>
      </motion.div>

      {/* Son Romantik Mesaj */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.0 }}
        className="final-message"
      >
        <h2>Şimdi bu sitenin asıl amacına gelelim... 💕</h2>
        <h2>Seninle her anımı geçirmeyi , bütün gün seni rüyamda bile düşünmeyi seviyorum. Görüntülüde birbirimizle ettiğimiz uzun sohbetler, oyun oynayışlarımız, bazen sadece ekrana boş bakmamızı dahi seviyorum. Bu sitedeki fotoğraflarda olduğu gibi daha birçok anı ve mutluluk kaynağı yaratmak istiyorum. 💕</h2>
        <h2>Benimle sevgili olup , bu anıları birlikte yaratma mutluluğunu bahşeder misin?</h2>
      </motion.div>

      {/* Sevgi Mesajı */}
      <motion.div
        initial={{ opacity: 0, y: 30 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 2.2 }}
        className="love-proposal"
      >
        <h2>Benimle Sevgili Olur Musun? 💕</h2>
        <div className="proposal-buttons">
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="proposal-btn yes-btn"
            onClick={handleYesClick}
          >
            Evet! 💖
          </motion.button>
          <motion.button
            whileHover={{ scale: 1.1 }}
            whileTap={{ scale: 0.9 }}
            className="proposal-btn no-btn"
            onClick={handleNoClick}
          >
            Hayır 😢
          </motion.button>
        </div>
      </motion.div>

      {showThankYou && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="thank-you-page"
        >
          <div className="thank-you-photos">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.5 }}
              className="thank-you-photo"
            >
              <img src={foto6} alt="Fotoğraf 6" />
            </motion.div>
            <motion.div
              initial={{ opacity: 0, x: 50 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: 0.7 }}
              className="thank-you-photo"
            >
              <img src={foto7} alt="Fotoğraf 7" />
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 1.0 }}
            className="thank-you-content"
          >
            <h1>YUPPPPİİİİİİİ</h1>
            <p>Dünyanın en şanslı erkeğiyimmmmm. Umarım hazırladığım bu küçük siteyi beğenmişsindirrr. Şuan karşında heyecandan ölüom</p>
          </motion.div>
        </motion.div>
      )}

      {showSadFace && (
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          className="sad-face-page"
        >
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            transition={{ delay: 0.3 }}
            className="sad-face-container"
          >
            <div className="sad-face">😢</div>
          </motion.div>
        </motion.div>
      )}
    </div>
  )
}

export default App
