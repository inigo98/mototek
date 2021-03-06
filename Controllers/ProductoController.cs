﻿using System;
using System.Linq;
using Microsoft.AspNetCore.Mvc;
using mototek.Models;
using mototek.Models.NewFolder;
using Microsoft.EntityFrameworkCore;
using Microsoft.Data.SqlClient;

namespace mototek.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class ProductoController : ControllerBase
    {
        // GET: api/Producto
        [HttpGet]
        public IActionResult Get()
        {
            Respuesta resp = new Respuesta();
            resp.status = "Error";
            resp.data = null;
            try
            {
                using (DB_A6ED12_testmototekDBContext db = new DB_A6ED12_testmototekDBContext())
                {
                    var data = db.Productos.ToList();
                    resp.status = "Ok";
                    resp.message = "Success";
                    resp.data = data;
                    return Ok(resp);
                }
            }
            catch (Exception message)
            {
                resp.message = message.Message;
                return BadRequest(resp);
            }
        }

        // GET api/Producto/5
        [HttpGet("{id}")]
        public IActionResult Get(int id)
        {
            Respuesta resp = new Respuesta();
            resp.status = "Error";
            resp.data = null;
            try
            {
                using (DB_A6ED12_testmototekDBContext db = new DB_A6ED12_testmototekDBContext())
                {
                    var idSearch = new SqlParameter("Id", id);
                    Producto data = db.Productos.FromSqlRaw("Select * from Productos where IdProducto = @Id", idSearch)
                        .FirstOrDefault();
                    resp.status = "Ok";
                    resp.message = "Success";
                    resp.data = data;
                    return Ok(resp);
                }
            }
            catch (Exception message)
            {
                resp.message = message.Message;
                return BadRequest(resp);
            }
        }

        // POST api/Producto
        [HttpPost]
        public IActionResult Post([FromBody] Producto value)
        {
            Respuesta resp = new Respuesta();
            resp.status = "Error";
            resp.data = null;
            try
            {
                using (DB_A6ED12_testmototekDBContext db = new DB_A6ED12_testmototekDBContext())
                {
                    SqlParameter[] sqlParams = new SqlParameter[]
                    {
                        new SqlParameter("@PRODUCTOS", value.IdProducto),
                        new SqlParameter("@LISTAIDVEHICULO", value.ListaIdVehiculo),
                        new SqlParameter("@LISTAIDMARCA", value.ListaIdMarca),
                        new SqlParameter("@LISTAIDMODELO", value.ListaIdModelo),
                        new SqlParameter("@LISTAIDANO", value.ListaIdAno),
                        new SqlParameter("@NOMBREDEPRODUCTO", value.NombreDeProducto),
                        new SqlParameter("@DESCRIPCION", value.Descripcion),
                        new SqlParameter("@PRECIO", value.Precio),
                        new SqlParameter("@NUMERODEVISITAS", value. NumeroDeVisitas),
                        new SqlParameter("@IDIMAGEN", value.IdImagen),
                        new SqlParameter("@BLOQUEARPRODUCTO", value.BloquearProducto),
                        new SqlParameter("@VEHICULOTEXT", value.IdVehiculoText),
                        new SqlParameter("@MARCATEXT", value.IdMarcaText),
                        new SqlParameter("@MODELOTEXT", value.IdModeloText),
                        new SqlParameter("@ANOTEXT", value.IdAnoText),
                        new SqlParameter("@STOCK", value.Stock),
                        new SqlParameter("@NUMERODECOMPRADOS", value.NumeroDeComprados),
                        new SqlParameter("@FECHADECREACION", DateTime.Now),
                        new SqlParameter("@FECHADEMODIFICACION", DateTime.Now),
                    };
                    var data = db.Database.ExecuteSqlRaw("INSERT INTO [dbo].[PRODUCTOS] ([ListaIdVehiculo],[ListaIdMarca],[ListaIdModelo],[ListaIdAno],[NombreDeProducto],[Descripcion],[Precio],[NumeroDeVisitas],[IdImagen],[BloquearProducto],[IdAnoText],[IdVehiculoText],[IdMarcaText],[IdModeloText],[Stock],[numeroDeComprados] ,[FechaDeCreacion],[FechaDeModificacion]) VALUES (@ListaIdVehiculo, @ListaIdMarca,@ListaIdModelo, @ListaIdAno, @NombreDeProducto, @Descripcion, @Precio, @NumeroDeVisitas, @IdImagen, @BloquearProducto, @ANOTEXT, @VEHICULOTEXT, @MARCATEXT, @MODELOTEXT, @STOCK, @NUMERODECOMPRADOS, @FechaDeCreacion, @FechaDeModificacion)", sqlParams);

                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", "0"),
                        new SqlParameter("@TABLE", "PRODUCTOS"),
                        new SqlParameter("@FIELD", "AGREGO"),
                        new SqlParameter("@ANTERIOR", ""),
                        new SqlParameter("@NUEVO", ""),
                        new SqlParameter("@DATE", ""),
                    };
                    db.Database.ExecuteSqlRaw("[dbo].[sp_insertIntoLogs] @IDUSER, @TABLE, @FIELD, @ANTERIOR, @NUEVO, @DATE", sqlParamsLogs);

                    resp.status = "Ok";
                    resp.message = "Success";
                    resp.data = data;
                    return Ok(resp);
                }
            }
            catch (Exception message)
            {
                resp.message = message.Message;
                return BadRequest(resp);
            }
        }

        // PUT api/Producto/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Update value)
        {
            Respuesta resp = new Respuesta();
            resp.status = "Error";
            resp.data = null;
            try
            {
                using (DB_A6ED12_testmototekDBContext db = new DB_A6ED12_testmototekDBContext())
                {
                    SqlParameter[] sqlParams = new SqlParameter[]
                    {
                        new SqlParameter("@FIELD", value.campo),
                        new SqlParameter("@VALUE", value.valor),
                        new SqlParameter("@USUARIO", value.usuario),
                        new SqlParameter("@ID", id),
                        new SqlParameter("@FIELDTOCHECK", "IdProducto"),
                        new SqlParameter("@TABLE", "PRODUCTOS"),
                    };

                    var data = db.Database.ExecuteSqlRaw("[dbo].[sp_updateFromTable] @ID, @VALUE, @FIELD, @USUARIO, @FIELDTOCHECK, @TABLE", sqlParams);

                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", value.usuario),
                        new SqlParameter("@TABLE", "PRODUCTOS"),
                        new SqlParameter("@FIELD", value.campo),
                        new SqlParameter("@ANTERIOR", ""),
                        new SqlParameter("@NUEVO", value.valor),
                        new SqlParameter("@DATE", ""),
                    };
                    db.Database.ExecuteSqlRaw("[dbo].[sp_insertIntoLogs] @IDUSER, @TABLE, @FIELD, @ANTERIOR, @NUEVO, @DATE", sqlParamsLogs);

                    resp.status = "Ok";
                    resp.message = "Success";
                    resp.data = data;
                    return Ok(resp);
                }
            }
            catch (Exception message)
            {
                resp.message = message.Message;
                return BadRequest(resp);
            }
        }

        // DELETE api/Producto/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            Respuesta resp = new Respuesta();
            resp.status = "Error";
            resp.data = null;
            try
            {
                using (DB_A6ED12_testmototekDBContext db = new DB_A6ED12_testmototekDBContext())
                {
                    SqlParameter[] sqlParams = new SqlParameter[]
                    {
                        new SqlParameter("@ID", id),
                        new SqlParameter("@TABLE", "PRODUCTOS"),
                        new SqlParameter("@FIELD", "IdProducto"),
                    };
                    var list = db.Database.ExecuteSqlRaw("[dbo].[sp_deleteFromTable] @ID, @TABLE, @FIELD", sqlParams);


                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", "0"),
                        new SqlParameter("@TABLE", "PRODUCTOS"),
                        new SqlParameter("@FIELD", "BORRO"),
                        new SqlParameter("@ANTERIOR", id),
                        new SqlParameter("@NUEVO", ""),
                        new SqlParameter("@DATE", ""),
                    };
                    db.Database.ExecuteSqlRaw("[dbo].[sp_insertIntoLogs] @IDUSER, @TABLE, @FIELD, @ANTERIOR, @NUEVO, @DATE", sqlParamsLogs);

                    resp.status = "Ok";
                    resp.message = "Success";
                    resp.data = list;
                    return Ok(resp);
                }
            }
            catch (Exception message)
            {
                resp.message = message.Message;
                return BadRequest(resp);
            }
        }
    }
}