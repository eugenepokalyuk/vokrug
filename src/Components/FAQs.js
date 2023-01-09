import React from 'react';
const size760 = {
    "maxWidth":"760px"
}
const size520 = {
    "maxWidth":"520px"
}
const maxSize48 = {
    "maxWidth":"48px",
    "marginRight":"10px"
}
const width80 = {
    maxWidth: "85%"
}
const width50 = {
    maxWidth: "50%"
}
function Block() {
    return(
        <div>
            <div className='uk-container uk-container-vokrug-transparent uk-margin-large-top uk-padding uk-visible@l'>
                <div>
                    <div className='uk-align-center uk-dark' style={size760}>
                        <h1 className='uk-text-center vokrug-h2-text uk-margin-large-bottom'>Ответы на вопросы</h1>
                        <hr />
                        <ul data-uk-accordion>
                            <li className="uk-open">
                                <a className="uk-accordion-title vokrug-accordion-header" href="#1">Чем отличается групповая терапия от индивидуальной?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Обратимся к себе, чтобы лучше понять самого себя, свои потребности, желания и границы.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#2">Сколько стоит и сколько длится встреча?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Что если мне не понравится?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Могу ли я поменять группу?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Насколько группы конфиденциальны?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                            <li>
                                <a className="uk-accordion-title vokrug-accordion-header" href="#3">Можно ли совмещать групповые встречи<br /> с личной терапией?</a>
                                <div className="uk-accordion-content uk-margin-remove-top" style={size520}>
                                    <p className='vokrug-accordion-text'>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                                </div>
                                <hr />
                            </li>
                        </ul>

                        <p>Остались вопросы? Напишите нам в любом<br />мессенджере — мы ответим в течение 5 минут.</p>
                        
                        <a href="#1" className='vokrug-icons-hover'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={maxSize48}>
                                <rect width="48" height="48" rx="12" fill="url(#paint0_linear_1591_219)"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.478 22.2787L32.056 14.0757C32.8392 13.7635 33.6487 14.4647 33.4767 15.3064L29.9633 32.4889C29.7985 33.2952 28.874 33.6573 28.2248 33.1699L22.9201 29.1868L20.2165 32.0106C19.7421 32.5062 18.9224 32.3056 18.7185 31.644L16.767 25.3096L11.5379 23.7301C10.8518 23.5228 10.8114 22.5444 11.478 22.2787ZM19.919 26.535L29.4773 17.8886C29.7062 17.6817 29.4404 17.3161 29.1808 17.4809L17.8934 24.6421C17.6947 24.7682 17.6042 25.0157 17.6736 25.2442L19.1877 30.2349C19.2195 30.3398 19.3688 30.3254 19.3809 30.2162L19.7489 26.8698C19.763 26.7405 19.8237 26.6212 19.919 26.535Z" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear_1591_219" x1="24" y1="0" x2="24" y2="102.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#51A3DB"/>
                                <stop offset="1" stopColor="#3780B7"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </a>

                        <a href="#2" className='vokrug-icons-hover'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={maxSize48}>
                                <rect width="48" height="48" rx="12" fill="#2D79F6"/>
                                <path d="M25.2828 33C15.4253 33 9.8048 26.2554 9.57422 15.0144H14.5318C14.6903 23.2578 18.322 26.7454 21.2043 27.466V15.0144H25.8592V22.1193C28.6983 21.8167 31.6959 18.5741 32.7047 15H37.3452C36.9668 16.8501 36.211 18.6023 35.1249 20.1471C34.0388 21.6919 32.6458 22.9962 31.033 23.9784C32.8329 24.8742 34.4224 26.1415 35.6968 27.6965C36.9711 29.2516 37.9014 31.0592 38.4261 33H33.31C32.2147 29.5845 29.4765 26.9327 25.8592 26.5725V33H25.2972H25.2828Z" fill="white"/>
                            </svg>
                        </a>

                        <a href="#3" className='vokrug-icons-hover'>
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={maxSize48}>
                                <rect width="48" height="48" rx="12" fill="#33765F"/>
                                <g clipPath="url(#clip0_1634_37)">
                                <path d="M11.2999 36.8437L13.175 31.2189L13.392 30.5678L13.0413 29.9779C11.7785 27.8539 11.0517 25.3767 11.0517 22.7241C11.0517 14.8684 17.4202 8.49994 25.2759 8.49994C33.1316 8.49994 39.5 14.8684 39.5 22.7241C39.5 30.5798 33.1316 36.9482 25.2759 36.9482C22.8845 36.9482 20.6353 36.356 18.6589 35.3152L18.1426 35.0433L17.5783 35.1918L11.2999 36.8437Z" stroke="white" strokeWidth="3"/>
                                <path d="M32.9712 26.6378C32.419 25.5944 30.3829 24.4011 30.3829 24.4011C29.9222 24.1385 29.3663 24.1091 29.1037 24.5773C29.1037 24.5773 28.442 25.3707 28.2738 25.4849C27.5051 26.0055 26.7931 25.9854 26.0744 25.2667L24.4041 23.5964L22.7339 21.9261C22.0152 21.2074 21.995 20.4954 22.5157 19.7268C22.6298 19.5585 23.4232 18.8969 23.4232 18.8969C23.8914 18.6338 23.8621 18.0783 23.5994 17.6176C23.5994 17.6176 22.4062 15.5815 21.3627 15.0294C20.9188 14.7944 20.3738 14.8766 20.0189 15.2316L19.2813 15.9692C16.9414 18.3091 18.0935 20.9507 20.4334 23.2905L22.5719 25.4291L24.7104 27.5676C27.0503 29.9075 29.6919 31.0596 32.0318 28.7197L32.7694 27.9821C33.1243 27.6263 33.2061 27.0813 32.9712 26.6378Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1634_37">
                                <rect width="32" height="32" fill="white" transform="translate(9 6.99988)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>

                    </div>
                </div>
            </div>

            <div className='uk-padding-small uk-margin-large-top uk-hidden@l'>
                <div className='uk-text-left'>
                    <h1 className='mobile-h1'>Ответы на вопросы</h1>
                    <hr />
                    <ul data-uk-accordion>
                        <li className="uk-open">
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#1">Чем отличается групповая терапия от индивидуальной?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-mobile-p-0 uk-margin-small-top' style={width80}>Обратимся к себе, чтобы лучше понять самого себя, свои потребности, желания и границы.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#2">Сколько стоит и сколько длится встреча?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-mobile-p-0 uk-margin-small-top' style={width80}>Ut enim ad minim veniam, quis nostrud exercitationullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor reprehenderit.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#3">Что если мне не понравится?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-mobile-p-0 uk-margin-small-top' style={width80}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#4">Могу ли я поменять группу?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-mobile-p-0 uk-margin-small-top' style={width80}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#5">Насколько группы конфиденциальны?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-mobile-p-0 uk-margin-small-top' style={width80}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <li>
                            <a className="uk-accordion-title vokrug-mobile-h3-1" href="#6">Можно ли совмещать<br />групповые встречи<br /> с личной терапией?</a>
                            <div className="uk-accordion-content uk-margin-remove-top">
                                <p className='vokrug-mobile-p-0 uk-margin-small-top' style={width80}>Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat proident.</p>
                            </div>
                            <hr />
                        </li>
                        <p>Остались вопросы? Напишите<br />нам в любом мессенджере —<br />мы ответим в течение 5 минут.</p>
                        <a href="#1">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={maxSize48}>
                                <rect width="48" height="48" rx="12" fill="url(#paint0_linear_1591_219)"/>
                                <path fillRule="evenodd" clipRule="evenodd" d="M11.478 22.2787L32.056 14.0757C32.8392 13.7635 33.6487 14.4647 33.4767 15.3064L29.9633 32.4889C29.7985 33.2952 28.874 33.6573 28.2248 33.1699L22.9201 29.1868L20.2165 32.0106C19.7421 32.5062 18.9224 32.3056 18.7185 31.644L16.767 25.3096L11.5379 23.7301C10.8518 23.5228 10.8114 22.5444 11.478 22.2787ZM19.919 26.535L29.4773 17.8886C29.7062 17.6817 29.4404 17.3161 29.1808 17.4809L17.8934 24.6421C17.6947 24.7682 17.6042 25.0157 17.6736 25.2442L19.1877 30.2349C19.2195 30.3398 19.3688 30.3254 19.3809 30.2162L19.7489 26.8698C19.763 26.7405 19.8237 26.6212 19.919 26.535Z" fill="white"/>
                                <defs>
                                <linearGradient id="paint0_linear_1591_219" x1="24" y1="0" x2="24" y2="102.5" gradientUnits="userSpaceOnUse">
                                <stop stopColor="#51A3DB"/>
                                <stop offset="1" stopColor="#3780B7"/>
                                </linearGradient>
                                </defs>
                            </svg>
                        </a>

                        <a href="#2">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={maxSize48}>
                                <rect width="48" height="48" rx="12" fill="#2D79F6"/>
                                <path d="M25.2828 33C15.4253 33 9.8048 26.2554 9.57422 15.0144H14.5318C14.6903 23.2578 18.322 26.7454 21.2043 27.466V15.0144H25.8592V22.1193C28.6983 21.8167 31.6959 18.5741 32.7047 15H37.3452C36.9668 16.8501 36.211 18.6023 35.1249 20.1471C34.0388 21.6919 32.6458 22.9962 31.033 23.9784C32.8329 24.8742 34.4224 26.1415 35.6968 27.6965C36.9711 29.2516 37.9014 31.0592 38.4261 33H33.31C32.2147 29.5845 29.4765 26.9327 25.8592 26.5725V33H25.2972H25.2828Z" fill="white"/>
                            </svg>
                        </a>

                        <a href="#3">
                            <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" style={maxSize48}>
                                <rect width="48" height="48" rx="12" fill="#33765F"/>
                                <g clipPath="url(#clip0_1634_37)">
                                <path d="M11.2999 36.8437L13.175 31.2189L13.392 30.5678L13.0413 29.9779C11.7785 27.8539 11.0517 25.3767 11.0517 22.7241C11.0517 14.8684 17.4202 8.49994 25.2759 8.49994C33.1316 8.49994 39.5 14.8684 39.5 22.7241C39.5 30.5798 33.1316 36.9482 25.2759 36.9482C22.8845 36.9482 20.6353 36.356 18.6589 35.3152L18.1426 35.0433L17.5783 35.1918L11.2999 36.8437Z" stroke="white" strokeWidth="3"/>
                                <path d="M32.9712 26.6378C32.419 25.5944 30.3829 24.4011 30.3829 24.4011C29.9222 24.1385 29.3663 24.1091 29.1037 24.5773C29.1037 24.5773 28.442 25.3707 28.2738 25.4849C27.5051 26.0055 26.7931 25.9854 26.0744 25.2667L24.4041 23.5964L22.7339 21.9261C22.0152 21.2074 21.995 20.4954 22.5157 19.7268C22.6298 19.5585 23.4232 18.8969 23.4232 18.8969C23.8914 18.6338 23.8621 18.0783 23.5994 17.6176C23.5994 17.6176 22.4062 15.5815 21.3627 15.0294C20.9188 14.7944 20.3738 14.8766 20.0189 15.2316L19.2813 15.9692C16.9414 18.3091 18.0935 20.9507 20.4334 23.2905L22.5719 25.4291L24.7104 27.5676C27.0503 29.9075 29.6919 31.0596 32.0318 28.7197L32.7694 27.9821C33.1243 27.6263 33.2061 27.0813 32.9712 26.6378Z" fill="white"/>
                                </g>
                                <defs>
                                <clipPath id="clip0_1634_37">
                                <rect width="32" height="32" fill="white" transform="translate(9 6.99988)"/>
                                </clipPath>
                                </defs>
                            </svg>
                        </a>
                    </ul>
                </div>
            </div>
        </div>
        );
}

export default Block;