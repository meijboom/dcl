using System;
using System.Linq;
using Dialog_component_library.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using System.Collections.Generic;
using System.Security.Claims;

namespace Dialog_component_library.Controllers
{
    [Route("api/[controller]")]
    public class AuthController : Controller 
    {
        public IActionResult Authenticate() 
        {
            var dclClaims = new List<Claim>()
            {
                new Claim(ClaimTypes.Name, "Bob"),
                new Claim(ClaimTypes.Email, "Bob@hotmail.com"),
                new Claim("Dcl.Says", "Some text")
            }

            var dclIdentity = new ClaimsIdentity(dclClaims, "DCL Identity");
            var adminIdenty = new ClaimsIdentity(dclClaims, " Identity");
            
            var userPrinciPal = new ClaimsPrincipal(new[] { dclIdentity, adminIdenty});
        }
    }