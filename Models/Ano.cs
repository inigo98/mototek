using System;
using System.Collections.Generic;
using System.ComponentModel.DataAnnotations;

#nullable disable

namespace mototek.Models
{
    public partial class Ano
    {
        [Key]
        public long IdAnos { get; set; }
        public string NombreDeAno { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
