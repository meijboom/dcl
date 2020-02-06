using System;
using System.Linq;
using Dialog_component_library.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Dialog_component_library.Controllers
{
    [Route("api/[controller]")]
    public class DashboardController : Controller 
    {
        private readonly ApiContext _ctx;

        public DashboardController(ApiContext ctx)
        {
            _ctx = ctx;
        }
    
    }
}