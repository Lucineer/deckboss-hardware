// worker.ts - Cloudflare Worker for Deckboss.net
export interface Env {
  // Environment variables can be added here
}

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    // Security headers
    const securityHeaders = {
      "Content-Security-Policy": "default-src 'self'; style-src 'self' 'unsafe-inline'; img-src 'self' data:;",
      "X-Frame-Options": "DENY",
      "X-Content-Type-Options": "nosniff",
      "Referrer-Policy": "strict-origin-when-cross-origin"
    };

    // Handle health check
    if (new URL(request.url).pathname === "/health") {
      return new Response("OK", { status: 200 });
    }

    // HTML response
    const html = `
<!DOCTYPE html>
<html lang="en">
<head>
    <link rel="icon" href="data:image/svg+xml,<svg xmlns='http://www.w3.org/2000/svg' viewBox='0 0 100 100'><text y='.9em' font-size='90'>🔩</text></svg>">
    <meta property="og:title" content="Deckboss.net — Preloaded Edge Computing Hardware">
    <meta property="og:description" content="Deckboss.net — Preloaded hardware units for the Cocapn ecosystem. Jetson, RPi, accessories.">
    <meta property="og:type" content="website">
    <meta property="og:url" content="https://github.com/Lucineer/deckboss-hardware">
    <meta property="og:site_name" content="Lucineer">
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deckboss.net - Professional Edge Computing Hardware</title>
    <style>
        :root {
            --accent: #f59e0b;
            --dark: #0a0a0a;
            --darker: #050505;
            --light: #fafafa;
            --gray: #333;
            --gray-light: #666;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--dark);
            color: var(--light);
            line-height: 1.6;
        }
        
        .container {
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 20px;
        }
        
        /* Navigation */
        nav {
            background: var(--darker);
            padding: 1rem 0;
            position: sticky;
            top: 0;
            z-index: 100;
            border-bottom: 1px solid var(--gray);
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
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
        }
        
        .nav-links a {
            color: var(--light);
            text-decoration: none;
            font-weight: 500;
            transition: color 0.2s;
        }
        
        .nav-links a:hover {
            color: var(--accent);
        }
        
        /* Hero */
        .hero {
            padding: 4rem 0;
            text-align: center;
            background: linear-gradient(135deg, var(--darker) 0%, var(--dark) 100%);
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(90deg, var(--accent), #fbbf24);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--gray-light);
            max-width: 800px;
            margin: 0 auto 2rem;
        }
        
        .cta-button {
            display: inline-block;
            background: var(--accent);
            color: var(--dark);
            padding: 1rem 2rem;
            border-radius: 8px;
            text-decoration: none;
            font-weight: bold;
            font-size: 1.1rem;
            transition: transform 0.2s, box-shadow 0.2s;
        }
        
        .cta-button:hover {
            transform: translateY(-2px);
            box-shadow: 0 10px 20px rgba(245, 158, 11, 0.2);
        }
        
        /* Products */
        .section {
            padding: 4rem 0;
        }
        
        .section-title {
            font-size: 2.5rem;
            margin-bottom: 3rem;
            text-align: center;
        }
        
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }
        
        .product-card {
            background: var(--darker);
            border-radius: 12px;
            padding: 2rem;
            border: 1px solid var(--gray);
            transition: border-color 0.2s;
        }
        
        .product-card:hover {
            border-color: var(--accent);
        }
        
        .product-name {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--accent);
        }
        
        .product-price {
            font-size: 2rem;
            font-weight: bold;
            margin-bottom: 1rem;
        }
        
        .product-specs {
            list-style: none;
            margin: 1.5rem 0;
        }
        
        .product-specs li {
            padding: 0.5rem 0;
            border-bottom: 1px solid var(--gray);
        }
        
        .product-specs li:last-child {
            border-bottom: none;
        }
        
        /* Bulk Orders */
        .bulk-section {
            background: var(--darker);
            border-radius: 16px;
            padding: 3rem;
            margin: 2rem 0;
        }
        
        .value-props {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
            gap: 2rem;
            margin: 3rem 0;
        }
        
        .value-prop {
            padding: 1.5rem;
            background: rgba(245, 158, 11, 0.1);
            border-radius: 8px;
            border-left: 4px solid var(--accent);
        }
        
        .value-prop h3 {
            color: var(--accent);
            margin-bottom: 0.5rem;
        }
        
        /* Included */
        .included-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .included-item {
            padding: 1rem;
            background: var(--darker);
            border-radius: 8px;
            text-align: center;
        }
        
        /* Accessories */
        .accessories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin: 2rem 0;
        }
        
        .accessory-item {
            padding: 1rem;
            background: var(--darker);
            border-radius: 8px;
            text-align: center;
        }
        
        .accessory-price {
            color: var(--accent);
            font-weight: bold;
            margin-top: 0.5rem;
        }
        
        /* Footer */
        footer {
            background: var(--darker);
            padding: 3rem 0;
            margin-top: 4rem;
            border-top: 1px solid var(--gray);
        }
        
        .footer-links {
            display: flex;
            flex-wrap: wrap;
            gap: 2rem;
            justify-content: center;
            margin: 2rem 0;
        }
        
        .footer-links a {
            color: var(--gray-light);
            text-decoration: none;
        }
        
        .footer-links a:hover {
            color: var(--accent);
        }
        
        .footer-tagline {
            text-align: center;
            color: var(--gray-light);
            font-style: italic;
            margin-top: 2rem;
        }
        
        /* Mobile */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .bulk-section {
                padding: 2rem 1rem;
            }
            
            .value-props {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <nav>
        <div class="container nav-container">
            <a href="/" class="logo">DECKBOSS.NET</a>
            <div class="nav-links">
                <a href="#products">Products</a>
                <a href="#specs">Specs</a>
                <a href="#bulk">Bulk Orders</a>
                <a href="#support">Support</a>
            </div>
        </div>
    </nav>

    <section class="hero">
        <div class="container">
            <h1>Preloaded. Plug and Play.</h1>
            <p class="hero-subtitle">
                Every unit ships with Deckboss build tools, Cocapn runtime, and Capitaine education platform. 
                Open the box, plug it in, start building.
            </p>
            <a href="#products" class="cta-button">Order Unit</a>
        </div>
    </section>

    <section id="products" class="section">
        <div class="container">
            <h2 class="section-title">Professional Edge Computing</h2>
            <div class="products-grid">
                <div class="product-card">
                    <h3 class="product-name">Deckboss Nano</h3>
                    <div class="product-price">$299</div>
                    <ul class="product-specs">
                        <li>Raspberry Pi 5 8GB</li>
                        <li>256GB NVMe SSD</li>
                        <li>Single sensor monitoring</li>
                        <li>Simple automation</li>
                        <li>USB-C power, WiFi</li>
                    </ul>
                </div>
                
                <div class="product-card">
                    <h3 class="product-name">Deckboss Standard</h3>
                    <div class="product-price">$599</div>
                    <ul class="product-specs">
                        <li>NVIDIA Jetson Orin Nano 8GB</li>
                        <li>2TB NVMe SSD</li>
                        <li>Multi-sensor, vision, STT/TTS</li>
                        <li>Edge inference</li>
                        <li>12V marine, 2x USB 3.0, CSI camera</li>
                    </ul>
                </div>
                
                <div class="product-card">
                    <h3 class="product-name">Deckboss Pro</h3>
                    <div class="product-price">$1,199</div>
                    <ul class="product-specs">
                        <li>2x Jetson Orin Nano</li>
                        <li>2x 2TB NVMe SSD</li>
                        <li>Complex robotics</li>
                        <li>Parallel inference</li>
                        <li>12V marine, gigabit interconnect</li>
                    </ul>
                </div>
                
                <div class="product-card">
                    <h3 class="product-name">Deckboss Enterprise</h3>
                    <div class="product-price">$1,499</div>
                    <ul class="product-specs">
                        <li>4x Raspberry Pi 5</li>
                        <li>4x 256GB NVMe SSD</li>
                        <li>Distributed sensor networks</li>
                        <li>Multi-location deployment</li>
                        <li>12V marine, integrated switch</li>
                    </ul>
                </div>
            </div>
        </div>
    </section>

    <section id="bulk" class="section">
        <div class="container">
            <h2 class="section-title">Scale Your Fleet</h2>
            <div class="bulk-section">
                <p style="font-size: 1.2rem; margin-bottom: 2rem; text-align: center;">
                    Planning a deployment of 50, 100, or 300+ units? We handle bulk procurement, 
                    professional assembly in our workshop, and can include on-site installation 
                    by trained technicians.
                </p>
                
                <div class="value-props">
                    <div class="value-prop">
                        <h3>Volume Pricing</h3>
                        <p>Bulk Jetson and RPi procurement at scale. Savings passed to you.</p>
                    </div>
                    
                    <div class="value-prop">
                        <h3>Professional Assembly</h3>
                        <p>Units assembled by trained technicians in our workshop. Every unit tested, 
                        every connector verified, every configuration pre-loaded.</p>
                    </div>
                    
                    <div class="value-prop">
                        <h3>Installation Service</h3>
                        <p>Our crew walks onto your vessel or facility. They plug in, power up, 
                        and have your system running in hours. No external contractors needed.</p>
                    </div>
                </div>
            </div>
        </div>
    </section>

    <section id="specs" class="section">
        <div class="container">
            <h2 class="section-title">Every Unit Includes</h2>
            <div class="included-grid">
                <div class="included-item">Deckboss (build tools, pre-loaded)</div>
                <div class="included-item">Cocapn runtime (ready to activate)</div>
                <div class="included-item">Capitaine education platform</div>
                <div class="included-item">Local models: Whisper STT, Piper TTS</div>
                <div class="included-item">Phi-3-mini LLM</div>
                <div class="included-item">Base fleet templates</div>
                <div class="included-item">Emergency firmware SD card</div>
            </div>
        </div>
    </section>

    <section class="section">
        <div class="container">
            <h2 class="section-title">Accessories</h2>
            <div class="accessories-grid">
                <div class="accessory-item">
                    <div>Thermal Camera</div>
                    <div class="accessory-price">$89</div>
                </div>
                <div class="accessory-item">
                    <div>CSI Camera</div>
                    <div class="accessory-price">$49</div>
                </div>
                <div class="accessory-item">
                    <div>IP67 Enclosure</div>
                    <div class="accessory-price">$79</div>
                </div>
                <div class="accessory-item">
                    <div>12V Marine Power</div>
                    <div class="accessory-price">$29</div>
                </div>
                <div class="accessory-item">
                    <div>GPS Module</div>
                    <div class="accessory-price">$39</div>
                </div>
                <div class="accessory-item">
                    <div>Antenna Kit</div>
                    <div class="accessory-price">$49</div>
                </div>
            </div>
        </div>
    </section>

    <footer id="support">
        <div class="container">
            <div class="footer-links">
                <a href="https://deckboss.ai">Deckboss.ai</a>
                <a href="https://deckboss.net">Deckboss.net</a>
                <a href="https://cocapn.ai">Cocapn.ai</a>
                <a href="https://cocapn.com">Cocapn.com</a>
                <a href="https://capitaine.ai">Capitaine.ai</a>
                <a href="https://github.com/Lucineer">github.com/Lucineer</a>
            </div>
            <p class="footer-tagline">Built by technicians, for technicians.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener("click", function(e) {
                e.preventDefault();
                const targetId = this.getAttribute("href");
                if (targetId === "#") return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: "smooth"
                    });
                }
            });
        });
        
        // Simple order button handler
        document.querySelector(".cta-button").addEventListener("click", function(e) {
            if (this.getAttribute("href") === "#products") {
                e.preventDefault();
                const productsSection = document.querySelector("#products");
                window.scrollTo({
                    top: productsSection.offsetTop - 80,
                    behavior: "smooth"
                });
            }
        });
    </script>

    <div style="max-width:700px;margin:2rem auto;padding:1.5rem;background:rgba(255,255,255,0.05);border-radius:12px;text-align:center">
      <p style="margin:0 0 0.5rem;font-size:0.8rem;color:#888">Part of the Lucineer Ecosystem</p>
      <div style="display:flex;flex-wrap:wrap;justify-content:center;gap:0.5rem;font-size:0.75rem">
        <a href="https://github.com/Lucineer/cocapn-ai" style="color:#60a5fa;text-decoration:none">cocapn.ai</a>
        <a href="https://github.com/Lucineer/deckboss" style="color:#60a5fa;text-decoration:none">deckboss.ai</a>
        <a href="https://github.com/Lucineer/deckboss-hardware" style="color:#60a5fa;text-decoration:none">deckboss.net</a>
        <a href="https://github.com/Lucineer/capitaine-ai" style="color:#60a5fa;text-decoration:none">capitaine.ai</a>
        <a href="https://github.com/Lucineer/the-fleet" style="color:#60a5fa;text-decoration:none">the-fleet</a>
      </div>
      <p style="margin:0.5rem 0 0;font-size:0.65rem;color:#666">Built by Superinstance &amp; Lucineer (DiGennaro et al.)</p>
    </div>
</body>
</html>`;

    return new Response(html, {
      headers: {
        "Content-Type": "text/html;charset=UTF-8",
        ...securityHeaders
      }
    });
  }
};