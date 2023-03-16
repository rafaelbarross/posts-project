import { PostCard } from "../../organisms/PostCard/component";
import { Posts } from "./style";

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
    )
};
