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
            // paste any tables under here to seed with data
            if(!_ctx.Users.Any())
            {
                SeedUsers(nComponents);
                _ctx.SaveChanges();
            }
            if (!_ctx.Components.Any())
            {
                SeedComponents(nComponents * 3);
                _ctx.SaveChanges();
            }

        }


        private void SeedUsers(int n)
        {
            List<User> users = BuildUserList(n);

            foreach(var user in users)
            {
                _ctx.Users.Add(user);
            }
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
            var rand = new Random();
            
            for(var i = 1; i<= nComponents; i++)
            {
                var companyname = Helpers.MakeComponentCompany();
                var compCategory = Helpers.MakeComponentCategory();
                var compTitle = companyname + compCategory;
                var compPicture = compCategory + "-Picture" ;
                var compHtmlContent = compCategory + "-html";
                var compCssContent = compCategory + "-css";
                var compJsContent = compCategory + "-js";

                var Created_at = Helpers.GetRandComponentCreated();
                var Updated_at = Helpers.GetRandComponentUpdated(Created_at);
                
                var randUserId = rand.Next(1, _ctx.Users.Count());
                var users = _ctx.Users.ToList();

                components.Add(new Component {
                    Id = i,
                    Picture = compPicture,
                    Company = companyname,
                    Title = compTitle,
                    Category = compCategory,
                    HtmlContent = compHtmlContent,
                    CssContent = compCssContent,
                    JsContent = compJsContent,
                    created_at = Created_at,
                    updated_at = Updated_at,
                    User = Helpers.GetRandomUser(_ctx)
                });
            }
            return components;
        }

        // ------ Build User list
                private List<User> BuildUserList(int nUsers)
        {
            var users = new List<User>();

            for(var i = 1; i<= nUsers; i++)
            {
                var firstname = Helpers.MakeUserFirstName();
                var lastname = Helpers.MakeUserLasttName();
                var company = Helpers.MakeComponentCompany();
                var compDate = new DateTime().Date;

                users.Add(new User {
                    Id = i,
                    FirstName = firstname,
                    LastName = lastname,
                    Company = company,
                    created_at = compDate
                });
            }
            return users;
        }
    }
}