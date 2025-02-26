import React, { useState, useEffect, useRef } from "react";

const TravelInsuranceForm = () => {
    const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
    const iframeRef = useRef(null);

    useEffect(() => {
        const handleResize = () => {
            setIsMobile(window.innerWidth <= 768);
        };

        window.addEventListener("resize", handleResize);
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Detectar la URL del iframe cuando cambia
    const handleIframeNavigation = () => {
        const iframe = iframeRef.current;
        if (!iframe) return;

        const currentUrl = iframe.contentWindow.location.href;
        const originalUrl = "https://www.aseguratuviaje.com/afiliados/jorgealfredolozano/";

        // Comprobamos si la URL ha cambiado
        if (currentUrl !== originalUrl) {
            // Abrimos la nueva URL en una nueva ventana
            window.open(currentUrl, "_blank");
            // Volvemos a cargar la página original en el iframe
            iframe.contentWindow.location.href = originalUrl;
        }
    };

    return (
        <div className="w-full h-auto bg-gray-100">
            <div className={`relative w-full overflow-hidden rounded-lg shadow-lg 
                ${isMobile ? "h-[1750px]" : "h-[750px]"}`}>
                <iframe
                    ref={iframeRef}
                    src="https://www.aseguratuviaje.com/afiliados/jorgealfredolozano/"
                    className={`absolute top-0 left-0 w-full border-none 
                    ${isMobile ? "h-[1980px] transform -translate-y-[110px]" : "h-[910px] transform -translate-y-[180px]"}`}
                    title="Travel Insurance Form"
                    scrolling="no"
                    onLoad={handleIframeNavigation}  // Detectamos cuando se carga una nueva URL en el iframe
                />
            </div>
        </div>
    );
};

export default TravelInsuranceForm;
