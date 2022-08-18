/* COMPONENTES COMPARTIDOS */
Vue.component('app-header', {
    template: /*html*/ `
    <header class="navbar">
        <!-- Navbar -->
        <div class="navbar-container">
            <div class="navbar-content-logo">
                <a href="./index.html" class="navbar-logo">   
                    <img src="./img/pictures/escudo-unsij-white.png" alt="Escudo de la UNSIJ." width="60">                  
                    <span class="navbar-logo-name hidden lg:block">Licenciatura en Informática</span>
                    <span class="navbar-logo-name block lg:hidden">Lic. en Informática</span>
                </a>
                <button class="navbar-menu" id="menu-botton">
                    
                </button>  
            </div>
            <nav class="navbar-nav">
                <ul class="navbar-nav-content">
                    <li>
                        <slot name="about"></slot>                                
                    </li>
                    <li>
                        <slot name="teachers"></slot>   
                    </li>
                </ul>                                      
            </nav>                
        </div>
        <!-- /Navbar -->

        <!-- Cinta -->
        <div class="brand">
            <nav class="brand-nav">
                <ul class="brand-nav-ul">
                    <li>
                        <a href="https://aula.unsij.edu.mx/moodle/login/index.php" target="_blank" class="link link-icon">                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M21 12a9 9 0 01-9 9m9-9a9 9 0 00-9-9m9 9H3m9 9a9 9 0 01-9-9m9 9c1.657 0 3-4.03 3-9s-1.343-9-3-9m0 18c-1.657 0-3-4.03-3-9s1.343-9 3-9m-9 9a9 9 0 019-9" />
                            </svg>
                            Aula Virtual
                        </a>
                    </li>
                    <li>
                        <a href="http://www.unsij.edu.mx/webmail/src/login.php" target="_blank" class="link link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                            </svg>
                            Correo Institucional
                        </a>
                    </li>                    
                    <li>
                        <a href="http://lectus.unsij.edu.mx:8080/lectus/" target="_blank" class="link link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 6.253v13m0-13C10.832 5.477 9.246 5 7.5 5S4.168 5.477 3 6.253v13C4.168 18.477 5.754 18 7.5 18s3.332.477 4.5 1.253m0-13C13.168 5.477 14.754 5 16.5 5c1.747 0 3.332.477 4.5 1.253v13C19.832 18.477 18.247 18 16.5 18c-1.746 0-3.332.477-4.5 1.253" />
                            </svg>
                            LECTUS
                        </a>
                    </li>
                    <li>
                        <a href="https://alumnos.unsij.edu.mx/user_sessions/new" target="_blank" class="link link-icon">                            
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                                <path d="M12 14l9-5-9-5-9 5 9 5z" />
                                <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                                <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                            </svg>
                            NES Alumnos
                        </a>
                    </li>
                    <li>
                        <a href="https://alumnos.unsij.edu.mx/user_sessions/new" target="_blank" class="link link-icon">
                            <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                                <path stroke-linecap="round" stroke-linejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2" />
                            </svg>
                            NES Profesores
                        </a>
                    </li>                    
                </ul>
            </nav>
        </div>
        <!-- /Cinta -->
    </header>
    `
});

Vue.component('app-footer', {
    template: /* html */ `
    <footer class="footer">
        <div class="footer-content">
            <div class="footer-content-logo">
                <a href="http://www.unsij.edu.mx/" target="_blank">
                    <img src="./img/pictures/escudo-unsij-white.png" alt="Escudo de la UNSIJ." class="h-28 w-auto object-cover"> 
                </a>                
                <a href="http://www.suneo.mx/" target="_blank">
                    <img src="./img/pictures/escudo-suneo.png" alt="Escudo del SUNEO." class="h-14 w-auto object-cover">
                </a>
            </div>

            <div class="footer-content-link">
                <header class="footer-title">Medios de contacto</header>
                <hr class="footer_line">
                <a href="https://goo.gl/maps/1HaMWs4H2GPHsqrJ7" target="_blank" class="footer-link">                    
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-link-icon" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clip-rule="evenodd" />
                        </svg>
                    </div>
                    Camino a la Universidad S/N, 68725 Ixtlán de Juárez, Oax.
                </a>
                <a href="http://www.unsij.edu.mx/" target="_blank" class="footer-link">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-link-icon" viewBox="0 0 20 20">
                            <path fill-rule="evenodd" d="M4.083 9h1.946c.089-1.546.383-2.97.837-4.118A6.004 6.004 0 004.083 9zM10 2a8 8 0 100 16 8 8 0 000-16zm0 2c-.076 0-.232.032-.465.262-.238.234-.497.623-.737 1.182-.389.907-.673 2.142-.766 3.556h3.936c-.093-1.414-.377-2.649-.766-3.556-.24-.56-.5-.948-.737-1.182C10.232 4.032 10.076 4 10 4zm3.971 5c-.089-1.546-.383-2.97-.837-4.118A6.004 6.004 0 0115.917 9h-1.946zm-2.003 2H8.032c.093 1.414.377 2.649.766 3.556.24.56.5.948.737 1.182.233.23.389.262.465.262.076 0 .232-.032.465-.262.238-.234.498-.623.737-1.182.389-.907.673-2.142.766-3.556zm1.166 4.118c.454-1.147.748-2.572.837-4.118h1.946a6.004 6.004 0 01-2.783 4.118zm-6.268 0C6.412 13.97 6.118 12.546 6.03 11H4.083a6.004 6.004 0 002.783 4.118z" clip-rule="evenodd" />
                        </svg>
                    </div>                    
                    www.unsij.edu.mx
                </a>
                <a href="mailto:informatica@unsij.edu.mx" class="footer-link">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-link-icon" viewBox="0 0 20 20">
                            <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                            <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                        </svg>
                    </div>                    
                    informatica@unsij.edu.mx
                </a>
                <a href="tel:9515536362" class="footer-link">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="footer-link-icon" viewBox="0 0 20 20">
                            <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
                        </svg>
                    </div>                    
                    951 553 63 62
                </a>
            </div>

            <div class="footer-content-link">
                <header class="footer-title">Redes sociales</header>
                <hr class="footer_line">
                <div class="footer-content-social-icon">
                    <a href="https://www.facebook.com/InformaticaUNSIJ/" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-facebook w-9 h-9" viewBox="0 0 16 16">
                            <path d="M16 8.049c0-4.446-3.582-8.05-8-8.05C3.58 0-.002 3.603-.002 8.05c0 4.017 2.926 7.347 6.75 7.951v-5.625h-2.03V8.05H6.75V6.275c0-2.017 1.195-3.131 3.022-3.131.876 0 1.791.157 1.791.157v1.98h-1.009c-.993 0-1.303.621-1.303 1.258v1.51h2.218l-.354 2.326H9.25V16c3.824-.604 6.75-3.934 6.75-7.951z"/>
                        </svg>
                    </a>
                    <a href="https://twitter.com/unsij_suneo?lang=es" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-twitter w-9 h-9" viewBox="0 0 16 16">
                            <path d="M5.026 15c6.038 0 9.341-5.003 9.341-9.334 0-.14 0-.282-.006-.422A6.685 6.685 0 0 0 16 3.542a6.658 6.658 0 0 1-1.889.518 3.301 3.301 0 0 0 1.447-1.817 6.533 6.533 0 0 1-2.087.793A3.286 3.286 0 0 0 7.875 6.03a9.325 9.325 0 0 1-6.767-3.429 3.289 3.289 0 0 0 1.018 4.382A3.323 3.323 0 0 1 .64 6.575v.045a3.288 3.288 0 0 0 2.632 3.218 3.203 3.203 0 0 1-.865.115 3.23 3.23 0 0 1-.614-.057 3.283 3.283 0 0 0 3.067 2.277A6.588 6.588 0 0 1 .78 13.58a6.32 6.32 0 0 1-.78-.045A9.344 9.344 0 0 0 5.026 15z"/>
                        </svg>
                    </a>
                    <a href="https://www.youtube.com/c/UNSIJ_SUNEO" target="_blank" class="footer-social_icon">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="bi bi-youtube w-9 h-9" viewBox="0 0 16 16">
                            <path d="M8.051 1.999h.089c.822.003 4.987.033 6.11.335a2.01 2.01 0 0 1 1.415 1.42c.101.38.172.883.22 1.402l.01.104.022.26.008.104c.065.914.073 1.77.074 1.957v.075c-.001.194-.01 1.108-.082 2.06l-.008.105-.009.104c-.05.572-.124 1.14-.235 1.558a2.007 2.007 0 0 1-1.415 1.42c-1.16.312-5.569.334-6.18.335h-.142c-.309 0-1.587-.006-2.927-.052l-.17-.006-.087-.004-.171-.007-.171-.007c-1.11-.049-2.167-.128-2.654-.26a2.007 2.007 0 0 1-1.415-1.419c-.111-.417-.185-.986-.235-1.558L.09 9.82l-.008-.104A31.4 31.4 0 0 1 0 7.68v-.123c.002-.215.01-.958.064-1.778l.007-.103.003-.052.008-.104.022-.26.01-.104c.048-.519.119-1.023.22-1.402a2.007 2.007 0 0 1 1.415-1.42c.487-.13 1.544-.21 2.654-.26l.17-.007.172-.006.086-.003.171-.007A99.788 99.788 0 0 1 7.858 2h.193zM6.4 5.209v4.818l4.157-2.408L6.4 5.209z"/>
                        </svg>
                    </a>                                       
                </div>
            </div>
        </div>
    </footer>
    `
})

Vue.component('app-breadcum-front', {
    template: /* html */ `
    <nav class="container flex flex-row mx-auto mt-10">
        <a class="link-icon link" href="./index.html">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
                </svg>
            </div>

            <div>
                <span>
                    Inicio
                </span>
            </div>
        </a>

        <div class="link-icon">
            <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                <path stroke-linecap="round" stroke-linejoin="round" d="M10 20l4-16m4 4l4" />
            </svg>
        </div>

        <div class="link-icon">
            <span>
                <slot name="current-page"></slot>
            </span>
        </div>
    </nav>  
    `
})


/* INICIO */
Vue.component('app-hero', {
    template: /* html */ `
    <div class="swiper-slide hero">
        <div class="hero-container">
            <div class="hero-content-text">
                <header class="text-header">
                    <slot name="title"></slot>
                </header>
                <p class="text-content">
                    <slot name="description"></slot>
                </p>
            </div>
            <slot name="image"></slot>
        </div>
    </div>
    `
})

Vue.component('app-notice', {
    template: /* html */ `
    <article class="show_item">
        <header class="show_item-header">
            <slot name="title"></slot>
        </header>
        <span class="text-date">
            <slot name="date"></slot>
        </span>
        <div class="show_item-footer">
            <slot name="link"></slot>
        </div>
    </article>  
    `
})

Vue.component('app-event', {
    template: /* html */ `
    <article class="show_item">
        <!-- <slot name="image"></slot> -->
        <header class="show_item-header">            
            <slot name="title"></slot>
        </header>
        <div class="show_item-detail">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="text-icon" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <slot name="place"></slot>
        </div>
        <div class="show_item-detail">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="text-icon" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                </svg>
            </div>
            <slot name="date"></slot>
        </div>
        <div class="show_item-detail">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg"
                    class="text-icon" viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z" />
                </svg>
            </div>
            <slot name="hour"></slot>
        </div>
        <div class="show_item-footer">
            <slot name="link"></slot>
        </div>
    </article>
    `
})

Vue.component('app-vacant', {
    template: /* html */ `
    <article class="show_item">
        <header class="show_item-header">            
            <slot name="title"></slot>
        </header>
        <p class="text-subtitle">
            <slot name="business"></slot>
        </p>
        <div class="show_item-detail">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-icon"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </div>
            <slot name="place"></slot>
        </div>
        <div class="show_item-detail">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="text-icon"
                    viewBox="0 0 24 24">
                    <path stroke-linecap="round" stroke-linejoin="round"
                        d="M7 7h.01M7 3h5c.512 0 1.024.195 1.414.586l7 7a2 2 0 010 2.828l-7 7a2 2 0 01-2.828 0l-7-7A1.994 1.994 0 013 12V7a4 4 0 014-4z" />
                </svg>
            </div>
            <slot name="tag"></slot>
        </div>
        <span class="text-date">
            <slot name="date"></slot>
        </span>
        <div class="show_item-footer">
            <slot name="link"></slot>
        </div>
    </article>
    `
})

Vue.component('app-feature', {
    template: /* html */ `
    <div class="grid" data-aos="zoom-in" data-aos-delay="800" data-aos-duration="1000">
        <article class="feature_item">        
            <header class="feature_item-header">
                <div class="feature_item-icon">
                    <slot name="icon"></slot>            
                </div>         
                <p class="w-10/12">
                    <slot name="title"></slot>
                </p>
            </header> 
            <p class="feature_item-content">
                <slot name="description"></slot>
            </p>
        </article>
    </div>
    `
})

Vue.component('app-opinion', {
    template: /* html */ `    
    <div class="opinion_item group">
        <div class="opinion_item-body">
            <div>
                <svg xmlns="http://www.w3.org/2000/svg" class="opinion_item-quote"
                    viewBox="0 0 24 24">
                    <path
                        d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
                </svg>
            </div>
            <p class="opinion_item-text">
                <slot name="description"></slot>
            </p>
        </div>
        <div class="opinion_item-footer">
            <header class="opinion_item-name">
                <slot name="name"></slot>
            </header>
            <div class="opinion_item-content-profile">
                <slot name="image"></slot>
            </div>
        </div>
    </div>
    `
})


/* ACERCA DE */
Vue.component('app-temary', {
    template: /* html */ `
    <article class="accordion_item" data-aos="zoom-in">
        <button class="accordion_item-tilte">
            <slot name="title"></slot>
        </button>
        <div class="accordion_item-content">
            <div class="accordion_item-body">
                <ul class="accordion_item-list">
                    <slot name="description"></slot>
                </ul>
            </div>
        </div>
    </article>
    `
})

/* NUESTROS PROFESORES */
Vue.component('app-teacher', {
    template: /* html */ `  
    <div class="grid" data-aos="zoom-in">
        <article class="teacher_item group">                        
            <div class="teacher_item-content-image">                
                <div class="teacher_item-bg-image">
                    <slot name="image"></slot>
                </div>            
            </div>
            <div class="teacher_item-content-text">
                <header class="teacher_item-title">
                    <slot name="name"></slot>
                </header>
                <div class="teacher_item-info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                            <path d="M12 14l9-5-9-5-9 5 9 5z" />
                            <path d="M12 14l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14z" />
                            <path stroke-linecap="round" stroke-linejoin="round" d="M12 14l9-5-9-5-9 5 9 5zm0 0l6.16-3.422a12.083 12.083 0 01.665 6.479A11.952 11.952 0 0012 20.055a11.952 11.952 0 00-6.824-2.998 12.078 12.078 0 01.665-6.479L12 14zm-4 6v-7.5l4-2.222" />
                        </svg>
                    </div>
                    <p>                        
                        <slot name="grade"></slot>
                    </p>
                </div>    
                <div class="teacher_item-info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                        </svg>
                    </div>                    
                    <slot name="email"></slot>                
                </div>  
                <div class="teacher_item-info">
                    <div>
                        <svg xmlns="http://www.w3.org/2000/svg" class="text-icon" viewBox="0 0 24 24">
                            <path stroke-linecap="round" stroke-linejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
                        </svg>
                    </div>
                    <p>
                        <slot name="office"></slot>                        
                    </p>
                </div>                                                     
                <div class="flex flex-row justify-center lg:justify-end">
                    <slot name="link"></slot> 
                </div>
            </div>
        </article>
    </div>     
    `
})

new Vue({
    el: '#app'
})