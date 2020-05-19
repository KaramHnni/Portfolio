import React from "react"
import {Motion , spring} from 'react-motion'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import { BackTop } from 'antd'
import {ArrowUpOutlined} from "@ant-design/icons"
import { Anchor } from 'antd';

const { Link } = Anchor;


const IndexPage = () => (
  <Layout>
    <SEO title="Home" />
  
 
  <div className="w-3/4 mt-16" id="scrollLayout">
  <div id="overview" className="h-screen relative" >
<Motion defaultStyle={{ x : -400 }} style={{x:spring(0)}}>

    {(style) => (

    <div style={{transform :`translateX(${style.x}px)`, maxWidth: `300px`, marginTop: `1rem` }}>
      <Image />
    </div>
    )}
 </Motion>
<Motion defaultStyle={{ y : 0 }} style={{y:spring(-150)}}>
{(style) => (
     <div className="text-right" style={{transform :`translateY(${style.y}px)`}}>
             <h1 className="text-teal-600 text-6xl font-extrabold">Karam Henni</h1>
             <p className="text-teal-600 text-2xl font-extrabold">Full Stack web developer</p>
     </div>
    )}
</Motion>
</div>

<div id="sneak-peak" className="h-screen mt-16">

      
  hello
</div>

<BackTop />
</div>

  </Layout>
)

export default IndexPage
