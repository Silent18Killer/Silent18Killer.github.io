let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');
let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
};

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if (top >= offset && top < offset + height) {
            navLinks.forEach(link => {
                link.classList.remove('active');
                document.querySelector('header nav a[href*=' + id + ']').classList.add('active');
            });
        }
    });

    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

document.addEventListener('DOMContentLoaded', function () {
    const menuIcon = document.getElementById('menu-icon');
    const navLinks = document.getElementById('nav-links');

    menuIcon.addEventListener('click', function () {
        navLinks.classList.toggle('show');
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const readMoreButtons = document.querySelectorAll(".read-more-btn");

    readMoreButtons.forEach(button => {
        button.addEventListener("click", function() {
            const fullContent = this.closest(".service-box").querySelector(".full-content");
            if (fullContent.style.display === "none" || fullContent.style.display === "") {
                fullContent.style.display = "block";
                this.textContent = "Read Less";
            } else {
                fullContent.style.display = "none";
                this.textContent = "Read More";
            }
        });
    });
});


// circle skill

const circles = document.querySelectorAll('.circle');
circles.forEach(elem=>{
    var dots = elem.getAttribute("data-dots");
    var marked = elem.getAttribute("data-percent");
    var percent = Math.floor(dots*marked/100);
    var points = "";
    var rotate = 360/dots;

    for(let i=0; i<dots; i++)
    {
        points += `<div class="points" style="--i:${i}; --rot:${rotate}deg"></div>`;
    }
    elem.innerHTML = points;

    const pointsMarked = elem.querySelectorAll('.points');
    for(let i=0; i<percent; i++)
    {
        pointsMarked[i].classList.add('marked')
    }
})

// Contact Form Handling
document.addEventListener('DOMContentLoaded', function() {
    const contactForm = document.getElementById('contactForm');
    const formMessage = document.getElementById('formMessage');

    if (contactForm) {
        contactForm.addEventListener('submit', function(e) {
            e.preventDefault();
            
            // Get form data
            const formData = new FormData(contactForm);
            const firstName = formData.get('firstName').trim();
            const middleName = formData.get('middleName').trim();
            const lastName = formData.get('lastName').trim();
            const email = formData.get('email').trim();
            const phone = formData.get('phone').trim();
            const subject = formData.get('subject').trim();
            const message = formData.get('message').trim();

            // Validation
            if (!firstName || !lastName || !email || !phone || !message) {
                showMessage('Please fill in all mandatory fields marked with *', 'error');
                return;
            }

            // Email validation
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(email)) {
                showMessage('Please enter a valid email address', 'error');
                return;
            }

            // Phone validation (basic)
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(phone.replace(/\s/g, ''))) {
                showMessage('Please enter a valid phone number', 'error');
                return;
            }

            // Create submission data
            const submissionData = {
                firstName: firstName,
                middleName: middleName,
                lastName: lastName,
                fullName: middleName ? `${firstName} ${middleName} ${lastName}` : `${firstName} ${lastName}`,
                email: email,
                phone: phone,
                subject: subject || 'Contact Form Submission',
                message: message,
                timestamp: new Date().toISOString(),
                ipAddress: 'Client IP will be captured on server',
                userAgent: navigator.userAgent
            };

            // Store submission data (for demo purposes - in real implementation, send to server)
            storeSubmission(submissionData);

            // Show success message
            showMessage('Thank you! Your message has been sent successfully. I will get back to you soon.', 'success');
            
            // Reset form
            contactForm.reset();
        });

        // Real-time validation feedback
        const requiredFields = contactForm.querySelectorAll('[required]');
        requiredFields.forEach(field => {
            field.addEventListener('blur', function() {
                validateField(this);
            });
            
            field.addEventListener('input', function() {
                if (this.classList.contains('error')) {
                    validateField(this);
                }
            });
        });
    }

    function validateField(field) {
        const value = field.value.trim();
        const fieldName = field.name;
        
        // Remove existing error styling
        field.classList.remove('error');
        
        // Check if field is empty
        if (!value) {
            field.classList.add('error');
            return false;
        }
        
        // Specific validations
        if (fieldName === 'email') {
            const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
            if (!emailRegex.test(value)) {
                field.classList.add('error');
                return false;
            }
        }
        
        if (fieldName === 'phone') {
            const phoneRegex = /^[\+]?[1-9][\d]{0,15}$/;
            if (!phoneRegex.test(value.replace(/\s/g, ''))) {
                field.classList.add('error');
                return false;
            }
        }
        
        return true;
    }

    function showMessage(message, type) {
        formMessage.textContent = message;
        formMessage.className = `form-message ${type}`;
        
        // Auto-hide success messages after 5 seconds
        if (type === 'success') {
            setTimeout(() => {
                formMessage.style.display = 'none';
            }, 5000);
        }
    }

    function storeSubmission(data) {
        // Store in localStorage for backup
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        submissions.push(data);
        localStorage.setItem('contactSubmissions', JSON.stringify(submissions));
        
        // Log to console for demonstration
        console.log('New contact form submission:', data);
        console.log('All submissions:', submissions);
        
        // Send to server (uncomment and update URL when you have a server)
        sendToServer(data);
    }

    function sendToServer(data) {
        // Option 1: Send to your own server
        // fetch('http://your-server.com/api/contact', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => console.log('Server response:', result))
        // .catch(error => console.error('Error sending to server:', error));

        // Option 2: Send to Formspree (free service)
        // fetch('https://formspree.io/f/YOUR_FORM_ID', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => console.log('Formspree response:', result))
        // .catch(error => console.error('Error sending to Formspree:', error));

        // Option 3: Send to Google Sheets (using Google Apps Script)
        // fetch('YOUR_GOOGLE_APPS_SCRIPT_URL', {
        //     method: 'POST',
        //     headers: {
        //         'Content-Type': 'application/json',
        //     },
        //     body: JSON.stringify(data)
        // })
        // .then(response => response.json())
        // .then(result => console.log('Google Sheets response:', result))
        // .catch(error => console.error('Error sending to Google Sheets:', error));

        console.log('Data ready to send to server:', data);
        console.log('To set up server integration, see CONTACT_FORM_README.md');
    }

    // Function to view all submissions (for admin purposes)
    window.viewSubmissions = function() {
        const submissions = JSON.parse(localStorage.getItem('contactSubmissions') || '[]');
        console.log('All contact form submissions:', submissions);
        
        if (submissions.length === 0) {
            console.log('No submissions found.');
            return;
        }
        
        console.log(`Total submissions: ${submissions.length}`);
        submissions.forEach((submission, index) => {
            console.log(`\n--- Submission ${index + 1} ---`);
            console.log(`Name: ${submission.fullName}`);
            console.log(`Email: ${submission.email}`);
            console.log(`Phone: ${submission.phone}`);
            console.log(`Subject: ${submission.subject}`);
            console.log(`Message: ${submission.message}`);
            console.log(`Date: ${new Date(submission.timestamp).toLocaleString()}`);
        });
        
        return submissions;
    };
});
