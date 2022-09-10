﻿using System.ComponentModel.DataAnnotations;

namespace Project1.Models
{
    public class Student
    {
        [Key]
        public int Id { get; set; }

        public string Name { get; set; }

        public string IdNumber { get; set; }

        public virtual List<Usadaders> users { get; set; }

    }
}
