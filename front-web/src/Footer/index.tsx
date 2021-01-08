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
				<a href="link" target="_new">
					<YouTubeIcon/>
				</a>
				<a href="https://www.linkedin.com/in/tony-sz-silva" target="_new">
					<LinkedInIcon/>
				</a>
				<a href="http://www.instagram.com/tony.sz.silva" target="_new">
					<InstagramIcon/>
				</a>
			</div>
		</footer>
	)
}

export default Footer;