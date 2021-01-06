import React from "react";
import './styles.css'
import {ReactComponent as YouTubeIcon} from './youtube.svg'
import {ReactComponent as LinkedInIcon} from './linkedin.svg'
import {ReactComponent as InstagramIcon} from './instagram.svg'

function Footer() {
	return (
		<footer className="main-footer">
			App desenvolvido por @Tony durante a 2ª ed. do evento Semana DevSuperior
			<div className="footer-icons">
				<a href="https://www.youtube.com/c/DevSuperior" target="_new">
					<YouTubeIcon/>
				</a>
				<a href="link" target="_new">
					<LinkedInIcon/>
				</a>
				<a href="link" target="_new">
					<InstagramIcon/>
				</a>
			</div>
		</footer>
	)
}

export default Footer;