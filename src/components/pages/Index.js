import React from 'react'

//Components
import { AboutContact } from '../index/AboutContact'
import { Instagram } from '../index/Instagram'
import { Presentacion } from '../index/Presentacion'

export const Index = () => {

    return (
        <main className="main">
            <Presentacion/>
            <AboutContact/>
            <Instagram/>
        </main>
    )
}
