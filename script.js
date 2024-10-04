// Define an array of planet objects, each with unique properties
const planets = [
    { id: 'mercury', distance: 70, speed: 4 },   // Mercury: distance from the sun and speed of rotation
    { id: 'venus', distance: 100, speed: 3 },     // Venus: distance from the sun and speed of rotation
    { id: 'earth', distance: 130, speed: 2 },     // Earth: distance from the sun and speed of rotation
    { id: 'mars', distance: 160, speed: 1.5 },    // Mars: distance from the sun and speed of rotation
    { id: 'jupiter', distance: 200, speed: 1 },    // Jupiter: distance from the sun and speed of rotation
    { id: 'saturn', distance: 250, speed: 0.8 },   // Saturn: distance from the sun and speed of rotation
    { id: 'uranus', distance: 300, speed: 0.5 },   // Uranus: distance from the sun and speed of rotation
    { id: 'neptune', distance: 350, speed: 0.4 }    // Neptune: distance from the sun and speed of rotation
];

// Define the animate function to update planet positions
function animate() {
    // Loop through each planet in the planets array
    planets.forEach(planet => {
        // Get the HTML element corresponding to the current planet using its ID
        const element = document.getElementById(planet.id);
        
        // Update the planet's angle: initialize it to 0 if not already set, then add the planet's speed
        planet.angle = (planet.angle || 0) + planet.speed; // Update angle

        // Calculate the new X position based on the current angle and distance from the sun
        const x = planet.distance * Math.cos(planet.angle * (Math.PI / 180));
        // Calculate the new Y position based on the current angle and distance from the sun
        const y = planet.distance * Math.sin(planet.angle * (Math.PI / 180));

        // Update the planet's CSS transform property to move it to the new position
        element.style.transform = `translate(-50%, -50%) translate(${x}px, ${y}px)`;
    });

    // Request the next animation frame to continue the animation loop
    requestAnimationFrame(animate);
}

// Start the animation by calling the animate function for the first time
animate();
