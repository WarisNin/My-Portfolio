import React, { useState } from "react";
import { FaBars, FaTimes } from "react-icons/fa";
import { Link } from "react-scroll";

const NavBar = () => {
	const [nav, setNav] = useState(false);

	const links = [
		{
			id: 1,
			link: "home",
		},
		{
			id: 2,
			link: "about",
		},
		{
			id: 3,
			link: "projects",
		},
		{
			id: 4,
			link: "experience",
		},
		{
			id: 5,
			link: "contact",
		},
	];

	return (
		// Navbar on page

		<div className="flex justify-between  items-center w-full h-20 px-4 text-white bg-slate-800 fixed">
			<div>
				<h1
					className=" text-6xl text-lime-500
				 font-signature ml-2 mt-5 "
				>
					Waris
				</h1>
			</div>

			<ul className="hidden md:flex">
				{links.map(({ id, link }) => (
					<li
						key={id}
						className="px-4 cursor-pointer capitalize font-medium text-white hover:scale-110 hover:text-yellow-300 duration-200"
					>
						<Link to={link} smooth={true} duration={600}>
							{link}
						</Link>
					</li>
				))}
			</ul>

			{/* NavBar on phone  */}

			<div
				onClick={() => setNav(!nav)}
				className="cursor-pointer pr-4 z-10 text-gray-500 md:hidden"
			>
				{nav ? <FaTimes size={30} /> : <FaBars size={30} />}
			</div>

			{nav && (
				<ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800">
					{links.map(({ id, link }) => (
						<li
							key={id}
							className="px-4 cursor-pointer capitalize py-6 text-4xl"
						>
							<Link
								onClick={() => setNav(!nav)}
								to={link}
								smooth={true}
								duration={600}
							>
								{link}
							</Link>
						</li>
					))}
				</ul>
			)}
		</div>
	);
};

export default NavBar;
