'use client'

import './header.css';
import Vision from '../../../public/vision.svg'
export default function Header(props) {
    const style = props.style ? props.style : 'light'
    return (
        <div className={(style === 'blue'?"h-blue":'')+" h-container"}>
            <div className="h-logo">Sagyz project</div>
            <div className="h-subcontainer">
                <div className="h-nav">
                    <div className="h-nav-op">О нас</div>
                    <div className="h-nav-op">Партнеры</div>
                    <div className="h-nav-op">Наша команды</div>
                    <div className="h-nav-op">Контакты</div>
                </div>
                <div className="h-button">
                    <button>Регистрация</button>
                </div>
                <div className="h-vision">
                    <img src={Vision.src} alt={''} />
                </div>
            </div>
        </div>
    )
}
