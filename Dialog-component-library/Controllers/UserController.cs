using System.Linq;
using Dialog_component_library.Models;
using Microsoft.AspNetCore.Mvc;

namespace Dialog_component_library.Controllers
{
    [Route("api/[controller]")]
    public class UserController : Controller
    {
        private readonly ApiContext _ctx;
        public UserController(ApiContext ctx)
        {
            _ctx = ctx;
        }

        // GET api/users  
        // get all users
        [HttpGet]
        public IActionResult Get() 
        {
            var data = _ctx.Users.OrderBy(c => c.FirstName);
            // var data2 = _ctx.Users.OrderBy(c => c.C);

            return Ok(data);
        }
        //GET api/components/id
        // get a single component
        [HttpGet("{id}", Name = "GetUser")]
        public IActionResult Get(int id)
        {
            var User = _ctx.Users.Find(id);
            return Ok(User);
        }
    }
}