import React, {useState} from 'react'
import './App.css'
import Header from './components/Header'
import Footer from './components/Footer'
import Navigation from './components/Navigation'
import MainApple from './components/Apple-Musicpage'
import { top10AppleMusicSongs } from './data/data'
import MainSpotify from './components/Spotify-Musicpage'
import { top10SpotifySongs } from './data/data'
import Homepage from './components/Homepage'

function App() {
    const [currentPage, setCurrentPage] = useState('home')

    const navigateTo = (page) => {
        setCurrentPage(page);
    };

    return (
        <>
            <Header/>
            <Navigation navigateTo={navigateTo} />
            <div className='mainContainer'>
                {currentPage === 'apple-music' && <MainApple songs={top10AppleMusicSongs} />}
                {currentPage === 'spotify' && <MainSpotify songs={top10SpotifySongs} />}
                {currentPage === 'home' && <Homepage />}
            </div>
            <Footer/>
        </>
    );
}

export default App;