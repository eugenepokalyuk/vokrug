import React from 'react';
import images from "../Images/header-image.png"
import imagesSmall from "../Images/header-image-small.png"
const blockImageStyle = {
    position: "relative",
}
const imageStyle = {
    position: "absolute",
    // left: "120px",
    bottom: "-10%",
}

const logoStyle = {
    "letterSpacing": "5px"
}
const maxWidth = {
    "maxWidth": "395px",
    // "padding":"8px"
}
function Header() {
    return(
        <div className='uk-container vokrug-container-header'>
            <nav className="uk-navbar uk-margin uk-padding-small uk-light uk-text-large" data-uk-navbar>
                <div className="uk-navbar-left">
                    <ul className="uk-navbar-nav vokrug-text-logo vokrug-text-white">
                        <li style={logoStyle}>вокруг</li>
                    </ul>
                </div>

                <div className="uk-navbar-right">
                    <a href="https://www.google.com" target="_blank" rel="noreferrer" className='light vokrug-button'>Записаться на бесплатную встречу</a>
                </div>
            </nav>

            <div className='uk-margin uk-padding-small uk-margin-large-top uk-light'>

                <div className="uk-text-center uk-flex uk-flex-left" data-uk-grid>
                    <div>
                        <div className="uk-card">
                            <h1 className='uk-text-left vokrug-header-text vokrug-header-text-test h1_test'>
                                Онлайн-группы<br />поддержки с опытным<br />психологом<br /> на тему
                                <div className="uk-inline svg_test">
                                    <svg width="327" height="94" viewBox="0 0 327 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M190.999 1C190.999 1 13.3874 8.51637 1.57862 48.4155C-14.6654 103.3 325.999 112.254 325.999 48.4155C325.999 8.01782 148.09 14.1759 87.4991 29" stroke="#FFDE2F" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <div className="uk-position-cover uk-overlay uk-flex uk-flex-center uk-flex-middle"><i>отношения</i></div>
                                </div>
                            </h1>

                            <p className='uk-text-left vokrug-body-text'>До 8 человек <span>·</span> 90 мин раз в неделю <span>·</span> От 1000 ₽</p>
                            <div className='uk-flex uk-flex-column vokrug-width-1-2 vokrug-margin-large-top'>
                                <a className="dark vokrug-button" style={maxWidth} href="#a">Записаться на бесплатную встречу</a>
                                <p className='vokrug-text-meta uk-text-center uk-margin-small-top' style={maxWidth}>На встрече психолог расскажет как проходят групповые сессии и уточнит ваш запрос.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="uk-inline uk-align-center uk-margin-remove-top" data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; repeat: false">
                        <img src={images} width="300" height="1200" alt="123" />
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