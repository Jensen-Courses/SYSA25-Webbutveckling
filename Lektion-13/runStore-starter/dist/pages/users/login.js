import Navbar from '../../utilities/menu.js';
const form = document.querySelector('form');
const initApp = () => {
    new Navbar();
};
const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData(form);
    const data = Object.fromEntries(formData.entries());
    form.reset();
    location.href = '/pages/users/profile.html';
};
initApp();
form.addEventListener('submit', handleSubmit);
