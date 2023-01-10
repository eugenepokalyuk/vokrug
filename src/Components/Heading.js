import React from 'react';
function Block() {
    return (
        <div>
            <div className='uk-container uk-margin-large-top uk-padding uk-visible@l'>
                <div className="uk-child-width-1-1@s uk-grid-collapse uk-text-center" data-uk-grid>
                    <div>
                        <div className="uk-tile uk-dark">
                            <div className="uk-inline">
                                <svg className='vokrug-scale-1-2' width="1262" height="552" viewBox="0 0 1262 552" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M561.32 4.94766C311.77 31.2098 -150.872 156.25 51.7746 388.164C297.625 669.522 1271.65 563.225 1260.86 230.714C1249.85 -108.946 556.761 9.4575 405.232 82.665" stroke="#FFDE2F" strokeWidth="2" strokeLinecap="round" />
                                </svg>
                                <div className="uk-position-cover uk-overlay uk-flex uk-flex-center uk-flex-middle">
                                    <h4 className="vokrug-heading">Подбираем группы исходя из личностных <br />качеств участников, схожего запроса, опыта <br />и интересов. Если есть особые пожелания <br />к составу группы — сообщите менеджеру <br />и мы обязательно учтем их</h4>
                                </div>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='vokrug-mobile-container uk-margin-xlarge-top uk-margin-xlarge-bottom uk-hidden@l'>
                <h1 className='mobile-h1'>Подбираем группы<br />исходя из личностных<br />качеств участников,<br />схожего запроса, опыта<br />и интересов. Если есть<br />особые пожелания<br />к составу группы —<br />сообщите менеджеру<br />и мы обязательно<br />учтем их</h1>
            </div>
        </div>
    );
}

export default Block;