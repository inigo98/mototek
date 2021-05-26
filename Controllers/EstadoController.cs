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
    public class EstadoController : ControllerBase
    {
        // GET: api/Estado
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
                    var data = db.Estados.ToList();
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

        // GET api/Estado/5
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
                    Estado data = db.Estados.FromSqlRaw("Select * from estados where IdEstados = @Id", idSearch)
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

        // POST api/Estado
        [HttpPost]
        public IActionResult Post([FromBody] Estado value)
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
                        new SqlParameter("@IDESTADOS", value. IdEstados),
                        new SqlParameter("@NOMBRE", value.Nombre),
                        new SqlParameter("@FECHADECREACION", DateTime.Now),
                        new SqlParameter("@FECHADEMODIFICACION", DateTime.Now),
                    };
                    var data = db.Database.ExecuteSqlRaw("INSERT INTO [dbo].[ESTADOS] ([Nombre],[FechaDeCreacion],[FechaDeModificacion]) VALUES (@NOMBRE, @FECHADECREACION, @FECHADEMODIFICACION)", sqlParams);

                    /*
                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", "0"),
                        new SqlParameter("@TABLE", "ESTADOS"),
                        new SqlParameter("@FIELD", "AGREGO"),
                        new SqlParameter("@ANTERIOR", ""),
                        new SqlParameter("@NUEVO", ""),
                        new SqlParameter("@DATE", ""),
                    };
                    db.Database.ExecuteSqlRaw("[dbo].[sp_insertIntoLogs] @IDUSER, @TABLE, @FIELD, @ANTERIOR, @NUEVO, @DATE", sqlParamsLogs);
                    */

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

        // PUT api/Estado/5
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
                        new SqlParameter("@FIELDTOCHECK", "IdEstados"),
                        new SqlParameter("@TABLE", "ESTADOS"),
                    };

                    var data = db.Database.ExecuteSqlRaw("[dbo].[sp_updateFromTable] @ID, @VALUE, @FIELD, @USUARIO, @FIELDTOCHECK, @TABLE", sqlParams);
                    
                    /*
                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", value.usuario),
                        new SqlParameter("@TABLE", "ESTADOS"),
                        new SqlParameter("@FIELD", value.campo),
                        new SqlParameter("@ANTERIOR", ""),
                        new SqlParameter("@NUEVO", value.valor),
                        new SqlParameter("@DATE", ""),
                    };
                    db.Database.ExecuteSqlRaw("[dbo].[sp_insertIntoLogs] @IDUSER, @TABLE, @FIELD, @ANTERIOR, @NUEVO, @DATE", sqlParamsLogs);
                    */

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

        // DELETE api/Estado/5
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
                        new SqlParameter("@TABLE", "ESTADOS"),
                        new SqlParameter("@FIELD", "IdEstados"),
                    };
                    var list = db.Database.ExecuteSqlRaw("[dbo].[sp_deleteFromTable] @ID, @TABLE, @FIELD", sqlParams);

                    /*
                    SqlParameter[] sqlParamsLogs = new SqlParameter[]
                    {
                        new SqlParameter("@IDUSER", "0"),
                        new SqlParameter("@TABLE", "ESTADOS"),
                        new SqlParameter("@FIELD", "BORRO"),
                        new SqlParameter("@ANTERIOR", id),
                        new SqlParameter("@NUEVO", ""),
                        new SqlParameter("@DATE", ""),
                    };
                    db.Database.ExecuteSqlRaw("[dbo].[sp_insertIntoLogs] @IDUSER, @TABLE, @FIELD, @ANTERIOR, @NUEVO, @DATE", sqlParamsLogs);
                    */

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