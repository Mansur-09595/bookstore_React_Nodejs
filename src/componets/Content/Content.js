import React from 'react'
import page1 from '../../img/first_page.png'
import page2 from '../../img/second_page.png'
import page3 from '../../img/third_page.png'
import './content.scss'
import './adaptive.scss'

const Content = () => {
  return (
    <div className="content" id='page'>
        <p className='title'>Содержание</p>
        <div className="page-picture">
            <img className='page-img' src={page1} alt="" />
            <img className='page-img' src={page2} alt="" />
            <img className='page-img' src={page3} alt="" />
        </div>
    </div>
  )
}

export default Content
