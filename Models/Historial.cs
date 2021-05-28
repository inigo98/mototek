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
        public string? status { get; set; }
        public string? direccion { get; set; }
        public string? email { get; set; }
        public string? clabe { get; set; }
        public bool? activo { get; set; }
        public string? comprobacion { get; set; }
    }
}
