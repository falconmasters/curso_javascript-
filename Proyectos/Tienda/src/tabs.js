export default class Tabs {
	constructor(idElemento) {
		this.tabs = document.getElementById(idElemento);
		this.nav = this.tabs.querySelector('.tabs');

		this.nav.addEventListener('click', (e) => {
			e.preventDefault();

			// Comprobamos que el elemento que clickeamos tenga la clase de tabs__link.
			if ([...e.target.classList].includes('tabs__button')) {
				// Obtenemos la tab que queremos mostrar.
				const tab = e.target.dataset.tab;

				// Quitamos la clase active de alguna otras tabs que la tengan.
				if (this.tabs.querySelector('.tab--active')) {
					this.tabs.querySelector('.tab--active').classList.remove('tab--active');
				}

				// Quitamos la clase active del boton.
				if (this.tabs.querySelector('.tabs__button--active')) {
					this.tabs.querySelector('.tabs__button--active').classList.remove('tabs__button--active');
				}

				// Agregamos la clase active al tab.
				this.tabs.querySelector(`#${tab}`).classList.add('tab--active');

				// Agregamos la clase active al boton.
				e.target.classList.add('tabs__button--active');
			}
		});
	}
}
