
async function createPostHandler(event) {
    event.preventDefault();
  
    const title = document.querySelector("#post-title-input").value.trim();
    const content = document.querySelector("#post-content-textarea").value.trim();
  
    if (title && content) {
      const response = await fetch("/api/posts", {
        method: "POST",
        body: JSON.stringify({
          title,
          content,
        }),
        headers: { "Content-Type": "application/json" },
      });
  
      if (response.ok) {
        document.location.replace("../");
      } else {
        alert(response.statusText);
      }
    }
  }

document
  .querySelector("#add-post-form")
  .addEventListener("submit", createPostHandler);