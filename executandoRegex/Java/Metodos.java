import java.util.regex.*;

public class Metodos{

    public static void main(String[] args){

        String texto = "0,1,2,3,4,5,6,7,8,9,a,b,c,d,e,f,g,h";
        Pattern patternLetras = Pattern.compile("[a-f]");

        Matcher matcher = patternLetras.matcher(texto);

        while(matcher.find()){
            System.out.printf("Posicoes %s, %s\tValor: %s%n", matcher.start(), matcher.end(), matcher.group()); // %n = \n porem torna compativel com todos sistemas operacionais
        }
        
        System.out.println(texto.replaceAll("[7-9]", "Achei"));    
        
    }
    
}