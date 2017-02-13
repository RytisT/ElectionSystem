//package lt.itakademija.security;
//
//import javax.sql.DataSource;
//
//import org.aspectj.weaver.ast.And;
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
//@Configuration
//@EnableWebSecurity  
//@EnableGlobalMethodSecurity(prePostEnabled = true)
//public class SecurityConfig extends WebSecurityConfigurerAdapter{
//    
//    @Autowired
//    DataSource dataSource;
//    
//    
//    private BCryptPasswordEncoder bcryptEncoder = new BCryptPasswordEncoder();
//    
//    @Autowired
//    public void configureGlobal (AuthenticationManagerBuilder auth) throws Exception{
//        auth.jdbcAuthentication().dataSource(dataSource)
//        .passwordEncoder(bcryptEncoder);
//    }
//    
//    protected void configure(HttpSecurity http) throws Exception{
//        http.authorizeRequests().antMatchers("/login","/","/h2-console/**").permitAll().
//        antMatchers("/admin/**").hasRole("admin").
//        antMatchers("/users/**").hasRole("user").
//        anyRequest().authenticated().
//        and().formLogin().
//        and().httpBasic();
//        
//        http.csrf().disable();
//        http.headers().frameOptions().disable();
//    }
    
//}