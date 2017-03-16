package lt.itakademija.x_samples;

import java.io.IOException;

import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.testng.annotations.Test;

import lt.itakademija.PageFactory.PartiesPage;
import lt.itakademija.test.TestMain;

public class TempTest extends TestMain{
	
	private String baseUrl="http://localhost:8080/#/admin/parties";
			
	
	@Test(priority = 3, enabled = true)
	public void testRegisterMultipleParties2() throws IOException {
		//partyPage = new PartiesPage(driver);
		driver.get(baseUrl);
	
		
	driver.findElement(By.xpath("//button[contains(.,'Pridėti Partiją')]")).click();	
	driver.findElement(By.xpath("//input[@placeholder='Partijos ID']")).click();
	
	driver.findElement(By.xpath("//input[@placeholder='Partijos Pavadinimas']")).click();
	
	driver.findElement(By.xpath("")).click();
	driver.findElement(By.xpath("//input[@id='Party id']")).click();
	//input[@id='Party id']
	
	driver.findElement(By.xpath("//*[@id='Add party'])")).click();
	driver.findElement(By.id("Add Party")).click();	
	System.out.println("fd");
	driver.findElement(By.id("Party id")).sendKeys("12");;
	System.out.println("fd");
	driver.findElement(By.id("Party name")).sendKeys("sdfsdfsdf");;
	System.out.println("fd");
	driver.findElement(By.id("Party code")).sendKeys("a");;
	driver.findElement(By.id("Submit party")).click();
	
	System.out.println("xp");
	driver.findElement(By.xpath("//*[@id='Add party'])")).click();
	driver.findElement(By.xpath("//button[contains(.,'Pridėti Partiją')]")).click();


//	
//	@FindBy(xpath = "//button[contains(.,'Pridėti Partiją')]")
//	WebElement buttonDeleteParty;
//
//	@FindBy(xpath = "//table//tr[contains(.,'')]//td[5]/button")
//	WebElement buttonEdit;
//
//	@FindBy(xpath = "//table//tr[contains(.,'')]//td[4]/button")
//	WebElement buttonCandidates;
//	
	
}
}