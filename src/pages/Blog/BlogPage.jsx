import { useParams } from 'react-router-dom';
import blogsData from '../../api/blogs';
import BlogLayout from './BlogLayout';
export default function BlogPage() {
  const { id } = useParams();
  console.log('URL parameter id:', id); 

  const blog = blogsData.find(blog => blog.id === parseInt(id, 10));

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <BlogLayout>
      <div className="max-w-3xl  mx-auto  pl-5 lg:pr-48 pr-5  pt-16">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img className=" lg:w-full md:w-full mb-4" src={blog.imageUrl} alt={blog.title} loading="lazy" />
        <p className="text-gray-800 text-lg">{blog.description}</p>
      </div>
    </BlogLayout>
  );
}
