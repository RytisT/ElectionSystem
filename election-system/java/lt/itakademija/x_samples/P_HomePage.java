package lt.itakademija.x_samples;

import pageobjects.main.PageObject;
import java.util.List;

import org.openqa.selenium.By;
import org.openqa.selenium.JavascriptExecutor;
import org.openqa.selenium.WebDriver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.ui.ExpectedCondition;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;
import org.testng.Assert;

/**
 * Class is default page after login. According to Page Object pattern - all pages should have their own class.
 * If there are multiple forms in one page - each form can have separate class and then one parent class for all of them
 * Created by pauliusl on 2016-12-19.
 */
public class HomePage extends PageObject {

	//--- find an element which is always visible and clickable in a page ---
	//--- should be better if it's loaded one of the latest ---
	private String elementForWaiting = "//a/b[text() = 'Contacts']";

	//--- another wait is for an element which should disappear (example: successful deletion message) ---
	private String elementForWaitingToBeGone = "//div[@ng-reflect-inner-h-t-m-l='Selection successfully removed.']";

	//--- Fields -------------------------------------------------------------------------------------------------------
	//--- try to sort fields in here by their position in the page: if on top the page it should be higher listed and vise versa
	//--- @FindBy can be used with: id, name, className, css, tagName, linkText, partialLinkText, xpath

	//--- at first element should be searched by id (fastest way) ---
	@FindBy(id = "id1")
	@CacheLookup
	private WebElement elementById;

	//--- element can be searched by tag name ---
	@FindBy(name = "name1")
	@CacheLookup
	private WebElement elementByName;

	//--- element can be searched by css ---
	@FindBy(css = ".logo_standard")
	@CacheLookup
	private WebElement elementByCss;

	//--- element can be searched by xpath (slowest way) ---
	@FindBy(xpath = "//form/div/input[3]")
	@CacheLookup
	private WebElement elementByXpath;

	//--- element can be also search using functions in selection ---
	@FindBy(xpath = "//a[contains(text(), 'Careers')]")
	@CacheLookup
	private WebElement elementByFunction;

	//--- if element has text inside tag, but it's not the first one in line (another child tag in front) ---
	@FindBy(xpath = "//td[text()[contains(.,'ABC')]]")
	@CacheLookup
	private WebElement elementWithTagAndText;

	//--- element can be search by truncated text ---
	@FindBy(xpath = "//td[contains(normalize-space(.), 'ABC')]")
	@CacheLookup
	private WebElement elementWithSpaces;

	//--- element can be also search using multiple selections ---
	@FindBy(xpath = "//td[(@class='currency') and (contains(text(), 'USD'))]")
	@CacheLookup
	private WebElement elementByMultiple;

	//--- if element needs to be recalculated - don't use @CacheLookup as it caches element on page load ---
	@FindBy(xpath = "//label[@class='xpath1']/button[" +  "anyRecalculatedNumber" + "]/a")
	private WebElement elementWithouLookup;

	//--- you can get a previous tag from the same level ---
	@FindBy(xpath = "//span[contains(text(), 'spans text')]/preceding-sibling::a")
	private WebElement previousSiblingLookup;

	//--- you can get a next tag from the same level ---
	@FindBy(xpath = "//span[contains(text(), 'spans text')]/following-sibling::a")
	private WebElement nextSiblingLookup;

	//--- you can get a parent tag ---
	@FindBy(xpath = "//span[contains(text(), 'spans text')]/..")
	private WebElement parentLookup;    

	//--- there is also an option to get a list of elements ---
	@FindBy(css = "div[class='yt-lockup-tile yt-lockup-video']")
	private List<WebElement> videoElements;

	//--- or find all elements which match at least one given condition ---
	@FindAll({@FindBy(id = "username"),
		@FindBy(className = "username-field")})
	private WebElement user_name;

	//--- Buttons ------------------------------------------------------------------------------------------------------
	//--- the same sorting for button as fields have: higher in the page - higher in the class

	//--- buttons are the same elements as fields - they just should be listed separately from fields (easier maintenance) ---
	@FindBy(id = "submit")
	@CacheLookup
	private WebElement elementButton;

	//--- Constructor --------------------------------------------------------------------------------------------------

	public HomePage(WebDriver webDriver, String baseUrl) { super(webDriver, baseUrl); }

	/**
	 * Checks if the page represented by this page object is loaded. This function overrides original PageObject.checkIsLoaded
	 * it's because we need to wait for initial load to be completed (after login it takes time while all elements are loaded
	 */
	public void checkIsLoaded() {
		ExpectedCondition<Boolean> pageLoadCondition = new ExpectedCondition<Boolean>() {
			public Boolean apply(WebDriver driver) {
				return ((JavascriptExecutor)driver).executeScript("return document.readyState").equals("complete");
			}
		};
		WebDriverWait wait = new WebDriverWait(webDriver, 30);
		wait.until(pageLoadCondition);

		//--- use "elementForWaiting" element for double checking if the page is completed loaded
		// --- if there is no need for double checking - just remove below line (most of the time it's enough to have above single check)
		try {
			waitUntilElementToBeClickable(By.xpath(elementForWaiting));
		} catch (Exception e) {
			Assert.fail("Could not wait while page will completely load");
		}
	}

	/**
	 * Waits till green completion message dissapears
	 */
	public void checkDeletionMsgDisappeared() {
		try {
			//WebDriverWait wait = new WebDriverWait(webDriver, 60);
			ExpectedConditions.invisibilityOfElementLocated(By.xpath(elementForWaitingToBeGone));
		} catch (Exception e) {
			Assert.fail("Could not wait while element will not be visible");
		}
	}

	//==================================================================================================================
	//--- getters ------------------------------------------------------------------------------------------------------
	//==================================================================================================================

	/**
	 * Most common and simplest example of getter: returns tag's text
	 * @return
	 */
	public String getUsername() { return getTextFieldValue(elementByName); }

	/**
	 * Returns "prefix" attribute's value for "elementByName" element
	 * @return
	 */
	public String getCountryPrefix() {
		return getFieldAttributeValue(elementByName, "prefix");
	}

	/**
	 * Returns given element's parent tag
	 * @param element
	 * @return
	 */
	public WebElement getParentWebElement(WebElement element) {
		return element.findElement(By.xpath(".."));
	}

	/**
	 * Returns given element's ONE child tag
	 * @param element
	 * @param childsXpath
	 * @return
	 */
	public WebElement getChildWebElement(WebElement element, String childsXpath) {
		return element.findElement(By.xpath(".//" + childsXpath));
	}

	//==================================================================================================================
	//--- setters ------------------------------------------------------------------------------------------------------
	//==================================================================================================================

	/**
	 * Most common and simplest of setter: enter string into text field
	 * All elements should be interacted only through functions - not directly from the test
	 * @param value
	 */
	public void setUsername(String value) { 
		//--- unhide element: take attribute from the element and change it to whatever you need ---
		String js = "arguments[0].style.display='inline';";
		((JavascriptExecutor) webDriver).executeScript(js, elementByXpath);

		waitForElementToBeInDOM(elementByName);
		setTextFieldValue(elementByName, value); 
	}

	//==================================================================================================================
	//--- buttons ------------------------------------------------------------------------------------------------------
	//==================================================================================================================

	/**
	 * Clicks search button and returnds Google Search results page
	 */
	public CareersPage openCareersPage() {
		System.out.println("Opening 'Careers' button...");

		waitForElementToBeInDOM(elementByFunction);
		elementByFunction.click();
		return new CareersPage(webDriver, baseUrl);
	}

	//==================================================================================================================
	//--- asserts ------------------------------------------------------------------------------------------------------
	//==================================================================================================================

	/**
	 * Asserts if "elementByCss" elements holds "New client" text
	 * Asserts should only be used in assert... functions like this - don't add them in setters, getters or regular functions
	 */
	public void assertTitle(String value) {
		System.out.println("Asserting '" + value + "' title...");
		
		waitForElementToBeInDOM(elementByCss);
		Assert.assertEquals(elementByCss.getText(), value, "Title");
	}
	
	public void assertLogoIsDisplayed() {
		System.out.println("Asserting if logo is displayed...");
		
		Assert.assertTrue(isElementDisplayed(elementByCss), "Logo is not displayed!");
	}
}
