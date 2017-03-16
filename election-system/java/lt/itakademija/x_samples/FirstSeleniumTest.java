package lt.itakademija.x_samples;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.Select;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class FirstSeleniumTest {

	WebDriver driver = new FirefoxDriver();
	
	@BeforeClass
	public void start() {
		driver.get("http://88.119.151.54/opencartone");
		driver.manage().window().maximize();
	}

	@AfterClass
	public void closeBrowser() {

		// driver.close();
	}
	
	
	@Test
	public void Testas() {
   
  	
  	
  	driver.findElement(By.id("wishlist-total")).click();
 	 
  	System.out.println("Number of Search Box/es:" + driver.findElements(By.id("search")).size());
 	 
  	WebElement emailElement = driver.findElement(By.id("input-email"));
    
  	String email = "email@email.com";
  	emailElement.sendKeys(email);
  	emailElement.clear();
  	emailElement.submit();
  	String listElement =  driver.findElement(By.id("wishlist-total")).getText();
 	 
  	System.out.println("Element name is: " + listElement);
 	 
  	driver.findElement(By.linkText("Register")).click();
  	Select dropDown = new Select(driver.findElement(By.id("input-country")));
  	dropDown.selectByVisibleText("Seychelles");
 	 
  	String countryName = dropDown.getFirstSelectedOption().getText();
  	System.out.println("Country name is: " + countryName);
 	 
  	dropDown.selectByIndex(4);
  	String secondCountryName = dropDown.getFirstSelectedOption().getText();
  	System.out.println("Country name is: " + secondCountryName);
 	 
  	dropDown.selectByValue("4");
  	String thirdCountryName = dropDown.getFirstSelectedOption().getText();
  	System.out.println("Country name is: " + thirdCountryName);
 	 
  	boolean passwordElement = driver.findElement(By.id("input-password")).isEnabled();
  	System.out.println("Is Password field enabled: " + passwordElement);
 	 
  	boolean cartElement = driver.findElement(By.id("cart")).isDisplayed();
  	System.out.println("Is Cart button displayed: " + cartElement);
 	 
  	boolean agreeElement = driver.findElement(By.name("agree")).isSelected();
  	System.out.println("Is Agree checkbox selected: " + agreeElement);
 	 
  	driver.close();
   }
}