// Router for Single Page Application
class Router {
    constructor() {
        this.routes = {
            'home': this.loadHome.bind(this),
            'about': this.loadAbout.bind(this),
            'programs': this.loadPrograms.bind(this),
            'products': this.loadProducts.bind(this),
            'services': this.loadServices.bind(this),
            'collaborations': this.loadCollaborations.bind(this),
            'donations': this.loadDonations.bind(this),
            'contact': this.loadContact.bind(this)
        };
        
        this.currentPage = 'home';
        this.init();
    }

    init() {
        // Handle navigation clicks
        document.addEventListener('click', (e) => {
            const link = e.target.closest('[data-page]');
            if (link) {
                e.preventDefault();
                const page = link.getAttribute('data-page');
                this.navigateTo(page);
            }
        });

        // Handle browser back/forward
        window.addEventListener('popstate', (e) => {
            const page = window.location.hash.replace('#', '') || 'home';
            this.loadPage(page);
        });

        // Load initial page
        const initialPage = window.location.hash.replace('#', '') || 'home';
        this.navigateTo(initialPage, false);
    }

    navigateTo(page, pushState = true) {
        if (this.routes[page] && page !== this.currentPage) {
            if (pushState) {
                window.history.pushState({}, '', `#${page}`);
            }
            this.loadPage(page);
        }
    }

    async loadPage(page) {
        await this.routes[page]();
    }

    updateNavigation(page) {
        // Update active nav link
        document.querySelectorAll('.nav-link').forEach(link => {
            link.classList.remove('active');
            if (link.getAttribute('data-page') === page) {
                link.classList.add('active');
            }
        });
    }

    showLoading() {
        document.getElementById('loading-spinner').classList.add('active');
    }

    hideLoading() {
        document.getElementById('loading-spinner').classList.remove('active');
    }

    // Page Loaders
    async loadHome() {
        const homePage = document.getElementById('home-page');
        homePage.classList.add('active');
        homePage.scrollIntoView({ behavior: 'smooth' });
        this.updateNavigation('home');
        this.currentPage = 'home';
    }

    async loadAbout() {
        await this.loadPageContent('about', `
            <div class="page-content">
                <div class="container">
                    <div class="page-header">
                        <h1>About Camellia Innovations</h1>
                        <p class="page-subtitle">Pioneering African Biotechnology Innovation</p>
                    </div>
                    
                    <div class="about-grid">
                        <div class="about-main">
                            <div class="mission-card">
                                <h2>Our Mission</h2>
                                <p>Camellia Innovations (Pty) Ltd is a South African Hybrid Biotechnology Start-up integrating Artificial Intelligence, Bioinformatics, and Sustainable Manufacturing to develop innovative biological solutions for global health, agriculture, and environmental sustainability.</p>
                            </div>
                            
                            <div class="vision-card">
                                <h2>Our Vision</h2>
                                <p>To be Africa's leading biotechnology innovator, creating sustainable solutions through nature-inspired technologies that address pressing global challenges.</p>
                            </div>
                        </div>
                        
                        <div class="about-sidebar">
                            <div class="info-card">
                                <h3>Company Information</h3>
                                <div class="info-item">
                                    <strong>Registration No.:</strong>
                                    <span>2024/631831/07</span>
                                </div>
                                <div class="info-item">
                                    <strong>Location:</strong>
                                    <span>South Africa</span>
                                </div>
                                <div class="info-item">
                                    <strong>Industry:</strong>
                                    <span>Biotechnology & AI</span>
                                </div>
                            </div>
                            
                            <div class="divisions-preview">
                                <h3>Our Divisions</h3>
                                <div class="division-mini-card">
                                    <i class="fas fa-brain"></i>
                                    <div>
                                        <h4>AI & Bioinformatics</h4>
                                        <p>Drug Discovery & Computational Biology</p>
                                    </div>
                                </div>
                                <div class="division-mini-card">
                                    <i class="fas fa-flask"></i>
                                    <div>
                                        <h4>FermaRoot™ Biomanufacturing</h4>
                                        <p>Sustainable Probiotic Solutions</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    async loadPrograms() {
        await this.loadPageContent('programs', `
            <div class="page-content">
                <div class="container">
                    <div class="page-header">
                        <h1>Our Programs</h1>
                        <p class="page-subtitle">Driving Innovation Through Strategic Initiatives</p>
                    </div>
                    
                    <div class="programs-grid">
                        <div class="program-card large">
                            <div class="program-icon">
                                <i class="fas fa-microscope"></i>
                            </div>
                            <div class="program-content">
                                <h3>Research & Development</h3>
                                <p>Pioneering research in AI-driven drug discovery, molecular analysis, and sustainable biomanufacturing processes. Our R&D team works at the intersection of nature and technology.</p>
                                <ul class="program-features">
                                    <li>AI-Powered Drug Discovery</li>
                                    <li>Molecular Analysis & Modeling</li>
                                    <li>Sustainable Process Development</li>
                                    <li>Bioinformatics Research</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="program-card large">
                            <div class="program-icon">
                                <i class="fas fa-seedling"></i>
                            </div>
                            <div class="program-content">
                                <h3>Youth Biotech Incubation</h3>
                                <p>Nurturing the next generation of African biotech entrepreneurs through mentorship, resources, and access to cutting-edge technology.</p>
                                <ul class="program-features">
                                    <li>Entrepreneurship Training</li>
                                    <li>Mentorship Programs</li>
                                    <li>Lab Access & Resources</li>
                                    <li>Funding Opportunities</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="program-card large">
                            <div class="program-icon">
                                <i class="fas fa-users"></i>
                            </div>
                            <div class="program-content">
                                <h3>Community Engagement</h3>
                                <p>Bringing biotechnology education and innovation to local communities through workshops, seminars, and collaborative projects.</p>
                                <ul class="program-features">
                                    <li>Educational Workshops</li>
                                    <li>Community Science Projects</li>
                                    <li>Public Seminars</li>
                                    <li>School Outreach Programs</li>
                                </ul>
                            </div>
                        </div>
                        
                        <div class="program-card large">
                            <div class="program-icon">
                                <i class="fas fa-graduation-cap"></i>
                            </div>
                            <div class="program-content">
                                <h3>Student Training Opportunities</h3>
                                <p>Providing hands-on training and internship opportunities for students in biotechnology, AI, and sustainable manufacturing.</p>
                                <ul class="program-features">
                                    <li>Internship Programs</li>
                                    <li>Research Fellowships</li>
                                    <li>Practical Skill Development</li>
                                    <li>Career Mentorship</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    async loadProducts() {
        await this.loadPageContent('products', `
            <div class="page-content">
                <div class="container">
                    <div class="page-header">
                        <h1>Our Products</h1>
                        <p class="page-subtitle">Innovative Biotechnology Solutions</p>
                    </div>
                    
                    <div class="products-showcase">
                        <div class="product-hero">
                            <div class="product-image">
                                <div class="product-visual">
                                    <i class="fas fa-prescription-bottle"></i>
                                </div>
                            </div>
                            <div class="product-details">
                                <h2>Mellivarin</h2>
                                <p class="product-tagline">Bee-Derived Antimicrobial Peptides</p>
                                <p class="product-description">
                                    A revolutionary antimicrobial solution derived from bee-derived peptides, offering natural and effective protection against pathogens while promoting sustainable healthcare solutions.
                                </p>
                                <div class="product-features">
                                    <div class="feature">
                                        <i class="fas fa-shield-alt"></i>
                                        <span>Natural Antimicrobial</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-leaf"></i>
                                        <span>Sustainable Source</span>
                                    </div>
                                    <div class="feature">
                                        <i class="fas fa-flask"></i>
                                        <span>Bio-Inspired Formula</span>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div class="products-grid">
                            <div class="product-card featured">
                                <div class="product-icon">
                                    <i class="fas fa-wine-bottle"></i>
                                </div>
                                <h3>FermaRoot™ Probiotic Drink</h3>
                                <p>Functional fermented beverages combining traditional fermentation with modern biotechnology for optimal gut health and nutrition.</p>
                                <div class="product-specs">
                                    <span class="spec">Probiotic-Rich</span>
                                    <span class="spec">Plant-Based</span>
                                    <span class="spec">Sustainable</span>
                                </div>
                            </div>
                            
                            <div class="product-card">
                                <div class="product-icon">
                                    <i class="fas fa-mortar-pestle"></i>
                                </div>
                                <h3>Fermented Sweet Potato Powder</h3>
                                <p>Nutrient-enhanced sustainable food ingredient developed through advanced fermentation techniques for improved bioavailability.</p>
                                <div class="product-specs">
                                    <span class="spec">Nutrient-Dense</span>
                                    <span class="spec">Versatile</span>
                                    <span class="spec">Natural</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    async loadServices() {
        await this.loadPageContent('services', `
            <div class="page-content">
                <div class="container">
                    <div class="page-header">
                        <h1>Our Services</h1>
                        <p class="page-subtitle">Expert Biotechnology & AI Solutions</p>
                    </div>
                    
                    <div class="services-hero">
                        <div class="services-intro">
                            <p>Leveraging cutting-edge AI and biotechnology to provide innovative solutions for research, development, and commercial applications.</p>
                        </div>
                    </div>
                    
                    <div class="services-grid detailed">
                        <div class="service-card detailed">
                            <div class="service-header">
                                <div class="service-icon">
                                    <i class="fas fa-dna"></i>
                                </div>
                                <h3>Molecular Analysis</h3>
                            </div>
                            <div class="service-content">
                                <p>Comprehensive molecular analysis services including sequencing, protein structure analysis, and metabolic pathway modeling.</p>
                                <ul class="service-features">
                                    <li>DNA/RNA Sequencing</li>
                                    <li>Protein Structure Prediction</li>
                                    <li>Metabolic Pathway Analysis</li>
                                    <li>Biomarker Discovery</li>
                                </ul>
                                <button class="service-cta">Request Analysis</button>
                            </div>
                        </div>
                        
                        <div class="service-card detailed">
                            <div class="service-header">
                                <div class="service-icon">
                                    <i class="fas fa-robot"></i>
                                </div>
                                <h3>AI-Driven Drug Discovery</h3>
                            </div>
                            <div class="service-content">
                                <p>Advanced AI-powered drug discovery services accelerating the identification and optimization of therapeutic compounds.</p>
                                <ul class="service-features">
                                    <li>Virtual Screening</li>
                                    <li>Compound Optimization</li>
                                    <li>Target Identification</li>
                                    <li>Clinical Trial Modeling</li>
                                </ul>
                                <button class="service-cta">Explore AI Solutions</button>
                            </div>
                        </div>
                        
                        <div class="service-card detailed">
                            <div class="service-header">
                                <div class="service-icon">
                                    <i class="fas fa-chart-line"></i>
                                </div>
                                <h3>Bioinformatics Consulting</h3>
                            </div>
                            <div class="service-content">
                                <p>Expert bioinformatics consulting services for data analysis, pipeline development, and research optimization.</p>
                                <ul class="service-features">
                                    <li>Data Analysis Pipelines</li>
                                    <li>Algorithm Development</li>
                                    <li>Research Optimization</li>
                                    <li>Training & Workshops</li>
                                </ul>
                                <button class="service-cta">Schedule Consultation</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    async loadCollaborations() {
        await this.loadPageContent('collaborations', `
            <div class="page-content">
                <div class="container">
                    <div class="page-header">
                        <h1>Collaborations</h1>
                        <p class="page-subtitle">Partner with Camellia Innovations to Advance Sustainable Biotech Solutions</p>
                    </div>
                    
                    <div class="collaboration-hero">
                        <div class="collaboration-text">
                            <h2>Join Us in Building a Sustainable Future</h2>
                            <p>We believe in the power of collaboration to drive innovation. Partner with us to leverage our expertise in AI, bioinformatics, and sustainable biomanufacturing.</p>
                        </div>
                    </div>
                    
                    <div class="collaboration-areas">
                        <h3>Areas of Collaboration</h3>
                        <div class="areas-grid">
                            <div class="area-card">
                                <i class="fas fa-university"></i>
                                <h4>Academic Partnerships</h4>
                                <p>Research collaborations with universities and research institutions</p>
                            </div>
                            <div class="area-card">
                                <i class="fas fa-industry"></i>
                                <h4>Industry Alliances</h4>
                                <p>Strategic partnerships with biotech and pharmaceutical companies</p>
                            </div>
                            <div class="area-card">
                                <i class="fas fa-handshake"></i>
                                <h4>Government Projects</h4>
                                <p>Collaborative projects with government agencies and public institutions</p>
                            </div>
                            <div class="area-card">
                                <i class="fas fa-globe-africa"></i>
                                <h4>International Cooperation</h4>
                                <p>Global partnerships for sustainable development initiatives</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="collaboration-form-section">
                        <div class="form-container">
                            <h3>Request Partnership</h3>
                            <form class="collaboration-form" id="partnershipForm">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="organization">Organization Name *</label>
                                        <input type="text" id="organization" name="organization" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="contact-person">Contact Person *</label>
                                        <input type="text" id="contact-person" name="contact-person" required>
                                    </div>
                                </div>
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="email">Email Address *</label>
                                        <input type="email" id="email" name="email" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="phone">Phone Number</label>
                                        <input type="tel" id="phone" name="phone">
                                    </div>
                                </div>
                                <div class="form-group">
                                    <label for="collaboration-type">Type of Collaboration *</label>
                                    <select id="collaboration-type" name="collaboration-type" required>
                                        <option value="">Select collaboration type</option>
                                        <option value="research">Research Partnership</option>
                                        <option value="commercial">Commercial Alliance</option>
                                        <option value="academic">Academic Collaboration</option>
                                        <option value="government">Government Project</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                <div class="form-group">
                                    <label for="message">Collaboration Proposal *</label>
                                    <textarea id="message" name="message" rows="6" placeholder="Tell us about your organization and proposed collaboration..." required></textarea>
                                </div>
                                <button type="submit" class="submit-button">Submit Partnership Request</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    async loadDonations() {
        await this.loadPageContent('donations', `
            <div class="page-content">
                <div class="container">
                    <div class="page-header">
                        <h1>Support Our Mission</h1>
                        <p class="page-subtitle">Help Drive African Innovation in Biotechnology</p>
                    </div>
                    
                    <div class="donation-hero">
                        <div class="donation-message">
                            <h2>Your Support Makes Innovation Possible</h2>
                            <p>By supporting Camellia Innovations, you're investing in African-led biotechnology research, youth development, and sustainable solutions that address global challenges.</p>
                        </div>
                    </div>
                    
                    <div class="impact-section">
                        <h3>Your Impact</h3>
                        <div class="impact-grid">
                            <div class="impact-card">
                                <i class="fas fa-graduation-cap"></i>
                                <h4>Youth Education</h4>
                                <p>Support biotechnology education and training for African youth</p>
                            </div>
                            <div class="impact-card">
                                <i class="fas fa-flask"></i>
                                <h4>Research & Development</h4>
                                <p>Fund cutting-edge research in AI and sustainable biotech</p>
                            </div>
                            <div class="impact-card">
                                <i class="fas fa-leaf"></i>
                                <h4>Sustainable Solutions</h4>
                                <p>Develop environmentally friendly biotechnology solutions</p>
                            </div>
                            <div class="impact-card">
                                <i class="fas fa-hand-holding-heart"></i>
                                <h4>Community Outreach</h4>
                                <p>Extend biotechnology benefits to local communities</p>
                            </div>
                        </div>
                    </div>
                    
                    <div class="donation-options-section">
                        <h3>Ways to Support</h3>
                        <div class="donation-options">
                            <div class="donation-option">
                                <div class="option-header">
                                    <i class="fab fa-paypal"></i>
                                    <h4>Online Donation</h4>
                                </div>
                                <p>Quick and secure online donations via PayPal</p>
                                <button class="donate-button" data-method="paypal">
                                    Donate via PayPal
                                </button>
                            </div>
                            
                            <div class="donation-option">
                                <div class="option-header">
                                    <i class="fas fa-university"></i>
                                    <h4>Bank Transfer</h4>
                                </div>
                                <p>Direct bank transfer for larger contributions</p>
                                <button class="donate-button" data-method="bank">
                                    Request Bank Details
                                </button>
                            </div>
                            
                            <div class="donation-option">
                                <div class="option-header">
                                    <i class="fas fa-handshake"></i>
                                    <h4>Corporate Sponsorship</h4>
                                </div>
                                <p>Strategic partnerships for corporate supporters</p>
                                <button class="donate-button" data-method="corporate">
                                    Learn More
                                </button>
                            </div>
                        </div>
                    </div>
                    
                    <div class="transparency-notice">
                        <div class="transparency-content">
                            <i class="fas fa-shield-alt"></i>
                            <div>
                                <h4>Transparency & Accountability</h4>
                                <p>We are committed to full transparency in how donations are used. All contributions directly support our research, education programs, and community initiatives.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    async loadContact() {
        await this.loadPageContent('contact', `
            <div class="page-content">
                <div class="container">
                    <div class="page-header">
                        <h1>Contact Us</h1>
                        <p class="page-subtitle">Get in Touch with Camellia Innovations</p>
                    </div>
                    
                    <div class="contact-grid">
                        <div class="contact-info">
                            <h2>Let's Start a Conversation</h2>
                            <p>We're always interested in hearing about new opportunities, collaborations, or questions about our work.</p>
                            
                            <div class="contact-details">
                                <div class="contact-item">
                                    <i class="fas fa-envelope"></i>
                                    <div>
                                        <h4>Email</h4>
                                        <p>camelliainnovations@outlook.com</p>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <i class="fas fa-phone"></i>
                                    <div>
                                        <h4>Phone</h4>
                                        <p>060 465 7584</p>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <i class="fas fa-map-marker-alt"></i>
                                    <div>
                                        <h4>Location</h4>
                                        <p>South Africa</p>
                                    </div>
                                </div>
                                
                                <div class="contact-item">
                                    <i class="fas fa-clock"></i>
                                    <div>
                                        <h4>Response Time</h4>
                                        <p>Within 24-48 hours</p>
                                    </div>
                                </div>
                            </div>
                            
                            <div class="social-contact">
                                <h4>Follow Our Journey</h4>
                                <div class="social-links">
                                    <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
                                    <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
                                    <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
                                    <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
                                </div>
                            </div>
                        </div>
                        
                        <div class="contact-form-container">
                            <form class="contact-form" id="contactForm">
                                <div class="form-row">
                                    <div class="form-group">
                                        <label for="contact-name">Full Name *</label>
                                        <input type="text" id="contact-name" name="name" required>
                                    </div>
                                    <div class="form-group">
                                        <label for="contact-email">Email Address *</label>
                                        <input type="email" id="contact-email" name="email" required>
                                    </div>
                                </div>
                                
                                <div class="form-group">
                                    <label for="contact-subject">Subject *</label>
                                    <input type="text" id="contact-subject" name="subject" required>
                                </div>
                                
                                <div class="form-group">
                                    <label for="contact-message">Message *</label>
                                    <textarea id="contact-message" name="message" rows="8" placeholder="How can we help you?" required></textarea>
                                </div>
                                
                                <div class="form-group">
                                    <label for="contact-type">Inquiry Type</label>
                                    <select id="contact-type" name="inquiry-type">
                                        <option value="general">General Inquiry</option>
                                        <option value="collaboration">Collaboration</option>
                                        <option value="partnership">Partnership</option>
                                        <option value="media">Media Inquiry</option>
                                        <option value="career">Career Opportunity</option>
                                        <option value="other">Other</option>
                                    </select>
                                </div>
                                
                                <button type="submit" class="submit-button">
                                    <i class="fas fa-paper-plane"></i>
                                    Send Message
                                </button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        `);
    }

    async loadPageContent(pageName, content) {
        this.showLoading();
        
        // Hide current page
        const currentPageElement = document.getElementById(`${this.currentPage}-page`);
        if (currentPageElement) {
            currentPageElement.classList.remove('active');
        }

        let pageElement = document.getElementById(`${pageName}-page`);
        
        if (!pageElement) {
            pageElement = document.createElement('section');
            pageElement.className = 'page';
            pageElement.id = `${pageName}-page`;
            document.getElementById('main-content').appendChild(pageElement);
        }
        
        pageElement.innerHTML = content;
        pageElement.classList.add('active');
        pageElement.scrollIntoView({ behavior: 'smooth' });
        
        // Update navigation
        this.updateNavigation(pageName);
        
        // Initialize page-specific JavaScript if needed
        this.initializePage(pageName);
        
        this.currentPage = pageName;
        this.hideLoading();
    }

    initializePage(pageName) {
        // Initialize page-specific functionality
        switch(pageName) {
            case 'collaborations':
                this.initializeCollaborationsForm();
                break;
            case 'donations':
                this.initializeDonations();
                break;
            case 'contact':
                this.initializeContactForm();
                break;
        }
    }

    initializeCollaborationsForm() {
        const form = document.getElementById('partnershipForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your partnership request! We will contact you soon.');
                form.reset();
            });
        }
    }

    initializeDonations() {
        document.querySelectorAll('.donate-button').forEach(button => {
            button.addEventListener('click', (e) => {
                const method = e.target.getAttribute('data-method');
                switch(method) {
                    case 'paypal':
                        alert('Redirecting to PayPal... (This would link to actual PayPal in production)');
                        break;
                    case 'bank':
                        alert('Please email camelliainnovations@outlook.com for bank transfer details.');
                        break;
                    case 'corporate':
                        this.navigateTo('collaborations');
                        break;
                }
            });
        });
    }

    initializeContactForm() {
        const form = document.getElementById('contactForm');
        if (form) {
            form.addEventListener('submit', (e) => {
                e.preventDefault();
                alert('Thank you for your message! We will get back to you within 24-48 hours.');
                form.reset();
            });
        }
    }
}

// Initialize router when DOM is loaded
document.addEventListener('DOMContentLoaded', () => {
    window.router = new Router();
});
