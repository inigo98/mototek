using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Producto
    {
        public long IdProducto { get; set; }
        public string ListaIdVehiculo { get; set; }
        public string ListaIdMarca { get; set; }
        public string ListaIdModelo { get; set; }
        public string ListaIdAno { get; set; }
        public string NombreDeProducto { get; set; }
        public string Descripcion { get; set; }
        public string Precio { get; set; }
        public long? NumeroDeVisitas { get; set; }
        public long? IdImagen { get; set; }
        public bool? BloquearProducto { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
