using System;
using System.Collections.Generic;
using System.Linq;
using Dialog_component_library.Models;

namespace Dialog_component_library
{
    public class DataSeed
    {
        private readonly ApiContext _ctx;

        public DataSeed(ApiContext ctx)
        {
            //ctx = db context
            _ctx = ctx;
        }
        public void SeedData(int nComponents) 
        {
            // paste any tables under here
            if (!_ctx.Components.Any())
            {
                SeedComponents(nComponents);
            }
            _ctx.SaveChanges();
        }

        private void SeedComponents(int n)
        {
            List<Component> components = BuildComponentList(n);

            foreach(var component in components)
            {
                _ctx.Components.Add(component);
            }
        }

        private List<Component> BuildComponentList(int nComponents)
        {
            var components = new List<Component>();
            for(var i = 1; i<= nComponents; i++)
            {
                var companyname = Helpers.MakeComponentCompany();
                var compCategory = Helpers.MakeComponentCategory();
                var compPicture = compCategory + "-Picture" ;
                var compHtmlContent = compCategory + "-html";
                var compCssContent = compCategory + "-css";
                var compJsContent = compCategory + "-js";
                var compDate = new DateTime();


                components.Add(new Component {
                    Id = i,
                    Picture = compPicture,
                    Company = companyname,
                    Category = compCategory,
                    HtmlContent = compHtmlContent,
                    CssContent = compCssContent,
                    JsContent = compJsContent,
                    created_at = compDate,
                    updated_at = compDate,
                    user_id = 1
                });
            }
            return components;
        }
    }
}