// STORAGE

// cookie
// 4 kb
// expires: when you say

// sessionStorage
// approximately 8mb
// exp: when you close tab
sessionStorage.getItem('name'); // (key) => value | null
sessionStorage.setItem('name', 'John'); // (key, value) => void
sessionStorage.removeItem('name'); // (key) => void
// sessionStorage.clear(); // () => void
sessionStorage.length; // number

// localStorage
// depends on browser
// approximately 10mb
// exp: apocalipsis
localStorage.getItem('name'); // (key) => value | null
localStorage.setItem('name', 'John'); // (key, value) => void
localStorage.removeItem('name'); // (key) => void
// localStorage.clear(); // () => void
localStorage.length; // number
