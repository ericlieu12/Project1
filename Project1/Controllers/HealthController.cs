using Microsoft.AspNetCore.Authorization;
using Microsoft.AspNetCore.Mvc;
using Microsoft.EntityFrameworkCore;
using Project1.Data;
using Project1.Models;

namespace Project1.Controllers
{
  
    [ApiController]
    [Route("api/[controller]")]
    public class HealthController : ControllerBase
    {
       
        private readonly ApplicationDbContext _context;

        public HealthController(ApplicationDbContext context)
        {
            _context = context;
        }


        [HttpPost]
        [Route("getValue")]
        public async Task<ActionResult<String>> getValue([FromBody] object cost)
        {

            List<Store> stores = _context.Stores.Include(b => b.FoodItem).ToList();


            //choose a store

            var store = stores[1];

            //get items from store

            var foodItems = store.FoodItem.ToList();

            //pick cheapest items


            return "aa";




        }

    }
}