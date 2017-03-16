package lt.itakademija.utilites;

import java.io.File;
import java.io.FileNotFoundException;
import java.security.SecureRandom;
import java.sql.Timestamp;
import java.text.SimpleDateFormat;
import java.util.ArrayList;
import java.util.Date;
import java.util.Scanner;

public class randomGenerators {

	protected static final String pathResources = "src/test/resources/";
	protected static final String NAMES = "src/test/resources/vardai.txt";
	protected static final String SURNAME = "src/test/resources/pavardes.txt";
	protected static final String DISTRICTS = "src/test/resources/apylinkes.txt";
	protected static final String CONSTITUENCIES = "src/test/resources/apygardos.txt";
	protected static final String ADDRESSES = "src/test/resources/adresai.txt";
	protected static final String PARTIES = "src/test/resources/partijos.txt";
	
	
	
	public static final String ABEN = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
	public final static String ABLT = "AaĄąBbCcČčDdEeĘęĖėFfGgHhIiĮįYyJjKkLlMmNnOoPpRrSsŠšTtUuŲųŪūVvZzŽž";
	public final static String NUMBERS = "0123456789";
	public static final String PUNCTUATION = "!,.:;„-“?\" ()";
	public static final String FULLSETLT = ABLT + NUMBERS + PUNCTUATION;

	protected static SecureRandom rnd = new SecureRandom();

	private static long startRangeDOB = Timestamp.valueOf("1930-01-01 00:00:00").getTime();
	private static long endRangeDOB = Timestamp.valueOf("1999-12-31 00:00:00").getTime();
	private static final SimpleDateFormat dateFormat = new SimpleDateFormat("yyyy-MM-dd");

	static String dob = null;

	static String randomNameFromFile(String path) throws FileNotFoundException {
		Scanner s = new Scanner(new File(path));
		ArrayList<String> list = new ArrayList<String>();
		while (s.hasNext()) {
			String cap = s.next().toLowerCase();
			cap = cap.substring(0, 1).toUpperCase() + cap.substring(1);
			list.add(cap);
		}
		s.close();

		return list.get(rnd.nextInt(list.size()));
	}

	public static String randomName() {
		int x = rnd.nextInt(8) + 4;
		return randomString(ABLT, 1).toUpperCase() + randomString(ABLT, x).toLowerCase();
	}

	public static String randomString(String symbols, int length) {
		StringBuilder sb = new StringBuilder(length);
		for (int i = 0; i < length; i++)
			sb.append(symbols.charAt(rnd.nextInt(symbols.length())));
		return sb.toString();
	}

	public static String randomNR(int x) {
		return Integer.toString(rnd.nextInt(x));
	}

	public static String randomPIN() {
		char c = rnd.nextBoolean() ? '3' : '4';
		if (dob == null)
			return c + randomString(NUMBERS, 10);
		return c + dob.replaceAll("-", "").substring(2, 8) + randomString(NUMBERS, 4);
	}

	public static String randomDOB() {

		dob = dateFormat.format(new Date(startRangeDOB + (long) (Math.random() * (endRangeDOB - startRangeDOB + 1))));
		return dob;
	}

	public static int randBetween(int start, int end) {
		return start + (int) Math.round(Math.random() * (end - start));
	}

}
