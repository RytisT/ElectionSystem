package lt.itakademija.x_samples;

import static org.hamcrest.CoreMatchers.is;
import static org.hamcrest.MatcherAssert.assertThat;

import java.util.Random;
import java.util.concurrent.TimeUnit;


import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.Select;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Test;

public class FirstTestNoPOM {

	WebDriver driver = new FirefoxDriver();
	
	@BeforeClass
	public void start() {
		
		
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		driver.get("localhost:8080");
	}

	@AfterClass
	public void closeBrowser() {

		// driver.close();
	}

	@Test ()
	public void login(){
		
		driver.findElement(By.id("login")).click();
		//driver.findElement(By.linkText("Prideti apygarda")).click();
		//driver.findElement(By.className("btn.btn-block.btn-success")).click();
		//driver.findElement(By.xpath("//*[@id='root']/div/div/div/div/div/div[1]/div/button")).click();
		driver.findElement(By.xpath("//button[contains(.,'Prideti apygarda')]")).click();
/*		By.xpath("//button[contains(.,'Add Strategy')]")
		By.xpath("//button[contains(.,'Submit')]")
		Notice that it is same as:

		By.xpath("//button[contains(text(),'Add Strategy')]")
		By.xpath("//button[contains(text(),'Submit')]")
		*/
		driver.findElement(By.className("form-control")).sendKeys("birute");
		driver.findElement(By.className("form-control")).clear();
		driver.findElement(By.className("form-control")).sendKeys("justu111");
		driver.findElement(By.xpath("//button[contains(.,'Continue')]")).click();
		WebDriverWait wait = new WebDriverWait(driver, 5);
		wait.until(ExpectedConditions.presenceOfElementLocated(By.xpath("//button[contains(.,'Prideti apygarda')]")));
		
		driver.findElement(By.xpath("//button[contains(.,'Prideti apygarda')]")).click();
		driver.findElement(By.className("form-control")).clear();
		driver.findElement(By.className("form-control")).sendKeys("justu222");
		driver.findElement(By.xpath("//button[contains(.,'Continue')]")).click();
		
		driver.findElement(By.xpath("//button[contains(.,'Prideti apygarda')]")).click();
		driver.findElement(By.className("form-control")).clear();
		driver.findElement(By.className("form-control")).sendKeys("justu333");
		driver.findElement(By.xpath("//button[contains(.,'Continue')]")).click();
		
		
		driver.findElement(By.xpath("//table//tr[contains(.,'justu222')]//td[4]/button")).click();
		
		driver.findElement(By.xpath("//table//tr[contains(.,'justu111')]//td[2]/button")).click();
		driver.findElement(By.xpath("//button[contains(.,'Prideti apylinke')]")).click();
		
		registerDistrict("name","address","300");
		registerDistrict("name1","address1","3001");
		deleteDstrict("name");
		
		driver.findElement(By.xpath("//input[@placeholder='Apylinkes Pavadinimas']")).sendKeys("apyl1");
		driver.findElement(By.xpath("//input[@placeholder='Adresas']")).sendKeys("apyl");
		driver.findElement(By.xpath("//input[@placeholder='Rinkeju skaicius']")).sendKeys("300");
		driver.findElement(By.xpath("//button[contains(.,'Continue')]")).click();
		
		//input[contains(@class,'form-control')][@placeholder='Adresas']
		
		
		
		/*driver.findElement(By.xpath("//input[@type='radio' and @name='newsletter' and @value='1']")).click();
		driver.findElement(By.xpath("//button[contains(.,'Trinti')]")).click();;
		*/
		//driver.findElement(By.className(".btn.btn-block.btn-success")).click();
		
		//.click();
	}
	
	private void deleteDstrict(String string) {
		
		
	}

	void registerDistrict(String name, String address, String votersAm){
	
		driver.findElement(By.xpath("//input[@placeholder='Apylinkes Pavadinimas']")).sendKeys(name);
		driver.findElement(By.xpath("//input[@placeholder='Adresas']")).sendKeys(address);
		driver.findElement(By.xpath("//input[@placeholder='Rinkeju skaicius']")).sendKeys(votersAm);
		driver.findElement(By.xpath("//button[contains(.,'Continue')]")).click();
	}
	
	
	
	
	
	
	
	public void openCart() throws InterruptedException {

		WebElement weSearch = driver.findElement(By.name("search"));
		weSearch.sendKeys("Maxbook");

		WebElement weSearchXp = driver.findElement(By.xpath("//div[@id='search']/input"));
		weSearchXp.sendKeys("xpath");

		WebElement searchButton = driver.findElement(By.xpath("//button[@class='btn btn-default btn-lg']"));
		searchButton.click();

		boolean isSearchDisplayed = driver.findElement(By.xpath("//*[@id='search']/span/button")).isDisplayed();
		System.out.println(isSearchDisplayed);

		int searchEsize = driver.findElements(By.xpath("//*[@id='search']/span/button")).size();
		System.out.println(searchEsize);

		driver.findElement(By.xpath("//div[@id='search']/input")).clear();
		driver.findElement(By.xpath("//div[@id='search']/input")).sendKeys("MacBook");

		driver.findElement(By.xpath("//button[@class='btn btn-default btn-lg']")).click();

		Select selectDropDown = new Select(driver.findElement(By.id("input-sort")));

		selectDropDown.selectByVisibleText("Price (High > Low)");

		Select dropDownSortBy = new Select(driver.findElement(By.id("input-sort")));
		String dropSort = dropDownSortBy.getFirstSelectedOption().getText();
		System.out.println("DropDown value = " + dropSort);

		driver.findElement(By.partialLinkText("My Account")).click();
		driver.findElement(By.partialLinkText("Register")).click();

		driver.findElement(By.cssSelector("#input-firstname")).sendKeys("Dovydas");
		driver.findElement(By.cssSelector("#input-lastname")).sendKeys("Dovydaitis");
		driver.findElement(By.id("input-email")).sendKeys(getEmail());

		driver.findElement(By.xpath(".//*[@id='input-telephone']")).sendKeys("2323223");
		driver.findElement(By.xpath("//input[@id='input-address-1']")).sendKeys("2sfsdf323223");
		driver.findElement(By.name("postcode")).sendKeys("34434");
		driver.findElement(By.cssSelector("#input-password")).sendKeys("asdfgh123455");
		new Select(driver.findElement(By.cssSelector("select[id='input-country']"))).selectByIndex(131);
		driver.findElement(By.xpath(".//input[@id='input-confirm']")).sendKeys("asdfgh123455");
		driver.findElement(By.name("city")).sendKeys("Vilno");

		new Select(driver.findElement(By.cssSelector("select[name='zone_id']"))).selectByValue("1920");

		driver.findElement(By.xpath("//input[@type='radio' and @name='newsletter' and @value='1']")).click();
		driver.findElement(By.xpath("//input[@type='checkbox' and @value='1' and @name='agree']")).click();

		System.out.println("Input fields in form = " + driver.findElements(By.tagName("input")).size());

		WebElement myAddress = driver.findElement(By.xpath("//fieldset[@id='address']"));
		System.out.println(
				"Input fields in Your Address section = " + myAddress.findElements(By.tagName("input")).size());
		System.out.println(
				"Select elements in Your Address section = " + myAddress.findElements(By.tagName("select")).size());

		System.out.println(
				"Elements with class 'form-control' = " + driver.findElements(By.className("form-control")).size());

		// driver.findElement(By.cssSelector(".btn.btn-primary")).submit();

	}

	public String getEmail() {
		char[] alphNum = "abcdefghijklmnopqrstuvwxyz0123456789".toCharArray();
		Random rnd = new Random();

		int nameLength = rnd.nextInt(8) + 5;
		StringBuilder sb = new StringBuilder();
		sb.append(alphNum[rnd.nextInt(alphNum.length - 10)]);
		for (int i = 0; i < nameLength; i++) {
			sb.append(alphNum[rnd.nextInt(alphNum.length)]);
		}

		sb.append('@');

		int serverLength = rnd.nextInt(4) + 4;
		for (int i = 0; i < serverLength; i++) {
			sb.append(alphNum[rnd.nextInt(alphNum.length - 10)]);
		}

		sb.append('.');

		sb.append(alphNum[rnd.nextInt(alphNum.length - 10)]);
		sb.append(alphNum[rnd.nextInt(alphNum.length - 10)]);

		return sb.toString();
	}
}
