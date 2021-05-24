using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectFinal.ClientApp.Model
{
    public class Teacher
    {
    public Guid ID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public string Course { get; set; }
    public string Email { get; set; }
    public int YearsActive { get; set; }
  }
}
