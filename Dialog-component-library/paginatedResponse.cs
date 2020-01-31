using System.Collections.Generic;
using System.Linq;

namespace Dialog_component_library
{
    public class PaginatedResponse<T>
    {
        public PaginatedResponse(IEnumerable<T> data, int i, int len) 
        {
            // paginated respons (argumentList, pagenumber, length of pagination)
            // ex: PG(Components, pagina 1, 100 components each page.)
            Data = data.Skip(( i - 1 ) * len).Take(len).ToList();
            Total = data.Count();
        }

        public int Total { get; set; }
        public IEnumerable<T> Data { get; set; }
    }
}