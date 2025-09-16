// sc.js

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
    }
} else {
    alert('DeviceMotionEvent is not supported on this device.');
}