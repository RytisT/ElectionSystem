package lt.itakademija.x_samples;

import org.testng.Assert;
import org.testng.annotations.Test;
import java.io.File;
import java.io.IOException;
import org.openqa.selenium.By;
import org.openqa.selenium.WebElement;
import org.testng.annotations.Parameters;

public class TestCounty extends VotingSystem{

	private int numberOfTimesTestWasRan = 0;

	@Parameters({ "countyFile" })
	@Test(priority = 3, enabled = true)
	public void testRegisterMultipleCounties(String countyFile) throws IOException {
		pageCounty.registerMultipleCounties(countyFile);
	}

	/**
	 * TC05 and TC10
	 */
	@Parameters({ "countyName" })
	@Test(priority = 3, invocationCount = 2, enabled = true)
	public void testRegisterCounty(String countyName) {
		pageCounty.registerCounty(countyName, "");
		if (numberOfTimesTestWasRan == 0) {
			Assert.assertTrue(pageCounty.alert.getText().contains("Apygarda " + countyName + " sukurta"));
		} else {
			Assert.assertTrue(pageCounty.alert.getText().contains("Apygarda su tokiu pavadinimu jau užregistruota."));
		}
		numberOfTimesTestWasRan++;
	}

	@Parameters({ "differentCounty" })
	@Test(priority = 5, enabled = true)
	public void testDeleteCounty(String differentCounty) {
		pageCounty.deleteCounty(differentCounty);
		Assert.assertTrue(
				pageCounty.alert.getText().contains("Apygarda " + differentCounty + " ištrinta"));
	}

	@Parameters({ "countyName", "newCountyName" })
	@Test(priority = 4, enabled = true)
	public void testEditCounty(String countyName, String newCountyName) {
		pageCounty.editCounty(countyName, newCountyName);
		Assert.assertTrue(
				pageCounty.alert.getText().contains("Apygardos pavadinimas pakeistas iš " + countyName + " į " + newCountyName));
	}

	@Parameters({ "newCountyName", "candidatesList" })
	@Test(priority = 6, enabled = true)
	public void testAddCandidatesList(String newCountyName, String candidatesList) {
		pageCounty.addCandidatesList(newCountyName, candidatesList);
	}
	
}
