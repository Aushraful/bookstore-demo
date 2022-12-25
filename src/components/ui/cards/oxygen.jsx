// import { ImagePlaceholder } from '@/assets/placeholders/image.svg';
import { ImagePlaceholder } from '@/lib/placeholders';
import Image from 'next/image';
import Link from 'next/link';

export default function Oxygen(content) {
	
	return (
		<article className="w-full h-full p-0 m-0 bg-white dark:bg-gray-700 shadow border hover:scale-105 duration-300 group">
			<Link href={`/book/${content.content.isbn}`} className="w-auto">
				<Image
					alt={content.content.title}
					src={
						content.content.thumbnailUrl ?? ImagePlaceholder
					}
					layout="responsive"
					width={200}
					height={200}
					className="content-image border-b m-0"
				/>
			</Link>
			<header className="card-body">
				<h1 className="text-sm text-center m-0 p-3 group-hover:text-orange-500">
					{content.content.title.length > 20 ? 
						`${content.content.title.substring(0, 20)}...` : content.content.title
					}
				</h1>
			</header>
		</article>
	)
}