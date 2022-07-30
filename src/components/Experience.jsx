import React from "react";

import html from "../assets/html.png";
import css from "../assets/css.png";
import bootstrap from "../assets/bootstrap.png";
import javascript from "../assets/javascript.png";
import jquery from "../assets/jquery.png";
import php from "../assets/php.png";
import reactImage from "../assets/react.png";
import tailwind from "../assets/tailwind.png";
import git from "../assets/git.png";

const Experience = () => {
	const techs = [
		{
			id: 1,
			src: html,
			title: "HTML5",
			style: "shadow-orange-600",
		},
		{
			id: 2,
			src: css,
			title: "CSS3",
			style: "shadow-blue-400",
		},
		{
			id: 3,
			src: bootstrap,
			title: "Bootstrap",
			style: "shadow-purple-600",
		},
		{
			id: 4,
			src: tailwind,
			title: "Tailwind CSS",
			style: "shadow-sky-500",
		},
		{
			id: 5,
			src: javascript,
			title: "JavaScript (ES6)",
			style: "shadow-yellow-400",
		},
		{
			id: 6,
			src: jquery,
			title: "jQuery",
			style: "shadow-slate-500",
		},
		{
			id: 7,
			src: php,
			title: "PHP",
			style: "shadow-indigo-400",
		},
		{
			id: 8,
			src: reactImage,
			title: "React",
			style: "shadow-cyan-400",
		},
		{
			id: 9,
			src: git,
			title: "Git",
			style: "shadow-[#F1502F]",
		},
	];

	return (
		<div
			name="experience"
			className="bg-gradient-to-b from-gray-900 to-slate-900 w-full sm:h-screen"
		>
			<div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
				<div>
					<p className="text-4xl text-lime-200 font-bold border-b-4 border-red-400 p-2 inline">
						Experience
					</p>
					<p className="py-6">These are the technologies I've worked with</p>
				</div>

				<div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
					{techs.map(({ id, src, title, style }) => (
						<div
							key={id}
							className={
								"bg-gradient-to-b from-stone-900 to-gray-700 shadow-md hover:scale-105 duration-300 py-2 rounded-lg " +
								style
							}
						>
							<img src={src} alt="" className="w-20 mx-auto" />
							<p className="pt-4">{title}</p>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Experience;
