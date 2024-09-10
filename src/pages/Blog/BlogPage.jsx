import { useParams } from "react-router-dom";
import BlogLayout from "./BlogLayout";
import { useEffect, useState } from "react";
import axios from "axios";
import DOMPurify from "dompurify";

export default function BlogPage() {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios.get("http://localhost:8000/api/blogs");
        console.log("Data fetched:", response.data); // Debug
        setData(response.data);
      } catch (error) {
        console.error("Error fetching data:", error); // Debug
        setError("Failed to fetch data");
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  const { id } = useParams();
  console.log("URL parameters:", useParams()); // Debug

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;

  const blog = data.find((blog) => blog._id === id);
  console.log("Current blog:", blog); // Debug

  if (!blog) {
    return <div>Blog not found</div>;
  }

  return (
    <BlogLayout>
      <div className="max-w-3xl mx-auto pl-5 lg:pr-48 pr-5 pt-16">
        <h1 className="text-3xl font-bold mb-4">{blog.title}</h1>
        <img
          className="lg:w-full md:w-full mb-4"
          src={blog.image}
          alt={blog.title}
          loading="lazy"
        />
        <div
          className="blog-content"
          dangerouslySetInnerHTML={{ __html: DOMPurify.sanitize(blog.content) }}
        />
      </div>
    </BlogLayout>
  );
}
