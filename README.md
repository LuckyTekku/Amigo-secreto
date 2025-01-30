# README - Amigo Secreto

![badge](https://img.shields.io/badge/Estado-Desarrollo-brightgreen)
![badge](https://img.shields.io/badge/Lenguaje-Javascript-blue)
![badge](https://img.shields.io/badge/Interfaz-HTML--CSS-orange)

## Descripción

**Amigo Secreto** es una aplicación web que permite a los usuarios realizar un sorteo de "Amigo Secreto". Los usuarios pueden ingresar los nombres de sus amigos en un campo de texto y, al hacer clic en el botón "Adicionar", los nombres se añaden a una lista visible. Posteriormente, al presionar el botón "Sortear Amigo", uno de los nombres de la lista se selecciona de manera aleatoria y se muestra como el "Amigo Secreto".

Este proyecto está diseñado para ser una forma sencilla y divertida de realizar sorteos de amigo secreto entre un grupo de personas.

---

## Índice

1. [Funcionalidades](#funcionalidades)
2. [Tecnologías Utilizadas](#tecnologías-utilizadas)
3. [Instalación](#instalación)
4. [Uso](#uso)
5. [Estructura del Proyecto](#estructura-del-proyecto)
6. [Contribuciones](#contribuciones)
7. [Notas y Alertas](#notas-y-alertas)

---

## Funcionalidades

- **Agregar Nombres**: Los usuarios pueden escribir el nombre de un amigo en un campo de texto y, al hacer clic en el botón "Adicionar", este nombre se agrega a una lista visible en la página.
  
- **Validación de Entrada**: Si el campo de texto está vacío o no contiene un nombre válido, el sistema mostrará una alerta pidiendo que se ingrese un nombre válido antes de poder agregarlo.

- **Visualización de la Lista**: Los nombres ingresados se muestran en una lista bajo el campo de texto para que los usuarios puedan ver qué amigos están en la lista para el sorteo.

- **Sorteo Aleatorio**: Al hacer clic en el botón "Sortear Amigo", un nombre de la lista es seleccionado aleatoriamente y se muestra como el "Amigo Secreto" en la pantalla.

---

## Tecnologías Utilizadas

- **HTML5**: Estructura y contenido de la página.
- **CSS3**: Estilo y diseño visual de la interfaz.
- **JavaScript**: Lógica de interacción y generación aleatoria de nombres.

---

## Instalación

### Requisitos Previos

Para ejecutar el proyecto, solo necesitas un navegador web moderno. No es necesario instalar dependencias adicionales.

### Pasos para instalar

1. **Clonar el repositorio**:
   
   ```bash
   git clone https://github.com/tu_usuario/amigo-secreto.git


2. **Abrir en el navegador**:
   - Navega a la carpeta donde clonaste el repositorio.
   - Abre el archivo `index.html` en tu navegador preferido.

---

## Uso

1. **Agregar nombres**: Ingresa un nombre en el campo de texto y haz clic en "Adicionar". El nombre aparecerá en la lista.
   
2. **Sorteo**: Una vez que hayas agregado los nombres que deseas, haz clic en el botón "Sortear Amigo". El sistema seleccionará aleatoriamente un nombre de la lista y lo mostrará como el "Amigo Secreto".

---

## Estructura del Proyecto

```
/amigo-secreto
│
├── index.html           # Página principal con la estructura HTML
├── style.css            # Estilos para la interfaz
└── script.js            # Lógica para la funcionalidad del amigo secreto
```

---

## Contribuciones

Si deseas contribuir a este proyecto, por favor sigue los siguientes pasos:

1. Haz un fork de este repositorio.
2. Crea una nueva rama (`git checkout -b nueva-funcionalidad`).
3. Realiza tus cambios y agrega tus pruebas.
4. Haz commit de tus cambios (`git commit -am 'Añadir nueva funcionalidad'`).
5. Empuja a tu rama (`git push origin nueva-funcionalidad`).
6. Crea un pull request para que tus cambios sean revisados e integrados.

---

## Notas y Alertas

> **Nota**: Asegúrate de que el nombre ingresado no esté vacío antes de presionar el botón "Adicionar". Si no es válido, se mostrará un mensaje de alerta.

> **Alerta**: No es posible sortear amigos sin haber ingresado al menos un nombre en la lista. Asegúrate de añadir algunos amigos antes de hacer el sorteo.

> **Importante**: Este proyecto está en desarrollo. Puede que algunas funcionalidades sean mejoradas en futuras versiones.

¡Diviértete sorteando tu Amigo Secreto! 🎉
```
