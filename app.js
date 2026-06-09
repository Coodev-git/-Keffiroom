// ============================================
// KEFFIROOMS - STATIC VERSION
// Pure Vanilla JavaScript
// ============================================

// ============================================
// PROPERTY DATA
// ============================================

const properties = [
    {
        id: 1,
        title: "Cozy Studio Near Campus",
        price: 45000,
        location: "Barikin Ladi, Nasarawa",
        beds: 1,
        baths: 1,
        wifi: true,
        verified: true,
        agent: { name: "Chidi Okonkwo", phone: "+2348012345678" },
        rating: 4.8,
    },
    {
        id: 2,
        title: "Modern 2-Bedroom Apartment",
        price: 75000,
        location: "Keffi Town Center",
        beds: 2,
        baths: 1,
        wifi: true,
        verified: true,
        agent: { name: "Amina Hassan", phone: "+2348087654321" },
        rating: 4.9,
    },
    {
        id: 3,
        title: "Spacious 3-Bedroom House",
        price: 120000,
        location: "Barikin Ladi",
        beds: 3,
        baths: 2,
        wifi: true,
        verified: true,
        agent: { name: "Tunde Adeyemi", phone: "+2349012345678" },
        rating: 4.7,
    },
    {
        id: 4,
        title: "Budget-Friendly Single Room",
        price: 35000,
        location: "Nasarawa GRA",
        beds: 1,
        baths: 1,
        wifi: false,
        verified: true,
        agent: { name: "Grace Eze", phone: "+2349087654321" },
        rating: 4.6,
    },
];

// ============================================
// STATE MANAGEMENT
// ============================================

let currentPage = 'landing';
let favorites = new Set();
let isDarkMode = localStorage.getItem('theme') === 'dark';

// ============================================
// INITIALIZATION
// ============================================

document.addEventListener('DOMContentLoaded', () => {
    initializeTheme();
    renderListings();
    setupEventListeners();
});

// ============================================
// THEME MANAGEMENT
// ============================================

function initializeTheme() {
    const themeToggle = document.getElementById('theme-toggle');
    const themeIcon = document.getElementById('theme-icon');
    
    if (isDarkMode) {
        document.body.classList.add('dark-mode');
        themeIcon.textContent = 'light_mode';
    } else {
        document.body.classList.remove('dark-mode');
        themeIcon.textContent = 'dark_mode';
    }
    
    themeToggle.addEventListener('click', toggleTheme);
}

function toggleTheme() {
    isDarkMode = !isDarkMode;
    const body = document.body;
    const themeIcon = document.getElementById('theme-icon');
    
    if (isDarkMode) {
        body.classList.add('dark-mode');
        themeIcon.textContent = 'light_mode';
        localStorage.setItem('theme', 'dark');
    } else {
        body.classList.remove('dark-mode');
        themeIcon.textContent = 'dark_mode';
        localStorage.setItem('theme', 'light');
    }
}

// ============================================
// PAGE NAVIGATION
// ============================================

function navigateTo(page) {
    // Hide all pages
    document.querySelectorAll('.page').forEach(p => {
        p.classList.remove('active');
    });
    
    // Show selected page
    const pageElement = document.getElementById(`${page}-page`);
    if (pageElement) {
        pageElement.classList.add('active');
        currentPage = page;
        
        // Scroll to top
        window.scrollTo(0, 0);
    }
}

// ============================================
// LISTINGS RENDERING
// ============================================

function renderListings() {
    const grid = document.getElementById('listings-grid');
    
    if (!grid) return;
    
    grid.innerHTML = properties.map((property, index) => `
        <div class="listing-card" style="animation-delay: ${index * 100}ms">
            <div class="listing-image">
                <span class="material-symbols-outlined">apartment</span>
                
                ${property.verified ? `
                    <div class="listing-badge">
                        <span class="material-symbols-outlined" style="font-size: 16px;">verified</span>
                        <span>Verified</span>
                    </div>
                ` : ''}
                
                <div class="listing-price">
                    <span class="material-symbols-outlined" style="font-size: 16px;">currency_pound</span>
                    ${property.price.toLocaleString()}
                    <p style="font-size: 0.75rem; font-weight: normal; opacity: 0.8; margin-top: 2px;">/month</p>
                </div>
                
                <button class="listing-favorite ${favorites.has(property.id) ? 'active' : ''}" 
                        onclick="toggleFavorite(${property.id})">
                    <span class="material-symbols-outlined">favorite</span>
                </button>
            </div>
            
            <div class="listing-content">
                <h4 class="listing-title">${property.title}</h4>
                
                <div class="listing-location">
                    <span class="material-symbols-outlined" style="font-size: 16px;">location_on</span>
                    ${property.location}
                </div>
                
                <div class="listing-amenities">
                    <div class="listing-amenity">
                        <span class="material-symbols-outlined" style="font-size: 16px;">bed</span>
                        ${property.beds} Bed${property.beds > 1 ? 's' : ''}
                    </div>
                    <div class="listing-amenity">
                        <span class="material-symbols-outlined" style="font-size: 16px;">bathroom</span>
                        ${property.baths} Bath
                    </div>
                    ${property.wifi ? `
                        <div class="listing-amenity">
                            <span class="material-symbols-outlined" style="font-size: 16px;">wifi</span>
                            WiFi
                        </div>
                    ` : ''}
                </div>
                
                <div class="listing-agent">
                    <div class="agent-info">
                        <p>Agent</p>
                        <h5>${property.agent.name}</h5>
                    </div>
                    <div class="agent-rating">
                        <p>Rating</p>
                        <div class="rating">${property.rating}</div>
                    </div>
                </div>
                
                <div class="listing-actions">
                    <button class="btn btn-primary" onclick="contactAgent(${property.id})">
                        <span class="material-symbols-outlined" style="font-size: 18px;">chat</span>
                        Contact
                    </button>
                    <button class="btn btn-secondary" style="flex: 0;">
                        <span class="material-symbols-outlined" style="font-size: 18px;">share</span>
                    </button>
                </div>
            </div>
        </div>
    `).join('');
}

// ============================================
// FAVORITES MANAGEMENT
// ============================================

function toggleFavorite(id) {
    if (favorites.has(id)) {
        favorites.delete(id);
    } else {
        favorites.add(id);
    }
    renderListings();
}

// ============================================
// WHATSAPP CONTACT INTEGRATION
// ============================================

function contactAgent(propertyId) {
    const property = properties.find(p => p.id === propertyId);
    
    if (!property) return;
    
    // Create message with listing details
    const message = `Hi KeffiRooms, I'm interested in the "${property.title}" listing at ${property.location} for ${property.price.toLocaleString()} per month. Agent: ${property.agent.name}. Please connect us. My phone: [Your phone number]`;
    
    // WhatsApp URL with pre-filled message
    const whatsappUrl = `https://wa.me/2347066068160?text=${encodeURIComponent(message)}`;
    
    // Open WhatsApp
    window.open(whatsappUrl, '_blank');
    
    // Log agent info separately (for coordinator)
    console.log('Agent Details:', {
        name: property.agent.name,
        phone: property.agent.phone,
        listing: property.title,
        timestamp: new Date().toISOString()
    });
}

// ============================================
// AUTH HANDLING
// ============================================

function handleAuthSubmit(event, role) {
    event.preventDefault();
    
    // Simulate auth (in real app, this would call an API)
    console.log(`${role} authentication attempted`);
    
    // Navigate to appropriate dashboard
    if (role === 'seeker') {
        navigateTo('seeker');
    } else if (role === 'agent') {
        navigateTo('agent-dashboard');
    } else if (role === 'admin') {
        navigateTo('admin-panel');
    }
}

// ============================================
// TAB SWITCHING
// ============================================

function switchTab(tabName) {
    // Update active tab button
    document.querySelectorAll('.tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    event.target.classList.add('active');
    
    // In a real app, this would filter the verification list
    console.log('Switched to tab:', tabName);
}

// ============================================
// EVENT LISTENERS
// ============================================

function setupEventListeners() {
    // Search functionality
    const searchInput = document.getElementById('search-input');
    if (searchInput) {
        searchInput.addEventListener('input', (e) => {
            console.log('Search query:', e.target.value);
            // In a real app, this would filter listings
        });
    }
    
    // Filter chips
    document.querySelectorAll('.chip').forEach(chip => {
        chip.addEventListener('click', (e) => {
            document.querySelectorAll('.chip').forEach(c => c.style.opacity = '0.6');
            e.target.style.opacity = '1';
        });
    });
}

// ============================================
// UTILITY FUNCTIONS
// ============================================

function formatCurrency(amount) {
    return new Intl.NumberFormat('en-NG', {
        style: 'currency',
        currency: 'NGN'
    }).format(amount);
}

function formatDate(date) {
    return new Intl.DateTimeFormat('en-NG', {
        year: 'numeric',
        month: 'long',
        day: 'numeric'
    }).format(date);
}

// ============================================
// CONSOLE LOGGING FOR DEBUGGING
// ============================================

console.log('KeffiRooms Static Version Loaded');
console.log('Dark Mode:', isDarkMode);
console.log('Properties Loaded:', properties.length);

// ============================================
// AGENT REGISTRATION
// ============================================

function handleAgentRegistration(event) {
    event.preventDefault();
    
    // Get form data from inputs
    const form = event.target;
    const inputs = form.querySelectorAll('input, select');
    
    const agentData = {
        fullName: inputs[0].value,
        email: inputs[1].value,
        phone: inputs[2].value,
        businessName: inputs[3].value,
        location: inputs[4].value,
        experience: inputs[5].value,
        properties: inputs[6].value,
        idDocument: inputs[7].value,
        timestamp: new Date().toISOString()
    };
    
    // Create WhatsApp message with agent details
    const message = `New Agent Registration for Verification:\n\nName: ${agentData.fullName}\nEmail: ${agentData.email}\nPhone: ${agentData.phone}\nBusiness: ${agentData.businessName}\nLocation: ${agentData.location}\nExperience: ${agentData.experience} years\nProperties: ${agentData.properties}\nID Document: ${agentData.idDocument}\nSubmitted: ${agentData.timestamp}`;
    
    // Send to WhatsApp
    const whatsappUrl = `https://wa.me/2347066068160?text=${encodeURIComponent(message)}`;
    window.open(whatsappUrl, '_blank');
    
    // Log agent data for coordinator
    console.log('Agent Registration Data:', agentData);
    
    // Store in localStorage for tracking
    const registrations = JSON.parse(localStorage.getItem('agentRegistrations') || '[]');
    registrations.push(agentData);
    localStorage.setItem('agentRegistrations', JSON.stringify(registrations));
    
    // Navigate to success page
    navigateTo('agent-success');
}

// ============================================
// AUTH TAB SWITCHING
// ============================================

function switchAuthTab(tabName) {
    // Hide all forms
    document.querySelectorAll('.auth-form').forEach(form => {
        form.style.display = 'none';
    });
    
    // Remove active class from all tabs
    document.querySelectorAll('.auth-tab-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    
    // Show selected form
    const selectedForm = document.getElementById(tabName);
    if (selectedForm) {
        selectedForm.style.display = 'flex';
    }
    
    // Add active class to clicked tab
    event.target.classList.add('active');
}
