// Base de datos de banderas y países con URLs de imágenes
const countries = [
    { name: "Argentina", code: "AR", flag: "https://flagcdn.com/w320/ar.png" },
    { name: "Brasil", code: "BR", flag: "https://flagcdn.com/w320/br.png" },
    { name: "Canadá", code: "CA", flag: "https://flagcdn.com/w320/ca.png" },
    { name: "Chile", code: "CL", flag: "https://flagcdn.com/w320/cl.png" },
    { name: "Colombia", code: "CO", flag: "https://flagcdn.com/w320/co.png" },
    { name: "España", code: "ES", flag: "https://flagcdn.com/w320/es.png" },
    { name: "Estados Unidos", code: "US", flag: "https://flagcdn.com/w320/us.png" },
    { name: "Francia", code: "FR", flag: "https://flagcdn.com/w320/fr.png" },
    { name: "Alemania", code: "DE", flag: "https://flagcdn.com/w320/de.png" },
    { name: "Italia", code: "IT", flag: "https://flagcdn.com/w320/it.png" },
    { name: "Japón", code: "JP", flag: "https://flagcdn.com/w320/jp.png" },
    { name: "México", code: "MX", flag: "https://flagcdn.com/w320/mx.png" },
    { name: "Perú", code: "PE", flag: "https://flagcdn.com/w320/pe.png" },
    { name: "Reino Unido", code: "GB", flag: "https://flagcdn.com/w320/gb.png" },
    { name: "Rusia", code: "RU", flag: "https://flagcdn.com/w320/ru.png" },
    { name: "China", code: "CN", flag: "https://flagcdn.com/w320/cn.png" },
    { name: "India", code: "IN", flag: "https://flagcdn.com/w320/in.png" },
    { name: "Australia", code: "AU", flag: "https://flagcdn.com/w320/au.png" },
    { name: "Sudáfrica", code: "ZA", flag: "https://flagcdn.com/w320/za.png" },
    { name: "Egipto", code: "EG", flag: "https://flagcdn.com/w320/eg.png" },
    { name: "Corea del Sur", code: "KR", flag: "https://flagcdn.com/w320/kr.png" },
    { name: "Portugal", code: "PT", flag: "https://flagcdn.com/w320/pt.png" },
    { name: "Grecia", code: "GR", flag: "https://flagcdn.com/w320/gr.png" },
    { name: "Turquía", code: "TR", flag: "https://flagcdn.com/w320/tr.png" },
    { name: "Suecia", code: "SE", flag: "https://flagcdn.com/w320/se.png" },
    { name: "Noruega", code: "NO", flag: "https://flagcdn.com/w320/no.png" },
    { name: "Finlandia", code: "FI", flag: "https://flagcdn.com/w320/fi.png" },
    { name: "Dinamarca", code: "DK", flag: "https://flagcdn.com/w320/dk.png" },
    { name: "Holanda", code: "NL", flag: "https://flagcdn.com/w320/nl.png" },
    { name: "Bélgica", code: "BE", flag: "https://flagcdn.com/w320/be.png" },
    { name: "Suiza", code: "CH", flag: "https://flagcdn.com/w320/ch.png" },
    { name: "Austria", code: "AT", flag: "https://flagcdn.com/w320/at.png" },
    { name: "Polonia", code: "PL", flag: "https://flagcdn.com/w320/pl.png" },
    { name: "Ucrania", code: "UA", flag: "https://flagcdn.com/w320/ua.png" },
    { name: "Israel", code: "IL", flag: "https://flagcdn.com/w320/il.png" },
    { name: "Arabia Saudita", code: "SA", flag: "https://flagcdn.com/w320/sa.png" },
    { name: "Emiratos Árabes Unidos", code: "AE", flag: "https://flagcdn.com/w320/ae.png" },
    { name: "Cuba", code: "CU", flag: "https://flagcdn.com/w320/cu.png" },
    { name: "Venezuela", code: "VE", flag: "https://flagcdn.com/w320/ve.png" },
    { name: "Uruguay", code: "UY", flag: "https://flagcdn.com/w320/uy.png" },
    { name: "Paraguay", code: "PY", flag: "https://flagcdn.com/w320/py.png" },
    { name: "Bolivia", code: "BO", flag: "https://flagcdn.com/w320/bo.png" },
    { name: "Ecuador", code: "EC", flag: "https://flagcdn.com/w320/ec.png" },
    { name: "Costa Rica", code: "CR", flag: "https://flagcdn.com/w320/cr.png" },
    { name: "Panamá", code: "PA", flag: "https://flagcdn.com/w320/pa.png" },
    { name: "República Dominicana", code: "DO", flag: "https://flagcdn.com/w320/do.png" },
    { name: "Puerto Rico", code: "PR", flag: "https://flagcdn.com/w320/pr.png" },
    { name: "Jamaica", code: "JM", flag: "https://flagcdn.com/w320/jm.png" },
    { name: "Haití", code: "HT", flag: "https://flagcdn.com/w320/ht.png" },
    { name: "Filipinas", code: "PH", flag: "https://flagcdn.com/w320/ph.png" },
    { name: "Vietnam", code: "VN", flag: "https://flagcdn.com/w320/vn.png" },
    { name: "Tailandia", code: "TH", flag: "https://flagcdn.com/w320/th.png" },
    { name: "Indonesia", code: "ID", flag: "https://flagcdn.com/w320/id.png" },
    { name: "Malasia", code: "MY", flag: "https://flagcdn.com/w320/my.png" },
    { name: "Singapur", code: "SG", flag: "https://flagcdn.com/w320/sg.png" },
    { name: "Nueva Zelanda", code: "NZ", flag: "https://flagcdn.com/w320/nz.png" },
    { name: "Irlanda", code: "IE", flag: "https://flagcdn.com/w320/ie.png" },
    { name: "Islandia", code: "IS", flag: "https://flagcdn.com/w320/is.png" }
];

// Variables del juego
let currentGame = {
    score: 0,
    round: 1,
    lives: 3,
    difficulty: "easy",
    correctAnswers: 0,
    currentCountry: null,
    options: [],
    gameActive: false,
    usedCountries: []
};

let usedCountriesInSession = [];

// Elementos del DOM
const menuScreen = document.getElementById("menu-screen");
const instructionsScreen = document.getElementById("instructions-screen");
const gameScreen = document.getElementById("game-screen");
const resultsScreen = document.getElementById("results-screen");
const startBtn = document.getElementById("start-btn");
const instructionsBtn = document.getElementById("instructions-btn");
const backMenuBtn = document.getElementById("back-menu-btn");
const endGameBtn = document.getElementById("end-game-btn");
const playAgainBtn = document.getElementById("play-again-btn");
const backToMenuBtn = document.getElementById("back-to-menu-btn");
const scoreElement = document.getElementById("score");
const roundElement = document.getElementById("round");
const livesElement = document.getElementById("lives");
const flagImage = document.getElementById("flag-image");
const optionButtons = document.querySelectorAll(".option-btn");
const feedbackElement = document.getElementById("feedback");
const correctAnswersElement = document.getElementById("correct-answers");
const finalScoreElement = document.getElementById("final-score");
const totalRoundsElement = document.getElementById("total-rounds");
const difficultyButtons = document.querySelectorAll(".difficulty-btn");

// Inicialización del juego
function initGame() {
    // Configurar listeners de los botones
    startBtn.addEventListener("click", startGame);
    instructionsBtn.addEventListener("click", showInstructions);
    backMenuBtn.addEventListener("click", showMenu);
    endGameBtn.addEventListener("click", endGame);
    playAgainBtn.addEventListener("click", restartGame);
    backToMenuBtn.addEventListener("click", showMenu);

    console.log("=== INICIALIZACIÓN DEL JUEGO ===");
    console.log(`Total de países en la base de datos: ${countries.length}`);
    console.log("Primeros 5 países:", countries.slice(0, 5).map(c => c.name));
    
    // Configurar botones de dificultad
    difficultyButtons.forEach(button => {
        button.addEventListener("click", function() {
            difficultyButtons.forEach(btn => btn.classList.remove("active"));
            this.classList.add("active");
            currentGame.difficulty = this.dataset.level;
        });
    });
    
    // Configurar botones de opciones
    optionButtons.forEach(button => {
        button.addEventListener("click", function() {
            if (!currentGame.gameActive) return;
            
            const selectedIndex = parseInt(this.dataset.index);
            checkAnswer(selectedIndex);
        });
    });
    
    // Pre-cargar algunas imágenes para mejor experiencia
    preloadFlags();
    
    // Inicializar con la pantalla del menú visible
    showMenu();
}

// Pre-cargar imágenes de banderas
function preloadFlags() {
    console.log("Pre-cargando imágenes de banderas...");
    // Pre-cargamos las primeras 10 banderas para una experiencia más fluida
    for (let i = 0; i < Math.min(10, countries.length); i++) {
        const img = new Image();
        img.src = countries[i].flag;
    }
}

// Mostrar menú principal
function showMenu() {
    menuScreen.classList.add("active");
    instructionsScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    resultsScreen.classList.remove("active");
}

// Mostrar instrucciones
function showInstructions() {
    menuScreen.classList.remove("active");
    instructionsScreen.classList.add("active");
    gameScreen.classList.remove("active");
    resultsScreen.classList.remove("active");
}

// Iniciar juego
function startGame() {
    // Reiniciar estadísticas
    currentGame.score = 0;
    currentGame.round = 1;
    currentGame.lives = 3;
    currentGame.correctAnswers = 0;
    currentGame.gameActive = true;
    
    // LIMPIAR la lista de países usados
    usedCountriesInSession = [];
    
    // Actualizar UI
    scoreElement.textContent = currentGame.score;
    roundElement.textContent = currentGame.round;
    livesElement.textContent = currentGame.lives;

    console.log(`Iniciando juego - Ronda: ${currentGame.round}, Vidas: ${currentGame.lives}`);
    
    // Cambiar a pantalla de juego
    menuScreen.classList.remove("active");
    instructionsScreen.classList.remove("active");
    gameScreen.classList.add("active");
    resultsScreen.classList.remove("active");
    
    // Generar primera pregunta
    generateQuestion();
}

// Generar una nueva pregunta
function generateQuestion() {
    // 1. Filtrar países que NO se han usado en esta sesión
    let availableCountries = countries.filter(country => 
        !usedCountriesInSession.includes(country.name)
    );
    
    // 2. Si ya usamos muchos países, reiniciar la lista
    if (availableCountries.length < 10) {
        console.log("Reiniciando lista de países usados...");
        usedCountriesInSession = [];
        availableCountries = countries;
    }
    
    // 3. Seleccionar un país aleatorio de los disponibles
    const correctIndex = Math.floor(Math.random() * availableCountries.length);
    currentGame.currentCountry = availableCountries[correctIndex];
    
    console.log(`País correcto: ${currentGame.currentCountry.name}`);
    console.log(`Países ya usados: ${usedCountriesInSession.length}`);
    
    // 4. Añadir este país a la lista de usados
    usedCountriesInSession.push(currentGame.currentCountry.name);
    
    // 5. Cargar la bandera
    flagImage.innerHTML = '';
    const img = new Image();
    img.src = currentGame.currentCountry.flag;
    img.alt = `Bandera de ${currentGame.currentCountry.name}`;
    img.classList.add("flag-img");
    flagImage.appendChild(img);
    
    // 6. Crear 4 opciones (SIEMPRE incluyendo la correcta)
    currentGame.options = [currentGame.currentCountry.name]; // La correcta primero
    
    // 7. Añadir 3 opciones incorrectas DIFERENTES
    // Primero, buscar opciones incorrectas que NO sean el país correcto
    let attempts = 0;
    const maxAttempts = 50; // Para evitar bucle infinito
    
    while (currentGame.options.length < 4 && attempts < maxAttempts) {
        const randomIndex = Math.floor(Math.random() * countries.length);
        const randomCountry = countries[randomIndex].name;
        
        // Verificar: no sea el correcto y no esté ya en las opciones
        if (randomCountry !== currentGame.currentCountry.name && 
            !currentGame.options.includes(randomCountry)) {
            currentGame.options.push(randomCountry);
        }
        attempts++;
    }
    
    // 8. Si no conseguimos suficientes opciones, usar estas de respaldo
    if (currentGame.options.length < 4) {
        const backupOptions = ["Francia", "Alemania", "Italia", "Japón", 
                              "Canadá", "Australia", "Brasil", "China"];
        
        for (let option of backupOptions) {
            if (currentGame.options.length >= 4) break;
            
            if (option !== currentGame.currentCountry.name && 
                !currentGame.options.includes(option)) {
                currentGame.options.push(option);
            }
        }
    }
    
    // 9. Mezclar las opciones
    shuffleArray(currentGame.options);
    
    // 10. VERIFICACIÓN FINAL
    if (!currentGame.options.includes(currentGame.currentCountry.name)) {
        console.error("ERROR: La opción correcta se perdió. Corrigiendo...");
        const randomPos = Math.floor(Math.random() * 4);
        currentGame.options[randomPos] = currentGame.currentCountry.name;
    }
    
    // 11. Mostrar en los botones
    optionButtons.forEach((btn, i) => {
        if (i < currentGame.options.length) {
            btn.textContent = currentGame.options[i];
            btn.classList.remove("correct", "incorrect");
            btn.disabled = false;
        }
    });
    
    console.log(`Opciones: ${currentGame.options.join(", ")}`);
    console.log(`Posición correcta: ${currentGame.options.indexOf(currentGame.currentCountry.name)}`);
}

// Función para verificar el estado actual del juego
function verifyCurrentGameState() {
    console.log("=== VERIFICACIÓN DEL ESTADO ACTUAL ===");
    
    if (!currentGame.currentCountry) {
        console.error("❌ ERROR: currentGame.currentCountry es undefined o null");
        return false;
    }
    
    if (!currentGame.options || currentGame.options.length !== 4) {
        console.error(`❌ ERROR: currentGame.options tiene ${currentGame.options ? currentGame.options.length : 0} elementos (debería tener 4)`);
        return false;
    }
    
    const hasCorrectOption = currentGame.options.includes(currentGame.currentCountry.name);
    
    if (!hasCorrectOption) {
        console.error(`❌ ERROR CRÍTICO: El país "${currentGame.currentCountry.name}" NO está en las opciones`);
        console.log("Opciones disponibles:", currentGame.options);
        
        // Mostrar en pantalla para debug
        if (feedbackElement) {
            feedbackElement.textContent = `ERROR: "${currentGame.currentCountry.name}" no está en las opciones`;
            feedbackElement.classList.add("incorrect");
        }
        
        return false;
    }
    
    console.log(`✓ País correcto: ${currentGame.currentCountry.name}`);
    console.log(`✓ Opciones: ${currentGame.options.join(", ")}`);
    console.log(`✓ La opción correcta está en posición: ${currentGame.options.indexOf(currentGame.currentCountry.name)}`);
    
    return true;
}

setTimeout(verifyCurrentGameState, 100);

// Función para obtener emoji de bandera como fallback
function getFlagEmoji(countryCode) {
    // Convierte código de país a emoji regional indicator
    const codePoints = countryCode
        .toUpperCase()
        .split('')
        .map(char => 127397 + char.charCodeAt());
    return String.fromCodePoint(...codePoints);
}

// Mezclar array (algoritmo Fisher-Yates)
function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
    return array;
}

// Verificar respuesta
function checkAnswer(selectedIndex) {
    console.log(`=== CHECK ANSWER INVOCADA === Ronda actual: ${currentGame.round}`);
    
    // BLOQUEAR múltiples ejecuciones
    if (window.answerBeingProcessed) {
        console.log("Ya se está procesando una respuesta, ignorando...");
        return;
    }
    
    window.answerBeingProcessed = true;
    
    // Validaciones básicas
    if (!currentGame.gameActive || !currentGame.currentCountry || !currentGame.options) {
        console.error("Estado inválido para procesar respuesta");
        window.answerBeingProcessed = false;
        return;
    }
    
    const selectedCountry = currentGame.options[selectedIndex];
    const isCorrect = selectedCountry === currentGame.currentCountry.name;
    
    console.log(`Seleccionado: "${selectedCountry}", Correcto: "${currentGame.currentCountry.name}"`);
    console.log(`¿Es correcto? ${isCorrect}`);
    
    // Deshabilitar botones visualmente
    optionButtons.forEach(button => {
        button.disabled = true;
        if (button.textContent === currentGame.currentCountry.name) {
            button.classList.add("correct");
        } else if (button.textContent === selectedCountry && !isCorrect) {
            button.classList.add("incorrect");
        }
    });
    
    // Procesar respuesta CORRECTA
    if (isCorrect) {
        console.log("Respuesta CORRECTA procesándose...");
        
        // Calcular puntos UNA VEZ
        let points = 10;
        if (currentGame.difficulty === "medium") points = 15;
        if (currentGame.difficulty === "hard") points = 20;
        
        // Actualizar estado UNA VEZ
        currentGame.score += points;
        currentGame.correctAnswers++;
        
        console.log(`Puntos añadidos: ${points}, Puntuación total: ${currentGame.score}`);
        
        // Mostrar feedback
        feedbackElement.textContent = `¡Correcto! +${points} puntos`;
        feedbackElement.className = "feedback correct";
        
        // Actualizar UI INMEDIATAMENTE
        scoreElement.textContent = currentGame.score;
        
        // Programar siguiente ronda con timeout CONTROLADO
        const timeoutId = setTimeout(() => {
            console.log(`Pasando de ronda ${currentGame.round} a ${currentGame.round + 1}`);
            
            // Incrementar ronda SOLO UNA VEZ
            currentGame.round += 1;
            roundElement.textContent = currentGame.round;
            
            // Preparar para siguiente pregunta
            window.answerBeingProcessed = false;
            optionButtons.forEach(btn => {
                btn.disabled = false;
                btn.style.pointerEvents = 'auto';
                btn.classList.remove("correct", "incorrect");
            });
            
            generateQuestion();
        }, 1500);
        
        activeTimeouts.push(timeoutId);
        
    } else {
        // Procesar respuesta INCORRECTA
        console.log("Respuesta INCORRECTA procesándose...");
        
        // Restar UNA VIDA SOLO UNA VEZ
        currentGame.lives -= 1;
        
        // Limitar a 0 mínimo
        if (currentGame.lives < 0) currentGame.lives = 0;
        
        console.log(`Vidas restantes: ${currentGame.lives}`);
        
        // Mostrar feedback
        feedbackElement.textContent = `Incorrecto. Era ${currentGame.currentCountry.name}`;
        feedbackElement.className = "feedback incorrect";
        
        // Actualizar UI INMEDIATAMENTE
        livesElement.textContent = currentGame.lives;
        
        if (currentGame.lives <= 0) {
            // Fin del juego
            const timeoutId = setTimeout(() => {
                currentGame.gameActive = false;
                window.answerBeingProcessed = false;
                endGame();
            }, 2000);
            
            activeTimeouts.push(timeoutId);
            
        } else {
            // Continuar jugando
            const timeoutId = setTimeout(() => {
                console.log(`Continuando de ronda ${currentGame.round} a ${currentGame.round + 1}`);
                
                // Incrementar ronda SOLO UNA VEZ
                currentGame.round += 1;
                roundElement.textContent = currentGame.round;
                
                // Preparar para siguiente pregunta
                window.answerBeingProcessed = false;
                optionButtons.forEach(btn => {
                    btn.disabled = false;
                    btn.style.pointerEvents = 'auto';
                    btn.classList.remove("correct", "incorrect");
                });
                
                generateQuestion();
            }, 2000);
            
            activeTimeouts.push(timeoutId);
        }
    }
}

// Terminar juego
function endGame() {
    currentGame.gameActive = false;
    
    // Actualizar estadísticas en pantalla de resultados
    correctAnswersElement.textContent = currentGame.correctAnswers;
    finalScoreElement.textContent = currentGame.score;
    totalRoundsElement.textContent = currentGame.round - 1;
    
    // Cambiar a pantalla de resultados
    menuScreen.classList.remove("active");
    instructionsScreen.classList.remove("active");
    gameScreen.classList.remove("active");
    resultsScreen.classList.add("active");
}

// Reiniciar juego
function restartGame() {
    // Reiniciar estadísticas
    currentGame.score = 0;
    currentGame.round = 1;
    currentGame.lives = 3;
    currentGame.correctAnswers = 0;
    currentGame.gameActive = true;
    
    // LIMPIAR la lista de países usados
    usedCountriesInSession = [];
    
    // Actualizar UI
    scoreElement.textContent = currentGame.score;
    roundElement.textContent = currentGame.round;
    livesElement.textContent = currentGame.lives;

    console.log(`Reiniciando juego - Ronda: ${currentGame.round}, Vidas: ${currentGame.lives}`);
    
    // Cambiar a pantalla de juego
    menuScreen.classList.remove("active");
    instructionsScreen.classList.remove("active");
    gameScreen.classList.add("active");
    resultsScreen.classList.remove("active");
    
    // Generar primera pregunta
    generateQuestion();
}

// Botones de compartir en redes sociales
document.querySelectorAll(".social-btn").forEach(button => {
    button.addEventListener("click", function() {
        const platform = this.querySelector("i").className;
        let url = "";
        let text = `¡Acabo de obtener ${currentGame.score} puntos en el juego de Adivina la Bandera! ¿Puedes superarme?`;
        
        if (platform.includes("twitter")) {
            url = `https://twitter.com/intent/tweet?text=${encodeURIComponent(text)}&url=${encodeURIComponent(window.location.href)}`;
        } else if (platform.includes("facebook")) {
            url = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}&quote=${encodeURIComponent(text)}`;
        } else if (platform.includes("whatsapp")) {
            url = `https://wa.me/?text=${encodeURIComponent(text + " " + window.location.href)}`;
        }
        
        if (url) {
            window.open(url, "_blank", "width=600,height=400");
        }
    });
});

// Inicializar el juego cuando se carga la página
document.addEventListener("DOMContentLoaded", initGame);

// Detectar dispositivo móvil y ajustar comportamiento
function detectMobileDevice() {
    return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);
}

// Optimizar para dispositivos táctiles
function optimizeForTouch() {
    if (detectMobileDevice()) {
        console.log("Dispositivo móvil detectado - optimizando interfaz...");
        
        // Aumentar el tamaño de los botones para mejor toque
        document.querySelectorAll('.option-btn, .btn').forEach(button => {
            button.style.minHeight = '50px';
        });
        
        // Deshabilitar hover effects en móviles
        document.body.classList.add('mobile-device');
        
        // Ajustar el tamaño de fuente si es muy pequeño
        if (window.innerWidth <= 360) {
            document.documentElement.style.fontSize = '14px';
        }
    }
}

// Llamar a la función de optimización al cargar
document.addEventListener('DOMContentLoaded', function() {
    initGame();
    optimizeForTouch();
    
    // También optimizar al cambiar tamaño de ventana
    window.addEventListener('resize', optimizeForTouch);
});