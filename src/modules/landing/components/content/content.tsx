"use client";

import "./content.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@/modules/common/components/buttons/primaryButton";

const Content = () => {
	return (
		<div id='landing-content'>
			<div className='content'>
				<div className='content-container'>
					<h3 className='content-name'>David Molnar</h3>
					<h1 className='content-role'>Full-Stack Software Developer</h1>
					<p className='content-description'>
						With over 6 years of coding expreience, I always pay attention to
						detail while focusing on clean, scalable and maintainable code.
					</p>
					<PrimaryButton onClick={() => {}} text={"Learn more"} icon={faPlay} />
				</div>
			</div>
		</div>
	);
};

export default Content;
