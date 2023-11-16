import React from "react";
import { List,Grid,Header,Image} from "semantic-ui-react";

const ArticleList = (props) => {
  return (
    <List divided style={{ maxWidth: 900, margin: "0 auto" }}>
      {props.articles.map((article) => (
        <ArticleItem article={article} key={article.title + article.index} />
      ))}
    </List>
  );
};
const ArticleItem = (props) => {
  const { article } = props;
  return (
    <List.Item style={{ padding: 10 }}>
      <Grid>
        <Grid.Column
          width={11}
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "flex-start",
          }}
        >
          <Header as="h3">{article.title}</Header>
          <List.Description style={{ margin: "20px 0" }}>
            {article.description}
          </List.Description>
          <List bulleted horizontal>
            <List.Item>
              <a href={article.url}>{article.source.name}</a>
            </List.Item>
            <List.Item>{article.publishedAt.split("T")[0]}</List.Item>
          </List>
        </Grid.Column>
        <Grid.Column width={4}>
          <Image style={{width: '960px', height: 'auto'}}  src={article.urlToImage} />
        </Grid.Column>
      </Grid>
    </List.Item>
  );
};

export default ArticleList;