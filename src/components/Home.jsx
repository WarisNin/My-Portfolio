import React from "react";
import { FaHandPointRight } from "react-icons/fa";
import { Link } from "react-scroll";

const Home = () => {
	return (
		<div
			name="home"
			className="h-screen w-full bg-gradient-to-b from-slate-900 via-slate-900 to-gray-900 text-white"
		>
			<div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
				<div className="flex flex-col justify-center h-full">
					<p className="text-red-400">Hi, my name is</p>
					<h1 className="text-4xl font-bold">Waris Ninkaesorn</h1>
					<h2 className="text-4xl text-lime-200 sm:text-7xl font-bold">
						I'm a Web Developer
					</h2>
					<p className="text-gray-400 py-4 max-w-md">
						I'm a web developer from Thailand, based in Bangkok. I like to learn
						new things and build websites. My goal is to become a Full-Stack
						developer.
					</p>

					<div>
						<Link
							to={"projects"}
							smooth={true}
							duration={600}
							className="group hover:scale-105 duration-200 text-white w-fit px-6 py-3 my-2 flex items-center rounded-md bg-gradient-to-r from-yellow-400 to-orange-500 cursor-pointer"
						>
							View Work
							<span className="mx-1 group-hover:rotate-90 duration-200">
								<FaHandPointRight size={20} />
							</span>
						</Link>
					</div>
				</div>
			</div>
		</div>
	);
};

export default Home;
