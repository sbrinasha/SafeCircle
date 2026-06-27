# Plan: alert-2.html — SafeSpace Emergency Flow Interface

## Overview
A vertically scrolling "flow history" page where automated case steps appear one by one, stacking downward like a timeline feed. Each step is a card that appends below the last. Completed steps collapse into a compact "done" state. The active step is expanded and interactive or auto-progressing.

---

## Steps (in order)

### Step 1 — Initializing SafeSpace Protocols
- **Type:** Auto (no user input)
- **Duration:** 2 seconds
- **UI:** Spinner/pulse animation + label "Initializing SafeSpace Protocols..."
- **On complete:** Collapses to checkmark row, appends Step 2

### Step 2 — Describe What Happened
- **Type:** User input required
- **UI:** Textarea (placeholder: "Describe what happened..."), Submit button
- **On submit:** Text is stored to a local variable, step collapses with snippet preview, appends Step 3

### Step 3 — Notifying Family Members
- **Type:** Auto, no user selection required
- **UI:** "Notifying Family Members" header, 3 person rows all shown at once, each with a spinner that sequentially resolves to a green checkmark (1 second per person)
- **Mock people:**
  - `{ name: 'Jane Doe', relation: 'Mom' }`
  - `{ name: 'Robert Doe', relation: 'Dad' }`
  - `{ name: 'Sarah Smith', relation: 'Best Friend' }`
- **On complete (all 3 notified):** Appends Step 4

### Step 4 — Select Affected Bank
- **Type:** User input required
- **UI:** "Which bank was affected?" header, 3 bank cards selectable
- **Bank card layout:** Avatar placeholder circle + bank name + account type + "•••• •••• •••• XXXX" (only last 4 from mock_data)
- **Use existing `mock_data.banks` from javascript.js** (Chase 4829, BofA 7392, Wells Fargo 5156)
- **On select:** Card highlights orange, store selected bank, appends Step 5

### Step 5 — Contacting Bank
- **Type:** Auto (5 second progress)
- **UI:** "Contacting [Selected Bank Name]..." with animated progress bar filling over 5 seconds
- **On complete:** Shows "Bank Notified ✓", appends Step 6

### Step 6 — Notifying Police
- **Type:** Auto (5 second progress)
- **UI:** "Notifying Local Authorities..." with same animated progress bar
- **On complete:** Shows "Authorities Notified ✓", appends Step 7

### Step 7 — Safety Suggestions
- **Type:** User reads, then taps button
- **UI:** "What to do next" header, 5 suggestion bullet cards
- **Suggestions:**
  1. Do not transfer any more money to unknown accounts
  2. Change passwords on affected accounts immediately
  3. Monitor your bank statements for 30 days
  4. Save all evidence (screenshots, messages, transaction IDs)
  5. Stay calm — your SafeCircle is supporting you
- **CTA Button:** "I understand, proceed" → redirect to alert-3.html

---

## UI / Style Pattern

### Flow Card States
- **Active (loading):** White card, orange border, spinner or progress bar, full content visible
- **Active (input):** White card, orange border, textarea/bank list visible
- **Complete:** Muted gray card, green checkmark icon left, single-line summary, no interaction
- **Append animation:** Each new card slides up from below (`slide-up` animation already in style.css)

### Page Layout
- `app-shell` is scrollable (this page needs scroll as steps accumulate)
- Sticky header at top: "SafeSpace Protocol Active" with red pulsing dot
- Steps stack vertically in a `flow-feed` div below the header
- Auto-scroll to bottom as each new step appears

### Step Card HTML structure (each step):
```
.flow-step (wrapper)
  .flow-step--complete  OR  .flow-step--active
    .step-icon (spinner / checkmark)
    .step-title
    .step-body (content, hidden when complete)
```

---

## Files to Modify

- `alert-2.html` — full page build
- `script/javascript.js` — add `mock_family_members` array to `mock_data`
- `styles/style.css` — add `.flow-step`, `.flow-step--complete`, `.flow-step--active`, `.progress-bar`, `.bank-card`, `.person-row` styles

---

## JavaScript Architecture (all inline in alert-2.html)

- `runFlow()` — master controller, calls steps in sequence
- `appendStep(id, titleHTML, bodyHTML)` — creates and appends a step card, returns the element
- `completeStep(el, summaryText)` — collapses step to done state
- `sleep(ms)` — Promise-based delay helper
- `step1_init()`, `step2_describe()`, `step3_family()`, `step4_bank()`, `step5_contactBank()`, `step6_police()`, `step7_suggestions()` — one function per step
- Auto-scroll: after each `appendStep`, scroll container to bottom smoothly

---

## Mock Data Addition to javascript.js
```js
mock_family_members: [
    { member_id: 1, name: 'Jane Doe', relation: 'Mom', phone: '+1 (555) 012-3456' },
    { member_id: 2, name: 'Robert Doe', relation: 'Dad', phone: '+1 (555) 012-7890' },
    { member_id: 3, name: 'Sarah Smith', relation: 'Best Friend', phone: '+1 (555) 987-6543' }
]
```

---

## Decisions
- No navbar on this page (emergency flow, no navigation distractions)
- Page IS scrollable (steps accumulate, needs scroll)
- Step 3: family members auto-notify, no user selection required
- Banks reuse existing `mock_data.banks` — no new data needed except family members
- All JS inline in alert-2.html (page-specific logic)
- Redirect target: `alert-3.html` (not yet created)
- No cancel button on this page — flow is already confirmed from alert-1.html

## Verification
1. Step 1 auto-completes after exactly 2 seconds
2. Step 2 textarea submits and stores text, collapses with snippet
3. Step 3 shows all 3 person rows, spinners resolve to checkmarks 1s apart
4. Step 4 bank cards are tappable, selected card highlights orange
5. Step 5 progress bar fills over 5 seconds then collapses
6. Step 6 progress bar fills over 5 seconds then collapses
7. Step 7 shows suggestions and "proceed" button redirects to alert-3.html
8. Each completed step collapses to a compact summary row with green checkmark
9. Page auto-scrolls to new step as it appears
