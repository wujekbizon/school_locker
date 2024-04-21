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
    - [ ] Left Side Panel (Remains constant throughout the user journey, providing navigation options.):
      - [x] Create custom button component
      - [x] "Dashboard" button to return to the main page.
      - [x] (Optional, if applicable) "My Tests" button to view user-created tests.
      - [x] "Logout" button to log out of the user account(Optional).
      - [ ] Implement button that toggle on/off side-panel
    - [ ] Main Panel:
      - [x] Welcome Message (Non-Logged-in Users): Briefly introduce the app's purpose and encourage user registration.
      - [ ] User Summary (Logged-in Users):
        - [x] Display user profile information (name, avatar, etc.).
        - [ ] Show recently created tests or accessed books (if the feature is implemented).
        - [ ] (Optional) Progress indicators: Visualize user's progress in completed tests or completed books (badges, points, etc.).
      - [ ] Featured Content (Optional):
        - [ ] Showcase curated test collections for popular subjects or age groups.
        - [ ] Highlight newly added digital books to the library (if implemented).
      - [ ] Call to Action Buttons:
        - [ ] "Create Test" button to initiate test creation.
        - [ ] "Explore Library" button (if implemented) to navigate to the digital book collection.
    - [ ] Framer Motion aniamtions
- [x] User Authentication (w/ Clerk):
- [ ] Create mock data to populate UI elements initially.
- [x] Integrate Clerk for user registration, login, and authentication.
- [ ] Implement user profile management and authorization checks.

### Phase 2: Core Functionality - Tests and Books

#### Test Creation:

- [ ] Develop UI elements for users to select subjects and create tests.
  - [ ] Subject Selection Page (This page would be reached by clicking the "Create Test" button on the main page.):
    - [ ] Subject List: Display a well-organized list of subjects relevant to creating tests.
    - [ ] Create categories or subcategories to group related subjects if we have a large number.
    - [ ] Each subject can be a clickable element leading to the test creation page.
  - [ ] Test Creation Page (Accessible after selecting a subject from the previous page.):
    - [ ] Main Panel:
      - [ ] Test Details Section:
        - [ ] Input field for the test title.
        - [ ] Option to select target age group or difficulty level (if applicable).
        - [ ] (Optional) Description field to add a short overview of the test.
      - [ ] Question Creation Section:
        - [ ] Allow adding multiple questions.
        - [ ] For each question:
          - [ ] Text area for entering the question text.
          - [ ] Option to add different question types (multiple choice, true/false, short answer, etc.).
          - [ ] Multiple input fields for answer choices (depending on question type).
          - [ ] Ability to mark one answer as the correct one.
          - [ ] Add/Remove buttons for managing questions.
      - [ ] Action Buttons:
        - [ ] "Save Test" button to save the created test with its details and questions.
        - [ ] (Optional) "Preview Test" button to allow users to see a preview of the created test before saving.
- [ ] Implement logic for users to add questions, answer choices, and mark correct answers.
- [ ] Consider initial support for text-based questions and answers.
- [ ] Database (Vercel Postgres - Development):
- [ ] Set up a Vercel Postgres database to store test data (questions, answers, user associations).
- [ ] Establish connection between your Next.js application and the database.

#### User-Created Test Storage:

- [ ] Develop logic to store user-created test data (including text content) in the database.
- [ ] Implement functionalities for users to access, view, and manage their created tests.

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
