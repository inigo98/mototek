using System;
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
    public class CarritoController : ControllerBase
    {
        // GET: api/Carrito
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
                    var data = db.Carritos.ToList();
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

        // GET api/Carrito/5
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
                    Carrito data = db.Carritos.FromSqlRaw("Select * from Carritos where IdCarrito = @Id", idSearch)
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

        // POST api/Carrito
        [HttpPost]
        public IActionResult Post([FromBody] Carrito value)
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
                    
                        new SqlParameter("@IDUSUARIO", value.IdUsuario),
                        new SqlParameter("@IDDIRECCION", value.IdDireccion),
                        new SqlParameter("@NOMBREDECARRITO", value.NombreDeCarrito),
                        new SqlParameter("@DESCRIPCION", value.Descripcion),
                        new SqlParameter("@TOTAL", value.Total),
                        new SqlParameter("@SUBTOTAL", value.Subtotal),
                        new SqlParameter("@TOTALENVIO", value.TotalEnvio),
                        new SqlParameter("@ACTIVO", value.Activo),
                        new SqlParameter("@LISTADEPRODUCTOS", value.ListaDeProductos),
                        new SqlParameter("@FECHADECREACION", DateTime.Now),
                        new SqlParameter("@FECHADEMODIFICACION", DateTime.Now),
                    };
                    var data = db.Database.ExecuteSqlRaw("INSERT INTO [dbo].[CARRITOS] ([IdUsuario],[IdDireccion],[NombreDeCarrito],[Descripcion],[Total],[Subtotal],[TotalEnvio],[Activo],[ListaDeProductos],[FechaDeCreacion],[FechaDeModificacion]) VALUES (@IDUSUARIO, @IDDIRECCION, @NOMBREDECARRITO, @DESCRIPCION, @TOTAL, @SUBTOTAL, @TOTALENVIO, @ACTIVO, @LISTADEPRODUCTOS, @FECHADECREACION, @FECHADEMODIFICACION)", sqlParams);
                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", "12345"),
                        new SqlParameter("@TABLE", "CARRITOS"),
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

        // PUT api/Carrito/5
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
                        new SqlParameter("@FIELDTOCHECK", "IdCarrito"),
                        new SqlParameter("@TABLE", "CARRITOS"),
                    };

                    var data = db.Database.ExecuteSqlRaw("[dbo].[sp_updateFromTable] @ID, @VALUE, @FIELD, @USUARIO, @FIELDTOCHECK, @TABLE", sqlParams);

                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", "12345"),
                        new SqlParameter("@TABLE", "CARRITOS"),
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

        // DELETE api/Carrito/5
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
                        new SqlParameter("@TABLE", "CARRITOS"),
                        new SqlParameter("@FIELD", "IdCarrito"),
                    };
                    var list = db.Database.ExecuteSqlRaw("[dbo].[sp_deleteFromTable] @ID, @TABLE, @FIELD", sqlParams);


                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", "12345"),
                        new SqlParameter("@TABLE", "CARRITOS"),
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
