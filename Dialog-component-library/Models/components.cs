using System;

namespace Dialog_component_library.Models
{
    public class Component 
    {
        public int id {get; set;}
        public string picture { get; set; }
        public string company {get; set;}
        public string title {get; set;}
        public string category {get; set;}
        public string html_Content {get; set;}
        public string css_Content {get; set;}
        public string js_Content {get; set;}
        public DateTime created_at { get; set; }
        public DateTime? updated_at { get; set; }
        public int user_id { get; set; }
    }
}