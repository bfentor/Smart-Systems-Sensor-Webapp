// Variables to store acceleration values
let accelerationX = null;
let accelerationY = null;
let accelerationZ = null;

// Array to store acceleration magnitudes
let accelerationValues = [];

// Check if the DeviceMotionEvent is supported
if (window.DeviceMotionEvent) {
    if (typeof DeviceMotionEvent.requestPermission === 'function') {
        // iOS 13+ requires permission
        const button = document.getElementById('button1');
        button.addEventListener('click', () => {
            DeviceMotionEvent.requestPermission()
                .then((response) => {
                    if (response === 'granted') {
                        window.addEventListener('devicemotion', (event) => {
                            // Get acceleration values
                            const acceleration = event.acceleration;

                            // Check if acceleration data is available
                            if (acceleration) {
                                accelerationX = acceleration.x ? acceleration.x.toFixed(2) : null;
                                accelerationY = acceleration.y ? acceleration.y.toFixed(2) : null;
                                accelerationZ = acceleration.z ? acceleration.z.toFixed(2) : null;

                                // Calculate magnitude and store it
                                if (accelerationX && accelerationY && accelerationZ) {
                                    const magnitude = Math.sqrt(
                                        Math.pow(acceleration.x, 2) +
                                        Math.pow(acceleration.y, 2) +
                                        Math.pow(acceleration.z, 2)
                                    );
                                    accelerationValues.push(magnitude);
                                }
                            } else {
                                console.log('Acceleration data is not available.');
                            }
                        });
                    } else {
                        alert('Permission to access device motion was denied.');
                    }
                })
                .catch((error) => {
                    console.error('Error requesting device motion permission:', error);
                });
        });
    } else {
        // Non-iOS devices or iOS versions below 13
        window.addEventListener('devicemotion', (event) => {
            // Get acceleration values
            const acceleration = event.acceleration;

            // Check if acceleration data is available
            if (acceleration) {
                accelerationX = acceleration.x ? acceleration.x.toFixed(2) : null;
                accelerationY = acceleration.y ? acceleration.y.toFixed(2) : null;
                accelerationZ = acceleration.z ? acceleration.z.toFixed(2) : null;

                // Calculate magnitude and store it
                if (accelerationX && accelerationY && accelerationZ) {
                    const magnitude = Math.sqrt(
                        Math.pow(acceleration.x, 2) +
                        Math.pow(acceleration.y, 2) +
                        Math.pow(acceleration.z, 2)
                    );
                    accelerationValues.push(magnitude);
                }
            } else {
                console.log('Acceleration data is not available.');
            }
        });
    }
} else {
    alert('DeviceMotionEvent is not supported on this device.');
}

//---------------------------------------------

const button = document.getElementById("button");
const img = document.getElementById("img");
const value = document.getElementById("value");

let current = 0;

// Function to calculate the average of acceleration values
function calculateAverage() {
    if (accelerationValues.length > 0) {
        const sum = accelerationValues.reduce((a, b) => a + b, 0);
        current = (sum / accelerationValues.length).toFixed(2);
    }
}

// Update the UI with the average value
button.addEventListener("click", (e) => {
    calculateAverage();
    value.innerText = current + "m/s^2";

    if (current > 3) {
        img.src = "/assets/spilled_cup.png";
        img.scale(current);
    }

    console.log("Button clicked, current average:", current);
});