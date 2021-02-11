using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Archivo
    {
        public long IdArchivo { get; set; }
        public string PathArchivo { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
