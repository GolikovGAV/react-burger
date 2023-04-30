describe('template spec', () => {
	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit('http://localhost:3000');
		cy.on('uncaught:exception', (err, runnable) => {
			return false;
		});
	});

	it('passes opening modal', () => {
		cy.contains('Краторная булка').click();
		cy.get('button[aria-label="Закрыть окно"]');
	});

	it('passes ingredient info modal', () => {
		cy.contains('Краторная булка').click();
		cy.get('#modalRoot').contains('Краторная булка');
	});

	it('passes closing modal', () => {
		cy.contains('Краторная булка').click();
		cy.get('button[aria-label="Закрыть окно"]').click();
		cy.contains('Детали ингредиента').should('not.exist');
	});

	it('passes dragNdrop', () => {
		cy.contains('Краторная булка').trigger('dragstart');
		cy.contains('Перетащите булку сюда')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop');
	});

	it('passes opening order modal', () => {
		cy.contains('Краторная булка').trigger('dragstart');
		cy.contains('Перетащите булку сюда')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop');

		cy.contains('Соус фирменный Space Sauce').trigger('dragstart');
		cy.contains('Перетащите начинку сюда')
			.trigger('dragenter')
			.trigger('dragover')
			.trigger('drop');

		cy.contains('Оформить заказ').click();

		cy.contains('идентификатор заказа');
	});
});
