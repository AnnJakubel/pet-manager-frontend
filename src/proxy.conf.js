const PROXY_CONFIG = [
    {
        context: [
            "/pets/login",
            "/pets/pet-add",
            "/pets"
        ],
        target: "http://localhost:8080",
        secure: false
    }
]

module.exports = PROXY_CONFIG;