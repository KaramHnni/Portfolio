import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { useStaticQuery, graphql } from "gatsby"
import { Carousel , Descriptions } from 'antd';




export default function ProjectTemplate({data}){

	const project = data.markdownRemark

return (
	<Layout>

	<SEO title ={project.frontmatter.title} />
	<div className="mt-20">
	
		<p className=" text-4xl font-extrabold text-teal-600 text-center">
				{project.frontmatter.title}
	    </p>

         <div>

         	<div className="w-3/4 mx-auto">
         	<p></p>

<Descriptions
        title="Project Information"
        bordered
		layout="vertical"
      >
        <Descriptions.Item label="Project Name">{project.frontmatter.title}</Descriptions.Item>
        <Descriptions.Item label="Added At">{project.frontmatter.date}</Descriptions.Item>
        <Descriptions.Item label="Job Type">Freelance</Descriptions.Item>
        <Descriptions.Item label="Technologies">
        <p>
        	{project.frontmatter.tags.map(({name}) => (

        		<span>{name} - </span>
        		))}
        </p>
        </Descriptions.Item>
        <Descriptions.Item label="Job Description" span={2}>
          {project.frontmatter.description}
        </Descriptions.Item>
      </Descriptions>
    </div>
	

         	<div class="my-4">
			 { project.frontmatter.SliderImg.map(({path}) => (

					
<p> alt={project.frontmatter.title} src={path.childImageSharp.fluid.src} </p>



))}

         	<p className="font-bold text-md">Screenshots</p>
					 <Carousel style={{maxWidth : "100%" , maxHeight:"600px"}} className="bg-black  " autoplay>

			{ project.frontmatter.SliderImg.map(({path}) => (

					
					  <img alt={project.frontmatter.title} src={path.childImageSharp.fluid.src} className="text-white" />
			
					  

					 ))}
					  </Carousel>
         	</div>

         </div>


	</div>

	</Layout>

	)
}

export const query =graphql`

		query($slug : String!) {
  			markdownRemark(fields: {slug: {eq: $slug}}) {
				    frontmatter {
				    	  title
				    	  date
				    	  description
				    	  tags{
				    	  	name
				    	  }
				          SliderImg {
				            path {
				              childImageSharp {
						fluid{
				                  src
				                }
				              }
				            }
				          }
        }
  }
}

`
