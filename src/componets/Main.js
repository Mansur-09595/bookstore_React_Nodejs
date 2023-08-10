import React from 'react'
import Navbar from './Navbar/Navbar'
import Section from './Section/Section'
import Aside from './Aside/Aside'
import Article from './Article/Article'
import Content from './Content/Content'
import Footer from './Footer/Footer'
import '../componets/main.scss'

const Main = () => {
  return (
    <>
      <Navbar />
      <Section />
      <Aside />
      <Article />
      <Content />
      <Footer />
    </>
  )
}

export default Main
