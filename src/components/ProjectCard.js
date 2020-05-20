import React from "react"
import {Link} from 'gatsby'
import { Card, Avatar, Tag } from "antd"

const { Meta } = Card

const ProjectCard = ({ imageData, ProjectData, Tags , slug }) => {


	return (
		<Card
			style={{ width: 400 }}
			cover={<img alt={imageData.alt} src={imageData.path} />}
			actions={[<Link to={slug} >See Details</Link>]}
					>
			<Meta title={ProjectData.title} description={ProjectData.description} />
			<div className="mt-4">
				{Tags.map(tag => (
					<Tag color={tag.color}>{tag.name}</Tag>
				))}
			</div>
		</Card>
	)
}

export default ProjectCard
