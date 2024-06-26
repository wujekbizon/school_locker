# School Locker 2024

## Educational App - MVP Development Steps

### Phase 1: Foundation and User Interface (UI)

#### Project Setup:

- [x] Initialize a new Next.js project using create-t3-app.
- [x] Set up version control with Git.
- [x] Configure deployment with Vercel.

#### Basic UI Scaffolding:

- [ ] Design and implement core user interfaces using Next.js components.
  - [ ] Main Page (Dashboard):
    - [x] Top Navigation Bar (Remains constant throughout the user journey)
      - [x] App Logo: Prominently displayed on the left side for brand recognition.
      - [x] Sign In/Sign Out Button: Clearly visible on the right for user authentication.
      - [x] (Optional) Search Bar: Allow users to search for specific subjects or tests (if applicable).
    - [x] Left Side Panel (Remains constant throughout the user journey, providing navigation options.):
      - [x] Create custom button component
      - [x] "Dashboard" button to return to the main page.
      - [x] (Optional, if applicable) "My Tests" button to view user-created tests.
      - [x] "Logout" button to log out of the user account(Optional).
      - [x] Implement button that toggle on/off side-panel
    - [ ] Main Panel:
      - [x] Welcome Message (Non-Logged-in Users): Briefly introduce the app's purpose and encourage user registration.
      - [ ] User Summary (Logged-in Users):
        - [x] Display user profile information (name, avatar, etc.).
        - [ ] Show recently created tests or accessed books (if the feature is implemented).
        - [x] (Optional) Progress indicators: Visualize user's progress in completed tests or completed books (badges, points, etc.).
      - [ ] Featured Content (Optional):
        - [ ] Showcase created test collections for popular subjects or age groups.
        - [ ] Highlight newly added digital books to the library (if implemented).
      - [ ] Call to Action Buttons:
        - [x] "Create Test" button to initiate test creation.
        - [ ] "Explore Library" button (if implemented) to navigate to the digital book collection.
    - [ ] Framer Motion animations
- [x] User Authentication (w/ Clerk):
- [x] Create mock data to populate UI elements initially.
- [x] Integrate Clerk for user registration, login, and authentication.
- [x] Add Zustand to manage global state
- [ ] Implement user profile management and authorization checks.
- [x] Enable caching with TanStack Query

### Phase 2: Core Functionality - Tests and Books

#### Test Creation:

- [x] Reshape Drizzle Schema for Tests.
- [x] Develop UI elements for users to select subjects and create tests.
- [x] Learn Page (This page would be reached by clicking the "Learn" button on the side menu.):
  - [x] List all the categories and tests
  - [x] Create categories or subcategories to group related subjects if we have a large number.
  - [x] Filter through the test based on different category
  - [x] Subject List: Display a well-organized list of subjects relevant to creating tests.
    - [x] Separate page for subjects
    - [x] Custom subject cards
    - [x] Populate cards with data of subjects retrieved from database.
  - [x] Each subject can have a button leading to the start test page.
- [ ] Test Creation Page (Accessible after selecting a subject from the previous page.):
  - [ ] Main Panel:
    - [ ] Test Details Section:
      - [ ] Option to select target age group or difficulty level (if applicable).
      - [ ] (Optional) Description field to add a short overview of the test.
    - [ ] Question Creation Section:
      - [ ] Allow adding multiple questions.
      - [ ] For each question:
        - [x] Text area for entering the question text.
        - [ ] Option to add different question types (multiple choice, true/false, short answer, etc.).
        - [x] Multiple input fields for answer choices (depending on question type).
        - [x] Ability to mark one answer as the correct one.
        - [ ] Add/Remove buttons for managing questions.
    - [ ] Action Buttons:
      - [ ] "Save Test" button to save the created test with its details and questions.
      - [ ] (Optional) "Preview Test" button to allow users to see a preview of the created test before saving.
- [ ] Implement logic for users to add questions, answer choices, and mark correct answers.
- [ ] Consider initial support for text-based questions and answers.

- [x] Database (Vercel Postgres - Development):
  - [x] Set up a Vercel Postgres database to store test data (questions, answers, user associations).
  - [x] Establish connection between your Next.js application and the database.

#### User-Created Test Storage:

- [ ] Develop logic to store user-created test data (including text content) in the database.
- [ ] Implement functionalities for users to access, view, and manage their created tests.

#### Documentation

- [x] Create Documentation page
- [x] Add how to prepare your test data file

### Phase 3: Advanced Features (Consider for later updates):

#### Image-Based Tests (Optional):

- [ ] Integrate image upload functionality using AWS S3.
- [ ] Explore cloud-based services like Amazon Rekognition and AWS Textract for image recognition and text extraction (optional, for advanced parsing).
- [ ] Develop logic to handle image-based test creation, potentially with extracted text for answer options.

#### Digital Book Library (Optional):

- [ ] Integrate AWS S3 for storing digital copies of books (PDFs and other documents).
- [ ] Choose an implementation for reading PDFs within the app (direct embedding or third-party library).
- [ ] Consider text extraction (AWS Textract) for text-based search functionalities within books (optional).

#### Additional Features:

- [ ] User-created test sharing (with access control).
- [ ] Test taking functionality with answer submission and scoring.
- [ ] Analytics and reporting for tests and user activity (consider Posthog integration).
- [ ] User progress tracking for completed tests.
- [ ] Chat Rooms
