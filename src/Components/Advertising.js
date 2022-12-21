import React, { useState } from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug uk-margin-large-top uk-padding vokrug-bg-green'>
            <div>
                <div data-uk-grid>
                    <div className='uk-flex uk-flex-middle uk-flex-center uk-flex-column uk-width-1-2 uk-margin-top uk-align-center uk-text-center'>
                        <h1 className='vokrug-adv-header'>Поможем сделать ваши отношения счастливее</h1>
                        <a className="uk-button dark vokrug-button" href="#a">Записаться на бесплатную встречу</a>
                        <p className='uk-text-meta uk-text-center vokrug-adv-meta'>На встрече психолог расскажет как проходят групповые сессии и уточнит ваш запрос.</p>
                    </div>
                </div>
            </div>
        </div>
        );
}

export default Block;