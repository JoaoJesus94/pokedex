import Link from 'next/link'
import { FaTimes } from 'react-icons/fa'

import { Navbar } from '@/components/layout/navbar'

export function Drawer({ children }: { children: React.ReactNode }) {
	return (
		<div className="drawer drawer-mobile">
			<input id="my-drawer" type="checkbox" className="drawer-toggle" />
			<div className="drawer-content flex flex-col">
				<Navbar />
				<main className="flex-1 p-6">{children}</main>
			</div>
			<div className="drawer-side">
				<label htmlFor="my-drawer" className="drawer-overlay" />
				<ul className="menu p-4 overflow-y-auto w-80 bg-base-300 text-base-content">
					<li className="items-end lg:hidden">
						<label htmlFor="my-drawer" className="btn btn-square btn-ghost">
							<FaTimes size={24} />
						</label>
					</li>
					<li>
						<a>Sidebar Item 1</a>
					</li>
					<li>
						<a>Sidebar Item 2</a>
					</li>
				</ul>
			</div>
		</div>
	)
}
