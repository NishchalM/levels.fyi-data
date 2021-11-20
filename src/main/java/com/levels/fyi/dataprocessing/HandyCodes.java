package com.levels.fyi.dataprocessing;

import javax.script.Invocable;
import javax.script.ScriptEngine;
import javax.script.ScriptEngineManager;
import java.io.UnsupportedEncodingException;
import java.net.URLEncoder;
import java.util.Map;

public class HandyCodes {

    //
//            ScriptEngineManager manager = new ScriptEngineManager();
//            ScriptEngine engine = manager.getEngineByName("JavaScript");
//            engine.eval("var x = 10;    print(x);");
//
//            engine.eval(Files.newBufferedReader(Paths.get("C:/Users/I506771/Desktop/ResponseUtils.mjs"), StandardCharsets.UTF_8));
//
//            Invocable inv = (Invocable) engine;
//
//            inv.invokeFunction("encrypt.parse", content);



//
//    public static String getParamsString(Map<String, String> params)
//            throws UnsupportedEncodingException {
//        StringBuilder result = new StringBuilder();
//
//        for (Map.Entry<String, String> entry : params.entrySet()) {
//            result.append(URLEncoder.encode(entry.getKey(), "UTF-8"));
//            result.append("=");
//            result.append(URLEncoder.encode(entry.getValue(), "UTF-8"));
//            result.append("&");
//        }
//
//        String resultString = result.toString();
//        return resultString.length() > 0
//                ? resultString.substring(0, resultString.length() - 1)
//                : resultString;


//    String demo ="kiig78ihgj";
//    ScriptEngineManager manager = new ScriptEngineManager();
//    ScriptEngine engine = manager.getEngineByName("nashorn");
//            engine.eval("load('C:/Users/I506771/Desktop/Response.js')");
//    Invocable inv = (Invocable) engine;
//    Object returned = inv.invokeFunction("encrypt", demo);
//            System.out.println(returned);

}
