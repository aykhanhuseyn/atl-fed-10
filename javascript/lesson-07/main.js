const root = document.getElementById('root');

const title = document.createElement('h1');
title.innerText = 'Hello, Create Element';
title.style.color = 'white';
title.classList.add('title');
title.classList.add('heading');
// classList => DOMTokenList => ArrayLikeObject

root.append(title);
// title.remove();

console.log({ title });
