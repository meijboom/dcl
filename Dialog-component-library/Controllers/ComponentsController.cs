using System;
using System.Linq;
using Dialog_component_library.Models;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;

namespace Dialog_component_library.Controllers
{
    [Route("api/[controller]")]
    public class ComponentsController : Controller
    {
        private readonly ApiContext _ctx;
        public ComponentsController(ApiContext ctx)
        {
            _ctx = ctx;
        }

        //GET api/components  
        // get all components
        [HttpGet]
        public IActionResult GetAllComponents()
        {
            var data = _ctx.Components.OrderBy(c => c.Id);

            return Ok(data);
        }

        //GET api/components/id
        // get a single component
        [HttpGet("{id}", Name = "GetComponent")]
        public IActionResult Get(int id)
        {
            var Component = _ctx.Components.Find(id);
            return Ok(Component);
        }

        // GET api/Component/user/(userID)
        // Get all components from a single user
        [HttpGet("user/{n}")]
        public IActionResult ByUser(int n)
        {
            var Component = _ctx.Components.Where(o => o.UserForeignKey == n);
            if (Component == null)
            {
                return BadRequest();
            }
            return Ok(Component);
        }

                
        // GET api/Component/category/(Category)
        // Get all Components from a single category
        [HttpGet("category/{cat}")]
        public IActionResult ByCategory(string cat)
        {
            var Component = _ctx.Components.Where(o => o.Category == cat);
            if (Component == null)
            {
                return BadRequest();
            }
            return Ok(Component);
        }




        // GET api/Component/pageNumber/pageSize
        [HttpGet("{pageIndex:int}/{pageSize:int}")]
        public IActionResult Get(int pageIndex, int pageSize)
        {
            var data = _ctx.Components.OrderBy(c => c.Id);
            var page = new PaginatedResponse<Component>(data, pageIndex, pageSize);

            var totalCount = data.Count();
            var totalPages = Math.Ceiling((double)totalCount / pageSize);

            var response = new
            {
                Page = page,
                TotalPages = totalPages
            };

            return Ok(response);
        }

        //POST method
        [HttpPost]
        public IActionResult POST([FromBody] Component component)
        {
            if(component == null) 
            {
                return BadRequest();
            }
            System.Console.WriteLine(component);
            System.Console.WriteLine("CREATED COMPONENT");
            _ctx.Components.Add(component);
            _ctx.SaveChanges();

            return CreatedAtRoute("GetComponent", new { id = component.Id }, component);
        }

        // PUT api/Component/5
        [HttpPut("{id}")]
        public IActionResult Put(int id, [FromBody] Component Component)
        {
            if (Component == null || Component.Id != id)
            {
                return BadRequest();
            }

            var updatedComponent = _ctx.Components.FirstOrDefault(c => c.Id == id);

            if (updatedComponent == null)
            {
                return NotFound();
            }
            
            updatedComponent.Id = Component.Id;
            updatedComponent.Picture = Component.Picture;
            updatedComponent.Company = Component.Company;
            updatedComponent.Title = Component.Title;
            updatedComponent.Category = Component.Category;
            updatedComponent.HtmlContent = Component.HtmlContent;
            updatedComponent.CssContent = Component.CssContent;
            updatedComponent.JsContent = Component.JsContent;
            updatedComponent.updated_at = Component.updated_at;
            
            _ctx.SaveChanges();
            return new NoContentResult();
        }

        // DELETE api/order/5
        [HttpDelete("{id}")]
        public IActionResult Delete(int id)
        {
            var component = _ctx.Components.FirstOrDefault(t => t.Id == id);
            if (component == null)
            {
                return NotFound();
            }

            _ctx.Components.Remove(component);
            _ctx.SaveChanges();
            return new NoContentResult();
        }
    }
}