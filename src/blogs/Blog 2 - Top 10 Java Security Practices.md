# Top 10 Java Security Practices Every Developer Should Follow

## Introduction

In today’s digital landscape, **security breaches** are increasingly frequent and severe. From data leaks to ransomware attacks, insecure applications are prime targets. According to the **Verizon 2024 Data Breach Investigations Report**, **74% of breaches involved human or system errors**, many of which stemmed from insecure code.

Java, with its massive usage across enterprise and backend systems, needs security built-in from day one. This blog post outlines the **Top 10 Java security best practices** that every developer should adopt, complete with **examples** and **statistics** to help you write secure, production-ready code.

## 1. **Validate All Inputs**

### Sanitize User Input

Never trust data from users—validate both format and content.

Bad:
```java
String userId = request.getParameter("id");
Statement stmt = conn.createStatement();
ResultSet rs = stmt.executeQuery("SELECT * FROM users WHERE id = " + userId);
```

Good:
```java
String userId = request.getParameter("id");
PreparedStatement stmt = conn.prepareStatement("SELECT * FROM users WHERE id = ?");
stmt.setString(1, userId);
```

**Why?** Prevents SQL Injection, which accounts for **over 60% of all injection attacks** (OWASP 2023).

Use libraries like:
- Apache Commons Validator
- Hibernate Validator (JSR 380)

## 2. **Use Strong Authentication and Authorization**

### Implement Role-Based Access Control (RBAC)

Bad:
```java
if (user.isAdmin()) {
    // allow action
}
```

Good:
```java
@PreAuthorize("hasRole('ADMIN')")
public void deleteUser(Long id) { ... }
```

Use Spring Security or Apache Shiro for proper access control.

**Stat:** Applications with RBAC see **43% fewer unauthorized access incidents** (Gartner, 2023).

## 3. **Avoid Storing Plaintext Passwords**

### Use Secure Hashing Algorithms

Bad:
```java
user.setPassword(password); // storing as-is
```

Good:
```java
BCryptPasswordEncoder encoder = new BCryptPasswordEncoder();
user.setPassword(encoder.encode(password));
```

BCrypt, SCrypt, or Argon2 are safe; avoid MD5 or SHA1, which are broken.

## 4. **Keep Dependencies Updated**

### Monitor for Known Vulnerabilities

Use tools like:
- OWASP Dependency-Check
- Snyk
- Maven’s `versions:display-dependency-updates`

**Stat:** 83% of Java apps have at least one vulnerable dependency (Snyk 2023).

Example `pom.xml` plugin:
```xml
<plugin>
    <groupId>org.owasp</groupId>
    <artifactId>dependency-check-maven</artifactId>
    <version>8.2.1</version>
    <executions>
        <execution>
            <goals>
                <goal>check</goal>
            </goals>
        </execution>
    </executions>
</plugin>
```

## 5. **Use HTTPS for All Communications**

### Enforce TLS 1.2 or Higher

Bad:
```java
HttpURLConnection conn = (HttpURLConnection) url.openConnection();
```

Good:
```java
HttpsURLConnection conn = (HttpsURLConnection) url.openConnection();
```

Ensure your server enforces HTTPS and disables old protocols (SSLv2/3, TLS 1.0).

**Statistic:** Over **80% of MITM attacks** occur over unencrypted channels (Qualys, 2022).

## 6. **Secure Sensitive Data in Memory and Logs**

### Don’t Log Credentials or Tokens

Bad:
```java
logger.info("User login with password: " + password);
```

Good:
```java
logger.info("User login attempt for " + username);
```

Mask or exclude sensitive fields like passwords, API keys, or tokens.

Also use:
```java
Arrays.fill(passwordCharArray, '0'); // zero out after use
```

## 7. **Use Security Headers in Web Applications**

Set these HTTP headers to prevent common attacks:

- `Content-Security-Policy`
- `X-Frame-Options`
- `Strict-Transport-Security`
- `X-Content-Type-Options`

Example (Spring Boot):
```java
http.headers()
    .contentSecurityPolicy("default-src 'self'")
    .xssProtection()
    .frameOptions().deny();
```

These help prevent **XSS, clickjacking**, and **protocol downgrade** attacks.

## 8. **Limit File Uploads and Executable Content**

### Enforce File Type, Size, and Name Validation

```java
MultipartFile file = request.getFile("upload");
if (!file.getContentType().equals("image/png") || file.getSize() > MAX_SIZE) {
    throw new IllegalArgumentException("Invalid file");
}
```

**Stat:** File upload vulnerabilities account for **15% of critical zero-days** in Java web apps (Acunetix, 2023).

Also, store files outside the web root and disable direct execution.

## 9. **Avoid Insecure Deserialization**

Java’s native deserialization (`ObjectInputStream`) is dangerous when used with untrusted data.

Bad:
```java
ObjectInputStream in = new ObjectInputStream(socket.getInputStream());
Object obj = in.readObject();
```

Instead:
- Use JSON or Protobuf for trusted object exchange.
- If using serialization, implement `readObject()` validation.
- Prefer libraries like Jackson or Gson.

## 10. **Implement Rate Limiting and Throttling**

To prevent brute-force, spam, and DoS attacks:

Use tools like:
- Bucket4j
- RateLimiter (Guava)
- Spring RateLimiter Filter

Example:
```java
RateLimiter limiter = RateLimiter.create(5.0); // 5 req/sec
if (limiter.tryAcquire()) {
    // proceed
}
```

**Fact:** Apps with basic throttling reduce brute-force risk by over **90%**.

## Conclusion

Security in Java is not just about secure frameworks—**it's about secure coding habits**. The top 10 practices summarized:

1. Validate and sanitize all inputs  
2. Use proper authentication and authorization  
3. Avoid plaintext password storage  
4. Keep third-party dependencies up to date  
5. Use HTTPS for secure communication  
6. Avoid leaking sensitive data in memory or logs  
7. Set proper HTTP security headers  
8. Limit file upload exposure  
9. Avoid insecure deserialization  
10. Apply rate limiting and throttling  

By adopting these strategies, you ensure that your applications are **resilient against common threats** and remain **compliant** with security standards.

🔐 Start with one, build habits, and review your code regularly.

> "Security is not a feature—it’s a discipline." – Anonymous