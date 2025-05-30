[![Open in Visual Studio Code](https://classroom.github.com/assets/open-in-vscode-2e0aaae1b6195c2367325f4f02e2d04e9abb55f0b24a779b69b11b9e10269abc.svg)](https://classroom.github.com/online_ide?assignment_repo_id=19671794&assignment_repo_type=AssignmentRepo)
# MongoDB Fundamentals Assignment

This assignment focuses on learning MongoDB fundamentals including setup, CRUD operations, advanced queries, aggregation pipelines, and indexing.


## How to run my scripts
# 📚 PLP Bookstore MongoDB Project

This project demonstrates basic and advanced MongoDB operations using a sample `books` collection for a fictional bookstore database.

## 🛠️ Project Setup

### Option 1: Run Locally with MongoDB Community Edition

1. Make sure MongoDB is installed and running on your local machine.
2. Open a terminal and navigate to the folder containing `insert_books.js`.
3. Run the following command to populate the database:
   ```bash
   node insert_books.js

Option 2: Use MongoDB Atlas (Cloud)
Set up a free cluster at MongoDB Atlas.

Replace the uri in insert_books.js with your cluster connection string.

Run the script using:

node insert_books.js

📂 Files Included
insert_books.js – Script to insert sample book data into the books collection.

queries.js – Contains all the MongoDB queries used in this project:

CRUD operations

Advanced filtering, projection, sorting, pagination

Aggregation pipelines

Indexing and performance analysis

README.md – This file (how to run and understand the project).

screenshot.png – MongoDB Compass or Atlas screenshot showing the populated collection.

💻 How to Run Queries
Start the Mongo shell (mongosh):
mongosh

Switch to the correct database:
use plp_bookstore

Copy and paste the content of queries.js into the shell or run them one by one as needed.

❗️Note: Comments in queries.js will be ignored by mongosh.

✅ Expected Outcome
A working MongoDB database named plp_bookstore.

A populated collection named books.

Functional MongoDB queries demonstrating CRUD, advanced operations, aggregation, and indexing.

Clean code and organized scripts ready for grading.

👩🏽‍💻 Author
Elidy Muriithi 💖
MongoDB Assignment for PLP

## Assignment Overview

You will:
1. Set up a MongoDB database
2. Perform basic CRUD operations
3. Write advanced queries with filtering, projection, and sorting
4. Create aggregation pipelines for data analysis
5. Implement indexing for performance optimization

## Getting Started

1. Accept the GitHub Classroom assignment invitation
2. Clone your personal repository that was created by GitHub Classroom
3. Install MongoDB locally or set up a MongoDB Atlas account
4. Run the provided `insert_books.js` script to populate your database
5. Complete the tasks in the assignment document

## Files Included

- `Week1-Assignment.md`: Detailed assignment instructions
- `insert_books.js`: Script to populate your MongoDB database with sample book data

## Requirements

- Node.js (v18 or higher)
- MongoDB (local installation or Atlas account)
- MongoDB Shell (mongosh) or MongoDB Compass

## Submission

Your work will be automatically submitted when you push to your GitHub Classroom repository. Make sure to:

1. Complete all tasks in the assignment
2. Add your `queries.js` file with all required MongoDB queries
3. Include a screenshot of your MongoDB database
4. Update the README.md with your specific setup instructions

## Resources

- [MongoDB Documentation](https://docs.mongodb.com/)
- [MongoDB University](https://university.mongodb.com/)
- [MongoDB Node.js Driver](https://mongodb.github.io/node-mongodb-native/) 