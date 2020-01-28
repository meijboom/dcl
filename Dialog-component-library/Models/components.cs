namespace Dialog_component_library.Models
{
    public class Component 
    {
        public int Id {get; set;}
        public string picture { get; set; }
        public string Company {get; set;}
        public string Title {get; set;}
        public string Category {get; set;}
        public string html_Content {get; set;}
        public string css_Content {get; set;}
        public string js_Content {get; set;}
        public string created_at { get; set; }
        public string updated_at { get; set; }
        public int user_id { get; set; }
    }
}