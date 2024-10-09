"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigationModalItem.scss";
import { NavigationType } from "./navigation.types";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "../buttons/primaryButton";
import NavigationButton from "../buttons/navigationButton";

type NavigationModalItemProps = {
	navigation: NavigationType;
	number: number;
};

const NavigationModalItem = ({
	navigation,
	number,
}: NavigationModalItemProps) => {
	return (
		<div className='navigation-modal-item'>
			<span className='navigation-modal-item-number'>
				{number < 10 ? `0${number}` : number}
			</span>
			<div className='navigation-modal-item-icon'>
				<FontAwesomeIcon
					style={{ width: "128px", height: "128px" }}
					icon={navigation.logoIcon}
				/>
			</div>
			<p className='navigation-modal-item-title'>{navigation.title}</p>
			<p className='navigation-modal-item-toggle'>show more</p>
			<p className='navigation-modal-item-description'>
				{navigation.description}
			</p>
			<ul className='navigation-modal-item-list'>
				{navigation.benefits.map((benefit, index) => (
					<li
						className='navigation-modal-item-benefit'
						key={`benefit-${index}`}
					>
						{benefit}
					</li>
				))}
			</ul>
			<div className='navigation-modal-item-btn'>
				<NavigationButton onClick={() => {}} text={"Close"} icon={faPlay} />
			</div>
		</div>
	);
};

export default NavigationModalItem;
