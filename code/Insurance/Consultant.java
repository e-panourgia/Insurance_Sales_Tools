package Insurance;

public class Consultant {
    
    private String fullname;
	private String username;
	private String email;
	private String gender;
	private String password;

    /**
     * Full constuctor
     *   
     * @param fullname
     * @param username
     * @param email
     * @param gender
     * @param password
     */
    public Consultant(String fullname, String username, String email, String gender, String password) {        
        this.fullname = fullname;
        this.username = username;
        this.email = email;
        this.gender = gender;
        this.password = password;
    }

    public Consultant(){};

    public String getFullName() {
        return fullname;
    }

    public void setFullName(String fullname) {
        this.fullname = fullname;
    }

    public String getUserName() {
        return username;
    }

    public void setUserName(String username) {
        this.username = username;
    }

    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }

    public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }

    public String getPassword() {
        return password;
    }

    public void setPassword(String password) {
        this.password = password;
    }
} // end class Consultant
