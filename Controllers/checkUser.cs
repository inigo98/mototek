using System;
using System.Collections.Generic;
using Microsoft.Data.SqlClient;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.AspNetCore.Http;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using mototek.Models;
using mototek.Models.NewFolder;

namespace mototek.Controllers
{
    [Route("api/[controller]")]
    [ApiController]
    public class checkUser : ControllerBase
    {

        // POST api/GETUSUARIO
        [HttpPost]
        public IActionResult Post([FromBody] auxiliar value)
        {
            Respuesta resp = new Respuesta();
            resp.status = "Error";
            resp.data = null;
            try
            {
                using (DB_A6ED12_testmototekDBContext db = new DB_A6ED12_testmototekDBContext())
                {
                    var idSearch = new SqlParameter("Id", value.key1);
                    Usuario data = db.Usuarios.FromSqlRaw("Select * from Usuarios where Correo = @Id", idSearch)
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
    }
}
