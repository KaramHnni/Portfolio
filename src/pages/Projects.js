import React from "react"
import Layout from "../components/layout"
import SEO from "../components/seo"
import ProjectCard from "../components/ProjectCard"
import { useStaticQuery, graphql } from "gatsby"

export default function Projects({data}){

    const projects = data.allMarkdownRemark;


  return (
    <Layout>
      <SEO title="Work" />
      <div className="mt-16" >
        <p className=" text-4xl font-extrabold text-teal-600 text-center">
              Projects
         </p>

         <div div class="mt-4 flex justify-around items-center flex-wrap">
           {  
             projects.edges.map(({node}) => {
               return(
               <ProjectCard 

              slug={node.fields.slug}
               imageData = {{
                alt: node.frontmatter.title,
                path: node.frontmatter.Thumbimage.childImageSharp.fixed.src,
                  }}

                ProjectData={{
                title: node.frontmatter.title,
                description: node.frontmatter.description
              }}
              
              Tags={node.frontmatter.tags}
               />
             )})

           }
         </div>
      </div>
     </Layout>
     )
}

export const projects = graphql`
 query projects {
  allMarkdownRemark {
    edges {
      node {
        frontmatter {
          Thumbimage {
            childImageSharp {
              fixed {
                src
              }
            }
          }
          title
          description
          tags {
            color
            name
          }
        }
        fields {
          slug
        }
      }
    }
  }
}

  `
