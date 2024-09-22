import { expect } from '@playwright/test';

export class elements{

    constructor(page){

        this.page = page
        this.AddorRemoveElement = page.getByRole('link', { name: 'Add/Remove Elements' })
        this.AddButton = page.getByRole('button', { name: 'Add Element' })
        this.DeleteButton=page.getByRole('button', { name: 'Delete' })
        this.CheckboxesButton=page.getByRole('link', { name: 'Checkboxes' })
        this.Check1= page.getByRole('checkbox').first()
        this.Check2= page.getByRole('checkbox').nth(1)
        this.DropdownSelector=page.getByRole('link', { name: 'Dropdown' })
        this.Option=page.locator('#dropdown')
        this.FPWLink=page.getByRole('link', { name: 'Forgot Password' })
        this.Email=page.getByLabel('E-mail')
        this.FPWButton=page.getByRole('button', { name: 'Retrieve password' })
        this.PressKeyIcon=page.getByRole('link', { name: 'Key Presses' })
        this.PressKeyLocator=page.locator('#target')
      
        
    }

  
  

    

    async LoadTheURL(){
        

        await this.page.goto('https://the-internet.herokuapp.com/');
        await this.page.setViewportSize({ width: 1920, height: 1080 });
        await this.page.waitForTimeout(8000);

    }


    async AddorRemoveElements(){
        await this.page.waitForTimeout(8000);

        await this.AddorRemoveElement.click();
        await this.AddButton.click();
        await this.DeleteButton.click();

    }

    async CheckBoxes(){
        await this.page.waitForTimeout(8000);

       await this.CheckboxesButton.click();
       await this.Check1.uncheck();
       await this.Check2.uncheck();
       await this.Check1.check();
       await this.Check2.check();
     

    }

    async Dropdown(){
        await this.page.waitForTimeout(8000);


        await this.DropdownSelector.click();
        await this.Option.selectOption('1');
        await this.Option.selectOption('2');
       
      
 
     }

     
    async FPW(){
        await this.page.waitForTimeout(8000);


        await this.FPWLink.click();
        await this.Email.type('qatesting@gmail.com');
        await this.FPWButton.click();
       
      
 
     }


     async PressKey(){
       
        await this.page.waitForTimeout(8000);

        
        await this.PressKeyIcon.click();
        await this.PressKeyLocator.click();
        await this.PressKeyLocator.press('Tab')
        


    }

        
       
    



}


