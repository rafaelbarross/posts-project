import React, { Component } from "react";
import { GlobalStyle, Container, NoPosts, SearchContainer, ButtonContainer } from "../../../global/globalStyle";
import { loadPosts } from "../../../utils/load-posts";
import { PostsText } from "../../templates/Post/home";
import { ButtonLoad } from "../../atoms/ButtonPosts/component";
import { InputText } from "../../Input/component";

export class App extends Component {
  state = {
    posts: [], 
    allPosts: [],
    page: 0,
    postsPerPage: 6,
    searchValue: '',
  };

  async componentDidMount() {
    await this.loadPosts();
  }

  loadPosts = async () => {
    const { page, postsPerPage } = this.state;
    const postsAndPhotos = await loadPosts();
    this.setState({
      posts: postsAndPhotos.slice(page, postsPerPage),
      allPosts: postsAndPhotos,
    });
  }

  loadMorePosts = () => {
    const {
      page,
      postsPerPage,
      allPosts,
      posts,
    } = this.state;
    const nextPage = page + postsPerPage;
    const nextPosts = allPosts.slice(nextPage, nextPage + postsPerPage);
    posts.push(...nextPosts);
    this.setState({ posts, page: nextPage });
  }

  HandleChange = (e) => {
    const { value } = e.target;
    this.setState({ searchValue: value })

  }

  render() {
    const { posts, page, postsPerPage, allPosts, searchValue } = this.state;
    const noMorePosts = page + postsPerPage >= allPosts.length;

    const filteredPosts = !!searchValue ?
     allPosts.filter(post => {
      return post.title.toLowerCase().includes(
        searchValue.toLowerCase()

      );
     })
     : posts;

    return (
      <Container>
        <GlobalStyle />
        
        <SearchContainer>
          <InputText searchValue={searchValue} HandleChange={this.HandleChange}/>
        </SearchContainer>
        
        {filteredPosts.length > 0 &&(
          <PostsText posts={filteredPosts} />
        )}

        {filteredPosts.length === 0 && (
          <NoPosts>There are no posts! 😢</NoPosts>
        )}
        
        <ButtonContainer>
          {!searchValue && (
            <ButtonLoad
              text="Load more posts"
              onClick={this.loadMorePosts}
              disabled={noMorePosts}
            />
          )}
        </ButtonContainer>
      </Container>
    );
  }
}