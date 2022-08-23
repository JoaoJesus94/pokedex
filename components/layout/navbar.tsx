import { useSwitchTheme } from '../../hooks/switchTheme'
import Image, { ImageProps } from 'next/image'
import React from 'react'
import { FaBars, FaMoon, FaSun } from 'react-icons/fa'

export function Navbar() {
	const { isDarkTheme, toggleTheme } = useSwitchTheme()

	return (
		<div className="navbar bg-base-300">
			<div className="flex-none">
				<label htmlFor="my-drawer" className="btn btn-square btn-ghost lg:hidden">
					<FaBars size={24} />
				</label>
			</div>
			<div className="flex-1">
				<a className="btn btn-ghost normal-case text-xl gap-2">
					<Image src="/logo.png" alt="Vercel Logo" width={32} height={32} />
					Pokedex
				</a>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control hidden sm:block">
					<div className="input-group">
						<input type="text" placeholder="Search…" className="input input-bordered" />
						<button className="btn btn-square">
							<svg
								xmlns="http://www.w3.org/2000/svg"
								className="h-6 w-6"
								fill="none"
								viewBox="0 0 24 24"
								stroke="currentColor"
							>
								<path
									strokeLinecap="round"
									strokeLinejoin="round"
									strokeWidth="2"
									d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
								/>
							</svg>
						</button>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<img src="https://placeimg.com/80/80/people" />
						</div>
					</label>
					<ul tabIndex={0} className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-200 rounded-box w-52">
						<li>
							<a className="justify-between">
								Profile
								<span className="badge">New</span>
							</a>
						</li>
						<li>
							<a>Settings</a>
						</li>
						<li className="xs:hidden">
							<button className="justify-between" onClick={toggleTheme}>
								Toggle theme {isDarkTheme ? <FaSun size={16} /> : <FaMoon size={16} />}
							</button>
						</li>
						<li>
							<a>Logout</a>
						</li>
					</ul>
				</div>
				<button className="btn btn-ghost btn-circle hidden xs:inline-flex" onClick={toggleTheme}>
					{isDarkTheme ? <FaSun size={24} /> : <FaMoon size={24} />}
				</button>
			</div>
		</div>
	)
}
