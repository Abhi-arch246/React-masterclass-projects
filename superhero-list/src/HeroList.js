import React, { useContext } from 'react'
import { HeroContext } from './HeroContext'
function HeroList() {
    const { heros } = useContext(HeroContext)
    return heros.length ? (
        <div>
            <h2 className="text-white p-2">Below are the SuperHeros List</h2>
            {heros.map(hero => (
                <div>
                    <h4>SuperHero: {hero.name}</h4>
                    <h4>Comic: {hero.comic}</h4>
                    <hr />
                </div>
            ))}
        </div>
    ) : (
            <div>
                <h2>No SuperHeros we got here</h2>
            </div>
        )
}

export default HeroList