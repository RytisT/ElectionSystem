package lt.itakademija.PageFactory;

import java.io.IOException;
import java.util.List;
import java.util.Random;

import lt.itakademija.test.PageObject;

import org.apache.bcel.generic.RETURN;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

import lt.itakademija.utilites.*;

public class PartiesPage extends PageObject {

	public PartiesPage(WebDriver webDriver, String baseUrl) {
		super(webDriver, baseUrl);
	}

	private String elementForWaiting = "//*[@id='Add party']";
	
	@FindBy(xpath = "//button[contains(.,'Pridėti Partiją')]")
	WebElement buttonAddParty;

	@FindBy(id = "PartyId")
	WebElement fieldPartyId;
	@FindBy(id = "PartyName")
	WebElement fieldPartyName;
	@FindBy(id = "PartyCode")
	WebElement fieldPartyCode;

	@FindBy(className = "form-control")
	WebElement fieldConstituencyName;

	@FindBy(id = "CancelAdding")
	WebElement buttonCancelToAdd;

	@FindBy(xpath = "//table//tr//td[contains(.,'Pridėti')]/button")
	WebElement buttonSubmitParty;

	@FindBy(id = "file-select")
	WebElement buttonAddFile;

	@FindBy(id = ".//*[@id='UpdateParty']")
	WebElement buttonUpdateParty;

	@FindBy(xpath = "//button[contains(.,'Trinti')]")
	WebElement buttonDelete;

	@FindBy(xpath = "//button[contains(.,'Atšaukti')]")
	WebElement buttonAtsaukti;

	@FindBy(xpath = "//button[contains(.,'Patvirtinti')]")
	WebElement buttonDeleteConfirm;

	@FindBy(xpath = "//table//tr[contains(.,'')]//td[5]/button")
	WebElement buttonEdit;

	@FindBy(xpath = "//table//tr[contains(.,'')]//td[4]/button")
	WebElement buttonCandidates;

	@FindAll({ @FindBy(xpath = "//button[contains(.,'Sąrašas')]") })
	private List<WebElement> buttonDeleteAll;

	@FindBy(id = "Return")
	WebElement buttonReturn;
	
	@FindBy(xpath = "//*[@id='successAddPartyValidation']/span")
	WebElement successMessage;
	

	public void registerMultipleParties(int amount) throws IOException {
		Random r = new Random();

		for (int i = 1; i < amount+1; i++)
			registerParty(Integer.toString(i), TestData.randomString(randomGenerators.FULLSETLT, r.nextInt(50) + 1),
					TestData.getCode());
	}

	public void registerParty(String number, String name, String code) {

		buttonAddParty.click();
		fieldPartyName.clear();
		fieldPartyName.sendKeys(name);
		fieldPartyCode.clear();
		fieldPartyCode.sendKeys(code);
		fieldPartyId.clear();
		fieldPartyId.sendKeys(number);
		
		buttonSubmitParty.click();
		//WebDriverWait wait = new WebDriverWait(driver, 1);
		//wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//table//tr//td[contains(.,'Atšaukti')]/button")));
		System.out.println(successMessage.getText());
		Assert.assertTrue(driver.findElement(By.xpath("//*[contains(text(),'" + name + "')]")).isDisplayed());
		System.out.println("Added " + number + ", " + name + " party, " + code);
		checkIsLoaded();

	}

	public void editCandidatesToPartyNameButton(String partyName) {
		driver.findElement(By.xpath("//table//tr[contains(.,'" + partyName + "')]//td[4]/button")).click();
	}

	public void editPartyNameCodeAndShortcutButton(String partyName) {
		driver.findElement(By.xpath("//table//tr[contains(.,'" + partyName + "')]//td[5]/button")).click();
	}

	public void deletePartyByNameButton(String partyName) {
		driver.findElement(By.xpath("//table//tr[contains(.,'" + partyName + "')]//td[6]/button")).click();
	}

	public void deletePartyByNameConfirmButton(String partyName) {
		driver.findElement(
				By.xpath("//table//tr[contains(.,'" + partyName + "')]/td[6]/button[contains(.,'Patvirtinti')"))
				.click();
	}

	public int getAllDeleteButtons() {
		int amount = buttonDeleteAll.size();
		System.out.println("Amount of Parties : " + amount);
		return amount;
	}

	public void deleteAllParties() {
		int amoutToDelete = buttonDeleteAll.size();
		for (int i = 0; i < amoutToDelete; i++) {
			System.out.println(" Deleting Party " + (i + 1));
			deleteButton();

		}
	}

	public void addCsvToParty(String partyName, String multiCsvPath) {
		System.out.println("Adding CSV file");
		editCandidatesToPartyNameButton(partyName);

		mySleep(200);
		buttonAddFile.sendKeys(makeFilePath(multiCsvPath));
		checkIsLoaded();
		mySleep(200);

	}

	private void deleteButton() {
		buttonDelete.click();
		buttonDeleteConfirm.click();
		WebDriverWait wait = new WebDriverWait(driver, 2);
		wait.until(ExpectedConditions.invisibilityOfElementLocated(By.xpath("//button[contains(.,'Patvirtinti')]")));
	}

	public void returnButton() {
		buttonReturn.click();
	}
}
