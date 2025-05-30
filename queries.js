// Task 2: Basic CRUD Operations Queries for MongoDB

// 1. Find all books in a specific genre (e.g., "Fiction")
db.books.find({ genre: "Fiction" });

// 2. Find books published after a certain year (e.g., after 1950)
db.books.find({ published_year: { $gt: 1950 } });

// 3. Find books by a specific author (e.g., "George Orwell")
db.books.find({ author: "George Orwell" });

// 4. Update the price of a specific book (e.g., update price of "1984" to 12.50)
db.books.updateOne(
  { title: "1984" },
  { $set: { price: 12.50 } }
);

// 5. Delete a book by its title (e.g., delete "The Alchemist")
db.books.deleteOne({ title: "The Alchemist" });


// Task 3: Advanced Queries for MongoDB

// 1. Find books that are both in stock and published after 2010
db.books.find(
  { in_stock: true, published_year: { $gt: 2010 } }
);

// 2. Use projection to return only the title, author, and price fields
// Example: find all books but show only those fields
db.books.find(
  {},  // no filter, get all books
  { title: 1, author: 1, price: 1, _id: 0 }  // projection, exclude _id
);

// 3. Sorting books by price in ascending order
db.books.find().sort({ price: 1 });

// 4. Sorting books by price in descending order
db.books.find().sort({ price: -1 });

// 5. Pagination: Limit 5 books per page, skipping first 5 (page 2)
db.books.find().skip(5).limit(5);

// 6. Pagination: Limit 5 books per page, skipping first 10 (page 3)
db.books.find().skip(10).limit(5);


// Task 4: Aggregation Pipeline Queries for MongoDB

// 1. Calculate the average price of books by genre
db.books.aggregate([
  {
    $group: {
      _id: "$genre",
      averagePrice: { $avg: "$price" }
    }
  },
  {
    $project: {
      genre: "$_id",
      averagePrice: 1,
      _id: 0
    }
  }
]);

// 2. Find the author with the most books in the collection
db.books.aggregate([
  {
    $group: {
      _id: "$author",
      bookCount: { $sum: 1 }
    }
  },
  {
    $sort: { bookCount: -1 } // Sort descending by count
  },
  {
    $limit: 1 // Return only the top author
  },
  {
    $project: {
      author: "$_id",
      bookCount: 1,
      _id: 0
    }
  }
]);

// 3. Group books by publication decade and count them
db.books.aggregate([
  {
    $group: {
      _id: {
        $concat: [
          { $substr: [{ $subtract: [ "$published_year", { $mod: [ "$published_year", 10 ] } ] }, 0, 4] },
          "s"
        ]
      },
      count: { $sum: 1 }
    }
  },
  {
    $project: {
      decade: "$_id",
      count: 1,
      _id: 0
    }
  },
  {
    $sort: { decade: 1 }
  }
]);


// Task 5: Indexing in MongoDB

// 1. Create an index on the title field for faster searches
db.books.createIndex({ title: 1 });

// 2. Create a compound index on author and published_year
db.books.createIndex({ author: 1, published_year: -1 });

// 3. Use explain() method to demonstrate performance improvement

// Example: Find books by title with explain()
db.books.find({ title: "1984" }).explain("executionStats");

// Example: Find books by author and published_year with explain()
db.books.find({ author: "George Orwell", published_year: { $gt: 1940 } }).explain("executionStats");
