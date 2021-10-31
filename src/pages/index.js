import React from "react"
import { Motion, spring } from "react-motion"
import {scroller,Link as ScrollLink} from 'react-scroll'
import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import { useStaticQuery, graphql ,Link} from "gatsby"
import Img from "gatsby-image"
import { ArrowDownOutlined } from "@ant-design/icons"
import {Trans, useTranslation} from 'gatsby-plugin-react-i18next';

const IndexPage = () => {

  const { t } = useTranslation();


  const imgData = useStaticQuery(graphql`
    query Images {
 ImageKBL:  imageSharp(fixed: {originalName: {eq: "KblShowCase.png"}}) {
    fixed {
      src
    }
  }
  ImageTipTop:  imageSharp(fixed: {originalName: {eq: "TiptopShowCase.png"}}) {
    fixed {
      src
    }
  }
}
  `)


  const scrollToSection = () => {
    scroller.scrollTo(".sneak-peak", {
      duration: 800,
      delay: 0,
      smooth: "easeInOutQuart",
    });
  };

  return (
    <Layout>
      <SEO title="Home" />

      <div className=" mt-16" id="scrollLayout">
        <div id="overview" className=" h-screen relative">
          <Motion defaultStyle={{ x: -400 }} style={{ x: spring(0) }}>
            {style => (
              <div
                style={{
                  transform: `translateX(${style.x}px)`,
                  maxWidth: `300px`,
                  marginTop: `1rem`,
                }}
              >
                <Image />
              </div>
            )}
          </Motion>
          <Motion defaultStyle={{ y: 0 }} style={{ y: spring(-150) }}>
            {style => (
              <div
                className="text-center"
                style={{ transform: `translateY(${style.y}px)` }}
              >
                <h1 className="text-teal-600 text-6xl font-extrabold">
                  Karam Henni
                </h1>
                <p className="text-teal-600 text-2xl font-extrabold">
                  <Trans>Full Stack Web Developer</Trans>
                </p>
              </div>
            )}
          </Motion>
          <div className="text-center">
            <ScrollLink
              to="sneakPeak"
              spy={true} 
              smooth={true}
              duration={500}
              className="block text-black text-lg text-center"
            >
              Discover More
            </ScrollLink>

            <div className="text-center ArrowButton bounce">
              <ArrowDownOutlined />
            </div>
          </div>
        </div>
        

        <div id="sneakPeak" className=" h-screen flex items-center flex-col justify-around" >
          <p className=" text-4xl font-extrabold text-teal-600 text-center mt-12">
            Have a sneak peek at my work
          </p>
          <div className="w-full flex justify-around items-center">
            <ProjectCard
              ProjectData={{
                title: `KBL Car Parts`,
                description: `E-commerce for car parts`,
              }}
              imageData={{
                alt: `example`,
                path: `${imgData.ImageKBL.fixed.src}`,
              }}
              Tags={[
                { name: "Laravel", color: "red" },
                { name: "Javascript", color: "blue" },
                { name: "PHP", color: "pink" },
                { name: "JQuery", color: "green" },
              ]}
            />
            <ProjectCard
              ProjectData={{
                title: `Tip Top Automobiles CRM `,
                description: `A CRM dedicated to car selling agencies`,
              }}
              imageData={{
                alt: `example`,
                path: `${imgData.ImageTipTop.fixed.src}`,
              }}
              Tags={[
                { name: "Laravel", color: "red" },
                { name: "Javascript", color: "blue" },
                { name: "ES6", color: "lime" },
                { name: "PHP", color: "pink" },
                { name: "JQuery", color: "green" },
              ]}
            />
          </div>

          <div className="text-center mt-2">
            <Link to="/Projects" className="block text-black text-lg text-center bounce">
              Browse more projects
            </Link>
          </div>
        </div>
      </div>
    </Layout>
  )
}

export default IndexPage