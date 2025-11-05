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
