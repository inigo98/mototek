using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Imagene
    {
        public long? IdImagen { get; set; }
        public string PathImagen { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
