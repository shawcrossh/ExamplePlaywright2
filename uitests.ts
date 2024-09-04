import { test, expect } from '@playwright/test';

// test.use({
//   viewport: {
//     height: 768,
//     width: 1366
//   }
// });

test.beforeEach('Open start URL', async ({ page }, testInfo) => {
  console.log(`Running ${testInfo.title}`);

// takes too long, times out, retries aren't that useful in this case
//   await page.goto('https://www.examplesite.com/');
//   while (await page.locator('.progress__bar').isVisible()) {
//     await page.goto('https://www.examplesite.com/')
// }

  await page.goto('https://www.examplesite.com/');
  if (await page.locator('.progress__bar').isVisible()) {
    await page.goto('https://www.examplesite.com/')
  }
  if (await page.locator('.progress__bar').isVisible()) {
    await page.goto('https://www.examplesite.com/')
  }
  if (await page.locator('.progress__bar').isVisible()) {
    await page.goto('https://www.examplesite.com/')
  }
  if (await page.locator('.progress__bar').isVisible()) {
    await page.goto('https://www.examplesite.com/')
  }
  if (await page.locator('.progress__bar').isVisible()) {
    await page.goto('https://www.examplesite.com/')
  }  
  if (await page.locator('.progress__bar').isVisible()) {
    console.log(`URL unavailable after 5 tries`);
  }
});

test('should submit without description', async ({ page }) => {  
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.locator('#description').click();
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Thank you for your interest.')).toBeVisible();
});

test('should submit with no retained lawyer', async ({ page }) => {  
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'No' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.locator('#description').click();
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Thank you for your interest.')).toBeVisible();
});

test('should submit with description', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.locator('#description').click();
  await page.locator('#description').fill('At vero eos et accusamus et iusto odio dignissimos ducimus, qui blanditiis praesentium voluptatum deleniti atque corrupti, quos dolores et quas molestias excepturi sint, obcaecati cupiditate non provident');
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Thank you for your interest.')).toBeVisible();
});

test('should prevent alphabetic phone number', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('aaaaaaaaaa');
  await page.getByText('Phone Number is not valid');
  await page.locator('#description').click();
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Phone Number is required')).toBeVisible();
});

test('should prevent incomplete phone number', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777');
  await page.getByText('Phone Number is not valid');
  await page.locator('#description').click();
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Phone Number is required')).toBeVisible();
});

test('should require first name', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  //await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');  
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.locator('#description').click();
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('First name is required')).toBeVisible();
});

test('should require last name', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').press('Tab');  
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.locator('#description').click();
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Last name is required')).toBeVisible();
});

test('should require phone number', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.locator('#description').click();
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Phone Number is required')).toBeVisible();
});

test('should require live and work', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.getByPlaceholder('(___) - ___ - ____').press('Tab');
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('When did you or a loved one live or work at Camp Lejeune? is required')).toBeVisible();
});

test('should require reason', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.getByPlaceholder('(___) - ___ - ____').press('Tab');
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('What best describes the reason you lived or worked at Camp Lejeune? is required')).toBeVisible();
});

test('should require injury', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.getByPlaceholder('(___) - ___ - ____').press('Tab');
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('What injury were you or your loved one diagnosed with? is required')).toBeVisible();
});

test('should require yes/no', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  //await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').fill('Test@test.com');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.getByPlaceholder('(___) - ___ - ____').press('Tab');
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Have you retained an attorney for Camp Lejeune water contamination? is required')).toBeVisible();
});



test('should require email', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  await page.locator('#email_address').press('Tab');
  await page.getByPlaceholder('(___) - ___ - ____').fill('7777777777');
  await page.getByPlaceholder('(___) - ___ - ____').press('Tab');
  await page.getByRole('button', { name: 'Do I Qualify ➔' }).click();
  await expect(page.getByText('Email is required')).toBeVisible();
});

test('should require valid email', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await page.locator('#place').selectOption('Before 1953');
  await page.locator('#relationship').selectOption('Civilian employee');
  await page.locator('#injury').selectOption('Aplastic anemia');
  await page.locator('label').filter({ hasText: 'Yes' }).locator('span').click();
  await page.locator('#first_name').click();
  await page.locator('#first_name').fill('Test First');
  await page.locator('#first_name').press('Tab');
  await page.locator('#last_name').fill('Test Last');
  await page.locator('#last_name').press('Tab');
  //email missing @
  await page.locator('#email_address').fill('Test');
  await expect(page.getByText('Email is missing @ sign')).toBeVisible();
  //email missing domain
  await page.locator('#email_address').fill('Test@');
  await expect(page.getByText('Email Domain is missing')).toBeVisible();
});

test('should default when at camp to select one', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await expect(page.locator('#place')).toContainText('--Select one--');
  await expect(page.locator('#place')).toHaveValue('');
});

test('should default relationship to select one', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await expect(page.locator('#relationship')).toContainText('--Select one--');
  await expect(page.locator('#relationship')).toHaveValue('');
});

test('should default injury to select one', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await expect(page.locator('#injury')).toContainText('--Select one--');
  await expect(page.locator('#injury')).toHaveValue('');
});

test('should list all camp times', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await expect(page.locator('#place')).toContainText('Before 1953 1953-1987 After 1987');
});

test('should list all relationships', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await expect(page.locator('#relationship')).toContainText('test text');
});

test('should list all injuries', async ({ page }) => {
  const altPage = await page.locator('.progress__bar').isVisible();
  test.skip(altPage == true, "URL cannot be reached");
  await expect(page.locator('#injury')).toContainText('test text 2');
});


