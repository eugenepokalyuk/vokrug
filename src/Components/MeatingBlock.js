import React from 'react';

function Block() {
    return(
        <div className='uk-container uk-margin-large-top vokrug-width-90'>
            <h1 className='uk-text-center vokrug-h2-text uk-margin-large-bottom'>Как проходят встречи</h1>
            
            <div className="uk-child-width-1-2@s uk-grid-collapse uk-text-center" data-uk-grid>
                <div className="uk-child-width-1-2@s uk-grid-match uk-container-vokrug" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-secondary uk-card-body">
                            <h3 className="uk-card-title">Приветствие</h3>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-secondary uk-card-hover uk-card-body">
                            <h3 className="uk-card-title">01.</h3>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-secondary uk-card-hover uk-card-body">
                            <p>Участники рассказывают как прошла их неделя и что чувствуют на момент начала встречи.</p>
                        </div>
                    </div>
                </div>

                <div className="uk-child-width-1-2@s uk-grid-match uk-container-vokrug" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-secondary uk-card-body">
                            <h3 className="uk-card-title">Приветствие</h3>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-secondary uk-card-hover uk-card-body">
                            <h3 className="uk-card-title">01.</h3>
                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-secondary uk-card-hover uk-card-body">
                            <p>Участники рассказывают как прошла их неделя и что чувствуют на момент начала встречи.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Block;