export default function ( number ){
  const opciones = {
    style: 'decimal', // Puedes usar 'currency' para monedas
    useGrouping: true, // Activa el uso del separador de miles
    minimumFractionDigits: 0, // Número mínimo de decimales
    maximumFractionDigits: 2, // Número máximo de decimales
    // Puedes especificar un idioma personalizado aquí
  };
  
 return number.toLocaleString('es-ES', opciones);
}