public class New {
	public static void main(String[] args) {
		try {
			unknownClass nullInstance = new unknownClass();
			nullInstance = null;
			nullInstance.run();
		}
		catch (NullPointerException e) {
			// problem solved eiei
		}
	}	
} 

class unknownClass {
	public void run() {
		// do something
	}
	
}