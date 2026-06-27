# SafeCircle - User Guide

## 💡 What is SafeCircle?

**SafeCircle** is an app that helps people learn about scams and report suspicious activity. It's designed to help families stay safe online by providing education, reporting tools, and quick access to safety resources.

---

## 🚀 Getting Started

### Open the App

1. **Find the folder** where SafeCircle is saved on your computer
2. **Double-click** `index.html` 
3. **The app opens** in your browser automatically

That's it! No installation needed.

---

## 📖 What Can You Do?

### 1. **Login** 
Go to the login page to access your account.
- **Demo Email**: `user@example.com`
- **Demo Password**: `pass123`

### 2. **Home Dashboard**
Your main screen with quick access to everything:
- 📚 **Blog Posts** — Read safety tips and scam warnings in the carousel
- 🧠 **Take the Quiz** — Test your knowledge with a fun 6-question safety quiz

### 3. **Read the Blog**
- Scroll through safety articles and scam prevention tips
- Click "Blog" in the menu to see all posts

### 4. **Report a Scam (Alert Flow)**
If you encounter suspicious activity, follow these steps:

**Step 1 - Confirm the Alert**
- You'll see a countdown timer
- Swipe or click to confirm the alert

**Step 2 - SafeSpace Protocol**
- Answer questions about the scam
- **Upload screenshots** to document the evidence (Step 2)
- Continue through all 7 steps

**Step 3 - Get Your Receipt**
- Your report is filed
- You'll see a success message
- The app automatically redirects you to your reports

### 5. **Take the Safety Quiz**
- **Start**: Click "Start Quiz" button
- **Questions**: Answer 6 questions about scam awareness
- **Feedback**: Get instant explanations for each answer
- **Score**: See your safety score at the end
- Scores:
  - 🟢 **Low** (0-3) — Need more learning
  - 🟡 **Good** (4-5) — Keep it up!
  - 🟢 **Excellent** (6-7) — You're a safety expert!

---

## 🎨 How to Navigate

**Menu Button (☰)** — Top left of every page
- **Home** — Dashboard with blog & quiz
- **Blog** — All safety articles
- **Report** — File a scam report
- **Quiz** — Take the safety quiz
- **Logout** — Sign out of your account

---

## 📱 Mobile Friendly

SafeCircle works great on phones and tablets. Just open in your phone's browser!

---

## ❓ Need Help?

### The app isn't opening
- Make sure you're opening `index.html` from the SafeCircle folder
- Try a different browser (Chrome, Safari, Firefox)

### Images aren't showing
- Check your internet connection
- Refresh the page (swipe down on phone, or F5 on computer)

### Quiz answers aren't saving
- The quiz resets each time you retake it
- Your score shows when you finish

---

**That's it! You're ready to use SafeCircle.** 🎉

```
SafeCircle/
├── index.html                 # Landing page entry point
├── home.html                  # Main dashboard (blog carousel, quiz section)
├── login.html                 # Login page
├── alert-1.html              # Step 1: Scam alert confirmation
├── alert-2.html              # Step 2: SafeSpace Protocol (image upload)
├── alert-3.html              # Step 3: Case filing & receipt (toast notification)
├── blog.html                 # Blog listing page
├── quiz.html                 # Interactive quiz system
├── circle.html               # Circle management (stub)
├── bank.html                 # Bank information (stub)
├── reports.html              # Reports dashboard (stub)
├── view-report.html          # Report detail view (stub)
├── kiko.html                 # Kiko page (stub)
│
├── data/
│   ├── blog.js               # Blog post data
│   └── quiz.js               # Quiz questions and scoring config
│
├── script/
│   ├── javascript.js         # Mock data (users, circles, settings)
│   └── navbar.js             # Navbar component (shared across pages)
│
├── styles/
│   └── style.css             # Custom CSS (Tailwind overrides)
│
└── img/
    └── (placeholder images)
```

---

## 🛠 Technology Stack

### Frontend
- **HTML5** — Semantic markup
- **Tailwind CSS** — Utility-first CSS via CDN (no build step)
- **Vanilla JavaScript** — ES6+, no frameworks
- **localStorage API** — Client-side data persistence

### Architecture
- **Single Page Application (SPA)** — Single HTML file with JavaScript routing
- **Mock Data** — Hardcoded in `script/javascript.js`, `data/blog.js`, `data/quiz.js`
- **Component Pattern** — Navbar shared via `navbar.js` import

### No Backend Required
- ✅ No database
- ✅ No API calls
- ✅ No build process
- ✅ No npm/package manager

---

## 🎨 Design System

### Color Palette (Orange Pastel Theme)
| Color | Hex | Usage |
|-------|-----|-------|
| Orange Accent | `#FF8C42` | Buttons, highlights, CTAs |
| Orange Pastel | `#FFD4B3` | Backgrounds, light borders |
| Orange Dark | `#FF6B35` | Hover states, active states |
| Neutral Gray | `#666` / `#999` / `#CCC` | Text, secondary elements |

### Typography
- **Font**: Poppins, sans-serif (via Google Fonts CDN)
- **Headings**: Bold, 24-32px (`text-2xl`, `text-3xl`, `text-4xl`)
- **Body**: Regular, 14-16px (`text-base`, `text-sm`)

### Components
- **Buttons**: Rounded, orange background, white text, hover effects
- **Input Fields**: Soft borders, pastel backgrounds, orange focus states
- **Cards**: White background, rounded corners, subtle shadows
- **Mobile Layout**: Full-width on mobile, max-width on larger screens

---

## 📖 How to Use Each Feature

### 1️⃣ Blog System

**Files**: `home.html`, `blog.html`, `data/blog.js`

**How it works**:
- Blog data stored in `data/blog.js` as `blog_data` array
- Home page displays carousel of recent posts via `render_blog_carousel()`
- Blog page lists all posts via `render_blog_posts()`

**Add a new blog post**:
1. Open `data/blog.js`
2. Add object to `blog_data` array:
   ```javascript
   {
       id: 4,
       title: "Your Post Title",
       content: "Your content here<br>With line breaks",
       image: "img/your-image.jpg"
   }
   ```
3. Refresh browser—carousel/blog page auto-updates

### 2️⃣ Alert Flow (Scam Reporting)

**Files**: `alert-1.html`, `alert-2.html`, `alert-3.html`

**Flow**: Alert-1 (Confirm) → Alert-2 (SafeSpace Protocol Steps) → Alert-3 (Receipt + Auto-redirect)

**Key Features**:
- **Alert-1**: 10-second countdown, swipe-to-confirm
- **Alert-2**: 
  - 7 sequential steps
  - **Step 2** includes image upload with thumbnail preview
  - Multiple images allowed, stored in memory only
- **Alert-3**: 
  - Case filing receipt
  - Modal notification pops up after 2 seconds
  - Close modal → Toast countdown (10 sec) → Auto-redirect to reports.html

### 3️⃣ Interactive Quiz

**Files**: `quiz.html`, `data/quiz.js`

**Quiz Structure**:
- **Intro Screen**: Welcome message, image, start button
- **Questions**: 6 total
  - Questions 1-3: Multiple Choice (1 mark each)
  - Questions 4-5: True/False (1 mark each)
  - Question 6: Multiple Selection (2 marks—select exactly 2 correct options)
- **Feedback**: After each answer, immediate feedback + explanation
- **Results**: Final score with personalized message based on ranges:
  - 0-3: "Safety Score: Low"
  - 4-5: "Safety Score: Good"
  - 6-7: "Safety Score: Excellent"

**Add a new quiz question**:
1. Open `data/quiz.js`
2. Add to `quiz_data` array:
   ```javascript
   {
       id: 7,
       type: "multiple-choice",  // or "true-false" or "multiple-selection"
       question: "Your question?",
       options: [
           { text: "Option A", correct: true },
           { text: "Option B", correct: false },
           { text: "Option C", correct: false },
           { text: "Option D", correct: false }
       ],
       explanation: "Why this answer is correct...",
       marks: 1
   }
   ```
3. Update total marks in `scoreRanges` if needed
4. Refresh browser—new question auto-loads

---

## 🔧 Development Workflow

### To Modify a Page

1. **Open the HTML file** (e.g., `home.html`)
2. **Edit HTML structure** — semantic tags (`<header>`, `<nav>`, `<main>`, `<section>`)
3. **Add Tailwind classes** — utility classes for styling (no custom CSS needed usually)
4. **Add data attributes** — `data-action`, `data-id` for JavaScript hooks
5. **Add JavaScript event listeners** in `<script>` tag
6. **Save file** and refresh browser

### To Add Custom CSS

Only add custom CSS to `styles/style.css` when Tailwind utilities won't work.

Example:
```css
/* styles/style.css */
.custom-gradient {
    background: linear-gradient(135deg, #FF8C42, #FFD4B3);
}
```

Then use in HTML:
```html
<div class="custom-gradient p-4 rounded-lg">Content</div>
```

### Best Practices

✅ **DO**:
- Cache DOM queries: `const button = document.getElementById('submit');`
- Use event delegation for dynamic content
- Store data in objects/arrays at top of script
- Comment your code: `// When user clicks submit, validate form`
- Test on mobile (browser DevTools → Toggle Device Toolbar)

❌ **DON'T**:
- Query DOM repeatedly: `document.getElementById('submit')` 20 times
- Add `<script>` tags in HTML body (use existing `<script>` in `<head>`)
- Hardcode data—use mock data objects
- Forget data attributes for JS hooks

---

## 💾 Mock Data Guide

All mock data lives in `script/javascript.js`:

```javascript
const mock_data = {
    users: [
        { user_id: 1, email: 'user@example.com', password: 'pass123', first_name: 'John' }
    ],
    circles: [
        { circle_id: 1, name: 'Family', members: ['user1', 'user2'] }
    ],
    settings: {
        app_name: 'SafeCircle',
        theme: 'light',
        notifications_enabled: true
    }
};
```