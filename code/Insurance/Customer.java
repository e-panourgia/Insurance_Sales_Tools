package Insurance;

public class Customer {

    private String fullname;
	private String email;
    private String phone;
	private String gender;
	private String categoryprofile;
    private String market;
    private String saving;
    private String pension;
    private String description;


    /**
     * Full constuctor
     *   
     * @param fullname
     * @param email
     * @param phone
     * @param gender
     * @param categoryprofile 
     * @param market
     * @param saving
     * @param pension
     * @param description
     * 
     */
    public Customer(String fullname, String email, String phone, String gender, String categoryprofile, String market, String saving, String pension, String description) {        
        this.fullname = fullname;
        this.email = email;
        this.phone = phone;
        this.gender = gender;
        this.categoryprofile = categoryprofile;
        this.market = market;
        this.saving = saving;
        this.pension = pension;
        this.description = description;
     
    }
    /** fullname */
    public String getFullName() {
        return fullname;
    }

    public void setFullName(String fullname) {
        this.fullname = fullname;
    }
    /** email */
    public String getEmail() {
        return email;
    }

    public void setEmail(String email) {
        this.email = email;
    }
     /** phone */
     public String getPhone() {
        return phone;
    }

    public void setPhone(String phone) {
        this.phone = phone;
    }
     /** gender */
     public String getGender() {
        return gender;
    }

    public void setGender(String gender) {
        this.gender = gender;
    }
     /** categoryprofile */
     public String getCategoryProfile() {
        return categoryprofile;
    }

    public void setCategoryProfile(String categoryprofile) {
        this.categoryprofile = categoryprofile;
    }
     /** market */
     public String getMarket() {
        return market;
    }

    public void setMarket(String market) {
        this.market = market;
    }
     /** saving */
     public String getSaving() {
        return saving;
    }

    public void setSaving(String saving) {
        this.saving = saving;
    }
     /** pension */
     public String getPension() {
        return pension;
    }

    public void setPension(String pension) {
        this.pension = pension;
    }
     /** description */
     public String getDescription() {
        return description;
    }

    public void setDescription(String description) {
        this.description = description;
    }
 

}
