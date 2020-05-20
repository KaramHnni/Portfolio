import React from "react"
import { Card, Avatar, Tag } from "antd"

const { Meta } = Card

const ProjectCard = ({ imageData, ProjectData, Tags }) => {
	return (
		<Card
			style={{ width: 400 }}
			cover={<img alt={imageData.alt} src={imageData.path} />}
			actions={[<p>See Details</p>]}
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
