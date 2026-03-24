import { ConnectionConfig } from '../models/ConnectionConfig.js';

export class AppController {
    /**
     * @param {CiscoConnectionService} connectionService 
     * @param {DOMManager} domManager 
     * @param {Logger} logger 
     */
    constructor(connectionService, domManager, logger) {
        this.connectionService = connectionService;
        this.domManager = domManager;
        this.logger = logger;
    }

    init() {
        if (this.domManager.connectionForm) {
            this.domManager.connectionForm.addEventListener('submit', (e) => {
                e.preventDefault();
                this.handleConnectionSubmit();
            });
        }
    }

    async handleConnectionSubmit() {
        // 1. Get Data from View
        const formData = this.domManager.getFormData();
        
        // 2. Create Domain Model
        const config = new ConnectionConfig(
            formData.host,
            formData.port,
            formData.username,
            formData.password,
            formData.protocol
        );

        // 3. Update View State
        this.domManager.setConnectingState();

        // 4. Call Service
        const success = await this.connectionService.connect(config);

        if (success) {
            this.handleConnectionSuccess(config.host);
        } else {
            this.domManager.setIdleState();
        }
    }

    handleConnectionSuccess(host) {
        this.domManager.setConnectedState(host);

        // After connection, switch to disconnect button
        setTimeout(() => {
            this.domManager.setDisconnectState(() => this.handleDisconnect());
        }, 2000);

        // Optionally, auto-switch to terminal tab
        setTimeout(() => {
            this.domManager.switchTab('terminal');
        }, 3000);
    }

    handleDisconnect() {
        this.connectionService.disconnect();
        this.domManager.setIdleState();
    }
}
