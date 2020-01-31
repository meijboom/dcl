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


        // [HttpGet("ByUser", Name="MyComponents")]
        // public IActionResult ByUser()
        // {
        //     var companies = _ctx.Components.Include(o => o.User.Id).ToList();

        //     var groupedResult = companies.GroupBy(o => o.Category)
        //     .ToList()
        //     .Select(grp => new {
        //         State = grp.Key,
        //         Total = grp.Sum(x => x.Total)
        //         }).OrderByDescending( res  => res.Total)
        //         .ToList();
            
        //     return Ok(groupedResult);
        // }

        // [HttpGet("ByCompany")]
        // public IActionResult ByCompany()
        // {
        //     var companies = _ctx.Components.Include(o => o.Company).ToList();

        //     var groupedResult = companies.GroupBy(o => o.Company)
        //     .ToList()
        //     .Select(grp => new {
        //         State = grp.Key,
        //         Total = grp.Sum(x => x.Total)
        //         }).OrderByDescending( res  => res.Total)
        //         .ToList();
            
        //     return Ok(groupedResult);
        // }

        // [HttpGet("ByCategory", Name="ByCategory")]
        // public IActionResult ByCategory()
        // {
        //     var companies = _ctx.Components.Include(o => o.Category).ToList();

        //     var groupedResult = companies.GroupBy(o => o.Category)
        //     .ToList()
        //     .Select(grp => new {
        //         State = grp.Key,
        //         Total = grp.Sum(x => x.Total)
        //         }).OrderByDescending( res  => res.Total)
        //         .ToList();

        //     return (groupedResult);
        // }
    }
}