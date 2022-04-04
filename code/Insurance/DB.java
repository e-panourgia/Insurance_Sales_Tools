package Insurance;

import java.sql.SQLException;
import java.sql.DriverManager;
import java.sql.Connection;

public class DB
{
    private final String dbServer = "195.251.249.131";
    private final String dbServerPort = "3306";
    private final String dbName = "ismgroup4";
    private final String dbusername = "ismgroup4";
    private final String dbpassword = "9et7ru";
    private Connection con;
    
    public DB() {
        this.con = null;
    }
    
    public Connection getConnection() throws Exception {
        try {
            Class.forName("com.mysql.jdbc.Driver").newInstance();
        }
        catch (Exception ex) {
            throw new Exception("MySQL Driver error: " + ex.getMessage());
        }
        try {
            return this.con = DriverManager.getConnection("jdbc:mysql://195.251.249.131:3306/ismgroup4", "ismgroup4", "9et7ru");
        }
        catch (Exception ex2) {
            throw new Exception("Could not establish connection with the Database Server: " + ex2.getMessage());
        }
    }
    
    public void close() throws SQLException {
        try {
            if (this.con != null) {
                this.con.close();
            }
        }
        catch (SQLException ex) {
            throw new SQLException("Could not close connection with the Database Server: " + ex.getMessage());
        }
    }
}