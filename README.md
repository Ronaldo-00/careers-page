# Careers-page

A React-based application showcasing job listings with filterable and expandable job details, including a responsive design and navigation. This application is designed to provide an interactive and informative career section.

## Table of Contents

- [Project Structure](#project-structure)
- [Components](#components)
- [Getting Started](#getting-started)
- [Usage](#usage)
- [Features](#features)

## Project Structure
careers-page/<br>
├── src/<br>
│ ├── assets/<br>
│ │ └── figma.png<br>
│ ├── components/<br>
│ │ ├── Container.js<br>
│ │ ├── Footer.js<br>
│ │ ├── Main.js<br>
│ │ ├── TruncatedText.js<br>
│ │ └── ScrollToTop/<br>
│ │ └── ScrollToTop.js<br>
│ ├── jobs.json<br>
│ ├── App.js<br>
│ └── index.js<br>
├── public/<br>
│ └── index.html<br>
├── package.json<br>
└── README.md<br>



## Components

### Main.js

This component renders the main navigation bar and banner section with a sticky header functionality. It includes a responsive navigation bar that toggles visibility based on user interaction.

#### Key Features

- Sticky header that becomes fixed on scrolling down.
- Mobile-friendly navigation toggle.
- Logo and site title display.

### Container.js

This component handles the display and filtering of job listings. It adapts its layout based on the screen size to ensure a seamless user experience on both desktop and mobile devices.

#### Key Features

- Job search functionality.
- Responsive design with accordion-style job details on mobile view.
- Automatic selection of the first job in the list on larger screens.

### TruncatedText.js

This component truncates long text descriptions to a specified word limit, providing a cleaner and more readable UI.

#### Key Features

- Customizable word limit.
- Ellipsis (`...`) appended to indicate truncation.

### ScrollToTop.js

This component provides a button that, when clicked, scrolls the page smoothly back to the top.

#### Key Features

- Appears when the user scrolls down.
- Smooth scrolling effect.

### Footer.js

This component renders the footer of the page with a call-to-action section and a copyright notice.

#### Key Features

- Call-to-action with customizable text and link.
- Copyright information.

## Getting Started

### Prerequisites

- Node.js (v14 or higher)
- npm or yarn

### Installation

1. Clone the repository:

   ```bash
   git clone https://github.com/Ronaldo-00/careers-page.git
   cd careers-page

2. Install dependencies:

```
npm install
# or
yarn install
```

3. Start the development server:

```
npm start
# or
yarn start

```
4. Open your browser and navigate to http://localhost:3000.
   
## Usage

- Use the search bar to filter job listings.
- On mobile devices, tap a job to expand and view more details.
- On desktop, click a job to select it and view its details on the right side.
- Click the "Apply Now" button in the job details section to proceed with job applications.
  
## Features

- Responsive Design: Adapts layout based on screen size for optimal viewing on mobile and desktop.
- Filtering and Search: Easily search and filter job listings based on keywords.
- Expandable Job Details: View detailed information about a job with a single click on mobile.
- Sticky Navigation: Header sticks to the top of the page on scroll for easy access.
- Scroll to Top: Quickly return to the top of the page using the scroll-to-top button.