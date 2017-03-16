package lt.itakademija.PageFactory;

import java.io.IOException;
import java.util.List;
import java.util.concurrent.TimeUnit;

import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import lt.itakademija.test.PageObject;
import lt.itakademija.utilites.TestData;

public class ConstituenciesPage extends PageObject {

	private String elementForWaiting = "//button[contains(., 'Pridėti')]";
	// "//*[text() = 'Pridėti apygardą']";

	public ConstituenciesPage(WebDriver webDriver, String baseUrl) {
		super(webDriver, baseUrl);
	}

	@FindBy(xpath = "//input[@placeholder='Apylinkės pavadinimas']")
	WebElement fieldDistrictName;
	@FindBy(xpath = "//input[@placeholder='Adresas']")
	WebElement fieldAddress;
	@FindBy(xpath = "//input[@placeholder='Rinkėjų skaičius']")
	WebElement fieldNumberOfVoters;

	@FindBy(className = "form-control")
	WebElement fieldConstituencyName;

	@FindBy(id = "AddConstituency")
	WebElement buttonAddConstituency;

	@FindBy(id = "Add_District")
	WebElement buttonAddDistrict;

	@FindBy(partialLinkText = "Apygardos/Apylinkės")
	WebElement pageConstituencies;

	@FindBy(xpath = "//*[text() = 'Pridėti']")
	WebElement buttonSubmit;

	@FindBy(xpath = "//button[contains(.,'Trinti')]")
	WebElement buttonDeleteConstituency;
	
	@FindBy(xpath = "//button[contains(.,'Atšaukti')]")
	WebElement buttonAtsaukti;

	@FindBy(xpath = "//button[contains(.,'Patvirtinti')]")
	WebElement buttonDeleteConstituencyConfirm;

	@FindBy(xpath = "//table//tr[contains(.,'')]//td[4]/button")
	WebElement buttonEdit;

	@FindBy(id = "Return")
	WebElement buttonReturn;

	@FindBy(className = "alert")
	WebElement alert;

	@FindAll({ @FindBy(xpath = "//button[contains(.,'apylink')]") })
	private List<WebElement> buttonDeleteAll;

	@FindBy(id = "RepName")
	WebElement fieldRepName;
	@FindBy(id = "RepLastName")
	WebElement fieldRepLastName;
	@FindBy(id = "RepLoginName")
	WebElement fieldRepLoginName;
	@FindBy(id = "RepPassword")
	WebElement fieldRepPassword;
	@FindBy(id = "Submit_Rep")
	WebElement buttonSubmit_Rep;

	@FindBy(id = ".//*[@id='Cancel']")
	WebElement buttonCancel;
	@FindBy(xpath = "//button[contains(.,'Uždaryti')]")
	WebElement buttonCloseForm;
	@FindBy(xpath = "//button[@class='close' and @type='button']")
	WebElement buttonCloseFormX;

	@FindBy(id = "file-select")
	WebElement buttonAddFile;

	public void registerConstituency(String name) throws IOException {
		checkIsLoaded();
		System.out.println("Adding " + name + " constituency");
		buttonAddConstituency.click();
		fieldConstituencyName.clear();
		fieldConstituencyName.sendKeys(name);
		buttonSubmit.click();
		isElementDisplayed(buttonAddConstituency);
		Assert.assertTrue(driver.findElement(By.xpath("//table//tr[contains(.,'" + name + "')]")).isDisplayed(),
				name + " constituency is not found");
	}

	public void registerMultipleConstituency(int amount) throws IOException {
		int startAmountConst = getAllDeleteButtons();
		for (int i = 0; i < amount; i++)
			registerConstituency(TestData.getConstituency());

		int endAmountConst = getAllDeleteButtons();
		System.out.println("Added " + amount + " constituencies" + "\nDifference to added "
				+ (startAmountConst + amount - endAmountConst));

	}

	public void registerDistrict(String name, String address, String amountOfVoters) throws IOException {

		waitToLoad(elementForWaiting);
		System.out.println("Adding " + name + " district");
		buttonAddDistrict.click();
		fieldDistrictName.clear();
		fieldDistrictName.sendKeys(name);
		fieldAddress.clear();
		fieldAddress.sendKeys(address);
		fieldNumberOfVoters.clear();
		fieldNumberOfVoters.sendKeys(amountOfVoters);
		buttonSubmit.click();
		Assert.assertTrue(driver.findElement(By.xpath("//table//tr[contains(.,'" + name + "')]")).isDisplayed());

	}

	public void registerMultipleDistrics(int amount) throws IOException {
		int startAmountConst = getAllDeleteButtons();

		System.out.println("Starting to register " + amount + " districs");

		String name, address, amountOfVoters;
		for (int i = 0; i < amount; i++) {

			waitToLoad(elementForWaiting);
			name = TestData.getDistrict();
			address = TestData.getAddress();
			amountOfVoters = Integer.toString(TestData.randBetween(100, 3000));
			registerDistrict(name, address, amountOfVoters);

		}

		int endAmountConst = getAllDeleteButtons();
		Assert.assertEquals(endAmountConst - startAmountConst, amount, " amount added is not correct ");

	}

	public void addRepresentativeToGivenDistricName(String districtName) {
		System.out.println("Adding Reppresentave");
		driver.findElement(By.xpath(
				"//table//tr[contains(.,'" + districtName + "')]//td[contains(.,'Pridėti apylinkės atstovą')]//button"))
				.click();

		String name = TestData.randomName();
		String surName = TestData.randomName();

		fieldRepName.sendKeys(name);
		fieldRepLastName.sendKeys(surName);
		fieldRepLoginName.sendKeys(TestData.randomName());
		fieldRepPassword.sendKeys(TestData.randomName());
		buttonSubmit_Rep.click();
		buttonCloseForm.click();
		mySleep(200);
		Assert.assertTrue(
				driver.findElement(By.xpath("//table//tr[contains(.,'" + name + " " + surName + "')]")).isDisplayed());
		System.out.println("Rep " + name + " " + surName + " created");
	}

	public void editCandidatesToConstituencyNameButton(String constituencyName) {
		driver.findElement(
				By.xpath("//table//tr[contains(.,'" + constituencyName + "')]//td[contains(.,'Sąraša')]//button"))
				.click();
	}

	public void deleteByGivenNameButton(String name) {
		driver.findElement(By.xpath("//table//tr[contains(.,'" + name + "')]//td[contains(.,'Trinti')]//button"))
				.click();
	}

	public void deleteByNameConfirmButton(String name) {
		driver.findElement(By.xpath("//table//tr[contains(.,'" + name + "')]/td[5]/button[contains(.,'Patvirtinti')"))
				.click();
	}

	public void editConstituencyByGivenNameButton(String name) {
		driver.findElement(
				By.xpath("//table//tr[contains(.,'" + name + "')]//td[contains(.,'Redaguoti apygardą')]//button"))
				.click();
	}

	public void enterConstituencyDistricsButton(String name) {
		driver.findElement(
				By.xpath("//table//tr[contains(.,'" + name + "')]//td[contains(.,'Redaguoti apylin')]//button"))
				.click();
	}

	public void editDistrictGivenNameButton(String name) {
		driver.findElement(By.xpath("//table//tr[contains(.,'" + name + "')]//td[contains(.,'Redaguoti')]//button"))
				.click();
	}

	public int getAllDeleteButtons() {
		int amount = buttonDeleteAll.size();
		System.out.println("Amount of Constituencies/Districts: " + amount);
		return amount;
	}

	public void deleteAllConstituencies() {
		int amoutToDelete = buttonDeleteAll.size();
		if (amoutToDelete > 0)
			for (int i = 0; i < amoutToDelete; i++) {
				deleteButton();
				
			}

		System.out.println("Deleted Constituancies/Dsitricts : " + amoutToDelete);
		getAllDeleteButtons();
	}

	private void deleteButton() {
		buttonDeleteConstituency.click();
		buttonDeleteConstituencyConfirm.click();
		WebDriverWait wait = new WebDriverWait(driver, 3);
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//button[contains(.,'Patvirtinti')]")));
		}

	

	public String getPageTitle() {
		return pageConstituencies.getText();
	}

	public void addSingleCsvToConstituency(String name, String filePath) {
		WebDriverWait wait = new WebDriverWait(driver, 30);

		enterConstituencyCandidatesButton(name);
		System.out.println("Adding CSV file");
		mySleep(300);
		buttonAddFile.sendKeys(makeFilePath(filePath));
		checkIsLoaded();
		mySleep(300);

	}

	private void enterConstituencyCandidatesButton(String name) {
		driver.findElement(By.xpath("//table//tr[contains(.,'" + name + "')]//td[contains(.,'Sąrašas')]//button"))
				.click();
	}

	public void returnButton() {
		buttonReturn.click();
	}

}
