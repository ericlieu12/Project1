namespace Project1.Models
{
    public class Store
    {
        public int Id { get; set; }
        public string Name { get; set; }
        public string Address { get; set; }
        public virtual List<FoodItem> FoodItem { get; set; }

    }
}
