# NuancedPolitics

## Project Overview
NuancedPolitics is a web platform designed for structured political debate. It aims to foster user engagement at global, national, and local levels. Key features include a scope selection system, dynamic topic listing, structured argument pages, and real-time interactive discussion through posting, replying, and voting. AI-driven summaries of top arguments are updated in response to new posts, enhancing the platform's dynamism.

## Technologies
- Node.js with Express.js for the backend
- React.js for the frontend
- Bootstrap for styling
- Socket.io for real-time communication
- MongoDB with Mongoose ODM
- JSON Web Tokens and Bcrypt for authentication and security
- OpenAI GPT-4 API for argument summarization
- cron for scheduling tasks
- AJAX for client-side server communication
- Git for version control
- Docker for containerization and deployment

## Installation & Setup
1. Clone the repository
2. Navigate to the project directory and install dependencies:

   ```sh
   npm install
   ```

3. Start the server:

   ```sh
   npm start
   ```

4. For development mode with hot reload:

   ```sh
   npm run dev
   ```

5. Setup the `.env` file with the required environment variables:

   - `MONGO_URI`: Connection string for the MongoDB database
   - `JWT_SECRET`: Secret key for signing JSON Web Tokens

## File Structure
- `/package.json` - Contains project metadata and dependencies
- `/index.js` - The entry point for the server
- `/.gitignore` - Specifies untracked files to ignore
- `/config/db.js` - Database configuration
- `/models/User.js` - Mongoose user model
- `/routes/authRoutes.js` - Authentication-related routes
- `/middleware/auth.js` - Authentication middleware
- `/routes/protectedRoutes.js` - Routes that require authentication
- `/client` - React-based frontend of the application

## Usage
After following the installation steps, you can access the application through `http://localhost:3000` by default. Use various endpoints to register, login, view profiles, and more.

## Contributions
To contribute to this project, please create a fork, make your changes, and submit a pull request with a clear explanation of your modifications.

## License
This project is released under the MIT License.

## Contact
For support or queries, please open an issue in the repository.