import React from 'react'
import './navbar.scss'
import './adaptive.scss'

const Navbar = () => {
  return (
    <div className="navbar" id="header">
        <h3 className="author-name">САЛАХАНОВ АДАМ</h3>
        <div className="titles">
            <a className="title" href="#content">Описание</a>
            <a className="title" href="#author">Автор</a>
            <a className="title" href="#page">Страницы</a>
            <a className="title" href="#review">Отзывы</a>
            <a className="title" href="#order">Заказать</a>
            <a className="title" href="#">Контакты</a>
        </div>
    </div>
  )
}

export default Navbar
