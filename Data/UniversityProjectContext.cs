using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;
using Microsoft.EntityFrameworkCore;
using ProiectFinal.ClientApp.Model;

namespace UniversityProject.Data
{
    public class UniversityProjectContext : DbContext
    {
        public UniversityProjectContext (DbContextOptions<UniversityProjectContext> options)
            : base(options)
        {
        }

        public DbSet<ProiectFinal.ClientApp.Model.Student> Student { get; set; }

        public DbSet<ProiectFinal.ClientApp.Model.Teacher> Teacher { get; set; }

        public DbSet<ProiectFinal.ClientApp.Model.Course> Courses { get; set; }
    }
}
