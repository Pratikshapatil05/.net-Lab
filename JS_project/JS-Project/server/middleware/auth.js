// server/middleware/auth.js

const authMiddleware = (req, res, next) => {
    // 1. Logic to get User ID (e.g., from headers for your lab project)
    const userId = req.headers['user-id'];

    if (!userId) {
        return res.status(401).json({ error: 'Unauthorized: No User ID provided' });
    }

    // 2. Attach userId to the request object so routes can use it
    req.userId = userId;

    // 3. Move to the next middleware or route handler
    next();
};

// CRITICAL: Export the function directly
module.exports = authMiddleware;