import React from 'react';

import userOne from "../Images/userOne.png"
import userTwo from "../Images/userTwo.png"
import userThree from "../Images/userThree.png"
import checkImg from "../Images/checkImage.png"

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
                            
                            <ul className="uk-list uk-list-divider uk-padding-small uk-text-left uk-padding-small vokrug-teachers-meta">
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />9 лет опыта.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Психолог, психоаналитик, сертифицированный специалист Европейской Конфедерации Психоаналитической Психотерапии.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Более 3000 индивидуальныхи групповых встреч.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Сертификат общественной аккредитации об успешном завершении курса Основы группового анализа.</li>
                            </ul>

                        </div>
                    </div>
                    
                    <div>
                        <div className="uk-card uk-card-default vokrug-border-rounded vokrug-teachers-container">
                            <img src={userTwo} alt="" className='vokrug-border-rounded vokrug-teachers-container'/>
                            <h3 className="uk-card-title">Людмила</h3>
                            <ul className="uk-list uk-list-divider uk-padding-small uk-text-left uk-padding-small vokrug-teachers-meta">
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />8 лет опыта.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Практикующий психолог.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Диплом Санкт-ПетербургскогоГосударственного Университета, факультет Психологии и Австралийского Института Клинической и Образовательной Арт-терапии.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Сертификат общественнойаккредитации об успешном завершении курса Основы группового анализа.</li>
                            </ul>

                        </div>
                    </div>

                    <div>
                        <div className="uk-card uk-card-default vokrug-border-rounded vokrug-teachers-container">
                            <img src={userThree} alt="" className='vokrug-border-rounded vokrug-teachers-container'/>
                            <h3 className="uk-card-title">Пётр</h3>
                            
                            <ul className="uk-list uk-list-divider uk-padding-small uk-text-left uk-padding-small vokrug-teachers-meta">
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />8 лет опыта.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Кризисный психолог,немедицинский психотерапевт гуманистического направления.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Сертифицированный групповой терапевт и профессиональный медиатор.</li>
                                <li><img src={checkImg} alt="123" className='vokrug-check-icon uk-margin-small-right' />Более 2500 часов работыс клиентами в индивидуальном и групповом формате, более 1000 часов супервизиии личной терапии.</li>
                            </ul>

                        </div>
                    </div>

                </div>

            </div>
        </div>
        );
}

export default Block;