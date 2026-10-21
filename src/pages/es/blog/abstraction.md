---
layout: ../../../layouts/PostLayout.astro
lang: es
title: "Abstracción: el usuario nunca debería ver la cadena"
description: Abstracción de cuentas, abstracción de cadena y por qué la mejor blockchain es la que nadie nota.
date: 2026-10-13
---

Piensa en la última vez que enviaste un correo. No elegiste un servidor, no pagaste una comisión en una moneda especial ni guardaste una frase de 24 palabras en un cajón. El protocolo estaba ahí, pero era invisible.

Muchas blockchains todavía obligan a ver cada engranaje. Necesitas una frase semilla, necesitas el token propio de la red para pagar comisiones y necesitas saber en qué cadena están tus fondos y cómo moverlos a otra. Para cualquiera que no sea del sector, eso es un muro. La abstracción nos ayuda a derribar ese muro y a crear una experiencia mucho más limpia.

Ese muro tiene varias capas, y cada tipo de abstracción (de cuenta, de cadena o de las comisiones) ataca una. Debajo de las tres hay una pregunta que conviene no perder de vista: cuando algo se vuelve invisible, ¿en quién estás confiando?

## Abstracción de cuentas

En Ethereum, una cuenta normal es un par de claves. Quien tiene la clave privada tiene la cuenta, y si la pierdes, la cuenta desaparece. Además, esa cuenta no admite reglas, es decir, no puedes decirle, por ejemplo, que solo pueda firmar pagos de hasta 20 euros al día. Con un banco, poner un límite así es lo normal. Con una cuenta normal de Ethereum, no es posible.

La abstracción de cuentas convierte la propia cuenta en un programa con sus propias reglas. Eso permite cosas que en cualquier otra aplicación parecen obvias:

- **Recuperar la cuenta** sin frase semilla, por ejemplo con contactos de confianza, passkeys o con la huella o la cara con la que desbloqueas el móvil.
- **Que otro pague las comisiones**, para que un usuario nuevo no tenga que comprar ETH antes de hacer nada.
- **Varias acciones en un solo paso**, como aprobar e intercambiar con una única confirmación.
- **Permisos limitados.** Imagina un juego en blockchain: en lugar de confirmar cada movimiento con tu wallet, autorizas al empezar una "clave de sesión" que durante una hora solo puede hacer jugadas en ese juego y gastar como máximo 5 euros. Juegas sin interrupciones, y si alguien robara esa clave, no podría tocar nada más.

Ethereum llegó a esto en dos pasos:

**ERC-4337 (2023): un rodeo sin cambiar Ethereum.** Por diseño, Ethereum solo acepta transacciones firmadas por una clave normal. ERC-4337 lo esquiva sin modificar la red: tu cuenta pasa a ser un contrato inteligente, una *smart wallet* con tus reglas. En vez de enviar una transacción, envías una petición que describe lo que quieres hacer. Unos servicios llamados *bundlers* la envían a un contrato común de Ethereum que comprueba las reglas de cada cuenta y las ejecuta. El inconveniente es que, al no modificar la red a nivel de protocolo, las billeteras anteriores a esta actualización no se beneficiaban de ella, es decir, necesitabas una wallet nueva, con una dirección nueva.

**EIP-7702 (2025): mejorar tu cuenta de siempre.** Llegó con la actualización Pectra y lo cambia desde dentro del protocolo. Tu cuenta de siempre ahora puede "instalar" un programa: apunta a un contrato inteligente, y desde ese momento, cuando se usa tu dirección, se aplican las reglas de ese programa.

¿Significa eso que puedes recuperar tu cuenta sin la frase semilla? En parte. Si configuras de antemano otras formas de autorizar operaciones, como una passkey o contactos de confianza, podrías seguir usando tu cuenta aunque perdieras la frase. Pero la clave original sigue mandando sobre todo, y no se puede anular: si alguien te la roba, tiene el control completo.

## Abstracción de cadena

La abstracción de cuentas que acabamos de ver acerca la experiencia de web3 a la de web2, pero dentro de cada red por separado. Los activos y las aplicaciones viven en decenas de redes y cruzar de una cadena a otra implica puentes, tokens envueltos e ir cambiando manualmente de red, y muchas veces también de billetera. La abstracción de cadena busca una experiencia única: un saldo, una cuenta, y que el sistema decida dónde ocurre cada cosa.

No hay una única tecnología detrás, sino varias piezas que se combinan. Las principales son estas:

- **Intenciones (*intents*).** En lugar de describir cada paso, el usuario indica el resultado ("cambia 1 ETH por un mínimo de 3.000 USDC antes de las 12:00") y una red de *solvers* compite por ejecutarlo, también entre cadenas. A diferencia de la petición de ERC-4337, que dice exactamente qué ejecutar y en qué red, una intención solo describe el resultado y deja que otro elija la ruta. La idea se popularizó en Ethereum con protocolos como CoW Swap y UniswapX y hoy existe un estándar para intenciones entre cadenas, ERC-7683, impulsado por Uniswap y Across.
- **Cuentas que firman en otras cadenas.** Una sola cuenta controla direcciones en varias redes, y las firmas las genera una red de nodos sin que ninguno tenga la clave completa.
- **Saldos unificados.** Servicios que te muestran un solo saldo y una sola dirección, aunque por debajo tus fondos estén repartidos entre varias redes. Suelen depender de la infraestructura de la empresa que ofrece el servicio.
- **Mensajería entre cadenas.** Los protocolos que permiten a una red verificar lo que ha ocurrido en otra. Son la base sobre la que se apoyan las demás piezas.

## Abstracción de las comisiones

Hay un tipo de abstracción más discreto: ocultar el coste de usar la red. Patrocinar las comisiones de otro no es nuevo. Con ERC-4337, una aplicación ya puede pagarte las comisiones a través de un contrato llamado *paymaster*, y muchas redes lo permiten. Pero el modelo de fondo no cambia: alguien sigue pagando cada transacción con el token de la red, a su precio de mercado en ese momento, y el patrocinio depende de contratos e intermediarios añadidos encima.

## Estado del arte

Ethereum ha ido añadiendo la abstracción por capas. Después de EIP-7702, la siguiente es EIP-8141, prevista para 2027: cada cuenta definirá desde el protocolo cómo se firma y quién paga, sin *bundlers*. Además, las intenciones se están estandarizando con el Open Intents Framework, impulsado por la Ethereum Foundation.

Otras redes nacieron con esta filosofía. En Starknet y zkSync todas las cuentas son programables desde el principio, en Sui y Aptos puedes crear una cuenta iniciando sesión con Google, y NEAR permite controlar direcciones en otras redes gracias a sus *chain signatures*.

### Midnight

Midnight, en mainnet desde marzo de 2026, no añade la abstracción encima: la plantea desde el diseño. Lo más visible son las comisiones, que no se pagan con su token, NIGHT, sino con DUST, un recurso que se genera al mantener NIGHT. Gastarlo no deja rastro, y cualquier aplicación puede pagarlo por sus usuarios sin contratos ni intermediarios. Además, Zswap lleva las intenciones al propio protocolo, y de forma privada.

Pero lo más interesante es lo que propone al resto de redes. La mayoría compite por retener a sus usuarios. Midnight quiere ser lo contrario: una capa de privacidad que cualquier red pueda usar sin que sus usuarios cambien ni de red ni de token. Un tejido que conecte redes en lugar de competir con ellas.

## La confianza no desaparece, se desplaza

Cada capa de abstracción oculta complejidad, y la complejidad suele ser donde vive el riesgo. Cuando un *solver* ejecuta mi intención, confío en la red de *solvers*. Cuando una red de nodos firma por mí en otra cadena, confío en esa red. No es un motivo para evitar la abstracción, pero sí para saber qué te pide cada capa que creas.

Charles Hoskinson dice lo mismo sobre las pruebas de conocimiento cero en su libro *Proving Nothing*: no eliminan la confianza, la descomponen en piezas más pequeñas. La buena abstracción funciona igual. El usuario no debería necesitar ver la cadena, pero siempre debería haber alguien capaz de comprobar lo que hay debajo.

## Referencias

- [ERC-4337: Account Abstraction Using Alt Mempool](https://eips.ethereum.org/EIPS/eip-4337)
- [EIP-7702: Set Code for EOAs](https://eips.ethereum.org/EIPS/eip-7702)
- [EIP-8141: Frame Transaction](https://eips.ethereum.org/EIPS/eip-8141)
- [ERC-7683: Cross Chain Intents](https://eips.ethereum.org/EIPS/eip-7683)
- [Ethereum Foundation: prioridades del protocolo para 2026](https://blog.ethereum.org/2026/02/18/protocol-priorities-update-2026)
- [Documentación de Sui: zkLogin](https://docs.sui.io/concepts/cryptography/zklogin)
- [Documentación de NEAR: abstracción de cadena](https://docs.near.org/chain-abstraction/)
- [Documentación de Midnight: patrocinio de comisiones con DUST](https://docs.midnight.network/guides/dust-sponsorship)
- [Documentación de Midnight: Zswap](https://docs.midnight.network/concepts/zswap)
- [Whitepaper de tokenomics e incentivos de Midnight](https://midnight.network/whitepaper)
- Charles Hoskinson, [*Proving Nothing: A Complete Guide to Zero-Knowledge Proof Systems*](https://github.com/CharlesHoskinson/sevenlayer) (2026)
