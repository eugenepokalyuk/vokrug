import React from 'react';

import userOne from "../Images/userOne.png"
import userTwo from "../Images/userTwo.png"
import userThree from "../Images/userThree.png"
// import checkImg from "../Images/bullet.svg"

// list-style-image: url(./Images/bullet.svg)
// let option = {
//     "list-style-image": url({checkImg})
// }
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
    "padding": "20px",
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
        </div>
        );
}

export default Block;