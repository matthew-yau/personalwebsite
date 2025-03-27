import React from "react";
import { PenLine } from "lucide-react";

const Blog = () => {
  // Placeholder blog post data
  const blogPosts = [
    {
      title: "Placeholder",
      description: "Description",
      href: "#",
    },
    {
      title: "Placeholder",
      description: "Description",
      href: "#",
    },
    {
      title: "Placeholder",
      description: "Description",
      href: "#",
    },
  ];

  return (
    <div className="px-4 sm:px-6 md:px-8 max-w-4xl mx-auto pb-16 pt-4">
      <div className="flex flex-row justify-center md:justify-start">
        <h1 className="flex items-center gap-2 font-bold py-2 mb-4 text-3xl text-center md:text-left">
          <PenLine className="text-blue-400" size={22} />
          Blog
        </h1>
      </div>

      <div className="space-y-6">
        {blogPosts.map((post, index) => (
          <a
            key={index}
            href={post.href}
            className="block p-4 bg-gray-800 rounded-lg hover:bg-gray-700 transition-colors shadow-md"
          >
            <h2 className="text-lg font-semibold text-white">{post.title}</h2>
            <p className="text-sm text-gray-400 mt-1">{post.description}</p>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Blog;
