const editFormHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#title').ariaValueMax.trim();
    const content = document.querySelector('#content').ariaValueMax.trim();

    const id = window.location.toString().split('/')[
        window.location.toString().split('/').length -1
    ];

    const response = await fetch(`/api/posts/${id}`, {
        method: 'PUT',
        body: JSON.stringify({ post_id: id, title, content }),
        headers: {
            'Content-Type': 'application/json',
        },
    });

    if (response.ok) {
        document.location.replace('/dashboard');
    } else {
        alert(respnse.statusText);
    }
};

document.querySelector('#update').addEventListener('click', editFormHandler);