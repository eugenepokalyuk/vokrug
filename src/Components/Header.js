import React, { useState } from 'react';
import images from "../Images/header-image.png"
import imagesSmall from "../Images/header-image-small.png"

function Header() {
    return(
        <div className='uk-container vokrug-container-header'>
            <nav className="uk-navbar uk-margin uk-padding-small uk-light uk-text-large" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav">
                        <li>вокруг</li>
                    </ul>
                </div>

                <div className="uk-navbar-right">
                    <a className="uk-button vokrug-button-defaul" href="https://www.google.com" target="_blank" rel="noreferrer">Записаться на бесплатную встречу</a>
                </div>
            </nav>

            <div className='uk-margin uk-padding-small uk-light'>

                <div className="uk-child-width-expand@s uk-text-center" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-body uk-text-left">
                            <h1>Онлайн-группы поддержки с опытным психологом на тему отношения</h1>
                            <p className='uk-text-meta'>До 8 человек · 90 мин раз в неделю · От 1000 ₽</p>
                            <div className='uk-flex uk-flex-middle uk-flex-center uk-flex-column vokrug-width-1-2 uk-margin-large-top'>
                                <a className="uk-button vokrug-button-secondary uk-border-rounded" href="#a">Записаться на бесплатную встречу</a>
                                <p className='uk-text-meta uk-text-center'>На встрече психолог расскажет как проходят групповые сессии и уточнит ваш запрос.</p>
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className='vokrug-parent'>
                            <img src={images} alt="123" className='uk-border-rounded uk-overlay vokrug-image-1' />
                            <img src={imagesSmall} alt="123" className='uk-border-rounded uk-overlay vokrug-image-2' />
                        </div>
                    </div>
                </div>

            </div>
        </div>
        );
}

export default Header;