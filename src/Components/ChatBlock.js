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
        <div>            
            <div className='uk-container uk-container-vokrug uk-container-vokrug-pattern uk-margin-large-top uk-padding uk-visible@l'>
                <div className='uk-align-center' style={size760}>
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

            <div className='uk-margin-small-top uk-hidden@l'>
                <div className='uk-container-vokrug-pattern uk-width-1-1 borderRadius'>
                    <ul className='uk-list uk-text-left vokrug-chat'>
                        <li>Чему я научусь в группе?</li>
                        <li>Правильной коммуникации<br />в паре</li>
                        <li>Экологично закрывать<br />конфликты</li>
                        <li>Рационально реагировать<br />на эмоции партнера</li>
                        <li>Выстраивать свои границы<br />и соблюдать чужие</li>
                        <li>Находить причины<br />конфликтов</li>
                        <li>Безболезненно выходить<br />из отношений</li>
                    </ul>
                </div>
            </div>
        </div>
        );
}

export default Block;