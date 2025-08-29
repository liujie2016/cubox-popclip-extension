// Universal Saver for PopClip
// Version: 1.0
// Save selected text to any service with API
// Based on PopClip official documentation: https://www.popclip.app/dev/js-actions
// Script entry point at top level - PopClip wraps this in an async function

// Input validation
if (!popclip.input.text || popclip.input.text.trim() === '') {
    popclip.showText('❌ No text selected');
    return;
}

// Get API configuration from options
var url = popclip.options.apiUrl || 'https://dinoai.chatgo.pro/openapi/text/input';
url = url.trim();

if (!url) {
    popclip.showText('⚠️ Please set DinoAI API URL in settings');
    return;
}

var text = popclip.input.text.trim();

// Show progress
popclip.showText('📋 Saving to API Service...');

// Prepare data for DinoAI
var data = {
    content: text
};

// Make request
try {
    var request = new XMLHttpRequest();
    request.open('POST', url, true); // Use async request
    request.setRequestHeader('Content-Type', 'application/json');
    request.setRequestHeader('Authorization', 'token'); // Placeholder for token
    
    request.onreadystatechange = function() {
        if (request.readyState === 4) {
            var status = request.status;
            if (status >= 200 && status < 300) {
                popclip.showText('✅ Saved!');
            } else if (status === 401 || status === 403) {
                popclip.showText('❌ Authentication failed');
            } else if (status === 0) {
                popclip.showText('❌ Network connection failed');
            } else {
                popclip.showText('❌ Save failed (' + status + ')');
            }
        }
    };
    
    request.onerror = function() {
        popclip.showText('❌ Network error');
    };
    
    request.send(JSON.stringify(data));
} catch (error) {
    popclip.showText('❌ Request failed: ' + error.message);
}