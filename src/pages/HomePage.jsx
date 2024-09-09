import blogsData from "../api/blogs";
import BlogCard from "../components/BlogCard";

export default function HomePage() {


  return (
    <div className=" grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2  lg:gap-x-8 gap-y-4 gap-x-8 lg:grid-cols-3 lg:m-auto   lg:max-w-6xl md:max-w-4xl md:px-20 px-10 py-20">
      {blogsData.length > 0 ? (
        blogsData.map((blog) => (
          <BlogCard key={blog.id} {...blog} />
        ))
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}
