package lt.itakademija.utilites;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

public class DataReader {

	public List<String> getTestData(String fileName) throws IOException {
		List<String> records = new ArrayList<String>();
		String record;
		BufferedReader file = new BufferedReader(new FileReader(fileName));
		while ((record = file.readLine()) != null) {
			records.add(record);
		}
		file.close();
		return records;
	}
}
