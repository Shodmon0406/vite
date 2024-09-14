import React from 'react'
import SectionBrand from './sectionBrand/sectionBrand'
import Section2 from './section2/section2'
import Categori from './categori/categori'
import Jbl from './sectionBrand/jbl/jbl'
import Product from './products/product'
import Section5 from './section5/section5'
import Section6 from './section6/section6'
import Section4 from './section4/section4'
import CursorFollower from '@/components/cursor/cursor'

const Home = () => {
  return (
    <div>
      <SectionBrand />
      <Section2 />
      <Categori />
      <Jbl />
      <Product />
      <Section4 />
      <Section5 />
      <Section6 />
      {/* <CursorFollower /> */}
    </div>
  )
}

export default Home