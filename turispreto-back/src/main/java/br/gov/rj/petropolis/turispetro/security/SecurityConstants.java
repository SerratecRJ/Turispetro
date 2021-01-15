package br.gov.rj.petropolis.turispetro.security;

public class SecurityConstants {
    
    public static final String SECRET = "turispetro_RSW";
    public static final long EXPIRATION_TIME = 864_000_000; // 10dias
    public static final String TOKEN_PREFIX = "Bearer ";
    public static final String HEADER_STRING = "Authorization";
    public static final String SIGN_UP_URL = "/users";

    public static final String[] AUTH_WHITELIST = {
            // -- swagger ui
            "/v2/api-docs",
            "/swagger-resources",
            "/swagger-resources/**",
            "/configuration/ui",
            "/configuration/security",
            "/swagger-ui.html",
            "/webjars/**",
            "/users",
            "/h2-console/**",
            "/console/**",
    };
}