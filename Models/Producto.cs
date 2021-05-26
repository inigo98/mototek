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
        public long? Precio { get; set; }
        public long? NumeroDeVisitas { get; set; }
        public string? IdImagen { get; set; }
        public bool? BloquearProducto { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
        public string? IdVehiculoText { get; set; }
        public string? IdMarcaText { get; set; }
        public string? IdModeloText { get; set; }
        public string? IdAnoText { get; set; }
        public long? Stock { get; set; }
        public long? NumeroDeComprados { get; set; }
    }
}
