---
layout: ../../../layouts/PostLayout.astro
lang: es
title: Qué aporta de nuevo Midnight
description: No se trata de esconderlo todo, sino de que tú decidas quién ve qué. Y qué cambia cuando una blockchain se diseña en torno a la divulgación selectiva.
date: 2026-10-15
---

En el [artículo anterior](/es/blog/onchain-privacy) repasé las distintas formas en que las blockchains intentan añadir privacidad. La mayoría parten de un registro público y le añaden una capa de privacidad encima, o lo ocultan todo y dejan poco margen para verificar nada. Midnight parte de una premisa distinta, y eso es lo que me parece interesante. Y tiene una segunda idea de la que se habla mucho menos: está pensada para cooperar con otras redes, no para competir con ellas.

## Privacidad racional

Midnight llama a su modelo *privacidad racional*. Los datos son privados por defecto, y una aplicación puede revelar exactamente lo que necesita una interacción concreta, a quien lo necesita. Su documentación lo resume bien: no se trata de esconderlo todo, sino de que tú decidas quién ve qué.

Eso importa porque el mundo real no es de todo o nada. Un banco tiene que mostrar ciertos datos a un regulador sin publicar todas sus cuentas. Una tienda quiere saber qué se vende sin saber quién lo compró. Las monedas de privacidad no pueden expresar eso, y las cadenas totalmente públicas tampoco.

Por eso muchos casos de uso nunca han llegado a blockchain, o lo han hecho a medias, con los datos guardados en el servidor de una empresa. Son justo los casos a los que Midnight abre la puerta:

- **Trazabilidad confidencial.** Seguir un producto desde su origen hasta la tienda, y pagar a cada proveedor por el camino, sin que la competencia vea a quién compras ni a qué precio.
- **Voto secreto.** Votaciones en las que cualquiera puede comprobar el resultado, sin que nadie sepa qué votó cada persona.
- **Salud sin exponer tu historial.** Demostrar que cumples los requisitos de un tratamiento o de un seguro sin enseñar tu historial médico.

## Divulgación selectiva, en dos niveles

### En el código

En Midnight, la divulgación selectiva empieza en Compact, el lenguaje de sus contratos inteligentes. Un contrato se divide en tres partes: lo que se ejecuta en local en tu máquina, el estado público en la cadena y el circuito que une las dos.

La regla que cambia la forma de diseñar aplicaciones es `disclose()`. Cualquier valor que derive de datos privados tiene que marcarse de forma explícita antes de poder hacerse público, ya sea al guardarlo en la cadena, al devolverlo desde un circuito o al enviarlo a otro contrato. Si te olvidas, el compilador se niega a compilar. La privacidad es lo predeterminado, y revelar es una decisión deliberada que se ve en el código.

En la mayoría de las alternativas no existe nada parecido. En Solidity, el lenguaje de Ethereum, marcar una variable como `private` solo impide que otros contratos la lean: cualquiera puede leerla desde fuera, igual que los datos que envías en cada transacción. Y en los lenguajes de pruebas de conocimiento cero de uso general, como Circom, es el desarrollador quien decide a mano qué sale del circuito. Nada le avisa si un valor calculado a partir de un secreto acaba siendo público.

En una cadena pública, lo que queda expuesto se aprovecha en segundos. En 2020, dos investigadores de Paradigm intentaron rescatar unos 12.000 dólares atrapados en un contrato de Uniswap. Bots que vigilan las transacciones pendientes vieron su operación, la copiaron y se quedaron con el dinero antes que ellos. Lo contaron en un artículo que se hizo famoso: *Ethereum is a Dark Forest*.

### En la cadena

Casi todas las blockchains tienen un único libro abierto: lo que se escribe en él lo ve todo el mundo, para siempre. Midnight tiene dos.

El primero es público, como en cualquier otra red: cualquiera puede leerlo y comprobarlo. El segundo es privado y ni siquiera vive en la cadena, sino en el dispositivo de cada usuario, con sus datos y sus secretos. Entre los dos hay un puente por el que solo pasan pruebas ZK. La red nunca ve tus datos privados, sino que recibe una prueba de que cumplen las reglas, y con eso le basta.

Una misma aplicación puede moverse entre los dos mundos, tokens públicos cuando conviene la transparencia, protegidos cuando no. Y cuando la normativa exige mirar dentro, las *viewing keys* abren solo la puerta necesaria: un auditor puede leer transacciones protegidas concretas sin que se hagan públicas para nadie más.

## Tokenomía híbrida: NIGHT y DUST

La mayoría de las blockchains usan un solo token para todo: seguridad, gobernanza y comisiones. Midnight separa esas funciones.

- **NIGHT** es el token público, que sirve para el staking y la gobernanza.
- **DUST** es un recurso protegido que se genera con el tiempo al tener NIGHT. Paga las transacciones, no se puede transferir y disminuye cuando se gasta el NIGHT que lo respalda.

Este diseño consigue dos cosas. Las comisiones son predecibles, porque no dependen del precio del token en el mercado. Y como DUST está protegido, usar una aplicación no deja el mismo rastro de metadatos que dejaría pagar comisiones con un token público.

## Pensada para cooperar, no para competir

La economía de casi todas las blockchains está pensada para retener al usuario: para usar Ethereum necesitas ETH, para usar Solana necesitas SOL, y cada red gana más cuantos más usuarios atrapa. Midnight critica esa mentalidad de "el ganador se lo lleva todo" y propone lo contrario, lo que llama *tokenomías cooperativas*: ser una capa de privacidad que cualquier red pueda usar, sin que sus usuarios cambien de red ni de token.

- **Pagar con lo que ya tienes.** Un usuario de Ethereum o de Solana podrá usar una aplicación de Midnight pagando con su propio token, sin tener NIGHT ni saber qué es DUST. Por detrás, alguien que sí tiene NIGHT le alquila o le vende el DUST que no usa.
- **Escuchar a otras redes.** Midnight podrá reaccionar a lo que pasa en otras cadenas. Por ejemplo, bloqueas ETH en Ethereum y, a cambio, recibes la capacidad de hacer transacciones en Midnight.
- **Ganar cuando ganan los demás.** Una parte de esos pagos irá a la tesorería de Midnight. A la red le irá mejor cuanto más la usen otras, no cuantos más usuarios les quite.

Es la misma idea que conté en el artículo sobre [abstracción](/es/blog/abstraction), llevada a la economía: al usuario no debería importarle en qué cadena está, ni con qué token paga.

## Una reflexión final

Durante años, usar una blockchain ha significado elegir entre dos extremos: enseñarlo todo o esconderlo todo. Midnight propone algo que se parece mucho más a cómo funciona el mundo real: privado por defecto, verificable siempre y con la posibilidad de revelar lo justo a quien lo necesita.

No lo resuelve todo por sí sola. Siempre me gusta recordar lo que dice Charles Hoskinson en su libro *Proving Nothing*: las pruebas de conocimiento cero no eliminan la confianza, la reparten en piezas más pequeñas, y una aplicación mal diseñada puede seguir filtrando información. Pero el punto de partida es el correcto.

## Referencias

- [Documentación de Midnight: Compact as a privacy-first language](https://docs.midnight.network/concepts/how-midnight-works/compact-privacy-first-language)
- [Documentación de Midnight: Explicit disclosure in Compact](https://docs.midnight.network/compact/reference/explicit-disclosure)
- [Documentación de Midnight: Ledgers](https://docs.midnight.network/concepts/ledgers)
- Dan Robinson y Georgios Konstantopoulos, [*Ethereum is a Dark Forest*](https://www.paradigm.xyz/2020/08/ethereum-is-a-dark-forest), Paradigm (2020)
- [Whitepaper de tokenomics e incentivos de Midnight](https://midnight.network/whitepaper)
- Charles Hoskinson, [*Proving Nothing: A Complete Guide to Zero-Knowledge Proof Systems*](https://github.com/CharlesHoskinson/sevenlayer) (2026)
