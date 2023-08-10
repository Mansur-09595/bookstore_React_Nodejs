import React from 'react'
import author from '../../img/fight-club.jpeg'
import './article.scss'
import './adaptive.scss'

const Article = () => {
  return (
    <div className='color' id='author'>
    <div className="article">
        <div className="author-picture">
            <img src={author} alt="" />
        </div>
        <div className="author-personal">
            <p className="author-fullname">Адам Салаханов</p>
            <p className="author-achieve">
            Lorem ipsum dolor sit amet. Aut galisum omnis eos atque saepe ab Quis nulla a dolores maxime est voluptatem quia.
            Et quia dolores et nihil atque est dolores quam aut voluptates consectetur ut debitis odio.
            Et nisi perspiciatis vel inventore amet aut tempore voluptas. At enim veritatis est voluptatibus inventore
            ut sapiente temporibus est dolor autem et deleniti totam? Ut incidunt deserunt vel fuga enim et dolores 
            laborum aut repellat reprehenderit sit sapiente recusandae ut saepe perferendis non omnis iste. 
            </p>
        </div>
    </div>
  </div>
  )
}

export default Article
