﻿using System;
using System.Collections.Generic;

#nullable disable

namespace mototek.Models
{
    public partial class Transferencium
    {
        public long IdTransferencia { get; set; }
        public string Clabe { get; set; }
        public bool? Activo { get; set; }
        public DateTime? FechaDeCreacion { get; set; }
        public DateTime? FechaDeModificacion { get; set; }
        public bool? Pagado { get; set; }
    }
}
