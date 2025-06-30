#!/usr/bin/env python3
"""
Simple HTTP Server for Portfolio Website
Run this script to serve your portfolio website locally
"""

import http.server
import socketserver
import webbrowser
import os
from pathlib import Path

# Configuration
PORT = 8000
DIRECTORY = os.getcwd()

class MyHTTPRequestHandler(http.server.SimpleHTTPRequestHandler):
    def __init__(self, *args, **kwargs):
        super().__init__(*args, directory=DIRECTORY, **kwargs)
    
    def end_headers(self):
        # Add CORS headers for development
        self.send_header('Access-Control-Allow-Origin', '*')
        self.send_header('Access-Control-Allow-Methods', 'GET, POST, OPTIONS')
        self.send_header('Access-Control-Allow-Headers', 'Content-Type')
        super().end_headers()

def main():
    print(f"🚀 Starting Portfolio Server...")
    print(f"📁 Serving files from: {DIRECTORY}")
    print(f"🌐 Server will be available at: http://localhost:{PORT}")
    print(f"📄 Main page: http://localhost:{PORT}/index.html")
    print(f"🔧 Admin panel: http://localhost:{PORT}/admin-panel.html")
    print("\n" + "="*50)
    
    try:
        with socketserver.TCPServer(("", PORT), MyHTTPRequestHandler) as httpd:
            print(f"✅ Server started successfully on port {PORT}")
            print("🔄 Server is running... Press Ctrl+C to stop")
            print("🌐 Opening browser automatically...")
            
            # Open browser automatically
            webbrowser.open(f'http://localhost:{PORT}')
            webbrowser.open(f'http://localhost:{PORT}/admin-panel.html')

            # Keep server running
            httpd.serve_forever()
            
    except KeyboardInterrupt:
        print("\n🛑 Server stopped by user")
    except OSError as e:
        if e.errno == 48:  # Address already in use
            print(f"❌ Port {PORT} is already in use. Try a different port or stop the existing server.")
            print("💡 You can change the PORT variable in this script to use a different port.")
        else:
            print(f"❌ Error starting server: {e}")
    except Exception as e:
        print(f"❌ Unexpected error: {e}")

if __name__ == "__main__":
    main() 