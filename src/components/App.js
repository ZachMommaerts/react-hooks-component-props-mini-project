import React from "react";
import blogData from "../data/blog";
import Header from './Header';
import About from './About';
import ArticleList from './ArticleList';

console.log(blogData);

function App() {
  return (
    <div className="App">
      <Header 
        name = 'Underreacted'
      />
      <About
        about = 'This blog was created so I could pass this test'
        image = 'https://images.dog.ceo/breeds/clumber/n02101556_7440.jpg' 
      />
      <ArticleList
         posts = {blogData.posts}
      />
    </div>
  );
}

export default App;
