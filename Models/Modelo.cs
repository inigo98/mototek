using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Modelo
    {
        public long? IdModelo { get; set; }
        public string NombreDeModelo { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
        public string Descripcion { get; set; }
    }
}
