"use client";

import { useAnimationStore } from "@/modules/common/store/animationStore";
import "./animation.scss";
import { motion } from "framer-motion";
import { useEffect } from "react";
import { primaryVariant, secondaryVariant } from "./animationVariants";

const PageTransitionAnimation = () => {
	const isVisible = useAnimationStore((state) => state.isVisible);
	const setIsVisible = useAnimationStore((state) => state.setIsVisible);

	useEffect(() => {
		if (isVisible) {
			const timeoutId = setTimeout(setIsVisible, 5000);

			return () => clearTimeout(timeoutId);
		}
	}, [isVisible]);

	return isVisible ? (
		<section id='animation'>
			<motion.div
				initial='initial'
				animate='animate'
				variants={primaryVariant}
				className='animation animation-primary'
			></motion.div>
			<motion.div
				initial='initial'
				animate='animate'
				variants={secondaryVariant}
				className='animation animation-secondary'
			></motion.div>
		</section>
	) : null;
};

export default PageTransitionAnimation;
