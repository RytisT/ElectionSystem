package lt.itakademija.x_samples;

import java.util.concurrent.TimeUnit;

import org.openqa.selenium.UnexpectedAlertBehaviour;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.firefox.FirefoxBinary;
import org.openqa.selenium.firefox.FirefoxDriver;
import org.openqa.selenium.firefox.FirefoxProfile;
import org.openqa.selenium.remote.CapabilityType;
import org.openqa.selenium.remote.DesiredCapabilities;
import org.testng.annotations.AfterMethod;
import org.testng.annotations.BeforeMethod;

import pageobjects.forms.HomePage;
import pageobjects.forms.LoginPage;
import utilities.Credentials;

public abstract class TestMain {
    public WebDriver webDriver;

    /**
     * Initialize webDriver
     * @throws Exception
     */
    @BeforeMethod
    public void initialize() throws Exception {
        webDriver = initWebDriver(webDriver);
    }

    /**
     * Closes webDriver
     * @throws Exception
     */
    @AfterMethod
    public void tearDown() throws Exception {
        webDriver.close();
        webDriver.quit();
    }

    /**
     * Initialize Firefox browser
     * @param webDriver
     * @return
     */
    public static WebDriver initWebDriver(WebDriver webDriver) {

        //--- starting Firefox Marionette ---
        DesiredCapabilities capabilities = DesiredCapabilities.firefox();
        capabilities.setCapability("marionette", true);
        
        System.setProperty("webdriver.gecko.driver", "geckodriver.exe");
        webDriver = new FirefoxDriver(capabilities);
        webDriver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
        webDriver.manage().window().maximize();

        return webDriver;
    }
    
    
    /**
     * Initialize Firefox browser. Not in use anymore
     * @param webDriver
     * @return
     */
    public static WebDriver initWebDriverOLD(WebDriver webDriver) {

        //--- setting virtual display ---
        FirefoxBinary ffox = new FirefoxBinary();
        ffox.setEnvironmentProperty("DISPLAY", ":99");

        //-- setting Unexpected behaviour ---
        DesiredCapabilities dc = new DesiredCapabilities();
        dc.setCapability(CapabilityType.SUPPORTS_JAVASCRIPT, true);
        dc.setCapability(CapabilityType.UNEXPECTED_ALERT_BEHAVIOUR, UnexpectedAlertBehaviour.ACCEPT);

        //--- load pages faster ---
        FirefoxProfile fp = new FirefoxProfile();
        fp.setPreference("webdriver.load.strategy", "unstable");
        fp.setPreference("extensions.checkCompatibility", false);

        //--- starting Firefox OLD ---
        webDriver = new FirefoxDriver(ffox, fp, dc);
        webDriver.manage().timeouts().implicitlyWait(7, TimeUnit.SECONDS);
        webDriver.manage().window().maximize();

        return webDriver;
    }

    /**
     * Logins to page and returns First default page
     * @param webDriver
     * @return
     */
    public HomePage login(WebDriver webDriver) {
        HomePage homePage;

        //--- open page with credentials in URL ------------------------------------------------------------------------
        //LoginPage loginPage = new LoginPage(webDriver, "https://" +
        //        Credentials.pageUsr + ":" +
        //        Credentials.pagePsw + "@" +
        //        Credentials.pageURL, true);
        //loginPage.checkIsLoaded();
        
        //--- open page without credentials in URL ---------------------------------------------------------------------
        LoginPage loginPage = new LoginPage(webDriver, Credentials.pageURL, true);
        loginPage.checkIsLoaded();

        //--- fill login form for session credentials (if no login form requested, skip it -----------------------------
        if(loginPage.isLoginRequired()) {
            loginPage.enterUsername(Credentials.accountUsr);
            loginPage.enterPassword(Credentials.accountPsw);
            homePage = loginPage.clickLogin();
        } else {
        	homePage = loginPage.returnHomePage();
        }

        return homePage;
    }
}
