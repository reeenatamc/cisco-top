import webview
import sys

# Aquí vas a poner toda tu lógica en Python para conectarte 
# a tu Cisco Packet Tracer en el futuro (Sockets, Telnet, etc.)

def execute_topology(topology_name):
    print(f"Python: Resolviendo la topología de {topology_name} en Packet Tracer...")
    # Tu código de conexión a PT iría aquí

if __name__ == '__main__':
    print("Iniciando aplicación de escritorio...")
    
    # Esta es la magia que convierte tu HTML/CSS/JS en una ventana nativa de Mac/Windows
    window = webview.create_window(
        title='NexusTop - Resolutor de Topologías Cisco',
        url='index.html', # Cargamos el diseño que acabamos de hacer
        width=1100,
        height=750,
        min_size=(900, 600),
        frameless=False, # Si lo pones True, le quita los bordes del sistema operativo
        text_select=False # Evita que el usuario seleccione texto como si fuera una página web
    )
    
    # Arranca el programa de escritorio (con servidor local interno activo para Arquitectura Limpia)
    webview.start(http_server=True)
