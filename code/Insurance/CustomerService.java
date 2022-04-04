package Insurance;
import java.sql.*;

public class CustomerService {
    /**
	 * Register/create new customer.
	 * 
	 * @param customer, customer
	 * @throws Exception, if encounter any error.
	 */
	public void register(Customer customer) throws Exception {
			
		DB db = new DB();
        Connection con = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;

        String sqlCheck = "select * from customer where email=?";
        //public Customer(String fullname, String email, String phone, String gender, String categoryprofile, String market, String saving, String pension, String description) {   
        String sql = "INSERT INTO customer (fullName, email, phone, gender, category_profile, market, saving, pension, description) " 
            + " VALUES (?, ?, ?, ?, ?, ?, ?, ?, ?)";

        try {
            
            con = db.getConnection();

            stmt = con.prepareStatement(sqlCheck);
            // setting parameters
            stmt.setString(1, customer.getEmail());

            rs = stmt.executeQuery();

            if ( rs.next() ) {
                rs.close();
                stmt.close();
                throw new Exception("Sorry, email already registered.");
            }

            stmt = con.prepareStatement(sql);
            // Consultant consultant = new Consultant();
            // setting parameters
            stmt.setString(1, customer.getFullName());
            stmt.setString(2, customer.getEmail());
            stmt.setString(3, customer.getPhone());
            stmt.setString(4, customer.getGender());
            stmt.setString(5, customer.getCategoryProfile());
            stmt.setString(6, customer.getMarket());
            stmt.setString(7, customer.getSaving());
            stmt.setString(8, customer.getPension());
            stmt.setString(9, customer.getDescription());
            // stmt.setString(10, consultant.getUserName());
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
}
