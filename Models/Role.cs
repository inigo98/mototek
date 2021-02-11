using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Role
    {
        public long IdRol { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
