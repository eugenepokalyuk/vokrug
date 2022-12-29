import React from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug uk-container-vokrug-pattern uk-margin-large-top uk-padding vokrug-width-90'>
            {/* <div className='uk-width-1-2@s uk-align-center'> */}
            <div className='vokrug-width-60 uk-align-center'>
            {/* vokrug-width-70 */}
                <div className="uk-card uk-border-rounded">
                    <div className="uk-card-body uk-padding-small" data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .guest, .me; delay: 300; repeat: false">
                    
                        <div className="guest uk-grid-small uk-flex-bottom uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove vokrug-chat-font">Чему я научусь в группе?</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove vokrug-chat-font">Правильной коммуникации в паре</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove vokrug-chat-font">Экологично закрывать конфликты</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove vokrug-chat-font">Рационально реагировать на эмоции партнера</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove vokrug-chat-font">Выстраивать свои границы и соблюдать чужие</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove vokrug-chat-font">Находить причины конфликтов</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove vokrug-chat-font">Безболезненно выходить из отношений</p>
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