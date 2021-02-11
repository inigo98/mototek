using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Estado
    {
        public long IdEstados { get; set; }
        public string Nombre { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
