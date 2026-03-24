import time
from backend.domain.entities import ConnectionConfig
from backend.infrastructure.network_client import NetworkClient

class PacketTracerAutomator:
    def __init__(self, ui_logger_callback):
        self.ui_logger = ui_logger_callback

    def execute_raw_connection(self, config_dict):
        config = ConnectionConfig(**config_dict)
        self.ui_logger(f"Iniciando puente Python -> Packet Tracer en {config.host}", "system")
        
        client = NetworkClient(config)
        if client.connect():
            self.ui_logger(f"Conexión establecida con éxito en {config.host} vía {config.protocol}.", "success")
            self.ui_logger(f"Hola {config.username}. Consola virtual de PT lista.", "output")
            return True
        else:
            self.ui_logger(f"Error conectando a {config.host}.", "error")
            return False

    def solve_star_topology(self, config_dict):
        """Solves a specific topology. Example logic."""
        config = ConnectionConfig(**config_dict)
        self.ui_logger("Iniciando automatización Python: Topología Estrella", "system")
        
        client = NetworkClient(config)
        if client.connect():
            self.ui_logger("Conectado exitosamente al switch central.", "success")
            
            # Injection example
            commands = ["enable", "configure terminal", "vlan 10", "name VENTAS", "vlan 20", "name IT", "exit"]
            for cmd in commands:
                self.ui_logger(f"[PY] Inyectando: {cmd}", "output")
                client.send_command(cmd)

            client.disconnect()
            self.ui_logger("Automatización finalizada con éxito 100%.", "success")
            return True
        return False
