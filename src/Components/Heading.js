import React from 'react';
const a = {
    "scale": "1",
}
function Block() {
    return(
        <div>            
            <div className='uk-container uk-margin-large-top uk-padding uk-visible@l'>
                <div className="uk-child-width-1-1@s uk-grid-collapse uk-text-center" data-uk-grid>
                    <div>
                        <div className="uk-tile uk-dark">
                            <div className="uk-inline">
                                <svg className='vokrug-scale-1-2' width="1262" height="552" viewBox="0 0 1262 552" fill="none" xmlns="http://www.w3.org/2000/svg">
                                    <path d="M561.32 4.94766C311.77 31.2098 -150.872 156.25 51.7746 388.164C297.625 669.522 1271.65 563.225 1260.86 230.714C1249.85 -108.946 556.761 9.4575 405.232 82.665" stroke="#FFDE2F" strokeWidth="2" strokeLinecap="round"/>
                                </svg>
                                <div className="uk-position-cover uk-overlay uk-flex uk-flex-center uk-flex-middle">
                                    <h4 className="vokrug-heading">Подбираем группы исходя из личностных <br />качеств участников, схожего запроса, опыта <br />и интересов. Если есть особые пожелания <br />к составу группы — сообщите менеджеру <br />и мы обязательно учтем их</h4>
                                </div>
                            </div>
                                
                        </div>
                    </div>
                </div>
            </div>
            <div className='uk-container uk-hidden@l vokrug-margin-top-large'>
                {/* <svg className='uk-position-absolute' width="320" height="435" viewBox="0 0 1262 552" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path d="M101.006 1.77127C28.4735 -1.60235 -98.7471 51.1995 -15.8106 249.813C84.8076 490.77 367.549 501.004 332.746 242.793C297.194 -20.9687 100.063 4.82672 61.4558 47.0678" stroke="#FFDE2F" strokeWidth="10" strokeLinecap="round"/>
                </svg> */}

                <h1>Подбираем группы<br />исходя из личностных качеств участников, схожего запроса, опыта<br />и интересов. Если есть особые пожелания<br />к составу группы — сообщите менеджеру<br />и мы обязательно <br />учтем их</h1>
            </div>
        </div>
        );
}

export default Block;