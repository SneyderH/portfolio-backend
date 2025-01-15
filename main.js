const copyContent = async () => {
    // Seleccionar elementos
    const button = document.querySelector('.social-link-secondary-button');
    const icon = button.querySelector('i');
    const emailText = document.getElementById('email_address').textContent.trim();
    
    try {
        // Copiar el texto
        await navigator.clipboard.writeText(emailText);
        console.log('Contenido copiado');
        
        // Guardar estilos originales
        const originalIconStyle = icon.style.cssText;
        const originalButtonStyle = button.style.cssText;
        
        // Guardar la clase original del icono
        const originalIconClass = icon.className;
        
        // Cambiar el icono a check
        icon.className = 'fa-solid fa-check';
        
        // Crear y añadir el tooltip
        const tooltip = document.createElement('span');
        tooltip.textContent = '¡Copiado!';
        tooltip.style.cssText = `
            position: absolute;
            bottom: 100%;
            left: 50%;
            transform: translateX(-50%);
            background-color: #1B2B1D;
            color: #73D586;
            padding: 4px 8px;
            border-radius: 4px;
            font-size: 12px;
            white-space: nowrap;
            pointer-events: none;
            opacity: 0;
            transition: opacity 0.3s;
        `;
        button.style.position = 'relative';
        button.appendChild(tooltip);
        
        // Crear efecto de onda
        const ripple = document.createElement('span');
        ripple.style.cssText = `
            position: absolute;
            top: 50%;
            left: 50%;
            transform: translate(-50%, -50%);
            width: 35px;
            height: 35px;
            background-color: rgba(76, 175, 80, 0.2);
            border-radius: 50%;
            opacity: 1;
            transition: all 0.5s ease;
        `;
        button.appendChild(ripple);
        
        // Aplicar animaciones
        icon.style.transition = 'all 0.3s ease';
        icon.style.transform = 'scale(1.2)';
        icon.style.color = '#1B2B1D';
        
        tooltip.style.opacity = '1';
        
        // Animar la onda
        setTimeout(() => {
            ripple.style.transform = 'translate(-50%, -50%) scale(1.5)';
            ripple.style.opacity = '0';
        }, 0);
        
        // Limpiar después de la animación
        setTimeout(() => {
            // Restaurar estilos originales
            icon.style.cssText = originalIconStyle;
            button.style.cssText = originalButtonStyle;
            
            // Restaurar el icono original
            icon.className = originalIconClass;
            
            // Remover elementos creados
            button.removeChild(tooltip);
            button.removeChild(ripple);
        }, 2000);
        
    } catch (err) {
        console.error('Error al copiar: ' + err);
    }
}