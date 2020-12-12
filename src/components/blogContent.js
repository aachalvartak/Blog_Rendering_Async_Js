{
  /* <div class="blog-content">
    <h1>Title</h1>
    <p>Content</p>
</div>

<h2>BLOG HEADING</h2>
    <h5>Title description, Dec 7, 2017</h5>
    <p>Some text..</p>
    <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Dolor ipsum, pariatur, reiciendis necessitatibus officia ut dolorem minima placeat corrupti, at error officiis laborum sed illo facilis maxime consequuntur. Repellat dolore aspernatur, eveniet deserunt inventore optio temporibus nam, quidem esse sit nisi veritatis iste adipisci laboriosam in? Perspiciatis cupiditate aspernatur magnam ad ullam nobis corporis a quia assumenda minus optio dolor illum nulla, asperiores eligendi dicta repellat. Dolore id tempora asperiores itaque harum qui dolorem provident magni vero, nesciunt nobis sed earum vel cum animi voluptas neque veniam! Dolores in quo nostrum expedita nobis quis earum blanditiis, maxime placeat animi voluptatibus soluta necessitatibus quia cumque nulla quod enim eligendi quisquam. Maxime facere, praesentium officiis esse ea fuga odit quidem harum explicabo, molestiae quia nostrum reiciendis temporibus quaerat odio rerum tempora laboriosam eos eaque minus perferendis numquam velit! Repudiandae, harum minima cumque error voluptatem tempore repellendus corporis in quo facere, quisquam corrupti. Non doloremque eligendi qui cumque, sequi pariatur debitis voluptate recusandae corrupti. Iusto ex sapiente quos cum quis magnam dolores deserunt ab blanditiis minus ea ipsa, accusantium sit natus soluta at modi nobis. Veniam itaque illum fugiat hic asperiores? Porro corrupti modi reprehenderit voluptas beatae nobis nemo quibusdam tempore perspiciatis aspernatur.</p>
<br></br> */
}

export const blogContent = (title, author, text) => {
  const div = document.createElement("div");
  div.classList.add("blog-content");

  const h2 = document.createElement("h2");
  h2.innerHTML = title;

  const h3 = document.createElement("h3");
  h3.innerHTML = `Author : ` + author;

  const p = document.createElement("p");
  p.innerHTML = text;

  div.appendChild(h2);
  div.appendChild(h3);
  div.appendChild(p);

  return div;
};
