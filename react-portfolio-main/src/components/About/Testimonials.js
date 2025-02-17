import LogoWall from "./LogoWall";

const testimonials = [
   {
      photo: "https://15f8034cdff6595cbfa1-1dd67c28d3aade9d3442ee99310d18bd.ssl.cf3.rackcdn.com/uploaded_thumb_big/a20a8b7a06b5a726408f68df59ba9c3d/fotografia_de_carnet_y_pasaporte_yenes_fotografos.png",
      name: "Ana Pérez",
      opinion: `"¡El servicio fue excelente! Estoy muy satisfecho con el resultado."`,
   },
   {
      photo: "https://15f8034cdff6595cbfa1-1dd67c28d3aade9d3442ee99310d18bd.ssl.cf3.rackcdn.com/uploaded_thumb_big/a20a8b7a06b5a726408f68df59ba9c3d/fotografia_de_carnet_y_pasaporte_yenes_fotografos.png",
      name: "Julian Gómez",
      opinion: `"Gran experiencia. Definitivamente lo recomendaría."`,
   },
   {
      photo: "https://15f8034cdff6595cbfa1-1dd67c28d3aade9d3442ee99310d18bd.ssl.cf3.rackcdn.com/uploaded_thumb_big/a20a8b7a06b5a726408f68df59ba9c3d/fotografia_de_carnet_y_pasaporte_yenes_fotografos.png",
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