import React from 'react';
//import '../../App.css';
import ArticleList from '../../NewsModule/ArticleList';
import {Header,Container} from 'semantic-ui-react'
import SearchBar from '../../NewsModule/SearchBar';
import { getArticles } from '../../NewsModule/api';

class news extends React.Component{
  state = {
    articles: [],
    searchTopic: "",
    totalResults: "",
    loading: false,
    apiError: "",
  };
  searchForTopic = async (topic) => {
    try {
      this.setState({ loading: true });
      const response = await getArticles(topic);
      this.setState({
        articles: response.articles,
        searchTopic: topic,
        totalResults: response.totalResults,
      });
    } catch (error) {
      this.setState({ apiError: "Could not find any articles" });
    }
    this.setState({ loading: false });
  };

  
  render() { 
    const {
      articles,
      apiError,
      loading,
      searchTopic,
      totalResults,
    } = this.state;
    return(
    <div>
    <Container>
        <Header as="h2" style={{ textAlign: "center", margin: 20} }>
          Search for a topic
        </Header>
        <SearchBar searchForTopic={this.searchForTopic} />
      
        {loading && (
          <p style={{ textAlign: "center" }}>Searching for articles...</p>
        )}
        {articles.length > 0 && (
          <Header as="h4" style={{ textAlign: "center", margin: 20 }}>
            Found {totalResults} articles on "{searchTopic}"
          </Header>
        )}
        {articles.length > 0 && <ArticleList articles={articles} />}
        {apiError && <p>Could not fetch any articles. Please try again.</p>}
      </Container>
  </div>
  );
  }
}

export default news;

// export default function Home() {
//   //getCollegeArticles();
//   return (
//     <>
//       <h1 className='home'>news</h1>
//     </>
//   );
// }
