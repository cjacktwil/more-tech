async function editFormHandler(event) {
  event.preventDefault();
  const id = window.location.toString().split('/')[
    window.location.toString().split('/').length - 1
  ];
  const title = document.querySelector('#edit_post_title').value.trim();
  console.log(title);
  const post_text = document.querySelector('#edit_post_text').value.trim();

  if (title && post_text) {
    const response = await fetch(`/api/posts/${id}`, {
      method: 'PUT',
      body: JSON.stringify({
        title,
        post_text
      }),
      headers: {
        'Content-Type': 'application/json'
      }
    });

    if (response.ok) {
      document.location.replace('/dashboard');
    } else {
      alert(response.statusText);
    }

  }
}

document.querySelector('.edit-post-form').addEventListener('submit', editFormHandler);