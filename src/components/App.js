import React from "react";
import Header from './Header';
import About from "./About";
import ArticleList from "./ArticleList";

function App() {
  const blogName = "Kwelingual";
  const aboutText = "Welcome to Kwe's blog";
  const image = "data:image/png;base64,..."; // truncated for brevity
  const posts = [
    {title: "Post 1", date: "February 2, 2022", previewHeader: "This is a preview of post 1", readingTime: 3},
    {title: "Post 2", date: "March 3, 2022", previewHeader: "This is a preview of post 2", readingTime: 7},
    {title: "Post 3", date: "April 1, 2022", previewHeader: "This is a preview of post 3", readingTime: 35},
  ];

  const getReadingTimeText = (readingTime) => {
    if (readingTime < 30) {
      const coffeeCups = Math.ceil(readingTime / 5);
      return `☕️${coffeeCups > 1 ? '☕️'.repeat(coffeeCups - 1) : ''} ${readingTime} min read`;
    } else {
      const bentoBoxes = Math.ceil(readingTime / 10);
      return `🍱${bentoBoxes > 1 ? '🍱'.repeat(bentoBoxes - 1) : ''} ${readingTime} min read`;
    }
  };

  return (
    <div>
      <Header name={blogName} />
      <About image={image} about={aboutText} />
      <ArticleList posts={posts.map((post) => ({ ...post, readingTimeText: getReadingTimeText(post.readingTime) }))} />
    </div>
  );
}

export default App;