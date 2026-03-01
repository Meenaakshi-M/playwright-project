# Homepage Test Plan

## Application Overview

ParaBank is an online banking application. The home page serves as the main landing page with customer login functionality, navigation menu, service highlights, and latest news section. This test plan covers functional testing of all interactive elements on the home page including navigation links, login form, account registration flow, and informational content display.

## Test Scenarios

### 1. Navigation and Links

**Seed:** `tests/seed.spec.ts`

#### 1.1. Verify header logo links to home page

**File:** `tests/homepage/navigation.spec.ts`

**Steps:**
  1. Click on the ParaBank logo in the header
    - expect: The page should remain on or navigate to the home page
    - expect: The URL should contain 'index.htm'
    - expect: The page should display the customer login section
  2. Verify the logo is clickable and styled properly
    - expect: The logo should have cursor pointer style
    - expect: The logo should be clearly visible in the header

#### 1.2. Verify top navigation menu links

**File:** `tests/homepage/navigation.spec.ts`

**Steps:**
  1. Click on 'About Us' in the top navigation
    - expect: The page should navigate to about.htm
    - expect: The About Us page should load successfully
  2. Navigate back to the home page
    - expect: The home page should load with all elements visible
  3. Click on 'Services' in the top navigation
    - expect: The page should navigate to services.htm
  4. Navigate back to the home page
    - expect: The home page should be displayed
  5. Click on 'Products' in the top navigation
    - expect: The page should navigate to an external products page
  6. Navigate back to the home page
    - expect: The home page should display

#### 1.3. Verify footer navigation links

**File:** `tests/homepage/navigation.spec.ts`

**Steps:**
  1. Scroll to the footer section
    - expect: Footer navigation should be visible
  2. Click on 'Home' in the footer
    - expect: Page should navigate to or stay on the home page
  3. Click on 'Services' in the footer
    - expect: Page should navigate to services.htm
  4. Click on 'Contact Us' in the footer
    - expect: Page should navigate to contact.htm
  5. Click on 'Site Map' in the footer
    - expect: Page should navigate to the site map

#### 1.4. Verify secondary navigation links

**File:** `tests/homepage/navigation.spec.ts`

**Steps:**
  1. Click on 'home' link in the secondary navigation
    - expect: Page should stay on or navigate to the home page
  2. Click on 'about' link
    - expect: Page should navigate to about.htm
  3. Navigate back to home page
    - expect: Home page should display
  4. Click on 'contact' link
    - expect: Page should navigate to contact.htm

### 2. Customer Login Form

**Seed:** `tests/seed.spec.ts`

#### 2.1. Verify login form elements are present

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Verify the 'Customer Login' heading is displayed
    - expect: Heading should be visible and centered
  2. Verify username input field is present and active
    - expect: Username textbox should be visible
    - expect: Username field should be the active/focused element
  3. Verify password input field is present
    - expect: Password textbox should be visible
    - expect: Password field should accept secure input
  4. Verify 'Log In' button is present
    - expect: Log In button should be visible and clickable
    - expect: Button should have proper styling
  5. Verify 'Forgot login info?' link is visible
    - expect: Link should be clickable and lead to lookup page
  6. Verify 'Register' link is visible
    - expect: Link should be clickable and lead to registration page

#### 2.2. Login form with valid credentials

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Enter username 'john' in the username field
    - expect: Text should appear in the username field
  2. Enter password 'demo' in the password field
    - expect: Password should be masked in the password field
  3. Click the 'Log In' button
    - expect: Page should navigate to the logged-in dashboard
    - expect: User should be authenticated and session created
    - expect: Account information should be displayed

#### 2.3. Login form with invalid username

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Enter username 'invaliduser123' in the username field
    - expect: Text should appear in the username field
  2. Enter password 'demo' in the password field
    - expect: Password field should be populated
  3. Click the 'Log In' button
    - expect: Error message should be displayed
    - expect: User should remain on the login page or error page
    - expect: Page should indicate invalid credentials

#### 2.4. Login form with empty fields

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Leave both username and password fields empty
    - expect: Fields should be empty
  2. Click the 'Log In' button
    - expect: Error message or validation message should appear
    - expect: User should remain on the home page
    - expect: Login should fail

#### 2.5. Login form with only username

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Enter username 'john' in the username field
    - expect: Username field should be populated
  2. Leave password field empty
    - expect: Password field should be empty
  3. Click the 'Log In' button
    - expect: Login should fail
    - expect: Error or validation message should appear

#### 2.6. Forgot login info link navigation

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Click on 'Forgot login info?' link
    - expect: Page should navigate to lookup.htm
    - expect: Lookup/password recovery page should load

#### 2.7. Register link navigation

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Click on 'Register' link
    - expect: Page should navigate to register.htm
    - expect: Registration form should be displayed

#### 2.8. Login form field focus states

**File:** `tests/homepage/login.spec.ts`

**Steps:**
  1. Click on the username field
    - expect: Username field should receive focus
    - expect: Cursor should be in the username field
  2. Press Tab key to move to password field
    - expect: Focus should move to the password field
  3. Press Tab key to move to Log In button
    - expect: Focus should move to the Log In button

### 3. Services and Features Section

**Seed:** `tests/seed.spec.ts`

#### 3.1. Verify ATM Services section

**File:** `tests/homepage/services.spec.ts`

**Steps:**
  1. Locate the ATM Services section on the home page
    - expect: 'ATM Services' heading should be visible
  2. Verify all ATM service links are present: Withdraw Funds, Transfer Funds, Check Balances, Make Deposits
    - expect: All four service links should be displayed
    - expect: Each link should be clickable
  3. Click on 'Withdraw Funds' link
    - expect: Link should navigate to the service endpoint
    - expect: Service page or documentation should load

#### 3.2. Verify Online Services section

**File:** `tests/homepage/services.spec.ts`

**Steps:**
  1. Locate the Online Services section
    - expect: 'Online Services' heading should be visible
  2. Verify Online Services links are present: Bill Pay, Account History, Transfer Funds
    - expect: All three service links should be displayed
    - expect: Each link should be clickable
  3. Click on 'Bill Pay' link
    - expect: Link should navigate to the service endpoint

#### 3.3. Verify Read More services link

**File:** `tests/homepage/services.spec.ts`

**Steps:**
  1. Locate the 'Read More' link in the services section
    - expect: 'Read More' link should be visible and clickable
  2. Click on the 'Read More' link
    - expect: Page should navigate to services.htm
    - expect: Full services page should be displayed

#### 3.4. Verify all service links are functional

**File:** `tests/homepage/services.spec.ts`

**Steps:**
  1. Click on 'Transfer Funds' under ATM Services
    - expect: Should navigate to service endpoint
  2. Navigate back to home page
    - expect: Home page should reload
  3. Click on 'Check Balances' link
    - expect: Should navigate to service endpoint
  4. Navigate back to home page
    - expect: Home page should reload
  5. Click on 'Make Deposits' link
    - expect: Should navigate to service endpoint

### 4. Latest News Section

**Seed:** `tests/seed.spec.ts`

#### 4.1. Verify Latest News section display

**File:** `tests/homepage/news.spec.ts`

**Steps:**
  1. Locate the 'Latest News' section
    - expect: 'Latest News' heading should be visible
  2. Verify news items are displayed with dates
    - expect: News items should show date (02/24/2026)
    - expect: At least three news items should be visible
    - expect: News items should include: 'ParaBank Is Now Re-Opened', 'New! Online Bill Pay', 'New! Online Account Transfers'
  3. Verify each news item is a clickable link
    - expect: All news items should be clickable links
  4. Verify 'Read More' link is present below news items
    - expect: 'Read More' link should be visible and clickable

#### 4.2. Click news articles

**File:** `tests/homepage/news.spec.ts`

**Steps:**
  1. Click on 'ParaBank Is Now Re-Opened' news link
    - expect: Page should navigate to news.htm with anchor #6
    - expect: News article page should display
  2. Navigate back to home page
    - expect: Home page should reload
  3. Click on 'New! Online Bill Pay' news link
    - expect: Page should navigate to news.htm with anchor #5
    - expect: News article page should display
  4. Navigate back to home page
    - expect: Home page should reload
  5. Click on 'New! Online Account Transfers' news link
    - expect: Page should navigate to news.htm with anchor #4

#### 4.3. Verify news Read More link

**File:** `tests/homepage/news.spec.ts`

**Steps:**
  1. Locate the 'Read More' link in the Latest News section
    - expect: 'Read More' link should be present
  2. Click on the 'Read More' link
    - expect: Page should navigate to news.htm
    - expect: Full news page should be displayed

### 5. Page Layout and Responsiveness

**Seed:** `tests/seed.spec.ts`

#### 5.1. Verify page title and branding

**File:** `tests/homepage/layout.spec.ts`

**Steps:**
  1. Verify the page title in the browser tab
    - expect: Page title should be 'ParaBank | Welcome | Online Banking'
  2. Verify the tagline is displayed
    - expect: Tagline 'Experience the difference' should be visible below the ParaBank logo

#### 5.2. Verify page layout structure

**File:** `tests/homepage/layout.spec.ts`

**Steps:**
  1. Verify header section is present at the top
    - expect: Header should contain logo and navigation
  2. Verify main content area with login and services
    - expect: Login form should be in the center-left
    - expect: Services and news sections should be on the right
  3. Verify footer is present at the bottom
    - expect: Footer should contain navigation links and copyright

#### 5.3. Verify footer content

**File:** `tests/homepage/layout.spec.ts`

**Steps:**
  1. Scroll to the bottom of the page
    - expect: Footer should be visible
  2. Verify copyright text is displayed
    - expect: '© Parasoft. All rights reserved.' should be visible
  3. Verify 'Visit us at:' text and www.parasoft.com link
    - expect: 'Visit us at: www.parasoft.com' should be displayed as a clickable link

#### 5.4. Verify admin link in header

**File:** `tests/homepage/layout.spec.ts`

**Steps:**
  1. Locate the admin link/icon in the header
    - expect: Admin icon/link should be present in the top-right of header
  2. Click on the admin link
    - expect: Page should navigate to admin.htm
    - expect: Admin page should load

### 6. External Links and Resources

**Seed:** `tests/seed.spec.ts`

#### 6.1. Verify external Parasoft links

**File:** `tests/homepage/external.spec.ts`

**Steps:**
  1. Click on 'Products' link in top navigation
    - expect: Link should navigate to http://www.parasoft.com/jsp/products.jsp
    - expect: External Parasoft products page should open
  2. Navigate back to ParaBank home page
    - expect: Home page should reload
  3. Click on 'Locations' link
    - expect: Link should navigate to external Parasoft locations page

#### 6.2. Verify Forum link

**File:** `tests/homepage/external.spec.ts`

**Steps:**
  1. Scroll to footer and locate 'Forum' link
    - expect: Forum link should be visible in footer navigation
  2. Click on the 'Forum' link
    - expect: Link should navigate to http://forums.parasoft.com/
    - expect: Forum page should open in browser

#### 6.3. Verify Parasoft website link in footer

**File:** `tests/homepage/external.spec.ts`

**Steps:**
  1. Locate 'www.parasoft.com' link in footer
    - expect: Link should be visible and clickable
  2. Click on the Parasoft website link
    - expect: Link should navigate to http://www.parasoft.com/

### 7. Accessibility and Cross-browser

**Seed:** `tests/seed.spec.ts`

#### 7.1. Verify keyboard navigation on home page

**File:** `tests/homepage/accessibility.spec.ts`

**Steps:**
  1. Use Tab key to navigate through all focusable elements
    - expect: Navigation should follow logical order: username field > password field > login button > links
    - expect: All interactive elements should be reachable via keyboard
  2. Verify all buttons and links have visible focus indicators
    - expect: Focus states should be clearly visible
  3. Press Enter on focused button elements
    - expect: Buttons should respond to Enter key press

#### 7.2. Verify page loads without errors

**File:** `tests/homepage/accessibility.spec.ts`

**Steps:**
  1. Navigate to home page
    - expect: Page should load completely
    - expect: No JavaScript errors should appear in console
  2. Verify all images are loaded
    - expect: ParaBank logo should be visible
    - expect: Images should display without broken image indicators
  3. Verify page is responsive
    - expect: Page should adapt to different screen sizes
    - expect: Layout should remain usable on smaller screens
