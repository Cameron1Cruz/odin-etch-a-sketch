# Etch-a-Sketch

This project is part of the Foundations Course from The Odin Project.  
It is a browser-based drawing application built with HTML, CSS (Flexbox), and JavaScript.

The app generates a grid of squares dynamically and allows the user to draw by hovering over the cells, creating a pixelated sketch effect.

---

## Project Overview

The Etch-a-Sketch app demonstrates DOM manipulation and event-driven programming by creating and managing a grid entirely with JavaScript.

Users can resize the grid using a button prompt, which regenerates the drawing area while maintaining the same overall dimensions.

---

## Features

- Dynamically generated grid (default 16×16)
- Hover drawing effect
- Grid resizing via user input (up to 100×100)
- Grid regenerates within a fixed 960×960 drawing area
- Built using Flexbox (no CSS Grid)

---

## How It Works

1. The page loads and generates a 16×16 grid using JavaScript
2. Each square listens for a mouseover event
3. Hovering over a square changes its background color, creating a drawing effect
4. Clicking the resize button prompts the user for a new grid size
5. The existing grid is cleared and rebuilt with the new dimensions

---

## Skills Demonstrated

### JavaScript
- DOM selection and manipulation
- Creating and appending elements dynamically
- Event listeners
- Loops and functions
- Input validation

### CSS
- Flexbox layout
- Box sizing and layout control

### Development Workflow
- Git version control
- Incremental commits
- Feature implementation

---

## Project Structure

```
.
├── index.html
├── style.css
├── script.js
└── README.md
```

---

## Getting Started

### Clone the repository

```bash
git clone https://github.com/Cameron1Cruz/odin-etch-a-sketch
```
