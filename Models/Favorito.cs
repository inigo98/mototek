using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Favorito
    {
        public long IdFavoritos { get; set; }
        public long? IdUsuario { get; set; }
        public string ListaDeFavoritos { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
    }
}
