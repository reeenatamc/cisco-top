### Packet Tracer + Código + (tal vez) AI

Un proyecto medio experimental donde estoy intentando hacer que las topologías de red no se armen solo “a mano” en Cisco Packet Tracer, sino también desde código.

La idea es simple: tratar una red como un grafo, describirla con lógica y luego usar eso para generar configuraciones, validar conexiones o incluso resolver problemas automáticamente.

No es una herramienta final ni perfecta. Es más un laboratorio personal para probar hasta dónde se puede mezclar redes con programación.

---

## Qué estoy intentando hacer

* Modelar topologías como estructuras de datos
* Generar configuraciones de red desde código
* Validar conectividad sin tener que revisar todo manualmente
* Explorar soluciones automáticas (reglas, lógica o IA)
* Reducir el “clic clic” repetitivo en Packet Tracer

---

## Cómo funciona (idea general)

1. Defines una topología en código
2. Se transforma en una representación tipo grafo
3. Se aplican reglas o lógica (rutas, IPs, etc.)
4. Se intenta reflejar eso en Packet Tracer o validar resultados

---

## Stack

* Cisco Packet Tracer
* Python / JavaScript (dependiendo de la prueba)
* Algoritmos de grafos
* Algo de automatización / parsing

---

## Ejemplos de cosas que quiero lograr

* Dado un conjunto de nodos → generar una red funcional
* Detectar si una topología está mal configurada
* Sugerir rutas o configuraciones mínimas
* Simular cambios sin romper todo
* (Idealmente) que una IA diga: “esto no conecta por esto”

---

## Estado del proyecto

Work in progress constante.
Probablemente hay código roto, ideas a medias y cosas que funcionan “más o menos”.

---

## Por qué existe

Porque hacer redes solo manualmente se siente limitado.
Y porque mezclar networking + código + un poco de IA suena demasiado interesante como para no intentarlo.

---

## Nota

Proyecto con fines académicos / aprendizaje.
No usar en entornos reales ni críticos.

---
