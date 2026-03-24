export class Logger {
    constructor(outputElementId) {
        this.termOutput = document.getElementById(outputElementId);
    }

    /**
     * @param {string} msg 
     * @param {string} type - 'output', 'system', 'success', 'error'
     */
    log(msg, type = 'output') {
        if (!this.termOutput) return;
        
        const line = document.createElement('div');
        line.className = `term-line ${type}`;
        
        const time = new Date().toLocaleTimeString();
        line.innerHTML = `<span style="color: #666">[${time}]</span> ${msg}`;
        
        this.termOutput.appendChild(line);
        this.termOutput.scrollTop = this.termOutput.scrollHeight;
    }

    clear() {
        if (this.termOutput) {
            this.termOutput.innerHTML = '';
        }
    }
}
