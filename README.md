# School Locker 2024

## Educational App - MVP Development Steps

### Phase 1: Foundation and User Interface (UI)

#### Project Setup:

- [x] Initialize a new Next.js project using create-t3-app.
- [x] Set up version control with Git.
- [ ] Configure deployment with Vercel (if using Git version control).

#### Basic UI Scaffolding:

- [ ] Design and implement core user interfaces using Next.js components.
- [ ] Create mock data to populate UI elements initially.
- [ ] User Authentication (w/ Clerk):
- [ ] Integrate Clerk for user registration, login, and authentication.
- [ ] Implement user profile management and authorization checks.

### Phase 2: Core Functionality - Tests and Books

#### Test Creation:

- [ ] Develop UI elements for users to select subjects and create tests.
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

- [ ]User-created test sharing (with access control).
- [ ] Test taking functionality with answer submission and scoring.
- [ ] Analytics and reporting for tests and user activity (consider Posthog integration).
- [ ] User progress tracking for completed tests.
