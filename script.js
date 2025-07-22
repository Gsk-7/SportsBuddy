// Global Variables
let currentUser = null;
let notifications = [];
let chatMessages = [];
let events = [];
let buddies = [];
let posts = [];

// Comprehensive Sports Data
const sportsData = [
    'Football', 'Basketball', 'Tennis', 'Cricket', 'Baseball', 'Soccer', 'Volleyball', 'Badminton',
    'Table Tennis', 'Swimming', 'Running', 'Cycling', 'Golf', 'Boxing', 'Wrestling', 'Martial Arts',
    'Yoga', 'Pilates', 'Crossfit', 'Weightlifting', 'Powerlifting', 'Bodybuilding', 'Gymnastics',
    'Rock Climbing', 'Hiking', 'Trekking', 'Skiing', 'Snowboarding', 'Surfing', 'Skateboarding',
    'Hockey', 'Rugby', 'American Football', 'Lacrosse', 'Squash', 'Racquetball', 'Handball',
    'Water Polo', 'Diving', 'Sailing', 'Rowing', 'Kayaking', 'Canoeing', 'Fishing', 'Archery',
    'Shooting', 'Fencing', 'Equestrian', 'Track and Field', 'Marathon', 'Triathlon', 'Decathlon',
    'Parkour', 'Calisthenics', 'Zumba', 'Dance', 'Aerobics', 'Spinning', 'Kickboxing', 'Judo',
    'Karate', 'Taekwondo', 'Muay Thai', 'Brazilian Jiu-Jitsu', 'MMA', 'Esports', 'Chess'
];

// Comprehensive Location Data (India + International)
const locationData = [
    // Major Indian Cities
    'Mumbai, Maharashtra', 'Delhi, Delhi', 'Bangalore, Karnataka', 'Hyderabad, Telangana',
    'Chennai, Tamil Nadu', 'Kolkata, West Bengal', 'Pune, Maharashtra', 'Ahmedabad, Gujarat',
    'Jaipur, Rajasthan', 'Surat, Gujarat', 'Lucknow, Uttar Pradesh', 'Kanpur, Uttar Pradesh',
    'Nagpur, Maharashtra', 'Indore, Madhya Pradesh', 'Thane, Maharashtra', 'Bhopal, Madhya Pradesh',
    'Visakhapatnam, Andhra Pradesh', 'Pimpri-Chinchwad, Maharashtra', 'Patna, Bihar', 'Vadodara, Gujarat',
    'Ghaziabad, Uttar Pradesh', 'Ludhiana, Punjab', 'Agra, Uttar Pradesh', 'Nashik, Maharashtra',
    'Faridabad, Haryana', 'Meerut, Uttar Pradesh', 'Rajkot, Gujarat', 'Kalyan-Dombivali, Maharashtra',
    'Vasai-Virar, Maharashtra', 'Varanasi, Uttar Pradesh', 'Srinagar, Jammu and Kashmir',
    'Aurangabad, Maharashtra', 'Dhanbad, Jharkhand', 'Amritsar, Punjab', 'Navi Mumbai, Maharashtra',
    'Allahabad, Uttar Pradesh', 'Ranchi, Jharkhand', 'Howrah, West Bengal', 'Coimbatore, Tamil Nadu',
    'Jabalpur, Madhya Pradesh', 'Gwalior, Madhya Pradesh', 'Vijayawada, Andhra Pradesh',
    'Jodhpur, Rajasthan', 'Madurai, Tamil Nadu', 'Raipur, Chhattisgarh', 'Kota, Rajasthan',
    'Chandigarh, Chandigarh', 'Guwahati, Assam', 'Solapur, Maharashtra', 'Hubli-Dharwad, Karnataka',
    'Tiruchirappalli, Tamil Nadu', 'Bareilly, Uttar Pradesh', 'Mysore, Karnataka', 'Tiruppur, Tamil Nadu',
    'Gurgaon, Haryana', 'Aligarh, Uttar Pradesh', 'Jalandhar, Punjab', 'Bhubaneswar, Odisha',
    'Salem, Tamil Nadu', 'Warangal, Telangana', 'Guntur, Andhra Pradesh', 'Bhiwandi, Maharashtra',
    'Saharanpur, Uttar Pradesh', 'Gorakhpur, Uttar Pradesh', 'Bikaner, Rajasthan', 'Amravati, Maharashtra',
    'Noida, Uttar Pradesh', 'Jamshedpur, Jharkhand', 'Bhilai, Chhattisgarh', 'Cuttack, Odisha',
    'Firozabad, Uttar Pradesh', 'Kochi, Kerala', 'Nellore, Andhra Pradesh', 'Bhavnagar, Gujarat',
    'Dehradun, Uttarakhand', 'Durgapur, West Bengal', 'Asansol, West Bengal', 'Rourkela, Odisha',
    'Nanded, Maharashtra', 'Kolhapur, Maharashtra', 'Ajmer, Rajasthan', 'Akola, Maharashtra',
    'Gulbarga, Karnataka', 'Jamnagar, Gujarat', 'Ujjain, Madhya Pradesh', 'Loni, Uttar Pradesh',
    'Siliguri, West Bengal', 'Jhansi, Uttar Pradesh', 'Ulhasnagar, Maharashtra', 'Jammu, Jammu and Kashmir',
    'Sangli-Miraj & Kupwad, Maharashtra', 'Mangalore, Karnataka', 'Erode, Tamil Nadu', 'Belgaum, Karnataka',
    'Ambattur, Tamil Nadu', 'Tirunelveli, Tamil Nadu', 'Malegaon, Maharashtra', 'Gaya, Bihar',
    'Jalgaon, Maharashtra', 'Udaipur, Rajasthan', 'Maheshtala, West Bengal',
    
    // International Cities
    'New York, USA', 'Los Angeles, USA', 'Chicago, USA', 'Houston, USA', 'Phoenix, USA',
    'Philadelphia, USA', 'San Antonio, USA', 'San Diego, USA', 'Dallas, USA', 'San Jose, USA',
    'Austin, USA', 'Jacksonville, USA', 'Fort Worth, USA', 'Columbus, USA', 'Charlotte, USA',
    'San Francisco, USA', 'Indianapolis, USA', 'Seattle, USA', 'Denver, USA', 'Washington, USA',
    'Boston, USA', 'El Paso, USA', 'Nashville, USA', 'Detroit, USA', 'Oklahoma City, USA',
    'Portland, USA', 'Las Vegas, USA', 'Memphis, USA', 'Louisville, USA', 'Baltimore, USA',
    
    'London, UK', 'Birmingham, UK', 'Manchester, UK', 'Glasgow, UK', 'Liverpool, UK',
    'Leeds, UK', 'Sheffield, UK', 'Edinburgh, UK', 'Bristol, UK', 'Cardiff, UK',
    'Leicester, UK', 'Coventry, UK', 'Bradford, UK', 'Belfast, UK', 'Nottingham, UK',
    
    'Toronto, Canada', 'Montreal, Canada', 'Vancouver, Canada', 'Calgary, Canada', 'Edmonton, Canada',
    'Ottawa, Canada', 'Winnipeg, Canada', 'Quebec City, Canada', 'Hamilton, Canada', 'Kitchener, Canada',
    
    'Sydney, Australia', 'Melbourne, Australia', 'Brisbane, Australia', 'Perth, Australia', 'Adelaide, Australia',
    'Gold Coast, Australia', 'Newcastle, Australia', 'Canberra, Australia', 'Sunshine Coast, Australia', 'Wollongong, Australia',
    
    'Berlin, Germany', 'Hamburg, Germany', 'Munich, Germany', 'Cologne, Germany', 'Frankfurt, Germany',
    'Stuttgart, Germany', 'Düsseldorf, Germany', 'Dortmund, Germany', 'Essen, Germany', 'Leipzig, Germany',
    
    'Paris, France', 'Marseille, France', 'Lyon, France', 'Toulouse, France', 'Nice, France',
    'Nantes, France', 'Strasbourg, France', 'Montpellier, France', 'Bordeaux, France', 'Lille, France',
    
    'Tokyo, Japan', 'Yokohama, Japan', 'Osaka, Japan', 'Nagoya, Japan', 'Sapporo, Japan',
    'Fukuoka, Japan', 'Kobe, Japan', 'Kawasaki, Japan', 'Kyoto, Japan', 'Saitama, Japan',
    
    'Beijing, China', 'Shanghai, China', 'Guangzhou, China', 'Shenzhen, China', 'Tianjin, China',
    'Wuhan, China', 'Dongguan, China', 'Chengdu, China', 'Nanjing, China', 'Foshan, China',
    
    'Singapore, Singapore', 'Dubai, UAE', 'Abu Dhabi, UAE', 'Doha, Qatar', 'Kuwait City, Kuwait',
    'Riyadh, Saudi Arabia', 'Jeddah, Saudi Arabia', 'Muscat, Oman', 'Manama, Bahrain',
    
    'Bangkok, Thailand', 'Manila, Philippines', 'Jakarta, Indonesia', 'Kuala Lumpur, Malaysia',
    'Ho Chi Minh City, Vietnam', 'Hanoi, Vietnam', 'Seoul, South Korea', 'Busan, South Korea'
];

// Sample Events Data
const eventsData = [
    {
        id: 1,
        name: 'Morning Marathon Training',
        sport: 'Running',
        date: new Date(Date.now() + 86400000), // Tomorrow
        time: '06:00 AM',
        location: 'Central Park, Mumbai',
        participants: 15,
        maxParticipants: 25,
        image: 'https://images.pexels.com/photos/2402777/pexels-photo-2402777.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
        description: 'Join us for an intensive marathon training session. Perfect for beginners and experienced runners alike.',
        organizer: 'Running Club Mumbai',
        difficulty: 'Intermediate',
        category: 'today'
    },
    {
        id: 2,
        name: 'Tennis Tournament',
        sport: 'Tennis',
        date: new Date(Date.now() + 172800000), // Day after tomorrow
        time: '09:00 AM',
        location: 'Sports Complex, Delhi',
        participants: 8,
        maxParticipants: 16,
        image: 'https://images.pexels.com/photos/209977/pexels-photo-209977.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
        description: 'Annual tennis tournament for all skill levels. Prizes for winners in each category.',
        organizer: 'Delhi Tennis Association',
        difficulty: 'All Levels',
        category: 'week'
    },
    {
        id: 3,
        name: 'Cycling Adventure',
        sport: 'Cycling',
        date: new Date(Date.now() + 432000000), // 5 days from now
        time: '07:00 AM',
        location: 'Nandi Hills, Bangalore',
        participants: 12,
        maxParticipants: 20,
        image: 'https://images.pexels.com/photos/100582/pexels-photo-100582.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
        description: 'Scenic cycling route through beautiful hills. Breakfast included at the summit.',
        organizer: 'Bangalore Cycling Club',
        difficulty: 'Advanced',
        category: 'weekend'
    },
    {
        id: 4,
        name: 'Basketball League',
        sport: 'Basketball',
        date: new Date(Date.now() + 604800000), // 1 week from now
        time: '05:00 PM',
        location: 'Indoor Stadium, Chennai',
        participants: 20,
        maxParticipants: 30,
        image: 'https://images.pexels.com/photos/1752757/pexels-photo-1752757.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
        description: 'Weekly basketball league matches. Teams will be formed on the spot.',
        organizer: 'Chennai Basketball Association',
        difficulty: 'Intermediate',
        category: 'week'
    },
    {
        id: 5,
        name: 'Yoga Retreat',
        sport: 'Yoga',
        date: new Date(Date.now() + 1209600000), // 2 weeks from now
        time: '06:30 AM',
        location: 'Beach Resort, Goa',
        participants: 25,
        maxParticipants: 40,
        image: 'https://images.pexels.com/photos/317157/pexels-photo-317157.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
        description: 'Weekend yoga retreat by the beach. Includes meditation sessions and healthy meals.',
        organizer: 'Goa Wellness Center',
        difficulty: 'Beginner',
        category: 'month'
    },
    {
        id: 6,
        name: 'Swimming Championship',
        sport: 'Swimming',
        date: new Date(Date.now() + 1814400000), // 3 weeks from now
        time: '08:00 AM',
        location: 'Aquatic Center, Hyderabad',
        participants: 18,
        maxParticipants: 25,
        image: 'https://images.pexels.com/photos/863988/pexels-photo-863988.jpeg?auto=compress&cs=tinysrgb&w=400&h=200&fit=crop',
        description: 'Annual swimming championship with multiple categories and age groups.',
        organizer: 'Hyderabad Swimming Association',
        difficulty: 'Advanced',
        category: 'month'
    }
];

// Sample Buddies Data
const buddiesData = [
    {
        id: 1,
        name: 'Alex Runner',
        location: 'Mumbai, Maharashtra',
        sports: ['Running', 'Cycling', 'Swimming'],
        skillLevel: 'Advanced',
        avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        activities: 156,
        rating: 4.8,
        bio: 'Marathon enthusiast with 5+ years experience'
    },
    {
        id: 2,
        name: 'Sarah Cyclist',
        location: 'Delhi, Delhi',
        sports: ['Cycling', 'Yoga', 'Tennis'],
        skillLevel: 'Intermediate',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        activities: 89,
        rating: 4.6,
        bio: 'Love exploring new cycling routes and yoga sessions'
    },
    {
        id: 3,
        name: 'Mike Swimmer',
        location: 'Bangalore, Karnataka',
        sports: ['Swimming', 'Water Polo', 'Diving'],
        skillLevel: 'Professional',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        activities: 234,
        rating: 4.9,
        bio: 'Former competitive swimmer, now coaching others'
    },
    {
        id: 4,
        name: 'Emma Tennis',
        location: 'Chennai, Tamil Nadu',
        sports: ['Tennis', 'Badminton', 'Squash'],
        skillLevel: 'Advanced',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        activities: 167,
        rating: 4.7,
        bio: 'Tennis coach and tournament player'
    },
    {
        id: 5,
        name: 'David Basketball',
        location: 'Pune, Maharashtra',
        sports: ['Basketball', 'Volleyball', 'Football'],
        skillLevel: 'Intermediate',
        avatar: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        activities: 98,
        rating: 4.5,
        bio: 'Team sports enthusiast, love playing with groups'
    },
    {
        id: 6,
        name: 'Lisa Yoga',
        location: 'Goa, Goa',
        sports: ['Yoga', 'Pilates', 'Meditation'],
        skillLevel: 'Advanced',
        avatar: 'https://images.pexels.com/photos/1391498/pexels-photo-1391498.jpeg?auto=compress&cs=tinysrgb&w=60&h=60&fit=crop',
        activities: 145,
        rating: 4.8,
        bio: 'Certified yoga instructor and wellness coach'
    }
];

// Sample Posts Data
const postsData = [
    {
        id: 1,
        author: 'Alex Runner',
        avatar: 'https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=45&h=45&fit=crop',
        content: 'Just completed my first 21K run! The feeling is incredible. Thanks to everyone who supported me during training. Next goal: Full Marathon! 🏃‍♂️💪',
        timestamp: '2 hours ago',
        likes: 24,
        comments: 8,
        shares: 3
    },
    {
        id: 2,
        author: 'Sarah Cyclist',
        avatar: 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=45&h=45&fit=crop',
        content: 'Beautiful morning ride through the hills! The sunrise was absolutely stunning. Who wants to join me next weekend for another adventure? 🚴‍♀️🌅',
        timestamp: '4 hours ago',
        likes: 18,
        comments: 12,
        shares: 5
    },
    {
        id: 3,
        author: 'Mike Swimmer',
        avatar: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=45&h=45&fit=crop',
        content: 'Swimming technique tip: Focus on your breathing rhythm. Exhale underwater and inhale quickly when you turn your head. This will improve your endurance significantly! 🏊‍♂️',
        timestamp: '6 hours ago',
        likes: 31,
        comments: 15,
        shares: 8
    },
    {
        id: 4,
        author: 'Emma Tennis',
        avatar: 'https://images.pexels.com/photos/1130626/pexels-photo-1130626.jpeg?auto=compress&cs=tinysrgb&w=45&h=45&fit=crop',
        content: 'Won my first tournament match today! All those hours of practice are finally paying off. Special thanks to my training partner for pushing me to be better every day! 🎾🏆',
        timestamp: '8 hours ago',
        likes: 42,
        comments: 20,
        shares: 6
    }
];

// Initialize Application
document.addEventListener('DOMContentLoaded', function() {
    initializeApp();
});

function initializeApp() {
    // Show loading screen
    showLoadingScreen();
    
    // Initialize data
    events = [...eventsData];
    buddies = [...buddiesData];
    posts = [...postsData];
    
    // Populate dropdowns
    populateSportsDropdown();
    populateLocationSuggestions();
    
    // Initialize event listeners
    initializeEventListeners();
    
    // Load initial data
    loadBuddies();
    loadEvents();
    loadPosts();
    
    // Initialize animations
    initializeAnimations();
    
    // Hide loading screen after delay
    setTimeout(() => {
        hideLoadingScreen();
    }, 2000);
}

function showLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.remove('hidden');
}

function hideLoadingScreen() {
    const loadingScreen = document.getElementById('loadingScreen');
    loadingScreen.classList.add('hidden');
}

function populateSportsDropdown() {
    const sportSelect = document.getElementById('sport-select');
    sportsData.forEach(sport => {
        const option = document.createElement('option');
        option.value = sport.toLowerCase();
        option.textContent = sport;
        sportSelect.appendChild(option);
    });
}

function populateLocationSuggestions() {
    const locationSuggestions = document.getElementById('location-suggestions');
    locationData.forEach(location => {
        const option = document.createElement('option');
        option.value = location;
        locationSuggestions.appendChild(option);
    });
}

function initializeEventListeners() {
    // Authentication
    document.getElementById('getStartedBtn').addEventListener('click', showAuthModal);
    document.getElementById('authClose').addEventListener('click', hideAuthModal);
    document.getElementById('showSignup').addEventListener('click', showSignupForm);
    document.getElementById('showLogin').addEventListener('click', showLoginForm);
    document.getElementById('loginFormElement').addEventListener('submit', handleLogin);
    document.getElementById('signupFormElement').addEventListener('submit', handleSignup);
    
    // Password toggles
    document.getElementById('loginPasswordToggle').addEventListener('click', togglePassword);
    document.getElementById('signupPasswordToggle').addEventListener('click', togglePassword);
    
    // Password strength
    document.getElementById('signupPassword').addEventListener('input', checkPasswordStrength);
    
    // Navigation
    document.querySelectorAll('.nav-link').forEach(link => {
        link.addEventListener('click', handleNavigation);
    });
    
    // Profile sidebar
    document.getElementById('userAvatar').addEventListener('click', toggleProfileSidebar);
    document.getElementById('closeProfileSidebar').addEventListener('click', closeProfileSidebar);
    
    // Profile tabs
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.addEventListener('click', switchProfileTab);
    });
    
    // Profile form
    document.getElementById('profileForm').addEventListener('submit', handleProfileUpdate);
    document.getElementById('logoutBtn').addEventListener('click', handleLogout);
    
    // Chat
    document.getElementById('chatTriggerBtn').addEventListener('click', toggleChatSidebar);
    document.getElementById('chatFloatingBtn').addEventListener('click', toggleChatSidebar);
    document.getElementById('closeChatBtn').addEventListener('click', closeChatSidebar);
    document.getElementById('sendChatBtn').addEventListener('click', sendChatMessage);
    document.getElementById('chatInput').addEventListener('keypress', handleChatKeypress);
    
    // Notifications
    document.getElementById('notificationBtn').addEventListener('click', toggleNotificationPanel);
    document.getElementById('markAllReadBtn').addEventListener('click', markAllNotificationsRead);
    document.getElementById('clearAllBtn').addEventListener('click', clearAllNotifications);
    
    // Search and filters
    document.getElementById('searchBuddiesBtn').addEventListener('click', searchBuddies);
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.addEventListener('click', filterEvents);
    });
    
    // Event modal
    document.getElementById('closeEventModal').addEventListener('click', closeEventModal);
    document.getElementById('cancelJoinEvent').addEventListener('click', closeEventModal);
    document.getElementById('eventJoinForm').addEventListener('submit', handleEventJoin);
    
    // Posts
    document.getElementById('createPostBtn').addEventListener('click', createPost);
    document.getElementById('post-input').addEventListener('keypress', handlePostKeypress);
    
    // Tags
    document.querySelectorAll('.tag').forEach(tag => {
        tag.addEventListener('click', handleTagClick);
    });
    
    // Mobile menu
    document.getElementById('hamburger').addEventListener('click', toggleMobileMenu);
    
    // Close modals on outside click
    document.addEventListener('click', handleOutsideClick);
    
    // Scroll effects
    window.addEventListener('scroll', handleScroll);
}

// Authentication Functions
function showAuthModal() {
    const authOverlay = document.getElementById('authOverlay');
    authOverlay.classList.add('show');
}

function hideAuthModal() {
    const authOverlay = document.getElementById('authOverlay');
    authOverlay.classList.remove('show');
}

function showSignupForm() {
    document.getElementById('loginForm').classList.add('hidden');
    document.getElementById('signupForm').classList.remove('hidden');
}

function showLoginForm() {
    document.getElementById('signupForm').classList.add('hidden');
    document.getElementById('loginForm').classList.remove('hidden');
}

function togglePassword(e) {
    const button = e.target.closest('.password-toggle');
    const input = button.parentElement.querySelector('input');
    const icon = button.querySelector('i');
    
    if (input.type === 'password') {
        input.type = 'text';
        icon.classList.remove('fa-eye');
        icon.classList.add('fa-eye-slash');
    } else {
        input.type = 'password';
        icon.classList.remove('fa-eye-slash');
        icon.classList.add('fa-eye');
    }
}

function checkPasswordStrength(e) {
    const password = e.target.value;
    const strengthBar = document.querySelector('.strength-fill');
    const strengthText = document.querySelector('.strength-text');
    
    let strength = 0;
    let text = 'Weak';
    let color = '#dc2626';
    
    if (password.length >= 8) strength += 25;
    if (/[a-z]/.test(password)) strength += 25;
    if (/[A-Z]/.test(password)) strength += 25;
    if (/[0-9]/.test(password)) strength += 25;
    
    if (strength >= 75) {
        text = 'Strong';
        color = '#16a34a';
    } else if (strength >= 50) {
        text = 'Medium';
        color = '#ea580c';
    }
    
    strengthBar.style.width = strength + '%';
    strengthBar.style.background = color;
    strengthText.textContent = text;
}

function handleLogin(e) {
    e.preventDefault();
    const email = document.getElementById('loginEmail').value;
    const password = document.getElementById('loginPassword').value;
    
    // Simulate login
    currentUser = {
        name: 'John Athlete',
        email: email,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    };
    
    hideAuthModal();
    showToast('Success', 'Welcome back! You have successfully logged in.', 'success');
}

function handleSignup(e) {
    e.preventDefault();
    const firstName = document.getElementById('firstName').value;
    const lastName = document.getElementById('lastName').value;
    const email = document.getElementById('signupEmail').value;
    const password = document.getElementById('signupPassword').value;
    const confirmPassword = document.getElementById('confirmPassword').value;
    
    if (password !== confirmPassword) {
        showToast('Error', 'Passwords do not match!', 'error');
        return;
    }
    
    // Simulate signup
    currentUser = {
        name: `${firstName} ${lastName}`,
        email: email,
        avatar: 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=40&h=40&fit=crop'
    };
    
    hideAuthModal();
    showToast('Success', 'Account created successfully! Welcome to Sports Buddy.', 'success');
}

function handleLogout() {
    currentUser = null;
    closeProfileSidebar();
    showToast('Info', 'You have been logged out successfully.', 'info');
}

// Profile Functions
function toggleProfileSidebar() {
    const sidebar = document.getElementById('profileSidebar');
    sidebar.classList.toggle('open');
}

function closeProfileSidebar() {
    const sidebar = document.getElementById('profileSidebar');
    sidebar.classList.remove('open');
}

function switchProfileTab(e) {
    const tabButton = e.target.closest('.profile-tab');
    const tabName = tabButton.dataset.tab;
    
    // Update active tab
    document.querySelectorAll('.profile-tab').forEach(tab => {
        tab.classList.remove('active');
    });
    tabButton.classList.add('active');
    
    // Show corresponding panel
    document.querySelectorAll('.tab-panel').forEach(panel => {
        panel.classList.remove('active');
    });
    document.getElementById(`${tabName}-tab`).classList.add('active');
}

function handleProfileUpdate(e) {
    e.preventDefault();
    showToast('Success', 'Profile updated successfully!', 'success');
}

// Chat Functions
function toggleChatSidebar() {
    const sidebar = document.getElementById('chatSidebar');
    sidebar.classList.toggle('open');
}

function closeChatSidebar() {
    const sidebar = document.getElementById('chatSidebar');
    sidebar.classList.remove('open');
}

function sendChatMessage() {
    const input = document.getElementById('chatInput');
    const message = input.value.trim();
    
    if (message) {
        addChatMessage(message, 'sent');
        input.value = '';
        
        // Simulate bot response
        setTimeout(() => {
            showTypingIndicator();
            setTimeout(() => {
                hideTypingIndicator();
                addBotResponse(message);
            }, 2000);
        }, 500);
    }
}

function handleChatKeypress(e) {
    if (e.key === 'Enter') {
        sendChatMessage();
    }
}

function addChatMessage(message, type) {
    const messagesContainer = document.getElementById('chatMessages');
    const messageDiv = document.createElement('div');
    messageDiv.className = `chat-message ${type}`;
    
    const currentTime = new Date().toLocaleTimeString([], {hour: '2-digit', minute:'2-digit'});
    
    messageDiv.innerHTML = `
        <div class="message-avatar">
            <img src="${type === 'sent' ? currentUser?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=30&h=30&fit=crop' : 'https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=30&h=30&fit=crop'}" alt="Avatar">
        </div>
        <div class="message-content">
            <div class="message-bubble">${message}</div>
            <div class="message-time">${currentTime}</div>
        </div>
    `;
    
    messagesContainer.appendChild(messageDiv);
    messagesContainer.scrollTop = messagesContainer.scrollHeight;
}

function showTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    indicator.classList.add('show');
}

function hideTypingIndicator() {
    const indicator = document.getElementById('typingIndicator');
    indicator.classList.remove('show');
}

function addBotResponse(userMessage) {
    const responses = {
        'hello': 'Hello! How can I help you find the perfect sports partner today?',
        'hi': 'Hi there! What sport are you interested in?',
        'help': 'I can help you find sports buddies, join events, and answer questions about our platform!',
        'tennis': 'Great choice! I found several tennis players in your area. Would you like me to show you some matches?',
        'running': 'Running is awesome! There are many running groups and events happening this week. Interested?',
        'basketball': 'Basketball is so much fun! I can connect you with local basketball enthusiasts.',
        'default': 'That\'s interesting! I can help you find sports partners and events. What specific sport are you looking for?'
    };
    
    const lowerMessage = userMessage.toLowerCase();
    let response = responses.default;
    
    for (const key in responses) {
        if (lowerMessage.includes(key)) {
            response = responses[key];
            break;
        }
    }
    
    addChatMessage(response, 'received');
}

// Notification Functions
function toggleNotificationPanel() {
    const panel = document.getElementById('notificationPanel');
    panel.classList.toggle('show');
}

function markAllNotificationsRead() {
    document.querySelectorAll('.notification-item.unread').forEach(item => {
        item.classList.remove('unread');
        const markBtn = item.querySelector('.mark-read-btn');
        if (markBtn) markBtn.style.display = 'none';
    });
    
    // Update badge
    const badge = document.querySelector('.notification-badge');
    badge.textContent = '0';
    badge.style.display = 'none';
    
    showToast('Success', 'All notifications marked as read', 'success');
}

function clearAllNotifications() {
    const notificationList = document.getElementById('notificationList');
    const emptyState = document.getElementById('notificationEmpty');
    
    notificationList.innerHTML = '';
    emptyState.style.display = 'block';
    
    // Update badge
    const badge = document.querySelector('.notification-badge');
    badge.textContent = '0';
    badge.style.display = 'none';
    
    showToast('Info', 'All notifications cleared', 'info');
}

// Add individual notification handlers
document.addEventListener('click', function(e) {
    if (e.target.closest('.mark-read-btn')) {
        const notificationItem = e.target.closest('.notification-item');
        notificationItem.classList.remove('unread');
        e.target.closest('.mark-read-btn').style.display = 'none';
        
        // Update badge count
        const unreadCount = document.querySelectorAll('.notification-item.unread').length;
        const badge = document.querySelector('.notification-badge');
        badge.textContent = unreadCount;
        if (unreadCount === 0) badge.style.display = 'none';
    }
    
    if (e.target.closest('.delete-notification-btn')) {
        const notificationItem = e.target.closest('.notification-item');
        notificationItem.remove();
        
        // Check if list is empty
        const remainingItems = document.querySelectorAll('.notification-item');
        if (remainingItems.length === 0) {
            document.getElementById('notificationEmpty').style.display = 'block';
        }
        
        // Update badge count
        const unreadCount = document.querySelectorAll('.notification-item.unread').length;
        const badge = document.querySelector('.notification-badge');
        badge.textContent = unreadCount;
        if (unreadCount === 0) badge.style.display = 'none';
    }
});

// Search and Filter Functions
function searchBuddies() {
    const sport = document.getElementById('sport-select').value;
    const location = document.getElementById('location-input').value;
    const skillLevel = document.getElementById('skill-level').value;
    
    let filteredBuddies = [...buddies];
    
    if (sport) {
        filteredBuddies = filteredBuddies.filter(buddy => 
            buddy.sports.some(s => s.toLowerCase().includes(sport))
        );
    }
    
    if (location) {
        filteredBuddies = filteredBuddies.filter(buddy => 
            buddy.location.toLowerCase().includes(location.toLowerCase())
        );
    }
    
    if (skillLevel) {
        filteredBuddies = filteredBuddies.filter(buddy => 
            buddy.skillLevel.toLowerCase() === skillLevel
        );
    }
    
    displayBuddies(filteredBuddies);
    showToast('Info', `Found ${filteredBuddies.length} buddy(ies)`, 'info');
}

function filterEvents(e) {
    const filterBtn = e.target;
    const filter = filterBtn.dataset.filter;
    
    // Update active filter
    document.querySelectorAll('.filter-btn').forEach(btn => {
        btn.classList.remove('active');
    });
    filterBtn.classList.add('active');
    
    let filteredEvents = [...events];
    const now = new Date();
    
    switch (filter) {
        case 'today':
            filteredEvents = events.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate.toDateString() === now.toDateString();
            });
            break;
        case 'week':
            const weekFromNow = new Date(now.getTime() + 7 * 24 * 60 * 60 * 1000);
            filteredEvents = events.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate >= now && eventDate <= weekFromNow;
            });
            break;
        case 'weekend':
            filteredEvents = events.filter(event => {
                const eventDate = new Date(event.date);
                const day = eventDate.getDay();
                return day === 0 || day === 6; // Sunday or Saturday
            });
            break;
        case 'month':
            const monthFromNow = new Date(now.getTime() + 30 * 24 * 60 * 60 * 1000);
            filteredEvents = events.filter(event => {
                const eventDate = new Date(event.date);
                return eventDate >= now && eventDate <= monthFromNow;
            });
            break;
        default:
            filteredEvents = events;
    }
    
    displayEvents(filteredEvents);
}

// Data Loading Functions
function loadBuddies() {
    displayBuddies(buddies);
}

function displayBuddies(buddiesArray) {
    const container = document.getElementById('buddies-grid');
    container.innerHTML = '';
    
    buddiesArray.forEach(buddy => {
        const buddyCard = createBuddyCard(buddy);
        container.appendChild(buddyCard);
    });
}

function createBuddyCard(buddy) {
    const card = document.createElement('div');
    card.className = 'buddy-card';
    card.innerHTML = `
        <div class="buddy-header">
            <img src="${buddy.avatar}" alt="${buddy.name}" class="buddy-avatar">
            <div class="buddy-info">
                <h4>${buddy.name}</h4>
                <p><i class="fas fa-map-marker-alt"></i> ${buddy.location}</p>
            </div>
        </div>
        <div class="buddy-sports">
            ${buddy.sports.map(sport => `<span class="sport-tag">${sport}</span>`).join('')}
        </div>
        <div class="buddy-stats">
            <span><i class="fas fa-chart-line"></i> ${buddy.activities} activities</span>
            <span><i class="fas fa-star"></i> ${buddy.rating}</span>
            <span class="skill-level">${buddy.skillLevel}</span>
        </div>
        <button class="connect-btn" onclick="connectWithBuddy(${buddy.id})">
            <i class="fas fa-user-plus"></i>
            Connect
        </button>
    `;
    return card;
}

function connectWithBuddy(buddyId) {
    const buddy = buddies.find(b => b.id === buddyId);
    showToast('Success', `Connection request sent to ${buddy.name}!`, 'success');
}

function loadEvents() {
    displayEvents(events);
}

function displayEvents(eventsArray) {
    const container = document.getElementById('events-grid');
    container.innerHTML = '';
    
    eventsArray.forEach(event => {
        const eventCard = createEventCard(event);
        container.appendChild(eventCard);
    });
}

function createEventCard(event) {
    const card = document.createElement('div');
    card.className = 'event-card';
    card.innerHTML = `
        <img src="${event.image}" alt="${event.name}" class="event-image">
        <div class="event-content">
            <div class="event-date">
                <i class="fas fa-calendar"></i>
                ${event.date.toLocaleDateString()}
            </div>
            <h4>${event.name}</h4>
            <div class="event-location">
                <i class="fas fa-map-marker-alt"></i>
                ${event.location}
            </div>
            <div class="event-participants">
                <i class="fas fa-users"></i>
                ${event.participants}/${event.maxParticipants} participants
                <div class="participant-avatars">
                    <img src="https://images.pexels.com/photos/1680172/pexels-photo-1680172.jpeg?auto=compress&cs=tinysrgb&w=30&h=30&fit=crop" alt="Participant" class="participant-avatar">
                    <img src="https://images.pexels.com/photos/1681010/pexels-photo-1681010.jpeg?auto=compress&cs=tinysrgb&w=30&h=30&fit=crop" alt="Participant" class="participant-avatar">
                    <img src="https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=30&h=30&fit=crop" alt="Participant" class="participant-avatar">
                </div>
            </div>
            <button class="join-event-btn" onclick="openEventModal(${event.id})">
                <i class="fas fa-calendar-plus"></i>
                Join Event
            </button>
        </div>
    `;
    return card;
}

function openEventModal(eventId) {
    const event = events.find(e => e.id === eventId);
    const modal = document.getElementById('eventModalOverlay');
    
    // Populate modal with event data
    document.getElementById('eventModalTitle').textContent = event.name;
    document.getElementById('eventModalName').textContent = event.name;
    document.getElementById('eventModalDescription').textContent = event.description;
    document.getElementById('eventModalDate').textContent = event.date.toLocaleDateString();
    document.getElementById('eventModalTime').textContent = event.time;
    document.getElementById('eventModalLocation').textContent = event.location;
    document.getElementById('eventModalParticipants').textContent = `${event.participants}/${event.maxParticipants} participants`;
    document.getElementById('eventModalImage').src = event.image;
    
    // Store event ID for form submission
    document.getElementById('eventJoinForm').dataset.eventId = eventId;
    
    modal.classList.add('show');
}

function closeEventModal() {
    const modal = document.getElementById('eventModalOverlay');
    modal.classList.remove('show');
}

function handleEventJoin(e) {
    e.preventDefault();
    const eventId = parseInt(e.target.dataset.eventId);
    const event = events.find(e => e.id === eventId);
    
    // Get form data
    const formData = new FormData(e.target);
    const participantData = {
        name: formData.get('participantName') || document.getElementById('participantName').value,
        email: formData.get('participantEmail') || document.getElementById('participantEmail').value,
        phone: formData.get('participantPhone') || document.getElementById('participantPhone').value,
        age: formData.get('participantAge') || document.getElementById('participantAge').value,
        experience: formData.get('participantExperience') || document.getElementById('participantExperience').value,
        notes: formData.get('participantNotes') || document.getElementById('participantNotes').value
    };
    
    // Update event participants
    event.participants += 1;
    
    closeEventModal();
    showToast('Success', `Successfully joined ${event.name}! Check your email for details.`, 'success');
    
    // Refresh events display
    displayEvents(events);
}

function loadPosts() {
    displayPosts(posts);
}

function displayPosts(postsArray) {
    const container = document.getElementById('posts-feed');
    container.innerHTML = '';
    
    postsArray.forEach(post => {
        const postCard = createPostCard(post);
        container.appendChild(postCard);
    });
}

function createPostCard(post) {
    const card = document.createElement('div');
    card.className = 'post-card';
    card.innerHTML = `
        <div class="post-header">
            <img src="${post.avatar}" alt="${post.author}" class="post-author-avatar">
            <div class="post-author-info">
                <h5>${post.author}</h5>
                <span class="post-timestamp">${post.timestamp}</span>
            </div>
        </div>
        <div class="post-content">${post.content}</div>
        <div class="post-actions">
            <div class="post-action" onclick="likePost(${post.id})">
                <i class="fas fa-heart"></i>
                <span>${post.likes}</span>
            </div>
            <div class="post-action" onclick="commentPost(${post.id})">
                <i class="fas fa-comment"></i>
                <span>${post.comments}</span>
            </div>
            <div class="post-action" onclick="sharePost(${post.id})">
                <i class="fas fa-share"></i>
                <span>${post.shares}</span>
            </div>
        </div>
    `;
    return card;
}

function createPost() {
    const input = document.getElementById('post-input');
    const content = input.value.trim();
    
    if (content) {
        const newPost = {
            id: posts.length + 1,
            author: currentUser?.name || 'Anonymous User',
            avatar: currentUser?.avatar || 'https://images.pexels.com/photos/220453/pexels-photo-220453.jpeg?auto=compress&cs=tinysrgb&w=45&h=45&fit=crop',
            content: content,
            timestamp: 'Just now',
            likes: 0,
            comments: 0,
            shares: 0
        };
        
        posts.unshift(newPost);
        input.value = '';
        displayPosts(posts);
        showToast('Success', 'Post created successfully!', 'success');
    }
}

function handlePostKeypress(e) {
    if (e.key === 'Enter' && !e.shiftKey) {
        e.preventDefault();
        createPost();
    }
}

function likePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.likes += 1;
    displayPosts(posts);
}

function commentPost(postId) {
    showToast('Info', 'Comment feature coming soon!', 'info');
}

function sharePost(postId) {
    const post = posts.find(p => p.id === postId);
    post.shares += 1;
    displayPosts(posts);
    showToast('Success', 'Post shared!', 'success');
}

function handleTagClick(e) {
    const tag = e.target.textContent;
    showToast('Info', `Searching for ${tag}...`, 'info');
}

// Navigation Functions
function handleNavigation(e) {
    e.preventDefault();
    const targetSection = e.target.dataset.section;
    
    // Update active nav link
    document.querySelectorAll('.nav-link').forEach(link => {
        link.classList.remove('active');
    });
    e.target.classList.add('active');
    
    // Scroll to section
    const section = document.getElementById(targetSection);
    if (section) {
        section.scrollIntoView({ behavior: 'smooth' });
    }
}

function toggleMobileMenu() {
    const hamburger = document.getElementById('hamburger');
    const navMenu = document.getElementById('navMenu');
    
    hamburger.classList.toggle('active');
    navMenu.classList.toggle('active');
}

// Utility Functions
function showToast(title, message, type = 'info') {
    const container = document.getElementById('toastContainer');
    const toast = document.createElement('div');
    toast.className = `toast ${type}`;
    
    const icons = {
        success: 'fas fa-check',
        error: 'fas fa-times',
        warning: 'fas fa-exclamation',
        info: 'fas fa-info'
    };
    
    toast.innerHTML = `
        <div class="toast-icon">
            <i class="${icons[type]}"></i>
        </div>
        <div class="toast-content">
            <div class="toast-title">${title}</div>
            <div class="toast-message">${message}</div>
        </div>
        <button class="toast-close" onclick="this.parentElement.remove()">
            <i class="fas fa-times"></i>
        </button>
    `;
    
    container.appendChild(toast);
    
    // Auto remove after 5 seconds
    setTimeout(() => {
        if (toast.parentElement) {
            toast.remove();
        }
    }, 5000);
}

function handleOutsideClick(e) {
    // Close modals when clicking outside
    if (e.target.classList.contains('auth-overlay')) {
        hideAuthModal();
    }
    
    if (e.target.classList.contains('modal-overlay')) {
        closeEventModal();
    }
    
    // Close panels when clicking outside
    if (!e.target.closest('.notification-panel') && !e.target.closest('.notification-btn')) {
        document.getElementById('notificationPanel').classList.remove('show');
    }
    
    if (!e.target.closest('.profile-sidebar') && !e.target.closest('#userAvatar')) {
        closeProfileSidebar();
    }
    
    if (!e.target.closest('.chat-sidebar') && !e.target.closest('.chat-trigger-btn') && !e.target.closest('.chat-floating-btn')) {
        closeChatSidebar();
    }
}

function handleScroll() {
    const navbar = document.getElementById('navbar');
    
    if (window.scrollY > 50) {
        navbar.classList.add('scrolled');
    } else {
        navbar.classList.remove('scrolled');
    }
    
    // Update active nav link based on scroll position
    const sections = document.querySelectorAll('section[id]');
    const navLinks = document.querySelectorAll('.nav-link');
    
    let current = '';
    sections.forEach(section => {
        const sectionTop = section.offsetTop;
        const sectionHeight = section.clientHeight;
        if (window.scrollY >= sectionTop - 200) {
            current = section.getAttribute('id');
        }
    });
    
    navLinks.forEach(link => {
        link.classList.remove('active');
        if (link.dataset.section === current) {
            link.classList.add('active');
        }
    });
}

// Animation Functions
function initializeAnimations() {
    // Counter animation
    const counters = document.querySelectorAll('.stat-number');
    const observerOptions = {
        threshold: 0.7
    };
    
    const counterObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = parseInt(counter.dataset.count);
                animateCounter(counter, target);
                counterObserver.unobserve(counter);
            }
        });
    }, observerOptions);
    
    counters.forEach(counter => {
        counterObserver.observe(counter);
    });
    
    // Scroll animations
    const animatedElements = document.querySelectorAll('.buddy-card, .event-card, .post-card, .floating-card');
    
    const scrollObserver = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.style.opacity = '1';
                entry.target.style.transform = 'translateY(0)';
            }
        });
    }, { threshold: 0.1 });
    
    animatedElements.forEach(element => {
        element.style.opacity = '0';
        element.style.transform = 'translateY(30px)';
        element.style.transition = 'opacity 0.6s ease, transform 0.6s ease';
        scrollObserver.observe(element);
    });
}

function animateCounter(element, target) {
    let current = 0;
    const increment = target / 100;
    const timer = setInterval(() => {
        current += increment;
        if (current >= target) {
            current = target;
            clearInterval(timer);
        }
        element.textContent = Math.floor(current).toLocaleString();
    }, 20);
}