import webview
from backend.services.pt_automator import PacketTracerAutomator

class Api:
    """Clase puente entre JavaScript y Python para Arquitectura Limpia"""
    def __init__(self):
        self.window = None
        self.automator = PacketTracerAutomator(self.log_to_js)
        
    def set_window(self, window):
        self.window = window
        
    def log_to_js(self, message, type_='output'):
        """Envia logs desde Python directamente a la consola HTML en vivo"""
        if self.window:
            # Ejecutamos una funcion JS que crearemos en DOMManager
            self.window.evaluate_js(f"if (window.appLog) window.appLog('{message}', '{type_}')")

    def connect_cisco(self, config_data):
        """Petición JS -> Python para conectar a PT"""
        print(f"PYTHON: Recibida peticion JS para conectar: {config_data}")
        return self.automator.execute_raw_connection(config_data)

    def solve_topology_star(self, config_data):
        """Petición JS -> Python para resolver Topología Estrella"""
        print("PYTHON: Resolviendo topología estrella...")
        return self.automator.solve_star_topology(config_data)

if __name__ == '__main__':
    print("Iniciando aplicación de escritorio y servidor backend...")
    api = Api()
    
    window = webview.create_window(
        title='NexusTop - Resolutor de Topologías Cisco',
        url='index.html',
        js_api=api,
        width=1100,
        height=750,
        min_size=(900, 600),
        text_select=True
    )
    api.set_window(window)
    
    # Arranca el servidor local para módulos ES6 y la interfaz nativa
    webview.start(http_server=True)
