"use client";

import classNames from "classnames";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@/modules/common/components/buttons/primaryButton";

const LandingPanel = () => {
	return (
		<section>
			<PrimaryButton onClick={() => {}} text={"Hello World"} icon={faPlay} />
		</section>
	);
};

export default LandingPanel;
