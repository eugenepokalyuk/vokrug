import React from 'react';
const size760 = {
    "maxWidth":"760px"
}
const pos = {
    position: "absolute",
    left: "760px",
    bottom: "15px",
}
function Block() {
    return(
        <div className='uk-container uk-container-vokrug uk-container-vokrug-pattern uk-margin-large-top uk-padding'>
            <div className='uk-align-center' style={size760}>
                {/* <div className="uk-container uk-width-large">
                    <div className="uk-card uk-card-default uk-border-rounded uk-margin-large-top">
                        <div className="uk-card-body uk-padding-small">
                            <div className="guest uk-grid-small uk-flex-bottom uk-flex-left" data-uk-grid>
                            <div className="uk-width-auto">
                                <div className="uk-card uk-card-body uk-card-small uk-card-default uk-border-rounded">
                                <p className="uk-margin-remove">Hey dude!</p>
                                </div>
                            </div>
                            </div>

                            <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                                <div className="uk-width-auto">
                                    <div className="uk-card uk-card-body uk-card-small uk-card-primary uk-border-rounded">
                                        <p className="uk-margin-remove">Hi brow :)</p>
                                    </div>
                                </div>
                            </div>

                            <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-right" data-uk-grid>
                                    <div className="uk-card uk-card-body uk-card-small uk-card-primary uk-border-rounded">
                                        <p className="uk-margin-remove">Hi brow :)</p>
                                    </div>
                                <div className="uk-width-auto">
                                    <h1 class="me-icon uk-flex uk-flex-center uk-flex-middle"><span>B</span></h1>
                                </div>
                            </div>
                    </div>

                    </div>
                </div> */}

                {/* <h1 class="me-icon uk-flex uk-flex-center uk-flex-middle"><span>B</span></h1> */}

                <div className="uk-card uk-border-rounded">
                    <div className="uk-card-body uk-padding-small" data-uk-scrollspy="cls: uk-animation-slide-bottom; target: .guest, .me; delay: 300; repeat: false">
                        <div className="guest uk-grid-small uk-flex-bottom uk-flex-left" data-uk-grid>
                            <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove vokrug-chat-font">Чему я научусь в группе?</p>
                            </div>
                        </div>
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove vokrug-chat-font">Правильной коммуникации в паре</p>
                            </div>
                        </div>
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove vokrug-chat-font">Экологично закрывать конфликты</p>
                            </div>
                        </div>
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-text-left" data-uk-grid>
                            <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove vokrug-chat-font">Рационально реагировать на эмоции партнера</p>
                            </div>
                        </div>
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove vokrug-chat-font">Выстраивать свои границы и соблюдать чужие</p>
                            </div>
                        </div>
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove vokrug-chat-font">Находить причины конфликтов</p>
                            </div>
                        </div>
                        <div className="me uk-grid-small uk-flex-bottom uk-flex-right uk-flex-left" data-uk-grid>
                            <div className="uk-card uk-card-body uk-card-small uk-border-rounded">
                                <p className="uk-margin-remove vokrug-chat-font">Безболезненно выходить из отношений</p>
                            </div>
                            <div>
                                <h1 className="me-icon uk-flex uk-flex-center uk-flex-middle" style={pos}><span>B</span></h1>
                            </div>
                        </div>

                        
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Block;