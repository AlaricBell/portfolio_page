"use client";

import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import "./navigationModalItem.scss";
import { NavigationType } from "./navigation.types";

type NavigationModalItemProps = {
	navigation: NavigationType;
};

const NavigationModalItem = ({ navigation }: NavigationModalItemProps) => {
	return (
		<div className='navigation-modal-item'>
			<p className='navigation-modal-item-number'>1/2</p>
			<FontAwesomeIcon
				style={{ width: "64px", height: "64px" }}
				icon={navigation.logoIcon}
			/>
			<p className='navigation-modal-item-title'>{navigation.title}</p>
			<div className='navigation-modal-item-detail'>
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
			</div>
		</div>
	);
};

export default NavigationModalItem;
