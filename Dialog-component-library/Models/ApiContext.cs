using Microsoft.EntityFrameworkCore;

namespace Dialog_component_library.Models
{
    public class ApiContext : DbContext
    {
        public ApiContext(DbContextOptions<ApiContext> options) : base(options) { }

        public DbSet<Component> Components { get; set; }
        public DbSet<User> Users { get; set; }

        protected override void OnModelCreating(ModelBuilder modelBuilder)
    {
        modelBuilder.Entity<Component>()
            .HasOne(p => p.User)
            .WithMany(b => b.Components)
            .HasForeignKey(b => b.UserForeignKey);
    }
    }
}