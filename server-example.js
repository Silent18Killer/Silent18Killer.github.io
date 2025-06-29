// Example server code for handling contact form submissions
// This is a Node.js/Express example - you can adapt this to your preferred backend technology

const express = require('express');
const cors = require('cors');
const fs = require('fs');
const path = require('path');

const app = express();
const PORT = process.env.PORT || 3000;

// Middleware
app.use(cors());
app.use(express.json());
app.use(express.static('public')); // Serve your HTML, CSS, JS files

// Store submissions in a JSON file (in production, use a database)
const submissionsFile = path.join(__dirname, 'submissions.json');

// Initialize submissions file if it doesn't exist
if (!fs.existsSync(submissionsFile)) {
    fs.writeFileSync(submissionsFile, JSON.stringify([]));
}

// API endpoint to handle contact form submissions
app.post('/api/contact', (req, res) => {
    try {
        const submissionData = req.body;
        
        // Add server-side data
        const enrichedData = {
            ...submissionData,
            ipAddress: req.ip || req.connection.remoteAddress,
            timestamp: new Date().toISOString(),
            userAgent: req.get('User-Agent'),
            referer: req.get('Referer')
        };

        // Read existing submissions
        const submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
        
        // Add new submission
        submissions.push(enrichedData);
        
        // Save back to file
        fs.writeFileSync(submissionsFile, JSON.stringify(submissions, null, 2));

        // Log the submission
        console.log('New contact form submission:', enrichedData);

        // Send email notification (example using nodemailer)
        // sendEmailNotification(enrichedData);

        res.status(200).json({
            success: true,
            message: 'Message sent successfully!'
        });

    } catch (error) {
        console.error('Error processing contact form submission:', error);
        res.status(500).json({
            success: false,
            message: 'Internal server error'
        });
    }
});

// API endpoint to get all submissions (for admin purposes)
app.get('/api/submissions', (req, res) => {
    try {
        const submissions = JSON.parse(fs.readFileSync(submissionsFile, 'utf8'));
        res.json({
            success: true,
            data: submissions
        });
    } catch (error) {
        console.error('Error reading submissions:', error);
        res.status(500).json({
            success: false,
            message: 'Error reading submissions'
        });
    }
});

// Example email notification function
function sendEmailNotification(data) {
    // This is an example - you would use a service like Nodemailer, SendGrid, etc.
    console.log('Email notification would be sent to admin with data:', {
        from: data.email,
        name: data.fullName,
        subject: data.subject,
        message: data.message,
        phone: data.phone
    });
}

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
    console.log(`Contact form endpoint: http://localhost:${PORT}/api/contact`);
    console.log(`View submissions: http://localhost:${PORT}/api/submissions`);
});

// To use this server:
// 1. Install Node.js
// 2. Run: npm init -y
// 3. Run: npm install express cors
// 4. Update the fetch call in script.js to point to your server
// 5. Run: node server-example.js 