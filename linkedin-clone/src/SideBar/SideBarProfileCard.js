import React from 'react'
import { Persona, personaSize } from '@fluentui/react/lib/Persona'

function SideBarProfileCard() {
    return (
        <div className="profileCardContainer">
            <img src="https://media.istockphoto.com/vectors/abstract-blur-background-rainbow-mesh-gradient-color-power-pattern-vector-id1130076181?k=6&m=1130076181&s=612x612&w=0&h=Wdgg1tDVgb126pXZnhuB6hzVZ072z5vRBE7W81ieqFE=" alt="" />
            <Persona className="profilePersona" size={personaSize.size28} />
            <h2> Tanisha Agarwal</h2>
            <h4>Software Engineer at Microsoft</h4>              
        </div>
    )
}

export default SideBarProfileCard
