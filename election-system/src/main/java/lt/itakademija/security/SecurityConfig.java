//package lt.itakademija.security;
//
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.builders.WebSecurity;
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
////        auth.jdbcAuthentication().dataSource(dataSource)
////        .passwordEncoder(bcryptEncoder);
//        auth.inMemoryAuthentication().withUser("admin").password("admin").roles("ADMIN","USER");
//        auth.inMemoryAuthentication().withUser("user").password("user").roles("USER");
//    }
//    
//    protected void configure(HttpSecurity http) throws Exception{
//        http.//cors().and().
//        authorizeRequests().
//        antMatchers("/","/js/**","/css/**","/images/**","/#/login").permitAll().
//        antMatchers("/admin**").hasRole("admin").
//        antMatchers("/representatives/**").hasRole("user").      
//        anyRequest().authenticated().
//        and().formLogin().//loginPage("/#/login").permitAll().
//        and().httpBasic();
//        
////        http.csrf().disable();
////        http.headers().frameOptions().disable();
//    }
//
//}
