using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Logcambio
    {
        public long IdLog { get; set; }
        public long? IdUsuario { get; set; }
        public string Tabla { get; set; }
        public string Campo { get; set; }
        public string ValorAnterior { get; set; }
        public string ValorNuevo { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
