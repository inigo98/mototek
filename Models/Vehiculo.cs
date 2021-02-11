using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Vehiculo
    {
        public long IdVehiculo { get; set; }
        public string NombreDeVehiculo { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
        public string Descripcion { get; set; }
    }
}
