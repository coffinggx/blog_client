// src/components/Sidebar.jsx
import { Link } from 'react-router-dom';
import blogsData from '../api/blogs';
import BlogCard from './BlogCard';

export default function Sidebar() {
  return (
    <aside className="md:w-72 hidden lg:block   w-48 bg-gray-100  fixed top-[70px] right-0 md:right-5 h-screen overflow-y-auto p-4">
      <ul className=" flex flex-col gap-4">
        {blogsData.length > 0 ? (
          blogsData.map((blog) => (
            <li key={blog.id} className="py-2">
              <Link to={`/blog/${blog.id}`} className="block">
                <h3 className="text-lg font-semibold">{blog.title}</h3>
                <p className="text-gray-700">{blog.metatitle}</p>
              </Link>
            </li>
          ))
        ) : (
          <p>Loading...</p>
        )}
      </ul>
    </aside>
  );
}
