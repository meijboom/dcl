
using System;
using System.Collections.Generic;
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
        internal static string MakeComponentCompany()
        // create a random string from 2 lists.
        {
            var companyname = GetRandom(compPrefix);
            var suffix = GetRandom(compSuffix);
            return companyname + suffix;
        }
        internal static string MakeComponentCategory()
        // Choose random Category
        {
            return GetRandom(compCategory);
        }

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
    }
}