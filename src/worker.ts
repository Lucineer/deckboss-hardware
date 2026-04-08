export default {
  async fetch(request: Request): Promise<Response> {
    const url = new URL(request.url);
    
    // Health endpoint
    if (url.pathname === "/health") {
      return new Response(JSON.stringify({ status: "ok" }), {
        headers: { "Content-Type": "application/json" }
      });
    }
    
    // HTML response
    const html = `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8">
  <meta name="viewport" content="width=device-width, initial-scale=1.0">
  <title>Deckboss.net - Hardware Store</title>
  <meta name="description" content="Preloaded. Plug and Play. Every unit ships with Deckboss, Cocapn runtime, and Capitaine - ready to deploy.">
  <style>
    :root {
      --bg-dark: #0a0a0a;
      --bg-card: #1a1a1a;
      --accent: #f59e0b;
      --text-primary: #f9fafb;
      --text-secondary: #d1d5db;
      --border: #374151;
    }
    
    * {
      margin: 0;
      padding: 0;
      box-sizing: border-box;
    }
    
    body {
      font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
      background-color: var(--bg-dark);
      color: var(--text-primary);
      line-height: 1.6;
      min-height: 100vh;
    }
    
    .container {
      max-width: 1200px;
      margin: 0 auto;
      padding: 0 1rem;
    }
    
    /* Header & Navigation */
    header {
      border-bottom: 1px solid var(--border);
      position: sticky;
      top: 0;
      background-color: var(--bg-dark);
      z-index: 50;
    }
    
    .nav-container {
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 1rem 0;
    }
    
    .logo {
      font-size: 1.5rem;
      font-weight: bold;
      color: var(--accent);
      text-decoration: none;
    }
    
    .nav-links {
      display: flex;
      gap: 2rem;
      list-style: none;
    }
    
    .nav-links a {
      color: var(--text-secondary);
      text-decoration: none;
      font-weight: 500;
      transition: color 0.2s;
    }
    
    .nav-links a:hover {
      color: var(--accent);
    }
    
    .mobile-menu-btn {
      display: none;
      background: none;
      border: none;
      color: var(--text-primary);
      font-size: 1.5rem;
      cursor: pointer;
    }
    
    /* Hero Section */
    .hero {
      padding: 4rem 0;
      text-align: center;
      border-bottom: 1px solid var(--border);
    }
    
    .hero h1 {
      font-size: 3.5rem;
      margin-bottom: 1rem;
      background: linear-gradient(to right, var(--accent), #fbbf24);
      -webkit-background-clip: text;
      -webkit-text-fill-color: transparent;
    }
    
    .hero p {
      font-size: 1.25rem;
      color: var(--text-secondary);
      max-width: 600px;
      margin: 0 auto;
    }
    
    /* Products Section */
    .section-title {
      font-size: 2rem;
      text-align: center;
      margin: 3rem 0;
      color: var(--text-primary);
    }
    
    .products-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
      gap: 2rem;
      margin-bottom: 4rem;
    }
    
    .product-card {
      background-color: var(--bg-card);
      border-radius: 0.5rem;
      padding: 1.5rem;
      border: 1px solid var(--border);
      transition: transform 0.2s, border-color 0.2s;
    }
    
    .product-card:hover {
      transform: translateY(-4px);
      border-color: var(--accent);
    }
    
    .product-header {
      display: flex;
      justify-content: space-between;
      align-items: center;
      margin-bottom: 1rem;
    }
    
    .product-name {
      font-size: 1.5rem;
      font-weight: bold;
    }
    
    .product-price {
      font-size: 1.75rem;
      color: var(--accent);
      font-weight: bold;
    }
    
    .product-specs {
      list-style: none;
      margin: 1.5rem 0;
    }
    
    .product-specs li {
      padding: 0.5rem 0;
      color: var(--text-secondary);
      border-bottom: 1px solid var(--border);
    }
    
    .product-specs li:last-child {
      border-bottom: none;
    }
    
    .buy-btn {
      display: block;
      width: 100%;
      padding: 0.75rem;
      background-color: var(--accent);
      color: var(--bg-dark);
      text-align: center;
      text-decoration: none;
      font-weight: bold;
      border-radius: 0.375rem;
      transition: opacity 0.2s;
    }
    
    .buy-btn:hover {
      opacity: 0.9;
    }
    
    /* Accessories Section */
    .accessories-grid {
      display: grid;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      gap: 1.5rem;
      margin-bottom: 4rem;
    }
    
    .accessory-card {
      background-color: var(--bg-card);
      border-radius: 0.5rem;
      padding: 1rem;
      text-align: center;
      border: 1px solid var(--border);
    }
    
    .accessory-name {
      font-size: 1.1rem;
      margin: 0.5rem 0;
    }
    
    .accessory-price {
      color: var(--accent);
      font-weight: bold;
      font-size: 1.25rem;
    }
    
    /* Footer */
    footer {
      border-top: 1px solid var(--border);
      padding: 2rem 0;
      margin-top: 4rem;
    }
    
    .footer-links {
      display: flex;
      justify-content: center;
      flex-wrap: wrap;
      gap: 2rem;
      list-style: none;
      margin-bottom: 1rem;
    }
    
    .footer-links a {
      color: var(--text-secondary);
      text-decoration: none;
      transition: color 0.2s;
    }
    
    .footer-links a:hover {
      color: var(--accent);
    }
    
    .copyright {
      text-align: center;
      color: var(--text-secondary);
      font-size: 0.875rem;
    }
    
    /* Responsive Design */
    @media (max-width: 768px) {
      .nav-links {
        display: none;
      }
      
      .mobile-menu-btn {
        display: block;
      }
      
      .hero h1 {
        font-size: 2.5rem;
      }
      
      .hero p {
        font-size: 1.1rem;
        padding: 0 1rem;
      }
      
      .products-grid {
        grid-template-columns: 1fr;
      }
      
      .footer-links {
        flex-direction: column;
        align-items: center;
        gap: 1rem;
      }
    }
    
    @media (max-width: 480px) {
      .hero h1 {
        font-size: 2rem;
      }
      
      .section-title {
        font-size: 1.5rem;
      }
      
      .accessories-grid {
        grid-template-columns: 1fr;
      }
    }
  </style>
</head>
<body>
  <header>
    <div class="container nav-container">
      <a href="/" class="logo">DECKBOSS.NET</a>
      <button class="mobile-menu-btn" onclick="toggleMenu()">☰</button>
      <ul class="nav-links" id="navLinks">
        <li><a href="#products">Products</a></li>
        <li><a href="#specs">Specs</a></li>
        <li><a href="#accessories">Accessories</a></li>
        <li><a href="#support">Support</a></li>
      </ul>
    </div>
  </header>

  <main>
    <section class="hero">
      <div class="container">
        <h1>Preloaded. Plug and Play.</h1>
        <p>Every unit ships with Deckboss, Cocapn runtime, and Capitaine - ready to deploy.</p>
      </div>
    </section>

    <section id="products" class="container">
      <h2 class="section-title">Products</h2>
      <div class="products-grid">
        <div class="product-card">
          <div class="product-header">
            <div class="product-name">Nano</div>
            <div class="product-price">$299</div>
          </div>
          <ul class="product-specs">
            <li>RPi5 8GB</li>
            <li>256GB NVMe</li>
            <li>Simple monitoring</li>
          </ul>
          <a href="#" class="buy-btn">Buy Now</a>
        </div>

        <div class="product-card">
          <div class="product-header">
            <div class="product-name">Standard</div>
            <div class="product-price">$599</div>
          </div>
          <ul class="product-specs">
            <li>Jetson Orin Nano 8GB</li>
            <li>2TB NVMe</li>
            <li>Vision + STT + TTS</li>
          </ul>
          <a href="#" class="buy-btn">Buy Now</a>
        </div>

        <div class="product-card">
          <div class="product-header">
            <div class="product-name">Pro</div>
            <div class="product-price">$1199</div>
          </div>
          <ul class="product-specs">
            <li>2x Jetson</li>
            <li>Parallel inference</li>
            <li>Complex robotics</li>
          </ul>
          <a href="#" class="buy-btn">Buy Now</a>
        </div>

        <div class="product-card">
          <div class="product-header">
            <div class="product-name">Enterprise</div>
            <div class="product-price">$1499</div>
          </div>
          <ul class="product-specs">
            <li>4x RPi5 array</li>
            <li>Distributed sensor networks</li>
            <li>Cluster management</li>
          </ul>
          <a href="#" class="buy-btn">Buy Now</a>
        </div>
      </div>
    </section>

    <section id="accessories" class="container">
      <h2 class="section-title">Accessories</h2>
      <div class="accessories-grid">
        <div class="accessory-card">
          <div class="accessory-name">Thermal Camera</div>
          <div class="accessory-price">$89</div>
        </div>
        <div class="accessory-card">
          <div class="accessory-name">CSI Camera</div>
          <div class="accessory-price">$49</div>
        </div>
        <div class="accessory-card">
          <div class="accessory-name">IP67 Case</div>
          <div class="accessory-price">$79</div>
        </div>
        <div class="accessory-card">
          <div class="accessory-name">12V Power Supply</div>
          <div class="accessory-price">$29</div>
        </div>
        <div class="accessory-card">
          <div class="accessory-name">GPS Module</div>
          <div class="accessory-price">$39</div>
        </div>
      </div>
    </section>
  </main>

  <footer>
    <div class="container">
      <ul class="footer-links">
        <li><a href="https://deckboss.ai">Deckboss.ai</a></li>
        <li><a href="https://deckboss.net">Deckboss.net</a></li>
        <li><a href="https://cocapn.ai">Cocapn.ai</a></li>
        <li><a href="https://cocapn.com">Cocapn.com</a></li>
        <li><a href="https://capitaine.ai">Capitaine.ai</a></li>
        <li><a href="https://github.com/Lucineer">github.com/Lucineer</a></li>
      </ul>
      <p class="copyright">© ${new Date().getFullYear()} Deckboss.net. All rights reserved.</p>
    </div>
  </footer>

  <script>
    function toggleMenu() {
      const navLinks = document.getElementById("navLinks");
      navLinks.style.display = navLinks.style.display === "flex" ? "none" : "flex";
    }
    
    // Close mobile menu when clicking outside
    document.addEventListener("click", function(event) {
      const navLinks = document.getElementById("navLinks");
      const menuBtn = document.querySelector(".mobile-menu-btn");
      
      if (window.innerWidth <= 768 && 
          !navLinks.contains(event.target) && 
          !menuBtn.contains(event.target)) {
        navLinks.style.display = "none";
      }
    });
    
    // Handle window resize
    window.addEventListener("resize", function() {
      const navLinks = document.getElementById("navLinks");
      if (window.innerWidth > 768) {
        navLinks.style.display = "flex";
      } else {
        navLinks.style.display = "none";
      }
    });
  </script>
</body>
</html>`;
    
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "DENY",
        "Content-Security-Policy": "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline';"
      }
    });
  }
};