import { Logger } from './core/Logger.js';
import { DOMManager } from './views/DOMManager.js';
import { CiscoConnectionService } from './services/CiscoConnectionService.js';
import { AppController } from './controllers/AppController.js';

document.addEventListener('DOMContentLoaded', () => {
    // 1. Dependency Injection - Core/Utils
    const logger = new Logger('term-output');

    // 2. Dependency Injection - Views
    const domManager = new DOMManager();

    // 3. Dependency Injection - Services
    const connectionService = new CiscoConnectionService(logger);

    // 4. Dependency Injection - Controllers Setup
    const appController = new AppController(connectionService, domManager, logger);

    // 5. Initialize Application
    appController.init();
    
    // 6. Exponer logger para recibir mensajes desde Python en tiempo real
    window.appLog = (msg, type) => logger.log(msg, type);
    
    logger.log('[SISTEMA] NexusTop UI inicializado con Clean Architecture + SOLID.', 'system');
});
