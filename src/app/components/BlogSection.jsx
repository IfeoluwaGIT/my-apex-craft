'use client'

import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const BlogSection = () => {
  const [articles, setArticles] = useState([]);

  // Fetch articles from Reddit API
  useEffect(() => {
    const fetchArticles = async () => {
      try {
        const response = await fetch(
          "https://www.reddit.com/r/business/search.json?q=consulting&restrict_sr=1"
        );
        const data = await response.json();
        const posts = data.data.children.slice(0, 3).map((post) => ({
          title: post.data.title,
          url: `https://www.reddit.com${post.data.permalink}`,
          thumbnail: post.data.thumbnail.includes("http")
            ? post.data.thumbnail
            : "/placeholder-image.jpg",
          description:
            post.data.selftext.length > 100
              ? `${post.data.selftext.slice(0, 100)}...`
              : post.data.selftext,
        }));
        setArticles(posts);
      } catch (error) {
        console.error("Error fetching articles:", error);
      }
    };

    fetchArticles();
  }, []);

  return (
    <section className="px-6 py-16 bg-white">
      {/* Heading */}
      <h2 className="text-3xl font-bold text-center text-green-800 mb-12">
        Latest Insights
      </h2>

      {/* Blog Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        {articles.map((article, index) => (
          <div
            key={index}
            className="bg-gray-50 shadow-md rounded-lg overflow-hidden border border-gray-200"
          >
            <Image
              src={article.thumbnail}
              alt={article.title}
              width={80}
              height={80}
              className="h-48 w-full object-cover"
            />
            <div className="p-6">
              <h3 className="text-lg font-semibold text-green-700 mb-2">
                {article.title}
              </h3>
              <p className="text-gray-600 mb-4">{article.description}</p>
              <Link
                href={article.url}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-block bg-green-700 text-white px-4 py-2 rounded hover:bg-green-800"
              >
                Read More
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default BlogSection;
