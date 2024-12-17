const commentIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
    <path stroke-linecap="round" stroke-linejoin="round" d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
</svg>`
const viewIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
  <path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
</svg>
`
const clockIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M12 6v6h4.5m4.5 0a9 9 0 1 1-18 0 9 9 0 0 1 18 0Z" />
</svg>
`
const messageIcon = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M21.75 9v.906a2.25 2.25 0 0 1-1.183 1.981l-6.478 3.488M2.25 9v.906a2.25 2.25 0 0 0 1.183 1.981l6.478 3.488m8.839 2.51-4.66-2.51m0 0-1.023-.55a2.25 2.25 0 0 0-2.134 0l-1.022.55m0 0-4.661 2.51m16.5 1.615a2.25 2.25 0 0 1-2.25 2.25h-15a2.25 2.25 0 0 1-2.25-2.25V8.844a2.25 2.25 0 0 1 1.183-1.981l7.5-4.039a2.25 2.25 0 0 1 2.134 0l7.5 4.039a2.25 2.25 0 0 1 1.183 1.98V19.5Z" />
</svg>
`
const calendar = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" class="size-6">
  <path stroke-linecap="round" stroke-linejoin="round" d="M6.75 3v2.25M17.25 3v2.25M3 18.75V7.5a2.25 2.25 0 0 1 2.25-2.25h13.5A2.25 2.25 0 0 1 21 7.5v11.25m-18 0A2.25 2.25 0 0 0 5.25 21h13.5A2.25 2.25 0 0 0 21 18.75m-18 0v-7.5A2.25 2.25 0 0 1 5.25 9h13.5A2.25 2.25 0 0 1 21 11.25v7.5m-9-6h.008v.008H12v-.008ZM12 15h.008v.008H12V15Zm0 2.25h.008v.008H12v-.008ZM9.75 15h.008v.008H9.75V15Zm0 2.25h.008v.008H9.75v-.008ZM7.5 15h.008v.008H7.5V15Zm0 2.25h.008v.008H7.5v-.008Zm6.75-4.5h.008v.008h-.008v-.008Zm0 2.25h.008v.008h-.008V15Zm0 2.25h.008v.008h-.008v-.008Zm2.25-4.5h.008v.008H16.5v-.008Zm0 2.25h.008v.008H16.5V15Z" />
</svg>
`

const markReadList = [];

/* All post data load and*/
const loadPostData = async (props) => {
    const searchData = `https://openapi.programming-hero.com/api/retro-forum/posts?category=${props}`;
    const allPostsData = `https://openapi.programming-hero.com/api/retro-forum/posts`;

    const loadData = props ? searchData : allPostsData;
    const res = await fetch(loadData);
    const data = await res.json();

    displayAllPost(data.posts);
}

/*To Display all post data */
const displayAllPost = (posts) => {
    const allPost = document.getElementById('all-post');
    allPost.innerHTML = '';
    posts.forEach(post => {
        const activeStatus = post.isActive === true ? 'badge-error' : 'badge-success';
        const div = document.createElement('div');
        div.innerHTML = `
            <div class="card card-side items-center flex-col md:flex-row bg-base-100 shadow-xl mt-4">           
                <div class="indicator mx-auto md:ml-8 ">
                    <span class="indicator-item badge ${activeStatus}"></span>
                    <div class="bg-base-300 grid h-32 w-32 place-items-center">
                        <img src="${post.image}" />
                    </div>
                </div>
                <div class="card-body ">
                    <div class="flex gap-4">
                        <h2 class="font-bold">#${post.category}</h2>
                        <h2 class="font-bold">Author: ${post.author.name}</h2>
                    </div>
                    <h2 class="card-title">${post.title}</h2>
                    <p>${post.description}</p>
                    <span class="border-dashed border my-4"></span>
                   <div class="flex gap-4">
                        <h2 class="flex gap-2">${commentIcon} ${post.comment_count}</h2>
                        <h2 class="flex gap-2">${viewIcon} ${post.view_count}</h2>
                        <h2 class="flex gap-2">${clockIcon} ${post.posted_time}</h2>
                   </div>
                    <div class="card-actions justify-end">
                        <button onclick="postSeeBtn('${post.id}')" class="btn btn-ghost rounded-full">${messageIcon}</button>
                    </div>
                </div>
            </div>
        `;
        allPost.appendChild(div);
    });
}

const displayLatestPost = async () => {
    const url = 'https://openapi.programming-hero.com/api/retro-forum/latest-posts';
    const res = await fetch(url)
    const posts = await res.json();
    const latestPostElement = document.getElementById('latest-post');
    posts.forEach(post => {
        const div = document.createElement('div');
        div.innerHTML = `
            <div id="post-card" class=" card bg-base-100 w-full lg:w-96 shadow-xl">
                <figure>
                    <img src="${post.cover_image}" alt="" />
                </figure>
                <div class="card-body">
                    <h2 class="text-gray-400 text-xl flex gap-2">
                        ${calendar}
                        ${post.author.posted_date ? post.author.posted_date : 'No publish date'}
                    </h2>  
                    <h2 class="card-title ">${post.title}</h2>
                    <p>${post.description}</p>
                    <div class="card-actions">
                        <div class="w-20 ">
                            <img class="rounded-full" src="${post.profile_image}" alt="" />
                        </div>
                        <div>
                            <h2 class="font-bold text-xl">${post.author.name}</h2>
                            <p class="text-gray-400 text-xl flex gap-2">${post.author.designation ? post.author.designation : 'Unknown'}</p>
                        </div>  
                    </div>
                </div>
            </div>
        `
        latestPostElement.appendChild(div);

        console.log(post);
    })

}

const postSeeBtn = async (id) => {

    const res = await fetch(`https://openapi.programming-hero.com/api/retro-forum/posts`);
    const data = await res.json();
    const readData = data.posts.find(post => post.id == id);
    const exist = markReadList.find(item => item.id == readData.id);
    !exist ? markReadList.push(readData) : 0;
    displayMarkRead(markReadList);
}

const displayMarkRead = (props) => {
    const markRead = document.getElementById('mark-read');
    const readCount = document.getElementById('read-count');
    readCount.innerText = `(${props.length})`
    markRead.innerHTML = "";
    props.forEach(prop => {
        const div = document.createElement('div');
        div.classList.add('flex', 'justify-between', 'p-8', 'my-4', 'rounded-lg', 'bg-slate-100')
        div.innerHTML = `
                <h2 class="font-bold">${prop.title}</h2>
                <h2 class="font-bold flex gap-x-2">
                    ${viewIcon}
                    ${prop.view_count}
                </h2>
        `
        markRead.appendChild(div);
    })
}

const searchResults = () => {
    const searchInput = document.getElementById('search-input');
    loadPostData(searchInput.value);

    document.getElementById('search-input').value = '';
}

const loadingSpinner = () => {

}


loadPostData();
displayLatestPost();
