package Insurance;

public class InvestmentProfile {
    private String quetion;
    private String answer1;
    private String answer2;
    private String answer3;


    // full - args constructor
    public InvestmentProfile(String quetion , String answer1, String answer2, String answer3) {
        this.quetion = quetion;
        this.answer1 = answer1;
        this.answer2 = answer2;
        this.answer3 = answer3;

    }

    // getters


    public String getQuetion() {
        return quetion;
    }

    public String getAnswer1() {
        return answer1;
    }
    public String getAnswer2() {
        return answer2;
    }
    public String getAnswer3() {
        return answer3;
    }
    



    
}
