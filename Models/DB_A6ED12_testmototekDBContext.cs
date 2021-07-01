using System;
using Microsoft.EntityFrameworkCore;
using Microsoft.EntityFrameworkCore.Metadata;

#nullable disable

namespace mototek.Models
{
    public partial class DB_A6ED12_testmototekDBContext : DbContext
    {
        public DB_A6ED12_testmototekDBContext()
        {
        }

        public DB_A6ED12_testmototekDBContext(DbContextOptions<DB_A6ED12_testmototekDBContext> options)
            : base(options)
        {
        }

        public virtual DbSet<Ano> Anos { get; set; }
        public virtual DbSet<Archivo> Archivos { get; set; }
        public virtual DbSet<Carrito> Carritos { get; set; }
        public virtual DbSet<Cuenta> Cuentas { get; set; }
        public virtual DbSet<Direccione> Direcciones { get; set; }
        public virtual DbSet<Envio> Envios { get; set; }
        public virtual DbSet<Estado> Estados { get; set; }
        public virtual DbSet<Favorito> Favoritos { get; set; }
        public virtual DbSet<Historial> Historials { get; set; }
        public virtual DbSet<Imagene> Imagenes { get; set; }
        public virtual DbSet<Logcambio> Logcambios { get; set; }
        public virtual DbSet<Marca> Marcas { get; set; }
        public virtual DbSet<Modelo> Modelos { get; set; }
        public virtual DbSet<Producto> Productos { get; set; }
        public virtual DbSet<Role> Roles { get; set; }
        public virtual DbSet<Transferencium> Transferencia { get; set; }
        public virtual DbSet<Usuario> Usuarios { get; set; }
        public virtual DbSet<Vehiculo> Vehiculos { get; set; }

        internal Ano FromExpression()
        {
            throw new NotImplementedException();
        }

        protected override void OnConfiguring(DbContextOptionsBuilder optionsBuilder)
        {
            if (!optionsBuilder.IsConfigured)
            {
                optionsBuilder.UseSqlServer("Server=SQL5101.site4now.net;Database=DB_A6ED12_testmototekDB;Trusted_Connection=False;User=DB_A6ED12_testmototekDB_admin;Password=98.12.08mercado");
            }
        }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
        {
            modelBuilder.HasAnnotation("Relational:Collation", "SQL_Latin1_General_CP1_CI_AS");

            modelBuilder.Entity<Ano>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ANOS");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.NombreDeAno).HasMaxLength(50);
            });

            modelBuilder.Entity<Archivo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ARCHIVOS");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.PathArchivo).HasMaxLength(255);
            });

            modelBuilder.Entity<Carrito>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("CARRITOS");

                entity.Property(e => e.Descripcion).HasMaxLength(255);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.NombreDeCarrito).HasMaxLength(50);

                entity.Property(e => e.Subtotal).HasMaxLength(255);

                entity.Property(e => e.Total).HasMaxLength(255);

                entity.Property(e => e.TotalEnvio).HasMaxLength(255);

                entity.Property(e => e.imageUrl).HasMaxLength(255);

                entity.Property(e => e.stock).HasMaxLength(255);

                entity.Property(e => e.IdDireccion).HasMaxLength(255);
            });

            modelBuilder.Entity<Cuenta>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("CUENTAS");

                entity.Property(e => e.Contrasena).HasMaxLength(50);

                entity.Property(e => e.Descripcion).HasMaxLength(50);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.Nombre).HasMaxLength(50);

                entity.Property(e => e.Usuario).HasMaxLength(50);
            });

            modelBuilder.Entity<Direccione>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("DIRECCIONES");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.Nombre).HasMaxLength(50);

                entity.Property(e => e.Ubicacion).HasMaxLength(50);
            });

            modelBuilder.Entity<Envio>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ENVIOS");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.Precio).HasMaxLength(50);

                entity.Property(e => e.TiempoDeEntrega).HasMaxLength(50);

                entity.Property(e => e.Estado).HasMaxLength(50);
            });

            modelBuilder.Entity<Estado>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ESTADOS");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.Nombre).HasMaxLength(50);
            });

            modelBuilder.Entity<Favorito>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("FAVORITOS");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");
            });

            modelBuilder.Entity<Historial>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("HISTORIAL");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.ImageUrl).HasColumnType("text");

                entity.Property(e => e.NombreProducto).HasColumnType("text");

                entity.Property(e => e.status).HasColumnType("text");

                entity.Property(e => e.direccion).HasColumnType("text");

                entity.Property(e => e.email).HasColumnType("text");

                entity.Property(e => e.clabe).HasColumnType("text");

                entity.Property(e => e.comprobacion).HasColumnType("text");
            });

            modelBuilder.Entity<Imagene>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("IMAGENES");

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.PathImagen).HasMaxLength(50);
            });

            modelBuilder.Entity<Logcambio>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("LOGCAMBIOS");

                entity.Property(e => e.Campo).HasMaxLength(255);

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.Tabla).HasMaxLength(50);

                entity.Property(e => e.ValorAnterior).HasMaxLength(255);

                entity.Property(e => e.ValorNuevo).HasMaxLength(255);
            });

            modelBuilder.Entity<Marca>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("MARCAS");

                entity.Property(e => e.Descripcion).HasMaxLength(255);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.NombreDeMarca).HasMaxLength(50);

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");
            });

            modelBuilder.Entity<Modelo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("MODELOS");

                entity.Property(e => e.Descripcion).HasMaxLength(255);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.NombreDeModelo).HasMaxLength(50);
            });

            modelBuilder.Entity<Producto>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("PRODUCTOS");

                entity.Property(e => e.Descripcion).HasMaxLength(255);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.ListaIdAno).HasColumnType("text");

                entity.Property(e => e.ListaIdMarca).HasColumnType("text");

                entity.Property(e => e.ListaIdModelo).HasColumnType("text");

                entity.Property(e => e.ListaIdVehiculo).HasColumnType("text");

                entity.Property(e => e.NombreDeProducto).HasMaxLength(50);

                entity.Property(e => e.IdAnoText).HasColumnType("text");

                entity.Property(e => e.IdMarcaText).HasColumnType("text");

                entity.Property(e => e.IdModeloText).HasColumnType("text");

                entity.Property(e => e.IdVehiculoText).HasColumnType("text");
            });

            modelBuilder.Entity<Role>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("ROLES");

                entity.Property(e => e.Descripcion).HasMaxLength(255);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.Nombre).HasMaxLength(50);
            });

            modelBuilder.Entity<Transferencium>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("TRANSFERENCIA");

                entity.Property(e => e.Clabe).HasMaxLength(50);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");
            });

            modelBuilder.Entity<Usuario>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("USUARIOS");

                entity.Property(e => e.Apellido).HasMaxLength(255);

                entity.Property(e => e.Contrasena).HasMaxLength(255);

                entity.Property(e => e.Correo).HasMaxLength(255);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.Nombre).HasMaxLength(50);

                entity.Property(e => e.Telefono).HasMaxLength(50);

                entity.Property(e => e.IdDireccion).HasMaxLength(50);

                entity.Property(e => e.IdDireccionFavorita).HasMaxLength(50);

                entity.Property(e => e.Usuario1)
                    .HasMaxLength(255)
                    .HasColumnName("Usuario");
            });

            modelBuilder.Entity<Vehiculo>(entity =>
            {
                entity.HasNoKey();

                entity.ToTable("VEHICULOS");

                entity.Property(e => e.Descripcion).HasMaxLength(255);

                entity.Property(e => e.FechaDeCreacion).HasColumnType("datetime");

                entity.Property(e => e.FechaDeModificacion).HasColumnType("datetime");

                entity.Property(e => e.NombreDeVehiculo).HasMaxLength(50);
            });

            OnModelCreatingPartial(modelBuilder);
        }

        partial void OnModelCreatingPartial(ModelBuilder modelBuilder);
    }
}
