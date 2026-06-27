/* =====================
   Mock Data
   ===================== */
const mock_data = {
    mock_family_members: [
        { member_id: 1, name: 'Jane Doe', relation: 'Mom', phone: '+1 (555) 012-3456' },
        { member_id: 2, name: 'Robert Doe', relation: 'Dad', phone: '+1 (555) 012-7890' },
        { member_id: 3, name: 'Sarah Smith', relation: 'Best Friend', phone: '+1 (555) 987-6543' }
    ],
    banks: [
        {
            bank_id: 1,
            name: 'RHB Bank',
            account_type: 'Checking Account',
            card_number: '4829',
            contact_number: '1-800-935-9935',
            contact_methods: {
                call: true,
                email: true,
                sms: false
            },
            logo: 'rhb.png'
        },
        {
            bank_id: 2,
            name: 'Maybank',
            account_type: 'Savings Account',
            card_number: '7392',
            contact_number: '1-800-432-1000',
            contact_methods: {
                call: true,
                email: false,
                sms: true
            },
            logo: 'maybank.png'
        },
        {
            bank_id: 3,
            name: 'Hong Leong Bank',
            account_type: 'Credit Card',
            card_number: '5156',
            contact_number: '1-800-869-3557',
            contact_methods: {
                call: false,
                email: true,
                sms: true
            },
            logo: 'hl.jpg'
        }
    ]
};

/* =====================
   Session Management
   ===================== */
function store_user_session(user) {
    localStorage.setItem('current_user', JSON.stringify(user));
}

function get_current_user() {
    const user = localStorage.getItem('current_user');
    return user ? JSON.parse(user) : null;
}

function clear_user_session() {
    localStorage.removeItem('current_user');
}

/* =====================
   Authentication
   ===================== */
function check_auth() {
    const user = get_current_user();
    const is_login_page = window.location.pathname.includes('login.html');

    if (!user && !is_login_page) {
        window.location.href = 'login.html';
    }
}

/* =====================
   Navbar
   ===================== */
async function load_navbar() {
    const response = await fetch('components/navbar.html');
    const navbar_html = await response.text();
    document.getElementById('navbar-container').innerHTML = navbar_html;

    const home_btn = document.querySelector('[data-action="home"]');
    const search_btn = document.querySelector('[data-action="search"]');
    const notifications_btn = document.querySelector('[data-action="notifications"]');
    const user_btn = document.querySelector('[data-action="user"]');

    if (home_btn) home_btn.addEventListener('click', handle_navbar_home);
    if (search_btn) search_btn.addEventListener('click', handle_navbar_search);
    if (notifications_btn) notifications_btn.addEventListener('click', handle_navbar_notifications);
    if (user_btn) user_btn.addEventListener('click', handle_navbar_user);
}

function handle_navbar_home() {
    console.log('Home clicked');
}

function handle_navbar_search() {
    console.log('Search clicked');
}

function handle_navbar_notifications() {
    console.log('Notifications clicked');
}

function handle_navbar_user() {
    console.log('User profile clicked');
}

/* =====================
   Home Page
   ===================== */
function display_user_info() {
    const user = get_current_user();
    if (user) {
        document.getElementById('user-name').textContent = user.first_name;
        document.getElementById('user-username').textContent = '@' + user.username;
    }
}

/* =====================
   Login Page
   ===================== */
function handle_login_submit(e) {
    e.preventDefault();
    const username = document.getElementById('email').value;
    const password = document.getElementById('password').value;

    if (username && password) {
        const user = {
            user_id: Date.now(),
            username: username,
            first_name: username.split('@')[0]
        };
        store_user_session(user);
    }
}

function init_login_page() {
    // This function handles form submission and user storage
    // The view toggle is handled in index.html
}
