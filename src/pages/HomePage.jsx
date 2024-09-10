import { useEffect, useState } from "react";
import BlogCard from "../components/BlogCard";
import axios from "axios";

export default function HomePage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true); // Added loading state
  const [error, setError] = useState(null);     // Added error state

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs");
        setData(response.data);
        console.log(response.data);
      } catch (error) {
        console.error(error);
        setError('Failed to fetch blogs. Please try again later.');
      } finally {
        setLoading(false); // Ensure loading is false after fetch attempt
      }
    };

    fetchData();
  }, []); // Dependency array remains empty to run only once on mount

  if (loading) {
    return (
      <div className="flex justify-center px-5 py-20">
        <p>Loading blogs...</p>
      </div>
    );
  }

  if (error) {
    return (
      <div className="flex justify-center px-5 py-20">
        <p>{error}</p>
      </div>
    );
  }

  if (data.length === 0) {
    return (
      <div className="flex justify-center px-5 py-20">
        <p>No blogs available at the moment.</p>
      </div>
    );
  }

  return (
    <div className="flex justify-center px-5 py-20">
      <div className="grid grid-cols-1 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-y-4 md:gap-x-8 lg:gap-x-8 max-w-3xl lg:max-w-5xl">
        {data.map((blog) => (
          <BlogCard key={blog._id} {...blog} />
        ))}
      </div>
    </div>
  );
}
