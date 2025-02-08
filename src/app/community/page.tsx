"use client"
import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Heart, MessageCircle, Share } from "lucide-react";
import { Input } from "@/components/ui/input";
import api from "../utils/api";
import axios from "axios"

interface CommentProps {
  text: string;
  username: string;
}

interface PostProps {
  id: string;
  author: string;
  image: string;
  content: string;
  likes: string[];
  comments: CommentProps[];
  username: string;
  onLike: () => void;
  onAddComment: (comment: string) => void;
}

const Post: React.FC<PostProps> = ({
  id,
  author,
  image,
  content,
  likes,
  comments,
  username,
  onLike,
  onAddComment,
}) => {
  const [newComment, setNewComment] = useState("");
  console.log(comments);
  
  return (
    <Card className="p-4">
      <CardContent>
        <h3 className="font-bold text-lg">@{username}</h3>
        <img src={image} alt="Post" className="w-full rounded-lg my-2" />
        <p>{content}</p>
        <div className="flex gap-4 mt-2">
          <Button variant="ghost" onClick={onLike} className="flex items-center gap-2">
            <Heart className="w-5 h-5 text-red-500" />
            {likes.length}
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <MessageCircle className="w-5 h-5" />
            {comments.length}
          </Button>
          <Button variant="ghost" className="flex items-center gap-2">
            <Share className="w-5 h-5" />
          </Button>
        </div>
        <div className="mt-4">
          {comments.map((comment, index) => (
            <p key={index} className="mt-2 text-sm text-gray-600">
                {/* {console.log(comment.username)} */}
              <strong>@{comment.username}:</strong> {comment.text}
            </p>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default function SustainableFeed() {
  const [posts, setPosts] = useState<PostProps[]>([]);

  useEffect(() => {
    const fetchPosts = async () => {
      try {
        const response = await api.get("/api/v1/post/"); // Replace with actual API endpoint
        const {data} = response
        console.log(data);
        
        const transformedPosts = data.map((post: any) => ({
          id: post._id,
          author: post.author.username,
          image: post.author.profilePicture || "default-profile.png",
          content: post.content,
          likes: post.likes,
          comments: post.comments.map((comment: any) => ({
            text: comment.text,
            username: comment.user.username,
          })),
          username: post.author.username,
        }));
        console.log(transformedPosts);
        
        setPosts(transformedPosts);
      } catch (error) {
        console.error("Failed to fetch posts", error);
      }
    };
    fetchPosts();
  }, []);

  const handleLike = async (id: string) => {
    try {
      const response = await api.post(`/api/v1/post/like-post/${id}`,{},{withCredentials:true})
      const updatedPost = response.data
      setPosts((prev) =>
        prev.map((post) =>
          post.id === id ? { ...post, likes: updatedPost.likes } : post
        )
      );
      console.log(updatedPost);
      
    } catch (error) {
      console.error("Error liking post:", error);
    }
  };

  const handleAddComment = async (id: string, comment: string) => {
    if (!comment) return;
    try {
      const response = await api.post(`/api/v1/post/add-comment/${id}`, {text:comment},{withCredentials:true});
      const updatedPost = response.data;
      setPosts((prev) =>
        prev.map((post) =>
          post.id === id
            ? { ...post, comments: updatedPost.comments.map((c: any) => ({ text: c.text, username: c.user.username })) }
            : post
        )
      );
    } catch (error) {
      console.error("Error adding comment:", error);
    }
  };

  return (
    <div className="max-w-xl mx-auto space-y-6 py-6">
      {posts.map((post) => (
        <Post
          key={post.id}
          {...post}
          onLike={() => handleLike(post.id)}
          onAddComment={(comment) => handleAddComment(post.id, comment)}
        />
      ))}
    </div>
  );
}
