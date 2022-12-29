import React from 'react';

function Block() {
    return(
        <div className='uk-container uk-container-vokrug-transparent uk-margin-large-top uk-padding'>
            <div>
                <div className='uk-align-center uk-width-1-2@s uk-dark'>
                    <h1 className='uk-text-center vokrug-h2-text uk-margin-large-bottom'>О чем говорим в группе</h1>
                    <hr />
                    <ul data-uk-accordion>
                        <li className="uk-open">
                            <a className="uk-accordion-title vokrug-accordion-header" href="#1">Любовь к себе</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-accordion-text'>Обратимся к себе, чтобы лучше понять самого себя, свои потребности, желания и границы.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-accordion-header" href="#2">Женская и мужская психология</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-accordion-text'>Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-accordion-header" href="#3">Типы привязанности</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-accordion-header" href="#3">Что мешает гармоничным отношениям?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-accordion-header" href="#3">Кризисы в паре</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-accordion-header" href="#3">Как на практике реализовать теорию?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-accordion-header" href="#3">Дейтинг</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        );
}

export default Block;