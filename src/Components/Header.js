import React from 'react';
import images from "../Images/header-image.png"
import imagesSmall from "../Images/header-image-small.png"
import cup from "../Images/cup.png"

// const blockImageStyle = {
//     position: "relative",
// }
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
const width760 = {
    maxWidth: "760px",
    width: "760px",
}

const maxWidth100 = {
    maxWidth: "100%"
}

const backColorGray = {
    background: "#F4F2F0"
}
function Header() {
    return(
        <div>
            <div className='uk-container vokrug-container-header uk-visible@l'>
                <nav className="uk-navbar uk-margin uk-padding-small uk-light uk-text-large" data-uk-navbar>
                    <div className="uk-navbar-left">
                        <ul className="uk-navbar-nav vokrug-text-logo vokrug-text-white">
                            <li style={logoStyle}>вокруг</li>
                        </ul>
                    </div>

                    <div className="uk-navbar-right">

                        <button className="light vokrug-button" type="button" data-uk-toggle="target: #modal-example">Записаться на бесплатную встречу</button>

                        <div id="modal-example" data-uk-modal>
                            <div className="uk-modal-dialog" style={width760}>
                                <div className="uk-grid-collapse uk-child-width-expand@s uk-text-center" data-uk-grid>
                                    <div>
                                        <div className="uk-background-muted uk-padding">
                                            <h2 className='uk-modal-title uk-text-left'>Запись <br />на бесплатную<br />консультацию<br />с психологом</h2>

                                            <div className="uk-margin">
                                                <input className="uk-input uk-text-center" type="text" placeholder="Ваше имя" aria-label="Input" />
                                            </div>

                                            <div className="uk-margin uk-width-1-1">
                                                <input className="uk-input uk-text-center" type="text" placeholder="Телефон" aria-label="Input" />
                                            </div>

                                            <div className="uk-margin uk-text-center">
                                                <button className="uk-button uk-button-default uk-width-1-1">Записаться</button>
                                            </div>

                                            <div className="uk-margin uk-text-left">
                                                <p>Вводя свой номер, вы принимаете условия пользовательского соглашения и даёте согласие на обработку персональных данных.</p>
                                            </div>
                                        </div>
                                    </div>
                                    <div style={backColorGray}>
                                        <div className="uk-padding uk-dark">
                                            <h3 className='uk-text-left'>Что будет<br />дальше</h3>
                                            <ul className='uk-list uk-list-disc uk-text-left'>
                                                <li>С вами свяжется менеджер чтобы<br />договориться о дате и времени<br />бесплатной консультации.</li>
                                                <li>За 8 часов до начала встречи<br />мы вам напомним о ней<br />в месенджере и пришлем<br />ссылку на Zoom.</li>
                                            </ul>
                                            <img className="uk-align-right" src={cup} alt="123" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
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
                                    {/* <button className="dark vokrug-button" type="button" data-uk-toggle="target: #modal-example">Записаться на бесплатную встречу</button> */}
                                    <a className="dark vokrug-button" style={maxWidth} data-uk-toggle="target: #modal-example">Записаться на бесплатную встречу</a>
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
            
            <div className='green vokrug-mobile-container uk-hidden@l vokrug-background-green'>
                
                <nav data-uk-navbar>
                    <div className="uk-navbar-left">

                        <ul className="uk-navbar-nav">
                            <li className="uk-active">
                                <a href="#" className='vokrug-mobile-h1-0 vokrug-header toLowerCase' style={logoStyle}>вокруг</a>
                            </li>
                        </ul>

                    </div>
                </nav>

                <div className="uk-grid-collapse uk-child-width-expand uk-text-center" data-uk-grid>
                    <div>
                        <div>
                            <img src={imagesSmall} alt="" />
                        </div>
                    </div>
                    <div>
                        <div>
                            <img src={images} alt="" />
                        </div>
                    </div>
                </div>

                <div className="uk-grid-collapse uk-child-width-expand uk-text-left uk-margin-large-top" data-uk-grid>
                    <div>
                        <div>
                            <h1 className='uk-text-left vokrug-mobile-h1-1 h1_test vokrug-text-white'>
                                Онлайн-группы<br />поддержки с опытным<br />психологом на тему <br />
                                <span className="uk-inline svg_test-mobile">
                                    <svg width="200" height="94" viewBox="0 0 327 94" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M190.999 1C190.999 1 13.3874 8.51637 1.57862 48.4155C-14.6654 103.3 325.999 112.254 325.999 48.4155C325.999 8.01782 148.09 14.1759 87.4991 29" stroke="#FFDE2F" strokeWidth="2" strokeLinecap="round"/>
                                    </svg>
                                    <div className="uk-position-cover uk-overlay uk-flex uk-flex-center uk-flex-middle">
                                        <i>отношения</i>
                                    </div>
                                </span>
                            </h1>
                            <p className='vokrug-h2-mobile uk-margin-xlarge-top'>Группы до 8 человек. 90 мин <br />раз в неделю. От 1000 ₽</p>
                            <a className="dark vokrug-button uk-align-center uk-text-center uk-margin-small-bottom vokrug-mobile-p-2" href="button" data-uk-toggle="target: #modal-example">Записаться на бесплатную встречу</a>
                            <p className='uk-text-center vokrug-p-mobile uk-margin-bottom-remove'>На встрече психолог расскажет как проходят<br />групповые сессии и уточнит ваш запрос</p>
                        </div>
                    </div>
                    
                </div>
            </div>
        </div>
        );
}

export default Header;