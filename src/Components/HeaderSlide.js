import React from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug uk-margin-large-top' data-uk-scrollspy="cls: uk-animation-slide-bottom; delay: 300; repeat: false">
            <div className='uk-padding-small'>
                <div className="uk-text-center" data-uk-grid>
                    <div className="uk-width-1-3">
                        <div className="uk-card uk-card-body uk-text-left">
                            <h2>Вам подойдет тема, если</h2>
                        </div>
                    </div>
                    
                    <div className="uk-width-expand@m uk-padding-remove">
                        <div className="uk-card uk-card-body uk-text-left test">
                            
                            <div className="uk-child-width-expand@s uk-text-left" data-uk-grid>
                                <div className='uk-width-1-6@m'>
                                    <div className="uk-card">
                                        <h4 className='uk-text-muted'>01.</h4>
                                    </div>
                                </div>
                                <div className='uk-padding-remove-left uk-margin-large-right'>
                                    <div className="uk-card">
                                        <h4 className='uk-margin-remove-bottom'>Хотите построить новые отношения</h4>
                                        <p className='uk-text-muted uk-margin-small-top vokrug-text-default'>Узнайте, что является залогом здоровых и доверительных отношений и почему предыдушие отношения не складывались.</p>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            
                            <div className="uk-child-width-expand@s uk-text-left" data-uk-grid>
                                <div className='uk-width-1-6@m'>
                                    <div className="uk-card">
                                        <h4 className='uk-text-muted'>02.</h4>
                                    </div>
                                </div>
                                <div className='uk-padding-remove-left uk-margin-large-right'>
                                    <div className="uk-card">
                                        <h4 className='uk-margin-remove-bottom'>Видите проблемы в существующих отношениях</h4>
                                        <p className='uk-text-muted uk-margin-small-top vokrug-text-default'>Поймете, почему именно эти проблемы возникли в паре и научитесь с ними справляться. Узнаете как сделать отношения лучше или как безболезненно их закончить</p>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            
                            <div className="uk-child-width-expand@s uk-text-left" data-uk-grid>
                                <div className='uk-width-1-6@m'>
                                    <div className="uk-card">
                                        <h4 className='uk-text-muted'>03.</h4>
                                    </div>
                                </div>
                                <div className='uk-padding-remove-left uk-margin-large-right'>
                                    <div className="uk-card">
                                        <h4 className='uk-margin-remove-bottom'>Хотите улучшить или поддерживать хорошие отношения</h4>
                                        <p className='uk-text-muted uk-margin-small-top vokrug-text-default'>Научитесь глубже понимать себя и партнера. Как мягко переживать конфликты и как совместно развиваться</p>
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