"use client";

import "./navigationModal.scss";
import { NavigationType } from "./navigation.types";
import NavigationModalItem from "./navigationModalItem";

type NavigationModalProps = {
	navigationData: NavigationType[];
};

const NavigationModal = ({ navigationData }: NavigationModalProps) => {
	return (
		<section className='navigation-modal'>
			<div className='navigation-modal-pagination'></div>
			<div className='navigation-modal-items'>
				{navigationData.map((navigation) => (
					<NavigationModalItem navigation={navigation} />
				))}
			</div>
		</section>
	);
};

export default NavigationModal;
