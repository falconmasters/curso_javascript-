const popup = document.getElementById('media');

popup.addEventListener('click', (e) => {
	e.preventDefault();

	if (e.target.closest('button')) {
		popup.classList.remove('media--active');
	}
});
