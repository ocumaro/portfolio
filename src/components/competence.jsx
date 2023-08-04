import React, { useState } from "react";
import '../styles/competence.css';

function Comp() {
    const [cards, setCard] = useState([
        { img: '../images/htmllogo.png' },
        { img: '../images/csslogo.png' },
        { img: '../images/JavaScript-logo.png' },
        { img: '../images/Bootstraplogo.png' },
        { img: '../images/phplogo.png' },
        { img: '../images/laravellogo.png' },
        { img: '../images/reactjs.png' },
        { img: '../images/sqllogo.png' },
        { img: '../images/nodejs.png' }
    ]);

    return (
        <div className="main">
            {cards.map((item, index) => (
                <div className="minicards" key={item.img}>
                    <img src={item.img} alt="" />
                </div>
            ))}
        </div>
    );
}

export default Comp;
