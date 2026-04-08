javascript
const HTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>DeckBoss Hardware | Professional Technician Tools</title>
    <meta name="description" content="Professional hardware diagnostic tools for technicians">
    <style>
        :root {
            --bg: #0f172a;
            --surface: #1e293b;
            --text: #f1f5f9;
            --text-muted: #94a3b8;
            --accent: #f59e0b;
            --accent-hover: #fbbf24;
            --border: #334155;
            --radius: 0.5rem;
            --transition: all 0.2s ease;
        }
        
        * {
            margin: 0;
            padding: 0;
            box-sizing: border-box;
        }
        
        body {
            font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, sans-serif;
            background: var(--bg);
            color: var(--text);
            line-height: 1.6;
            min-height: 100vh;
        }
        
        .container {
            width: 100%;
            max-width: 1200px;
            margin: 0 auto;
            padding: 0 1rem;
        }
        
        /* Header */
        header {
            padding: 1.5rem 0;
            border-bottom: 1px solid var(--border);
        }
        
        nav {
            display: flex;
            justify-content: space-between;
            align-items: center;
        }
        
        .logo {
            font-size: 1.5rem;
            font-weight: 700;
            color: var(--accent);
            text-decoration: none;
        }
        
        .logo span {
            color: var(--text);
        }
        
        .nav-links {
            display: flex;
            gap: 2rem;
            align-items: center;
        }
        
        .nav-links a {
            color: var(--text-muted);
            text-decoration: none;
            transition: var(--transition);
        }
        
        .nav-links a:hover {
            color: var(--accent);
        }
        
        .cta-button {
            background: var(--accent);
            color: var(--bg);
            padding: 0.5rem 1.5rem;
            border-radius: var(--radius);
            font-weight: 600;
            transition: var(--transition);
        }
        
        .cta-button:hover {
            background: var(--accent-hover);
            transform: translateY(-2px);
        }
        
        /* Hero */
        .hero {
            padding: 4rem 0;
            text-align: center;
            max-width: 800px;
            margin: 0 auto;
        }
        
        .hero h1 {
            font-size: 3rem;
            margin-bottom: 1rem;
            line-height: 1.2;
        }
        
        .hero p {
            font-size: 1.25rem;
            color: var(--text-muted);
            margin-bottom: 2rem;
        }
        
        /* Features */
        .features {
            padding: 4rem 0;
            background: var(--surface);
        }
        
        .section-title {
            text-align: center;
            margin-bottom: 3rem;
            font-size: 2rem;
        }
        
        .features-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .feature-card {
            background: var(--bg);
            padding: 2rem;
            border-radius: var(--radius);
            border: 1px solid var(--border);
            transition: var(--transition);
        }
        
        .feature-card:hover {
            border-color: var(--accent);
            transform: translateY(-4px);
        }
        
        .feature-icon {
            font-size: 2rem;
            margin-bottom: 1rem;
            color: var(--accent);
        }
        
        /* Pricing */
        .pricing {
            padding: 4rem 0;
        }
        
        .pricing-grid {
            display: grid;
            grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
            gap: 2rem;
        }
        
        .pricing-card {
            background: var(--surface);
            border-radius: var(--radius);
            padding: 2rem;
            border: 1px solid var(--border);
            transition: var(--transition);
        }
        
        .pricing-card.featured {
            border-color: var(--accent);
            transform: scale(1.05);
        }
        
        .pricing-card:hover {
            border-color: var(--accent);
        }
        
        .price {
            font-size: 2.5rem;
            font-weight: 700;
            color: var(--accent);
            margin: 1rem 0;
        }
        
        .price span {
            font-size: 1rem;
            color: var(--text-muted);
        }
        
        .pricing-features {
            list-style: none;
            margin: 2rem 0;
        }
        
        .pricing-features li {
            padding: 0.5rem 0;
            border-bottom: 1px solid var(--border);
        }
        
        /* Footer */
        footer {
            padding: 3rem 0;
            border-top: 1px solid var(--border);
            text-align: center;
            color: var(--text-muted);
        }
        
        /* Mobile */
        @media (max-width: 768px) {
            .hero h1 {
                font-size: 2rem;
            }
            
            .nav-links {
                display: none;
            }
            
            .pricing-card.featured {
                transform: none;
            }
            
            .features-grid,
            .pricing-grid {
                grid-template-columns: 1fr;
            }
        }
    </style>
</head>
<body>
    <header>
        <div class="container">
            <nav>
                <a href="#" class="logo">Deck<span>Boss</span></a>
                <div class="nav-links">
                    <a href="#features">Features</a>
                    <a href="#pricing">Pricing</a>
                    <a href="#" class="cta-button">Get Started</a>
                </div>
            </nav>
        </div>
    </header>

    <main>
        <section class="hero">
            <div class="container">
                <h1>Professional Hardware Tools for Technicians</h1>
                <p>Diagnose, repair, and optimize hardware with precision tools trusted by professionals worldwide.</p>
                <a href="#pricing" class="cta-button" style="font-size: 1.1rem; padding: 0.75rem 2rem;">View Plans</a>
            </div>
        </section>

        <section id="features" class="features">
            <div class="container">
                <h2 class="section-title">Powerful Features</h2>
                <div class="features-grid">
                    <div class="feature-card">
                        <div class="feature-icon">⚡</div>
                        <h3>Real-time Diagnostics</h3>
                        <p>Live hardware monitoring with detailed performance metrics and alerts.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">🔧</div>
                        <h3>Advanced Repair Tools</h3>
                        <p>Comprehensive toolkit for hardware troubleshooting and component testing.</p>
                    </div>
                    <div class="feature-card">
                        <div class="feature-icon">📊</div>
                        <h3>Performance Analytics</h3>
                        <p>Detailed reports and benchmarks to optimize hardware performance.</p>
                    </div>
                </div>
            </div>
        </section>

        <section id="pricing" class="pricing">
            <div class="container">
                <h2 class="section-title">Simple Pricing</h2>
                <div class="pricing-grid">
                    <div class="pricing-card">
                        <h3>Free</h3>
                        <div class="price">$0<span>/month</span></div>
                        <ul class="pricing-features">
                            <li>Basic diagnostics</li>
                            <li>3 device limit</li>
                            <li>Community support</li>
                        </ul>
                        <a href="#" class="cta-button" style="width: 100%; display: block; text-align: center;">Get Started</a>
                    </div>
                    <div class="pricing-card featured">
                        <h3>Pro</h3>
                        <div class="price">$9<span>/month</span></div>
                        <ul class="pricing-features">
                            <li>Advanced diagnostics</li>
                            <li>10 device limit</li>
                            <li>Priority support</li>
                            <li>Export reports</li>
                        </ul>
                        <a href="#" class="cta-button" style="width: 100%; display: block; text-align: center;">Most Popular</a>
                    </div>
                    <div class="pricing-card">
                        <h3>Business</h3>
                        <div class="price">$29<span>/month</span></div>
                        <ul class="pricing-features">
                            <li>Unlimited devices</li>
                            <li>Team collaboration</li>
                            <li>Custom integrations</li>
                            <li>24/7 phone support</li>
                        </ul>
                        <a href="#" class="cta-button" style="width: 100%; display: block; text-align: center;">Get Started</a>
                    </div>
                    <div class="pricing-card">
                        <h3>Enterprise</h3>
                        <div class="price">$99<span>/month</span></div>
                        <ul class="pricing-features">
                            <li>Everything in Business</li>
                            <li>On-premise deployment</li>
                            <li>Custom development</li>
                            <li>Dedicated account manager</li>
                        </ul>
                        <a href="#" class="cta-button" style="width: 100%; display: block; text-align: center;">Contact Sales</a>
                    </div>
                </div>
            </div>
        </section>
    </main>

    <footer>
        <div class="container">
            <p>&copy; 2024 DeckBoss Hardware. All rights reserved.</p>
            <p style="margin-top: 0.5rem; font-size: 0.9rem;">Professional tools for professional technicians.</p>
        </div>
    </footer>

    <script>
        // Smooth scrolling for anchor links
        document.querySelectorAll('a[href^="#"]').forEach(anchor => {
            anchor.addEventListener('click', function (e) {
                e.preventDefault();
                const target = document.querySelector(this.getAttribute('href'));
                if (target) {
                    target.scrollIntoView({
                        behavior: 'smooth',
                        block: 'start'
                    });
                }
            });
        });
        
        // Simple mobile menu toggle (minimal as requested)
        const nav = document.querySelector('.nav-links');
        const logo = document.querySelector('.logo');
        
        logo.addEventListener('dblclick', () => {
            if (window.innerWidth <= 768) {
                nav.style.display = nav.style.display === 'flex' ? 'none' : 'flex';
                nav.style.flexDirection = 'column';
                nav.style.position = 'absolute';
                nav.style.top = '100%';
                nav.style.left = '0';
                nav.style.right = '0';
                nav.style.background = 'var(--surface)';
                nav.style.padding = '1rem';
                nav.style.gap = '1rem';
                nav.style.borderBottom = '1px solid var(--border)';
            }
        });
    </script>
</body>
</html>
`;

export default {
  async fetch(request) {
    const url = new URL(request.url);
    
    // Health endpoint
    if (url.pathname === '/health') {
      return new Response(
        JSON.stringify({ 
          status: 'healthy', 
          timestamp: new Date().toISOString(),
          service: 'deckboss-hardware'
        }), 
        {
          headers: { 
            'Content-Type': 'application/json',
            'Cache-Control': 'no-cache'
          }
        }
      );
    }
    
    // Main landing page
    return new Response(HTML, {
      headers: {
        'Content-Type': 'text/html;charset=UTF-8',
        'X-Frame-Options': 'DENY',
        'Content-Security-Policy': "default-src 'self'; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
      }
    });
  }
};