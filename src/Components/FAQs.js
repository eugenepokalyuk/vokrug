import React, { useState } from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug-transparent uk-margin-large-top uk-padding'>
            <div>
                <div className='uk-align-center uk-width-1-2@s uk-dark'>
                    <h1 className='uk-text-center'>Ответы на вопросы</h1>
                    <hr />
                    <ul data-uk-accordion>
                        <li className="uk-open">
                            <a className="uk-accordion-title" href="#1">Чем отличается групповая терапия от индивидуальной?</a>
                            <div className="uk-accordion-content">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="#2">Сколько стоит и сколько длится встреча?</a>
                            <div className="uk-accordion-content">
                                <p>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="#3">Что если мне не понравится?</a>
                            <div className="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="#3">Могу ли я поменять группу?</a>
                            <div className="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="#3">Насколько группы конфиденциальны?</a>
                            <div className="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title" href="#3">Можно ли совмещать групповые встречи с личной терапией?</a>
                            <div className="uk-accordion-content">
                                <p>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>

                        <p className='uk-text-meta uk-margin-remove'>Остались вопросы? Напишите нам в любом</p>
                        <p className='uk-text-meta uk-margin-remove'>мессенджере - мы ответим в течение 5 минут.</p>

                        <a href="#1" className="uk-icon-button uk-margin-small-right">
                            <img src="https://cdn-icons-png.flaticon.com/512/2582/2582606.png" alt="telegram icon" width="20" />
                        </a>
                        <a href="#1" className="uk-icon-button  uk-margin-small-right">
                            <img src="https://cdn-icons-png.flaticon.com/512/25/25684.png" alt="vk icon" width="20" />
                        </a>
                        <a href="#1" className="uk-icon-button">
                            <img src="https://seeklogo.com/images/W/whatsapp-logo-112413FAA7-seeklogo.com.png" alt="whatsapp icon" width="20" />
                        </a>

                    </ul>
                </div>
            </div>
        </div>
        );
}

export default Block;