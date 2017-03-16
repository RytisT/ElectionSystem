package lt.itakademija.x_samples;

import org.testng.annotations.Test;
import pageobjects.forms.PositionPage;
import pageobjects.forms.CareersPage;
import pageobjects.forms.HomePage;
import pageobjects.main.TestMain;

/**
 * Test class: one test should cover one scenario, although there might be several tests in one class
 * If test requires any specific data, don't hope they are in the application, prepare them yourself
 * Created by pauliusl on 2016-08-17.
 */
public class ExampleTest extends TestMain {
	
	private String position = "Project Manager";
	private String myName	= "Paulius";
	
    @Test
    /**
     * Searchs for 'Selenium 3.0' and opens download page
     */
    public void searchTest() {
    	
        //--- login ---
        HomePage homePage = login(webDriver);
        homePage.checkIsLoaded();

        //--- assert title ---
        homePage.assertLogoIsDisplayed();
        
        //--- open Careers page ---
        CareersPage searchPage = homePage.openCareersPage();
        searchPage.checkIsLoaded();
        
        //--- open Position page ---
        PositionPage positionPage = searchPage.openPosition(position);
        positionPage.checkIsLoaded();
        
        //--- fill data and send CV ---
        positionPage.setFullName(myName);
        positionPage.clickSendButton();
        
        
        
        
        //=== TASK =====================================================================================================
        // - open "About us/Contacts
        // - assert if picture of our dog is displayed
    }
}
