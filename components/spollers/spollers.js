class Spollers {
	constructor(wrapClass, multiOpen = false) {
		this.spollersWrap = document.querySelector(`.${wrapClass}`);
		this.spollers = this.spollersWrap.querySelectorAll('.spoller');
		this.activeSpollers = this.spollersWrap.querySelectorAll('.spoller[open]');
		this.multiOpen = multiOpen == 'multiOpen' ? true : false;
		this.events();

		if (this.activeSpollers) {
			this.activeSpollers.forEach((spoller) => {
				this.openSpoller(spoller);
			});
		}
	}

	events() {
		this.spollers.forEach((spoller) => {
			spoller.addEventListener('click', (event) => {
				event.preventDefault();
				const isHeaderClick = event.target.closest('.spoller__header');
				if (!isHeaderClick) return;

				if (spoller.open) {
					this.closeSpoller(spoller);
				} else {
					this.openSpoller(spoller);
				}
			});
		});
	}

	openSpoller(spoller) {
		const spollerContent = spoller.querySelector('.spoller__content');

		spoller.classList.add('open');
		spoller.setAttribute('open', '');
		spollerContent.style.maxHeight = '0';
		requestAnimationFrame(() => {
			spollerContent.style.maxHeight = spollerContent.scrollHeight + 'px';
		});

		if (this.activeSpoller && this.activeSpoller !== spoller && !this.multiOpen) {
			this.closeSpoller(this.activeSpoller);
		}
		this.activeSpoller = spoller;
	}

	closeSpoller(spoller) {
		const spollerContent = spoller.querySelector('.spoller__content');

		spoller.classList.remove('open');
		spollerContent.style.maxHeight = spollerContent.scrollHeight + 'px';
		requestAnimationFrame(() => {
			spollerContent.style.maxHeight = '0';
		});
		setTimeout(() => spoller.removeAttribute('open'), 300);
	}
}

new Spollers('spollers');
