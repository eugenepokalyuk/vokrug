import React from 'react';
const size760 = {
    "maxWidth":"760px"
}
const size520 = {
    "maxWidth":"520px"
}
function Block() {
    return(
        <div>            
            <div className='uk-container uk-container-vokrug-transparent uk-margin-large-top uk-padding uk-visible@l'>
                <div>
                    <div className='uk-align-center uk-dark' style={size760}>
                        <h1 className='uk-text-center vokrug-h2-text uk-margin-large-bottom'>О чем говорим в группе</h1>
                        <hr />
                        <ul data-uk-accordion>
                            <li className="uk-open">
                                <a className="uk-accordion-title vokrug-accordion-header" href="#1">Любовь к себе</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Обратимся к себе, чтобы лучше понять самого себя, свои потребности, желания и границы.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#2">Женская и мужская психология</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Типы привязанности</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Что мешает гармоничным отношениям?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Кризисы в паре</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Как на практике реализовать теорию?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Дейтинг</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                        </ul>
                    </div>
                </div>
            </div>

            <div className='uk-padding-small uk-margin-large-top uk-hidden@l'>
                <div className='uk-text-left'>
                    <h1 className='mobile-h1'>О чём говорим<br />в группе</h1>
                    <hr />
                    <ul data-uk-accordion>
                        <li className="uk-open">
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#1">Любовь к себе</a>
                            <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                <p className='vokrug-mobile-p-0 uk-margin-small-top'>Обратимся к себе, чтобы лучше понять самого себя, свои потребности, желания и границы.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#2">Женская и мужская психология</a>
                            <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                <p className='vokrug-mobile-p-0 uk-margin-small-top'>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#3">Типы привязанности</a>
                            <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                <p className='vokrug-mobile-p-0 uk-margin-small-top'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#3">Что мешает гармоничным отношениям?</a>
                            <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                <p className='vokrug-mobile-p-0 uk-margin-small-top'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#3">Кризисы в паре</a>
                            <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                <p className='vokrug-mobile-p-0 uk-margin-small-top'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#3">Как на практике реализовать теорию?</a>
                            <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                <p className='vokrug-mobile-p-0 uk-margin-small-top'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#3">Дейтинг</a>
                            <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                <p className='vokrug-mobile-p-0 uk-margin-small-top'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
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