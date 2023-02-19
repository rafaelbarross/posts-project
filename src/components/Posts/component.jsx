import { PostCard } from "../PostCard/component";
import { Posts } from "../../styles/style";

export const PostsText= ({ posts }) => {
    return (
        <Posts>
            {posts.map(post => (
                <PostCard
                    key={post.id}
                    post={post}
                />
            ))}
        </Posts>
    );
}