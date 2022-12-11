import React, { useState } from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug uk-margin-large-top uk-padding'>
            <div>
                <div className="uk-text-center" data-uk-grid>
                    <div className="uk-width-1-3@m">
                        <div className="uk-card uk-card-body uk-text-left">
                            <h2>Вам подойдет тема, если</h2>
                        </div>
                    </div>

                    <div className="uk-width-expand@m">
                        <div className="uk-card uk-card-body uk-text-left">
                            
                            <div className="uk-child-width-expand@s uk-text-left" data-uk-grid>
                                <div className='uk-width-1-6@m'>
                                    <div className="uk-card">
                                        <h4>01.</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card">
                                        <h4>Хотите построить новые отношения</h4>
                                        <p>Узнайте, что является залогом здоровых и доверительных отношений и почему предыдушие отношения не складывались.</p>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            
                            <div className="uk-child-width-expand@s uk-text-left" data-uk-grid>
                                <div className='uk-width-1-6@m'>
                                    <div className="uk-card">
                                        <h4>02.</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card">
                                        <h4>Хотите построить новые отношения</h4>
                                        <p>Узнайте, что является залогом здоровых и доверительных отношений и почему предыдушие отношения не складывались.</p>
                                    </div>
                                </div>
                            </div>

                            <hr />
                            
                            <div className="uk-child-width-expand@s uk-text-left" data-uk-grid>
                                <div className='uk-width-1-6@m'>
                                    <div className="uk-card">
                                        <h4>03.</h4>
                                    </div>
                                </div>
                                <div>
                                    <div className="uk-card">
                                        <h4>Хотите построить новые отношения</h4>
                                        <p>Узнайте, что является залогом здоровых и доверительных отношений и почему предыдушие отношения не складывались.</p>
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