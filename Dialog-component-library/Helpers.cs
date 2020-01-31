
using System;
using System.Collections.Generic;
using System.Linq;
using Dialog_component_library.Models;

namespace Dialog_component_library
{
    public class Helpers
    {
        private static Random _rand = new Random();


        private static string GetRandom(IList<string> items)
        // Gets a list input, and returns a random string/int from the list
        {
            return items[_rand.Next(items.Count)];
        }
//------------ Component fillers
        internal static string MakeComponentCompany()
        // create a random string from 2 lists.
        {
            var companyname = GetRandom(compPrefix);
            var suffix = GetRandom(compSuffix);
            return companyname + " " + suffix;
        }
        internal static string MakeComponentCategory()
        // Choose random Category
        {
            return GetRandom(compCategory);
        }
//------------- User filler
        internal static string MakeUserFirstName()
        // create a random name.
        {
            var firstname = GetRandom(FirstNames);
            return firstname;
        }
        internal static string MakeUserLasttName()
        // create a random name.
        {
            var lastname = GetRandom(LastNames);
            return lastname;
        }



        //---------- GET RANDOM USER
        public static User GetRandomUser(ApiContext ctx)
        {
            var randomId = _rand.Next(1, ctx.Users.Count());
            return ctx.Users.First(c => c.Id == randomId);
        }

        //------- GET RANDOM DATETIME CREATED

        internal static DateTime GetRandComponentCreated()
        {
            var end = DateTime.Now;
            var start = end.AddDays(-90);

            TimeSpan possibleSpan = end - start;
            TimeSpan newSpan = new TimeSpan(0, _rand.Next(0, (int)possibleSpan.TotalMinutes), 0);

            return start + newSpan;
        }

        //--------GET RANDOM DATETIME PLACED 
           public static DateTime? GetRandComponentUpdated(DateTime placed)
        {
            var now = DateTime.Now;
            var minLeadTime = TimeSpan.FromDays(7);
            var timePassed = now - placed;

            if (timePassed < minLeadTime)
            {
                return null;
            }

            return placed.AddHours(_rand.Next(10, 90));
        }

//------ LISTS ------------------------------------
        private static readonly List<string> compPrefix = new List<string>()
        //random company names
        {
            "MacDonalds",
            "Eneco",
            "ING",
            "ABN-AMRO",
            "Apple",
            "Microsoft",
            "Facebook",
            "DialogGroep",
            "CCM-Masters",
            "Camelbak"
        };
        private static readonly List<string> compSuffix = new List<string>()
        // random suffix
        {
            "B.v.",
            "Co.",
            "Holding"
        };
        private static readonly List<string> compCategory = new List<string>()
        // random suffix
        {
            "Button",
            "Form",
            "Textfield"
        };

        // USER DATA ----------------------

        private static readonly List<string> FirstNames = new List<string>()
        //random company names
        {
            "Arie",
            "Bart",
            "Cornelis",
            "Dennis",
            "Elly",
            "Frederik",
            "Georgina",
            "Harry",
            "Ilias",
            "Jessica"
        };

        private static readonly List<string> LastNames = new List<string>()
        //random company names
        {
            "Smit",
            "Vreeswijk",
            "Parlevliet",
            "Meijboom",
            "Bot",
            "Ferrari",
            "Lamboghini",
            "Bakker",
            "Cevher",
            "Maas"
        };
    }
}