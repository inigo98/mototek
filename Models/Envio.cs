using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Envio
    {
        public long IdEnvio { get; set; }
        public string Precio { get; set; }
        public long? IdEstado { get; set; }
        public string TiempoDeEntrega { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
        public string? Estado { get; set; }
    }
}
