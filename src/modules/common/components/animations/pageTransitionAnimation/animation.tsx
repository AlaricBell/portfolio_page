"use client";

import { useAnimationStore } from "@/modules/common/store/animationStore";
import "./animation.scss";
import { motion } from "framer-motion";

const PageTransitionAnimation = () => {
	const isAnimationVisible = useAnimationStore((state) => state.isVisible);

	return isAnimationVisible ? (
		<section id='animation'>
			<motion.div className='animation-primary'></motion.div>
			<motion.div className='animation-secondary'></motion.div>
		</section>
	) : null;
};

export default PageTransitionAnimation;
