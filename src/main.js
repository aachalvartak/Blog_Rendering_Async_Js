import { data } from "./data.js";
import { blogImage } from "./components/blogImage.js";
import { blogContent } from "./components/blogContent.js";
import { relatedLinks } from "./components/relatedLinks.js";
window.onload = () => {
  //Start DOM MAnipulation here
  const blogDiv = document.getElementById("root");

  data.then((blogs) => {
    const h2 = document.createElement("h2");
    h2.classList.add("myBlog");
    h2.innerHTML = "My Blog";
    blogDiv.appendChild(h2);

    const blogImageDiv = blogImage(blogs[0].imageUrl);
    blogDiv.appendChild(blogImageDiv);
    blogDiv.appendChild(
      blogContent(blogs[0].title, blogs[0].author, blogs[0].content)
    );

    const asideDiv = document.getElementById("related-links");
    asideDiv.appendChild(relatedLinks(blogs[0].links));
  });
};
