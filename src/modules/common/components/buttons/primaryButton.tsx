"use client";

import classNames from "classnames";
import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";

type ButtonProps = {
	onClick: () => void;
	className?: string;
	text: string;
	icon: IconProp;
};

const PrimaryButton = ({
	onClick,
	text,
	icon,
	className = "",
}: ButtonProps) => {
	return (
		<button
			onClick={onClick}
			className={classNames("btn btn-primary", className)}
		>
			{text}
			<div className='btn-icon'>
				<FontAwesomeIcon
					style={{ width: "18px", height: "18px" }}
					icon={icon}
				/>
			</div>
		</button>
	);
};

export default PrimaryButton;
