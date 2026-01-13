// -------------------------------
// Static data representing readings
// -------------------------------
// Each object represents ONE reading of a book.
// The book itself is nested, because a book can
// be read multiple times across different years.

const readings = [
    {
        id: 1,
        book: {
            title: "The Pragmatic Programmer",
            authors: ["Andrew Hunt", "David Thomas"]
        },
        status: "Finished",
        rating: 5,
        notes: "Clear, practical advice for software development."
    },
    {
        id: 2,
        book: {
            title: "Clean Code",
            authors: ["Robert C. Martin"]
        },
        status: "Reading",
        rating: null,
        notes: "Focus on readability and maintainability."
    },
    {
        id: 3,
        book: {
            title: "Designing Data-Intensive Applications",
            authors: ["Martin Kleppmann"]
        },
        status: "Planned",
        rating: null,
        notes: "Recommended for understanding modern system design."
    }
];
