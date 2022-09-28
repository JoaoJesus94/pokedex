import { useSwitchTheme } from '../../hooks/switchTheme'
import Image from 'next/image'
import Link from 'next/link'
import { FaBars, FaMoon, FaSearch, FaSun } from 'react-icons/fa'

export function Navbar() {
	const { isDarkTheme, toggleTheme } = useSwitchTheme()

	return (
		<nav className="navbar bg-base-300 h-20">
			<div className="flex-none">
				<label htmlFor="my-drawer" className="btn btn-square btn-ghost lg:hidden">
					<FaBars size={24} />
				</label>
			</div>
			<div className="flex-1">
				<Link href="/">
					<a className="btn btn-ghost normal-case text-xl gap-2">
						<Image src="/logo.png" alt="Vercel Logo" width={32} height={32} />
						Pokedex
					</a>
				</Link>
			</div>
			<div className="flex-none gap-2">
				<div className="form-control hidden sm:block">
					<div className="input-group">
						<input type="text" placeholder="Search…" className="input input-bordered" />
						<button className="btn btn-square">
							<FaSearch size={24} />
						</button>
					</div>
				</div>
				<div className="dropdown dropdown-end">
					<label tabIndex={0} className="btn btn-ghost btn-circle avatar">
						<div className="w-10 rounded-full">
							<Image src="/avatar.jpg" alt="avatar" width={80} height={80} />
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
		</nav>
	)
}
