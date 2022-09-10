using Duende.IdentityServer.EntityFramework.Options;
using Microsoft.AspNetCore.ApiAuthorization.IdentityServer;
using Microsoft.EntityFrameworkCore;
using Microsoft.Extensions.Options;
using Project1.Models;

namespace Project1.Data
{
    public class ApplicationDbContext : ApiAuthorizationDbContext<ApplicationUser>
    {
        public ApplicationDbContext(DbContextOptions options, IOptions<OperationalStoreOptions> operationalStoreOptions)
            : base(options, operationalStoreOptions)
        {
            
    }
        public DbSet<Student> Student { get; set; }
        public DbSet<Usadaders> Usadaders { get; set; }

        public DbSet<Store> Stores { get; set; }

        public DbSet<FoodItem> FoodItems { get; set; }

    }
}