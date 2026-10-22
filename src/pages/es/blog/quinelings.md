---
layout: ../../../layouts/PostLayout.astro
lang: es
title: "Quinelings: decisiones de IA que se demuestran a sí mismas"
description: Charles Hoskinson presenta unas criaturas hechas de código que guardan cada paso de una tarea. Qué son, cómo funcionan y qué podrían aportar.
date: 2026-10-21
---

El 19 de octubre de 2026, Charles Hoskinson presentó los Quinelings con una frase llamativa: "formas de vida digitales autorreplicantes, hechas enteramente de código". Detrás de las criaturas animadas hay una idea mucho más práctica: convertir la tarea de un agente de IA en algo que se puede guardar, examinar y volver a ejecutar. No es que esto sea imposible actualmente: una empresa ya puede guardar un registro de lo que hace su agente. Lo que cambia es en quién tienes que confiar para creértelo.

## Qué es una quine

Empecemos por el principio. Un programa normal recibe una tarea y devuelve un resultado. Una *quine* es un programa cuyo resultado es su propio código: lo ejecutas y produce exactamente el texto con el que fue escrito. Es como una receta que, al seguirla, te da como plato una copia de la propia receta.

Este es un ejemplo en Python, de solo dos líneas:

```python
s = 's = %r\nprint(s %% s)'
print(s % s)
```

Y esto es lo que devuelve al ejecutarlo:

```
s = 's = %r\nprint(s %% s)'
print(s % s)
```

Exactamente el mismo texto. El truco está en que el programa guarda una plantilla de sí mismo en `s` y la rellena con su propio contenido: `%r` inserta el texto de `s` tal cual, entre comillas, y `%%` se convierte en un solo `%`. Se puede hacer de varias formas, pero esta es la más sencilla.

En 1984, Ken Thompson usó una quine para demostrar que no puedes fiarte de un programa solo porque hayas leído su código. Los Quinelings usan la misma idea para lo contrario: poder comprobar lo que hace.

## Qué es un Quineling

Un Quineling es una tarea empaquetada en un pequeño programa que se puede ejecutar, abrir para ver cada paso y copiar sin perder nada. Tiene dos partes:

- **Las instrucciones.** Los pasos de la tarea, escritos por una persona o por un agente de IA en un formato propio, QDL, que obliga a declarar el objetivo, los datos de entrada, cada paso y el resultado.
- **El cuerpo.** Una criatura animada que se genera con matemáticas a partir de esas instrucciones, y en la que cada zona pertenece a un paso. Al seleccionar una zona se ven los valores que usó ese paso y el resultado que produjo.

Como es una quine, puede generar su propio código completo, como hemos visto en el ejemplo anterior. Con ese código, cualquiera reconstruye exactamente el mismo Quineling y lo ejecuta con datos nuevos, sin depender del servidor ni del permiso de quien lo creó. Hoy, la explicación de lo que hizo un agente vive en los sistemas de quien lo gestiona; un Quineling la lleva consigo. Ese código también se puede descargar como un "genoma", un archivo de números o de colores, con la misma filosofía que un código QR, del que se recupera el programa exacto. El dibujo de la criatura, en cambio, no guarda el código y solo sirve para orientarse dentro del programa.

Por ello Hoskinson los presenta como "pensamientos vivos".

## Por qué "formas de vida"

Es una metáfora, como cuando llamamos "virus" a ciertos programas. Los Quinelings comparten rasgos con los seres vivos:

- **Tienen cuerpo:** la criatura animada.
- **Tienen ADN:** el código que lo define todo.
- **Se reproducen:** generan copias exactas de sí mismos.
- **Tienen hijos:** dos Quinelings se pueden combinar y crear uno nuevo.

Metáforas aparte, son programas que pueden reconstruirse a sí mismos, con un dibujo que los representa, y que se pueden combinar para crear programas nuevos.

## Para qué sirven: un ejemplo

Imagina que una tienda pregunta a su agente de IA cuánto café pedir. Hoy la respuesta sería un texto: "Pide 120 kg, las ventas han subido y conviene tener margen". Puede ser correcta, pero para saber de dónde sale tendrías que fiarte de quien gestiona el agente.

Con un Quineling, el agente entrega la decisión junto con el cálculo que la produce:

- **Datos:** las ventas de las últimas cuatro semanas, 90, 95, 100 y 115 kg, aportadas por la tienda.
- **Criterio:** usar la media más un margen del 20 %.
- **Pasos:** media = 100 kg → × 1,2 = 120 kg → menos el stock actual.

Al seleccionar "120 kg" se ve exactamente de dónde sale. Se puede cambiar el margen y volver a ejecutarlo, o pasar el Quineling a otra tienda para que aplique el mismo criterio con sus propias ventas. La explicación y el cálculo son la misma cosa. Una empresa podría guardar ese cálculo en sus registros, pero tendrías que creerte que es el que usó; aquí cualquiera puede repetirlo y obtener el mismo resultado. Si quieres probarlo, el ejemplo de la web que suma tres medidas de agua es el mejor punto de partida.

## El rancho: combinar Quinelings

En el rancho, dos Quinelings pueden tener un hijo. Una de las formas es encadenarlos: el resultado de uno entra como dato en el otro. Si uno calcula los kilómetros de un viaje y otro el gasto de gasolina por kilómetro, el hijo calcula directamente cuánto cuesta el viaje. Solo se combinan si encajan: el tipo de dato y la unidad tienen que coincidir, así que unos kilómetros solo pueden entrar donde se esperan kilómetros.

## ¿Y en Midnight City?

La nueva web de los Quinelings ya enlaza con Midnight City, la ciudad de Midnight poblada por agentes de IA autónomos, pero todavía no se ha publicado cómo se van a conectar. Lo que sigue es cómo me lo imagino yo.

Desde su segunda versión, en julio de 2026, cada usuario da a su agente un objetivo general, como acumular minerales, y es el agente quien decide los pasos para conseguirlo. Lo natural sería que esas decisiones se tomaran como Quinelings: en lugar de aceptar un trabajo o hacer un pago sin más, entregaría el cálculo que le llevó a hacerlo, y cualquiera podría inspeccionarlo y repetirlo. El rancho también encajaría: dos agentes podrían combinar sus estrategias para crear una nueva, siempre que los datos encajen.

Y aquí es donde Midnight podría llevarlo más lejos. Un Quineling lo enseña todo: los datos, el criterio y cada paso. En una ciudad donde los agentes manejan el dinero y los datos de sus dueños, eso no siempre es aceptable. Con las herramientas de Midnight, un agente podría:

- **Probar sin revelar.** Generar una prueba de conocimiento cero de que ha ejecutado su Quineling tal como está escrito, sin revelar sus datos ni su estrategia, que la competencia podría aprovechar. Esta es la parte realmente nueva: hasta ahora, auditar una decisión exigía ver sus datos.
- **Un criterio sellado.** Publicar en la cadena una huella de su Quineling antes de decidir. Un registro se puede guardar hoy, pero quien lo guarda puede cambiarlo; esa huella no la puede reescribir nadie, ni siquiera quien la creó.
- **Cada uno ve lo que le toca.** El dueño del agente vería su Quineling completo, mientras que un auditor solo vería los pasos que tiene que revisar. Y el resto, solo la prueba de que se ha cumplido.

Resumiendo: por un lado, los Quinelings hacen que una decisión se pueda comprobar. Por otro, Midnight hace que se pueda comprobar sin enseñarlo todo. Juntos, tu agente podría explicarte cada decisión sin contársela a toda la ciudad.

## Por qué es importante

Cada vez más decisiones las tomarán agentes de IA, y hoy confiamos casi ciegamente en ellos: una respuesta y una explicación en texto, sin una forma sencilla de comprobar que esa explicación corresponde de verdad a lo que ha hecho. Un Quineling no muestra lo que pensó el modelo por dentro, sino las instrucciones que declara, y garantiza que se ejecutan tal como dicen. La explicación y el cálculo pasan a ser lo mismo.

Ninguna de estas piezas es imposible por separado. Lo nuevo es que comprobar una decisión deja de depender de fiarse de quien gestiona el agente, y pasa a depender de las matemáticas. Es la idea que recorre todo este blog: no se trata de confiar, sino de poder comprobar. Si un agente va a decidir por nosotros, necesitamos poder ver cómo lo ha hecho.

## Referencias

- [Web oficial de Quinelings](https://charleshoskinson.github.io/quinelings/index.html)
- [Repositorio de Quinelings en GitHub](https://github.com/CharlesHoskinson/quinelings)
- [Quinelings Agent SDK](https://charleshoskinson.github.io/quinelings/sdk.html)
- Charles Hoskinson, [anuncio en X](https://x.com/IOHK_Charles/status/2112276565925179638) (19 de octubre de 2026)
- [Midnight City V2](https://midnight.network/blog/deploy-agents-into-midnight-city-v2)
- Ken Thompson, [*Reflections on Trusting Trust*](https://dl.acm.org/doi/10.1145/358198.358210) (1984)
