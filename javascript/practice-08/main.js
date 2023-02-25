const baseUrl = 'https://jsonplaceholder.typicode.com/';

const gallery = document.getElementById('gallery');
gallery.style.display = 'grid';
gallery.style.gridTemplateColumns = 'repeat(3, 1fr)';

let users = [];
const usersUrl = baseUrl + 'users';

let albums = [];
const albumsUrl = baseUrl + 'albums';

let photos = [];
const photosUrl = baseUrl + 'photos';

async function fillGallery() {
	const usersResponse = await fetch(usersUrl);
	users = await usersResponse.json();

	const albumsResponse = await fetch(albumsUrl);
	albums = await albumsResponse.json();

	const photosResponse = await fetch(photosUrl);
	const temp = await photosResponse.json();
	photos = temp.slice(0, 50);

	photos.forEach((photo) => {
		const album = albums.find((item) => item.id === photo.albumId);
		const user = users.find((item) => item.id === album?.userId);
		gallery.innerHTML += createFigure(
			photo.id,
			photo.title,
			photo.thumbnailUrl,
			album?.title,
			user?.username,
		);
	});
}

function createFigure(id, title, thumb, albom, user) {
	return `<figure data-photo-id="${id}">
  <img src="${thumb}" />
  <figcaption>
    <h3>${title}</h3>
    <h6>album: ${albom}</h6>
    <h6>owner: ${user}</h6>
  </figcaption>
</figure>`;
}

fillGallery();
