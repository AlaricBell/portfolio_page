"use client";

import "./panel.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@/modules/common/components/buttons/primaryButton";
import Content from "../content/content";

const LandingPanel = () => {
	return (
		<section id='landing'>
			<Content />
		</section>
	);
};

export default LandingPanel;
