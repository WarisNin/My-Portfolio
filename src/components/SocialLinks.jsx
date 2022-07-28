import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsFileEarmarkPersonFill, BsFacebook } from "react-icons/bs";

const SocialLinks = () => {
	const links = [
		{
			id: 1,
			child: (
				<>
					LinkedIn <FaLinkedin size={30} />
				</>
			),
			href: "https://www.linkedin.com/in/waris-ninkaesorn-53129423a/",
			style: "bg-[#0072b1] rounded-tr-md",
		},
		{
			id: 2,
			child: (
				<>
					LinkedIn <BsFacebook size={30} />
				</>
			),
			href: "https://www.facebook.com/waris.ninkaesorn",
			style: "bg-[#4267B2]",
		},
		{
			id: 3,
			child: (
				<>
					GitHub <FaGithub size={30} />
				</>
			),
			href: "https://github.com/WarisNin",
			style: "bg-stone-800",
		},
		{
			id: 4,
			child: (
				<>
					Mail <MdEmail size={30} />
				</>
			),
			href: "mailto:ninkaesorn.waris@gmail.com",
			style: "bg-emerald-500",
		},
		{
			id: 5,
			child: (
				<>
					Resume <BsFileEarmarkPersonFill size={30} />
				</>
			),
			href: "/waris_resume.pdf",
			style: "bg-gray-600 rounded-br-md",
			download: true,
		},
	];

	return (
		<div className="hidden lg:flex flex-col top-[35%] left-0 fixed">
			<ul>
				{links.map(({ id, child, href, style, download }) => (
					<li
						key={id}
						className={
							"flex justify-between items-center w-40 h-14 px-4 ml-[-100px] hover:ml-[-10px] hover:rounded-md duration-300 " +
							style
						}
					>
						<a
							href={href}
							className="flex justify-between items-center w-full text-white"
							download={download}
							target="_blank"
							rel="noreferrer"
						>
							{child}
						</a>
					</li>
				))}
			</ul>
		</div>
	);
};

export default SocialLinks;
