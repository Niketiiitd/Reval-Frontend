"use client";

import React, { useState, useEffect } from "react";
import { Card, CardContent, CardFooter } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
axios.defaults
import axios from "axios";

const SinglePost = () => {
  const { id } = useParams();
  const router = useRouter();

  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [comments, setComments] = useState([]);
  const [likes, setLikes] = useState(0);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  console.log(id)
  // Fetch post data
  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
  
      try {
        setLoading(true);
        const { data } = await axios.get(`http://localhost:8000/api/v1/post/67a7750c8ebf9b18df04d71f`);
        console.log(data)
        setPost(data);
        console.log(data)
        setComments(data.comments || []);
        setLikes(data.likes || 0);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };
  
    fetchPost();
  }, [id]);
  const handleCommentSubmit = async (e) => {
    e.preventDefault();
    if (!comment.trim()) return;

    try {
      const { data: newComment } = await axios.post(`/api/v1/posts/${id}/comments`, {
        text: comment,
      });

      setComments((prev) => [...prev, newComment]);
      setComment("");
    } catch (err) {
      console.error("Error adding comment:", err);
      alert(err.response?.data?.message || "Failed to add comment. Please try again.");
    }
  };

  const handleLike = async () => {
    try {
      const { data } = await axios.post(`/api/v1/posts/${id}/like`);
      setLikes(data.likes);
    } catch (err) {
      console.error("Error liking post:", err);
      alert(err.response?.data?.message || "Failed to like post. Please try again.");
    }
  };

  if (loading) {
    return <div className="w-full max-w-4xl mx-auto p-4">Loading...</div>;
  }

  if (error) {
    return <div className="w-full max-w-4xl mx-auto p-4">Error: {error}</div>;
  }

  if (!post) {
    return <div className="w-full max-w-4xl mx-auto p-4">Post not found</div>;
  }

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Button variant="ghost" className="mb-4" onClick={() => router.back()}>
        Back to Posts
      </Button>

      <Card className="w-full max-w-3xl mx-auto mb-8 p-4">
        <div className="flex items-center space-x-4">
          <img
            src={post.author?.avatar || "/api/placeholder/32/32"}
            alt="Author"
            className="w-8 h-8 rounded-full"
          />
          <div className="flex flex-col">
            <span className="font-semibold text-lg text-gray-800">
              {post.author?.name || "Anonymous User"}
            </span>
          </div>
          <span className="text-sm text-gray-500">
            {post.createdAt ? new Date(post.createdAt).toLocaleDateString() : ""}
          </span>
        </div>

        <CardContent className="border-2 border-white rounded-lg mt-4">
          {post.image && (
            <img
              src={post.image}
              alt="Post"
              className="w-full h-auto rounded-md mt-4 mb-8"
            />
          )}
          <p className="text-gray-800 text-lg font-primary">{post.content}</p>
        </CardContent>

        <CardFooter className="flex justify-between items-center">
          <Button
            onClick={handleLike}
            className="bg-dark text-white font-semibold"
            size="sm"
          >
            {likes} Like
          </Button>
        </CardFooter>
      </Card>

      <div className="space-y-4 mb-8">
        <h2 className="text-2xl font-semibold text-gray-800">Comments</h2>

        <form onSubmit={handleCommentSubmit} className="flex items-center space-x-2">
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full border-gray-300 rounded-md p-2 focus:outline-none focus:ring-2 focus:ring-dark focus:border-dark"
            rows={3}
          />
          <Button type="submit" size="sm" className="px-4 py-2 bg-extraDark text-white text-md">
            Comment
          </Button>
        </form>

        <div className="space-y-4">
          {comments.length > 0 ? (
            comments.map((comment, index) => (
              <div key={index}>
                <div className="flex items-start space-x-4 py-4">
                  <img
                    src={comment.user?.avatar || "/api/placeholder/32/32"}
                    alt="User Avatar"
                    className="w-8 h-8 rounded-full"
                  />
                  <div>
                    <span className="font-semibold text-gray-800">
                      {comment.user?.name || "Anonymous User"}
                    </span>
                    <p className="text-gray-900">{comment.text}</p>
                  </div>
                </div>
                {index < comments.length - 1 && <Separator />}
              </div>
            ))
          ) : (
            <p className="text-gray-900">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;