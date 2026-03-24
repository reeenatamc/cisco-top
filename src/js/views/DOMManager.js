export class DOMManager {
    constructor() {
        this.menuItems = document.querySelectorAll('.menu-item');
        this.sections = document.querySelectorAll('.view-section');
        this.pageTitle = document.getElementById('page-title');
        
        // Connection UI Elements
        this.connectionForm = document.getElementById('connectionForm');
        this.btnConnect = document.getElementById('btn-connect');
        this.statusDot = document.getElementById('connection-status-dot');
        this.statusText = document.getElementById('connection-status-text');
        this.packet = document.querySelector('.packet');
        this.btnQuickConnect = document.getElementById('btn-quick-connect');
        
        // Inputs
        this.hostInput = document.getElementById('host');
        this.protocolInput = document.getElementById('protocol');
        this.portInput = document.getElementById('port');
        this.usernameInput = document.getElementById('username');
        this.passwordInput = document.getElementById('password');
        
        this.bindMenuEvents();
    }

    bindMenuEvents() {
        this.menuItems.forEach(item => {
            item.addEventListener('click', (e) => {
                const target = e.currentTarget.getAttribute('data-target');
                this.switchTab(target);
            });
        });

        if (this.btnQuickConnect) {
            this.btnQuickConnect.addEventListener('click', () => {
                this.switchTab('cisco-connect');
            });
        }
    }

    switchTab(tabId) {
        this.menuItems.forEach(item => {
            if (item.getAttribute('data-target') === tabId) {
                item.classList.add('active');
                this.pageTitle.textContent = item.querySelector('span').textContent;
            } else {
                item.classList.remove('active');
            }
        });

        this.sections.forEach(sec => {
            if (sec.id === tabId) {
                sec.classList.add('active');
            } else {
                sec.classList.remove('active');
            }
        });
    }

    setConnectingState() {
        this.btnConnect.innerHTML = '<i class="ph ph-spinner ph-spin"></i> Conectando...';
        this.btnConnect.style.opacity = '0.7';
        this.btnConnect.disabled = true;
        this.packet.classList.add('sending');
    }

    setConnectedState(host) {
        this.btnConnect.innerHTML = '<i class="ph ph-check-circle"></i> Conectado';
        this.btnConnect.style.background = 'var(--success)';
        this.btnConnect.style.opacity = '1';

        this.statusDot.classList.remove('offline');
        this.statusDot.classList.add('online');
        this.statusText.textContent = `Conectado: ${host}`;
        this.statusText.style.color = 'var(--success)';
    }

    setDisconnectState(onDisconnectClick) {
        this.btnConnect.innerHTML = '<i class="ph ph-power"></i> Desconectar';
        this.btnConnect.style.background = 'var(--danger)';
        this.btnConnect.disabled = false;
        
        // Remove old submit listener and add disconnect click
        this.btnConnect.onclick = (e) => {
            e.preventDefault();
            onDisconnectClick();
        };
        this.packet.classList.remove('sending');
    }

    setIdleState() {
        this.statusDot.classList.add('offline');
        this.statusDot.classList.remove('online');
        this.statusText.textContent = `Desconectado`;
        this.statusText.style.color = 'var(--text-muted)';

        this.btnConnect.innerHTML = '<i class="ph ph-power"></i> Iniciar Conexión';
        this.btnConnect.style.background = 'var(--primary)';
        this.btnConnect.onclick = null; // restore form submit
        this.btnConnect.disabled = false;
    }

    getFormData() {
        return {
            host: this.hostInput.value,
            port: this.portInput.value,
            username: this.usernameInput.value,
            password: this.passwordInput.value,
            protocol: this.protocolInput.value
        };
    }
}
