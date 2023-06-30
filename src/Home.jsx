import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";

export default function BlogsComponent() {
  const [blogs, setBlogs] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  const getData = async () => {
    try {
      const incomingData = await fetch(
        "https://jsonplaceholder.typicode.com/posts"
      );
      const formattedData = await incomingData.json();
      setBlogs(formattedData);
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <div>
      <Container>
        <h1 className="color='secondary' text-center mt-3 pt-3">Blogs</h1>
        {blogs.map((blog, i) => {
          return (
            <Card key={i} className="card">
              <Card.Body>
                <Card.Title>Blog number {i + 1}</Card.Title>
                <hr />
                <Card.Title>{blog.title}</Card.Title>
                <Card.Text>{blog.body}</Card.Text>
                <Button style={{ backgroundColor: "#0000FF", color: "black" }}>
                  Show More
                </Button>
              </Card.Body>
            </Card>
          );
        })}
      </Container>
    </div>
  );
}
