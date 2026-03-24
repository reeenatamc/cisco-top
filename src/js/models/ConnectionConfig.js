export class ConnectionConfig {
    /**
     * @param {string} host 
     * @param {number|string} port 
     * @param {string} username 
     * @param {string} password 
     * @param {string} protocol
     */
    constructor(host, port, username, password, protocol) {
        this.host = host;
        this.port = parseInt(port, 10);
        this.username = username;
        this.password = password;
        this.protocol = protocol.toUpperCase();
    }

    isValid() {
        return this.host && this.port > 0 && this.username && this.password && this.protocol;
    }
}
