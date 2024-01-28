class Movie {
  constructor(title, availableCopies) {
    this.title = title;
    this.availableCopies = availableCopies;
  }
}

class Person {
  constructor(name) {
    this.name = name;
    this.rentedMovies = [];
  }

  rent(movie) {
    if (movie.availableCopies > 0) {
      this.rentedMovies.push(movie);
      console.log(`${this.name} has rented ${movie.title}`);
    } else {
      console.log(`Sorry, ${movie.title} is not available`);
    }
  }
}

class Cinema {
  constructor() {
    this.movies = [];
  }

  addMovie(movie) {
    this.movies.push(movie);
  }
}

const cinema = new Cinema();

const moviePicked = new Movie("Anatomy of a fall", 4);

cinema.addMovie(moviePicked);

const person = new Person("Adetola");

person.rent(moviePicked);
