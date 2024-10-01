import WhatsAppIcon from "../../../assets/whatsapp-icon.png";

const WhatsApp = ({ phone, msg }) => {
    const handleWhatsAppClick = (phoneNumber, message) => {
        const encodedMessage = encodeURIComponent(message);
        const whatsappLink = `https://api.whatsapp.com/send?phone=${phoneNumber}&text=${encodedMessage}`;
        window.open(whatsappLink, "_blank");
    };

    return (
        <div>
            <img
                onClick={() => handleWhatsAppClick(phone, msg)}
                src={WhatsAppIcon}
                alt="WhatsApp"
                className="cursor-pointer ml-12 md:ml-3 w-14 h-14 hover:h-12 hover:w-12"
            />
        </div>
    );
};

export default WhatsApp;
