# Plan: Mobile Prototype with Reusable Navbar

## Overview
Build a mobile-first prototype with a reusable navbar component. Login accepts any email/password, stores session in localStorage, and navigates to a simple home page. Navbar has 3 buttons (left, center, right) with SVG placeholders. All pages share restricted-width container for consistent mobile experience.

---

## Phase 1: Create Reusable Components

### 1.1 Create `components/navbar.html`
**Purpose:** Reusable navbar component that can be fetched and injected into any page

**Structure:**
- **Left Button:** Menu icon (SVG placeholder), `data-action="menu"`
- **Center Button:** Home/brand icon (SVG placeholder), `data-action="home"`, prominent styling
- **Right Button:** User profile icon (SVG placeholder), `data-action="user"`
- **Container:** Sticky at top, dark orange gradient, restricted width matching page layout
- **Responsive:** Full-width mobile, max-width container on desktop

**Key Classes:**
- `.navbar` — sticky positioning, gradient background, z-index
- `.navbar-container` — restricted width, centered
- `.navbar-button` — button styling for navbar items

### 1.2 Add CSS Utilities to `styles/style.css`
**New Classes:**
- `.navbar-container` — max-w-md, mx-auto, px-0 (mobile-first)
- `.navbar` — sticky top-0, bg gradient, text-white, padding, z-50
- `.navbar-button` — flex items center, p-3, hover effects, SVG size
- `.page-container` — max-w-md, mx-auto (for all pages)
- `.page-content` — px-4 py-6 (padding for mobile)

---

## Phase 2: Update Login Page

### 2.1 Modify `login.html`
**Changes:**
- Remove `required` attributes from username and password inputs (or keep them but don't validate format)
- Add `id="login-form"` to the form element
- Remove any validation feedback messages
- Add form submit handler: `handle_login_submit(e)`
  - Prevent default
  - Get username and password values
  - Create mock user object
  - Call `store_user_session(user)`
  - Redirect to `home.html`

**Handler Logic:**
```javascript
function handle_login_submit(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    // Accept any input (no validation)
    if (username && password) {
        const user = {
            user_id: Date.now(),
            username: username,
            first_name: username
        };
        store_user_session(user);
        window.location.href = 'home.html';
    }
}
```

---

## Phase 3: Create Home Page

### 3.1 Create `home.html`
**Structure:**
```html
<!DOCTYPE html>
<html>
  <head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>SafeCircle - Home</title>
    <script src="https://cdn.tailwindcss.com"></script>
    <script>
      tailwind.config = { /* custom colors */ }
    </script>
    <link rel="stylesheet" href="styles/style.css">
  </head>
  <body>
    <div id="navbar-container"></div>
    
    <main class="page-container">
      <div class="page-content">
        <h1>Welcome, <span id="user-name"></span>!</h1>
        <p id="user-username"></p>
        <!-- Mock content cards -->
        <div class="card mt-6">
          <h2>Your Circles</h2>
          <!-- Mock circle cards -->
        </div>
      </div>
    </main>

    <script src="script/javascript.js"></script>
    <script>
      check_auth();
      load_navbar();
      display_user_info();
    </script>
  </body>
</html>
```

**On Page Load:**
1. Call `check_auth()` — redirect to login if not authenticated
2. Call `load_navbar()` — fetch and inject navbar
3. Call `display_user_info()` — populate welcome message with user's email
4. Attach event listeners to navbar buttons

---

## Phase 4: Update JavaScript (`script/javascript.js`)

### 4.1 Session Management
```javascript
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
```

### 4.2 Authentication
```javascript
function check_auth() {
    const user = get_current_user();
    const is_login_page = window.location.pathname.includes('login.html');
    
    if (!user && !is_login_page) {
        window.location.href = 'login.html';
    }
}
```

### 4.3 Navbar Loading
```javascript
async function load_navbar() {
    const response = await fetch('components/navbar.html');
    const navbar_html = await response.text();
    document.getElementById('navbar-container').innerHTML = navbar_html;
    
    // Attach event listeners
    document.querySelector('[data-action="menu"]').addEventListener('click', handle_menu_click);
    document.querySelector('[data-action="home"]').addEventListener('click', handle_home_click);
    document.querySelector('[data-action="user"]').addEventListener('click', handle_user_click);
}
```

### 4.4 Navbar Button Handlers
```javascript
function handle_menu_click() {
    console.log('Menu clicked');
    // TODO: Open sidebar or menu
}

function handle_home_click() {
    console.log('Home clicked');
    window.location.href = 'home.html';
}

function handle_user_click() {
    console.log('User clicked');
    // TODO: Open profile page
}
```

### 4.5 Page-Specific Functions
```javascript
function display_user_info() {
    const user = get_current_user();
    if (user) {
        document.getElementById('user-name').textContent = user.first_name;
        document.getElementById('user-username').textContent = user.username;
    }
}

function handle_login_submit(e) {
    e.preventDefault();
    const username = document.getElementById('username').value;
    const password = document.getElementById('password').value;
    
    if (username && password) {
        const user = {
            user_id: Date.now(),
            username: username,
            first_name: username
        };
        store_user_session(user);
        window.location.href = 'home.html';
    }
}
```

### 4.6 Login Page Initialization
On `login.html`:
```javascript
document.getElementById('login-form').addEventListener('submit', handle_login_submit);

// Optional: Skip login if already logged in
if (get_current_user()) {
    window.location.href = 'home.html';
}
```

---

## Files to Create/Modify

### New Files
1. **`components/navbar.html`** — Reusable navbar with 3 buttons
2. **`home.html`** — Dashboard/home page

### Modified Files
1. **`styles/style.css`** — Add navbar and container utilities
2. **`script/javascript.js`** — Add all session, auth, and navbar functions
3. **`login.html`** — Remove validation, add form handler, add auth check on load

---

## Testing Checklist

### Login Page
- [ ] Accept any username (no format validation)
- [ ] Accept any password (no validation)
- [ ] Click "Sign In" → localStorage updated with user
- [ ] Redirect to `home.html` after successful login
- [ ] If already logged in, skip to `home.html`

### Home Page
- [ ] Navbar loads on page init
- [ ] Navbar displays 3 buttons (left, center, right)
- [ ] Left button (menu) → console log "Menu clicked"
- [ ] Center button (home) → console log "Home clicked"
- [ ] Right button (user) → console log "User clicked"
- [ ] Welcome message shows user's username
- [ ] Page uses restricted-width container
- [ ] localStorage persists when refreshing page

### Mobile Responsiveness
- [ ] Login: full-screen on mobile, centered on desktop
- [ ] Home: navbar and content stack properly
- [ ] No horizontal scrolling
- [ ] Navbar buttons are touch-friendly (adequate padding)

### Cross-Page
- [ ] Login → Home → localStorage persists
- [ ] Manual navigation to `home.html` while logged in → works
- [ ] Clear localStorage manually → reload `home.html` → redirects to login

---

## Decisions & Rationale

| Decision | Why |
|----------|-----|
| **Multiple HTML files** (not true SPA) | Easier to develop, test, and maintain; clearer file structure |
| **Navbar via Fetch** | Reusable component pattern; clean separation of concerns |
| **localStorage for session** | Persists login state across refreshes and pages |
| **No validation on login** | Faster prototyping; focus on UI/UX flow |
| **Mobile-first design** | All pages restricted to max-width container; better mobile experience |
| **SVG placeholders** | Easy to swap for real icons later without changing structure |

---

## Future Enhancements

1. **Navbar Button Actions**
   - Menu → open sidebar with navigation menu
   - User → navigate to profile page or settings
   - Home → navigate to home.html

2. **Home Page Content**
   - Add circle cards (mock data from `mock_data` object)
   - Add quick actions (create circle, invite users, etc.)

3. **Additional Pages**
   - Profile page

4. **Styling Refinements**
   - Add transition animations for navbar
   - Polish button hover states
   - Ensure consistent spacing and typography across pages
