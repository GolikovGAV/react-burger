describe('template spec', () => {
	const testUrl = 'http://localhost:3000/react-burger/';
	const testUser = {
		mail: 'GolikovGAV@yandex.ru',
		password: '123123'
	};

	beforeEach(() => {
		cy.viewport(1920, 1080);
		cy.visit(testUrl);
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

	it('passes opening order modal, authorization and DnD', () => {
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

		cy.contains('Вход');
		cy.get('input').first().type(testUser.mail);
		cy.get('input').last().type(testUser.password);

		cy.get('button').contains('Войти').click();

		cy.wait(150);

		cy.contains('Оформить заказ').click();

		cy.wait(15000);

		cy.contains('идентификатор заказа');
	});
});
