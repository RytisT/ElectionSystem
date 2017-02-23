package lt.itakademija.uploadCSV;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.*;

public class toDB {

    private String url = "jdbc:h2:~/Desktop/es_database/database;";
    private String user = "sa";
    private String pass = "";

    public void CSVtoH2(String url, String table) throws IOException, SQLException {
        BufferedReader read = new BufferedReader(new FileReader(url));

        Connection conn = DriverManager.getConnection(this.url, user, pass);
        String ln;
        String firstLine = read.readLine();
        while ((ln = read.readLine()) != null) {
            String[] line = ln.split(",");
            conn.prepareStatement(
                    "INSERT INTO " + table + "("+ firstLine +")" +
                            " VALUES ('" + line[0] + "', '" + line[1] + "', '" + line[2] + "', '"
                            + line[3] + "', '" + line[4] + "', '" + line[5] + "');"
            ).execute();
        }

        conn.close();

    }
}