import React from 'react'
import Form from './Form/Form'
import './footer.scss'
import './adaptive.scss'

const Footer = () => {
  return (
    <div className="footer" id='review'>
        <div className="review-title">
          <p>Рецензия</p>
        </div>
        <div className="review-blocks">
          <div className="review">
            <p className="review-text">ОДИН ИЗ НАШИХ ЛУЧШИХ МОЛОДЫХ ПРОЗАИКОВ ЭКСПЕРИМЕНТИРУЕТ НА ЭТОТ РАЗ С ВИЗУАЛИЗАЦИЕЙ... И, ПО-МОЕМУ, ОЧЕНЬ УДАЧНО!
            </p>
            <div className="reviews">
              <p className="reviews-names">Канта Ибрагимов</p>
              <p className="reviews-names">писатель, председатель СП ЧР</p>
              <p className="reviews-names">@kantaibragimov</p>
            </div>
          </div>
          <div className="review">
            <p className="review-text">Первый чеченский комикс от Салаханова Адама, давно зарекомендовавшего себя, как андеграундного постмодерниста. 
            Сложноначинённые, самобытные работы автора, написанные посмироничным современным языком, подкупают вументичностью историй, 
            где главной вышенкой на мopme является концовка, что как правило обезоруживаем, не оставляя читателя равнодушным. Плюс гармоничное и 
            яркое слияние нуара и киберпанка от талантливых художников
            </p>
            <div className="reviews">
              <p className="reviews-names">Елена Милосердова</p>
              <p className="reviews-names">художница, поэтесса</p>
              <p className="reviews-names">@Mil.lena</p>
            </div>
          </div>
          <div className="review">
            <p className="review-text">Я впервые прочитала комикс, где супергерой - девушка. Обычно это были Бэтмен, Человек-Паук, Супермэн и другие. 
            Это такая интересная история, с отсылкой в прошлое, но действие происходит в современное время. Героиня хочет справедливости и 
            поэтому решает сама наказать виновных. Уверенна, что прочитав этот комикс, чumamenu захотят продолжени новых приключений Героини
            </p>
            <div className="reviews">
              <p className="reviews-names">Ася Умарова.</p>
              <p className="reviews-names">писательница, художница</p>
              <p className="reviews-names">@asyaumarova</p>
            </div>
          </div>
        </div>
        <Form />
      </div>
  )
}

export default Footer
