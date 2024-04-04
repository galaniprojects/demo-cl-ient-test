import { test, expect } from '@playwright/test';

test.beforeEach(async ({ page }) =>{
  await page.goto('https://chaindemo.galaniprojects.de/');
})

test('Test Case 1: New User Registration Test', async ({ page }) => {

  await page.goto('https://chaindemo.galaniprojects.de/');

  // By entering wrong code
  await page.getByLabel('Password').click();
  await page.getByLabel('Password').fill('hendri123');
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('Password must be 12')).toBeVisible();

  // By entering correct code
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  await expect(page.getByText('No identities found. Please Create a new identity.')).toBeVisible();
});

test('Test Case 4: Create New Identity', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  await expect(page.getByRole('heading', { name: 'Active identity' })).toBeVisible();
  
});

test('Test Case 5: To create a Ctype', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Fetch CTypes' }).click();

  await expect(page.getByText('hendri6Select action…').nth(1)).toBeVisible();
});

test('Test Case 6: To create a Claim', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Test Case 6
  await page.getByRole('link', { name: 'Claims' }).click();
  await page.getByRole('button', { name: 'Create Claim' }).click();
  await page.locator('div').filter({ hasText: /^Select cTypeSelect cTypeCancelOK$/ }).locator('svg').click();
  await page.locator('span[title="hendri4"]').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('test6');
  await page.getByRole('button', { name: 'Create' }).click();

  await expect(page.getByRole('cell', { name: 'test6', exact: true })).toBeVisible
});

test('Test Case 7: Request Attestation', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Test Case 6
  await page.getByRole('link', { name: 'Claims' }).click();
  await page.getByRole('button', { name: 'Create Claim' }).click();
  await page.locator('div').filter({ hasText: /^Select cTypeSelect cTypeCancelOK$/ }).locator('svg').click();
  await page.locator('span[title="hendri4"]').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('test6');
  await page.getByRole('button', { name: 'Create' }).click();

  // Test Case 7
  await page.getByRole('link', { name: 'Claims' }).click();
  await page.getByRole('cell', { name: 'Select action…', exact: true }).locator('svg').click();
  await page.getByText('Request attestation', { exact: true }).click();
  await page.locator('.selectReceiver > .react-select-container > .react-select__control > .react-select__indicators > .react-select__indicator').click();
  await page.locator('div[data-name="hendri3"]').nth(1).click();
  await page.getByRole('button', { name: 'Request Attestation' }).click();

  await expect(page.getByText('Message \'request-attestation-')).toBeVisible();
});

test('Test Case 8: Request Attestation', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Test Case 6
  await page.getByRole('link', { name: 'Claims' }).click();
  await page.getByRole('button', { name: 'Create Claim' }).click();
  await page.locator('div').filter({ hasText: /^Select cTypeSelect cTypeCancelOK$/ }).locator('svg').click();
  await page.locator('span[title="hendri4"]').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('test6');
  await page.getByRole('button', { name: 'Create' }).click();

  // Test Case 7
  await page.getByRole('link', { name: 'Claims' }).click();
  await page.getByRole('cell', { name: 'Select action…', exact: true }).locator('svg').click();
  await page.getByText('Request attestation', { exact: true }).click();
  await page.locator('.selectReceiver > .react-select-container > .react-select__control > .react-select__indicators > .react-select__indicator').click();
  await page.locator('div[data-name="hendri3"]').nth(1).click();
  await page.getByRole('button', { name: 'Request Attestation' }).click();

  // Test Case 8
  await page.getByRole('link', { name: 'Messages' }).click();
  await page.getByText('request-attestation-for-claim').nth(2).click();
  await page.getByRole('button', { name: 'Attest Claim' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Attestations' }).click();

  await expect(page.getByRole('table').getByText('hendri3(me)')).toBeVisible();
  await expect(page.getByRole('cell', { name: '' }).locator('div')).toBeVisible();
});

test('Test Case 9: Request Claim for CType', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();

  // Test Case 6
  await page.waitForTimeout(3000);
  await page.getByRole('link', { name: 'Claims' }).click();
  await page.getByRole('button', { name: 'Create Claim' }).click();
  await page.locator('div').filter({ hasText: /^Select cTypeSelect cTypeCancelOK$/ }).locator('svg').click();
  await page.locator('span[title="hendri4"]').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').fill('test6');
  await page.getByRole('button', { name: 'Create' }).click();

  // Test Case 7
  await page.getByRole('link', { name: 'Claims' }).click();
  await page.getByRole('cell', { name: 'Select action…', exact: true }).locator('svg').click();
  await page.getByText('Request attestation', { exact: true }).click();
  await page.locator('.selectReceiver > .react-select-container > .react-select__control > .react-select__indicators > .react-select__indicator').click();
  await page.locator('div[data-name="hendri3"]').nth(1).click();
  await page.getByRole('button', { name: 'Request Attestation' }).click();

  // Test Case 8
  await page.getByRole('link', { name: 'Messages' }).click();
  await page.getByText('request-attestation-for-claim').nth(2).click();
  await page.getByRole('button', { name: 'Attest Claim' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Attestations' }).click();

  // Test Case 9
  await page.getByRole('link', { name: 'Contacts' }).click();
  await page.getByRole('cell', { name: ' hendri3(me) Select action…' }).locator('svg').nth(1).click();
  await page.getByText('Request claims', { exact: true }).click();
  await page.locator('section').filter({ hasText: /^Select cType\(s\)Select cTypes…$/ }).locator('svg').click();
  await page.locator('text=hendri4').nth(0).click();
  await page.getByRole('button', { name: 'Request claims' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Messages' }).click();
  await page.waitForTimeout(3000);
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.getByRole('button', { name: '' }).last().click();
  await page.getByRole('link', { name: 'Create claim' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('123');
  await page.getByRole('button', { name: 'Create' }).click();
  await page.getByRole('cell', { name: 'Select action…', exact: true }).locator('svg').click();
  await page.getByText('Request attestation', { exact: true }).click();
  await page.locator('section').filter({ hasText: /^Select receiver\(s\)Select contacts…$/ }).locator('svg').click();
  await page.waitForTimeout(1000);
  await page.locator('div[data-name="hendri3"]').nth(1).click();
  await page.getByRole('button', { name: 'Request Attestation' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('link', { name: 'Messages' }).click();
  await page.evaluate(() => {
    window.scrollTo(0, document.body.scrollHeight);
  });
  await page.getByRole('button', { name: '' }).last().click();
  await page.getByRole('button', { name: 'Attest Claim' }).click();
  await page.waitForTimeout(1000);
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('link', { name: 'Attestations' }).click();

  await expect(page.getByText('hendri3(me)Select action…').last()).toBeVisible();
});

test('Test Case 10: To create a new delegate', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Fetch CTypes' }).click();

  // Test Case 10
  await page.getByRole('link', { name: 'Delegations' }).click();
  await page.getByRole('button', { name: 'New Delegation' }).click();
  await page.locator('section').filter({ hasText: 'My DelegationsNew DelegationSelect cType…Select cType…CancelOK' }).locator('svg').click();
  await page.locator('#react-select-3-option-0').getByText('hendri4').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('hendritest1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'hendritest1' }).click();
  await expect(page.getByRole('heading', { name: 'Delegation tree' })).toBeVisible();
});

test('Test Case 11: To create a new delegate', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Fetch CTypes' }).click();

  // Test Case 10
  await page.getByRole('link', { name: 'Delegations' }).click();
  await page.getByRole('button', { name: 'New Delegation' }).click();
  await page.locator('section').filter({ hasText: 'My DelegationsNew DelegationSelect cType…Select cType…CancelOK' }).locator('svg').click();
  await page.locator('#react-select-3-option-0').getByText('hendri4').click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('hendritest1');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('link', { name: 'hendritest1' }).click();

  // Test Case 11
  await page.getByRole('link', { name: 'Delegations' }).click();
  await page.getByRole('cell', { name: 'Select action…', exact: true }).locator('svg').click();
  await page.getByText('Invite contact', { exact: true }).click();
  await page.locator('section').filter({ hasText: /^Select receiver\(s\)Select contacts…$/ }).locator('svg').click();
  await page.locator('div[data-name="hendri3"]').last().click();
  await page.locator('section').filter({ hasText: /^Select cTypehendri4$/ }).locator('svg').nth(1).click();
  await page.locator('.label:has-text("hendri4")').nth(2).click();
  await page.getByText('ATTEST', { exact: true }).click();
  await page.getByRole('button', { name: 'Invite' }).click();
  await page.getByRole('link', { name: 'Messages' }).click();
  await page.getByRole('button', { name: '' }).last().click();
  await page.getByRole('button', { name: 'Accept Invitation' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await expect(page.getByText('Message \'submit-accept-')).toBeVisible();
});

test('Test Case 12: To create a new PCR', async ({ page }) => {
  // Test Case 1
  await page.goto('https://chaindemo.galaniprojects.de/');
  await page.getByLabel('Password').fill('hendritest123');
  await page.getByRole('button', { name: 'Register' }).click();

  // Test Case 4
  await page.getByRole('link', { name: 'Create a new identity' }).click();
  await page.getByText('Import Seed Phrase').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Seed Phrase$/ }).getByRole('textbox').fill('zone mirror neither more exist radio apart castle thunder domain region script');
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^Name your ID$/ }).getByRole('textbox').fill('hendri3');
  await page.getByRole('button', { name: 'Add' }).click();
  await page.getByRole('button', { name: 'Select' }).click();
  const page3Promise = page.waitForEvent('popup');
  await page.getByRole('button', { name: 'Request Tokens' }).click();
  const page3 = await page3Promise;
  await page3.getByLabel('I hereby accept theTerms of').check();
  await page3.getByRole('button', { name: 'Request Tokens' }).click();
  await page3.close();


  // Test Case 5
  await page.getByRole('link', { name: 'CTYPEs' }).click();
  await page.getByRole('link', { name: 'Create new CTYPE' }).click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').click();
  await page.locator('div').filter({ hasText: /^TitleValue must be at least 1 characters long\.$/ }).getByRole('textbox').fill('hendri6');
  await page.getByRole('button', { name: '' }).click();
  await page.locator('input[type="uri-reference"]').click();
  await page.locator('input[type="uri-reference"]').fill('Test-Identifier');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.getByRole('button', { name: 'Fetch CTypes' }).click();

  // Test Case 12
  await page.getByRole('link', { name: 'PCRs' }).click();
  await page.getByRole('button', { name: 'New PCR' }).click();
  await page.locator('div').filter({ hasText: /^Select cType…Select cType…CancelOK$/ }).locator('svg').click();
  await page.locator('span[title="hendri4"]').first().click();
  await page.getByRole('button', { name: 'OK' }).click();
  await page.locator('input[type="text"]').click();
  await page.locator('input[type="text"]').fill('hendri');
  await page.getByRole('button', { name: 'Submit' }).click();
  await page.getByText('SUCCESS', { exact: true }).click();
});