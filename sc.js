// sc.js

// Check if the DeviceMotionEvent is supported
if (window.DeviceMotionEvent) {
    window.addEventListener('devicemotion', (event) => {
        // Get acceleration values
        const acceleration = event.acceleration;

        // Check if acceleration data is available
        if (acceleration) {
            const x = acceleration.x ? acceleration.x.toFixed(2) : 'N/A';
            const y = acceleration.y ? acceleration.y.toFixed(2) : 'N/A';
            const z = acceleration.z ? acceleration.z.toFixed(2) : 'N/A';

            // Display the acceleration values in the HTML
            document.getElementById('p1').textContent = `X: ${x}`;
            document.getElementById('p2').textContent = `Y: ${y}`;
            document.getElementById('p3').textContent = `Z: ${z}`;
        } else {
            console.log('Acceleration data is not available.');
        }
    });
} else {
    alert('DeviceMotionEvent is not supported on this device.');
}