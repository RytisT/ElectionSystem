package lt.itakademija.test;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterClass;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeClass;
import lt.itakademija.PageFactory.ConstituenciesPage;
import lt.itakademija.PageFactory.PartiesPage;

public abstract class TestMain {

	ConstituenciesPage constPage;
	PartiesPage partyPage;
	public WebDriver driver;

	/**
	 * Initialize webDriver
	 * 
	 * @throws Exception
	 */

	@BeforeClass
	public void initialize() throws Exception {
		driver = new FirefoxDriver();
		driver.manage().window().maximize();
		driver.manage().timeouts().implicitlyWait(3, TimeUnit.SECONDS);

	}

	/**
	 * Closes webDriver
	 * 
	 * @throws Exception
	 */
	@AfterClass
	public void tearDown() throws Exception {
		driver.close();
		driver.quit();
	}

}
