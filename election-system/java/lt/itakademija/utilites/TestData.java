package lt.itakademija.utilites;

import java.io.File;
import java.io.FileNotFoundException;
import java.util.ArrayList;
import java.util.Scanner;
import org.openqa.selenium.By;
import org.openqa.selenium.WebDriver;

public abstract class TestData extends randomGenerators {
	

	
	public static String getDistrict() throws FileNotFoundException {
		return randomDataFromTxt(DISTRICTS);
	}

	public static String getConstituency() throws FileNotFoundException {
		return randomDataFromTxt(CONSTITUENCIES);
	}

	public static String getAddress() throws FileNotFoundException {
		return randomDataFromTxt(ADDRESSES);
	}

	public static String getParty() throws FileNotFoundException {
		return randomDataFromTxt(PARTIES);
	}

	public static int getButtonCountByText(String text, WebDriver driver){
		
		int count =driver.findElements(By.xpath("//button[contains(.,'"+text+"')]")).size();
		System.out.println(count);
		return count;
	}
	
	
	public static String randomDataFromTxt(String path) throws FileNotFoundException {
		Scanner s = new Scanner(new File(path));
		ArrayList<String> list = new ArrayList<String>();
		while (s.hasNextLine()) {
			list.add(s.nextLine());
		}
		s.close();
		return list.get(rnd.nextInt(list.size()));

	}

	public static ArrayList<String> listFromTxt(String path) throws FileNotFoundException {

		Scanner s = new Scanner(new File(path));
		ArrayList<String> list = new ArrayList<String>();
		while (s.hasNext()) {
			list.add(s.next());
		}
		s.close();
		return list;

	}

	public static String getCode() {
		return randomString(ABLT, 6).toUpperCase();
	}

	
}
