import { test, expect } from '@playwright/test';
import{ elements } from'../Elements/elements';


//--------------------------01---------------------------
test('AddOrDeleteButton', async ({ page }) => {
const AddOrDeleteButton = new elements (page)


await AddOrDeleteButton.LoadTheURL();
await AddOrDeleteButton.AddorRemoveElements();
page.close();

});


//------------------------02-------------------------------


test('CheckBox', async ({ page }) => {

  const CheckBox = new elements (page)
  await CheckBox.LoadTheURL();
  await CheckBox.CheckBoxes();
  //await page.waitForTimeout(8000);

  
  
  });

  //------------------------03-------------------------------

test('Dropdown', async ({ page }) => {

  const Dropdown = new elements (page)
  await Dropdown.LoadTheURL();
  await Dropdown.CheckBoxes();
  await page.waitForTimeout(8000);

  
  
  });

  //------------------04------------------------------------
  test('ForgotPW', async ({ page }) => {

    const ForgotPW = new elements (page)
    await ForgotPW.LoadTheURL();
    await ForgotPW.FPW();
    
    
    
    });



//-------------------------------05------------------------------------------

test('PressKey', async ({ page }) => {

  const PressKey = new elements (page)
  await PressKey.LoadTheURL();
  await PressKey.PressKey();
  await expect(page.getByText('You entered: TAB')).toBeVisible();
  
  
  
  });





