import { Post } from "./post";
import { Comment } from "./comment";

export interface DialogData {
  post: Post;
  comments: Comment;
};
