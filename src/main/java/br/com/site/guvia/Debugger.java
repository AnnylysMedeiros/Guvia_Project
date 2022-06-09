package br.com.site.guvia;

public class Debugger{
    public static boolean isEnabled(){
        return true;
    }

    public static void log(Object o){
        System.out.println(o.toString());
    }
}