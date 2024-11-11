# Block 30A


Test Account:
  firstname: anakin
  lastname: skywalker
  email: anakin@starwars.com
  password: padme

Requirements:

  Tier I - Build a basic Frontend Application
  All users should be able to:
    See all books in the library’s catalog
    View details of an individual book
    Log in to an existing account
    Register a new account

  Tier II - Logged in Functionality
  Logged in users should be able to:

    Checkout an available book
    View their account details
    Name
    Email
    Books currently checked out
    Users should be able to return books that they previously checked out


Functionality Requirements
  Routes via React Router (This is a minimum; you could have more than just these routes. These routes may be named as you wish.)
    /books - this could be the home page; this component should show all books in the library’s catalog
    /books/:id  - this component should display details of an individual book
    /login and /register (This could alternatively be displayed in the profile instead of living in its own route.)
    /account  - this component should show, at minimum:
      Username or email of logged in user
      List of all books a user has checked out (or a message indicating they have 0 books checked out if applicable)

  Unauthenticated Users should be able to:
    Observe a list of all the books in the library
    Sign up for an account with a username and password.
    Sign in using the correct username/password combination.

  Unauthenticated Users should not be able to:
    Check out or return any book
    See the account page of any user

    Authenticated Users should be able to:

      Check out an available book
      Return books they have currently checked out
      View their own account page and currently checked-out books

    Authenticated Users should not be able to:
      View the accounts of users other than themselves
      Checkout / Return books for other users

    All users should be able to:
      View a list of all the library's books
      View details of an individual book

      https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books GET

      https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/books/${bookId} GET, PATCH

      https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/register POST

      https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/login POST

      https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/users/me GET

      https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations GET

      https://fsa-book-buddy-b6e748d1380d.herokuapp.com/api/reservations/:reservationId DELETE

      