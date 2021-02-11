using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Cuenta
    {
        public long IdCuentas { get; set; }
        public string Nombre { get; set; }
        public string Descripcion { get; set; }
        public string Usuario { get; set; }
        public string Contrasena { get; set; }
        public bool? Activo { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
