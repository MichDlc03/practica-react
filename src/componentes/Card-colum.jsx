import { useState } from "react"

export function CardColumn ({name, user}){
    const [follow, setFollow] = useState(false)
    
    const text = follow ? 'Siguiendo' : 'Seguir'
    
    const atUser = (user) => `@${user}`

    const buttonFollow = follow ? 'btn follow ': 'btn'
    const handleClick = () => {
        setFollow(!follow)
    }
    
    return(
        <article className="card-content">
        <header className="card-img">
            <img className="imagen-card" src={`https://unavatar.io/twitter/${user}`} alt="" />
        </header>
        <div className="card-info">
            <strong>{name}</strong>
            <span>{atUser(user)}</span>
        </div>
        <aside className="card-footer">
            <button className={buttonFollow} onClick={handleClick}> {text} </button>
        </aside>
    </article>

    )
}

export function Cardotra ({name, user}){
    const [follow, setFollow] = useState(false)
    
    const text = follow ? 'Siguiendo' : 'Seguir'
    
    const atUser = (user) => `@${user}`

    const buttonFollow = follow ? 'btn follow ': 'btn'
    const handleClick = () => {
        setFollow(!follow)
    }
    
    return(
        <article className="card-content">
        <header className="card-img">
            <img className="imagen-card" src={`https://unavatar.io/twitter/${user}`} alt="" />
        </header>
        <div className="card-info">
            <strong>{name}</strong>
            <span>{atUser(user)}</span>
        </div>
        <aside className="card-footer">
            <button className={buttonFollow} onClick={handleClick}> {text} </button>
        </aside>
    </article>

    )
}