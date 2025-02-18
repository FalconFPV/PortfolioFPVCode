import LogoWall from "./LogoWall";
import t1 from "../../Assets/Testimonials/t1.webp";
import t2 from "../../Assets/Testimonials/t2.webp";
import t3 from "../../Assets/Testimonials/t3.webp";

const testimonials = [
   {
      photo: t1,
      name: "Ana Pérez",
      opinion: `"¡El servicio fue excelente! Estoy muy satisfecho con el resultado."`,
   },
   {
      photo: t2,
      name: "Julian Gómez",
      opinion: `"Gran experiencia. Definitivamente lo recomendaría."`,
   },
   {
      photo: t3,
      name: "Silvia Martínez",
      opinion: `"Atención al detalle impresionante. ¡Volveré a contratarlos!"`,
   },
];

const Testimonials = () => (
   <div className="testimonials-container">
      <h1>Opiniones de clientes</h1>
      <div className="testimonials">
         <LogoWall
            items={testimonials}
            direction="horizontal"
            pauseOnHover={true}
            size="clamp(8rem, 1rem + 20vmin, 25rem)"
            duration="60s"
            bgColor="#060606"
            bgAccentColor="#111111"
         />
      </div>
   </div>
);

export default Testimonials;