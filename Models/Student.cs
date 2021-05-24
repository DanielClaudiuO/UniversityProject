using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectFinal.ClientApp.Model
{
    public class Student
    {
    public Guid ID { get; set; }
    public string FirstName { get; set; }
    public string LastName { get; set; }
    public int Age { get; set; }
    public double Average { get; set; }
    public string Faculty { get; set; }
  }
}
