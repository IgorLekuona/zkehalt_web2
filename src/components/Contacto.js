
import "../App.css";
import ContactoForm from "../utils/ContactoForm";
import LocationMap from "../utils/LocationMap";

const Contacto = () => {
    return(
        <div className="contacto-container">
            <h2>KONTAKTUA</h2>
            <h2 className="w-100"><span className="contacto-header">ZKE HALTEROFILIA</span></h2>
            <h5>Eskatu probatzeko aukera!</h5>
            <ContactoForm />
            <LocationMap />
        </div>
    );
}

export default Contacto;