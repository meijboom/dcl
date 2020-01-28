using Microsoft.EntityFrameworkCore;

namespace Dialog_component_library.Models
{
    public class ApiContext : DbContext 
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

            public DbSet<Id> Id { get; set;}
            public DbSet<Company> Company { get; set;}
            public DbSet<Title> Title { get; set;}
            public DbSet<Category> Category { get; set;}
            public DbSet<html_Content> html_Content { get; set;}
            public DbSet<css_Content> css_Content { get; set;}
            public DbSet<js_Content> js_Content { get; set;}
    }
}