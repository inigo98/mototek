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
        public string ListaDeProducto { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
