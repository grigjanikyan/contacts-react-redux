import React from 'react';
//components
import Page from '../../components/Page'

const Home = () => {
    return (
        <Page className='home'>
            <div className='solar-syst'>
                <div className='sun'></div>
                <div className='mercury'></div>
                <div className='venus'></div>
                <div className='earth'></div>
                <div className='mars'></div>
                <div className='jupiter'></div>
                <div className='saturn'></div>
                <div className='uranus'></div>
                <div className='asteroids-belt'></div>
            </div>
        </Page>
    )
}

export default Home;