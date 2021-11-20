package com.levels.fyi.dataprocessing;

import com.fasterxml.jackson.databind.ObjectMapper;

import org.json.simple.parser.ParseException;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Component;
import org.springframework.web.bind.annotation.RestController;

import java.io.IOException;
import java.net.URL;
import java.util.ArrayList;
import java.util.Arrays;
import java.util.List;

@Component
public class HttpCall {

    @Autowired
    private DecodePayload decodePayload;
    public void starter() throws IOException, ParseException {
            List<String> titleList = new ArrayList<>();
            titleList = Arrays.asList("title=Software+Engineer", "title=Software+Engineering+Manager",
                    "title=Data+Scientist","title=Product+Designer","title=Product+Manager",
                    "title=Technical+Product+Manager");
            String title = "title=Software+Engineer";
            for(int j=0;j<6;j++) {
                String limit = "limit=100";
                String order = "orderDesc=true";
                String sort = "sortBy=timestamp";
                String countryName = "countryName=India";
                int next = 0, rows = 1;
                String nextToken = "nextToken=";
                for (int i = 0; i < rows; i++) {
                    System.out.println("Row = " + i);
                    String query = "https://api.levels.fyi/v1/salaries?";
                    query += title;
                    query += "&";
                    query += limit;
                    query += "&";
                    query += order;
                    query += "&";
                    query += sort;
                    query += "&";
                    query += nextToken;
                    query += Integer.toString(next);
                    query += "&";
                    next += 100;
                    query += countryName;

                    ObjectMapper mapper = new ObjectMapper();
                    PayloadModel value = mapper.readValue(new URL(query), PayloadModel.class);
                    rows = decodePayload.decode(value.payload) / 100 + 1;
                }
            }
    }
}
