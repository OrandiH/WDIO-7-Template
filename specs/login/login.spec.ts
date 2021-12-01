import LoginPage from  '@/pageobjects/LoginPage';

describe('MGH - Login', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        browser.pause(8000);
    });
});


