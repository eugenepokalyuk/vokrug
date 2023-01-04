import React from 'react';
const blockSize = {
    width: "575px !important",
    height: "420px !important",
    maxWidth: "575px !important",
    maxHeight: "420px !important",
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
        </div>
    );
}

export default Block;