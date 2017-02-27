package lt.itakademija.uploadCSV;

import java.io.BufferedReader;
import java.io.FileReader;
import java.io.IOException;
import java.sql.*;

public class toDB {

    private String url = "jdbc:h2:~/Desktop/ElectionSystem/ElectionSystem/ElectionSystem/election-system/data/db;";
    private String user = "sa";
    private String pass = "";

    public void CSVtoH2(String url, String table, Integer partyId) throws IOException, SQLException {
        BufferedReader read = new BufferedReader(new FileReader(url));

        try {
            Connection conn = DriverManager.getConnection(this.url, user, pass);

            String ln;
            String firstLine = read.readLine();
            while ((ln = read.readLine()) != null) {
                String[] line = ln.split(",");
                System.out.println("INSERT INTO " + table + " (party_id," + firstLine + ")" +
                        " VALUES ('" + partyId + "', '" + line[0] + "', '" + line[1] + "', '" + line[2] + "', '"
                        + line[3] + "', '" + line[4] + "');");
                PreparedStatement stmt = conn.prepareStatement(
                        "INSERT INTO " + table + " (party_id," + firstLine + ")" +
                                " VALUES ('" + partyId + "', '" + line[0] + "', '" + line[1] + "', '" + line[2] + "', '"
                                + line[3] + "', '" + line[4] + "');"
                );
                stmt.executeUpdate();
            }
            conn.close();

        } catch (SQLException e){}

    }
}