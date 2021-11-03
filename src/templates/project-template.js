import React from 'react'
import Layout from '../components/layout'
import SEO from '../components/seo'
import { graphql } from "gatsby"
import { Descriptions } from 'antd';




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
        <Descriptions.Item label="Job Type">{project.frontmatter.type}</Descriptions.Item>
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
						  type
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
