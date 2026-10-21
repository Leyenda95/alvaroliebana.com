---
layout: ../../../layouts/PostLayout.astro
lang: es
title: "Privacidad en cadena: qué es, quién la construye y en qué se diferencian"
description: Los registros públicos hicieron la confianza verificable y todo visible. Así intentan las distintas redes arreglar lo segundo sin romper lo primero.
date: 2026-10-14
---

Bitcoin resolvió un problema difícil: cómo llevar la cuenta de quién tiene cada moneda sin necesitar un banco ni a nadie de confianza. Lo hizo haciendo pública cada transacción, y esa transparencia es lo que permite que cualquiera pueda verificar el registro, pero también es su mayor debilidad.

Una dirección de blockchain no es tu nombre, pero tampoco es privada. En cuanto alguien la vincula contigo todo tu historial queda a la vista: qué recibiste, qué gastaste, cuándo y con quién. Eso es pseudonimato, no privacidad. Y las empresas de análisis de cadenas han construido un negocio uniendo esos puntos.

La privacidad en cadena consiste en conservar la parte verificable y ocultar el resto.

## Los principales enfoques

No existe una única "tecnología de privacidad". Las redes combinan herramientas distintas, y cada una oculta cosas diferentes y te pide confiar en cosas diferentes.

**Pruebas de conocimiento cero (ZK).** Demuestras que algo es cierto sin revelar los datos que hay detrás: que un pago es válido sin enseñar el importe, o que eres mayor de edad sin enseñar tu fecha de nacimiento. La red comprueba la prueba, no los datos.

**Entornos de ejecución confiables (TEE).** El cálculo se ejecuta dentro de un enclave de hardware aislado, de modo que ni siquiera el operador de la máquina puede leer los datos. A cambio, confías en el fabricante del hardware.

**Cifrado totalmente homomórfico (FHE).** El cálculo se hace directamente sobre datos cifrados, y solo se descifra el resultado final. Muy potente, pero todavía caro de ejecutar.

**Computación multipartita (MPC).** El cálculo se reparte entre varios ordenadores independientes, de modo que ninguno ve todos los datos privados.

## Quién lo está construyendo

**Monedas de privacidad.** *Monero* hace la privacidad obligatoria: combina firmas en anillo, direcciones ocultas e importes confidenciales para que emisor, receptor e importe queden ocultos por defecto. *Zcash* usa pruebas de conocimiento cero (zk-SNARKs) y permite elegir entre transacciones transparentes y protegidas. Las dos se centran en pagos privados, no en aplicaciones generales.

**Herramientas de privacidad sobre cadenas públicas.** Los mezcladores como *Tornado Cash* en Ethereum permiten romper el vínculo entre depósitos y retiradas.

**Privacidad programable con ZK.** Es la ola más reciente: no solo pagos privados, sino aplicaciones privadas. *Aztec* construye una capa 2 centrada en la privacidad sobre Ethereum, con su propio lenguaje, Noir, y una red principal que se despliega por fases desde finales de 2025. *Aleo* es una capa 1 para aplicaciones privadas, con su lenguaje Leo. *Midnight*, en mainnet desde marzo de 2026, construye contratos inteligentes privados en torno a la divulgación selectiva: los datos son privados por defecto, revelar algo es una decisión explícita en el código y las comisiones se pagan con un recurso protegido que no deja rastro. Le dedico el [siguiente artículo](/es/blog/what-midnight-brings).

**Computación confidencial.** *Secret Network* y *Oasis Sapphire* ejecutan contratos inteligentes confidenciales dentro de TEE.

**FHE.** *Zama* lleva el cifrado totalmente homomórfico a los contratos inteligentes de Ethereum.

## ¿En qué se diferencian?

| Enfoque | Qué oculta | Programable | En qué confías |
|---|---|---|---|
| Monedas de privacidad | Emisor, receptor e importe | Solo pagos | La criptografía |
| Mezcladores | El vínculo entre depósito y retirada | No | El pool y su tamaño |
| Plataformas ZK | Lo que decida cada aplicación | Sí | El sistema de pruebas y su configuración |
| TEE | Los datos durante el cálculo | Sí | El fabricante del hardware |
| FHE | Los datos durante el cálculo | Sí | La criptografía, con un coste alto |

Ninguna es la más privada en sentido abstracto: cada una oculta cosas distintas y pide confiar en cosas distintas. Por eso, más que buscar un ganador, conviene hacerse dos preguntas: **en qué tienes que confiar** y **qué puedes decidir revelar**.

## Las dos preguntas que importan

Las pruebas de conocimiento cero no eliminan la confianza, la descomponen en piezas más pequeñas: la configuración inicial, el lenguaje de programación, la generación del *testigo*, la aritmetización, el sistema de pruebas, las primitivas criptográficas y el verificador en cadena. Cada una puede fallar a su manera, pero cada una es más fácil de auditar que una única caja negra. Por eso la mejor forma de comparar redes de privacidad es preguntarse en qué piezas hay que confiar y si alguien puede comprobarlas.

La otra pregunta es qué te dejan revelar. Las redes que llegarán de verdad a los usuarios y a las empresas no serán las que lo ocultan todo, sino las que te dejen decidir qué revelar. Una tienda no necesita todo tu historial de compras para hacerte un descuento. Un banco no necesita toda tu vida financiera para saber si puedes devolver un préstamo. Demostrar lo justo es la verdadera promesa de la privacidad en cadena.

## Referencias

- Charles Hoskinson, [*Proving Nothing: A Complete Guide to Zero-Knowledge Proof Systems*](https://github.com/CharlesHoskinson/sevenlayer) (2026)
- [Documentación de Midnight: How privacy blockchains work](https://docs.midnight.network/concepts/how-privacy-blockchains-work)
- [Documentación de Midnight: ZK vs FHE vs MPC](https://docs.midnight.network/concepts/zk-vs-fhe-vs-mpc)
- [Monero](https://www.getmonero.org) · [Zcash](https://z.cash) · [Aztec](https://aztec.network) · [Aleo](https://aleo.org) · [Zama](https://www.zama.ai)
