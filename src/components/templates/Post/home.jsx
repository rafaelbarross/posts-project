import { PostCard } from "../../organisms/PostCard/component";
import { Posts } from "../../../global/globalStyle";

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
