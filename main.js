let timeout;

function showCoordinates(event) {
    console.clear();
    console.log(`X=${event.clientX}, Y=${event.clientY}`);
};

function handleMouseMove(event) {
    clearTimeout(timeout);

    timeout = setTimeout(() => {
        showCoordinates(event);
    }, 1000); 
};

document.addEventListener('mousemove', handleMouseMove);