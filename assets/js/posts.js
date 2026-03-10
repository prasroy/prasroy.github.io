const POSTS = [
  {
    title: "Welcome to My Blog",
    date: "2026-03-10",
    readTime: "4 min read",
    summary:
      "A quick intro to what I will be writing about: tech, productivity, and lessons from real projects.",
    url: "../posts/welcome-to-my-blog.html"
  },
  {
    title: "What I Am Learning in 2026",
    date: "2026-03-10",
    readTime: "5 min read",
    summary:
      "An evolving list of focus areas and practical frameworks I am using to improve every month.",
    url: "../posts/what-i-am-learning-in-2026.html"
  },
  {
    title: "How I Structure Side Projects",
    date: "2026-03-10",
    readTime: "6 min read",
    summary:
      "A simple model for picking ideas, shipping quickly, and documenting progress in public.",
    url: "../posts/how-i-structure-side-projects.html"
  }
];

function formatDate(isoDate) {
  return new Date(isoDate).toLocaleDateString("en-US", {
    month: "short",
    day: "numeric",
    year: "numeric"
  });
}

function normalizePostUrl(postUrl) {
  const inBlogFolder = window.location.pathname.includes("/blog/");
  if (inBlogFolder) {
    return postUrl;
  }
  return postUrl.replace("../", "");
}

function createPostCard(post) {
  const article = document.createElement("article");
  article.className = "post-card";

  article.innerHTML = `
    <p class="post-meta">${formatDate(post.date)} · ${post.readTime}</p>
    <h3>${post.title}</h3>
    <p>${post.summary}</p>
    <a href="${normalizePostUrl(post.url)}">Read post</a>
  `;

  return article;
}

function renderFeaturedPosts(containerId, count) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  POSTS.slice(0, count).forEach((post) => {
    container.appendChild(createPostCard(post));
  });
}

function renderAllPosts(containerId) {
  const container = document.getElementById(containerId);
  if (!container) {
    return;
  }

  POSTS.forEach((post) => {
    container.appendChild(createPostCard(post));
  });
}

function runRevealAnimation() {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("in-view");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.15 }
  );

  document.querySelectorAll(".reveal").forEach((node) => observer.observe(node));
}
