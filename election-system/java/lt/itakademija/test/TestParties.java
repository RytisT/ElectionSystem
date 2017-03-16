package lt.itakademija.test;

import java.io.FileNotFoundException;
import java.io.IOException;
import java.lang.reflect.ParameterizedType;
import java.sql.SQLException;
import java.util.concurrent.TimeUnit;

import org.junit.Ignore;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.testng.Assert;
import org.testng.annotations.BeforeTest;
import org.testng.annotations.Test;

import lt.itakademija.PageFactory.ConstituenciesPage;
import lt.itakademija.PageFactory.PartiesPage;
import lt.itakademija.utilites.GeneratorCsv;
import lt.itakademija.utilites.TestData;

public class TestParties extends TestMain {

	private String baseUrl = "http://localhost:8080/#/admin/parties";
	private String multiCsvPath = "\\src\\test\\resources\\multiMand.csv";
	private int amoutOfTest = 4;
	
	@Test(priority = 2, enabled = true)
	public void testRegisterMultipleParties() throws IOException {
		partyPage = new PartiesPage(driver, baseUrl);
				
		System.out.println("Test Start");
		partyPage.getAllDeleteButtons();
		partyPage.deleteAllParties();
		partyPage.registerMultipleParties(amoutOfTest);
		Assert.assertEquals(partyPage.getAllDeleteButtons(), amoutOfTest, "Amount of created parties is incorect");
		partyPage.deleteAllParties();
		partyPage.getAllDeleteButtons();
	}

	@Test(priority = 1, enabled = true)
	public void testAddingCsvFileToParty() throws FileNotFoundException {
		partyPage = new PartiesPage(driver, baseUrl);
		partyPage.deleteAllParties();
		partyPage.registerParty("20", "Pavadinimas", "Kodas");
		GeneratorCsv.generateMultiCSV();
		partyPage.addCsvToParty("Pavadinimas", multiCsvPath);
		partyPage.returnButton();
	}

	@Test(priority = 3, enabled = true)
	public void testAddingMultiCsvFileToParties() throws FileNotFoundException, SQLException {
		partyPage = new PartiesPage(driver, baseUrl);
		partyPage.deleteAllParties();
		for (int i = 0; i < amoutOfTest; i++) {
			GeneratorCsv.generateMultiCSV();
			String testname = TestData.randomName();
			partyPage.registerParty(Integer.toString(i + 10), testname, TestData.randomString(TestData.ABEN, 6));
			partyPage.addCsvToParty(testname, multiCsvPath);
			partyPage.returnButton();
		}
	}
}
