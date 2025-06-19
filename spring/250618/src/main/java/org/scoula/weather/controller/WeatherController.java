package org.scoula.weather.controller;


import lombok.extern.log4j.Log4j2;
import org.scoula.weather.dto.WeatherDto;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.annotation.PropertySource;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.client.RestTemplate;
import org.springframework.web.util.UriComponentsBuilder;

@Controller
@Log4j2
@RequestMapping("/weather")
@PropertySource({"classpath:/application.properties"})
public class WeatherController {
    @Value("${weather.url}") private String URL;
    @Value("${weather.icon_url}") private String ICON_URL;
    @Value("${weather.api_key}") private String API_KEY;

    @GetMapping({
            "",
            "/{city}"
    })
    public String weather(Model model, @PathVariable(value="city", required=false) String city) {
        city = city == null ? "seoul" : city;

        RestTemplate restTemplate = new RestTemplate();
        String url= UriComponentsBuilder.fromHttpUrl(URL)
                .queryParam("q",city)
                .queryParam("units","metric")
                .queryParam("APPID",API_KEY)
                .queryParam("lang","kr")
                .toUriString();

        log.info(url);
        WeatherDto weather=restTemplate.getForObject(url, WeatherDto.class);
        String iconUrl=ICON_URL.formatted(weather.getWeather().get(0).getIcon());

        log.info(weather);

        model.addAttribute("city", city);
        model.addAttribute("weather", weather);
        model.addAttribute("iconUrl", iconUrl);

        return "weather/today";
    }
}
