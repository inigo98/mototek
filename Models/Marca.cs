using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Marca
    {
        public long IdMarca { get; set; }
        public string NombreDeMarca { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public string Descripcion { get; set; }
    }
}
