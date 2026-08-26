/* =========================================================
   OCARINA PRODUCCIONES V15
   SCRIPT.JS
   SISTEMA INTERACTIVO
   Cultura · Historia · Turismo · Territorio · Radio
========================================================= */

document.addEventListener("DOMContentLoaded", () => {

    "use strict";


    /* =====================================================
       CONFIGURACIÓN GENERAL
    ===================================================== */

    const CONFIG = {

        radioStream:
            "https://stream.zeno.fm/amfjjcz4tlgtv",

        scrollOffset:
            80

    };


    /* =====================================================
       ELEMENTOS PRINCIPALES
    ===================================================== */

    const body =
        document.body;

    const header =
        document.querySelector(".site-header");

    const menuToggle =
        document.querySelector(".menu-toggle");

    const navLinks =
        document.querySelector(".nav-links");

    const navItems =
        document.querySelectorAll(".nav-links a");


    /* =====================================================
       HEADER · CAMBIO AL HACER SCROLL
    ===================================================== */

    function updateHeader() {

        if (!header) {
            return;
        }

        if (window.scrollY > 40) {

            header.classList.add("scrolled");

        } else {

            header.classList.remove("scrolled");

        }

    }


    window.addEventListener(
        "scroll",
        updateHeader,
        { passive: true }
    );

    updateHeader();


    /* =====================================================
       MENÚ MOBILE
    ===================================================== */

    function openMenu() {

        if (!menuToggle || !navLinks) {
            return;
        }

        navLinks.classList.add("active");

        menuToggle.classList.add("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "true"
        );

        body.classList.add("menu-open");

    }


    function closeMenu() {

        if (!menuToggle || !navLinks) {
            return;
        }

        navLinks.classList.remove("active");

        menuToggle.classList.remove("active");

        menuToggle.setAttribute(
            "aria-expanded",
            "false"
        );

        body.classList.remove("menu-open");

    }


    if (menuToggle) {

        menuToggle.addEventListener(
            "click",
            () => {

                const isOpen =
                    navLinks.classList.contains("active");

                if (isOpen) {

                    closeMenu();

                } else {

                    openMenu();

                }

            }
        );

    }


    /* =====================================================
       CERRAR MENÚ AL ELEGIR UNA SECCIÓN
    ===================================================== */

    navItems.forEach(link => {

        link.addEventListener(
            "click",
            () => {

                closeMenu();

            }
        );

    });


    /* =====================================================
       CERRAR MENÚ CON ESCAPE
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (event.key === "Escape") {

                closeMenu();

            }

        }
    );


    /* =====================================================
       SCROLL SUAVE
    ===================================================== */

    document.querySelectorAll(
        'a[href^="#"]'
    ).forEach(link => {

        link.addEventListener(
            "click",
            event => {

                const targetId =
                    link.getAttribute("href");

                if (
                    !targetId ||
                    targetId === "#"
                ) {
                    return;
                }

                const target =
                    document.querySelector(targetId);

                if (!target) {
                    return;
                }

                event.preventDefault();

                const targetPosition =
                    target.getBoundingClientRect().top +
                    window.scrollY -
                    CONFIG.scrollOffset;

                window.scrollTo({

                    top: targetPosition,

                    behavior: "smooth"

                });

            }
        );

    });


    /* =====================================================
       RADIO
    ===================================================== */

    const radioAudio =
        document.getElementById("radioAudio");

    const radioPlay =
        document.getElementById("radioPlay");

    const miniPlay =
        document.getElementById("miniPlay");

    const radioVolume =
        document.getElementById("radioVolume");

    const radioDisc =
        document.getElementById("radioDisc");

    const radioStatus =
        document.getElementById("radioStatus");

    const radioMessage =
        document.getElementById("radioMessage");

    const miniStatus =
        document.getElementById("miniStatus");


    let radioInitialized =
        false;

    let radioPlaying =
        false;


    /* =====================================================
       INICIALIZAR RADIO
    ===================================================== */

    function initializeRadio() {

        if (
            !radioAudio ||
            radioInitialized
        ) {
            return;
        }

        radioAudio.src =
            CONFIG.radioStream;

        radioAudio.preload =
            "none";

        radioInitialized =
            true;

    }


    /* =====================================================
       ESTADO VISUAL DE RADIO
    ===================================================== */

    function updateRadioInterface(
        isPlaying
    ) {

        radioPlaying =
            isPlaying;


        if (radioPlay) {

            radioPlay.textContent =
                isPlaying
                    ? "❚❚"
                    : "▶";

            radioPlay.setAttribute(
                "aria-label",
                isPlaying
                    ? "Pausar Radio Ocarina"
                    : "Reproducir Radio Ocarina"
            );

        }


        if (miniPlay) {

            miniPlay.textContent =
                isPlaying
                    ? "❚❚"
                    : "▶";

            miniPlay.setAttribute(
                "aria-label",
                isPlaying
                    ? "Pausar Radio Ocarina"
                    : "Reproducir Radio Ocarina"
            );

        }


        if (radioDisc) {

            radioDisc.classList.toggle(
                "playing",
                isPlaying
            );

        }


        if (radioStatus) {

            radioStatus.textContent =
                isPlaying
                    ? "RADIO OCARINA · EN VIVO"
                    : "RADIO OCARINA · LISTO";

        }


        if (miniStatus) {

            miniStatus.textContent =
                isPlaying
                    ? "EN VIVO"
                    : "LISTO";

        }


        if (radioMessage) {

            radioMessage.textContent =
                isPlaying
                    ? "Escuchando Radio Ocarina."
                    : "Presioná reproducir para escuchar.";

        }

    }


    /* =====================================================
       REPRODUCIR RADIO
    ===================================================== */

    async function playRadio() {

        if (!radioAudio) {
            return;
        }


        initializeRadio();


        try {

            await radioAudio.play();

            updateRadioInterface(
                true
            );

        } catch (error) {

            console.error(
                "No se pudo reproducir Radio Ocarina:",
                error
            );


            if (radioMessage) {

                radioMessage.textContent =
                    "No fue posible iniciar la radio. Intentá nuevamente.";

            }

            if (radioStatus) {

                radioStatus.textContent =
                    "RADIO OCARINA · ERROR";

            }

            if (miniStatus) {

                miniStatus.textContent =
                    "ERROR";

            }

        }

    }


    /* =====================================================
       PAUSAR RADIO
    ===================================================== */

    function pauseRadio() {

        if (!radioAudio) {
            return;
        }

        radioAudio.pause();

        updateRadioInterface(
            false
        );

    }


    /* =====================================================
       BOTÓN RADIO PRINCIPAL
    ===================================================== */

    if (radioPlay) {

        radioPlay.addEventListener(
            "click",
            () => {

                if (radioPlaying) {

                    pauseRadio();

                } else {

                    playRadio();

                }

            }
        );

    }


    /* =====================================================
       MINI PLAYER
    ===================================================== */

    if (miniPlay) {

        miniPlay.addEventListener(
            "click",
            () => {

                if (radioPlaying) {

                    pauseRadio();

                } else {

                    playRadio();

                }

            }
        );

    }


    /* =====================================================
       VOLUMEN
    ===================================================== */

    if (radioVolume) {

        radioVolume.addEventListener(
            "input",
            () => {

                if (!radioAudio) {
                    return;
                }

                radioAudio.volume =
                    Number(
                        radioVolume.value
                    );

            }
        );

    }


    /* =====================================================
       EVENTOS NATIVOS DEL AUDIO
    ===================================================== */

    if (radioAudio) {

        radioAudio.addEventListener(
            "play",
            () => {

                updateRadioInterface(
                    true
                );

            }
        );


        radioAudio.addEventListener(
            "pause",
            () => {

                updateRadioInterface(
                    false
                );

            }
        );


        radioAudio.addEventListener(
            "waiting",
            () => {

                if (radioStatus) {

                    radioStatus.textContent =
                        "RADIO OCARINA · CONECTANDO";

                }

                if (miniStatus) {

                    miniStatus.textContent =
                        "CONECTANDO";

                }

            }
        );


        radioAudio.addEventListener(
            "error",
            () => {

                if (radioStatus) {

                    radioStatus.textContent =
                        "RADIO OCARINA · SIN SEÑAL";

                }

                if (miniStatus) {

                    miniStatus.textContent =
                        "SIN SEÑAL";

                }

                if (radioMessage) {

                    radioMessage.textContent =
                        "La señal no está disponible en este momento.";

                }

                updateRadioInterface(
                    false
                );

            }
        );

    }


    /* =====================================================
       VISIBILIDAD · MINI PLAYER
    ===================================================== */

    const miniPlayer =
        document.getElementById(
            "miniPlayer"
        );


    function updateMiniPlayer() {

        if (!miniPlayer) {
            return;
        }

        if (window.scrollY > 500) {

            miniPlayer.classList.add(
                "visible"
            );

        } else {

            miniPlayer.classList.remove(
                "visible"
            );

        }

    }


    window.addEventListener(
        "scroll",
        updateMiniPlayer,
        { passive: true }
    );

    updateMiniPlayer();


    /* =====================================================
       REVEAL · ANIMACIONES DE SECCIONES
    ===================================================== */

    const revealElements =
        document.querySelectorAll(
            ".reveal, .section-heading, .universe-card, .archive-card, .service-card, .production, .culture-grid, .trajectory-grid"
        );


    if (
        "IntersectionObserver" in window
    ) {

        const revealObserver =
            new IntersectionObserver(
                entries => {

                    entries.forEach(
                        entry => {

                            if (
                                entry.isIntersecting
                            ) {

                                entry.target.classList.add(
                                    "is-visible"
                                );

                                revealObserver.unobserve(
                                    entry.target
                                );

                            }

                        }
                    );

                },
                {
                    threshold: 0.12
                }
            );


        revealElements.forEach(
            element => {

                element.classList.add(
                    "reveal-ready"
                );

                revealObserver.observe(
                    element
                );

            }
        );

    } else {

        revealElements.forEach(
            element => {

                element.classList.add(
                    "is-visible"
                );

            }
        );

    }


    /* =====================================================
       BOTONES · EFECTO DE PRESIÓN
    ===================================================== */

    document.querySelectorAll(
        ".button, .universe-card, .archive-card, .service-card"
    ).forEach(
        element => {

            element.addEventListener(
                "mousedown",
                () => {

                    element.classList.add(
                        "pressed"
                    );

                }
            );


            element.addEventListener(
                "mouseup",
                () => {

                    element.classList.remove(
                        "pressed"
                    );

                }
            );


            element.addEventListener(
                "mouseleave",
                () => {

                    element.classList.remove(
                        "pressed"
                    );

                }
            );

        }
    );


    /* =====================================================
       TECLA ENTER EN TARJETAS
    ===================================================== */

    document.querySelectorAll(
        ".universe-card"
    ).forEach(
        card => {

            card.setAttribute(
                "tabindex",
                "0"
            );


            card.addEventListener(
                "keydown",
                event => {

                    if (
                        event.key === "Enter" ||
                        event.key === " "
                    ) {

                        event.preventDefault();

                        card.click();

                    }

                }
            );

        }
    );


    /* =====================================================
       FECHA AUTOMÁTICA DEL FOOTER
    ===================================================== */

    const yearElements =
        document.querySelectorAll(
            "[data-current-year]"
        );


    yearElements.forEach(
        element => {

            element.textContent =
                new Date().getFullYear();

        }
    );


    /* =====================================================
       DETECTAR ENLACES EXTERNOS
    ===================================================== */

    document.querySelectorAll(
        'a[href^="http"]'
    ).forEach(
        link => {

            const currentHost =
                window.location.hostname;

            try {

                const linkUrl =
                    new URL(
                        link.href
                    );

                if (
                    linkUrl.hostname &&
                    linkUrl.hostname !== currentHost
                ) {

                    link.setAttribute(
                        "target",
                        "_blank"
                    );

                    link.setAttribute(
                        "rel",
                        "noopener noreferrer"
                    );

                }

            } catch (error) {

                console.warn(
                    "Enlace externo no válido:",
                    link.href
                );

            }

        }
    );


    /* =====================================================
       DETECCIÓN DE CONEXIÓN
    ===================================================== */

    function updateConnectionStatus() {

        const connectionElements =
            document.querySelectorAll(
                "[data-connection-status]"
            );


        connectionElements.forEach(
            element => {

                if (
                    navigator.onLine
                ) {

                    element.textContent =
                        "CONECTADO";

                    element.classList.remove(
                        "offline"
                    );

                } else {

                    element.textContent =
                        "SIN CONEXIÓN";

                    element.classList.add(
                        "offline"
                    );

                }

            }
        );

    }


    window.addEventListener(
        "online",
        updateConnectionStatus
    );

    window.addEventListener(
        "offline",
        updateConnectionStatus
    );

    updateConnectionStatus();


    /* =====================================================
       PREVENIR PROBLEMAS CON IMÁGENES
    ===================================================== */

    document.querySelectorAll(
        "img"
    ).forEach(
        image => {

            image.addEventListener(
                "error",
                () => {

                    image.classList.add(
                        "image-error"
                    );

                }
            );

        }
    );


    /* =====================================================
       ACCESIBILIDAD · FOCUS
    ===================================================== */

    document.addEventListener(
        "keydown",
        event => {

            if (
                event.key === "Tab"
            ) {

                body.classList.add(
                    "keyboard-user"
                );

            }

        }
    );


    document.addEventListener(
        "mousedown",
        () => {

            body.classList.remove(
                "keyboard-user"
            );

        }
    );


    /* =====================================================
       ESTADO INICIAL
    ===================================================== */

    if (radioAudio) {

        radioAudio.volume =
            radioVolume
                ? Number(
                    radioVolume.value
                )
                : 0.8;

    }


    updateRadioInterface(
        false
    );


    console.log(
        "OCARINA V15 · Sistema iniciado correctamente."
    );

});
