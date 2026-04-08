/**
 * Deckboss.net - Physical Hardware Store for Cocapn Ecosystem
 * Cloudflare Worker - Single File TypeScript Implementation
 */

export interface Env {
  // Environment variables can be added here
}

const ACCENT_COLOR = "#f59e0b";
const BRAND_ICON = "⚙";

const products = [
  {
    id: "nano",
    name: "Deckboss Nano",
    price: 299,
    description: "Raspberry Pi 5 8GB, 256GB NVMe",
    useCase: "Simple monitoring",
    specs: ["Raspberry Pi 5 8GB", "256GB NVMe SSD", "Passive cooling", "Gigabit Ethernet", "2x USB 3.0"],
    software: ["Deckboss", "Cocapn runtime", "Capitaine", "Local models"],
    featured: false
  },
  {
    id: "standard",
    name: "Deckboss Standard",
    price: 599,
    description: "Jetson Super Orin Nano 8GB, 2TB NVMe",
    useCase: "Multi-sensor, vision, STT/TTS",
    specs: ["Jetson Super Orin Nano 8GB", "2TB NVMe SSD", "Active cooling", "2.5GbE", "4x USB 3.2"],
    software: ["Deckboss", "Cocapn runtime", "Capitaine", "Local models", "JetPack 6.x"],
    featured: true
  },
  {
    id: "pro",
    name: "Deckboss Pro",
    price: 1199,
    description: "2x Jetson Orin Nano",
    useCase: "Complex robotics, parallel inference",
    specs: ["Dual Jetson Orin Nano", "4TB NVMe RAID", "Industrial cooling", "Dual 2.5GbE", "8x USB 3.2"],
    software: ["Deckboss", "Cocapn runtime", "Capitaine", "Local models", "Kubernetes edge"],
    featured: false
  },
  {
    id: "enterprise",
    name: "Deckboss Enterprise",
    price: 1499,
    description: "4x Raspberry Pi 5 array",
    useCase: "Distributed sensor networks",
    specs: ["4x Raspberry Pi 5 8GB", "8TB distributed storage", "Rack mount", "10GbE uplink", "16x USB 3.0"],
    software: ["Deckboss", "Cocapn runtime", "Capitaine", "Local models", "Swarm orchestration"],
    featured: false
  }
];

const accessories = [
  { name: "USB thermal camera", price: 89 },
  { name: "CSI camera", price: 49 },
  { name: "IP67 enclosure", price: 79 },
  { name: "12V marine power", price: 29 },
  { name: "GPS module", price: 39 },
  { name: "Antenna kit", price: 49 },
  { name: "SD backup card", price: 29 }
];

const features = [
  "Preloaded software",
  "Plug and play",
  "JetPack 6.x ready",
  "Marine-grade power options",
  "Industrial temperature range",
  "Docker/Kubernetes native"
];

const navigation = [
  { name: "Products", href: "#products" },
  { name: "Specs", href: "#specs" },
  { name: "Accessories", href: "#accessories" },
  { name: "Support", href: "#support" },
  { name: "Docs", href: "https://docs.deckboss.ai" }
];

const footerLinks = [
  { name: "Deckboss.ai", href: "https://deckboss.ai" },
  { name: "Deckboss.net", href: "https://deckboss.net" },
  { name: "Cocapn.ai", href: "https://cocapn.ai" },
  { name: "Cocapn.com", href: "https://cocapn.com" },
  { name: "Capitaine.ai", href: "https://capitaine.ai" },
  { name: "GitHub", href: "https://github.com/cocapn" }
];

const generateHTML = (): string => {
  return `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Deckboss.net - Physical Hardware Store for Cocapn Ecosystem</title>
    <meta name="description" content="Your robot's brain, ready to ship. Industrial-grade hardware preloaded with Deckboss, Cocapn runtime, and local AI models.">
    <style>
        :root {
            --accent: ${ACCENT_COLOR};
            --accent-dark: #d97706;
            --bg-primary: #0f172a;
            --bg-secondary: #1e293b;
            --bg-card: #334155;
            --text-primary: #f8fafc;
            --text-secondary: #cbd5e1;
            --border: #475569;
            --success: #10b981;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, 'Segoe UI', Roboto, Oxygen, Ubuntu, sans-serif;
            background-color: var(--bg-primary);
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
            background-color: var(--bg-secondary);
            border-bottom: 1px solid var(--border);
            position: sticky;
            top: 0;
            z-index: 100;
        }
        
        .nav-container {
            display: flex;
            justify-content: space-between;
            align-items: center;
            padding: 1rem 0;
        }
        
        .logo {
            display: flex;
            align-items: center;
            gap: 0.5rem;
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
            background: linear-gradient(135deg, var(--bg-secondary) 0%, var(--bg-primary) 100%);
            border-bottom: 1px solid var(--border);
        }
        
        .hero h1 {
            font-size: 3.5rem;
            margin-bottom: 1rem;
            background: linear-gradient(to right, var(--accent), #fbbf24);
            -webkit-background-clip: text;
            -webkit-text-fill-color: transparent;
        }
        
        .hero-subtitle {
            font-size: 1.25rem;
            color: var(--text-secondary);
            max-width: 600px;
            margin: 0 auto 2rem;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
            gap: 1rem;
            margin-top: 2rem;
        }
        
        .feature {
            background: var(--bg-card);
            padding: 1rem;
            border-radius: 8px;
            border: 1px solid var(--border);
            text-align: center;
        }
        
        /* Products Section */
        .section-title {
            font-size: 2.5rem;
            margin: 3rem 0 2rem;
            text-align: center;
            color: var(--text-primary);
        }
        
        .products-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
            gap: 2rem;
            margin-bottom: 4rem;
        }
        
        .product-card {
            background: var(--bg-card);
            border-radius: 12px;
            overflow: hidden;
            border: 1px solid var(--border);
            transition: transform 0.3s, border-color 0.3s;
        }
        
        .product-card:hover {
            transform: translateY(-4px);
            border-color: var(--accent);
        }
        
        .product-card.featured {
            border: 2px solid var(--accent);
            position: relative;
        }
        
        .featured-badge {
            position: absolute;
            top: 1rem;
            right: 1rem;
            background: var(--accent);
            color: var(--bg-primary);
            padding: 0.25rem 0.75rem;
            border-radius: 20px;
            font-size: 0.875rem;
            font-weight: bold;
        }
        
        .product-header {
            padding: 1.5rem;
            border-bottom: 1px solid var(--border);
        }
        
        .product-name {
            font-size: 1.5rem;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }
        
        .product-price {
            font-size: 2rem;
            font-weight: bold;
            color: var(--accent);
            margin-bottom: 0.5rem;
        }
        
        .product-description {
            color: var(--text-secondary);
            margin-bottom: 1rem;
        }
        
        .product-specs {
            padding: 1.5rem;
        }
        
        .spec-list {
            list-style: none;
            margin-bottom: 1.5rem;
        }
        
        .spec-list li {
            padding: 0.5rem 0;
            border-bottom: 1px solid rgba(255,255,255,0.1);
            color: var(--text-secondary);
        }
        
        .spec-list li:last-child {
            border-bottom: none;
        }
        
        .buy-button {
            display: block;
            width: 100%;
            padding: 1rem;
            background: var(--accent);
            color: var(--bg-primary);
            border: none;
            border-radius: 8px;
            font-size: 1rem;
            font-weight: bold;
            cursor: pointer;
            text-align: center;
            text-decoration: none;
            transition: background-color 0.2s;
        }
        
        .buy-button:hover {
            background: var(--accent-dark);
        }
        
        /* Comparison Table */
        .comparison-table {
            width: 100%;
            border-collapse: collapse;
            margin: 2rem 0 4rem;
            background: var(--bg-card);
            border-radius: 8px;
            overflow: hidden;
        }
        
        .comparison-table th,
        .comparison-table td {
            padding: 1rem;
            text-align: left;
            border-bottom: 1px solid var(--border);
        }
        
        .comparison-table th {
            background: var(--bg-secondary);
            font-weight: 600;
            color: var(--accent);
        }
        
        .comparison-table tr:last-child td {
            border-bottom: none;
        }
        
        /* Accessories */
        .accessories-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 1rem;
            margin: 2rem 0 4rem;
        }
        
        .accessory-card {
            background: var(--bg-card);
            padding: 1.5rem;
            border-radius: 8px;
            border: 1px solid var(--border);
        }
        
        .accessory-name {
            font-size: 1.125rem;
            margin-bottom: 0.5rem;
            color: var(--text-primary);
        }
        
        .accessory-price {
            color: var(--accent);
            font-weight: bold;
            font-size: 1.25rem;
        }
        
        /* Footer */
        footer {
            background: var(--bg-secondary);
            border-top: 1px solid var(--border);
            padding: 3rem 0;
            margin-top: 4rem;
        }
        
        .footer-content {
            display: flex;
            justify-content: space-between;
            flex-wrap: wrap;
            gap: 2rem;
        }
        
        .footer-links {
            display: flex;
            flex-wrap: wrap;
            gap: 1.5rem;
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
            color: var(--text-secondary);
            font-size: 0.875rem;
            margin-top: 2rem;
            text-align: center;
            width: 100%;
        }
        
        /* Responsive Design */
        @media (max-width: 768px) {
            .nav-links {
                display: none;
                position: absolute;
                top: 100%;
                left: 0;
                right: 0;
                background: var(--bg-secondary);
                flex-direction: column;
                padding: 1rem;
                border-bottom: 1px solid var(--border);
            }
            
            .nav-links.active {
                display: flex;
            }
            
            .mobile-menu-btn {
                display: block;
            }
            
            .hero h1 {
                font-size: 2.5rem;
            }
            
            .comparison-table {
                display: block;
                overflow-x: auto;
            }
            
            .footer-content {
                flex-direction: column;
                text-align: center;
            }
        }
        
        @media (max-width: 480px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .section-title {
                font-size: 2rem;
            }
            
            .products-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container nav-container">
            <a href="/" class="logo">
                <span>${BRAND_ICON}</span>
                <span>Deckboss.net</span>
            </a>
            
            <button class="mobile-menu-btn" id="mobileMenuBtn">☰</button>
            
            <ul class="nav-links" id="navLinks">
                ${navigation.map(item => `
                <li><a href="${item.href}">${item.name}</a></li>
                `).join('')}
            </ul>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Your robot's brain, ready to ship</h1>
                <p class="hero-subtitle">Industrial-grade hardware preloaded with Deckboss, Cocapn runtime, Capitaine, and local AI models. Deploy in minutes, not weeks.</p>
                
                <div class="features-grid">
                    ${features.map(feature => `
                    <div class="feature">
                        <span>${feature}</span>
                    </div>
                    `).join('')}
                </div>
            </div>
        </section>

        <section id="products" class="container">
            <h2 class="section-title">Hardware Units</h2>
            
            <div class="products-grid">
                ${products.map(product => `
                <div class="product-card ${product.featured ? 'featured' : ''}">
                    ${product.featured ? '<div class="featured-badge">Most Popular</div>' : ''}
                    <div class="product-header">
                        <h3 class="product-name">${product.name}</h3>
                        <div class="product-price">$${product.price}</div>
                        <p class="product-description">${product.description}</p>
                        <div class="use-case">${product.useCase}</div>
                    </div>
                    <div class="product-specs">
                        <ul class="spec-list">
                            ${product.specs.map(spec => `<li>${spec}</li>`).join('')}
                        </ul>
                        <a href="https://deckboss.net/order/${product.id}" class="buy-button">
                            Pre-order Now
                        </a>
                    </div>
                </div>
                `).join('')}
            </div>
        </section>

        <section id="specs" class="container">
            <h2 class="section-title">Technical Comparison</h2>
            
            <table class="comparison-table">
                <thead>
                    <tr>
                        <th>Model</th>
                        <th>Processor</th>
                        <th>Memory</th>
                        <th>Storage</th>
                        <th>Networking</th>
                        <th>Price</th>
                    </tr>
                </thead>
                <tbody>
                    ${products.map(product => `
                    <tr>
                        <td><strong>${product.name}</strong></td>
                        <td>${product.specs[0]}</td>
                        <td>${product.specs.find(s => s.includes('GB')) || '8GB'}</td>
                        <td>${product.specs.find(s => s.includes('TB') || s.includes('GB')) || '256GB'}</td>
                        <td>${product.specs.find(s => s.includes('GbE') || s.includes('Ethernet')) || 'Gigabit Ethernet'}</td>
                        <td><strong>$${product.price}</strong></td>
                    </tr>
                    `).join('')}
                </tbody>
            </table>
        </section>

        <section id="accessories" class="container">
            <h2 class="section-title">Accessories & Add-ons</h2>
            
            <div class="accessories-grid">
                ${accessories.map(accessory => `
                <div class="accessory-card">
                    <h3 class="accessory-name">${accessory.name}</h3>
                    <div class="accessory-price">$${accessory.price}</div>
                </div>
                `).join('')}
            </div>
        </section>

        <section id="support" class="container">
            <h2 class="section-title">Included Software</h2>
            
            <div class="features-grid" style="margin-top: 2rem;">
                <div class="feature">
                    <h3>Deckboss</h3>
                    <p>Build phase orchestration</p>
                </div>
                <div class="feature">
                    <h3>Cocapn Runtime</h3>
                    <p>Service phase management</p>
                </div>
                <div class="feature">
                    <h3>Capitaine</h3>
                    <p>Cold/premium execution</p>
                </div>
                <div class="feature">
                    <h3>Local Models</h3>
                    <p>Whisper, Piper, Phi-3-mini</p>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <div class="footer-content">
                <div class="logo">
                    <span>${BRAND_ICON}</span>
                    <span>Deckboss Hardware</span>
                </div>
                
                <div class="footer-links">
                    ${footerLinks.map(link => `
                    <a href="${link.href}" target="_blank" rel="noopener noreferrer">${link.name}</a>
                    `).join('')}
                </div>
            </div>
            
            <div class="copyright">
                <p>© ${new Date().getFullYear()} Deckboss.net - Part of the Cocapn Ecosystem. All hardware ships with preloaded software stack.</p>
                <p style="margin-top: 0.5rem; font-size: 0.75rem; color: #94a3b8;">Prices in USD. Shipping worldwide. 30-day return policy.</p>
            </div>
        </div>
    </footer>

    <script>
        // Mobile menu toggle
        document.getElementById('mobileMenuBtn').addEventListener('click', function() {
            document.getElementById('navLinks').classList.toggle('active');
        });
        
        // Close mobile menu when clicking outside
        document.addEventListener('click', function(event) {
            const navLinks = document.getElementById('navLinks');
            const menuBtn = document.getElementById('mobileMenuBtn');
            
            if (!navLinks.contains(event.target) && !menuBtn.contains(event.target)) {
                navLinks.classList.remove('active');
            }
        });
        
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const targetId = this.getAttribute('href');
                if (targetId === '#') return;
                
                const targetElement = document.querySelector(targetId);
                if (targetElement) {
                    window.scrollTo({
                        top: targetElement.offsetTop - 80,
                        behavior: 'smooth'
                    });
                    
                    // Close mobile menu if open
                    document.getElementById('navLinks').classList.remove('active');
                }
            });
        });
        
        // Add to cart simulation
        document.querySelectorAll('.buy-button').forEach(button => {
            button.addEventListener('click', function(e) {
                if (this.getAttribute('href').includes('deckboss.net')) {
                    // Allow navigation to actual store
                    return;
                }
                e.preventDefault();
                const productName = this.closest('.product-card').querySelector('.product-name').textContent;
                alert(productName + ' added to cart (demo mode)');
            });
        });
    </script>
</body>
</html>`;
};

const healthCheckResponse = (): Response => {
  return new Response(JSON.stringify({
    status: "healthy",
    timestamp: new Date().toISOString(),
    service: "deckboss-hardware-store",
    version: "1.0.0"
  }), {
    headers: {
      "Content-Type": "application/json",
      "Cache-Control": "no-cache"
    }
  });
};

export default {
  async fetch(request: Request, env: Env, ctx: ExecutionContext): Promise<Response> {
    const url = new URL(request.url);
    
    // Health check endpoint
    if (url.pathname === "/health") {
      return healthCheckResponse();
    }
    
    // Generate HTML response for all other routes
    const html = generateHTML();
    
    return new Response(html, {
      headers: {
        "Content-Type": "text/html; charset=utf-8",
        "X-Frame-Options": "DENY",
        "Content-Security-Policy": "default-src 'self'; style-src 'self' 'unsafe-inline'; script-src 'self' 'unsafe-inline'; img-src 'self' data: https:;",
        "X-Content-Type-Options": "nosniff",
        "Referrer-Policy": "strict-origin-when-cross-origin",
        "Cache-Control": "public, max-age=3600"
      }
    });
  }
};