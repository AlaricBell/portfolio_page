"use client";

import "./navigationModal.scss";
import NavigationModalItem from "./navigationModalItem";
import { useNavigationStore } from "../../store/navigationStore";
import PrimaryButton from "../buttons/primaryButton";
import {
	faChevronLeft,
	faChevronRight,
	faX,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const NavigationModal = () => {
	const isOpen = useNavigationStore((state) => state.isOpen);
	const data = useNavigationStore((state) => state.content);
	const setModalOpen = useNavigationStore((state) => state.setIsOpen);
	const setModalContent = useNavigationStore((state) => state.setContent);

	return isOpen ? (
		<section className='navigation-modal-overlay'>
			<div className='navigation-modal'>
				<div className='navigation-modal-operations'>
					<div className='navigation-modal-pages'>
						<div className='navigation-modal-pages-selector'>
							<FontAwesomeIcon
								style={{ width: "24px", height: "24px" }}
								icon={faChevronLeft}
							/>
						</div>

						<div className='navigation-modal-pages-selector'>
							<FontAwesomeIcon
								style={{ width: "24px", height: "24px" }}
								icon={faChevronRight}
							/>
						</div>
					</div>
					<div className='navigation-modal-btn'>
						<PrimaryButton
							onClick={() => {
								setModalOpen();
								setModalContent([]);
							}}
							text={"Close"}
							icon={faX}
						/>
					</div>
				</div>
				<div className='navigation-modal-items'>
					<div className='navigation-modal-items-slider'>
						{data.map((navigationItem, index) => (
							<NavigationModalItem
								navigation={navigationItem}
								number={index + 1}
								key={`modal-item-${index}`}
							/>
						))}
					</div>
				</div>
			</div>
		</section>
	) : null;
};

export default NavigationModal;
