import { blogs } from "./data.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";
window.onload = () => {
  //Start DOM MAnipulation here
  const blogDiv = document.getElementById("root");
  const blogImageDiv = blogImage(blogs[0].imageUrl);
  console.log(blogImageDiv);
  blogDiv.appendChild(blogImageDiv);
  // blogDiv.appendChild(
  // blogImage("https://cdn.fs.teachablecdn.com/JGo66OJORkWTyjoNbVxQ")
  // );
  blogDiv.appendChild(
    blogContent(blogs[0].title, blogs[0].author, blogs[0].content)
  );

  const asideDiv = document.getElementById("related-links");
  asideDiv.appendChild(relatedLinks(blogs[0].links));
};

//clear content from root div and aside div
