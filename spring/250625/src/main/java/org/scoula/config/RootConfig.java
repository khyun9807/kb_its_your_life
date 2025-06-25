package org.scoula.config;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;
import org.apache.ibatis.session.SqlSession;
import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.beans.factory.annotation.Value;
import org.springframework.context.ApplicationContext;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.context.annotation.PropertySource;
import org.springframework.jdbc.datasource.DataSourceTransactionManager;

import javax.sql.DataSource;

@Configuration
@ComponentScan(basePackages = {
        //controller가 아닌 범용 클래스들 스캔
        "org.scoula",
})
@PropertySource({
//rootconfig에서 사용할 .properties파일들 경로 지정.
        "classpath:/application.properties"
})
@MapperScan(basePackages = {
        //rootconfig 컨텍스트에 등록시킬
        //동적으로 구현할 mapper 인터페이스 위치 지정
        "org.scoula.mapper"
})
public class RootConfig {
    //범용, 디비 관련
    //해당 클래스의 컨텍스트에 등록된 빈은 다른데에서
    //활용할 수 있다.

    //.properties 내용에 있는 키에 대한 밸류
    @Value("${jdbc.driver}") String driver;
    @Value("${jdbc.url}") String url;
    @Value("${jdbc.username}") String username;
    @Value("${jdbc.password}") String password;

    @Bean//hikari datasource객체 컨텍스트에 빈등록
    public DataSource dataSource(){
        HikariConfig config = new HikariConfig();

        config.setDriverClassName(driver);
        config.setJdbcUrl(url);
        config.setUsername(username);
        config.setPassword(password);

        HikariDataSource dataSource = new HikariDataSource(config);
        return dataSource;
    }
    
    @Autowired//application context는 스프링이 자동으로 컨텍스트에 등록해놓음
    ApplicationContext applicationContext;
    
    @Bean//sqlsessionfactory를 컨텍스트에 빈 등록
    public SqlSessionFactory sqlSessionFactory() throws Exception {
        SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
        sqlSessionFactory.setConfigLocation(
                applicationContext.getResource("classpath:/mybatis-config.xml")
        );
        sqlSessionFactory.setDataSource(dataSource());

        return (SqlSessionFactory) sqlSessionFactory.getObject();
    }

    @Bean//datasource tx manager도 등록
    public DataSourceTransactionManager transactionManager(){
        return new DataSourceTransactionManager(dataSource());
    }
}
