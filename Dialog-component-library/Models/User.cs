using System;
using System.Collections.Generic;

namespace Dialog_component_library.Models
{
    public class User 
    {
        public int Id {get; set;}
        public Boolean AdminRights { get; set; }
        public string FirstName { get; set; }
        public string LastName { get; set; }
        public string Company { get; set; }
        public DateTime created_at { get; set; }
        public DateTime? updated_at { get; set; }

        public ICollection<Component> Components { get; set; }
        // public Component Component { get; set; }
        // ICollection -> User has Many Components
        // One to Many Relationship
    }
}