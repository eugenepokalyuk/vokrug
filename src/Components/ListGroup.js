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
    // "width":"100%"
    "width":"368px !important",
}
const width100perc = {
    "width":"100%"
}

function Block() {
    return(
        <div>
            <div className="uk-child-width-1-3@m" data-uk-grid>
                <div style={width100}>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={userOne} style={width100perc} alt="" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Media Top</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
                <div style={width100}>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={userTwo} style={width100perc} alt="" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Media Top</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
                <div style={width100}>
                    <div className="uk-card uk-card-default">
                        <div className="uk-card-media-top">
                            <img src={userThree} style={width100perc} alt="" />
                        </div>
                        <div className="uk-card-body">
                            <h3 className="uk-card-title">Media Top</h3>
                            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt.</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
        // <div className='uk-container uk-padding'>
        //     <div className="uk-child-width-1-1@s uk-grid-collapse uk-text-center" data-uk-grid>
        //         <div className='uk-margin-medium-bottom'>
        //             <h4 className="uk-heading-small vokrug-teachers-header">Кто будет вести группу</h4>
        //             <h4 className="uk-text-meta uk-text-large uk-margin-small-top vokrug-teachers-text">Ведущий создаст доверительные отношения среди участников группы<br />, что поможет эффективно взаимодействовать друг с другом</h4>
        //         </div>
                
        //         <div className="uk-child-width-1-3@m uk-grid-small uk-grid-match" data-uk-grid>
        //             <div>
        //                 <div className="uk-card uk-card-default vokrug-teachers-container uk-padding-remove">
        //                     <img src={userOne} alt="" className='vokrug-teachers-container' style={width100}/>
        //                     <h3 className="uk-card-title">Снежана</h3>
                            
        //                     <ul className="uk-list uk-text-left uk-list-bullet">
        //                         <li>9 лет опыта.</li>
        //                         <li>Психолог, психоаналитик, сертифицированный специалист Европейской Конфедерации Психоаналитической Психотерапии.</li>
        //                         <li>Более 3000 индивидуальныхи групповых встреч.</li>
        //                         <li>Сертификат общественнойаккредитации об успешномзавершении курса Основы группового анализа.</li>
        //                     </ul>

        //                 </div>
        //             </div>

        //             <div>
        //                 <div className="uk-card uk-card-default  vokrug-teachers-container">
        //                     <img src={userTwo} alt="" className='vokrug-teachers-container' style={width100}/>
        //                     <h3 className="uk-card-title">Людмила</h3>
                            
        //                     <ul className="uk-list uk-text-left uk-list-bullet">
        //                         <li>8 лет опыта.</li>
        //                         <li>Практикующий психолог.</li>
        //                         <li>Диплом Санкт-ПетербургскогоГосударственного Университета,факультет Психологии и Австралийского Института Клинической и ОбразовательнойАрт-терапии.</li>
        //                         <li>Сертификат общественнойаккредитации об успешномзавершении курса Основы группового анализа.</li>
        //                     </ul>

        //                 </div>
        //             </div>
        //             <div>
        //                 <div className="uk-card uk-card-default  vokrug-teachers-container">
        //                     <img src={userThree} alt="" className='vokrug-teachers-container' style={width100}/>
        //                     <h3 className="uk-card-title">Пётр</h3>
                            
        //                     <ul className="uk-list uk-text-left uk-list-bullet">
        //                         <li>8 лет опыта.</li>
        //                         <li>Кризисный психолог,немедицинский психотерапевтгуманистического направления.</li>
        //                         <li>Сертифицированный групповойтерапевт и профессиональныймедиатор.</li>
        //                         <li>Более 2500 часов работыс клиентами в индивидуальноми групповом формате, более1000 часов супервизиии личной терапии.</li>
        //                     </ul>

        //                 </div>
        //             </div>
            
        //         </div>

        //     </div>
        // </div>
        );
}

export default Block;