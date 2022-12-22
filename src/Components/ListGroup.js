import React from 'react';

import userOne from "../Images/userOne.png"
import userTwo from "../Images/userTwo.png"
import userThree from "../Images/userThree.png"
// import checkImg from "../Images/bullet.svg"

// list-style-image: url(./Images/bullet.svg)
// let option = {
//     "list-style-image": url({checkImg})
// }

function Block() {
    return(
        <div className='uk-container uk-margin-large-top uk-padding'>
            <div className="uk-child-width-1-1@s uk-grid-collapse uk-text-center" data-uk-grid>
                <div>
                    <div className="uk-tile uk-dark">
                        <h4 className="uk-heading-small vokrug-teachers-header">Кто будет вести группу</h4>
                        <h4 className="uk-text-meta uk-text-large vokrug-teachers-text">Ведущий создаст доверительные отношения среди участников группы, что поможет эффективно взаимодействовать друг с другом.</h4>
                    </div>
                </div>
                
                <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
                    <div>
                        <div className="uk-card uk-card-default vokrug-border-rounded vokrug-teachers-container">
                            <img src={userOne} alt="" className='vokrug-border-rounded vokrug-teachers-container'/>
                            <h3 className="uk-card-title">Снежана</h3>
                            
                            <ul className="uk-list uk-text-left uk-list-bullet">
                                <li>9 лет опыта.</li>
                                <li>Психолог, психоаналитик, сертифицированный специалист Европейской Конфедерации Психоаналитической Психотерапии.</li>
                                <li>Более 3000 индивидуальных и групповых встреч.</li>
                                <li>Сертификат общественной аккредитации об успешном завершении курса Основы группового анализа.</li>
                            </ul>

                        </div>
                    </div>

                    <div>
                        <div className="uk-card uk-card-default vokrug-border-rounded vokrug-teachers-container">
                            <img src={userTwo} alt="" className='vokrug-border-rounded vokrug-teachers-container'/>
                            <h3 className="uk-card-title">Людмила</h3>
                            
                            <ul className="uk-list uk-text-left uk-list-bullet">
                                <li>8 лет опыта.</li>
                                <li>Практикующий психолог.</li>
                                <li>Диплом Санкт-Петербургского Государственного Университета, факультет Психологии  и Австралийского Института  Клинической и Образовательной Арт-терапии.</li>
                                <li>Сертификат общественной аккредитации об успешном завершении курса Основы  группового анализа.</li>
                            </ul>

                        </div>
                    </div>
                    <div>
                        <div className="uk-card uk-card-default vokrug-border-rounded vokrug-teachers-container">
                            <img src={userThree} alt="" className='vokrug-border-rounded vokrug-teachers-container'/>
                            <h3 className="uk-card-title">Пётр</h3>
                            
                            <ul className="uk-list uk-text-left uk-list-bullet">
                                <li>8 лет опыта.</li>
                                <li>Кризисный психолог, немедицинский психотерапевт гуманистического направления.</li>
                                <li>Сертифицированный групповой терапевт и профессиональный медиатор.</li>
                                <li>Более 2500 часов работы с клиентами в индивидуальном и групповом формате, более 1000 часов супервизии и личной терапии.</li>
                            </ul>

                        </div>
                    </div>
            
                </div>

            </div>
        </div>
        );
}

export default Block;