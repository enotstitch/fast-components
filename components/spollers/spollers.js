const spollers = document.querySelectorAll('.spoller');

spollers.forEach((spoller) => {
	const spollerHeader = spoller.querySelector('.spoller__header');
	const spollerContent = spoller.querySelector('.spoller__content');

	spollerHeader.addEventListener('click', (event) => {
		event.preventDefault();

		if (spoller.open) {
			spoller.classList.remove('open');
			spollerContent.style.maxHeight = spollerContent.scrollHeight + 'px';
			requestAnimationFrame(() => {
				spollerContent.style.maxHeight = '0';
			});
			setTimeout(() => spoller.removeAttribute('open'), 300);
		} else {
			spoller.setAttribute('open', '');
			spollerContent.style.maxHeight = '0';
			requestAnimationFrame(() => {
				spollerContent.style.maxHeight = spollerContent.scrollHeight + 'px';
			});
		}
	});
});
