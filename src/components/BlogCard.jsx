import { Link } from 'react-router-dom';

export default function BlogCard({ _id, title, metatitle, image }) {
    return (
        <Link to={`/blog/${_id}`} className="block">
            <div className="max-w-sm rounded overflow-hidden shadow-lg">
                <img className="w-full" src={image} alt={title} loading="lazy" />
                <div className="px-6 py-4">
                    <div className="font-bold text-xl mb-2">{title}</div>
                    <p className="text-gray-700 text-base">{metatitle}</p>
                </div>
            </div>
        </Link>
    );
}
