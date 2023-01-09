import React from 'react';
const maxWidth = {
    "maxWidth": "395px",
    "padding":"20px 26px"
}
function Block() {
    return(
        <div>
            <div className='uk-container uk-container-vokrug uk-margin-large-top uk-padding vokrug-bg-green uk-visible@l'>
                <div>
                    <div data-uk-grid>
                        <div className='uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-margin-top uk-align-center uk-text-center'>
                            <h1 className='vokrug-adv-header'>Поможем вам позаботится <br />о себе и своих отношениях</h1>
                            <a className="dark vokrug-button" style={maxWidth} data-uk-toggle="target: #modal-example">Записаться на бесплатную встречу</a>
                            <p className='uk-text-meta uk-text-center vokrug-adv-meta vokrug-margin-top-24'>На встрече психолог расскажет как проходят<br />групповые сессии и уточнит ваш запрос.</p>
                        </div>
                    </div>
                </div>
            </div>

            <div className='green uk-margin-top vokrug-mobile-container uk-hidden@l'>
                <h1 className='mobile-h1'>Поможем вам<br />позаботится о себе<br />и своих отношениях</h1>
                <a className="dark vokrug-button uk-align-center uk-text-center uk-margin-small-bottom" href="button" data-uk-toggle="target: #modal-example">Записаться на бесплатную встречу</a>
                <p className='uk-text-center uk-margin-remove-top uk-margin-remove-bottom'>На встрече психолог расскажет как проходят<br />групповые сессии и уточнит ваш запрос</p>
            </div>
        </div>
        );
}

export default Block;