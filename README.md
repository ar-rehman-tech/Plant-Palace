# 🌿 Plant Palace

Plant Palace is a responsive plant shopping website designed to provide users with a simple and attractive way to explore, search, filter, and purchase plants online.

The website includes a plant catalog, plant details, shopping cart functionality, contact form, feedback form, and informational pages.

---

## 📌 Project Overview

**Plant Palace** is a front-end web project developed using HTML, CSS, and JavaScript.

The main purpose of the project is to create an easy-to-use online platform where users can:

* Explore different plants
* Search for plants by name
* Filter plants by category
* Sort plants according to price or name
* View detailed information about plants
* Add plants to the shopping cart
* Update cart quantities
* Submit contact messages
* Submit feedback
* Learn more about Plant Palace

---

## ✨ Features

### 🏠 Home Page

* Attractive hero section
* Featured plants
* Plant shopping call-to-action
* Company introduction
* Customer testimonials
* Service highlights

### 🌱 Plant Catalog

* Complete plant collection
* Search plants by name
* Filter plants by category
* Category buttons
* Sort plants by:

  * Price: Low to High
  * Price: High to Low
  * Name: A–Z
* Plant detail modal
* No-results message

### 🛒 Shopping Cart

* Add plants to cart
* View selected plants
* Increase or decrease quantity
* Remove products
* Calculate subtotal
* Checkout section

### 📖 About Page

* Information about Plant Palace
* Company story
* Mission and values
* Plant-related information

### 📩 Contact Page

* Contact information
* Contact form
* User message submission

### ⭐ Feedback Page

* Customer feedback form
* Rating functionality
* Feedback submission interface

---

## 🗂️ Project Structure

```text
Plant Palace/
│
├── index.html
├── about.html
├── catalog.html
├── cart.html
├── contact.html
├── feedback.html
│
├── plants-data.js
├── styles.css
│
└── PlantPalace Website Design and Development SRS.pdf
```

---

## 🛠️ Technologies Used

* **HTML5** – Website structure and pages
* **CSS3** – Styling, layout, responsiveness, and animations
* **JavaScript** – Dynamic functionality and interactions
* **Bootstrap 5** – Responsive grid and UI components
* **Font Awesome** – Icons
* **Google/External Image Sources** – Plant and user images

---

## 🌿 Plant Categories

The catalog supports multiple plant categories:

* Indoor Plants
* Outdoor Plants
* Succulents
* Flowering Plants

Users can select a category to quickly find the plants they are interested in.

---

## 🔍 Search & Filtering

The catalog provides an interactive search and filtering system.

Users can:

1. Enter a plant name in the search field.
2. Select a plant category.
3. Sort the available plants.
4. View the matching results.
5. Open a plant to view additional details.

---

## 💰 Plant Information

Each plant contains information such as:

* Plant name
* Price
* Image
* Description
* Care instructions
* Origin
* Category

This information is stored inside `plants-data.js`.

---

## 💻 Installation & Setup

No special server or backend installation is required.

### Step 1: Download or Clone the Project

Clone the repository or download the project files.

### Step 2: Open the Project

Open the `Plant Palace` folder in a code editor such as Visual Studio Code.

### Step 3: Run the Website

Open `index.html` in a web browser.

For the best development experience, you can use the **Live Server** extension in Visual Studio Code.

---

## 🚀 How to Use

### Browse Plants

Go to the **Plant Catalog** from the home page and browse the available plants.

### Search

Use the search bar to find a plant by name.

### Filter

Select a category such as Indoor, Outdoor, Succulent, or Flowering.

### Sort

Use the sorting dropdown to arrange plants by price or name.

### View Details

Select a plant to open its detailed information.

### Add to Cart

Choose the desired plant and add it to the shopping cart.

### Manage Cart

From the cart page, users can:

* Change quantities
* Remove products
* Review selected plants
* View the subtotal

---

## 📱 Responsive Design

Plant Palace is designed to work across different screen sizes, including:

* Desktop computers
* Laptops
* Tablets
* Mobile phones

Bootstrap's responsive grid system along with custom CSS media queries is used to improve the layout across different devices.

---

## 🎨 Design

The website follows a modern nature-inspired design with:

* Green-themed visual elements
* Plant imagery
* Clean layouts
* Responsive cards
* Modern buttons
* Simple navigation
* User-friendly forms

---

## 📄 Pages

| Page            | Description        |
| --------------- | ------------------ |
| `index.html`    | Home page          |
| `about.html`    | About Plant Palace |
| `catalog.html`  | Plant catalog      |
| `cart.html`     | Shopping cart      |
| `contact.html`  | Contact page       |
| `feedback.html` | Customer feedback  |

---

## 📊 Data Management

Plant information is maintained in:

```text
plants-data.js
```

The JavaScript file contains the plant objects used throughout the website.

Each plant contains properties including:

```javascript
{
    id,
    name,
    price,
    image,
    description,
    care,
    origin,
    category
}
```

---

## 🔧 Customization

Developers can easily customize the website by modifying:

### Plant Data

Edit:

```text
plants-data.js
```

to add, remove, or update plants.

### Website Styling

Edit:

```text
styles.css
```

to change:

* Colors
* Fonts
* Spacing
* Layout
* Buttons
* Cards
* Responsive behavior

### Website Content

HTML files can be edited to modify page content and sections.

---

## ⚠️ Notes

* The project is primarily a front-end website.
* Plant images are loaded from external image URLs.
* Bootstrap and Font Awesome are loaded through CDN links.
* A backend/database is not required for the basic front-end functionality.
* Form submission behavior depends on the implementation provided in the project.

---

## 👥 Project Purpose

Plant Palace was developed as a web-based plant shopping interface demonstrating front-end development concepts including:

* Responsive web design
* UI/UX design
* JavaScript DOM manipulation
* Product filtering
* Product sorting
* Shopping cart functionality
* Form handling
* Multi-page website navigation

---

## 📜 License

This project is intended for educational and demonstration purposes.

---

## 🌱 Plant Palace

**Bring Nature's Beauty Into Your Home.**
