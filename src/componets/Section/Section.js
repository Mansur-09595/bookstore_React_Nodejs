import React, { useState } from 'react'
import book_front from '../../img/taymaskha_front.png'
import book_back from '../../img/taymaskha_back.png'
import './section.scss'
import './buttons.scss'
import './adaptive.scss'

const Section = () => {
    const [isClicked, setIsClicked] = useState(false);

    // Функция для обработки клика на изображения
    const handleImageClick = () => {
    setIsClicked((prevState) => !prevState);
    };

  return (
    <div className="section">
        <div className="section-left">
            <h3 className="title-book">Первый Чеченский комикс <span>"Ретроспектр. Таймасха"</span></h3>
            <p className="about-book">
            Ретроспектр - это экспериментальная серия работ, в которых реминесценция на исторических героев 
            Чеченской Республики обыгрывается через призму дигитизации современного и ближайшего будущего 
            с целью иллюстрации вероятного влияния на читателя/зрителя - сегодня и завтра, 
            а также для альтернативной реставрации героев.
            </p>
            <div className="buttons">
                <button className="btn btn--stripe">Заказать</button>
                <button className="btn btn--stripe">Описание</button>
            </div>
        </div>
        <div className={`section-right ${isClicked ? 'clicked' : ''}`} onClick={handleImageClick}>
            <div className="books-wrap">
                <img className="book-front" src={book_front} alt="" />
                <img className="book-back" src={book_back} alt="" />
            </div>
        </div>
    </div>
  )
}

export default Section
