# End-to-End Test Plan - Project

## Application Overview

This comprehensive test plan covers three web applications with critical user workflows: VWO Login platform testing for authentication with various input scenarios, The-Internet Login testing for user authentication and session management, and The-Internet Checkboxes testing for checkbox interaction and state management. These tests verify core functionality, input validation, error handling, and user workflow completion.

## Test Scenarios

### 1. VWO Login Tests

**Seed:** `tests/vwo-login/seed.spec.ts`

#### 1.1. VWO Login - Valid Credentials

**File:** `tests/vwo-login/valid-login.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/#/login
    - expect: Login page is displayed
    - expect: Email input field is visible
    - expect: Password input field is visible
    - expect: Sign in button is visible
  2. Verify all form elements are present: Email input, Password input, Sign in button, Forgot Password link, Remember me checkbox, and social login options
    - expect: All form elements are visible and properly formatted
  3. Click on the Email address input field and enter a valid email address (test@example.com or use valid test credentials)
    - expect: Email is entered in the input field
    - expect: No validation error is displayed
  4. Click on the Password input field and enter a valid password
    - expect: Password is entered in the input field
    - expect: Password is masked with dots or asterisks
  5. Verify the 'Remember me' checkbox is present and uncheck it if needed
    - expect: Remember me checkbox is visible and interactive
  6. Click the 'Sign in' button
    - expect: User is authenticated and redirected to the VWO dashboard or home page
    - expect: No error messages are displayed

#### 1.2. VWO Login - Invalid Email Format

**File:** `tests/vwo-login/invalid-email.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/#/login
    - expect: Login page is displayed with empty form fields
  2. Click on the Email address input field and enter an invalid email format (e.g., 'invalidemail' without @domain)
    - expect: Email is entered in the input field
  3. Click on the Password input field and enter any password
    - expect: Password is entered successfully
  4. Click the 'Sign in' button
    - expect: An error message is displayed indicating invalid email format
    - expect: User remains on the login page
    - expect: Email field is highlighted or marked as invalid

#### 1.3. VWO Login - Wrong Password

**File:** `tests/vwo-login/wrong-password.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/#/login
    - expect: Login page is displayed with empty form fields
  2. Click on the Email address input field and enter a valid email address
    - expect: Email is entered in the input field
  3. Click on the Password input field and enter an incorrect/wrong password
    - expect: Password is entered and masked
  4. Click the 'Sign in' button
    - expect: Authentication fails
    - expect: An error message is displayed (e.g., 'Invalid credentials' or 'Email ID / Password is invalid')
    - expect: User remains on the login page
    - expect: Password field is cleared or remains visible

#### 1.4. VWO Login - Empty Email Field

**File:** `tests/vwo-login/empty-email.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/#/login
    - expect: Login page is displayed with empty form fields
  2. Leave the Email address input field empty and click on the Password input field
    - expect: Email field remains empty
  3. Enter a password in the Password input field
    - expect: Password is entered and masked
  4. Click the 'Sign in' button
    - expect: Form validation is triggered
    - expect: An error message is displayed indicating email is required
    - expect: Email field is highlighted or marked as invalid
    - expect: User remains on the login page

#### 1.5. VWO Login - Empty Password Field

**File:** `tests/vwo-login/empty-password.spec.ts`

**Steps:**
  1. Navigate to https://app.vwo.com/#/login
    - expect: Login page is displayed with empty form fields
  2. Click on the Email address input field and enter a valid email address
    - expect: Email is entered in the input field
  3. Leave the Password input field empty and click elsewhere on the form
    - expect: Email field contains valid email
    - expect: Password field remains empty
  4. Click the 'Sign in' button
    - expect: Form validation is triggered
    - expect: An error message is displayed indicating password is required
    - expect: Password field is highlighted or marked as invalid
    - expect: User remains on the login page

### 2. The-Internet Login Tests

**Seed:** `tests/internet-login/seed.spec.ts`

#### 2.1. The-Internet Login - Valid Credentials

**File:** `tests/internet-login/valid-login.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/login
    - expect: Login page is displayed
    - expect: Page title is 'The Internet'
    - expect: Heading 'Login Page' is visible
    - expect: Instructions describing valid credentials are displayed
  2. Verify the form structure: Username input field and Password input field are present
    - expect: Username input field is visible
    - expect: Password input field is visible
    - expect: Login button is visible
  3. Click on the Username input field and enter 'tomsmith'
    - expect: Username 'tomsmith' is entered in the field
  4. Click on the Password input field and enter 'SuperSecretPassword!'
    - expect: Password is entered and masked in the field
  5. Click the 'Login' button
    - expect: Authentication succeeds
    - expect: User is redirected to the secure area page
    - expect: A success message is displayed indicating user is logged in
    - expect: URL changes to the secure/authenticated page

#### 2.2. The-Internet Login - Invalid Username

**File:** `tests/internet-login/invalid-username.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/login
    - expect: Login page is displayed with empty form fields
  2. Click on the Username input field and enter an invalid username (e.g., 'wronguser')
    - expect: Username is entered in the field
  3. Click on the Password input field and enter the correct password 'SuperSecretPassword!'
    - expect: Password is entered and masked
  4. Click the 'Login' button
    - expect: Authentication fails
    - expect: An error message is displayed (e.g., 'Your username is invalid!' or similar)
    - expect: User remains on the login page
    - expect: Form fields are cleared or the error is highlighted

#### 2.3. The-Internet Login - Wrong Password

**File:** `tests/internet-login/wrong-password.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/login
    - expect: Login page is displayed with empty form fields
  2. Click on the Username input field and enter the correct username 'tomsmith'
    - expect: Username is entered in the field
  3. Click on the Password input field and enter an incorrect password (e.g., 'wrongpassword')
    - expect: Password is entered and masked
  4. Click the 'Login' button
    - expect: Authentication fails
    - expect: An error message is displayed (e.g., 'Your password is invalid!' or similar)
    - expect: User remains on the login page
    - expect: Username and password fields are cleared or the error is highlighted

#### 2.4. The-Internet Login/Logout Flow

**File:** `tests/internet-login/login-logout-flow.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/login
    - expect: Login page is displayed
  2. Enter valid credentials: Username 'tomsmith' and Password 'SuperSecretPassword!'
    - expect: Both fields are populated with correct values
  3. Click the 'Login' button and wait for page to load
    - expect: User is successfully authenticated
    - expect: User is redirected to the secure/authenticated page
    - expect: Success message is displayed
    - expect: A 'Logout' button or link is visible
  4. Verify that the user is in the authenticated/secure area by checking the page content
    - expect: Secure page displays user has logged in successfully
    - expect: Page shows welcome message or user information
  5. Click the 'Logout' button or link
    - expect: User is logged out
    - expect: User is redirected back to the login page
    - expect: Login form is displayed again with empty fields
  6. Verify that the user is no longer authenticated by checking if login page is displayed
    - expect: Login page is displayed
    - expect: User cannot access the secure area without logging in again

### 3. The-Internet Checkboxes Tests

**Seed:** `tests/internet-checkboxes/seed.spec.ts`

#### 3.1. The-Internet Checkboxes - Check Unchecked Checkbox

**File:** `tests/internet-checkboxes/check-unchecked.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/checkboxes
    - expect: Checkboxes page is displayed
    - expect: Page title is 'The Internet'
    - expect: Heading 'Checkboxes' is visible
  2. Verify the initial state of checkboxes: Checkbox 1 is unchecked, Checkbox 2 is checked
    - expect: Checkbox 1 is unchecked (empty square)
    - expect: Checkbox 2 is checked (marked with checkmark)
  3. Click on Checkbox 1 (the unchecked checkbox)
    - expect: Checkbox 1 state changes to checked
    - expect: A checkmark or fill appears in Checkbox 1
    - expect: Checkbox 2 remains checked
  4. Verify the final state after clicking
    - expect: Checkbox 1 is now checked
    - expect: Checkbox 2 is still checked
    - expect: Both checkboxes are in the checked state

#### 3.2. The-Internet Checkboxes - Uncheck Checked Checkbox

**File:** `tests/internet-checkboxes/uncheck-checked.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/checkboxes
    - expect: Checkboxes page is displayed
    - expect: Checkbox 1 is unchecked
    - expect: Checkbox 2 is checked
  2. Click on Checkbox 2 (the checked checkbox)
    - expect: Checkbox 2 state changes from checked to unchecked
    - expect: The checkmark or fill is removed from Checkbox 2
    - expect: Checkbox 1 remains unchecked
  3. Verify the final state after clicking
    - expect: Checkbox 1 is unchecked
    - expect: Checkbox 2 is now unchecked
    - expect: Both checkboxes are in the unchecked state

#### 3.3. The-Internet Checkboxes - Check All Checkboxes

**File:** `tests/internet-checkboxes/check-all.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/checkboxes
    - expect: Checkboxes page is displayed
    - expect: Initial state: Checkbox 1 unchecked, Checkbox 2 checked
  2. Click on Checkbox 1 to check it
    - expect: Checkbox 1 becomes checked
    - expect: Both checkboxes are now checked
  3. Verify that Checkbox 2 is still checked
    - expect: Checkbox 1 is checked
    - expect: Checkbox 2 is checked
    - expect: Both checkboxes display checked state
  4. Confirm both checkboxes are enabled and in checked state
    - expect: All checkboxes on the page are checked
    - expect: Each checkbox displays a visible checkmark or fill

#### 3.4. The-Internet Checkboxes - Uncheck All Checkboxes

**File:** `tests/internet-checkboxes/uncheck-all.spec.ts`

**Steps:**
  1. Navigate to https://the-internet.herokuapp.com/checkboxes
    - expect: Checkboxes page is displayed
    - expect: Initial state: Checkbox 1 unchecked, Checkbox 2 checked
  2. Click on Checkbox 2 to uncheck it
    - expect: Checkbox 2 becomes unchecked
    - expect: Checkbox 1 remains unchecked
  3. Verify that both checkboxes are now unchecked
    - expect: Checkbox 1 is unchecked (empty)
    - expect: Checkbox 2 is unchecked (empty)
    - expect: Neither checkbox displays a checkmark or fill
  4. Confirm all checkboxes are disabled/unchecked
    - expect: All checkboxes on the page are unchecked
    - expect: No checkbox displays a checkmark
