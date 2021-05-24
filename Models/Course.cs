using System;
using System.Collections.Generic;
using System.Linq;
using System.Threading.Tasks;

namespace ProiectFinal.ClientApp.Model
{
    public class Course
    {
    public Guid ID { get; set; }
    public string Name { get; set; }
    public int Credits { get; set;  }
    public string Teacher { get; set; }
    public char Classroom { get; set; }
    public int Enrolled { get; set; }
  }
}
