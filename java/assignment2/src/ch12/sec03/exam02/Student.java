package ch12.sec03.exam02;

public class Student {
    private int no;
    private String name;

    Student(){
        this(0,"");
    }
    Student(int no){
        this(no,"");
    }
    Student(String name){
        this(0,name);
    }
    Student(int no, String name) {
        this.no = no;
        this.name = name;
    }

    public int getNo() {
        return no;
    }

    public void setNo(int no) {
        this.no = no;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    @Override
    public String toString() {
        return name+" "+no;
    }


    public boolean equals(Object obj) {
        if(obj instanceof Student student){
            return no==student.no&&name.equals(student.name);
        }
        return false;
    }

    @Override
    public int hashCode() {
        return super.hashCode();
    }
}
