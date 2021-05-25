using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Historial
    {
        public long IdHistorial { get; set; }
        public long? IdCarrito { get; set; }
        public long? IdUsuario { get; set; }
        public long? ListaDeProducto { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
        public string? ImageUrl { get; set; }
        public string? NombreProducto { get; set; }
    }
}
