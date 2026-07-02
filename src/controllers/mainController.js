// Handles response payloads 
const checkHealth = (req, res) => {
    try {
        res.status(200).json({
            status: "success",
            message: "Em chao anh Tuan Anh, system is healthy and running!"
        });
    } catch (error) {
        res.status(500).json({ status: "error", message: error.message });
    }
};

module.exports = {
    checkHealth
};
