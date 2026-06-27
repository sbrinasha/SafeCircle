# SafeCircle Prototype - Project Instructions

## Project Overview
**SafeCircle** is a **static HTML MVP prototype** designed to demonstrate functionality to stakeholders and investors. This is **not a production application** — it's a proof-of-concept with hardcoded mock data and JavaScript-only logic.

---

## Response Style
- Code only, no simple explanation unless I ask
- No markdown prose wrapping around code blocks
- Be concise — skip preambles like "Sure! Here's..."

## Technology Stack

### Frontend
- **HTML5** - Semantic structure
- **Tailwind CSS CDN** - Utility-first styling
- **Vanilla JavaScript** - No frameworks (ES6+)
- **localStorage API** - Client-side data persistence

### Architecture
- **Single Page Application (SPA)** - Single HTML file with JS routing
- **Mock Data** - Hardcoded data in JavaScript (no external APIs or databases)

---

## Responsiveness

- Only mobile-first design is required for this prototype. Desktop responsiveness is optional.

## Coding Conventions

### HTML
- Use semantic tags: `<header>`, `<nav>`, `<main>`, `<footer>`, `<section>`
- Use descriptive `id` and `class` attributes (kebab-case for classes)
- Keep IDs unique per page/section
- Use data attributes for JS hooks: `data-action`, `data-id`, etc.

**Example:**
```html
<form id="login-form" class="login-container">
    <input id="email-input" data-field="email" type="email" required />
</form>
```

### CSS (style.css)
- Use Tailwind utilities first, custom CSS for exceptions
- Follow BEM-inspired naming for complex components: `.card__header`, `.card__body`
- Keep file organized: resets → base → components → utilities

---

## Mock Data Structure

All mock data lives in `script/javascript.js`. Use a `mock_data` object to centralize:

```javascript
const mock_data = {
    users: [
        { user_id: 1, email: 'user@example.com', password: 'pass123', first_name: 'John' },
        { user_id: 2, email: 'admin@example.com', password: 'admin123', first_name: 'Admin' }
    ],
    settings: {
        app_name: 'SafeCircle',
        theme: 'light',
        notifications_enabled: true
    },
    mock_circle_data: [
        { circle_id: 1, name: 'Family', members: ['user1', 'user2'] },
        { circle_id: 2, name: 'Friends', members: ['user3', 'user4'] }
    ]
};
```

---

## Design System

### Color Palette (Orange Pastel Theme)
- **Primary Accent:** `#FF8C42` (orange-accent) - CTAs, highlights
- **Pastel:** `#FFD4B3` (orange-pastel) - Backgrounds, borders
- **Dark Accent:** `#FF6B35` (orange-dark) - Hover states
- **Neutral:** Grays (`#666`, `#999`, `#CCC`)

### Typography
- **Headings:** Bold, 24-32px (`text-2xl`, `text-3xl`, `text-4xl`)
- **Body:** Regular, 14-16px (`text-base`, `text-sm`)
- **Font Stack:** Poppins, sans-serif (import via Google Fonts)

### Components
- **Buttons:** Rounded, orange on dark, white on light
- **Inputs:** Soft border with pastel, focus state highlights orange
- **Cards:** White background, rounded corners, subtle shadows
- **Mobile:** Full-width on mobile, max-width on desktop

---

## Development Workflow

### Before Writing Code
1. Plan the feature in a comment block
2. Check mock_data for required data structure
3. Identify UI components needed

### During Development
1. Write HTML structure first (semantic tags)
2. Add Tailwind classes for styling
3. Attach event listeners with `data-` attributes
4. Write JavaScript handlers for logic
5. Test on mobile only

### File Organization
- **One HTML file per page/section** (currently: login.html, home.html, etc.)
- **All JavaScript in script/javascript.js** (use function prefixes for clarity)
- **Custom CSS in styles/style.css only** (for Tailwind overrides)
- **Assets in img/** (logos, icons, placeholders)

---

### Performance
- Minimize DOM queries: cache elements in variables
- Debounce input handlers (search, resize, etc.)
- Use event delegation for dynamic content
- Preload images where needed
