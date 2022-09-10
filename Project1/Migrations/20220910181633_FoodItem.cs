using Microsoft.EntityFrameworkCore.Migrations;

#nullable disable

namespace Project1.Migrations
{
    public partial class FoodItem : Migration
    {
        protected override void Up(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.CreateTable(
                name: "Stores",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Address = table.Column<string>(type: "nvarchar(max)", nullable: false)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_Stores", x => x.Id);
                });

            migrationBuilder.CreateTable(
                name: "FoodItems",
                columns: table => new
                {
                    Id = table.Column<int>(type: "int", nullable: false)
                        .Annotation("SqlServer:Identity", "1, 1"),
                    Name = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    StoreNameID = table.Column<int>(type: "int", nullable: false),
                    Protein = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fat = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Carbs = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VitaminA = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VitaminB12 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VitaminB6 = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VitaminE = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    VitaminK = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Calcium = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Iron = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Fiber = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    Magnesium = table.Column<string>(type: "nvarchar(max)", nullable: false),
                    UPC = table.Column<int>(type: "int", nullable: false),
                    StoreId = table.Column<int>(type: "int", nullable: true)
                },
                constraints: table =>
                {
                    table.PrimaryKey("PK_FoodItems", x => x.Id);
                    table.ForeignKey(
                        name: "FK_FoodItems_Stores_StoreId",
                        column: x => x.StoreId,
                        principalTable: "Stores",
                        principalColumn: "Id");
                });

            migrationBuilder.CreateIndex(
                name: "IX_FoodItems_StoreId",
                table: "FoodItems",
                column: "StoreId");
        }

        protected override void Down(MigrationBuilder migrationBuilder)
        {
            migrationBuilder.DropTable(
                name: "FoodItems");

            migrationBuilder.DropTable(
                name: "Stores");
        }
    }
}
