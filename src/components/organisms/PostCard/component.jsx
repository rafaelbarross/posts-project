import { Post, PostContent, ImagePost, Title, Paragraph } from "../../../global/globalStyle.js";

export const PostCard = ({ post }) => {
    return (
        <Post>
            <ImagePost src={post.cover} alt={post.title} />
            <PostContent>

                <Title>{post.title} {post.id}</Title>

                <Paragraph>{post.body}</Paragraph>

            </PostContent>
        </Post>
    );
}
