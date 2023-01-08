import React from 'react';

import userTwo from "../Images/userTwo.png"

const blockSize = {
    width: "575px !important",
    height: "420px !important",
    maxWidth: "575px !important",
    maxHeight: "420px !important",
}

const style = {
    background: "#fff",
    width: "100%",
    height: "100%",
    color: "#000",
    borderRadius: "16px"
}

function Block() {
    return(
        <div>            
            <div className='uk-container vokrug-margin-top-large uk-visible@l'>
                <h1 className='uk-text-center vokrug-h2-text uk-margin-large-bottom'>Как проходят встречи</h1>
                
                <div className="uk-grid-collapse uk-child-width-1-2@s uk-grid-match" data-uk-grid>
                    <div style={blockSize}>
                        <div className="uk-card vokrug-padding-medium uk-card-default uk-container-vokrug vokrug-height-420 vokrug-shadow-off">
                            <div className="uk-child-width-1-2@s uk-grid-match vokrug-padding-medium uk-height-1-1" data-uk-grid>
                                <div>
                                    <div className="uk-card">
                                        <h2 className='vokrug-metting-header'>Приветствие</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card">
                                        <p className='uk-align-right vokrug-metting-number'>01.</p>
                                    </div>
                                </div>
                                <div className='vokrug-width-1-80'>
                                    <div className="uk-card uk-flex uk-flex-bottom">
                                        <p className='vokrug-metting-text uk-margin-remove'>Участники рассказывают <br />как прошла их неделя <br />и что чувствуют на момент <br />начала встречи.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={blockSize}>
                        <div className="uk-card vokrug-padding-medium uk-card-default uk-container-vokrug vokrug-height-420 vokrug-margin-left-2px vokrug-shadow-off">
                            <div className="uk-child-width-1-2@s uk-grid-match vokrug-padding-medium uk-height-1-1 vokrug-shadow-off" data-uk-grid>
                                <div>
                                    <div className="uk-card">
                                        <h2 className='vokrug-metting-header'>Активная фаза</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card">
                                        <p className='uk-align-right vokrug-metting-number'>02.</p>
                                    </div>
                                </div>
                                <div className='vokrug-width-1-80'>
                                    <div className="uk-card uk-flex uk-flex-bottom">
                                        <p className='vokrug-metting-text uk-margin-remove'>Ведущий группы задает тему <br />встречи и помогает каждому <br />участнику высказаться, поделиться <br />своим опытом и мнением.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="uk-grid-collapse uk-child-width-1-2@s uk-grid-match vokrug-margin-top-2px" data-uk-grid>
                    <div style={blockSize}>
                        <div className="uk-card vokrug-padding-medium uk-card-default uk-container-vokrug vokrug-height-420 vokrug-shadow-off">
                            <div className="uk-child-width-1-2@s uk-grid-match vokrug-padding-medium uk-height-1-1" data-uk-grid>
                                <div>
                                    <div className="uk-card">
                                        <h2 className='vokrug-metting-header'>Вопросы и практика</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card">
                                        <p className='uk-align-right vokrug-metting-number'>03.</p>
                                    </div>
                                </div>
                                <div className='vokrug-width-1-80'>
                                    <div className="uk-card uk-flex uk-flex-bottom">
                                        <p className='vokrug-metting-text uk-margin-remove'>Участники задают вопросы психологу, делятся жизненным опытом, обсуждают рекомендации и пробуют применить <br />на занятии советы.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div style={blockSize}>
                        <div className="uk-card vokrug-padding-medium uk-card-default uk-container-vokrug vokrug-height-420 vokrug-margin-left-2px vokrug-shadow-off">
                            <div className="uk-child-width-1-2@s uk-grid-match vokrug-padding-medium uk-height-1-1" data-uk-grid>
                                <div>
                                    <div className="uk-card">
                                        <h2 className='vokrug-metting-header'>Итоги</h2>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card">
                                        <p className='uk-align-right vokrug-metting-number'>04.</p>
                                    </div>
                                </div>
                                <div className='vokrug-width-1-80'>
                                    <div className="uk-card uk-flex uk-flex-bottom">
                                        <p className='vokrug-metting-text uk-margin-remove'>Каждый участник рассказывает, <br />что полезного вынес, что понравилось, и как он себя чувствует после встречи. <br />А чтобы закрепить тему ведущий задаёт домашнее задание.</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            </div>
            <div className='vokrug-mobile-container vokrug-margin-top-large uk-hidden@l'>
                <h1>Как проходят встречи</h1>
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slider="center: true">
                    <ul className="uk-slider-items uk-grid">
                        
                        <li className="uk-width-3-4">
                            <div className="uk-panel" style={style}>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-padding-small">
                                    <div className="uk-card uk-text-left">Приветствие</div>
                                    <div className="uk-card uk-text-right vokrug-text-gray">01.</div>
                                </div>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-position-bottom uk-padding-small">
                                    <div className="uk-card vokrug-text-gray">
                                        Научитесь глубже понимать себя и партнера. Как мягко переживать конфликты и как совместно развиваться
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="uk-width-3-4">
                            <div className="uk-panel" style={style}>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-padding-small">
                                    <div className="uk-card uk-text-left">Активная фаза</div>
                                    <div className="uk-card uk-text-right vokrug-text-gray">02.</div>
                                </div>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-position-bottom uk-padding-small">
                                    <div className="uk-card vokrug-text-gray">
                                        Ведущий группы задает тему встречи и помогает каждому участнику высказаться, поделиться своим опытом и мнением.
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="uk-width-3-4">
                            <div className="uk-panel" style={style}>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-padding-small">
                                    <div className="uk-card uk-text-left">Вопросы и практика</div>
                                    <div className="uk-card uk-text-right vokrug-text-gray">03.</div>
                                </div>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-position-bottom uk-padding-small">
                                    <div className="uk-card vokrug-text-gray">
                                        Участники задают вопросы психологу, делятся жизненным опытом, обсуждают рекомендации и пробуют применить на занятии советы.
                                    </div>
                                </div>
                            </div>
                        </li>

                        <li className="uk-width-3-4">
                            <div className="uk-panel" style={style}>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-padding-small">
                                    <div className="uk-card uk-text-left">Итоги</div>
                                    <div className="uk-card uk-text-right vokrug-text-gray">04.</div>
                                </div>
                                <div className="uk-panel uk-flex uk-flex-center uk-child-width-expand uk-position-bottom uk-padding-small">
                                    <div className="uk-card vokrug-text-gray">
                                        Каждый участник рассказывает, что полезного вынес, что понравилось, и как он себя чувствует после встречи. А чтобы закрепить тему ведущий задаёт домашнее задание.
                                    </div>
                                </div>
                            </div>
                        </li>

                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#1" data-uk-slidenav-previous uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#2" data-uk-slidenav-next uk-slider-item="next"></a>

                </div>
            </div>
        </div>
    );
}

export default Block;