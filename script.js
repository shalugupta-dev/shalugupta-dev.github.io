/* =========================================
   3D THREE.JS BACKGROUND
========================================= */

const canvas = document.getElementById("three-canvas");

const scene = new THREE.Scene();

const camera = new THREE.PerspectiveCamera(
    60,
    window.innerWidth / window.innerHeight,
    0.1,
    1000
);

camera.position.z = 5;


/* =========================================
   RENDERER
========================================= */

const renderer = new THREE.WebGLRenderer({
    canvas: canvas,
    alpha: true,
    antialias: true
});

renderer.setSize(
    window.innerWidth,
    window.innerHeight
);

renderer.setPixelRatio(
    Math.min(window.devicePixelRatio, 2)
);


/* =========================================
   LIGHTS
========================================= */

const ambientLight = new THREE.AmbientLight(
    0xffffff,
    0.5
);

scene.add(ambientLight);


const pointLight = new THREE.PointLight(
    0x00ffaa,
    3,
    100
);

pointLight.position.set(2, 2, 4);

scene.add(pointLight);


/* =========================================
   3D WIREFRAME OBJECT
========================================= */

const geometry = new THREE.IcosahedronGeometry(
    1.5,
    1
);

const material = new THREE.MeshBasicMaterial({
    color: 0x00ffaa,
    wireframe: true,
    transparent: true,
    opacity: 0.25
});

const shape = new THREE.Mesh(
    geometry,
    material
);

shape.position.set(
    2.5,
    0.5,
    -1
);

scene.add(shape);


/* =========================================
   SECOND 3D OBJECT
========================================= */

const torusGeometry = new THREE.TorusGeometry(
    1.8,
    0.015,
    16,
    100
);

const torusMaterial = new THREE.MeshBasicMaterial({
    color: 0x5c7cff,
    transparent: true,
    opacity: 0.35
});

const torus = new THREE.Mesh(
    torusGeometry,
    torusMaterial
);

torus.position.set(
    -3,
    1.5,
    -2
);

torus.rotation.x = 1;

scene.add(torus);


/* =========================================
   PARTICLES
========================================= */

const particleCount = 1200;

const particleGeometry = new THREE.BufferGeometry();

const particlePositions = new Float32Array(
    particleCount * 3
);

for (let i = 0; i < particleCount * 3; i++) {

    particlePositions[i] =
        (Math.random() - 0.5) * 25;

}

particleGeometry.setAttribute(
    "position",
    new THREE.BufferAttribute(
        particlePositions,
        3
    )
);


const particleMaterial = new THREE.PointsMaterial({

    color: 0x00ffaa,

    size: 0.025,

    transparent: true,

    opacity: 0.7

});


const particles = new THREE.Points(
    particleGeometry,
    particleMaterial
);

scene.add(particles);


/* =========================================
   MOUSE MOVEMENT
========================================= */

let mouseX = 0;
let mouseY = 0;

document.addEventListener(
    "mousemove",
    function (event) {

        mouseX =
            (event.clientX / window.innerWidth) * 2 - 1;

        mouseY =
            -(event.clientY / window.innerHeight) * 2 + 1;

    }
);


/* =========================================
   ANIMATION
========================================= */

function animate() {

    requestAnimationFrame(animate);


    /* Main object rotation */

    shape.rotation.x += 0.002;
    shape.rotation.y += 0.004;


    /* Torus rotation */

    torus.rotation.x += 0.002;
    torus.rotation.y += 0.003;


    /* Particles */

    particles.rotation.y += 0.0005;


    /* Mouse parallax */

    camera.position.x +=
        (mouseX * 0.5 - camera.position.x) * 0.02;

    camera.position.y +=
        (mouseY * 0.3 - camera.position.y) * 0.02;


    camera.lookAt(scene.position);


    renderer.render(
        scene,
        camera
    );

}

animate();


/* =========================================
   WINDOW RESIZE
========================================= */

window.addEventListener(
    "resize",
    function () {

        camera.aspect =
            window.innerWidth /
            window.innerHeight;

        camera.updateProjectionMatrix();

        renderer.setSize(
            window.innerWidth,
            window.innerHeight
        );

        renderer.setPixelRatio(
            Math.min(window.devicePixelRatio, 2)
        );

    }
);


/* =========================================
   3D CARD MOUSE EFFECT
========================================= */

const devopsCard =
    document.querySelector(".devops-card");

if (devopsCard) {

    devopsCard.addEventListener(
        "mousemove",
        function (event) {

            const rect =
                devopsCard.getBoundingClientRect();

            const x =
                event.clientX - rect.left;

            const y =
                event.clientY - rect.top;

            const centerX =
                rect.width / 2;

            const centerY =
                rect.height / 2;

            const rotateX =
                ((y - centerY) / centerY) * -8;

            const rotateY =
                ((x - centerX) / centerX) * 8;

            devopsCard.style.transform =
                `rotateX(${rotateX}deg)
                 rotateY(${rotateY}deg)
                 translateY(-5px)`;

        }
    );


    devopsCard.addEventListener(
        "mouseleave",
        function () {

            devopsCard.style.transform =
                "rotateY(-12deg) rotateX(8deg)";

        }
    );

}


/* =========================================
   SKILL CARD 3D EFFECT
========================================= */

const skillCards =
    document.querySelectorAll(".skill-card");

skillCards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -7;

                const rotateY =
                    ((x - centerX) / centerX) * 7;

                card.style.transform =
                    `perspective(700px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =========================================
   PROJECT CARD 3D EFFECT
========================================= */

const projectCards =
    document.querySelectorAll(".project-card");

projectCards.forEach(
    function (card) {

        card.addEventListener(
            "mousemove",
            function (event) {

                const rect =
                    card.getBoundingClientRect();

                const x =
                    event.clientX - rect.left;

                const y =
                    event.clientY - rect.top;

                const centerX =
                    rect.width / 2;

                const centerY =
                    rect.height / 2;

                const rotateX =
                    ((y - centerY) / centerY) * -5;

                const rotateY =
                    ((x - centerX) / centerX) * 5;

                card.style.transform =
                    `perspective(900px)
                     rotateX(${rotateX}deg)
                     rotateY(${rotateY}deg)
                     translateY(-10px)`;

            }
        );


        card.addEventListener(
            "mouseleave",
            function () {

                card.style.transform =
                    "";

            }
        );

    }
);


/* =========================================
   FOOTER YEAR
========================================= */

const year =
    document.getElementById("year");

if (year) {

    year.textContent =
        new Date().getFullYear();

}