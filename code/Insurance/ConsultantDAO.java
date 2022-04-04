package Insurance;

import java.sql.*;

/**
 * ConsultantService provides all the necessary methods related to Consultants.
 * In future lesson we will change the code in order to provide data from a Database.
 *  
 * @version 1.0
 */
public class ConsultantDAO {

    /**
	 * This method is used to authenticate a Consultant.     
	 * 
	 * @param Consultantname, String the Consultantname
	 * @param password, String the password
	 * @return Consultant, the Consultant Object 
	 * @throws Exception, if the credentials are not valid or an error occurs.
	 */
    public Consultant authenticate(String consultantName, String password) throws Exception {

        DB db = new DB();
        Connection con = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        String sql = "select * from consultantt where consultantName = ? AND userPassword = ?;";

        try {
            
            con = db.getConnection();
            stmt = con.prepareStatement(sql);

            // setting parameters
            stmt.setString(1, consultantName);
            stmt.setString(2, password);

            rs = stmt.executeQuery();

            if ( !rs.next() ) {

                throw new Exception("Wrong fullname or password");

            }
            // public Consultant(String fullname, String consultantname, String email, String gender, String password) { 
            Consultant consultant = new Consultant( rs.getString("fullName"),
                rs.getString("consultantName"), rs.getString("email"), rs.getString("gender"),rs.getString("userPassword"));

            rs.close();
            stmt.close();
            db.close();
            
            return consultant;

        } catch (Exception e) {
            
            throw new Exception(e.getMessage());

        } finally {

            try {
                db.close();
            } catch (Exception e) {
                
            }

        }

    }

    // register 
    /**
	 * Register/create new consultant.
	 * 
	 * @param consultant, consultant
	 * @throws Exception, if encounter any error.
	 */
	public void register(Consultant consultant) throws Exception {
			
		DB db = new DB();
        Connection con = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        String sqlCheck = "select * from consultantt where consultantName=? OR email=?";
        // public Consultant(String fullname, String consultantname, String email, String gender, String password) { 
        // TODO auto - increment id  ! ! !  unique email 
        String sql = "INSERT INTO consultantt (fullName, consultantName, gender, userPassword, email) " 
            + " VALUES (?, ?, ?, ?, ?)";

        try {
            
            con = db.getConnection();

            stmt = con.prepareStatement(sqlCheck);
            // setting parameters
            stmt.setString(1, consultant.getUserName());
            stmt.setString(2, consultant.getEmail());

            rs = stmt.executeQuery();

            if ( rs.next() ) {
                rs.close();
                stmt.close();
                throw new Exception("Sorry, consultantname or email already registered.");
            }

            stmt = con.prepareStatement(sql);

            // setting parameters
            stmt.setString(1, consultant.getFullName());
            stmt.setString(2, consultant.getUserName());
            stmt.setString(3, consultant.getGender());
            stmt.setString(4, consultant.getPassword());
            stmt.setString(5, consultant.getEmail());

            stmt.executeUpdate();

            stmt.close();
            db.close();

        } catch (Exception e) {
            throw new Exception(e.getMessage());
        } finally {

            try {
                db.close();
            } catch (Exception e) {
                
            }
        }		
		
	}//end of register
    
} //End of class
