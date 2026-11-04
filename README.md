# 📌 College Notice Board System

An interactive, responsive, and persistent **Digital Notice Board Web Application** developed for **Global Institute of Technology (GIT), Jaipur**. 

This system allows students, faculty, and administrative staff to view, search, filter, and post official college notices in real time without needing a backend server or database setup.

---

## 🚀 Key Features

* **Real-time Search Bar:** Instantly filter notices by title, department name, or description keywords.
* **Category Filtering:** Quickly filter notices using interactive tabs (**All**, **Academic**, **Exams**, **Events**, **Placements**, **Urgent**).
* **Urgency & Department Badges:** Visual tags highlighting notice priority levels (*High Priority* vs. *Normal*) and targeting specific departments (*CSE*, *AI/ML*, *ECE*, *Civil*, *All Departments*).
* **LocalStorage Persistence:** Newly posted notices remain saved in the browser even after refreshing or closing the page.
* **Full Detail Modal View:** Click on any notice card to view its complete content and metadata in a clean pop-up window.
* **Responsive & Accessible UI:** Optimized for desktop, tablet, and mobile screens with custom vertical scrollbars on form pop-ups to prevent button clipping.

---

## 📁 Project File Structure

```text
college-notice-board/
│
├── index.html       # Structural layout, headers, filters, notice grid, and modals
├── style.css        # Custom CSS, grid layout, color themes, badges, and modal scroll rules
├── script.js        # DOM manipulation, dynamic rendering, search/filter algorithms, and LocalStorage
└── README.md        # Project documentation and setup instructions
