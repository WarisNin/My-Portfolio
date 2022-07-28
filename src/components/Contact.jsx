import React from "react";

const Contact = () => {
	return (
		<div
			name="contact"
			className="w-full h-screen bg-gradient-to-b from-slate-900 to-gray-900 p-4 text-white"
		>
			<div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
				<div className="pb-8">
					<p className="text-4xl text-lime-200 font-bold inline border-b-4 border-red-400">
						Contact
					</p>
					<p className="py-6">
						Currently looking for a new opportunity, you can submit the form
						below to get in touch with me and I’ll try my best to get back to
						you!
					</p>
				</div>

				<div className="flex justify-center items-center">
					<form
						action="https://getform.io/f/beddc628-bc8e-4183-99bd-3b0601c07632"
						method="POST"
						className="flex flex-col w-full md:w-1/2"
					>
						<input
							type="text"
							name="name"
							placeholder="Enter your name"
							className="p-2 bg-gray-200 border-2 rounded-lg text-black font-bold focus:outline-none"
						/>
						<input
							type="text"
							name="email"
							placeholder="Enter your e-mail"
							className="my-4 p-2 bg-gray-200 border-2 rounded-lg text-black font-bold focus:outline-none"
						/>
						<textarea
							name="message"
							placeholder="Enter your message"
							rows="10"
							className="p-2 bg-gray-200 border-2 rounded-lg text-black font-bold focus:outline-none"
						></textarea>

						<button className="text-white bg-gradient-to-r from-yellow-400 to-orange-500 px-6 py-3 my-8 mx-auto flex items-center rounded-full hover:scale-110 duration-200">
							Get In Touch
						</button>
					</form>
				</div>
			</div>
		</div>
	);
};

export default Contact;
