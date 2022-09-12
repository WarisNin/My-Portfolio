import React from "react";
import adsb from "../assets/porfolio/adsb.png";
import dice from "../assets/porfolio/dice.png";
import drumkit from "../assets/porfolio/drumkit.png";
import simon from "../assets/porfolio/simon.png";
import tindog from "../assets/porfolio/tindog.png";
import weather from "../assets/porfolio/weather.png";

const Portfolio = () => {
	const portfolios = [
		{
			id: 1,
			src: adsb,
			href1:
				"https://l.facebook.com/l.php?u=http%3A%2F%2Ftrain.telecom.kmitl.ac.th%2Fadsb%2Fwebsite_adsb%2Findex_v2.php%3Ffbclid%3DIwAR2Q72Wt8EOWVWCcIlZyrnh2LeqpsfvSu8FxS-jNxEcZazimW7mAMkKVFkQ&h=AT00ecoP7h-VhtU_dBg5DUTiQS5UDqTVk4Y6aFnP8GmjTG0gar7_Qg4ctJHVz4LhkQ6SjSj8NS4gJAtMyIdO2SaXy1jfqXQ-dASzXuGwYd2b4To1vypaxSrMmaSS9IDrbWSNRerb-F7AoDowGHiTGw",
			href2: "",
		},
		{
			id: 2,
			src: tindog,
			href1: "https://warisnin.github.io/TinDog/",
			href2: "https://github.com/WarisNin/TinDog",
		},
		{
			id: 3,
			src: dice,
			href1: "https://warisnin.github.io/Dicee/",
			href2: "https://github.com/WarisNin/Dicee",
		},
		{
			id: 4,
			src: drumkit,
			href1: "https://warisnin.github.io/DrumKit/",
			href2: "https://github.com/WarisNin/DrumKit",
		},
		{
			id: 5,
			src: simon,
			href1: "https://warisnin.github.io/Simon/",
			href2: "https://github.com/WarisNin/Simon",
		},
		{
			id: 6,
			src: weather,
			href1: "https://warisweatherapp.netlify.app/",
			href2: "https://github.com/WarisNin/Weather-App",
		},
	];

	return (
		<div
			name="projects"
			className="bg-gradient-to-b from-slate-900 to-gray-900 w-full text-white md:h-screen"
		>
			<div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
				<div className="pb-8">
					<p className="text-4xl text-lime-200 font-bold inline border-b-4 border-red-400">
						Projects
					</p>
					<p className="py-6">Check out some of my works below </p>
				</div>

				<div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
					{portfolios.map(({ id, src, href1, href2 }) => (
						<div
							key={id}
							className="shadow-md shadow-gray-600 rounded-lg bg-indigo-900"
						>
							<img
								src={src}
								alt="project-img"
								className="rounded-md hover:scale-105 duration-200"
							/>
							<div className="flex items-center justify-center">
								<button className="font-bold hover:text-violet-300 w-1/2 px-3 py-2 m-4 duration-200 hover:scale-105">
									<a href={href1} target="_blank" rel="noreferrer">
										Demo
									</a>
								</button>
								<button className="font-bold hover:text-violet-300 w-1/2 px-5 py-2 m-4 duration-200 hover:scale-105">
									<a href={href2} target="_blank" rel="noreferrer">
										Repository
									</a>
								</button>
							</div>
						</div>
					))}
				</div>
			</div>
		</div>
	);
};

export default Portfolio;
