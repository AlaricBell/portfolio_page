"use client";

import "./content.scss";
import { faPlay } from "@fortawesome/free-solid-svg-icons";
import PrimaryButton from "@/modules/common/components/buttons/primaryButton";
import { useNavigationStore } from "@/modules/common/store/navigationStore";
import { navigationData } from "@/modules/common/data/navigation";

const Content = () => {
	const setModalOpen = useNavigationStore((state) => state.setIsOpen);
	const setModalContent = useNavigationStore((state) => state.setContent);

	return (
		<div className='content'>
			<div className='content-container'>
				<h3 className='content-name'>David Molnar</h3>
				<h1 className='content-role'>CONTACT</h1>
				<p className='content-description'>
					With over 6 years of coding expreience, I always pay attention to
					detail while focusing on clean, scalable and maintainable code.
				</p>
				<PrimaryButton
					onClick={() => {
						setModalOpen();
						setModalContent(navigationData);
					}}
					text={"Learn more"}
					icon={faPlay}
				/>
			</div>
		</div>
	);
};

export default Content;
