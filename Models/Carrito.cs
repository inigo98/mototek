using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Carrito
    {
        public long IdCarrito { get; set; }
        public long? IdUsuario { get; set; }
        public long? IdDireccion { get; set; }
        public string NombreDeCarrito { get; set; }
        public string Descripcion { get; set; }
        public string Total { get; set; }
        public string Subtotal { get; set; }
        public string TotalEnvio { get; set; }
        public bool? Activo { get; set; }
        public string? imageUrl { get; set; }
        public long? cantidad { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
