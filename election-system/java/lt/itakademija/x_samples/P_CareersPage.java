package lt.itakademija.x_samples;

import pageobjects.main.PageObject;

import java.util.Iterator;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;

/**
 * Example page: with simplest examples for each section
 * Created by pauliusl on 2016-12-19.
 */
public class CareersPage extends PageObject {
	
	//--- fields -------------------------------------------------------------------------------------------------------
	String positionsList = "//div[@class='two_fifth']/ul/li/a";
	
    //--- constructor --------------------------------------------------------------------------------------------------
    public CareersPage(WebDriver webDriver, String baseUrl) { super(webDriver, baseUrl); }

    //--- buttons ------------------------------------------------------------------------------------------------------    
    public PositionPage openPosition(String position) {
    	System.out.println("Searching for '" + position + "' position...");
    	
        WebElement row;
        String title;
    	
        List<WebElement> urlLinks = webDriver.findElements(By.xpath(positionsList));
        Iterator<WebElement> itr = urlLinks.iterator();
        
        //--- go through the found links ---
        int i = 1;
        while(itr.hasNext()) {
            row = itr.next();  
            title = row.getText();
            
            //--- if link contains provided text - return it ---
            if(title.toLowerCase().equals(position.toLowerCase())) {
            	row.click();
            	return new PositionPage(webDriver, baseUrl);
            }
            
            i++;
        }

      	System.out.println("ATTENTION: can't find '" + position + "' position!");
    	return null;
    }
}
