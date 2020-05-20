import { Link } from "gatsby"
import PropTypes from "prop-types"
import { Motion, spring } from "react-motion"
import React from "react"

const Header = ({ siteTitle }) => (
	<header className="m-0 pt-2 fixed top-0 z-10 w-full bg-white shadow ">
		<Motion defaultStyle={{ x: 200 }} style={{ x: spring(-100) }}>
			{style => (
				<ul
					style={{ transform: `translateX(${style.x}px)` }}
					className="py-2 m-0 flex justify-end items-center list-none relative ml-auto"
				>
					<li className="px-4 font-bold ">
						<a className="text-teal-600" href="#">
							Home
						</a>
					</li>
					<li className="px-4 font-bold NavLink">
						<a className="text-teal-600" href="#">
							Work
						</a>
					</li>
					<li className="px-4 font-bold NavLink">
						<a className="text-teal-600" href="#">
							Contact
						</a>
					</li>
				</ul>
			)}
		</Motion>
	</header>
)

Header.propTypes = {
	siteTitle: PropTypes.string,
}

Header.defaultProps = {
	siteTitle: ``,
}

export default Header
