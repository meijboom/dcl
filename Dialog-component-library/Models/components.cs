using System;

namespace Dialog_component_library.Models
{
    public class Component 
    {
        public int Id {get; set;}
        public string Picture { get; set; }
        public string Company {get; set;}
        public string Title {get; set;}
        public string Category {get; set;}
        public string HtmlContent {get; set;}
        public string CssContent {get; set;}
        public string JsContent {get; set;}
        public DateTime created_at { get; set; }
        public DateTime? updated_at { get; set; }
        
        public int UserForeignKey { get; set; }
        public virtual User User { get; set; }
    }
}