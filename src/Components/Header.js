import React, { useState } from 'react';
import images from "../Images/header-image.png"
import imagesSmall from "../Images/header-image-small.png"
const blockImageStyle = {
    position: "relative",
}
const imageStyle = {
    position: "absolute",
    // top: "100px",
    // bottom: "100px",
    // top: "40px",
    left: "120px",
    bottom: "-50px",
}

const logoStyle = {
    "letter-spacing": ".2rem"
}

function Header() {
    return(
        <div className='uk-container vokrug-container-header'>
            <nav className="uk-navbar uk-margin uk-padding-small uk-light uk-text-large" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li style={logoStyle}>вокруг</li>
                    </ul>
                </div>

                <div className="uk-navbar-right">
                    <a className="uk-button vokrug-button-default" href="https://www.google.com" target="_blank" rel="noreferrer">Записаться на бесплатную встречу</a>
                </div>
            </nav>

            <div className='uk-margin uk-padding-small uk-margin-large-top uk-light'>

                <div className="uk-child-width-1-2@s uk-text-center uk-flex uk-flex-middle" data-uk-grid>
                    <div>
                        <div className="uk-card">
                            <h1 className='uk-text-left'>Онлайн-группы поддержки с опытным психологом на тему отношения</h1>
                            <p className='uk-text-meta uk-text-left vokrug-text-default vokrug-textColor-white'>До 8 человек · 90 мин раз в неделю · От 1000 ₽</p>
                            <div className='uk-flex uk-flex-column uk-margin-medium-top vokrug-width-1-2'>
                                <a className="uk-button vokrug-button-default vokrug-button-secondary vokrug-padding-bottom vokrug-padding-top uk-padding-remove-left uk-padding-remove-right" href="#a">Записаться на бесплатную встречу</a>
                                <p className='uk-text-meta uk-text-center'>На встрече психолог расскажет как проходят групповые сессии и уточнит ваш запрос.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="uk-inline" style={blockImageStyle}>
                        <img src={images} width="300" height="1200" alt="123"/>
                        <div className="uk-position-bottom-left uk-overlay uk-padding-remove" style={imageStyle}>
                            <img src={imagesSmall} width="150" alt="123" />
                        </div>
                    </div>

                </div>

            </div>
        </div>
        );
}

export default Header;