import React from 'react';

function Block() {
    return(
        <div className='uk-container uk-margin-large-top'>
            <h1 className='uk-text-center vokrug-h2-text uk-margin-large-bottom'>Как проходят встречи</h1>

            <div className="uk-child-width-1-2@s uk-grid-collapse uk-text-center" data-uk-grid>
                <div>
                    <div className="uk-tile uk-tile-default vokrug-border-radius vokrug-height-420">
                        <p className="uk-h4">Muted</p>
                    </div>
                </div>
                <div>
                    <div className="uk-tile uk-tile-muted vokrug-border-radius vokrug-height-420">
                        <p className="uk-h4">Muted</p>
                    </div>
                </div>
                <div>
                    <div className="uk-tile uk-tile-primary vokrug-border-radius vokrug-height-420">
                        <p className="uk-h4">Primary</p>
                    </div>
                </div>
                <div>
                    <div className="uk-tile uk-tile-secondary vokrug-border-radius vokrug-height-420">
                        <p className="uk-h4">Secondary</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Block;