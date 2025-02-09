"use client";

import React, { useState, useEffect } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Textarea } from "@/components/ui/textarea";
import { Separator } from "@/components/ui/separator";
import { useParams, useRouter } from "next/navigation";
import api from "@/app/utils/api";
import { ThumbsUp, ThumbsDown, MessageSquare } from "lucide-react";

const SinglePost = () => {
  const { id } = useParams();
  const router = useRouter();

  const [post, setPost] = useState(null);
  const [comment, setComment] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchPost = async () => {
      if (!id) return;
      try {
        setLoading(true);
        const { data } = await api.get(`/api/v1/post/${id}`);
        console.log(data);
        
        setPost(data);
      } catch (err) {
        setError(err.response?.data?.message || "Failed to fetch post");
      } finally {
        setLoading(false);
      }
    };

    fetchPost();
  }, [id]);

  const handleLike = async (id) => {
    try {
      const response = await api.post(`/api/v1/post/like-post/${id}`, {}, { withCredentials: true });
      const updatedPost = response.data;
      setPost((prev) => ({ ...prev, likes: updatedPost.likes }));
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleAddComment = async (id, comment) => {
    if (!comment.trim()) return;
    try {
      const response = await api.post(`/api/v1/post/add-comment/${id}`, { text: comment }, { withCredentials: true });
      const updatedPost = response.data;
      setPost((prev) => ({
        ...prev,
        comments: updatedPost.comments.map((c) => ({ text: c.text, username: c.user.username })),
      }));
      setComment("");
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  if (loading) return <div className="w-full max-w-4xl mx-auto p-4">Loading...</div>;
  if (error) return <div className="w-full max-w-4xl mx-auto p-4">Error: {error}</div>;
  if (!post) return <div className="w-full max-w-4xl mx-auto p-4">Post not found</div>;

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <Button 
        variant="ghost" 
        className="mb-6 text-gray-800 flex items-center gap-2 hover:bg-gray-100"
        onClick={() => router.back()}
      >
        <span className="text-lg">←</span> Back to Posts
      </Button>

      <Card className="w-full bg-white rounded-lg shadow-sm mb-8">
        <div className="p-6">
          <div className="flex items-center gap-3 mb-4">
            <img
              src={post.author?.avatar || "/api/placeholder/40/40"}
              alt="Author"
              className="w-10 h-10 rounded-full bg-gray-200"
            />
            <div>
              <h2 className="text-2xl font-bold mb-1">{post.title || "Understanding React Server Components"}</h2>
              <div className="flex items-center text-gray-600">
                <span>Posted by {post.author?.name || "Anonymous"}</span>
                <span className="mx-2">•</span>
                <span>{post.createdAt ? new Date(post.createdAt).toLocaleDateString() : "2 hours ago"}</span>
              </div>
            </div>
          </div>

          <p className="text-gray-800 text-lg mb-6">
            {post.content || "React Server Components are a new feature that allows components to be rendered on the server..."}
          </p>

          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Button 
                variant="ghost" 
                className="flex items-center gap-1"
                onClick={() => handleLike(id)}
              >
                <ThumbsUp className="w-5 h-5" />
                <span>{post.likes?.length || 42}</span>
              </Button>
              <Button variant="ghost" className="flex items-center gap-1">
                {/* <ThumbsDown className="w-5 h-5" /> */}
                {/* <span>8</span> */}
              </Button>
            </div>
            <div className="flex items-center gap-1">
              <MessageSquare className="w-5 h-5" />
              <span>{post.comments?.length || 2} comments</span>
            </div>
          </div>
        </div>
      </Card>

      <div className="mb-8">
        <h3 className="text-2xl font-bold mb-6">Comments</h3>
        
        <form 
          onSubmit={(e) => {
            e.preventDefault();
            handleAddComment(id, comment);
          }}
          className="mb-8"
        >
          <Textarea
            value={comment}
            onChange={(e) => setComment(e.target.value)}
            placeholder="Add a comment..."
            className="w-full mb-4 min-h-[100px]"
          />
          <Button type="submit" className="w-full sm:w-auto bg-primary-content">
            Comment
          </Button>
        </form>

        <div className="space-y-4">
          {post.comments && post.comments.length > 0 ? (
            post.comments.map((comment, index) => (
              <div key={index}>
                <div className="flex items-start gap-3 py-4">
                  <img
                    src="/api/placeholder/40/40"
                    alt="User Avatar"
                    className="w-10 h-10 rounded-full bg-gray-200"
                  />
                  <div>
                    <div className="flex items-center gap-2 mb-1">
                      <span className="font-semibold">{comment.user.username || "John Doe"}</span>
                      <span className="text-gray-500">1 hour ago</span>
                    </div>
                    <p className="text-gray-800">{comment.text || "This is really helpful, thanks for sharing!"}</p>
                  </div>
                </div>
                {index < post.comments.length - 1 && (
                  <Separator className="my-2" />
                )}
              </div>
            ))
          ) : (
            <p className="text-gray-600">No comments yet. Be the first to comment!</p>
          )}
        </div>
      </div>
    </div>
  );
};

export default SinglePost;