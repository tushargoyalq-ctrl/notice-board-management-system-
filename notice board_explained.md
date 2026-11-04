# Project Explanation: College Notice Board System
**Institution:** Global Institute of Technology (GIT), Jaipur  
**Course:** Software Engineering / Web Development Practical Module  

---

## 1. Project Overview
The **College Notice Board System** is a responsive, web-based digital notice board application designed specifically for academic institutions like Global Institute of Technology (GIT), Jaipur. It replaces traditional physical notice boards by allowing students and faculty to view, search, filter, and post notices digitally in real time. Data persists locally using the browser's `localStorage` API, ensuring that notices aren't lost on page refresh.

---

## 2. File Structure & Architecture
The project is built using vanilla web technologies (HTML5, CSS3, and JavaScript) split into three core files for modularity:

* **`index.html`:** Contains the structural layout, header branding, search/filter inputs, dynamic grid container for notice cards, and interactive modal popups for viewing details and posting new notices.
* **`style.css`:** Implements a modern, professional university color theme (deep blue and slate), flexible CSS Grid/Flexbox layouts, responsive design rules, and scrollable modal styling to prevent UI overflow.
* **`script.js`:** Manages the core application logic, pre-loaded sample notices, dynamic DOM rendering, real-time search filtering, category tabs, and `localStorage` persistence.

---

## 3. Core Features & Functionality
1. **Dynamic Notice Cards:** Each notice displays category tags, department filters (CSE, AI/ML, ECE, Civil), urgency indicators (High Priority vs. Normal), publication dates, and summary text.
2. **Interactive Modals:** Clicking any notice card opens a full-detail modal view. The "Add New Notice" button opens a scrollable form modal with input validation.
3. **Real-Time Search & Category Filtering:** Users can instantly filter notices by typing keywords into the search bar or clicking category buttons (All, Academic, Exams, Events, Placements, Urgent).
4. **Local Storage Persistence:** Newly posted notices are saved in the browser's local storage, ensuring data retention across sessions.

---

## 4. How to Run the Project Locally
1. Clone or download the project files (`index.html`, `style.css`, `script.js`) into a single folder.
2. Open the folder in **Visual Studio Code**.
3. Install the **Live Server** extension in VS Code.
4. Right-click on `index.html` and select **"Open with Live Server"**.
5. The web application will launch automatically in your default web browser.

---

## 5. Viva & Submission Highlights
* **Why Vanilla JavaScript?** Chosen to demonstrate foundational DOM manipulation, event handling, and state management without heavy framework overhead.
* **UI/UX Considerations:** Custom scrollable modal containers (`overflow-y: auto`) ensure form submit buttons remain accessible across all screen heights.