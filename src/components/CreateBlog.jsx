import React, { useState } from "react";
import ReactQuill from "react-quill";
import "react-quill/dist/quill.snow.css";
import axios from "axios";

const Font = ReactQuill.Quill.import("formats/font");
Font.whitelist = ["Roboto", "Montserrat", "Lato", "Poppins", "Nunito"];
ReactQuill.Quill.register(Font, true);

const toolbarOptions = [
  [{ font: ["Roboto", "Montserrat", "Lato", "Poppins", "Nunito"] }],
  [{ header: "1" }, { header: "2" }],
  [{ list: "ordered" }, { list: "bullet" }],
  ["bold", "italic", "underline", "strike"],
  [{ color: [] }, { background: [] }],
  [{ align: [] }],
  ["link", "video", "code"],
  ["clean"],
];

const CreateBlog = () => {
  const [title, setTitle] = useState("");
  const [metaTitle, setMetaTitle] = useState("");
  const [image, setImage] = useState(null);
  const [content, setContent] = useState("");
  const [status, setStatus] = useState("");
  const [imageUrl, setImageUrl] = useState("");

  const handleImageChange = (e) => {
    setImage(e.target.files[0]);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus("");
    setImageUrl("");

    const formData = new FormData();
    formData.append('title', title);
    formData.append('metaTitle', metaTitle);
    formData.append('content', content);
    if (image) {
      formData.append('image', image);
    }

    // Log FormData entries
    for (let [key, value] of formData.entries()) {
      console.log(`${key}:`, value);
    }

    try {
      const response = await axios.post("http://localhost:8000/api/blogs", formData, {
        headers: {
          'Content-Type': 'multipart/form-data'
        }
      });

      console.log("Server response:", response.data);

      if (response.data && response.data.image) {
        setImageUrl(response.data.image);
        setStatus("Blog created successfully");
      } else if (response.data && response.data.message) {
        setStatus(response.data.message);
      } else {
        setStatus("Blog created, but image upload may have failed");
      }
    } catch (error) {
      console.error("Error details:", error);
      if (error.response && error.response.data && error.response.data.message) {
        setStatus(`Error: ${error.response.data.message}`);
      } else if (error.message) {
        setStatus(`Error: ${error.message}`);
      } else {
        setStatus("An unknown error occurred");
      }
    }
  };

  return (
    <div className="flex flex-col w-full max-w-md p-4 mx-auto bg-white rounded-lg shadow-lg">
      <h2 className="text-3xl font-bold">Create Blog</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-4">
          <label htmlFor="title" className="block text-gray-700">
            Title
          </label>
          <input
            type="text"
            id="title"
            name="title"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="metaTitle" className="block text-gray-700">
            Meta Title
          </label>
          <input
            type="text"
            id="metaTitle"
            name="metaTitle"
            value={metaTitle}
            onChange={(e) => setMetaTitle(e.target.value)}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="image" className="block text-gray-700">
            Image
          </label>
          <input
            type="file"
            id="image"
            name="image"
            onChange={handleImageChange}
            accept="image/*"
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
          />
        </div>
        <div className="mb-4">
          <label htmlFor="content" className="block text-gray-700">
            Content
          </label>
          <ReactQuill
            theme="snow"
            modules={{ toolbar: toolbarOptions }}
            value={content}
            onChange={setContent}
            className="w-full px-4 py-2 border-2 border-gray-300 rounded-md"
          />
        </div>
        <button
          type="submit"
          className="w-full px-4 py-2 bg-blue-500 hover:bg-blue-700 text-white font-bold rounded-md"
        >
          Submit
        </button>
        {status && (
          <p className={`mt-2 text-sm ${status.startsWith("Error") ? "text-red-600" : "text-green-600"}`}>
            {status}
          </p>
        )}
        {imageUrl && (
          <div className="mt-4">
            <p className="text-sm text-gray-600">Uploaded Image:</p>
            <img src={imageUrl} alt="Uploaded blog image" className="mt-2 max-w-full h-auto" />
          </div>
        )}
      </form>
    </div>
  );
};

export default CreateBlog;
