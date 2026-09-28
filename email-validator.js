
function isValidNietEmail(email) {
    if (typeof email !== "string") {
        return false;
    }

    const value = email.trim();

    const pattern = /^[a-zA-Z0-9._%+-]+@niet\.co\.in$/i;

    return pattern.test(value);
}

// Make the function available in the browser.
if (typeof window !== "undefined") {
    window.isValidNietEmail = isValidNietEmail;
}

// Make the function available for Node.js tests.
if (typeof module !== "undefined" && module.exports) {
    module.exports = { isValidNietEmail };
}