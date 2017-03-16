package lt.itakademija.utilites;

import java.io.FileNotFoundException;
import java.io.PrintWriter;
import java.sql.ResultSet;
import java.sql.ResultSetMetaData;
import java.sql.SQLException;

import org.h2.tools.Csv;




public class GeneratorCsv extends randomGenerators {

	private static final String pathOfMulti_CSV = "src/test/resources/multiMand.csv";
	private static final String pathOfSingle_CSV = "src/test/resources/singleMand.csv";

	static final String CSV_SINGLE_FORMAT = "NAME,LAST_NAME,DATE_OF_BIRTH,DESCRIPTION,PARTY_ID,PERSONAL_ID";
	static final String CSV_MULTI_FORMAT = "PARTY_LIST_SEAT,NAME,LAST_NAME,DATE_OF_BIRTH,DESCRIPTION,PERSONAL_ID";

	static final int numberOfPartySeats = 10;
	static final int numberOfParties = 5;

	public static void main(String args[]) throws FileNotFoundException, SQLException {

		generateSingleCSV();
		generateMultiCSV();

		csvTest(pathOfSingle_CSV);
		csvTest(pathOfMulti_CSV);
	}

	public static void generateMultiCSV() throws FileNotFoundException {
		try (PrintWriter outM = new PrintWriter(pathOfMulti_CSV)) {
			outM.println(CSV_MULTI_FORMAT.toLowerCase());
			for (int i = 0; i < numberOfPartySeats; i++)
			outM.println(randomMulti(i + 1));
			outM.close();
			System.out.println("Generated " + numberOfPartySeats + " multi  mandate candidates to " + pathOfMulti_CSV);
		}
	}

	public static void generateSingleCSV() throws FileNotFoundException {
		try (PrintWriter outS = new PrintWriter(pathOfSingle_CSV)) {
			outS.println(CSV_SINGLE_FORMAT.toLowerCase());
			for (int i = 0; i < numberOfParties; i++)
				outS.println(randomSingle());
			outS.close();
			System.out.println("Generated " + numberOfParties + " single mandate candidates to " + pathOfSingle_CSV);
		}
	}

	protected static String randomMulti(int i) throws FileNotFoundException {
		return Integer.toString(i) + "," + randomNameFromFile(NAMES) + "," + randomNameFromFile(SURNAME) + "," + randomDOB()
				+",DESC"+ randomString(ABLT, rnd.nextInt(50))+"DESC," + randomPIN();
	}

	protected static String randomSingle() throws FileNotFoundException {
		return randomName() + "," + randomName() + "," + randomDOB() + ",Description," + randomParty() + ","
				+ randomPIN();
	}

	public static void csvTest(String path) throws SQLException {
		System.out.println();

		ResultSet rs = new Csv().read(path, null, null);
		ResultSetMetaData meta = rs.getMetaData();
		int noOfCols = meta.getColumnCount();

		for (int i = 0; i < noOfCols; i++)
			System.out.print(meta.getColumnLabel(i + 1) + " ");
		System.out.println();

		// Prints 5th row of csv file
		int i = 0;
		while (rs.next()) {
			if (i == 2)
				for (int x = 0; x < noOfCols; x++) 
					System.out.print(rs.getString(x + 1) + " ");
			i++;
		}
		System.out.println();
	}

	public static String randomParty() {
		int partyNo = rnd.nextInt(numberOfParties);
		return (partyNo == 0) ? "" : Integer.toString(partyNo);

	}

	public static String randomSeat() {
		int seatNo = rnd.nextInt(numberOfPartySeats);
		return (seatNo == 0) ? "" : Integer.toString(seatNo);
	}

}
