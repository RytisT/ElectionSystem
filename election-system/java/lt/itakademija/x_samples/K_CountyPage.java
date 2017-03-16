package lt.itakademija.x_samples;

import java.io.IOException;
import java.util.List;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.testng.Assert;
import utilities.DataReader;
import utilities.Utilities;

public class CountyPage {

	private WebDriver driver;
	private int countyRow;
	private Utilities utilities;
	private WebElement buttonToUploadFile;
	private WebElement alertSuccessMessage;
	private List<String> county;
	private DataReader dReader;

	@FindBy(id = "county-button")
	WebElement menuCounty;

	@FindBy(id = "register-button")
	WebElement buttonRegister;

	@FindBy(id = "name-input")
	WebElement fieldCountyName;

	@FindBy(id = "create-button")
	WebElement buttonSubmit;

	@FindBy(className = "alert")
	WebElement alert;

	public CountyPage(WebDriver driver) {
		this.driver = driver;
		PageFactory.initElements(driver, this);
		utilities = new Utilities(driver);
	}

	protected void registerCounty(String countyName, String enterOrEdit) {
		if (!enterOrEdit.equals("edit")) {
			menuCounty.click();
			buttonRegister.click();
		}
		fieldCountyName.sendKeys(countyName);
		buttonSubmit.click();
	}

	protected void registerMultipleCounties(String countyFile) throws IOException {
		dReader = new DataReader();
		county = dReader.getTestData(countyFile);
		for (String item : county) {
			registerCounty(item, "");
			Assert.assertTrue(alert.getText().contains("Apygarda " + item + " sukurta"));
		}
	}

	protected void deleteCounty(String countyName) {
		countyRow = utilities.findElementForDeletingAndEditing(menuCounty, countyName);
		driver.findElement(By.xpath("//tbody/tr[" + countyRow + "]/td[3]/a[3]")).click();
		utilities.waitToLoad("//tr[" + countyRow + "]//button[contains(@id,'delete-button')]").click();
		utilities.waitToLoad("//*[@id='alert-danger-fixed']");
	}

	protected void editCounty(String countyName, String newCountyName) {
		countyRow = utilities.findElementForDeletingAndEditing(menuCounty, countyName);
		driver.findElement(By.xpath("//tbody/tr[" + countyRow + "]/td[3]/a[2]")).click();
		fieldCountyName.clear();
		registerCounty(newCountyName, "edit");
	}

	protected void addCandidatesList(String countyName, String candidatesList) {
		countyRow = utilities.findElementForDeletingAndEditing(menuCounty, countyName);
		driver.findElement(By.xpath("//tbody/tr[" + countyRow + "]/td[3]/button[1]")).click();
		buttonToUploadFile = driver.findElement(By.xpath("//tbody/tr[" + countyRow + "]/td[3]//input"));
		utilities.attachFile(buttonToUploadFile, candidatesList);
		driver.findElement(By.xpath("//tr[" + countyRow + "]//button[contains(@id, 'add-county-single-list')]")).click();
		alertSuccessMessage = driver.findElement(By.xpath("//tr[" + countyRow + "]//*[@id='alert-success']"));
	
		
		
		utilities.waitForJavascript();
		//blogai parasyta: įkeltas vienmandaties apygardos sąrašas
		Assert.assertTrue(alertSuccessMessage.getText().contains("Apygardai sėkmingai įkeltas vienmandaties apygardos sąrašas"));
	
	
	}

}