//package lt.itakademija.security;
//
//import javax.sql.DataSource;
//
//import org.springframework.beans.factory.annotation.Autowired;
//import org.springframework.context.annotation.Configuration;
//import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
//import org.springframework.security.config.annotation.method.configuration.EnableGlobalMethodSecurity;
//import org.springframework.security.config.annotation.web.builders.HttpSecurity;
//import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
//import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
//import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
//
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
//
//        http.//cors().and().
//        authorizeRequests().antMatchers("/","/js/**", "/css/**","/images/**","/api/**").permitAll().
//        /*, "/js/config/**","js/index.jsx"
//               , /#/login","/js/js.js","/js/index.jsx","/js/config/routes.jsx"
//               ,"/js/components/App.jsx","/js/components/WelcomeComponent.jsx").permitAll().*/
//        antMatchers("/#/admin").hasRole("ADMIN").
//        antMatchers("/js/components/representatives/**","js/containers/representatives/").hasRole("user").      
//        anyRequest().authenticated().
//        and().formLogin().permitAll().//loginProcessingUrl("/post").permitAll().//loginPage("/#/login").
//        and().httpBasic();
//        
//        http.csrf();//disable();
//        //http.headers().frameOptions().disable();
//    }
//
//}

