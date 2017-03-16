package lt.itakademija.x_samples;

import java.util.concurrent.TimeUnit;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.chrome.ChromeDriver;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.ie.InternetExplorerDriver;
import org.openqa.selenium.opera.OperaDriver;
import org.testng.annotations.AfterClass;
import org.testng.annotations.BeforeClass;
import org.testng.annotations.Parameters;
import it.akademija.representative.MultiMemberPage;
import it.akademija.representative.RepresentativeViewPage;
import it.akademija.representative.SingleMemberPage;

public abstract class VotingSystem {
	
	protected WebDriver driver;
	protected LoginPage pageLogin;
	protected CountyPage pageCounty;
	protected DistrictPage pageDistrict;
	protected RepresentativePage pageRepresentative;
	protected PartyPage pageParty;
	protected CandidatesPage pageCandidates;
	protected SingleMemberPage pageSingleMember;
	protected MultiMemberPage multiMemberPage;
	//protected RepresentativeViewPage pageRepresentativeView;
	
	private static int timesRan = 0; 
	
	@Parameters({ "link", "browser", "adminLink" })
	@BeforeClass
	public void settingUp(String link, String browser, String adminLink) throws Exception {
		if (browser.equalsIgnoreCase("firefox")) {
			driver = new FirefoxDriver();
		} else if (browser.equalsIgnoreCase("chrome")) {
			System.setProperty("webdriver.chrome.driver",
					"C:\\Users\\User\\workspace\\Election-automation\\chromedriver.exe");
			driver = new ChromeDriver();
		} else if (browser.equalsIgnoreCase("ie")) {
			System.setProperty("webdriver.ie.driver", "C:\\Users\\User\\workspace\\Election-automation\\IEDriverServer.exe");
			driver = new InternetExplorerDriver();
		} else if (browser.equalsIgnoreCase("opera")){
			System.setProperty("webdriver.opera.driver", "C:\\Users\\User\\workspace\\Election-automation\\operadriver.exe");
			driver = new OperaDriver();
		}else {
			throw new Exception("Browser is not correct");
		}
		driver.manage().window().maximize();	
		driver.manage().timeouts().implicitlyWait(10, TimeUnit.SECONDS);
		System.out.println("skaiciukas: " + timesRan);
		switch (timesRan) {
		case 0:
			driver.get(link);
			pageLogin = new LoginPage(driver);
			break;
		case 1:
			driver.get(adminLink);
			pageCounty = new CountyPage(driver);
			break;
		case 2:
			driver.get(adminLink);
			pageDistrict = new DistrictPage(driver);
			break;
		case 3:
			driver.get(adminLink);
			pageRepresentative = new RepresentativePage(driver);
			break;
		case 4:
			driver.get(adminLink);
			pageParty = new PartyPage(driver);
			break;
		case 5:
			driver.get(adminLink);
			pageCandidates = new CandidatesPage(driver);
			break;
		case 6:
			driver.get(link);
			pageSingleMember = new SingleMemberPage(driver);
			
			break;
		case 7:
			driver.get(link);
			multiMemberPage = new MultiMemberPage(driver);
		//	pageRepresentativeView = new RepresentativeViewPage(driver);
			break;
		default:
			break;
			
			
		}
//		if (timesRan == 0){
//			driver.get(link);
//			
//		} else {
//			driver.get(adminLink);
//		}
		timesRan++;
	}
	
	@AfterClass
	public void endingTestActivities() {
		driver.close();
	}

}
