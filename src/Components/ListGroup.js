import React from 'react';

import userOne from "../Images/userOne.png"
import userOneMobile from "../Images/userOne-mobile.png"
import userTwoMobile from "../Images/userTwo-mobile.png"
import userTwo from "../Images/userTwo.png"
import userThree from "../Images/userThree.png"

const width100 = {
    "width":"368px !important"
}
const width100perc = {
    "width":"100%",
}
const marginBottom48 = {
    "marginBottom":"48px"
}
const padding20 = {
    "padding": "0px 20px",
}

const style = {
    background: "#fff",
    width: "100%",
    height: "100%",
    color: "#000",
    borderRadius: "16px"
}
function Block() {
    return(
        <div>
            <div className='uk-visible@l'>
                <div className='uk-text-center' style={marginBottom48}>
                    <h1 className='vokrug-h2-text'>Кто будет вести группу</h1>
                    <p className='vokrug-accordion-text'>Ведущий создаст доверительные отношения среди участников группы,<br />что поможет эффективно взаимодействовать друг с другом</p>
                </div>
                <div className="uk-child-width-1-3@m" data-uk-grid>
                    <div style={width100}>
                        <div className="vokrug-card-default vokrug-borderRadius-32">
                            <div className="uk-card-media-top">
                                <img src={userOne} style={width100perc} alt="" />
                            </div>
                            
                            <div>
                                <h2 className='uk-text-center uk-margin-medium-top uk-margin-remove-bottom'>Снежана</h2>
                                <ul className="uk-list vokrug-type-disc" style={padding20}>
                                    <hr />
                                    <li>9 лет опыта.</li>
                                    <hr />
                                    <li>Психолог, психоаналитик, сертифицированный специалист Европейской Конфедерации Психоаналитической Психотерапии.</li>
                                    <hr />
                                    <li>Более 3000 индивидуальных и групповых встреч.</li>
                                    <hr />
                                    <li>Сертификат общественной аккредитации об успешном завершении курса Основы группового анализа.</li>
                                </ul>
                            </div>

                        </div>
                    </div>


                    <div style={width100}>
                        <div className="vokrug-card-default vokrug-borderRadius-32">
                            <div className="uk-card-media-top">
                                <img src={userTwo} style={width100perc} alt="" />
                            </div>
                            
                            <div>
                                <h2 className='uk-text-center uk-margin-medium-top uk-margin-remove-bottom'>Людмила</h2>
                                <ul className="uk-list vokrug-type-disc" style={padding20}>
                                    <hr />
                                    <li>8 лет опыта.</li>
                                    <hr />
                                    <li>Практикующий психолог.</li>
                                    <hr />
                                    <li>Диплом Санкт-Петербургского<br />Государственного Университета,<br />факультет Психологии <br />и Австралийского Института <br />Клинической и Образовательной<br />Арт-терапии.</li>
                                    <hr />
                                    <li>Сертификат общественной<br />аккредитации об успешном завершении курса Основы <br />группового анализа.</li>
                                </ul>
                            </div>
                        </div>
                    </div>

                    <div style={width100}>
                        <div className="vokrug-card-default vokrug-borderRadius-32">
                            <div className="uk-card-media-top">
                                <img src={userThree} style={width100perc} alt="" />
                            </div>
                            
                            <div>
                                <h2 className='uk-text-center uk-margin-medium-top uk-margin-remove-bottom'>Пётр</h2>
                                <ul className="uk-list vokrug-type-disc" style={padding20}>
                                    <hr />
                                    <li>8 лет опыта.</li>
                                    <hr />
                                    <li>Кризисный психолог,<br />немедицинский психотерапевт<br />гуманистического направления.</li>
                                    <hr />
                                    <li>Сертифицированный групповой<br />терапевт и профессиональный<br />медиатор.</li>
                                    <hr />
                                    <li>Более 2500 часов работы<br />с клиентами в индивидуальном<br />и групповом формате, более<br />1000 часов супервизии<br />и личной терапии.</li>
                                </ul>
                            </div>

                        </div>
                    </div>
                </div>
            </div>

            <div className='vokrug-mobile-container uk-margin-large-top uk-hidden@l'>
                <h1 className='mobile-h1'>Наши эксперты</h1>
                <p>Ведущий создаст доверительные отношения среди участников группы, что поможет эффективно взаимодействовать друг с другом.</p>
                <div className="uk-position-relative uk-visible-toggle uk-light" tabIndex="-1" data-uk-slider="center: true">
                    <ul className="uk-slider-items uk-grid" data-uk-height-match="target: .uk-panel">
                        <li className="uk-width-3-4 uk-height-1-1">
                            <div className="uk-card-media-top vokrug-mobile-image">
                                <img src={userOneMobile} style={width100perc} alt="avatar" />
                            </div>
                            <div className="uk-panel vokrug-list-block vokrug-margin-xlarge-top" style={style}>
                                <ul className="uk-list vokrug-type-disc uk-padding uk-padding-remove-top">
                                    <h2 className='uk-text-center vokrug-margin-large-top uk-margin-remove-bottom uk-padding-remove-bottom'>Снежана</h2>
                                    <hr />
                                    <li>9 лет опыта.</li>
                                    <hr />
                                    <li>Психолог, психоаналитик, сертифицированный специалист Европейской Конфедерации Психоаналитической Психотерапии.</li>
                                    <hr />
                                    <li>Более 3000 индивидуальных и групповых встреч.</li>
                                    <hr />
                                    <li>Сертификат общественной аккредитации об успешном завершении курса Основы группового анализа.</li>
                                </ul>
                            </div>
                        </li>

                        <li className="uk-width-3-4 uk-height-1-1">
                            <div className="uk-card-media-top vokrug-mobile-image">
                                <img src={userTwoMobile} style={width100perc} alt="avatar" />
                            </div>
                            <div className="uk-panel vokrug-list-block vokrug-margin-xlarge-top" style={style}>
                                <ul className="uk-list vokrug-type-disc uk-padding uk-padding-remove-top">
                                <h2 className='uk-text-center vokrug-margin-large-top uk-margin-remove-bottom uk-padding-remove-bottom'>Людмила</h2>
                                    <hr />
                                    <li>8 лет опыта.</li>
                                    <hr />
                                    <li>Практикующий психолог.</li>
                                    <hr />
                                    <li>Диплом Санкт-Петербургского<br />Государственного Университета,<br />факультет Психологии <br />и Австралийского Института <br />Клинической и Образовательной<br />Арт-терапии.</li>
                                    <hr />
                                    <li>Сертификат общественной<br />аккредитации об успешном завершении курса Основы <br />группового анализа.</li>
                                </ul>
                            </div>
                        </li>

                        <li className="uk-width-3-4 uk-height-1-1">
                            <div className="uk-card-media-top vokrug-mobile-image">
                                <img src={userThree} style={width100perc} alt="avatar" />
                            </div>
                            <div className="uk-panel vokrug-list-block vokrug-margin-xlarge-top" style={style}>
                                <ul className="uk-list vokrug-type-disc uk-padding uk-padding-remove-top">
                                    <h2 className='uk-text-center vokrug-margin-large-top uk-margin-remove-bottom uk-padding-remove-bottom'>Пётр</h2>
                                    <hr />
                                    <li>8 лет опыта.</li>
                                    <hr />
                                    <li>Кризисный психолог,<br />немедицинский психотерапевт<br />гуманистического направления.</li>
                                    <hr />
                                    <li>Сертифицированный групповой<br />терапевт и профессиональный<br />медиатор.</li>
                                    <hr />
                                    <li>Более 2500 часов работы<br />с клиентами в индивидуальном<br />и групповом формате, более<br />1000 часов супервизии<br />и личной терапии.</li>
                                </ul>
                            </div>
                        </li>
                    </ul>

                    <a className="uk-position-center-left uk-position-small uk-hidden-hover" href="#1" data-uk-slidenav-previous uk-slider-item="previous"></a>
                    <a className="uk-position-center-right uk-position-small uk-hidden-hover" href="#2" data-uk-slidenav-next uk-slider-item="next"></a>

                </div>
            </div>
        </div>
        );
}

export default Block;