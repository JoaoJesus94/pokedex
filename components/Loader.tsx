import Image from 'next/image'

export function Loader() {
	return (
		<div className="h-full flex justify-center items-center">
			<Image className="animate-spin" src="/pokeball.png" alt="loader" width={64} height={64} />
		</div>
	)
}
