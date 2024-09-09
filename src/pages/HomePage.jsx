import blogsData from "../api/blogs";
import BlogCard from "../components/BlogCard";

export default function HomePage() {
  return (
    <div className="flex justify-center px-5 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-8 lg:gap-x-8 max-w-3xl lg:max-w-5xl">
        {blogsData.length > 0 ? (
          blogsData.map((blog) => (
            <BlogCard key={blog.id} {...blog} />
          ))
        ) : (
          <p>Loading...</p>
        )}
      </div>
    </div>
  );
}
