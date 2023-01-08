import React from 'react';
const marginTop = {
    "margin": "40px 0px"
}
function Block() {
    return(
        <div>
            <div className='uk-container uk-visible@l' style={marginTop}>
                <nav data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active vokrug-footer-text">
                                2022 © Vokrug.space
                                <span className='spanBullet'>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.56" width="4" height="4" rx="2" fill="#333333" fillOpacity="0.4"/>
                                    </svg>
                                </span>
                                help@blizkie.ru
                            </li>
                        </ul>
                    </div>

                    <div className="uk-navbar-right">
                        <ul className="uk-navbar-nav">
                            <li className="uk-active vokrug-footer-text">
                                Пользовательское соглашение
                                <span className='spanBullet'>
                                    <svg width="4" height="4" viewBox="0 0 4 4" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <rect opacity="0.56" width="4" height="4" rx="2" fill="#333333" fillOpacity="0.4"/>
                                    </svg>
                                </span>
                                Политика конфиденциальности
                            </li>
                        </ul>
                    </div>
                </nav>
                {/* <p className='uk-text-left vokrug-body-text'>До 8 человек <span>·</span> 90 мин раз в неделю <span>·</span> От 1000 ₽</p> */}
                {/* <nav className="uk-navbar" data-uk-navbar>

                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav vokrug-adv-textDecoration">
                            <li><a href="#">2022 © Vokrug.space</a></li>
                            <li><a href="#">ask@vokrug.space</a></li>
                        </ul>

                    </div>

                    <div className="uk-navbar-right">

                        <ul className="uk-navbar-nav vokrug-adv-textDecoration">
                            <li><a href="#">Пользовательское соглашение</a></li>
                            <li><a href="#">Политика конфиденциальности</a></li>
                        </ul>

                    </div>

                </nav> */}
            </div>
            <div className='vokrug-mobile-container uk-hidden@l'>
                <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center uk-padding" data-uk-grid>
                    <div>
                        <div className="vokrug-padding-small">
                            <a href="#" className='vokrug-text-mobile-logo'>вокруг</a>
                        </div>
                    </div>
                    <div>
                        <div className="vokrug-padding-small vokrug-text-link">
                            <a href="#1">2022 © Vokrug.space</a>
                        </div>
                    </div>
                    <div>
                        <div className="vokrug-padding-small vokrug-text-link">
                        <a href="#2">ask@vokrug.space</a>
                        </div>
                    </div>
                    <div>
                        <div className="vokrug-padding-small vokrug-text-link">
                            <a href="#3">Пользовательское соглашение</a>
                        </div>
                    </div>
                    <div>
                        <div className="vokrug-padding-small vokrug-text-link">
                            <a href="#4">Политика конфиденциальности</a>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Block;