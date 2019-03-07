import java.io.*;

class SingleObject {
    private SingleObject() {}

    private static SingleObject instance = null;

    public static SingleObject getInstance() {
        if (instance == null) {
            instance = new SingleObject();
        }
        return instance;
    }
}

class test
{
	public static void main (String[] args) throws java.lang.Exception
	{
		System.out.println(SingleObject.getInstance());
	}
}
