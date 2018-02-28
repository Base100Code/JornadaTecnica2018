
import java.io.FileNotFoundException;
import java.io.FileOutputStream;
import java.io.IOException;
import java.io.PrintStream;

public class Test1 {

	public static void FuncionJava1(){
		traza("Función FuncionJava1. No recibe parámetro. No retorna ningún valor");
	}


	public static void FuncionJava2(String p1){
		traza("Función FuncionJava2. Recibe como parámetro un string p1 = ["+p1+"]. No retorna valor");
		
	}

	public static void FuncionJava3(String p1, int i1){
	  traza("Función FuncionJava3. Recibe como parámetro un string p1 = ["+p1+"] y un integer i1 =["+i1+"]. No retorna valor");
	}

	public static void FuncionJava4(String p1, int i1, short s1, double d){
		traza("Función FuncionJava4. Recibe como parámetro p1 = ["+p1+"] (string), i1 =["+i1+"] (integer),  s1 = ["+s1+"] (short)  d = ["+d+"] (double). No retorna valor" );
		
	}

	public static String FuncionJava5(String p1){
		traza("Función FuncionJava5. Recibe como parámetro p1 = ["+p1+"]. Retorna p1 en minúsculas ["+p1.toLowerCase()+"]");
		return p1.toLowerCase();
		//return null;
	}
	
	public static double FuncionJava6(Double I1, double i1) throws Exception {
		traza("Función FuncionJava6: p1 = ["+I1+"] i1 =["+i1+"] Suma [" + (I1 + i1) + "]");
		return I1 + i1;
	}

	private static void traza(String msg) {
		try {
			FileOutputStream fo = new FileOutputStream("c:\\tmp\\salidajava.txt", true);
			PrintStream printStream = new PrintStream(fo);
			printStream.println(msg);
			fo.close();
			printStream.close();
		} catch (FileNotFoundException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		} catch (IOException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
		}
		
	}

}
