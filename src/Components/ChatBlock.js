import React from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug uk-container-vokrug-pattern uk-margin-large-top uk-padding'>
            <div className='uk-width-1-2@s uk-align-center'>
                <div className="uk-card uk-border-rounded">
                    <div className="uk-card-body uk-padding-small" data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .guest, .me; delay: 300; repeat: false">
                    
                        <div className="guest uk-grid-small uk-flex-bottom uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                    <p className="uk-margin-remove">Чему я научусь в группе?</p>
                                </div>
                            </div>
                        </div>
                        
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove">Правильной коммуникации в паре</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove">Экологично закрывать конфликты</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove">Рационально реагировать на эмоции партнера</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove">Выстраивать свои границы и соблюдать чужие</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove">Находить причины конфликтов</p>
                                </div>
                            </div>
                        </div>

                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove">Безболезненно выхрдить из отношений</p>
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