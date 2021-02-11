using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Usuario
    {
        public long IdUsuario { get; set; }
        public long? IdRol { get; set; }
        public string Nombre { get; set; }
        public string Apellido { get; set; }
        public string Usuario1 { get; set; }
        public string Correo { get; set; }
        public string Contrasena { get; set; }
        public string Telefono { get; set; }
        public long? IdDireccion { get; set; }
        public long? IdDireccionFavorita { get; set; }
        public bool? Bloquear { get; set; }
        public bool? RecibirNotificaciones { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
