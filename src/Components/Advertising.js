import React, { useState } from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug uk-margin-large-top uk-padding vokrug-bg-green'>
            <div>
                <div data-uk-grid>
                    <div className='uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-margin-top uk-align-center uk-text-center'>
                        <h1 className='vokrug-adv-header'>Поможем вам позаботится <br />о себе и своих отношениях</h1>
                        <a className="uk-button dark vokrug-button vokrug-margin-top-40" href="#a">Записаться на бесплатную встречу</a>
                        <p className='uk-text-meta uk-text-center vokrug-adv-meta vokrug-margin-top-24'>На встрече психолог расскажет как проходят<br /> групповые сессии и уточнит ваш запрос.</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Block;