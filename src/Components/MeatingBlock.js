import React from 'react';

function Block() {
    return(
        <div className='uk-container uk-margin-large-top uk-padding'>
            <div>
                <div className="uk-child-width-expand@s uk-text-center vokrug-padding-left-2px" data-uk-grid>
                    
                    <div>
                        <div className="uk-card uk-container-vokrug uk-height-1-1 vokrig-height-medium">
                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-header">Приветствие</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body uk-text-right vokrug-metting-number">01.</div>
                                </div>
                            </div>

                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-text">Участники рассказывают как прошла их неделя и что чувствуют на момент начала встречи.</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="uk-card uk-container-vokrug uk-height-1-1 vokrig-height-medium">
                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-header">Активная фаза</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body uk-text-right vokrug-metting-number">02.</div>
                                </div>
                            </div>

                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-text">Ведущий группы задает тему встречи и помогает каждому участнику высказаться, поделиться своим опытом и мнением.</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body"></div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>

                <div className="uk-child-width-expand@s uk-text-center vokrug-padding-left-2px vokrug-margin-top-2px" data-uk-grid>

                    <div>
                        <div className="uk-card uk-card-default uk-container-vokrug uk-height-1-1 vokrig-height-medium">
                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-header">Вопросы и практика</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body uk-text-right vokrug-metting-number">03.</div>
                                </div>
                            </div>

                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-text">Участники задают вопросы психологу, делятся жизненным опытом, обсуждают рекомендации и пробуют применить на занятии советы.</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body"></div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div>
                        <div className="uk-card uk-card-default uk-container-vokrug uk-height-1-1 vokrig-height-medium">
                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-header">Итоги</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body uk-text-right vokrug-metting-number">04.</div>
                                </div>
                            </div>

                            <div className="uk-text-center" data-uk-grid>
                                <div className="uk-width-expand@m">
                                    <div className="uk-card uk-card-body uk-text-left vokrug-metting-text">Каждый участник рассказывает, что полезного вынес, что понравилось,и как он себя чувствует после встречи. А чтобы закрепить тему ведущий задаёт домашнее задание.</div>
                                </div>
                                <div className="uk-width-1-4@m">
                                    <div className="uk-card uk-card-body"></div>
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