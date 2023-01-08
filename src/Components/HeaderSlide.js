import React from 'react';
const style = {
    background: "#fff",
    borderRadius: "20px"
}
function Block() {
    return(
        <div>            
            <div className='uk-container uk-container-vokrug uk-margin-large-top uk-visible@l'>
                <div>
                    <div data-uk-grid>
                        <div>
                            <div className="uk-card uk-card-body">
                                <h2 className='vokrug-text large'>Вам подойдет <br />тема, если</h2>
                            </div>
                        </div>
                        
                        <div className="uk-width-expand@m uk-padding-remove">
                            <div className="uk-card uk-card-body uk-text-left test">
                                <div className='uk-grid-match uk-child-width-expand@s'>

                                    <div className="uk-text-center uk-margin-top" data-uk-grid>
                                        <div className="uk-width-auto@m">
                                            <div className="uk-card vokrug-text heading muted">01.</div>
                                        </div>
                                        <div className="uk-width-expand@m uk-text-left">
                                            <div className="uk-card vokrug-width-1-1">
                                                <h2 className="vokrug-text heading">Хотите построить новые отношения</h2>
                                                <p className="vokrug-text text muted">Узнаете, что является залогом здоровых и доверительных отношений и почему предыдущие отношения <br />не складывались</p>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='uk-text-center vokrug-width-80'/>

                                    <div className="uk-text-center" data-uk-grid>
                                        <div className="uk-width-auto@m">
                                            <div className="uk-card vokrug-text heading muted">02.</div>
                                        </div>
                                        <div className="uk-width-expand@m uk-text-left">
                                            <div className="uk-card vokrug-width-1-1">
                                                <h2 className="vokrug-text heading">Видите проблемы <br />в существующих отношениях</h2>
                                                <p className="vokrug-text text muted">Поймете, почему именно эти проблемы возникли в паре<br />и научитесь с ними справляться. Узнаете как сделать<br />отношения лучше или как безболезненно их закончить</p>
                                            </div>
                                        </div>
                                    </div>

                                    <hr className='uk-text-center vokrug-width-80'/>

                                    <div className="uk-text-center" data-uk-grid>
                                        <div className="uk-width-auto@m">
                                            <div className="uk-card vokrug-text heading muted">03.</div>
                                        </div>
                                        <div className="uk-width-expand@m uk-text-left">
                                            <div className="uk-card vokrug-width-1-1">
                                                <h2 className="vokrug-text heading">Хотите улучшить или поддерживать хорошие отношения</h2>
                                                <p className="vokrug-text text muted">Научитесь глубже понимать себя и партнера. Как мягко<br />переживать конфликты и как совместно развиваться</p>
                                            </div>
                                        </div>
                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <div className='vokrug-mobile-container uk-hidden@l' style={style}>
                <div className='vokrug-padding-mobile-small uk-text-left'>
                    <h1>С чем могут помочь<br />онлайн-группы</h1>
                </div>
                
                <div className="uk-flex">
                    <div className="uk-card uk-width-1-3">01.</div>
                    <div className="uk-card uk-width-1-1">
                        <h2>Хотите построить<br />новые отношения</h2>
                        <p>Справиться с переживаниями<br />из-за переезда и адаптироваться<br />в новых реалиях</p>
                    </div>
                </div>

                <hr />

                <div className="uk-flex">
                    <div className="uk-card uk-width-1-3">02.</div>
                    <div className="uk-card uk-width-1-1">
                        <h2>Видите проблемы<br />в существующих<br />отношениях</h2>
                        <p>Поймете, почему именно<br />эти проблемы возникли в паре<br />и научитесь с ними справляться.<br />Узнаете как сделать отношения<br />лучше или как безболезненно<br />их закончить</p>
                    </div>
                </div>

                <hr />

                <div className="uk-flex">
                    <div className="uk-card uk-width-1-3">03.</div>
                    <div className="uk-card uk-width-1-1">
                        <h2>Хотите улучшить<br />или поддерживать<br />хорошие отношения</h2>
                        <p>Научитесь глубже понимать<br />себя и партнера. Как мягко<br />переживать конфликты<br />и как совместно развиваться</p>
                    </div>
                </div>

            </div>
        </div>
        );
}

export default Block;