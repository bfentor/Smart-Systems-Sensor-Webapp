function handleMotionEvent(event) {
    const x = event.accelerationIncludingGravity.x;
    const y = event.accelerationIncludingGravity.y;
    const z = event.accelerationIncludingGravity.z;

    document.getElementById("p1").textContent = `X: ${x}`;
    document.getElementById("p2").textContent = `Y: ${y}`;
    document.getElementById("p3").textContent = `Z: ${z}`;
}

window.addEventListener("devicemotion", handleMotionEvent, true);