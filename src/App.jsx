import { useState, useEffect } from 'react'
import './App.css'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  // Scroll animation effect
  useEffect(() => {
    // Immediate fallback - show all content after 3 seconds regardless
    const fallbackTimer = setTimeout(() => {
      const hiddenElements = document.querySelectorAll('.animate-on-scroll:not(.animated)')
      hiddenElements.forEach(el => el.classList.add('animated'))
    }, 3000)

    const setupTimer = setTimeout(() => {
      const observerOptions = {
        threshold: 0.1,
        rootMargin: '0px 0px -50px 0px'
      }

      const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animated')
          }
        })
      }, observerOptions)

      // Observe all elements with animate-on-scroll class
      const animateElements = document.querySelectorAll('.animate-on-scroll')
      animateElements.forEach(el => {
        observer.observe(el)
        // Also immediately show elements that are already in view
        const rect = el.getBoundingClientRect()
        if (rect.top < window.innerHeight && rect.bottom > 0) {
          el.classList.add('animated')
        }
      })

      return () => {
        animateElements.forEach(el => observer.unobserve(el))
      }
    }, 100)

    return () => {
      clearTimeout(fallbackTimer)
      clearTimeout(setupTimer)
    }
  }, [])

  // Smooth scrolling for navigation links
  const handleNavClick = (e, targetId) => {
    e.preventDefault()
    const element = document.getElementById(targetId)
    if (element) {
      element.scrollIntoView({
        behavior: 'smooth',
        block: 'start'
      })
    }
    setIsMenuOpen(false)
  }

  return (
    <>
      {/* Header */}
      <header className="header">
        <div className="container">
          <div className="logo">
            <h1 className="glow-text">Blue Moon Gym</h1>
            <span className="tagline">Nothing Will Work Unless You Do</span>
          </div>
          <nav className={`nav ${isMenuOpen ? 'nav-open' : ''}`}>
            <a href="#home" onClick={(e) => handleNavClick(e, 'home')}>Home</a>
            <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
            <a href="#schedule" onClick={(e) => handleNavClick(e, 'schedule')}>Schedule</a>
            <a href="#membership" onClick={(e) => handleNavClick(e, 'membership')}>Membership</a>
            <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
          </nav>
          <button 
            className="menu-toggle"
            onClick={() => setIsMenuOpen(!isMenuOpen)}
          >
            ☰
          </button>
        </div>
      </header>

      {/* Hero Section */}
      <section id="home" className="hero">
        <div className="hero-content">
          <h1>Transform Your Life at Blue Moon Gym</h1>
          <p>Join Kalewadi's premier fitness center offering personal training, CrossFit, yoga, Zumba, and more!</p>
          <div className="hero-buttons">
            <button className="cta-primary pulse-on-hover">Join Now</button>
            <button className="cta-secondary">Book Free Trial</button>
          </div>
        </div>
        <div className="hero-stats">
          <div className="stat float-animation">
            <h3>5+</h3>
            <p>Years of Excellence</p>
          </div>
          <div className="stat float-animation">
            <h3>500+</h3>
            <p>Happy Members</p>
          </div>
          <div className="stat float-animation">
            <h3>10+</h3>
            <p>Expert Trainers</p>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="services">
        <div className="container">
          <h2 className="animate-on-scroll">Our Services</h2>
          <div className="services-grid">
            <div className="service-card animate-on-scroll">
              <div className="service-icon">💪</div>
              <h3>Personal Training</h3>
              <p>One-on-one coaching tailored to your fitness goals</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">🔥</div>
              <h3>CrossFit Workouts</h3>
              <p>High-intensity functional movements for all levels</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">🧘</div>
              <h3>Yoga Classes</h3>
              <p>Morning yoga sessions for flexibility and mindfulness</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">💃</div>
              <h3>Zumba</h3>
              <p>Fun dance fitness classes that burn calories</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">🍎</div>
              <h3>Diet Consulting</h3>
              <p>Personalized nutrition plans for optimal results</p>
            </div>
            <div className="service-card animate-on-scroll">
              <div className="service-icon">♨️</div>
              <h3>Steam Bath</h3>
              <p>Relax and recover in our premium steam facilities</p>
            </div>
          </div>
        </div>
      </section>

      {/* Schedule Section */}
      <section id="schedule" className="schedule">
        <div className="container">
          <h2 className="animate-on-scroll">Class Schedule</h2>
          <div className="schedule-table animate-on-scroll">
            <div className="schedule-header">
              <div>Time</div>
              <div>Monday</div>
              <div>Tuesday</div>
              <div>Wednesday</div>
              <div>Thursday</div>
              <div>Friday</div>
              <div>Saturday</div>
            </div>
            <div className="schedule-row animate-on-scroll">
              <div className="time">6:00 AM</div>
              <div>CrossFit</div>
              <div>Yoga</div>
              <div>CrossFit</div>
              <div>Yoga</div>
              <div>CrossFit</div>
              <div>Yoga</div>
            </div>
            <div className="schedule-row animate-on-scroll">
              <div className="time">9:00 AM</div>
              <div>Yoga</div>
              <div>Zumba</div>
              <div>Yoga</div>
              <div>Zumba</div>
              <div>Yoga</div>
              <div>Open Gym</div>
            </div>
            <div className="schedule-row animate-on-scroll">
              <div className="time">6:00 PM</div>
              <div>Zumba</div>
              <div>CrossFit</div>
              <div>Zumba</div>
              <div>CrossFit</div>
              <div>Zumba</div>
              <div>Open Gym</div>
            </div>
          </div>
          <button className="cta-primary pulse-on-hover">Book a Class</button>
        </div>
      </section>

      {/* Membership Section */}
      <section id="membership" className="membership">
        <div className="container">
          <h2 className="animate-on-scroll">Membership Plans</h2>
          <div className="plans-grid">
            <div className="plan-card animate-on-scroll">
              <h3>Daily Pass</h3>
              <div className="price">₹150<span>/day</span></div>
              <ul>
                <li>Access to all equipment</li>
                <li>Group classes included</li>
                <li>Steam bath access</li>
              </ul>
              <button className="cta-secondary">Choose Plan</button>
            </div>
            <div className="plan-card featured animate-on-scroll">
              <h3>Monthly</h3>
              <div className="price">₹2,500<span>/month</span></div>
              <ul>
                <li>Unlimited gym access</li>
                <li>All group classes</li>
                <li>Steam bath access</li>
                <li>1 personal training session</li>
                <li>Diet consultation</li>
              </ul>
              <button className="cta-primary">Most Popular</button>
            </div>
            <div className="plan-card animate-on-scroll">
              <h3>Yearly</h3>
              <div className="price">₹25,000<span>/year</span></div>
              <ul>
                <li>Everything in monthly</li>
                <li>4 personal training sessions</li>
                <li>Priority class booking</li>
                <li>Guest passes (2/month)</li>
                <li>Nutrition meal plan</li>
              </ul>
              <button className="cta-secondary">Best Value</button>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="testimonials">
        <div className="container">
          <h2 className="animate-on-scroll">What Our Members Say</h2>
          <div className="testimonials-grid">
            <div className="testimonial animate-on-scroll">
              <p>"Blue Moon Gym transformed my fitness journey. The trainers are amazing and the community is so supportive!"</p>
              <div className="author">- Priya S.</div>
            </div>
            <div className="testimonial animate-on-scroll">
              <p>"Best gym in Kalewadi! The variety of classes keeps me motivated, and the steam bath is perfect after workouts."</p>
              <div className="author">- Rajesh M.</div>
            </div>
            <div className="testimonial animate-on-scroll">
              <p>"I've been a member for 2 years. The personal trainers really care about your progress and results."</p>
              <div className="author">- Sneha K.</div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="contact">
        <div className="container">
          <div className="contact-content">
            <div className="contact-info animate-on-scroll">
              <h2>Visit Us Today</h2>
              <div className="contact-item">
                <strong>📍 Address:</strong>
                <p>Near D-Mart, Kalewadi<br />Pimpri-Chinchwad, Pune</p>
              </div>
              <div className="contact-item">
                <strong>📞 Phone:</strong>
                <p>+91 88620 38061</p>
              </div>
              <div className="contact-item">
                <strong>🕒 Hours:</strong>
                <p>Mon-Sat: 6:00 AM - 10:00 PM<br />Sunday: 7:00 AM - 8:00 PM</p>
              </div>
              <div className="social-links">
                <a href="#" className="social-link">Instagram</a>
                <a href="#" className="social-link">WhatsApp</a>
              </div>
            </div>
            <div className="contact-form animate-on-scroll">
              <h3>Get Started Today</h3>
              <form>
                <input type="text" placeholder="Your Name" required />
                <input type="email" placeholder="Your Email" required />
                <input type="tel" placeholder="Your Phone" required />
                <select>
                  <option>Select Service Interest</option>
                  <option>Personal Training</option>
                  <option>Group Classes</option>
                  <option>Membership Info</option>
                  <option>Free Trial</option>
                </select>
                <textarea placeholder="Message (Optional)"></textarea>
                <button type="submit" className="cta-primary pulse-on-hover">Send Message</button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="footer">
        <div className="container">
          <div className="footer-content">
            <div className="footer-section animate-on-scroll">
              <h3>Blue Moon Gym</h3>
              <p>Your journey to fitness starts here. Nothing will work unless you do!</p>
            </div>
            <div className="footer-section animate-on-scroll">
              <h4>Quick Links</h4>
              <a href="#services" onClick={(e) => handleNavClick(e, 'services')}>Services</a>
              <a href="#schedule" onClick={(e) => handleNavClick(e, 'schedule')}>Schedule</a>
              <a href="#membership" onClick={(e) => handleNavClick(e, 'membership')}>Membership</a>
              <a href="#contact" onClick={(e) => handleNavClick(e, 'contact')}>Contact</a>
            </div>
            <div className="footer-section animate-on-scroll">
              <h4>Contact Info</h4>
              <p>📍 Near D-Mart, Kalewadi, Pune</p>
              <p>📞 +91 88620 38061</p>
            </div>
          </div>
          <div className="footer-bottom animate-on-scroll">
            <p>&copy; 2024 Blue Moon Gym. All rights reserved.</p>
          </div>
        </div>
      </footer>
    </>
  )
}

export default App
