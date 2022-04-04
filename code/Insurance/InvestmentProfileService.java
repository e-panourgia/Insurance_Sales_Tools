package Insurance;

import java.util.ArrayList;
import java.util.List;
import java.sql.*;
/**
 * 
 * Returns quetions and answers for each quetion.
 * @return one ArrayList of quetions and answers so that I produce 
 * dynamically the form related to Investment Profile.
 * 
 * Author Panourgia Evangelia.
 * 
 */

public class InvestmentProfileService {
    /**
     * Returns all available answers and quetions.
     * 
     * @return List with the available departments.
     * @throws Exception If any error occurs (not necessary at the moment)
     */
    public List<InvestmentProfile> getQuetionsAndAnswers() throws Exception {

        List<InvestmentProfile> profile = new ArrayList<InvestmentProfile>();

        DB db = new DB();
        java.sql.Connection con = null;
        PreparedStatement stmt = null;
        ResultSet rs = null;
        String sql = "select * from answer as a , quetion as q where a.id_a = q.id_q;";

        try {

            con = db.getConnection();
            stmt = con.prepareStatement(sql);

            // skip setting parameters because don't have in this query

            rs = stmt.executeQuery();

            while ( rs.next() ) {

                profile.add( new InvestmentProfile(
                        rs.getString("quetion"),
                        rs.getString("answer_1"),
                        rs.getString("answer_2"),
                        rs.getString("answer_3")
                ));

            }

            rs.close(); //closing ResultSet
            stmt.close(); //closing PreparedStatement
            db.close(); //closing Connection
            
            return profile;

        } catch (Exception e) {
            
            throw new Exception(e.getMessage());

        } finally {

            try {
                db.close();
            } catch (Exception e) {
                
            }

        }
    }
}