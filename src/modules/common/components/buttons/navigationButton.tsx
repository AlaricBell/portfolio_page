"use client";

import classNames from "classnames";
import "./button.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { IconProp } from "@fortawesome/fontawesome-svg-core";
import Link from "next/link";

type ButtonProps = {
	onClick?: () => void;
	link: string;
	className?: string;
	text: string;
	icon: IconProp;
};

const NavigationButton = ({
	onClick = () => {},
	link,
	text,
	icon,
	className = "",
}: ButtonProps) => {
	return (
		<Link
			onClick={onClick}
			href={link}
			target='_self'
			className={classNames("btn btn-navigation", className)}
		>
			{text}
			<div className='btn-navigation-icon'>
				<FontAwesomeIcon
					style={{ width: "10px", height: "10px" }}
					icon={icon}
				/>
			</div>
		</Link>
	);
};

export default NavigationButton;
