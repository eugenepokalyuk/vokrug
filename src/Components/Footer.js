import React, { useState } from 'react';

function Block() {
    return(
        <div className='uk-container vokrug-container-header'>

            <nav className="uk-navbar" data-uk-navbar>

                <div className="uk-navbar-left">

                    <ul className="uk-navbar-nav vokrug-adv-textDecoration">
                        <li><a href="#">2022 © Vokrug.space</a></li>
                        <li><a href="#">ask@vokrug.space</a></li>
                    </ul>

                </div>

                <div className="uk-navbar-right">

                    <ul className="uk-navbar-nav vokrug-adv-textDecoration">
                        <li><a href="#">Пользовательское соглашение</a></li>
                        <li><a href="#">Политика конфиденциальности</a></li>
                    </ul>

                </div>

            </nav>

        </div>
        );
}

export default Block;