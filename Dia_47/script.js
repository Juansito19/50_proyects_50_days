const testimonialsContainer = document.querySelector('.testimonial-container')
const testimonial = document.querySelector('.testimonial')
const userImage = document.querySelector('.user-image')
const username = document.querySelector('.username')
const role = document.querySelector('.role')

const testimonials = [
  {
    name: "Camila Martínez",
    position: "Especialista en Marketing Digital",
    photo: "https://randomuser.me/api/portraits/women/60.jpg",
    text: "¡Increíble experiencia de compra! La tienda ofrece una amplia variedad de ropa de alta calidad. Encontré prendas únicas y a la moda a precios asequibles. El servicio al cliente fue excepcional, y el personal estaba siempre dispuesto a ayudar. Definitivamente, mi tienda de ropa favorita.",
  },
  {
    name: "Valentina Ramírez",
    position: "Ingeniera de Software Senior",
    photo: "https://randomuser.me/api/portraits/women/47.jpg",
    text: "Lo que más me gusta de esta tienda es la diversidad de estilos que ofrece. Desde lo clásico hasta lo más vanguardista, siempre encuentro algo que se adapta a mi gusto. Además, la calidad de la ropa es excelente, y la atención al cliente hace que cada visita sea una experiencia positiva.",
  },
  {
    name: "Gabriela Flores",
    position: "Coordinadora de Recursos Humanos",
    photo: "https://randomuser.me/api/portraits/women/48.jpg",
    text: "Esta tienda me ha sorprendido gratamente con sus precios competitivos. Puedo vestirme a la moda sin romper mi presupuesto. La relación calidad-precio es insuperable. Además, las ofertas y descuentos frecuentes hacen que sea aún más atractiva. ¡Altamente recomendada para los amantes de la moda con un ojo en la billetera!",
  },
  {
    name: "Clara Rodríguez",
    position: "Asistente Administrativo",
    photo: "https://randomuser.me/api/portraits/women/49.jpg",
    text: "Me encanta comprar en esta tienda tanto en persona como en línea. La plataforma en línea es muy fácil de usar, con imágenes claras y descripciones detalladas de los productos. La entrega es rápida y confiable, y si alguna vez hay un problema, el servicio de atención al cliente responde de inmediato. Una experiencia de compra en línea sin complicaciones.",
  },
  {
    name: "Sofía Herrera",
    position: "Consultora Financiero",
    photo: "https://randomuser.me/api/portraits/women/50.jpg",
    text: "Esta tienda no solo ofrece moda de alta calidad, sino que también se preocupa por la sostenibilidad. Me alegra ver que están comprometidos con prácticas éticas y prendas ecoamigables. Comprar aquí me permite lucir bien mientras contribuyo a un mundo más sostenible. ¡Una tienda de ropa con conciencia ambiental!",
  },
  {
    name: "Isabella García",
    position: "Diseñadora Gráfica Creativa",
    photo: "https://randomuser.me/api/portraits/women/56.jpg",
    text: "Como hombre, a veces es difícil encontrar tiendas de ropa que ofrezcan una variedad tan amplia y estilizada para nosotros. Esta tienda ha sido un hallazgo para mí. No solo tienen las últimas tendencias de moda masculina, sino que también la calidad de las prendas es excepcional. La atención personalizada y el ambiente acogedor hacen que cada visita sea una experiencia única.",
  },
  {
    name: "Natalia Pérez",
    position: "Analista de Datos",
    photo: "https://randomuser.me/api/portraits/women/52.jpg",
    text: "Como madre, siempre estoy en busca de ropa adorable y de calidad para mis hijos. Esta tienda tiene una sección de ropa infantil realmente encantadora. Los diseños son lindos y a la moda, y la durabilidad de las prendas es impresionante. Además, el personal es amable y siempre dispuesto a ayudar a encontrar las mejores opciones para los más pequeños.",
  },
  {
    name: "Victoria Sánchez",
    position: "Gerente de Desarrollo de Negocios",
    photo: "https://randomuser.me/api/portraits/women/53.jpg",
    text: "Lo que me encanta de esta tienda es que puedo encontrar ropa para todas las ocasiones. Ya sea para un evento formal o para algo más casual, siempre hay opciones elegantes y modernas. La tienda sigue las últimas tendencias de moda, lo que hace que sea mi destino preferido para mantener mi guardarropa actualizado y versátil.",
  },
]

let idx = 1

function updateTestimonial() {
  const { name, position, photo, text } = testimonials[idx]
  testimonial.innerHTML = text
  userImage.src = photo
  username.innerHTML = name
  role.innerHTML = position

  idx++

  if (idx > testimonials.length - 1){
    idx = 0
  }
}

setInterval(updateTestimonial, 10000)
