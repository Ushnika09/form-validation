# 🎯 Task 6 — Contact Form with JavaScript Validation
## 📌 Overview
This project is part of my Web Development Internship journey. The goal?
Build a sleek Contact Form that politely refuses to submit unless you fill it out properly.

Think of it as a bouncer at the club of my inbox —
“No empty names, no shady emails, and definitely no blank messages allowed!”

## 🛠 Features
📝 Name, Email, and Message fields
🚫 Input validation before submission
✨ Real-time error messages under inputs
✅ Success message when all is good
🛡 Regex-powered email check
🎯 Prevents form submission if invalid

## 📂 Project Structure

📁 contact-form-validation
 ├── index.html      # HTML form layout  
 ├── style.css       # Styling for the form  
 ├── script.js       # Validation logic (aka the "bouncer")  
 └── README.md       # You’re reading this  

## 💻 How It Works
User types stuff into the form.

JavaScript checks:

Is the Name empty? ❌ Error!
Is the Email valid? 📧 Regex says yes/no.
Is the Message empty? 🙅‍♂️ Nope, not allowed.

Errors appear right under the inputs (because we care about UX).

Only valid forms get a happy green success message.

## 🧠 Key Concepts Learned
HTML form structure & attributes

CSS styling for clarity & readability

JavaScript DOM manipulation

Event handling (submit event, event.preventDefault())

Regex for email format validation

Client-side vs Server-side validation basics


## 🚀 How to Run
Clone this repo

Open index.html in your browser

Start typing into the form… and watch the bouncer do its job!

Built with 💻 & ☕ by Ushnika
