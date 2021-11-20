package com.levels.fyi.dataprocessing;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.json.simple.parser.JSONParser;
import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;

import java.io.IOException;
import java.net.HttpURLConnection;
import java.net.URL;
import java.net.URLEncoder;
import java.nio.charset.StandardCharsets;
import java.util.ArrayList;
import java.util.List;
import java.util.Scanner;

@Component
public class DecodePayload {

    @Autowired
    private RepoOperation repoOperation;

    public int decode(String content) throws IOException, ParseException {
        String encode = URLEncoder.encode(content, StandardCharsets.UTF_8);
        String query="http://localhost:3000?"+"payload="+encode;
        URL url = new URL(query);
        HttpURLConnection conn = (HttpURLConnection)url.openConnection();
        conn.setRequestMethod("GET");
        conn.connect();
        String inline = "";
        Scanner sc = new Scanner(url.openStream());
            while(sc.hasNext()) {
                inline += sc.nextLine();
            }
        sc.close();

        JSONParser parse = new JSONParser();
        JSONObject jobj = (JSONObject)parse.parse(inline);
        String totalRows = (String) jobj.get("total");
        JSONArray rows = (JSONArray) jobj.get("rows");
        List<FullCompensationInfo> fullCompensationInfoList = new ArrayList<>();
        for(int i=0; i<rows.size(); i++){
            try {
                JSONObject obj = (JSONObject) rows.get(i);
                FullCompensationInfo fullCompensationInfo = compensationMapper(obj);
                fullCompensationInfoList.add(fullCompensationInfo);
            } catch (Exception ex) {
                throw new IOException("Expected exception, Don't worry" + ex);
            }

        }
        repoOperation.saveAllOperation(fullCompensationInfoList);
       return Integer.parseInt(totalRows);
    }

    private FullCompensationInfo compensationMapper(JSONObject obj) {
        FullCompensationInfo fullCompensationInfo = new FullCompensationInfo();
        Object o;
        fullCompensationInfo.setUuid((String) obj.get("uuid"));
        fullCompensationInfo.setTotalYearlyCompensation((Long) obj.get("totalyearlycompensation"));
        fullCompensationInfo.setGender((String) obj.get("gender"));
        fullCompensationInfo.setLevel((String) obj.get("level"));
        fullCompensationInfo.setStockGrantValue((Long) obj.get("stockgrantvalue"));
        fullCompensationInfo.setBonus((Long) obj.get("bonus"));
        fullCompensationInfo.setDemaid((Long) obj.get("demaid"));
        fullCompensationInfo.setCityId((Long) obj.get("cityid"));
        fullCompensationInfo.setTitle((String) obj.get("title"));
        fullCompensationInfo.setOtherDetails((String) obj.get("otherdetails"));

        o = obj.get("yearsofexperience");
        if("java.lang.Double".equals(o.getClass().getName()))
            fullCompensationInfo.setYearsOfExperience(((Double) o).longValue());
        else
            fullCompensationInfo.setYearsOfExperience((Long) obj.get("yearsofexperience"));

        fullCompensationInfo.setBaseSalary((Long) obj.get("basesalary"));
        fullCompensationInfo.setLocation((String) obj.get("location"));
        fullCompensationInfo.setTag((String) obj.get("tag"));

        o = obj.get("yearsatcompany");
        if("java.lang.Double".equals(o.getClass().getName()))
           fullCompensationInfo.setYearsAtCompany(((Double) o).longValue());
        else
           fullCompensationInfo.setYearsAtCompany((Long) obj.get("yearsatcompany"));

        fullCompensationInfo.setTimeStamp((String) obj.get("timestamp"));

        Company company = new Company();
        JSONObject companyObj = (JSONObject) obj.get("company");
        company.setName((String) companyObj.get("name"));
        company.setIcon((String) companyObj.get("icon"));
        company.setRegistered((Boolean) companyObj.get("registered"));
        fullCompensationInfo.setCompany(company);

        return fullCompensationInfo;
    }
}
