import React from 'react'
import "./style.scss"

function Recent() {
    return (
        <>
            <div className='recent-section'>
                <div className='container-recent'>
                    <div className='card-text'><h2>RECENT STORIES</h2></div>
                    <div className='card-3'>
                        <div>
                            <img className='section-img' src='https://dlcdnrog.asus.com/rog/media/1670893994624.webp' />
                        </div>
                        <div>
                            <img className='section-img' src='https://dlcdnrog.asus.com/rog/media/1669857154768.webp' />
                        </div>
                        <div>
                            <img className='section-img' src='https://dlcdnrog.asus.com/rog/media/166864109730.webp' />

                        </div>
                    </div>
                    <div className='card-2'>
                        <div><img className='section-img' src='	https://dlcdnrog.asus.com/rog/media/1667344658657.webp' /></div>
                        <div><img className='section-img' src='https://dlcdnrog.asus.com/rog/media/1665200765593.webp' /></div>
                    </div>
                </div>

            </div>
        </>
    )
}

export default Recent