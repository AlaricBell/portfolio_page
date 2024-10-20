import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { NavigationType } from "../components/navigation/navigation.types";
import { faGithubAlt } from "@fortawesome/free-brands-svg-icons/faGithubAlt";

export const navigationData: NavigationType[] = [
	{
		logoIcon: faGithub,
		title: "Home",
		description:
			"This is my github This is my github This is my github This is my github This is my github  This is my github",
		details: ["it is cool", "it is still cool"],
		link: "/",
	},
	{
		logoIcon: faLinkedin,
		title: "About",
		description: "This is my github",
		details: ["it is cool", "it is still cool"],
		link: "about",
	},
	{
		logoIcon: faGithubAlt,
		title: "Contact",
		description: "This is my github",
		details: ["it is cool", "it is still cool"],
		link: "contact",
	},
	{
		logoIcon: faGithub,
		title: "Github",
		description: "This is my github",
		details: ["it is cool", "it is still cool"],
		link: "about",
	},
];
