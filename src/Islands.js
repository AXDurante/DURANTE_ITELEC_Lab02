import React, { useState } from "react";
import Card from "react-bootstrap/Card";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

export function IslandsCard() {
  const [selectedIsland, setSelectedIsland] = useState(null);
  const [hoveredCard, setHoveredCard] = useState(null);

  const handleMouseEnter = (islandName) => {
    setHoveredCard(islandName);
  };

  const handleMouseLeave = () => {
    setHoveredCard(null);
  };

  const handleClick = (islandName) => {
    switch (islandName) {
      case "luzon":
        setSelectedIsland("luzon");
        break;
      case "visayas":
        setSelectedIsland("visayas");
        break;
      case "mindanao":
        setSelectedIsland("mindanao");
        break;
      default:
        setSelectedIsland(null);
        break;
    }
  };

  return (
    <div
      style={{
        background: selectedIsland
          ? `url(./islands/${selectedIsland}.jpg)`
          : "url(./islands/luzon.jpg",
        backgroundSize: "cover",
        backgroundPosition: "center",
        height: "100vh",
      }}
    >
      <Container>
        <Row
          xs={1}
          md={2}
          lg={3}
          className="g-4"
          style={{ paddingTop: "20rem", paddingLeft: "2rem" }}
        >
          <Col>
            <div
              className={`card-container ${hoveredCard === "luzon" ? "hovered" : ""}`}
              onClick={() => handleClick("luzon")}
              onMouseEnter={() => handleMouseEnter("luzon")}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            >
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  background: "url(./islands/luzon.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      marginBottom: "2rem",
                      fontSize: "30px",
                      color: "white",
                    }}
                    className="text-center"
                  >
                    Visit Luzon
                  </Card.Title>
                </Card.Body>
              </Card>
              {hoveredCard === "luzon" && (
                <div className="hovered-content">Press Me</div>
              )}
            </div>
          </Col>

          <Col>
            <div
              className={`card-container ${hoveredCard === "visayas" ? "hovered" : ""}`}
              onClick={() => handleClick("visayas")}
              onMouseEnter={() => handleMouseEnter("visayas")}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            >
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  background: "url(./islands/visayas.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      marginBottom: "2rem",
                      fontSize: "30px",
                      color: "white",
                    }}
                    className="text-center"
                  >
                    Visit Visayas
                  </Card.Title>
                </Card.Body>
              </Card>
              {hoveredCard === "visayas" && (
                <div className="hovered-content">Press Me</div>
              )}
            </div>
          </Col>

          <Col>
            <div
              className={`card-container ${hoveredCard === "mindanao" ? "hovered" : ""}`}
              onClick={() => handleClick("mindanao")}
              onMouseEnter={() => handleMouseEnter("mindanao")}
              onMouseLeave={handleMouseLeave}
              style={{ cursor: "pointer" }}
            >
              <Card
                style={{
                  width: "18rem",
                  height: "25rem",
                  background: "url(./islands/mindanao.jpg)",
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  position: "relative",
                }}
              >
                <Card.Body>
                  <Card.Title
                    style={{
                      position: "absolute",
                      bottom: "0",
                      left: "0",
                      right: "0",
                      marginBottom: "2rem",
                      fontSize: "30px",
                      color: "white",
                    }}
                    className="text-center"
                  >
                    Visit Luzon
                  </Card.Title>
                </Card.Body>
              </Card>
              {hoveredCard === "mindanao" && (
                <div className="hovered-content">Press Me</div>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
}

export default IslandsCard;
