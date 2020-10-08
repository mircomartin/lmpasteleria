import React from 'react'

//Components
import { instagramData } from '../../data/data'
import { InstagramCard } from './InstagramCard'

export const Instagram = () => {
    return (
        <div className="container instagram">
            <div className="row instagram__wrapperTitle">
                <div className="col-12">
                    <h2 className="instagram__title">Sígueme en Instagram</h2>
                </div>
            </div>
            <div className="row" data-aos="zoom-in">
                {
                    instagramData.map((i) => (
                        <InstagramCard key={i.id} i={i}/>
                    ))
                }
            </div>
        </div>
    )
}
