import time

class NetworkClient:
    """Wrapper that abstracts connection mechanics to the simulator.
    In a real scenario, we use 'netmiko' or 'telnetlib' here.
    """
    def __init__(self, config):
        self.config = config
        self.connection = None

    def connect(self):
        # We simulate Netmiko/Telnetlib connection logic for Packet Tracer
        # For simplicity and testability safely, this is a mock block
        # Real code: netmiko.ConnectHandler(...)
        time.sleep(1) # Simula lag de red
        return True

    def send_command(self, command: str) -> str:
        # Simulate pushing command
        time.sleep(0.5)
        return f"OK: {command}"

    def disconnect(self):
        pass
