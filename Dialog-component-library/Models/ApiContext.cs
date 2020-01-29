using Microsoft.EntityFrameworkCore;

namespace Dialog_component_library.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

        public DbSet<Component> Components { get; set; }

    }
}