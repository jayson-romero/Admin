import {
	CalendarToday,
	LocationSearching,
	MailOutline,
	PermIdentity,
	PhoneAndroid,
	Publish,
} from "@mui/icons-material"
import { Link } from "react-router-dom"

const User = () => {
	return (
		<>
			<div className="m-[20px]">
				<div className="wrapper flex flex-col gap-5 md:flex-row md:justify-left ">
					<div className="userinfo bg-white p-[20px] lg:w-[450px]">
						<div className="wrapper flex flex-col gap-5">
							<div className="flex gap-5 items-center">
								<img
									src="https://images.pexels.com/photos/7156886/pexels-photo-7156886.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
									alt=""
									className="rounded-full w-10 h-10"
								/>
								<div className="info">
									<h1 className="font-bold text-[18px]">JaysonRomero</h1>
									<h2>Software Enginner</h2>
								</div>
							</div>

							<div className="accountdetails flex flex-col gap-3">
								<h1 className="font-semibold text-[15px]">Account Details</h1>
								<div className="flex gap-5">
									<PermIdentity />
									<h2>ItonPogi1218</h2>
								</div>
								<div className="flex gap-5">
									<CalendarToday />
									<h2>10.20.2023</h2>
								</div>
							</div>

							<div className="contactdetails flex flex-col gap-3">
								<h1 className="font-semibold text-[15px] ">Contact Details</h1>
								<div className="flex gap-5">
									<PhoneAndroid />
									<h2>9053008715</h2>
								</div>
								<div className="flex gap-5">
									<MailOutline />
									<h2>romerojayson1218@gmail.com</h2>
								</div>
								<div className="flex gap-5">
									<LocationSearching />
									<h2>Quezon City</h2>
								</div>
							</div>
						</div>
					</div>
					<div className="edituserinfo bg-white p-[20px] w-full lg:w-[700px]">
						<h1 className="font-bold text-[20px]">Edit</h1>

						{/* IMAGE  */}
						<form>
							<div className="wrapper lg:flex lg:flex-row-reverse lg:justify-between ">
								<div className="img flex items-center lg:items-start">
									<img
										className="w-20 h-20 rounded lg:w-60 lg:h-60"
										src="https://images.pexels.com/photos/1152994/pexels-photo-1152994.jpeg?auto=compress&cs=tinysrgb&dpr=2&w=500"
										alt=""
									/>
									<label htmlFor="file">
										<Publish className="userUpdateIcon" />
									</label>
									<input type="file" id="file" style={{ display: "none" }} />
								</div>

								{/* INFO */}
								<div className="flex flex-col gap-5 mt-5 lg:w-[300px]">
									<div className="userUpdateItem">
										<label className="block">Username</label>
										<input
											type="text"
											placeholder="annabeck99"
											className="bg-light-blue p-2 border-b border-black w-full"
										/>
									</div>
									<div className="userUpdateItem">
										<label className="block">Full Name</label>
										<input
											type="text"
											placeholder="Anna Becker"
											className="bg-light-blue p-2 border-b border-black w-full"
										/>
									</div>
									<div className="userUpdateItem">
										<label className="block">Email</label>
										<input
											type="text"
											placeholder="annabeck99@gmail.com"
											className="bg-light-blue p-2 border-b border-black w-full"
										/>
									</div>
									<div className="userUpdateItem">
										<label className="block">Phone</label>
										<input
											type="text"
											placeholder="+1 123 456 67"
											className="bg-light-blue p-2 border-b border-black w-full"
										/>
									</div>
									<div className="userUpdateItem">
										<label className="block">Address</label>
										<input
											type="text"
											placeholder="New York | USA"
											className="bg-light-blue p-2 border-b border-black w-full"
										/>
									</div>

									<button className="bg-accent px-10 py-2 rounded">
										Update
									</button>
								</div>
							</div>
						</form>
					</div>
				</div>
			</div>
		</>
	)
}

export default User
