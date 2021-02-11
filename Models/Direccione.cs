using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Direccione
    {
        public long IdDireccion { get; set; }
        public string Nombre { get; set; }
        public string Ubicacion { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
