package lt.itakademija.test;

import java.io.IOException;
import java.sql.SQLException;

import org.openqa.selenium.By;
import org.testng.Assert;
import org.testng.annotations.Test;

import lt.itakademija.PageFactory.ConstituenciesPage;
import lt.itakademija.utilites.GeneratorCsv;
import lt.itakademija.utilites.TestData;

public class TestConstituencies extends TestMain {

	private String baseUrl = "http://localhost:8080/#/admin";
	private String singlePath = "\\src\\test\\resources\\singleMand.csv";
	int amountOfTest = 5;
	
	@Test(priority = 0, enabled = true)
	public void testConstituencies_Appear_Correct() {
		System.out.println("T1-----------------ADMIN PAGE IS OPEN--------------");
		constPage = new ConstituenciesPage(driver, baseUrl);
		String constituenciesPageTitle = constPage.getPageTitle();
		System.out.println(constituenciesPageTitle);
		Assert.assertTrue(constituenciesPageTitle.contains("Apygardos/Apylinkės"), "Admin page is not open");
	}

	@Test(priority = 1, enabled = true)
	public void testRegisterMultipleConstituencies() throws IOException {
		System.out.println("TFR2-01----------------REGISTERING MULTIPLE CONSTITUENCIES--------------");
		constPage = new ConstituenciesPage(driver, baseUrl);
		constPage.getAllDeleteButtons();
		constPage.deleteAllConstituencies();
		constPage.registerMultipleConstituency(amountOfTest);
		constPage.deleteAllConstituencies();

	}

	@Test(priority = 2, enabled = true)
	public void testRegisterConstituencyAdDistrict() throws IOException {
		System.out.println("T3-----------------REGISTERING CONSTITUENCY AND DISTRICT--------------");
		constPage = new ConstituenciesPage(driver, baseUrl);

		String testConstituency = "TestCAD " + TestData.randomName();
		constPage.registerConstituency(testConstituency);

		constPage.enterConstituencyDistricsButton(testConstituency);

		String testDistrictName = "TestCAD" + TestData.randomName();
		constPage.registerDistrict(testDistrictName, "kazkokia", "1000");
		Assert.assertTrue(
				driver.findElement(By.xpath("//table//tr[contains(.,'" + testDistrictName + "')]")).isDisplayed());
		//constPage.addRepresentativeToGivenDistricName(testDistrictName);
		constPage.getAllDeleteButtons();

	}

	@Test(priority = 3, enabled = true)
	public void testRegisterMultipleDistricts() throws IOException {
		System.out.println("T4-----------------REGISTERING MULTIPLE DISTRICTS--------------");
		constPage = new ConstituenciesPage(driver, baseUrl);
		String testConstituency = "TestMultiDist" + TestData.randomName();
		constPage.registerConstituency(testConstituency);
		constPage.enterConstituencyDistricsButton(testConstituency);
		constPage.registerMultipleDistrics(amountOfTest);
		constPage.getAllDeleteButtons();
		// constPage.deleteAllConstituencies();

	}

	@Test(priority = 9, enabled = true)
	public void testAddRepresentative() throws IOException {
		System.out.println("T5-----------------ADDING REPRESENTATIVE--------------");

		constPage = new ConstituenciesPage(driver, baseUrl);
		String test = "Test Rep " + TestData.randomName();
		constPage.registerConstituency(test);
		constPage.enterConstituencyDistricsButton(test);
		constPage.registerDistrict(test, test, "6969");
		constPage.addRepresentativeToGivenDistricName(test);
	}

	@Test(priority = 10, enabled = true)
	public void testAddMultipleRepresentatives() throws IOException {
		System.out.println("T6-----------------ADDING REPRESENTATIVES--------------");

		for (int i = 0; i < amountOfTest; i++) {
			constPage = new ConstituenciesPage(driver, baseUrl);
			String test = "TestRep " + TestData.randomName();
			constPage.registerConstituency(test);
			constPage.enterConstituencyDistricsButton(test);
			constPage.registerDistrict(test, test, "6969");
			constPage.addRepresentativeToGivenDistricName(test);
		}
	}

	@Test(priority = 6, enabled = true)
	public void testAddSingleMandateCandidateListCSV() throws IOException, SQLException {
		System.out.println("T7-----------------ADDING SINGLE MANDATE CANDIDATE LIST CSV FILE--------------");
		constPage = new ConstituenciesPage(driver, baseUrl);

		String test = "TestCSV " + TestData.randomName();
		constPage.registerConstituency(test);
		GeneratorCsv.generateSingleCSV();
		constPage.addSingleCsvToConstituency(test, singlePath);

	}

	@Test(priority = 7, enabled = true)
	public void testMultiAddSingleMandateCandidateListCSV() throws IOException, SQLException {
		System.out.println("T8-----------------ADDING SINGLE MANDATE CANDIDATE LIST CSV FILE--------------");
		constPage = new ConstituenciesPage(driver, baseUrl);
		constPage.deleteAllConstituencies();
		for (int i = 0; i < amountOfTest; i++) {
			String test = "TestCSVs " + TestData.randomString(TestData.ABEN, 10);
			constPage.registerConstituency(test);
			GeneratorCsv.generateSingleCSV();
			constPage.addSingleCsvToConstituency(test, singlePath);
			constPage.returnButton();
		}
	}
}
