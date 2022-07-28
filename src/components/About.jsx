import React from "react";

const About = () => {
	return (
		<div
			name="about"
			className="w-full h-screen bg-gradient-to-b from-gray-900 to-slate-900 text-white"
		>
			<div className="flex flex-col justify-center items-center w-full h-full">
				<div className=" max-w-screen-lg grid grid-cols-2 gap-8">
					<div className="sm:text-right pb-8 pl4">
						<p className="text-4xl text-lime-200 font-bold inline border-b-4 border-red-400">
							About Me
						</p>
					</div>
				</div>

				<div className=" max-w-screen-lg grid sm:grid-cols-2 gap-8 px-4">
					<div className="sm:text-right text-4xl font-bold">
						<p>Hi. I'm Waris, nice to meet you. Please take a look around.</p>
					</div>
					<p>
						I'm a Telecommunication Engineer from King Mongkut's University of
						Technology Ladkrabang. My first website was a graduation project,
						and I love building websites and learning new things. My ambition is
						to become a Full-Stack Developer.
					</p>
				</div>
			</div>
		</div>
	);
};

export default About;
