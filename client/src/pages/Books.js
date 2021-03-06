import React, { Component } from "react";
import Jumbotron from "../components/Jumbotron";
import Container from "../components/Container";
import Row from "../components/Row";
import Col from "../components/Col";
import Card from "../components/Card";
import SearchForm from "../components/SearchForm";
import BookDetail from "../components/BookDetail";
import API from "../utils/API";

class Books extends Component {
  state = {
    books: [],
    search: ""
  };

  searchBooks = query => {
    API.searchBooks(query)
      .then(res =>
        this.setState(
          {
            books: res.data.items,
            search: ""
          },
          console.log(res.data.items)
        )
      )
      .catch(err => console.log(err));
  };

  handleInputChange = event => {
    const value = event.target.value;
    const name = event.target.name;
    this.setState({
      [name]: value
    });
  };

  handleFormSubmit = event => {
    event.preventDefault();
    this.searchBooks(this.state.search);
  };

  deleteBook = id => {
    API.deleteBook(id)
      .then(res => console.log(res.status))
      .catch(err => console.log(err));
  };

  handleSaveBook = bookData => {
    API.saveBook(bookData)
      .then(res => alert("Book Saved!"))
      .catch(err => console.log(err));
  };

  render() {
    return (
      <Container>
        <Row>
          <Col size="md-12">
            <Jumbotron />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            <SearchForm
              value={this.state.search}
              handleInputChange={this.handleInputChange}
              handleFormSubmit={this.handleFormSubmit}
            />
          </Col>
        </Row>
        <Row>
          <Col size="md-12">
            {this.state.books.length ? (
              <Card heading="Search Results">
                {this.state.books.map(book => (
                  <BookDetail
                    key={book.id}
                    src={
                      book.volumeInfo.imageLinks
                        ? book.volumeInfo.imageLinks.thumbnail
                        : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png"
                    }
                    title={
                      book.volumeInfo.title
                        ? book.volumeInfo.title
                        : "No Title Available"
                    }
                    authors={
                      book.volumeInfo.authors
                        ? book.volumeInfo.authors.join(", ")
                        : "No Authors Available"
                    }
                    date={
                      book.volumeInfo.publishedDate
                        ? book.volumeInfo.publishedDate
                        : "No Publish Date Available"
                    }
                    description={
                      book.volumeInfo.description
                        ? book.volumeInfo.description
                        : "No Description Available"
                    }
                    link={
                      book.volumeInfo.infoLink
                        ? book.volumeInfo.infoLink
                        : "No Link Available"
                    }
                    handleSaveBook={() =>
                      this.handleSaveBook({
                        title: book.volumeInfo.title
                          ? book.volumeInfo.title
                          : "No Title Available",
                        src: book.volumeInfo.imageLinks
                          ? book.volumeInfo.imageLinks.thumbnail
                          : "http://icons.iconarchive.com/icons/paomedia/small-n-flat/128/book-icon.png",
                        authors: book.volumeInfo.authors
                          ? book.volumeInfo.authors.join(", ")
                          : "No Authors Available",
                        date: book.volumeInfo.publishedDate
                          ? book.volumeInfo.publishedDate
                          : "No Publish Date Available",
                        description: book.volumeInfo.description
                          ? book.volumeInfo.description
                          : "No Description Available",
                        link: book.volumeInfo.infoLink
                          ? book.volumeInfo.infoLink
                          : "No Link Available"
                      })
                    }
                  />
                ))}
              </Card>
            ) : (
              <Card heading="Search Results" />
            )}
          </Col>
        </Row>
      </Container>
    );
  }
}

export default Books;
