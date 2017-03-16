package lt.itakademija.x_samples;

import java.awt.AWTException;
import java.awt.Robot;
import java.awt.Toolkit;
import java.awt.datatransfer.StringSelection;
import java.awt.event.KeyEvent;

import org.openqa.selenium.Alert;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindBy;

import lt.itakademija.PageFactory.HomePage;
import lt.itakademija.test.PageObject;

/**
 * Class for login page: in this class should only be listed fields, buttons,
 * methods related to Login page Created by pauliusl on 2016-12-19.
 */
public class LoginPage extends PageObject {

	// --- fields
	// -------------------------------------------------------------------------------------------------------
	@FindBy(id = "username")
	@CacheLookup
	private WebElement username;

	@FindBy(id = "password")
	@CacheLookup
	private WebElement password;

	// --- buttons
	// ------------------------------------------------------------------------------------------------------
	@FindBy(css = "button[class='btn btn-primary']")
	@CacheLookup
	private WebElement loginButton;

	public LoginPage(WebDriver webDriver, String baseUrl) {
		this(webDriver, baseUrl, false);
	}

	public LoginPage(WebDriver webDriver, String baseUrl, boolean navigateTo) {
		super(webDriver, baseUrl);

		if (navigateTo) {
			this.driver.navigate().to(baseUrl);
		}

		checkIsLoaded();
	}

	// ==================================================================================================================
	// --- setters
	// ------------------------------------------------------------------------------------------------------
	// ==================================================================================================================

	
	/**
	 * Sets username
	 * 
	 * @param user
	 */
	public void enterUsername(String user) {
		setTextFieldValue(username, user);
	}

	/**
	 * Sets password
	 * 
	 * @param psw
	 */
	public void enterPassword(String psw) {
		setTextFieldValue(password, psw);
	}

	// ==================================================================================================================
	// --- buttons
	// ------------------------------------------------------------------------------------------------------
	// ==================================================================================================================

	/**
	 * Clicks Login button
	 * 
	 * @return
	 */
	public HomePage clickLogin() {
		loginButton.click();
		return new HomePage(driver, baseUrl);
	}

	// ==================================================================================================================
	// --- common methods
	// -----------------------------------------------------------------------------------------------
	// ==================================================================================================================

	/**
	 * If authentication is not required just return the new page
	 * 
	 * @return
	 */
	public HomePage returnHomePage() {
		return new HomePage(driver, baseUrl);
	}

	// ==================================================================================================================
	// --- checks
	// -------------------------------------------------------------------------------------------------------
	// ==================================================================================================================

	/**
	 * Checks if URL has "login" text in URL - if yes, that means authentication
	 * required
	 * 
	 * @return
	 */
	public boolean isLoginRequired() {
		return driver.getCurrentUrl().contains("login");
	}
}
